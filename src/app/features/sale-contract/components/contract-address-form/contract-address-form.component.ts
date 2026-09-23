import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslocoPipe } from '@ngneat/transloco';

/**
 * The address blanks of the official form (ITL 054, Anexa nr. 2), one input per
 * blank and in the order they are printed: "în ROMÂNIA/ ..., judeţul ..., codul
 * poştal ..., municipiul/oraşul/comuna ..., satul/sectorul ..., str. ..., nr.
 * ..., bl. ..., sc. ..., et. ..., ap. ...".
 *
 * It is deliberately not a single free-text line: the PDF fills each blank
 * separately, so one joined string cannot be split back apart reliably.
 */
@Component({
    selector: 'app-contract-address-form',
    templateUrl: './contract-address-form.component.html',
    styleUrls: ['./contract-address-form.component.scss'],
    imports: [ReactiveFormsModule, TranslocoPipe],
})
export class ContractAddressFormComponent {
    /** The `ContractAddress`-shaped group this component edits in place. */
    @Input({ required: true }) group!: FormGroup;
    /** Unique per instance — four address blocks can be on screen at once. */
    @Input({ required: true }) idPrefix!: string;
}
