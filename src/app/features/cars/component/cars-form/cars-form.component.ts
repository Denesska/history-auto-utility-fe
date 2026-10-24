import { DefaultCurrencyService } from '@hau/core/currency/default-currency.service';
import { NavigationHistoryService } from '@hau/core/navigation/navigation-history.service';
import { UnsavedChangesService } from '@hau/core/navigation/unsaved-changes.service';
import { ElementRef, inject,
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
  Signal,
  TemplateRef,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AddCarDto, CarDto, ExtractionResultDto } from '@hau/autogenapi/models';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import {
  FormControlType,
  FormFieldComponent,
  InputType,
} from '@hau/shared/component/form-field/form-field.component';
import {
  AlertController,
  IonButton,
  IonContent,
  IonIcon,
  IonicSafeString,
  IonSpinner,
  NavController,
} from '@ionic/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, take } from 'rxjs';
import {
  CatalogSelection,
  VehicleCatalogSelectComponent,
} from '@hau/shared/component/vehicle-catalog-select/vehicle-catalog-select.component';
import { RemoveCarPanelComponent } from '@hau/features/cars/remove-car-panel/remove-car-panel.component';
import {
  BreadcrumbComponent,
  BreadcrumbItem,
} from '@hau/shared/component/breadcrumb/breadcrumb.component';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import {
  COLOR_OPTIONS,
  CURRENCY_OPTIONS,
  FUEL_TYPE_OPTIONS,
  MAX_PHOTOS_PER_CAR,
  MAX_YEAR_CAR_CREATE,
  MIN_YEAR_CAR_CREATE,
  TRANSMISSION_OPTIONS,
  DRIVETRAIN_VALUES,
  OIL_VISCOSITY_OPTIONS,
} from '@hau/features/cars/cars.constants';
import { removeNullProperties } from '@hau/features/cars/cars.utils';
import { daysUntil } from '@hau/shared/utils/date-math.util';
import { formatDate, formatMileage } from '@hau/shared/utils/formatting.util';
import { revealInvalidFields } from '@hau/shared/utils/form-validation';
import { resizeImage } from '@hau/shared/utils/image-resize.util';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  buildOutline,
  bulbOutline,
  calendarOutline,
  cameraOutline,
  carOutline,
  cashOutline,
  checkmarkCircleOutline,
  chevronDownOutline,
  chevronBackOutline,
  chevronForwardOutline,
  checkmarkOutline,
  closeOutline,
  imagesOutline,
  informationCircleOutline,
  logOutOutline,
  pencilOutline,
  scanOutline,
  shieldCheckmarkOutline,
  speedometerOutline,
  waterOutline,
} from 'ionicons/icons';
import { AiQuotaService } from '@hau/core/ai-quota.service';
import { DocumentExtractionService } from '@hau/core/document-extraction.service';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import {
  PhotoPickerComponent,
  PhotoPickerItem,
} from '@hau/shared/component/photo-picker/photo-picker.component';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { ImageSourcePickerComponent, ImageSourceSelection } from '@hau/shared/component/image-source-picker/image-source-picker.component';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { Actions, ofActionSuccessful } from '@ngxs/store';
import { CarDetailsActions } from '@hau/features/cars/state/car-details/car-details.actions';

const QUICK_TIPS_DISMISSED_KEY = 'hau_cars_form_quick_tips_dismissed';

// Cross-field check for the "Initial mileage" (current_mileage) / "Current mileage"
// (actual_mileage) pair — a car can't have driven backwards between the two readings.
// Attached as the form group's own validator (not on either control) so it re-runs on
// every change to either field and surfaces as form.hasError('mileageOrder').
function mileageOrderValidator(group: AbstractControl): ValidationErrors | null {
  const initial = group.get('current_mileage')?.value;
  const current = group.get('actual_mileage')?.value;
  if (initial == null || current == null) return null;
  return Number(current) < Number(initial) ? { mileageOrder: true } : null;
}

@UntilDestroy()
@Component({
  selector: 'app-cars-form',
  templateUrl: 'cars-form.component.html',
  styleUrls: ['./cars-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    LoaderComponent,
    ImageSourcePickerComponent,
    FormFieldComponent,
    IonButton,
    ReactiveFormsModule,
    IonContent,
    IonIcon,
    IonSpinner,
    ImageUrlPipe,
    VehicleCatalogSelectComponent,
    RemoveCarPanelComponent,
    TranslocoPipe,
    DecimalPipe,
    BreadcrumbComponent,
    PhotoPickerComponent,
  ],
})
export class CarsFormComponent implements OnInit, AfterViewInit {
  // Close/save buttons for the shared shell header. This component isn't the
  // routed one (cars-create / cars-edit are), so the routed parent re-registers
  // them on every ionViewWillEnter and clears them on ionViewWillLeave — Ionic
  // caches routed pages, so a second visit re-enters without rebuilding this
  // view. See HeaderActionsService.
  @ViewChild('headerStartActionsTpl')
  readonly headerStartActionsTpl!: TemplateRef<unknown>;
  @ViewChild('headerActionsTpl')
  readonly headerActionsTpl!: TemplateRef<unknown>;

  protected readonly mobileSteps = [
    {
      titleKey: 'cars.form.mobileWizard.identity.title',
      descriptionKey: 'cars.form.mobileWizard.identity.description',
    },
    {
      titleKey: 'cars.form.mobileWizard.personalize.title',
      descriptionKey: 'cars.form.mobileWizard.personalize.description',
    },
    {
      titleKey: 'cars.form.mobileWizard.useful.title',
      descriptionKey: 'cars.form.mobileWizard.useful.description',
    },
    {
      titleKey: 'cars.form.mobileWizard.history.title',
      descriptionKey: 'cars.form.mobileWizard.history.description',
    },
    {
      titleKey: 'cars.form.mobileWizard.review.title',
      descriptionKey: 'cars.form.mobileWizard.review.description',
    },
  ] as const;
  protected mobileStep = 0;
  protected readonly InputType = InputType;
  protected readonly FormControlType = FormControlType;
  protected readonly form!: FormGroup;
  protected readonly isSubmitting!: Signal<boolean>;
  protected readonly MAX_YEAR = MAX_YEAR_CAR_CREATE;
  protected readonly MIN_YEAR = MIN_YEAR_CAR_CREATE;
  protected readonly MAX_PHOTOS = MAX_PHOTOS_PER_CAR;
  protected readonly fuelTypeOptions = FUEL_TYPE_OPTIONS;
  protected readonly transmissionOptions = TRANSMISSION_OPTIONS;
  protected readonly oilViscosityOptions = OIL_VISCOSITY_OPTIONS;
  protected readonly colorOptions = COLOR_OPTIONS;
  private _drivetrainCache: { lang: string; options: { value: string; label: string }[] } | null = null;

  protected get drivetrainOptions(): { value: string; label: string }[] {
    const lang = this._transloco.getActiveLang();
    if (this._drivetrainCache?.lang !== lang) {
      this._drivetrainCache = {
        lang,
        options: DRIVETRAIN_VALUES.map(v => ({
          value: v,
          label: this._transloco.translate('cars.details.fields.drivetrainOptions.' + v),
        })),
      };
    }
    return this._drivetrainCache.options;
  }
  protected readonly currencyOptions = CURRENCY_OPTIONS;

  photos: PhotoPickerItem[] = [];
  additionalExpanded = false;
  documentsExpanded = false;
  removePanelOpen = false;
  quickTipsDismissed =
    localStorage.getItem(QUICK_TIPS_DISMISSED_KEY) === 'true';
  validationAttempted = false;
  deletedPhotoIds: number[] = [];

  private initialPhotosSignature = '';
  private allowNavigation = false;
  private saveAnotherPending = false;

  scanning = false;
  scanningVia: 'camera' | 'gallery' | null = null;
  scanResult: ExtractionResultDto | null = null;
  scanFailed = false;
  // Set when the AI quota guard answered 429 — replaces the generic failure text.
  scanQuotaMessage: string | null = null;

  get additionalBadge(): string {
    const v = this.form.value;
    const filled = [
      v.variant,
      v.vin,
      v.fuel_type,
      v.transmission,
      v.drivetrain,
      v.engine_oil_viscosity,
      v.engine,
      v.color,
      v.current_mileage,
      v.actual_mileage,
      v.purchase_price,
      v.ownership_start_date,
    ].filter(Boolean).length;
    return filled > 0
      ? this._transloco.translate('cars.form.additionalBadge.filled', {
          count: filled,
          total: 10,
        })
      : this._transloco.translate('cars.form.additionalBadge.empty', {
          total: 10,
        });
  }

  get documentsBadge(): string {
    const v = this.form.value;
    return this._transloco.translate(
      v.last_oil_service_date || v.last_oil_service_mileage
        ? 'cars.form.documentsBadge.set'
        : 'cars.form.documentsBadge.optional',
    );
  }

  /** Set only when creating a car directly inside an organization's fleet (from the Organization screen's "company cars" section) — never set for a normal personal car or when editing. */
  @Input() organizationId: number | null = null;

  // Only cars-edit binds [currentCar] — cars-create never does. Used below to tell the
  // ngOnInit currentCar$ subscription apart: an edit host wants that subscription to keep
  // prefilling/refreshing the form, a create host never does (see that subscription's comment).
  private _isEditHost = false;

  @Input() set currentCar(currentCar: CarDto | null | undefined) {
    this._isEditHost = true;
    if (currentCar) {
      this.patchForm(currentCar);
    }
  }

  private readonly _elRef = inject(ElementRef);
  private readonly _navHistory = inject(NavigationHistoryService);
  private readonly _unsaved = inject(UnsavedChangesService);
  private readonly _defaultCurrency = inject(DefaultCurrencyService);

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _carFacade: CarDetailsFacade,
    private readonly _extractionService: DocumentExtractionService,
    private readonly _aiQuota: AiQuotaService,
    private readonly _nav: NavController,
    private readonly _alertCtrl: AlertController,
    private readonly _transloco: TranslocoService,
    private readonly _actions$: Actions,
    private readonly _headerActions: HeaderActionsService,
  ) {
    addIcons({
      shieldCheckmarkOutline,
      buildOutline,
      carOutline,
      waterOutline,
      calendarOutline,
      speedometerOutline,
      pencilOutline,
      checkmarkOutline,
      addCircleOutline,
      bulbOutline,
      checkmarkCircleOutline,
      chevronDownOutline,
      informationCircleOutline,
      logOutOutline,
      closeOutline,
      cashOutline,
      scanOutline,
      chevronBackOutline,
      chevronForwardOutline,
      cameraOutline,
      imagesOutline,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this as any).isSubmitting = toSignal(this._carFacade.submitting$, {
      initialValue: false,
    });

    this.form = this._fb.group({
      id: null,
      make: [null, Validators.required],
      model: [null, Validators.required],
      variant: null,
      license_plate: new FormControl<string | null>(null),
      nickname: null,
      vin: [null, Validators.pattern(/^[A-HJ-NPR-Z0-9]{17}$/i)],
      year: [
        null,
        [
          Validators.min(MIN_YEAR_CAR_CREATE),
          Validators.max(MAX_YEAR_CAR_CREATE),
        ],
      ],
      fuel_type: '',
      transmission: '',
      drivetrain: '',
      engine_oil_viscosity: '',
      engine: null,
      color: '',
      current_mileage: [null, [Validators.min(0), Validators.max(9_999_999)]],
      actual_mileage: [null, [Validators.min(0), Validators.max(9_999_999)]],
      purchase_price: [null, [Validators.min(0), Validators.max(999_999_999)]],
      purchase_price_currency: [this.newCarCurrency(), Validators.required],
      ownership_start_date: null,
      last_oil_service_date: null,
      last_oil_service_mileage: [
        null,
        [Validators.min(0), Validators.max(9_999_999)],
      ],
    }, { validators: mileageOrderValidator });
  }

  ngOnInit(): void {
    this._carFacade.currentCar$
      .pipe(
        filter(it => !!it),
        untilDestroyed(this),
      )
      .subscribe(it => {
        // Edit mode: keep prefilling/refreshing from currentCar$ as before (redundant with the
        // [currentCar] input above firing the same patchForm, harmless, pre-existing). Create
        // mode: currentCar$ now also emits the just-created car (CarDetailsState.createCarSuccess
        // sets it so the car hub page being navigated to has data immediately — see its own
        // comment) — without this guard, this still-mounted create form would briefly patch
        // itself into looking like an edit form (an id appears, breadcrumb/title flip) for the
        // last frame before the page-transition navigates it away, or — on "Save & add another",
        // where there's no navigation at all — visibly, right before resetForAnotherCar() wipes
        // it again. Not wanted either way, so the create form ignores this emission entirely.
        if (this._isEditHost) this.patchForm(it);
      });

    this._actions$
      .pipe(
        ofActionSuccessful(
          CarDetailsActions.CreateCarSuccess,
          CarDetailsActions.UpdateCarSuccess,
        ),
        untilDestroyed(this),
      )
      .subscribe(() => {
        this.form.markAsPristine();
        this.deletedPhotoIds = [];
        this.initialPhotosSignature = this.photoSignature();
        if (this.saveAnotherPending) this.resetForAnotherCar();
      });

    this._actions$
      .pipe(
        ofActionSuccessful(
          CarDetailsActions.CreateCarError,
          CarDetailsActions.UpdateCarError,
        ),
        untilDestroyed(this),
      )
      .subscribe(() => {
        this.allowNavigation = false;
        this.saveAnotherPending = false;
      });
  }

  ngAfterViewInit(): void {
    this.registerHeaderActions();
  }

  // Also called by the routed parent (cars-create / cars-edit) on every
  // ionViewWillEnter — see the ViewChild declarations above.
  registerHeaderActions(): void {
    this._headerActions.setStart(this.headerStartActionsTpl);
    this._headerActions.set(this.headerActionsTpl);
  }

  /** New car: the user's explicit currency preference if the list offers it, else EUR (used cars are priced in EUR; location detection doesn't apply). */
  private newCarCurrency(): string {
    const preferred = this._defaultCurrency.preferredCurrency;
    return preferred && CURRENCY_OPTIONS.some(o => o.value === preferred) ? preferred : 'EUR';
  }

  patchForm(car?: CarDto | null): void {
    if (!car) return;
    this.form.patchValue({
      ...car,
      fuel_type: car.fuel_type ?? '',
      transmission: car.transmission ?? '',
      drivetrain: car.drivetrain ?? '',
      engine_oil_viscosity: car.engine_oil_viscosity ?? '',
      color: car.color ?? '',
      purchase_price_currency: car.purchase_price_currency ?? 'EUR',
      ownership_start_date: car.ownership_start_date
        ? car.ownership_start_date.slice(0, 10)
        : null,
      last_oil_service_date: car.last_oil_service_date
        ? car.last_oil_service_date.slice(0, 10)
        : null,
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
    } else {
      this.photos = [];
    }
    this.deletedPhotoIds = [];
    this.initialPhotosSignature = this.photoSignature();
    this.form.markAsPristine();
  }

  get isEditMode(): boolean {
    return !!this.form.value.id;
  }

  get breadcrumbItems(): BreadcrumbItem[] {
    return [
      {
        label: this._transloco.translate('cars.details.breadcrumb.garage'),
        action: () => this.cancel(),
      },
      {
        label: this._transloco.translate(
          this.isEditMode ? 'cars.form.editVehicle' : 'cars.form.addVehicle',
        ),
      },
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
    if (
      photo.id != null &&
      !photo.file &&
      !this.deletedPhotoIds.includes(photo.id)
    ) {
      this.deletedPhotoIds = [...this.deletedPhotoIds, photo.id];
    }
  }

  onCatalogSelection(sel: CatalogSelection): void {
    this.form.patchValue({
      make: sel.make,
      model: sel.model,
      year: sel.year,
    });
    this.form.markAsDirty();
  }

  async saveCar(addAnother = false): Promise<void> {
    this.validationAttempted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      this.mobileStep = this.firstInvalidMobileStep();
      this._expandSectionsWithErrors();
      // Scrolls to + focuses the first invalid field (after the wizard step / sections rendered).
      revealInvalidFields(this.form, this._elRef);
      return;
    }

    const formValue = this.normalizeOptionalDropdowns(this.form.getRawValue());

    if (!formValue.id && !formValue.current_mileage) {
      const confirmed = await this._confirmSaveWithoutMileage();
      if (!confirmed) return;
    }

    this._dispatchSave(formValue, addAnother);
  }

  private async _confirmSaveWithoutMileage(): Promise<boolean> {
    return new Promise(async resolve => {
      const alert = await this._alertCtrl.create({
        header: this._transloco.translate('cars.form.mileageAlert.header'),
        message: this._transloco.translate('cars.form.mileageAlert.message'),
        buttons: [
          {
            text: this._transloco.translate(
              'cars.form.mileageAlert.addMileage',
            ),
            role: 'cancel',
            handler: () => resolve(false),
          },
          {
            text: this._transloco.translate(
              'cars.form.mileageAlert.continueWithoutIt',
            ),
            role: 'confirm',
            handler: () => resolve(true),
          },
        ],
      });
      await alert.present();
    });
  }

  private normalizeOptionalDropdowns(
    formValue: ReturnType<typeof this.form.getRawValue>,
  ): ReturnType<typeof this.form.getRawValue> {
    return {
      ...formValue,
      fuel_type: formValue.fuel_type || null,
      transmission: formValue.transmission || null,
      drivetrain: formValue.drivetrain || null,
      engine_oil_viscosity:
        formValue.fuel_type === 'ELECTRIC' ? null : formValue.engine_oil_viscosity || null,
      color: formValue.color || null,
      purchase_price_currency: formValue.purchase_price_currency || 'EUR',
    };
  }

  private _dispatchSave(
    formValue: ReturnType<typeof this.form.getRawValue>,
    addAnother = false,
  ): void {
    const newPhotos = this.photos.filter(p => !!p.file);
    const files = newPhotos.map(p => p.file!);

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
        delete_photo_ids:
          this.deletedPhotoIds.length > 0 ? this.deletedPhotoIds : undefined,
        default_photo_id: defaultPhotoId,
        default_new_photo_index: defaultNewPhotoIndex,
      });
      this.allowNavigation = true;
      this._carFacade.udpateCar(carObj);
    } else {
      const carObj = removeNullProperties<
        AddCarDto & {
          files?: File[];
          default_new_photo_index?: number;
          organizationId?: number;
        }
      >({
        ...formValue,
        files: files.length > 0 ? files : undefined,
        default_new_photo_index: defaultNewPhotoIndex ?? 0,
        organizationId: this.organizationId ?? undefined,
      });
      this.saveAnotherPending = addAnother;
      this.allowNavigation = !addAnother;
      this._carFacade.createCar(carObj, !addAnother);
    }
  }

  saveAndAddAnother(): void {
    void this.saveCar(true);
  }

  goToNextMobileStep(): void {
    if (!this.validateMobileStep(this.mobileStep)) return;
    if (this.mobileStep < this.mobileSteps.length - 1) {
      this.mobileStep += 1;
      this.scrollToWizardTop();
    }
  }

  skipMobileStep(): void {
    if (this.mobileStep > 0 && this.mobileStep < this.mobileSteps.length - 1) {
      this.mobileStep += 1;
      this.scrollToWizardTop();
    }
  }

  goToPreviousMobileStep(): void {
    if (this.mobileStep > 0) {
      this.mobileStep -= 1;
      this.scrollToWizardTop();
    }
  }

  goToMobileStep(step: number): void {
    if (step < 0 || step >= this.mobileSteps.length || step > this.mobileStep)
      return;
    this.mobileStep = step;
    this.scrollToWizardTop();
  }

  private validateMobileStep(step: number): boolean {
    const controlsByStep: Record<number, string[]> = {
      0: ['make', 'model', 'year'],
      1: ['license_plate', 'nickname'],
      2: [
        'variant',
        'vin',
        'fuel_type',
        'transmission',
        'drivetrain',
        'engine_oil_viscosity',
        'engine',
        'color',
        'current_mileage',
        'actual_mileage',
      ],
      3: [
        'ownership_start_date',
        'purchase_price',
        'purchase_price_currency',
        'last_oil_service_date',
        'last_oil_service_mileage',
      ],
      4: [],
    };
    const controls = controlsByStep[step]
      .map(name => this.form.get(name))
      .filter(Boolean);
    controls.forEach(control => control!.markAsTouched());
    if (step === 0) this.validationAttempted = true;
    // The initial/current mileage pair is cross-validated on the form group itself
    // (mileageOrderValidator), not on either control — both can report valid on
    // their own while the pair as a whole isn't, so step 2 (where they live) also
    // has to check the group-level error explicitly.
    const mileageOrderOk = step !== 2 || !this.form.hasError('mileageOrder');
    return controls.every(control => control!.valid) && mileageOrderOk;
  }

  private firstInvalidMobileStep(): number {
    for (let step = 0; step < this.mobileSteps.length; step += 1) {
      if (!this.validateMobileStep(step)) return step;
    }
    return this.mobileSteps.length - 1;
  }

  /** Open the collapsible sections that hold an invalid field so the error is visible. */
  private _expandSectionsWithErrors(): void {
    const invalid = (names: string[]) => names.some(n => this.form.get(n)?.invalid);
    if (
      invalid(['vin', 'current_mileage', 'actual_mileage', 'purchase_price', 'purchase_price_currency']) ||
      this.form.hasError('mileageOrder')
    ) {
      this.additionalExpanded = true;
    }
    if (invalid(['last_oil_service_date', 'last_oil_service_mileage'])) {
      this.documentsExpanded = true;
    }
  }

  private scrollToWizardTop(): void {
    document
      .querySelector('.mobile-wizard')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  hasUnsavedChanges(): boolean {
    return (
      this.form.dirty ||
      this.deletedPhotoIds.length > 0 ||
      this.photoSignature() !== this.initialPhotosSignature
    );
  }

  async canDeactivate(): Promise<boolean> {
    if (this.allowNavigation || !this.hasUnsavedChanges()) return true;
    return this._unsaved.confirmDiscard('shared.unsavedChanges');
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent): void {
    if (!this.allowNavigation && this.hasUnsavedChanges()) {
      event.preventDefault();
      event.returnValue = '';
    }
  }

  private photoSignature(): string {
    return this.photos
      .map(
        photo => `${photo.id ?? 'new'}:${photo.url}:${photo.isDefault ? 1 : 0}`,
      )
      .join('|');
  }

  private resetForAnotherCar(): void {
    this.form.reset({
      fuel_type: '',
      transmission: '',
      drivetrain: '',
      engine_oil_viscosity: '',
      color: '',
      purchase_price_currency: this.newCarCurrency(),
    });
    this.photos = [];
    this.deletedPhotoIds = [];
    this.initialPhotosSignature = '';
    this.mobileStep = 0;
    this.validationAttempted = false;
    this.scanResult = null;
    this.scanFailed = false;
    this.scanningVia = null;
    this.saveAnotherPending = false;
    this.allowNavigation = false;
    this.form.markAsPristine();
    this.scrollToWizardTop();
  }

  cancel(): void {
    this._navHistory.back();
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
    const name =
      [v.make, v.model].filter(Boolean).join(' ') ||
      this._transloco.translate('cars.form.deleteAlert.fallbackName');
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('cars.details.deleteAlert.header'),
      message: new IonicSafeString(
        this._transloco.translate('cars.details.deleteAlert.message', { name }),
      ),
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

  onScanFileSelected({ files, source }: ImageSourceSelection): void {
    const file = files[0];
    if (!file) return;

    this.scanning = true;
    this.scanningVia = source;
    this.scanResult = null;
    this.scanFailed = false;
    this.scanQuotaMessage = null;

    // Smaller than the car-photo resize (1920/0.8) — this copy is only sent to the
    // AI extraction endpoint, not stored, so favour a faster upload over image fidelity.
    resizeImage(file, 1600, 0.7).then(resized => {
      this._extractionService
        .extract(resized)
        .pipe(take(1))
        .subscribe({
          next: result => {
            this.scanning = false;
            this.scanningVia = null;
            this.scanResult = result;
            if (result.detected) this.applyScanResult(result);
            this._aiQuota.checkWarning();
          },
          error: (err: unknown) => {
            this.scanning = false;
            this.scanningVia = null;
            this.scanFailed = true;
            this.scanQuotaMessage = this._aiQuota.isQuotaError(err)
              ? this._aiQuota.messageFor(err)
              : null;
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
    if (Object.keys(patch).length > 0) this.form.markAsDirty();
  }

  private matchColorOption(value?: string): string | null {
    if (!value) return null;
    const normalized = value.trim().toLowerCase();
    const found = this.colorOptions.find(
      o =>
        o.value.toLowerCase() === normalized ||
        o.label.toLowerCase() === normalized,
    );
    return found ? found.value : 'Alt';
  }

  private matchFuelTypeOption(value?: string): string | null {
    if (!value) return null;
    const normalized = value.trim().toUpperCase();
    const found = this.fuelTypeOptions.find(o => o.value === normalized);
    return found ? found.value : null;
  }

  get scanStatusIsWarning(): boolean {
    return (
      this.scanFailed ||
      !this.scanResult?.detected ||
      this.scanResult?.confidence === 'low'
    );
  }

  get scanStatusText(): string {
    if (this.scanFailed && this.scanQuotaMessage) return this.scanQuotaMessage;
    if (this.scanFailed)
      return this._transloco.translate('cars.form.scan.failed');
    if (!this.scanResult) return '';
    if (!this.scanResult.detected)
      return this._transloco.translate('cars.form.scan.notRecognized');
    return this.scanResult.confidence === 'low'
      ? this._transloco.translate('cars.form.scan.lowConfidence')
      : this._transloco.translate('cars.form.scan.success');
  }
}
