import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
import { DocumentsFacade } from '@hau/features/documents/state/documents.facade';
import { PullToRefreshService } from '@hau/core/pull-to-refresh.service';
import { IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    add, addOutline, chevronDownOutline, searchOutline,
    eyeOutline, createOutline, trashOutline,
    ellipsisHorizontalOutline, documentOutline,
    documentTextOutline, shieldCheckmarkOutline,
    carOutline, cashOutline, clipboardOutline, trailSignOutline,
} from 'ionicons/icons';
import { combineLatest } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

export type DocStatus = 'valid' | 'expiring' | 'expired' | 'no-expiry';

export interface DocViewModel {
    doc: DocumentDto;
    car: CarDto | undefined;
    status: DocStatus;
    daysLeft: number | null;
    typeLabel: string;
    typeIcon: string;
    typeColor: string;
    carLabel: string;
}

const EXPIRY_SOON_DAYS = 30;

export const DOC_TYPE_CONFIG: Record<string, { label: string; icon: string; color: string }> = {
    RCA:          { label: 'documents.types.RCA',          icon: 'shield-checkmark-outline', color: 'rca' },
    ITP:          { label: 'documents.types.ITP',          icon: 'clipboard-outline',         color: 'itp' },
    ROV:          { label: 'documents.types.ROV',          icon: 'trail-sign-outline',         color: 'rov' },
    REGISTRATION: { label: 'documents.types.REGISTRATION', icon: 'car-outline',                color: 'registration' },
    ROAD_TAX:     { label: 'documents.types.ROAD_TAX',     icon: 'cash-outline',               color: 'roadtax' },
};

/** Optional form fields shown per document type (dates, vehicle and file are always shown). */
export const DOC_TYPE_FORM_FIELDS: Record<string, readonly string[]> = {
    RCA:          ['provider', 'policy_series', 'policy_number', 'bonus_malus_class', 'premium', 'currency', 'policyholder', 'cnp_id'],
    ITP:          ['provider', 'premium', 'currency'],
    ROV:          ['premium', 'currency'],
    REGISTRATION: ['premium', 'currency'],
    ROAD_TAX:     ['premium', 'currency'],
};

const ALL_OPTIONAL_DOC_FIELDS = [
    'provider', 'policy_series', 'policy_number', 'bonus_malus_class',
    'premium', 'currency', 'policyholder', 'cnp_id',
] as const;

export function docTypeFormFields(type: string | null | undefined): readonly string[] {
    if (!type) return [];
    return DOC_TYPE_FORM_FIELDS[type] ?? ALL_OPTIONAL_DOC_FIELDS;
}

function docTypeConfig(type: string) {
    return DOC_TYPE_CONFIG[type] ?? { label: type, icon: 'document-outline', color: 'slate' };
}

function calcStatus(expiryDate: string | null | undefined): { status: DocStatus; daysLeft: number | null } {
    if (!expiryDate) return { status: 'no-expiry', daysLeft: null };
    const daysLeft = Math.ceil((new Date(expiryDate).getTime() - Date.now()) / 86_400_000);
    if (daysLeft < 0)                   return { status: 'expired',  daysLeft };
    if (daysLeft <= EXPIRY_SOON_DAYS)   return { status: 'expiring', daysLeft };
    return { status: 'valid', daysLeft };
}

function buildViewModel(doc: DocumentDto, cars: CarDto[], transloco: TranslocoService): DocViewModel {
    const car  = cars.find(c => c.id === doc.car_id);
    const cfg  = docTypeConfig(doc.document_type);
    const { status, daysLeft } = calcStatus(doc.expiry_date);
    return {
        doc,
        car,
        status,
        daysLeft,
        typeLabel:  transloco.translate(cfg.label),
        typeIcon:   cfg.icon,
        typeColor:  cfg.color,
        carLabel:   car ? `${car.make} ${car.model}` : '—',
    };
}

@UntilDestroy()
@Component({
    selector: 'app-documents-list',
    templateUrl: 'documents-list.component.html',
    styleUrls: ['./documents-list.component.scss'],
    imports: [IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonSpinner, DatePipe, TranslocoPipe],
})
export class DocumentsListComponent implements OnInit {
    loading = false;

    // ── Raw data ──────────────────────────────────────────────────────
    private allDocs: DocViewModel[] = [];
    private cars: CarDto[] = [];

    // ── Filter state ─────────────────────────────────────────────────
    selectedCarId: number | 'all' = 'all';
    selectedType: string = 'all';
    selectedStatus: DocStatus | 'all' = 'all';
    searchQuery = '';

    // ── Derived ──────────────────────────────────────────────────────
    filteredDocs: DocViewModel[] = [];
    openMenuId: number | null = null;

    get availableCars(): CarDto[] { return this.cars; }
    get availableTypes(): string[] {
        return [...new Set(this.allDocs.map(d => d.doc.document_type))];
    }

    readonly statuses: { value: DocStatus | 'all'; label: string }[] = [
        { value: 'all',       label: 'documents.filters.allStatuses' },
        { value: 'valid',     label: 'documents.status.valid' },
        { value: 'expiring',  label: 'documents.status.expiring' },
        { value: 'expired',   label: 'documents.status.expired' },
        { value: 'no-expiry', label: 'documents.status.noExpiry' },
    ];

    constructor(
        private readonly _facade: DocumentsFacade,
        private readonly _router: Router,
        private readonly _transloco: TranslocoService,
        private readonly _pullToRefresh: PullToRefreshService,
    ) {
        addIcons({
            add, addOutline, chevronDownOutline, searchOutline,
            eyeOutline, createOutline, trashOutline,
            ellipsisHorizontalOutline, documentOutline,
            documentTextOutline, shieldCheckmarkOutline,
            carOutline, cashOutline, clipboardOutline, trailSignOutline,
        });
    }

    ngOnInit(): void {
        combineLatest([this._facade.cars$, this._facade.documents$, this._facade.loading$])
            .pipe(untilDestroyed(this))
            .subscribe(([cars, documents, loading]) => {
                this.loading = loading;
                this.cars = cars;
                this.allDocs = documents.map(doc => buildViewModel(doc, cars, this._transloco));
                this.applyFilters();
            });

        this._facade.loadAll();
    }

    // ── Filters ───────────────────────────────────────────────────────
    onCarChange(event: Event): void {
        const val = (event.target as HTMLSelectElement).value;
        this.selectedCarId = val === 'all' ? 'all' : Number(val);
        this.applyFilters();
    }

    onTypeChange(event: Event): void {
        this.selectedType = (event.target as HTMLSelectElement).value;
        this.applyFilters();
    }

    onStatusChange(event: Event): void {
        this.selectedStatus = (event.target as HTMLSelectElement).value as DocStatus | 'all';
        this.applyFilters();
    }

    onSearchInput(event: Event): void {
        this.searchQuery = (event.target as HTMLInputElement).value;
        this.applyFilters();
    }

    applyFilters(): void {
        let docs = this.allDocs;

        if (this.selectedCarId !== 'all') {
            docs = docs.filter(d => d.doc.car_id === this.selectedCarId);
        }
        if (this.selectedType !== 'all') {
            docs = docs.filter(d => d.doc.document_type === this.selectedType);
        }
        if (this.selectedStatus !== 'all') {
            docs = docs.filter(d => d.status === this.selectedStatus);
        }
        if (this.searchQuery.trim()) {
            const q = this.searchQuery.toLowerCase();
            docs = docs.filter(d =>
                d.typeLabel.toLowerCase().includes(q) ||
                d.carLabel.toLowerCase().includes(q) ||
                d.doc.document_type.toLowerCase().includes(q),
            );
        }

        this.filteredDocs = docs;
    }

    // ── Actions ───────────────────────────────────────────────────────
    toggleMenu(event: MouseEvent, id: number): void {
        event.stopPropagation();
        this.openMenuId = this.openMenuId === id ? null : id;
    }

    deleteDocument(event: MouseEvent, id: number): void {
        event.stopPropagation();
        this.openMenuId = null;
        this._facade.deleteDocument(id);
    }

    navigateToAdd(): void {
        void this._router.navigate([DOCUMENTS_ROUTES.add.fullPath]);
    }

    navigateToView(id: number): void {
        void this._router.navigate([`/main/documents/${id}`]);
    }

    navigateToEdit(event: MouseEvent, id: number): void {
        event.stopPropagation();
        this.openMenuId = null;
        void this._router.navigate([`/main/documents/${id}/edit`]);
    }

    onRefresh(event: Event): void {
        this._pullToRefresh.refresh(event);
    }

    @HostListener('document:click')
    closeMenus(): void {
        this.openMenuId = null;
    }

    // ── Helpers ───────────────────────────────────────────────────────
    typeConfig(type: string) { return docTypeConfig(type); }

    get totalCount(): number { return this.filteredDocs.length; }
    get totalAll(): number   { return this.allDocs.length; }

    readonly docTypeConfig = DOC_TYPE_CONFIG;
    docTypeLabelFor(type: string): string { return this._transloco.translate(docTypeConfig(type).label); }
}
