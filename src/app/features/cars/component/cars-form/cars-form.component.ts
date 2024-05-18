import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CarDto } from '@hau/autogenapi/models';
import { FormControlType, FormFieldComponent } from '@hau/shared/component/form-field/form-field.component';

@Component({
  selector: 'app-cars-form',
  templateUrl: 'cars-form.component.html',
  styleUrls: ['./cars-form.component.scss'],
  imports: [FormFieldComponent, ReactiveFormsModule],
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

  constructor(private readonly _fb: FormBuilder) {
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
}