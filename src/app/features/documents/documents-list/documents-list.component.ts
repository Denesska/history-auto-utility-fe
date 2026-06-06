import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
import { DocumentsFacade } from '@hau/features/documents/state/documents.facade';
import { IonContent, IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    addOutline, chevronDownOutline, searchOutline,
    eyeOutline, createOutline, trashOutline,
    ellipsisHorizontalOutline, documentOutline,
    documentTextOutline, shieldCheckmarkOutline,
    carOutline, cashOutline,
} from 'ionicons/icons';
import { combineLatest } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

export type DocStatus = 'valid' | 'expiring' | 'expired' | 'no-expiry';

export interface DocViewModel {
    doc: DocumentDto;
    car: CarDto | undefined;
    status: DocStatus;
    daysLeft: number | null;
    typeLabel: string;
    typeAbbr: string;
    typeColor: string;
    carLabel: string;
}

const EXPIRY_SOON_DAYS = 30;

export const DOC_TYPE_CONFIG: Record<string, { label: string; abbr: string; color: string }> = {
    RCA:          { label: 'Insurance (RCA)',          abbr: 'RCA', color: 'purple' },
    ITP:          { label: 'ITP Certificate',           abbr: 'ITP', color: 'blue' },
    ROV:          { label: 'ROV Certificate',           abbr: 'ROV', color: 'indigo' },
    REGISTRATION: { label: 'Registration Certificate',  abbr: 'CAR', color: 'green' },
    ROAD_TAX:     { label: 'Road Tax',                  abbr: 'TAX', color: 'amber' },
};

function docTypeConfig(type: string) {
    return DOC_TYPE_CONFIG[type] ?? { label: type, abbr: type.slice(0, 3).toUpperCase(), color: 'slate' };
}

function calcStatus(expiryDate: string | null | undefined): { status: DocStatus; daysLeft: number | null } {
    if (!expiryDate) return { status: 'no-expiry', daysLeft: null };
    const daysLeft = Math.ceil((new Date(expiryDate).getTime() - Date.now()) / 86_400_000);
    if (daysLeft < 0)                   return { status: 'expired',  daysLeft };
    if (daysLeft <= EXPIRY_SOON_DAYS)   return { status: 'expiring', daysLeft };
    return { status: 'valid', daysLeft };
}

function buildViewModel(doc: DocumentDto, cars: CarDto[]): DocViewModel {
    const car  = cars.find(c => c.id === doc.car_id);
    const cfg  = docTypeConfig(doc.document_type);
    const { status, daysLeft } = calcStatus(doc.expiry_date);
    return {
        doc,
        car,
        status,
        daysLeft,
        typeLabel:  cfg.label,
        typeAbbr:   cfg.abbr,
        typeColor:  cfg.color,
        carLabel:   car ? `${car.make} ${car.model}` : '—',
    };
}

@UntilDestroy()
@Component({
    selector: 'app-documents-list',
    templateUrl: 'documents-list.component.html',
    styleUrls: ['./documents-list.component.scss'],
    imports: [IonContent, IonIcon, IonSpinner, DatePipe],
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
        { value: 'all',       label: 'All statuses' },
        { value: 'valid',     label: 'Valid' },
        { value: 'expiring',  label: 'Expiring soon' },
        { value: 'expired',   label: 'Expired' },
        { value: 'no-expiry', label: 'No expiry' },
    ];

    constructor(
        private readonly _facade: DocumentsFacade,
        private readonly _router: Router,
    ) {
        addIcons({
            addOutline, chevronDownOutline, searchOutline,
            eyeOutline, createOutline, trashOutline,
            ellipsisHorizontalOutline, documentOutline,
            documentTextOutline, shieldCheckmarkOutline,
            carOutline, cashOutline,
        });
    }

    ngOnInit(): void {
        combineLatest([this._facade.cars$, this._facade.documents$, this._facade.loading$])
            .pipe(untilDestroyed(this))
            .subscribe(([cars, documents, loading]) => {
                this.loading = loading;
                this.cars = cars;
                this.allDocs = documents.map(doc => buildViewModel(doc, cars));
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

    @HostListener('document:click')
    closeMenus(): void {
        this.openMenuId = null;
    }

    // ── Helpers ───────────────────────────────────────────────────────
    typeConfig(type: string) { return docTypeConfig(type); }

    get totalCount(): number { return this.filteredDocs.length; }
    get totalAll(): number   { return this.allDocs.length; }

    readonly docTypeConfig = DOC_TYPE_CONFIG;
    docTypeLabelFor(type: string): string { return docTypeConfig(type).label; }
}
