import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslocoPipe } from '@ngneat/transloco';

/**
 * Section (3) of the form, "obiectul contractului".
 *
 * Every route into the vehicle step — garage, photographed registration
 * certificate, or typing — lands here. Extraction pre-fills these inputs, it
 * never replaces the review: the fields the user is asked to check are the same
 * ones in every case.
 */
@Component({
    selector: 'app-contract-vehicle-form',
    templateUrl: './contract-vehicle-form.component.html',
    styleUrls: ['./contract-vehicle-form.component.scss'],
    imports: [ReactiveFormsModule, TranslocoPipe],
})
export class ContractVehicleFormComponent {
    @Input({ required: true }) group!: FormGroup;
    /** Marks the required blanks once the user tried to continue. */
    @Input() showErrors = false;

    invalid(name: string): boolean {
        const control = this.group.get(name);
        if (!control) return false;
        return control.invalid && (control.touched || control.dirty || this.showErrors);
    }
}
