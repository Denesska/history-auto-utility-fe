import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { businessOutline, chevronDownOutline, personOutline } from 'ionicons/icons';
import { TranslocoPipe } from '@ngneat/transloco';
import { ContractAddressFormComponent } from '@hau/features/sale-contract/components/contract-address-form/contract-address-form.component';

/**
 * Section (1) or (2) of the form for one party.
 *
 * The paper form has a single blank shared by CNP and CIF, which is why the
 * model has one `cnp_or_cif` field and why this component relabels it instead
 * of showing two. A company swaps the personal name/ID-document blanks for a
 * trading name, a tax code and a legal representative.
 *
 * The parent owns the `FormGroup` (and its validators) — this component only
 * renders it. Nothing here logs or copies the values anywhere: they are a third
 * party's identity details.
 */
@Component({
    selector: 'app-contract-party-form',
    templateUrl: './contract-party-form.component.html',
    styleUrls: ['./contract-party-form.component.scss'],
    imports: [ReactiveFormsModule, TranslocoPipe, IonIcon, ContractAddressFormComponent],
})
export class ContractPartyFormComponent {
    @Input({ required: true }) group!: FormGroup;
    /** Unique per instance — both parties are rendered on the same step. */
    @Input({ required: true }) idPrefix!: string;
    /** Shown above the fields; the parent picks seller/buyer wording. */
    @Input({ required: true }) title!: string;
    @Input() hint: string | null = null;
    /** Marks the required blanks with an asterisk once the user tried to continue. */
    @Input() showErrors = false;

    constructor() {
        addIcons({ businessOutline, chevronDownOutline, personOutline });
    }

    get isCompany(): boolean {
        return !!this.group.get('is_company')?.value;
    }

    get fiscalOpen(): boolean {
        return !!this.group.get('has_fiscal_address')?.value;
    }

    get representative(): FormGroup {
        return this.group.get('representative') as FormGroup;
    }

    get addressGroup(): FormGroup {
        return this.group.get('address') as FormGroup;
    }

    get fiscalAddressGroup(): FormGroup {
        return this.group.get('fiscal_address') as FormGroup;
    }

    /** The shared blank is a CNP for a person and a CIF for a company. */
    get idNumberLabelKey(): string {
        return this.isCompany ? 'saleContract.fields.cif' : 'saleContract.fields.cnp';
    }

    get nameLabelKey(): string {
        return this.isCompany ? 'saleContract.fields.companyName' : 'saleContract.fields.fullName';
    }

    invalid(path: string): boolean {
        const control = this.group.get(path);
        if (!control) return false;
        return control.invalid && (control.touched || control.dirty || this.showErrors);
    }

    toggleFiscal(): void {
        const control = this.group.get('has_fiscal_address');
        control?.setValue(!control.value);
    }
}
