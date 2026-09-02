import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
import { DocumentsFacade } from '@hau/features/documents/state/documents.facade';
import { DOC_TYPE_CONFIG, docTypeConfig } from '@hau/shared/config/document-type.config';
import { docUrgencyClass, DocUrgency } from '@hau/shared/utils/document-status.util';
import { PullToRefreshService } from '@hau/core/pull-to-refresh.service';
import { IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonSpinner } from '@ionic/angular/standalone';
import { DocTypeBadgeComponent } from '@hau/shared/component/doc-type-badge/doc-type-badge.component';
import { DocExpiryRowComponent } from '@hau/shared/component/doc-expiry-row/doc-expiry-row.component';
import { PageHeaderComponent } from '@hau/shared/component/page-header/page-header.component';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { addIcons } from 'ionicons';
import {
    add, addOutline, searchOutline,
    eyeOutline, createOutline, trashOutline,
    ellipsisHorizontalOutline, documentTextOutline, carOutline,
    checkmarkCircle,
} from 'ionicons/icons';
import { combineLatest } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

export type DocStatus = 'valid' | 'expiring' | 'expired' | 'no-expiry';

export type DocCtaStyle = 'solid' | 'outline' | 'none';

export interface DocViewModel {
    doc: DocumentDto;
    car: CarDto | undefined;
    status: DocStatus;
    daysLeft: number | null;
    urgency: DocUrgency | null;
    typeLabel: string;
    carLabel: string;
    isActive: boolean;
    /** % of the validity window already elapsed (0-100), null if issue/expiry dates are missing */
    progressPercent: number | null;
    ctaLabel: string;
    ctaStyle: DocCtaStyle;
}

const EXPIRY_SOON_DAYS = 30;

function calcStatus(expiryDate: string | null | undefined): { status: DocStatus; daysLeft: number | null } {
    if (!expiryDate) return { status: 'no-expiry', daysLeft: null };
    const daysLeft = Math.ceil((new Date(expiryDate).getTime() - Date.now()) / 86_400_000);
    if (daysLeft < 0)                   return { status: 'expired',  daysLeft };
    if (daysLeft <= EXPIRY_SOON_DAYS)   return { status: 'expiring', daysLeft };
    return { status: 'valid', daysLeft };
}

function calcProgress(issueDate: string | null | undefined, expiryDate: string | null | undefined): number | null {
    if (!issueDate || !expiryDate) return null;
    const start = new Date(issueDate).getTime();
    const end   = new Date(expiryDate).getTime();
    if (end <= start) return null;
    const pct = ((Date.now() - start) / (end - start)) * 100;
    return Math.min(100, Math.max(0, Math.round(pct)));
}

function ctaFor(status: DocStatus, transloco: TranslocoService): { label: string; style: DocCtaStyle } {
    switch (status) {
        case 'expired':  return { label: transloco.translate('documents.cta.renew'),    style: 'solid' };
        case 'expiring': return { label: transloco.translate('documents.cta.schedule'), style: 'outline' };
        default:          return { label: '', style: 'none' };
    }
}

function buildViewModel(doc: DocumentDto, cars: CarDto[], transloco: TranslocoService): DocViewModel {
    const car  = cars.find(c => c.id === doc.car_id);
    const cfg  = docTypeConfig(doc.document_type);
    const { status, daysLeft } = calcStatus(doc.expiry_date);
    const cta = ctaFor(status, transloco);
    return {
        doc,
        car,
        status,
        daysLeft,
        urgency:    daysLeft === null ? null : docUrgencyClass(daysLeft),
        typeLabel:  transloco.translate(cfg.label),
        carLabel:   car ? `${car.make} ${car.model}` : '—',
        isActive:   doc.is_active !== false,
        progressPercent: calcProgress(doc.issue_date, doc.expiry_date),
        ctaLabel:   cta.label,
        ctaStyle:   cta.style,
    };
}

@UntilDestroy()
@Component({
    selector: 'app-documents-list',
    templateUrl: 'documents-list.component.html',
    styleUrls: ['./documents-list.component.scss'],
    imports: [IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonSpinner, DatePipe, TranslocoPipe, DocTypeBadgeComponent, DocExpiryRowComponent, PageHeaderComponent, DropdownComponent],
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

    get carFilterOptions(): DropdownOption[] {
        return [
            { value: 'all', label: this._transloco.translate('documents.filters.allVehicles') },
            ...this.availableCars.map(c => ({ value: c.id, label: `${c.make} ${c.model}` })),
        ];
    }

    get typeFilterOptions(): DropdownOption[] {
        return [
            { value: 'all', label: this._transloco.translate('documents.filters.allTypes') },
            ...this.availableTypes.map(t => ({ value: t, label: this.docTypeLabelFor(t) })),
        ];
    }

    get statusFilterOptions(): DropdownOption[] {
        return this.statuses.map(s => ({ value: s.value, label: this._transloco.translate(s.label) }));
    }

    constructor(
        private readonly _facade: DocumentsFacade,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute,
        private readonly _transloco: TranslocoService,
        private readonly _pullToRefresh: PullToRefreshService,
    ) {
        addIcons({
            add, addOutline, searchOutline,
            eyeOutline, createOutline, trashOutline,
            ellipsisHorizontalOutline, documentTextOutline, carOutline,
            checkmarkCircle,
        });
    }

    ngOnInit(): void {
        const carId = this._route.snapshot.queryParamMap.get('carId');
        if (carId) {
            this.selectedCarId = Number(carId);
        }

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
    onCarChange(value: string | number): void {
        this.selectedCarId = value === 'all' ? 'all' : Number(value);
        this.applyFilters();
    }

    onTypeChange(value: string | number): void {
        this.selectedType = String(value);
        this.applyFilters();
    }

    onStatusChange(value: string | number): void {
        this.selectedStatus = value as DocStatus | 'all';
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

    onCtaClick(event: MouseEvent, id: number): void {
        this.navigateToEdit(event, id);
    }

    onMobileCtaClick(id: number): void {
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
