import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import {
  FormFieldComponent,
  InputType,
} from '@hau/shared/component/form-field/form-field.component';
import { YearInputDirective } from '@hau/shared/directive/year-input.directive';

/**
 * Section (3) of the form, "obiectul contractului".
 *
 * Every route into the vehicle step — garage, photographed registration
 * certificate, or typing — lands here. Extraction pre-fills these inputs, it
 * never replaces the review: the fields the user is asked to check are the same
 * ones in every case.
 *
 * Required marks and error messages come from `<app-form-field>`; the wizard
 * calls `revealInvalidFields` on this group when the user presses Next.
 */
@Component({
  selector: 'app-contract-vehicle-form',
  templateUrl: './contract-vehicle-form.component.html',
  styleUrls: ['./contract-vehicle-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    ReactiveFormsModule,
    TranslocoPipe,
    FormFieldComponent,
    YearInputDirective,
  ],
})
export class ContractVehicleFormComponent {
  @Input({ required: true }) group!: FormGroup;

  protected readonly InputType = InputType;
}
