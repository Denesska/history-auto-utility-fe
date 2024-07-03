import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CarDto } from '@hau/autogenapi/models';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { FormControlType, FormFieldComponent } from '@hau/shared/component/form-field/form-field.component';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cars-form',
  templateUrl: 'cars-form.component.html',
  styleUrls: ['./cars-form.component.scss'],
  imports: [FormFieldComponent, IonButton, ReactiveFormsModule],
  standalone: true,
})
export class CarsFormComponent {
  readonly ControlType = FormControlType;
  readonly form!: FormGroup;

  @Input() set currentCar(currentCar: CarDto | null | undefined) {
    if (currentCar) {
      this.form.patchValue(currentCar);
    }
  }

  constructor(private readonly _fb: FormBuilder, private readonly _carFacade: CarDetailsFacade) {
    this.form = this._fb.group({
      current_mileage: null,
      license_plate: null,
      make: null,
      model: null,
      vin: null,
      year: null
    });
  }

  patchForm(car: CarDto): void {
    this.form.patchValue(car);
  }

  addCar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      return;
    }
    this._carFacade.createCar(this.form.value);
  }
}