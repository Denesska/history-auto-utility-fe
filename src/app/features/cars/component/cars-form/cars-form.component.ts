import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddCarDto, CarDto } from '@hau/autogenapi/models';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { FormControlType, FormFieldComponent, InputType } from '@hau/shared/component/form-field/form-field.component';
import { IonButton, IonItem, IonThumbnail } from '@ionic/angular/standalone';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { MAX_YEAR_CAR_CREATE, MIN_YEAR_CAR_CREATE } from '@hau/features/cars/cars.constants';
import { removeNullProperties } from '@hau/features/cars/cars.utils';

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
  protected readonly MAX_YEAR = MAX_YEAR_CAR_CREATE;
  protected readonly MIN_YEAR = MIN_YEAR_CAR_CREATE;

  imagePreview: string | undefined;

  private selectedCarPhoto: File | undefined;

  @Input() set currentCar(currentCar: CarDto | null | undefined) {
    if (currentCar) {
      this.form.patchValue(currentCar);
    }
  }

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _carFacade: CarDetailsFacade,
  ) {
    this.form = this._fb.group({
      id: null,
      current_mileage: null,
      license_plate: null,
      make: null,
      model: null,
      vin: null,
      year: null,
      image: null,
    });
  }

  ngOnInit(): void {
    this._carFacade.currentCar$
      .pipe(
        filter(it => !!it),
        untilDestroyed(this),
      )
      .subscribe(it => this.patchForm(it));
  }

  patchForm(car?: CarDto | null): void {
    if (car) this.form.patchValue(car);
  }

  saveCar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      return;
    }
    const carObj: CarDto | AddCarDto = removeNullProperties<CarDto | AddCarDto>({
      ...this.form.getRawValue(),
      image: this.selectedCarPhoto,
    });
    if (carObj.id) {
      this._carFacade.udpateCar(carObj as CarDto);
    } else {
      this._carFacade.createCar(carObj as AddCarDto);
    }
  }

  onSetCarPhoto(file: File): void {
    this.selectedCarPhoto = file;
    if (this.selectedCarPhoto) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
