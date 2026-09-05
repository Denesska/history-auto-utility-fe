import {Component, Input, OnInit, Signal} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AddCarDto, CarDto, ExtractionResultDto} from '@hau/autogenapi/models';
import {CarDetailsFacade} from '@hau/features/cars/state/car-details/car-details.facade';
import {FormControlType, FormFieldComponent, InputType} from '@hau/shared/component/form-field/form-field.component';
import {AlertController, IonButton, IonContent, IonIcon, IonicSafeString, IonSpinner, NavController} from '@ionic/angular/standalone';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {filter, take} from 'rxjs';
import {CatalogSelection, VehicleCatalogSelectComponent} from '@hau/shared/component/vehicle-catalog-select/vehicle-catalog-select.component';
import {RemoveCarPanelComponent} from '@hau/features/cars/remove-car-panel/remove-car-panel.component';
import {BreadcrumbComponent, BreadcrumbItem} from '@hau/shared/component/breadcrumb/breadcrumb.component';
import {
  COLOR_OPTIONS,
  CURRENCY_OPTIONS,
  FUEL_TYPE_OPTIONS,
  MAX_PHOTOS_PER_CAR,
  MAX_YEAR_CAR_CREATE,
  MIN_YEAR_CAR_CREATE,
  TRANSMISSION_OPTIONS
} from '@hau/features/cars/cars.constants';
import {formatLicensePlate, removeNullProperties} from '@hau/features/cars/cars.utils';
import {daysUntil} from '@hau/shared/utils/date-math.util';
import {formatDate, formatMileage} from '@hau/shared/utils/formatting.util';
import {resizeImage} from '@hau/shared/utils/image-resize.util';
import {addIcons} from 'ionicons';
import {
  addCircleOutline,
  buildOutline,
  bulbOutline,
  calendarOutline,
  carOutline,
  cashOutline,
  checkmarkCircleOutline,
  chevronDownOutline,
  closeOutline,
  informationCircleOutline,
  logOutOutline,
  pencilOutline,
  saveOutline,
  scanOutline,
  shieldCheckmarkOutline,
  speedometerOutline,
  waterOutline
} from 'ionicons/icons';
import {CarService} from '@hau/autogenapi/services';
import {DocumentExtractionService} from '@hau/core/document-extraction.service';
import {ImageUrlPipe} from '@hau/shared/pipes/image-url.pipe';
import {PhotoPickerComponent, PhotoPickerItem} from '@hau/shared/component/photo-picker/photo-picker.component';
import {TranslocoPipe, TranslocoService} from '@ngneat/transloco';

const QUICK_TIPS_DISMISSED_KEY = 'hau_cars_form_quick_tips_dismissed';

/**
 * Formats the license plate (uppercase, grouped by letters/digits) at the single
 * point where its value is set, so the live input, programmatic patches and the
 * form-field's internal re-sync subscription all converge on the same formatted value.
 */
class LicensePlateControl extends FormControl<string | null> {
  override setValue(value: string | null, options?: Parameters<FormControl<string | null>['setValue']>[1]): void {
    super.setValue(value ? formatLicensePlate(value) : value, options);
  }
}

@UntilDestroy()
@Component({
    selector: 'app-cars-form',
    templateUrl: 'cars-form.component.html',
    styleUrls: ['./cars-form.component.scss'],
    imports: [FormFieldComponent, IonButton, ReactiveFormsModule, IonContent, IonIcon, IonSpinner, ImageUrlPipe, VehicleCatalogSelectComponent, RemoveCarPanelComponent, TranslocoPipe, DecimalPipe, BreadcrumbComponent, PhotoPickerComponent]
})
export class CarsFormComponent implements OnInit {
  protected readonly InputType = InputType;
  protected readonly FormControlType = FormControlType;
  protected readonly form!: FormGroup;
  protected readonly isSubmitting!: Signal<boolean>;
  protected readonly MAX_YEAR = MAX_YEAR_CAR_CREATE;
  protected readonly MIN_YEAR = MIN_YEAR_CAR_CREATE;
  protected readonly MAX_PHOTOS = MAX_PHOTOS_PER_CAR;
  protected readonly fuelTypeOptions = FUEL_TYPE_OPTIONS;
  protected readonly transmissionOptions = TRANSMISSION_OPTIONS;
  protected readonly colorOptions = COLOR_OPTIONS;
  protected readonly currencyOptions = CURRENCY_OPTIONS;

  photos: PhotoPickerItem[] = [];
  additionalExpanded = false;
  documentsExpanded = false;
  removePanelOpen = false;
  quickTipsDismissed = localStorage.getItem(QUICK_TIPS_DISMISSED_KEY) === 'true';
  validationAttempted = false;

  scanning = false;
  scanResult: ExtractionResultDto | null = null;
  scanFailed = false;

  get additionalBadge(): string {
    const v = this.form.value;
    const filled = [v.variant, v.vin, v.fuel_type, v.transmission, v.engine, v.color, v.current_mileage, v.purchase_price, v.ownership_start_date].filter(Boolean).length;
    return filled > 0
      ? this._transloco.translate('cars.form.additionalBadge.filled', { count: filled, total: 9 })
      : this._transloco.translate('cars.form.additionalBadge.empty', { total: 9 });
  }

  get documentsBadge(): string {
    const v = this.form.value;
    return this._transloco.translate(
      (v.last_oil_service_date || v.last_oil_service_mileage) ? 'cars.form.documentsBadge.set' : 'cars.form.documentsBadge.optional',
    );
  }

  @Input() set currentCar(currentCar: CarDto | null | undefined) {
    if (currentCar) {
      this.patchForm(currentCar);
    }
  }

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _carFacade: CarDetailsFacade,
    private readonly _carService: CarService,
    private readonly _extractionService: DocumentExtractionService,
    private readonly _nav: NavController,
    private readonly _alertCtrl: AlertController,
    private readonly _transloco: TranslocoService
  ) {
    addIcons({
      shieldCheckmarkOutline, buildOutline, carOutline, waterOutline,
      calendarOutline, speedometerOutline, pencilOutline, saveOutline,
      addCircleOutline, bulbOutline, checkmarkCircleOutline,
      chevronDownOutline, informationCircleOutline, logOutOutline, closeOutline,
      cashOutline, scanOutline,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this as any).isSubmitting = toSignal(this._carFacade.submitting$, { initialValue: false });

    this.form = this._fb.group({
      id: null,
      make: [null, Validators.required],
      model: [null, Validators.required],
      variant: null,
      license_plate: new LicensePlateControl(null),
      nickname: null,
      vin: null,
      year: null,
      fuel_type: '',
      transmission: '',
      engine: null,
      color: '',
      current_mileage: null,
      purchase_price: null,
      purchase_price_currency: ['EUR', Validators.required],
      ownership_start_date: null,
      last_oil_service_date: null,
      last_oil_service_mileage: null,
    });
  }

  ngOnInit(): void {
    this._carFacade.currentCar$.pipe(
      filter(it => !!it),
      untilDestroyed(this)
    ).subscribe((it) => this.patchForm(it));
  }

  patchForm(car?: CarDto | null): void {
    if (!car) return;
    this.form.patchValue({
      ...car,
      fuel_type: car.fuel_type ?? '',
      transmission: car.transmission ?? '',
      color: car.color ?? '',
      purchase_price_currency: car.purchase_price_currency ?? 'EUR',
      ownership_start_date: car.ownership_start_date ? car.ownership_start_date.slice(0, 10) : null,
      last_oil_service_date: car.last_oil_service_date ? car.last_oil_service_date.slice(0, 10) : null,
    });
    if (car.photos?.length) {
      this.photos = car.photos.map(p => ({
        id: p.id,
        url: p.url,
        isDefault: p.is_default,
      }));
      if (!this.photos.some(p => p.isDefault)) {
        this.photos[0] = { ...this.photos[0], isDefault: true };
      }
    }
  }

  get isEditMode(): boolean {
    return !!this.form.value.id;
  }

  get breadcrumbItems(): BreadcrumbItem[] {
    return [
      { label: this._transloco.translate('cars.details.breadcrumb.garage'), action: () => this.cancel() },
      { label: this._transloco.translate(this.isEditMode ? 'cars.form.editVehicle' : 'cars.form.addVehicle') },
    ];
  }

  get previewTitle(): string {
    const v = this.form.value;
    const makeModel = [v.make, v.model].filter(Boolean).join(' ');
    if (v.nickname) return v.nickname;
    return makeModel || 'Your vehicle';
  }

  get previewPlate(): string {
    return (this.form.value.license_plate || '').toUpperCase();
  }

  get previewPhoto(): string {
    const def = this.photos.find(p => p.isDefault);
    return def?.url ?? this.photos[0]?.url ?? '';
  }

  protected readonly daysUntil = daysUntil;
  protected readonly formatDate = formatDate;
  protected readonly formatMileage = formatMileage;

  onPhotoRemoved(photo: PhotoPickerItem): void {
    if (photo.id != null && !photo.file) {
      this._carService.carControllerDeletePhoto({ photoId: photo.id }).subscribe({
        error: (err) => console.error('Failed to delete photo', err),
      });
    }
  }

  onCatalogSelection(sel: CatalogSelection): void {
    this.form.patchValue({
      make: sel.make,
      model: sel.model,
      year: sel.year,
    });
  }

  async saveCar(): Promise<void> {
    this.validationAttempted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      return;
    }

    const formValue = this.normalizeOptionalDropdowns(this.form.getRawValue());

    if (!formValue.id && !formValue.current_mileage) {
      const confirmed = await this._confirmSaveWithoutMileage();
      if (!confirmed) return;
    }

    this._dispatchSave(formValue);
  }

  private async _confirmSaveWithoutMileage(): Promise<boolean> {
    return new Promise(async resolve => {
      const alert = await this._alertCtrl.create({
        header: this._transloco.translate('cars.form.mileageAlert.header'),
        message: this._transloco.translate('cars.form.mileageAlert.message'),
        buttons: [
          {
            text: this._transloco.translate('cars.form.mileageAlert.addMileage'),
            role: 'cancel',
            handler: () => resolve(false),
          },
          {
            text: this._transloco.translate('cars.form.mileageAlert.continueWithoutIt'),
            role: 'confirm',
            handler: () => resolve(true),
          },
        ],
      });
      await alert.present();
    });
  }

  private normalizeOptionalDropdowns(formValue: ReturnType<typeof this.form.getRawValue>): ReturnType<typeof this.form.getRawValue> {
    return {
      ...formValue,
      fuel_type: formValue.fuel_type || null,
      transmission: formValue.transmission || null,
      color: formValue.color || null,
      purchase_price_currency: formValue.purchase_price_currency || 'EUR',
    };
  }

  private _dispatchSave(formValue: ReturnType<typeof this.form.getRawValue>): void {
    const newPhotos  = this.photos.filter(p => !!p.file);
    const files      = newPhotos.map(p => p.file!);

    const defaultPhoto = this.photos.find(p => p.isDefault);
    let defaultPhotoId: number | null = null;
    let defaultNewPhotoIndex: number | null = null;

    if (defaultPhoto && !defaultPhoto.file && defaultPhoto.id != null) {
      defaultPhotoId = defaultPhoto.id;
    } else if (defaultPhoto?.file) {
      defaultNewPhotoIndex = newPhotos.indexOf(defaultPhoto);
    }

    if (formValue.id) {
      const carObj = removeNullProperties({
        ...formValue,
        files: files.length > 0 ? files : undefined,
        default_photo_id: defaultPhotoId,
        default_new_photo_index: defaultNewPhotoIndex,
      });
      this._carFacade.udpateCar(carObj);
    } else {
      const carObj = removeNullProperties<AddCarDto & { files?: File[]; default_new_photo_index?: number }>({
        ...formValue,
        files: files.length > 0 ? files : undefined,
        default_new_photo_index: defaultNewPhotoIndex ?? 0,
      });
      this._carFacade.createCar(carObj);
    }
  }

  saveAndAddAnother(): void {
    this.saveCar();
  }

  cancel(): void {
    this._nav.back();
  }

  dismissQuickTips(): void {
    this.quickTipsDismissed = true;
    localStorage.setItem(QUICK_TIPS_DISMISSED_KEY, 'true');
  }

  onMarkAsSold(): void {
    this.removePanelOpen = false;
    this._carFacade.markAsSold(String(this.form.value.id));
  }

  async onDeletePermanently(): Promise<void> {
    this.removePanelOpen = false;
    const v = this.form.value;
    const name = [v.make, v.model].filter(Boolean).join(' ') || this._transloco.translate('cars.form.deleteAlert.fallbackName');
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('cars.details.deleteAlert.header'),
      message: new IonicSafeString(this._transloco.translate('cars.details.deleteAlert.message', { name })),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.delete'),
          role: 'destructive',
          handler: () => this._carFacade.deleteCar(String(v.id)),
        },
      ],
    });
    await alert.present();
  }

  // ── Scan registration certificate ─────────────────────────────────

  onScanFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;

    this.scanning = true;
    this.scanResult = null;
    this.scanFailed = false;

    // Smaller than the car-photo resize (1920/0.8) — this copy is only sent to the
    // AI extraction endpoint, not stored, so favour a faster upload over image fidelity.
    resizeImage(file, 1600, 0.7).then(resized => {
      this._extractionService.extract(resized)
        .pipe(take(1))
        .subscribe({
          next: result => {
            this.scanning = false;
            this.scanResult = result;
            if (result.detected) this.applyScanResult(result);
          },
          error: () => {
            this.scanning = false;
            this.scanFailed = true;
          },
        });
    });
  }

  private applyScanResult(result: ExtractionResultDto): void {
    const f = result.fields;
    const patch: Record<string, unknown> = {};

    if (f.vehicle_make) patch['make'] = f.vehicle_make;
    if (f.vehicle_model) patch['model'] = f.vehicle_model;
    if (f.manufacture_year) patch['year'] = Number(f.manufacture_year);
    if (f.plate_number) patch['license_plate'] = f.plate_number;
    if (f.vin) patch['vin'] = f.vin;
    if (f.engine_capacity) patch['engine'] = f.engine_capacity;

    const matchedColor = this.matchColorOption(f.color);
    if (matchedColor) patch['color'] = matchedColor;

    const matchedFuel = this.matchFuelTypeOption(f.fuel_type);
    if (matchedFuel) patch['fuel_type'] = matchedFuel;

    this.form.patchValue(patch);
  }

  private matchColorOption(value?: string): string | null {
    if (!value) return null;
    const normalized = value.trim().toLowerCase();
    const found = this.colorOptions.find(o => o.value.toLowerCase() === normalized || o.label.toLowerCase() === normalized);
    return found ? found.value : 'Alt';
  }

  private matchFuelTypeOption(value?: string): string | null {
    if (!value) return null;
    const normalized = value.trim().toUpperCase();
    const found = this.fuelTypeOptions.find(o => o.value === normalized);
    return found ? found.value : null;
  }

  get scanStatusIsWarning(): boolean {
    return this.scanFailed || !this.scanResult?.detected || this.scanResult?.confidence === 'low';
  }

  get scanStatusText(): string {
    if (this.scanFailed) return this._transloco.translate('cars.form.scan.failed');
    if (!this.scanResult) return '';
    if (!this.scanResult.detected) return this._transloco.translate('cars.form.scan.notRecognized');
    return this.scanResult.confidence === 'low'
      ? this._transloco.translate('cars.form.scan.lowConfidence')
      : this._transloco.translate('cars.form.scan.success');
  }
}
