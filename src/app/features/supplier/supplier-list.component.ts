import { Component, inject, signal, TemplateRef, ViewChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonFab, IonFabButton, IonIcon, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { addIcons } from 'ionicons';
import {
    addOutline, closeOutline, checkmarkOutline,
    constructOutline, cogOutline, shieldCheckmarkOutline, waterOutline, briefcaseOutline,
    callOutline, mailOutline,
} from 'ionicons/icons';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { SupplierApiService } from '@hau/core/supplier-api.service';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { PhoneInputComponent } from '@hau/shared/component/phone-input/phone-input.component';
import { ActionListRowComponent, ListRowAction } from '@hau/shared/component/action-list-row/action-list-row.component';
import { SUPPLIER_TYPE_CONFIG } from '@hau/shared/config/supplier-type.config';
import { CreateSupplierPayload, SupplierDto, SupplierType } from './supplier.model';

const TYPE_OPTIONS: SupplierType[] = [
    SupplierType.SERVICE,
    SupplierType.PARTS,
    SupplierType.INSURANCE,
    SupplierType.FUEL,
    SupplierType.OTHER,
];

interface SupplierFormState {
    name: string;
    type: SupplierType;
    contact_name: string;
    phone: string;
    email: string;
    address: string;
    notes: string;
}

const EMPTY_FORM: SupplierFormState = {
    name: '', type: SupplierType.SERVICE, contact_name: '', phone: '', email: '', address: '', notes: '',
};

export interface SupplierGroup {
    type: SupplierType;
    label: string;
    suppliers: SupplierDto[];
}

@Component({
    selector: 'app-supplier-list',
    templateUrl: './supplier-list.component.html',
    styleUrls: ['./supplier-list.component.scss'],
    imports: [
        IonContent, IonFab, IonFabButton, IonIcon, TranslocoPipe, NgTemplateOutlet, FormsModule,
        DropdownComponent, LoaderComponent, PhoneInputComponent, ActionListRowComponent,
    ],
})
export class SupplierListComponent implements ViewWillEnter, ViewWillLeave {
    @ViewChild('headerAddTpl') private _headerAddTpl!: TemplateRef<unknown>;
    @ViewChild('headerCloseTpl') private _headerCloseTpl!: TemplateRef<unknown>;
    @ViewChild('headerSaveTpl') private _headerSaveTpl!: TemplateRef<unknown>;

    private readonly _api = inject(SupplierApiService);
    private readonly _transloco = inject(TranslocoService);
    private readonly _headerActions = inject(HeaderActionsService);

    readonly suppliers = signal<SupplierDto[]>([]);
    readonly loading = signal(false);
    readonly error = signal(false);
    readonly actionError = signal<string | null>(null);
    readonly busy = signal(false);

    readonly showForm = signal(false);
    readonly editingId = signal<number | null>(null);
    readonly form = signal<SupplierFormState>({ ...EMPTY_FORM });

    readonly showInactive = signal(false);
    readonly groupByType = signal(false);

    readonly typeConfig = SUPPLIER_TYPE_CONFIG;

    get visibleSuppliers(): SupplierDto[] {
        return this.showInactive() ? this.suppliers() : this.suppliers().filter(s => s.is_active);
    }

    get groupedSuppliers(): SupplierGroup[] {
        const visible = this.visibleSuppliers;
        return TYPE_OPTIONS
            .map(type => ({ type, label: this.typeLabel(type), suppliers: visible.filter(s => s.type === type) }))
            .filter(group => group.suppliers.length > 0);
    }

    constructor() {
        addIcons({
            addOutline, closeOutline, checkmarkOutline,
            constructOutline, cogOutline, shieldCheckmarkOutline, waterOutline, briefcaseOutline,
            callOutline, mailOutline,
        });
    }

    ionViewWillEnter(): void {
        this._headerActions.setTitle(this._transloco.translate('supplier.title'));
        this.syncHeaderActions();
        this.load();
    }

    ionViewWillLeave(): void {
        this._headerActions.clear();
        this._headerActions.clearTitle();
    }

    /** One end-slot template per mode (list "+" vs form "save"), and the start slot only set in form mode — see car-notes-panel.component.ts for the same pattern. */
    private syncHeaderActions(): void {
        if (this.showForm()) {
            this._headerActions.setStart(this._headerCloseTpl);
            this._headerActions.set(this._headerSaveTpl);
        } else {
            this._headerActions.setStart(null);
            this._headerActions.set(this._headerAddTpl);
        }
    }

    get typeOptions(): DropdownOption[] {
        return TYPE_OPTIONS.map(type => ({ value: type, label: this.typeLabel(type) }));
    }

    typeLabel(type: SupplierType): string {
        return this._transloco.translate(`supplier.type.${type}`);
    }

    // `type` arrives typed `any` from *ngTemplateOutlet's context, so these take it
    // as a parameter (where `any` is freely assignable) rather than indexing
    // `typeConfig` directly in the template, which the strict template checker
    // rejects as an implicit-any index.
    typeIcon(type: SupplierType): string {
        return this.typeConfig[type].icon;
    }

    typeColor(type: SupplierType): string {
        return this.typeConfig[type].color;
    }

    load(): void {
        this.loading.set(true);
        this._api.getAll().subscribe({
            next: suppliers => { this.suppliers.set(suppliers); this.loading.set(false); },
            error: () => { this.loading.set(false); this.error.set(true); },
        });
    }

    openCreateForm(): void {
        this.editingId.set(null);
        this.form.set({ ...EMPTY_FORM });
        this.showForm.set(true);
        this.syncHeaderActions();
    }

    openEditForm(supplier: SupplierDto): void {
        this.editingId.set(supplier.id);
        this.form.set({
            name: supplier.name,
            type: supplier.type,
            contact_name: supplier.contact_name ?? '',
            phone: supplier.phone ?? '',
            email: supplier.email ?? '',
            address: supplier.address ?? '',
            notes: supplier.notes ?? '',
        });
        this.showForm.set(true);
        this.syncHeaderActions();
    }

    closeForm(): void {
        this.showForm.set(false);
        this.editingId.set(null);
        this.syncHeaderActions();
    }

    updateForm<K extends keyof SupplierFormState>(key: K, value: SupplierFormState[K]): void {
        this.form.set({ ...this.form(), [key]: value });
    }

    onTypeChange(value: string | number): void {
        this.updateForm('type', value as SupplierType);
    }

    onPhoneChange(value: string | null): void {
        this.updateForm('phone', value ?? '');
    }

    save(): void {
        const f = this.form();
        const name = f.name.trim();
        if (!name) return;
        const payload: CreateSupplierPayload = {
            name,
            type: f.type,
            contact_name: f.contact_name.trim() || undefined,
            phone: f.phone.trim() || undefined,
            email: f.email.trim() || undefined,
            address: f.address.trim() || undefined,
            notes: f.notes.trim() || undefined,
        };
        this.busy.set(true);
        this.actionError.set(null);
        const editingId = this.editingId();
        const op$ = editingId ? this._api.update(editingId, payload) : this._api.create(payload);
        op$.subscribe({
            next: () => { this.busy.set(false); this.closeForm(); this.load(); },
            error: () => {
                this.busy.set(false);
                this.actionError.set(this._transloco.translate(editingId ? 'supplier.errors.update' : 'supplier.errors.create'));
            },
        });
    }

    toggleActive(supplier: SupplierDto): void {
        this._api.update(supplier.id, { is_active: !supplier.is_active }).subscribe({
            next: () => this.load(),
            error: () => this.actionError.set(this._transloco.translate('supplier.errors.update')),
        });
    }

    remove(supplier: SupplierDto): void {
        this._api.delete(supplier.id).subscribe({
            next: () => this.load(),
            error: () => this.actionError.set(this._transloco.translate('supplier.errors.delete')),
        });
    }

    onRowAction(action: ListRowAction, supplier: SupplierDto): void {
        if (action === 'view' || action === 'edit') this.openEditForm(supplier);
        else if (action === 'renew') this.toggleActive(supplier);
        else if (action === 'delete') this.remove(supplier);
    }

    telHref(phone: string): string {
        return `tel:${phone}`;
    }

    mailHref(email: string): string {
        return `mailto:${email}`;
    }
}
