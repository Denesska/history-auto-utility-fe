import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  constructor(private readonly _fb: FormBuilder) {
    this.form = this._fb.group({
      type: undefined,
      model: undefined,
      registrationNumber: undefined,
      date: undefined,
      rca: undefined,
      itp: undefined,
      service: undefined
    })
  }
}