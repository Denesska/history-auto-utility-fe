import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CarDto} from '@hau/autogenapi/models';
import {CarDetailsFacade} from '@hau/features/cars/state/car-details/car-details.facade';
import {FormControlType, FormFieldComponent, InputType} from '@hau/shared/component/form-field/form-field.component';
import {IonButton} from '@ionic/angular/standalone';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {filter} from 'rxjs';
import {MAX_YEAR_CAR_CREATE, MIN_YEAR_CAR_CREATE} from '@hau/features/cars/cars.constants';
import {removeNullProperties} from '@hau/features/cars/cars.utils';

@UntilDestroy()
@Component({
  selector: 'app-cars-form',
  templateUrl: 'cars-form.component.html',
  styleUrls: ['./cars-form.component.scss'],
  imports: [FormFieldComponent, IonButton, ReactiveFormsModule],
  standalone: true,
})
export class CarsFormComponent implements OnInit {
  readonly ControlType = FormControlType;
  readonly form!: FormGroup;
  readonly MAX_YEAR = MAX_YEAR_CAR_CREATE
  readonly MIN_YEAR = MIN_YEAR_CAR_CREATE

  @Input() set currentCar(currentCar: CarDto | null | undefined) {
    if (currentCar) {
      this.form.patchValue(currentCar);
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
      year: null
    });
  }

  ngOnInit(): void {
    this._carFacade.currentCar$.pipe(
      filter(it => !!it),
      untilDestroyed(this)
    ).subscribe((it) => this.patchForm(it))
  }

  patchForm(car?: CarDto | null): void {
    if (!!car) this.form.patchValue(car);
  }

  saveCar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      return;
    }
    const carObj: CarDto = removeNullProperties<CarDto>(this.form.getRawValue());
    if (carObj.id) {
      this._carFacade.udpateCar(carObj);
    } else {
      this._carFacade.createCar(carObj);
    }
  }

  protected readonly InputType = InputType;
}