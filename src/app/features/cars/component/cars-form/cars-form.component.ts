import {Component, Input, OnInit, Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AddCarDto, CarDto} from '@hau/autogenapi/models';
import {CarDetailsFacade} from '@hau/features/cars/state/car-details/car-details.facade';
import {FormControlType, FormFieldComponent, InputType} from '@hau/shared/component/form-field/form-field.component';
import {AlertController, IonButton, IonContent, IonIcon, IonSpinner, NavController} from '@ionic/angular/standalone';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {filter} from 'rxjs';
import {CatalogSelection, VehicleCatalogSelectComponent} from '@hau/shared/component/vehicle-catalog-select/vehicle-catalog-select.component';
import {RemoveCarPanelComponent} from '@hau/features/cars/remove-car-panel/remove-car-panel.component';
import {
  COLOR_OPTIONS,
  FUEL_TYPE_OPTIONS,
  MAX_PHOTOS_PER_CAR,
  MAX_YEAR_CAR_CREATE,
  MIN_YEAR_CAR_CREATE,
  TRANSMISSION_OPTIONS
} from '@hau/features/cars/cars.constants';
import {daysUntil, formatDate, formatMileage, removeNullProperties} from '@hau/features/cars/cars.utils';
import {addIcons} from 'ionicons';
import {
  addCircleOutline,
  buildOutline,
  bulbOutline,
  calendarOutline,
  carOutline,
  checkmarkCircleOutline,
  chevronDownOutline,
  informationCircleOutline,
  logOutOutline,
  pencilOutline,
  saveOutline,
  shieldCheckmarkOutline,
  speedometerOutline,
  waterOutline
} from 'ionicons/icons';
import {CarService} from '@hau/autogenapi/services';
import {ImageUrlPipe} from '@hau/shared/pipes/image-url.pipe';

type ExistingPhoto = { kind: 'existing'; id: number; url: string; isDefault: boolean };
type NewPhoto      = { kind: 'new'; file: File; url: string; isDefault: boolean };
type PhotoEntry    = ExistingPhoto | NewPhoto;

@UntilDestroy()
@Component({
    selector: 'app-cars-form',
    templateUrl: 'cars-form.component.html',
    styleUrls: ['./cars-form.component.scss'],
    imports: [FormFieldComponent, IonButton, ReactiveFormsModule, IonContent, IonIcon, IonSpinner, ImageUrlPipe, VehicleCatalogSelectComponent, RemoveCarPanelComponent]
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

  photos: PhotoEntry[] = [];
  photoError = '';
  additionalExpanded = false;
  documentsExpanded = false;
  removePanelOpen = false;

  get additionalBadge(): string {
    const v = this.form.value;
    const filled = [v.variant, v.vin, v.fuel_type, v.transmission, v.engine, v.color, v.current_mileage, v.ownership_start_date].filter(Boolean).length;
    return filled > 0 ? `${filled} of 8 filled` : '8 optional fields';
  }

  get documentsBadge(): string {
    const v = this.form.value;
    return (v.last_oil_service_date || v.last_oil_service_mileage) ? 'Oil set' : 'Oil service optional';
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
    private readonly _nav: NavController,
    private readonly _alertCtrl: AlertController
  ) {
    addIcons({
      shieldCheckmarkOutline, buildOutline, carOutline, waterOutline,
      calendarOutline, speedometerOutline, pencilOutline, saveOutline,
      addCircleOutline, bulbOutline, checkmarkCircleOutline,
      chevronDownOutline, informationCircleOutline, logOutOutline,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this as any).isSubmitting = toSignal(this._carFacade.submitting$, { initialValue: false });

    this.form = this._fb.group({
      id: null,
      make: null,
      model: null,
      variant: null,
      license_plate: null,
      nickname: null,
      vin: null,
      year: null,
      fuel_type: null,
      transmission: null,
      engine: null,
      color: null,
      current_mileage: null,
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
    this.form.patchValue(car);
    if (car.photos?.length) {
      this.photos = car.photos.map(p => ({
        kind: 'existing' as const,
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

  setDefault(index: number): void {
    this.photos = this.photos.map((p, i) => ({ ...p, isDefault: i === index }));
  }

  removePhoto(index: number, event: Event): void {
    event.stopPropagation();
    const photo = this.photos[index];

    if (photo.kind === 'existing') {
      this._carService.carControllerDeletePhoto({ photoId: photo.id }).subscribe({
        error: (err) => console.error('Failed to delete photo', err),
      });
    }

    const wasDefault = photo.isDefault;
    this.photos.splice(index, 1);

    if (wasDefault && this.photos.length > 0) {
      this.photos[0] = { ...this.photos[0], isDefault: true };
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
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      return;
    }

    const formValue = this.form.getRawValue();

    if (!formValue.id && !formValue.current_mileage) {
      const confirmed = await this._confirmSaveWithoutMileage();
      if (!confirmed) return;
    }

    this._dispatchSave(formValue);
  }

  private async _confirmSaveWithoutMileage(): Promise<boolean> {
    return new Promise(async resolve => {
      const alert = await this._alertCtrl.create({
        header: 'No mileage entered',
        message: 'Initial mileage improves maintenance tracking, service reminders, and report accuracy. Do you want to continue without it?',
        buttons: [
          {
            text: 'Add mileage',
            role: 'cancel',
            handler: () => resolve(false),
          },
          {
            text: 'Continue without it',
            role: 'confirm',
            handler: () => resolve(true),
          },
        ],
      });
      await alert.present();
    });
  }

  private _dispatchSave(formValue: ReturnType<typeof this.form.getRawValue>): void {
    const newPhotos  = this.photos.filter((p): p is NewPhoto => p.kind === 'new');
    const files      = newPhotos.map(p => p.file);

    const defaultPhoto = this.photos.find(p => p.isDefault);
    let defaultPhotoId: number | null = null;
    let defaultNewPhotoIndex: number | null = null;

    if (defaultPhoto?.kind === 'existing') {
      defaultPhotoId = defaultPhoto.id;
    } else if (defaultPhoto?.kind === 'new') {
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

  onMarkAsSold(): void {
    this.removePanelOpen = false;
    this._carFacade.markAsSold(String(this.form.value.id));
  }

  async onDeletePermanently(): Promise<void> {
    this.removePanelOpen = false;
    const v = this.form.value;
    const name = [v.make, v.model].filter(Boolean).join(' ') || 'această mașină';
    const alert = await this._alertCtrl.create({
      header: 'Delete permanently?',
      message: `All data for <strong>${name}</strong> will be permanently deleted and cannot be recovered.`,
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => this._carFacade.deleteCar(String(v.id)),
        },
      ],
    });
    await alert.present();
  }

  onAddPhotos(files: File[]): void {
    this.photoError = '';
    const remaining = this.MAX_PHOTOS - this.photos.length;

    if (remaining <= 0) {
      this.photoError = `Maximum of ${this.MAX_PHOTOS} photos reached.`;
      return;
    }

    const toProcess = files.slice(0, remaining);
    if (files.length > remaining) {
      this.photoError = `Only ${toProcess.length} photo${toProcess.length !== 1 ? 's' : ''} added — maximum is ${this.MAX_PHOTOS}.`;
    }

    toProcess.forEach(file => {
      if (!file.type.match(/\/(jpg|jpeg|png|gif|webp)$/)) return;
      if (file.size > 10 * 1024 * 1024) return;

      this.resizeImage(file, 1920, 0.8).then(resized => {
        const reader = new FileReader();
        reader.onload = () => {
          const isDefault = this.photos.length === 0;
          this.photos.push({ kind: 'new', file: resized, url: reader.result as string, isDefault });
        };
        reader.readAsDataURL(resized);
      });
    });
  }

  private resizeImage(file: File, maxDimension: number, quality: number): Promise<File> {
    return new Promise(resolve => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        const { width, height } = img;
        const scale = Math.min(1, maxDimension / Math.max(width, height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(width * scale);
        canvas.height = Math.round(height * scale);
        canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
          resolve(blob ? new File([blob], file.name, { type: 'image/jpeg' }) : file);
        }, 'image/jpeg', quality);
      };
      img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
      img.src = url;
    });
  }
}
