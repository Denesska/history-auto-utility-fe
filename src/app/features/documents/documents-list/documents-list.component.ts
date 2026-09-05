import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, OnInit, TemplateRef, ViewChild, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
import { DocumentsFacade } from '@hau/features/documents/state/documents.facade';
import { DOC_TYPE_CONFIG, docTypeConfig } from '@hau/shared/config/document-type.config';
import {
    docUrgencyClass, DocUrgency,
    calcDocStatus, calcDocProgress, docCtaFor,
    DocStatus, DocCtaStyle,
} from '@hau/shared/utils/document-status.util';
import { PullToRefreshService } from '@hau/core/pull-to-refresh.service';
import { IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonSpinner, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { DocTypeBadgeComponent } from '@hau/shared/component/doc-type-badge/doc-type-badge.component';
import { DocExpiryRowComponent } from '@hau/shared/component/doc-expiry-row/doc-expiry-row.component';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { FabActionService } from '@hau/core/fab-action.service';
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

function buildViewModel(doc: DocumentDto, cars: CarDto[], transloco: TranslocoService): DocViewModel {
    const car  = cars.find(c => c.id === doc.car_id);
    const cfg  = docTypeConfig(doc.document_type);
    const { status, daysLeft } = calcDocStatus(doc.expiry_date);
    const cta = docCtaFor(status, transloco);
    return {
        doc,
        car,
        status,
        daysLeft,
        urgency:    daysLeft === null ? null : docUrgencyClass(daysLeft),
        typeLabel:  transloco.translate(cfg.label),
        carLabel:   car ? `${car.make} ${car.model}` : '—',
        isActive:   doc.is_active !== false,
        progressPercent: calcDocProgress(doc.issue_date, doc.expiry_date),
        ctaLabel:   cta.label,
        ctaStyle:   cta.style,
    };
}

@UntilDestroy()
@Component({
    selector: 'app-documents-list',
    templateUrl: 'documents-list.component.html',
    styleUrls: ['./documents-list.component.scss'],
    imports: [IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonSpinner, DatePipe, TranslocoPipe, DocTypeBadgeComponent, DocExpiryRowComponent, DropdownComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentsListComponent implements OnInit, ViewWillEnter, ViewWillLeave {
    @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;

    readonly loading = signal(false);

    // ── Raw data ──────────────────────────────────────────────────────
    private readonly allDocs = signal<DocViewModel[]>([]);
    private readonly cars = signal<CarDto[]>([]);

    // ── Filter state ─────────────────────────────────────────────────
    readonly selectedCarId = signal<number | 'all'>('all');
    readonly selectedType = signal<string>('all');
    readonly selectedStatus = signal<DocStatus | 'all'>('all');
    readonly searchQuery = signal('');

    // ── Derived ──────────────────────────────────────────────────────
    readonly filteredDocs = signal<DocViewModel[]>([]);
    readonly openMenuId = signal<number | null>(null);

    get availableCars(): CarDto[] { return this.cars(); }
    get availableTypes(): string[] {
        return [...new Set(this.allDocs().map(d => d.doc.document_type))];
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
        private readonly _headerActions: HeaderActionsService,
        private readonly _fabAction: FabActionService,
    ) {
        addIcons({
            add, addOutline, searchOutline,
            eyeOutline, createOutline, trashOutline,
            ellipsisHorizontalOutline, documentTextOutline, carOutline,
            checkmarkCircle,
        });
    }

    // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
    // fire on back-navigation — these Ionic lifecycle hooks do.
    ionViewWillEnter(): void {
        this._headerActions.setTitle(this._transloco.translate('documents.title'));
        this._headerActions.set(this._headerActionsTpl);
        this._fabAction.set({ run: () => this.navigateToAdd(), ariaLabelKey: 'nav.fab.addDocument' });
    }

    ionViewWillLeave(): void {
        this._headerActions.clearTitle();
        this._headerActions.clear();
        this._fabAction.clear();
    }

    ngOnInit(): void {
        const carId = this._route.snapshot.queryParamMap.get('carId');
        if (carId) {
            this.selectedCarId.set(Number(carId));
        }

        combineLatest([this._facade.cars$, this._facade.documents$, this._facade.loading$])
            .pipe(untilDestroyed(this))
            .subscribe(([cars, documents, loading]) => {
                this.loading.set(loading);
                this.cars.set(cars);
                this.allDocs.set(documents.map(doc => buildViewModel(doc, cars, this._transloco)));
                this.applyFilters();
            });

        this._facade.loadAll();
    }

    // ── Filters ───────────────────────────────────────────────────────
    onCarChange(value: string | number): void {
        this.selectedCarId.set(value === 'all' ? 'all' : Number(value));
        this.applyFilters();
    }

    onTypeChange(value: string | number): void {
        this.selectedType.set(String(value));
        this.applyFilters();
    }

    onStatusChange(value: string | number): void {
        this.selectedStatus.set(value as DocStatus | 'all');
        this.applyFilters();
    }

    onSearchInput(event: Event): void {
        this.searchQuery.set((event.target as HTMLInputElement).value);
        this.applyFilters();
    }

    applyFilters(): void {
        let docs = this.allDocs();

        const selectedCarId = this.selectedCarId();
        if (selectedCarId !== 'all') {
            docs = docs.filter(d => d.doc.car_id === selectedCarId);
        }
        const selectedType = this.selectedType();
        if (selectedType !== 'all') {
            docs = docs.filter(d => d.doc.document_type === selectedType);
        }
        const selectedStatus = this.selectedStatus();
        if (selectedStatus !== 'all') {
            docs = docs.filter(d => d.status === selectedStatus);
        }
        const searchQuery = this.searchQuery();
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            docs = docs.filter(d =>
                d.typeLabel.toLowerCase().includes(q) ||
                d.carLabel.toLowerCase().includes(q) ||
                d.doc.document_type.toLowerCase().includes(q),
            );
        }

        this.filteredDocs.set(docs);
    }

    // ── Actions ───────────────────────────────────────────────────────
    toggleMenu(event: MouseEvent, id: number): void {
        event.stopPropagation();
        this.openMenuId.update(current => current === id ? null : id);
    }

    deleteDocument(event: MouseEvent, id: number): void {
        event.stopPropagation();
        this.openMenuId.set(null);
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
        this.openMenuId.set(null);
        void this._router.navigate([`/main/documents/${id}/edit`]);
    }

    onCtaClick(event: MouseEvent, id: number): void {
        this.navigateToEdit(event, id);
    }

    onMobileCtaClick(id: number): void {
        this.openMenuId.set(null);
        void this._router.navigate([`/main/documents/${id}/edit`]);
    }

    onRefresh(event: Event): void {
        this._pullToRefresh.refresh(event);
    }

    @HostListener('document:click')
    closeMenus(): void {
        this.openMenuId.set(null);
    }

    // ── Helpers ───────────────────────────────────────────────────────
    typeConfig(type: string) { return docTypeConfig(type); }

    get totalCount(): number { return this.filteredDocs().length; }
    get totalAll(): number   { return this.allDocs().length; }

    readonly docTypeConfig = DOC_TYPE_CONFIG;
    docTypeLabelFor(type: string): string { return this._transloco.translate(docTypeConfig(type).label); }
}
