import {Component, Input, OnInit, Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AddCarDto, CarDto} from '@hau/autogenapi/models';
import {CarDetailsFacade} from '@hau/features/cars/state/car-details/car-details.facade';
import {FormControlType, FormFieldComponent, InputType} from '@hau/shared/component/form-field/form-field.component';
import {IonButton, IonContent, IonIcon, IonItem, IonSpinner, NavController} from '@ionic/angular/standalone';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {filter} from 'rxjs';
import {
  COLOR_OPTIONS,
  FUEL_TYPE_OPTIONS,
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
    imports: [FormFieldComponent, IonButton, ReactiveFormsModule, IonItem, IonContent, IonIcon, IonSpinner, ImageUrlPipe]
})
export class CarsFormComponent implements OnInit {
  protected readonly InputType = InputType;
  protected readonly FormControlType = FormControlType;
  protected readonly form!: FormGroup;
  protected readonly isSubmitting!: Signal<boolean>;
  protected readonly MAX_YEAR = MAX_YEAR_CAR_CREATE;
  protected readonly MIN_YEAR = MIN_YEAR_CAR_CREATE;
  protected readonly fuelTypeOptions = FUEL_TYPE_OPTIONS;
  protected readonly transmissionOptions = TRANSMISSION_OPTIONS;
  protected readonly colorOptions = COLOR_OPTIONS;

  photos: PhotoEntry[] = [];

  @Input() set currentCar(currentCar: CarDto | null | undefined) {
    if (currentCar) {
      this.patchForm(currentCar);
    }
  }

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _carFacade: CarDetailsFacade,
    private readonly _carService: CarService,
    private readonly _nav: NavController
  ) {
    addIcons({
      shieldCheckmarkOutline, buildOutline, carOutline, waterOutline,
      calendarOutline, speedometerOutline, pencilOutline, saveOutline,
      addCircleOutline, bulbOutline, checkmarkCircleOutline
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this as any).isSubmitting = toSignal(this._carFacade.submitting$, { initialValue: false });

    this.form = this._fb.group({
      id: null,
      make: null,
      model: null,
      variant: null,
      license_plate: null,
      vin: null,
      year: null,
      fuel_type: null,
      transmission: null,
      engine: null,
      color: null,
      current_mileage: null,
      ownership_start_date: null,
      rca_expiry_date: null,
      itp_expiry_date: null,
      rov_expiry_date: null,
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
    return [v.make, v.model].filter(Boolean).join(' ') || 'Your vehicle';
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

  saveCar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      return;
    }

    const formValue = this.form.getRawValue();
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

  onAddPhotos(file: File): void {
    if (!file) return;

    if (!file.type.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
      console.error('Only image files are allowed!');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      console.error('File size must be less than 10MB');
      return;
    }

    this.resizeImage(file, 1920, 0.8).then(resized => {
      const reader = new FileReader();
      reader.onload = () => {
        const isDefault = this.photos.length === 0;
        this.photos.push({ kind: 'new', file: resized, url: reader.result as string, isDefault });
      };
      reader.readAsDataURL(resized);
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
