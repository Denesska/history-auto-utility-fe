import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AddCarDto, CarDto} from '@hau/autogenapi/models';
import {CarDetailsFacade} from '@hau/features/cars/state/car-details/car-details.facade';
import {FormControlType, FormFieldComponent, InputType} from '@hau/shared/component/form-field/form-field.component';
import {IonButton, IonItem, IonThumbnail} from '@ionic/angular/standalone';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {filter} from 'rxjs';
import {MAX_YEAR_CAR_CREATE, MIN_YEAR_CAR_CREATE} from '@hau/features/cars/cars.constants';
import {removeNullProperties} from '@hau/features/cars/cars.utils';

@UntilDestroy()
@Component({
  selector: 'app-cars-form',
  templateUrl: 'cars-form.component.html',
  styleUrls: ['./cars-form.component.scss'],
  imports: [FormFieldComponent, IonButton, ReactiveFormsModule, IonItem, IonThumbnail],
  standalone: true,
})
export class CarsFormComponent implements OnInit {
  protected readonly InputType = InputType;
  protected readonly FormControlType = FormControlType;
  protected readonly form!: FormGroup;
  protected readonly MAX_YEAR = MAX_YEAR_CAR_CREATE
  protected readonly MIN_YEAR = MIN_YEAR_CAR_CREATE

  imagePreview: string | undefined;
  private selectedCarPhoto: File | undefined;

  @Input() set currentCar(currentCar: CarDto | null | undefined) {
    if (currentCar) {
      this.form.patchValue(currentCar);
      if (currentCar.image) {
        this.imagePreview = currentCar.image;
      }
    }
  }

  constructor(private readonly _fb: FormBuilder, private readonly _carFacade: CarDetailsFacade) {
    this.form = this._fb.group({
      id: null,
      current_mileage: null,
      license_plate: null,
      make: null,
      model: null,
      vin: null,
      year: null,
      image: null
    });
  }

  ngOnInit(): void {
    this._carFacade.currentCar$.pipe(
      filter(it => !!it),
      untilDestroyed(this)
    ).subscribe((it) => this.patchForm(it))
  }

  patchForm(car?: CarDto | null): void {
    if (!!car) {
      this.form.patchValue(car);
      if (car.image) {
        this.imagePreview = car.image;
      }
    }
  }

  saveCar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      return;
    }

    const formValue = this.form.getRawValue();
    
    if (formValue.id) {
      // Update existing car
      let carObj: any;
      if (this.selectedCarPhoto) {
        // If a new image is selected, send it as a File
        carObj = removeNullProperties({
          ...formValue,
          image: this.selectedCarPhoto
        });
      } else {
        // If no new image, do not include image field (or send existing path if backend expects it)
        carObj = removeNullProperties({
          ...formValue
        });
      }
      this._carFacade.udpateCar(carObj);
    } else {
      // Create new car
      const carObj = removeNullProperties<AddCarDto & { image?: File }>({
        ...formValue,
        image: this.selectedCarPhoto
      });
      this._carFacade.createCar(carObj);
    }
  }

  onSetCarPhoto(file: File): void {
    if (!file) return;
    
    // Validate file type
    if (!file.type.match(/\/(jpg|jpeg|png|gif)$/)) {
      console.error('Only image files are allowed!');
      return;
    }
    
    // Validate file size (1MB limit)
    if (file.size > 1 * 1024 * 1024) {
      console.error('File size must be less than 1MB');
      return;
    }
    
    this.selectedCarPhoto = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}