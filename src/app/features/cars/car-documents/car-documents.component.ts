import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentDto } from '@hau/autogenapi/models';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
// eslint-disable-next-line no-restricted-imports -- known cross-feature coupling, tracked in docs/architecture-audit.md
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
import { docLabelKey } from '@hau/shared/config/document-type.config';
import { isForeignVignette } from '@hau/shared/config/vignette-country.config';
import {
    calcDocProgress, calcDocStatus, docCtaFor,
    DocCtaStyle, DocStatus, supersededDocumentIds,
} from '@hau/shared/utils/document-status.util';
import { DocumentListRowComponent } from '@hau/shared/component/document-list-row/document-list-row.component';
import { ListRowAction } from '@hau/shared/component/action-list-row/action-list-row.component';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { DocumentFileService } from '@hau/core/document-file.service';
import { IonContent, IonFab, IonFabButton, IonIcon, NavController, ToastController, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, addOutline, chevronDownOutline, documentTextOutline, timeOutline } from 'ionicons/icons';
import { take } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

export interface CarDocViewModel {
    doc: DocumentDto;
    status: DocStatus;
    daysLeft: number | null;
    /** A travel vignette past its end date — sorted last, shown neutrally. */
    ended: boolean;
    typeLabel: string;
    isActive: boolean;
    progressPercent: number | null;
    ctaLabel: string;
    ctaStyle: DocCtaStyle;
}

// Most urgent first: expired, then soonest-expiring, then valid, then no-expiry.
const STATUS_ORDER: Record<DocStatus, number> = { expired: 0, expiring: 1, valid: 2, 'no-expiry': 3 };

function sortByUrgency(a: CarDocViewModel, b: CarDocViewModel): number {
    // A finished travel vignette is history, not an emergency — keep it at the bottom.
    if (a.ended !== b.ended) return a.ended ? 1 : -1;
    if (a.status !== b.status) return STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
    if (a.daysLeft !== null && b.daysLeft !== null) return a.daysLeft - b.daysLeft;
    return 0;
}

function buildDocViewModel(doc: DocumentDto, transloco: TranslocoService): CarDocViewModel {
    const { status: rawStatus, daysLeft } = calcDocStatus(doc.expiry_date, doc.issue_date);
    // A travel vignette running out is expected: never "expiring", never a renew prompt.
    const foreign = isForeignVignette(doc);
    const status = foreign && rawStatus === 'expiring' ? 'valid' : rawStatus;
    const cta = foreign ? { label: '', style: 'none' as const } : docCtaFor(status, transloco);
    return {
        doc,
        status,
        daysLeft,
        ended: foreign && rawStatus === 'expired',
        typeLabel: transloco.translate(docLabelKey(doc)),
        isActive: doc.is_active !== false,
        progressPercent: calcDocProgress(doc.issue_date, doc.expiry_date),
        ctaLabel: cta.label,
        ctaStyle: cta.style,
    };
}

@UntilDestroy()
@Component({
    selector: 'app-car-documents',
    host: { class: 'ion-page' },
    templateUrl: 'car-documents.component.html',
    styleUrls: ['./car-documents.component.scss'],
    imports: [IonContent, IonFab, IonFabButton, IonIcon, AsyncPipe, TranslocoPipe, DocumentListRowComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarDocumentsComponent implements OnInit, ViewWillEnter, ViewWillLeave {
    @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;

    readonly currentCar$ = this._carDetailFacade.currentCar$;
    readonly viewModels = signal<CarDocViewModel[]>([]);
    /** Superseded (history) documents — hidden until the user asks for them. Newest first. */
    readonly historyModels = signal<CarDocViewModel[]>([]);
    readonly showHistory = signal(false);

    private _carId: string | null = null;

    constructor(
        private readonly _carDetailFacade: CarDetailsFacade,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _router: Router,
        private readonly _navCtrl: NavController,
        private readonly _transloco: TranslocoService,
        private readonly _headerActions: HeaderActionsService,
        private readonly _documentFile: DocumentFileService,
        private readonly _toastCtrl: ToastController,
    ) {
        addIcons({ add, addOutline, chevronDownOutline, documentTextOutline, timeOutline });
    }

    // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
    // fire on back-navigation — these Ionic lifecycle hooks do.
    ionViewWillEnter(): void {
        this._headerActions.setTitle(this._transloco.translate('documents.title'));
        this._headerActions.set(this._headerActionsTpl);
    }

    ionViewWillLeave(): void {
        this._headerActions.clearTitle();
        this._headerActions.clear();
    }

    ngOnInit(): void {
        this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
            this._carId = params['id'];
            this._carDetailFacade.loadCarDocuments(params['id']);
        });

        this._carDetailFacade.carDocuments$.pipe(untilDestroyed(this)).subscribe(docs => {
            // Expired documents already replaced by a newer one of the same kind are
            // history: out of the main list, behind the "show history" toggle.
            const superseded = supersededDocumentIds(docs);
            this.viewModels.set((docs ?? [])
                .filter(d => !superseded.has(d.id))
                .map(d => buildDocViewModel(d, this._transloco))
                .sort(sortByUrgency));
            this.historyModels.set((docs ?? [])
                .filter(d => superseded.has(d.id))
                // History never asks to be renewed — its successor already exists.
                .map(d => ({ ...buildDocViewModel(d, this._transloco), ctaLabel: '', ctaStyle: 'none' as const }))
                .sort((a, b) => new Date(b.doc.expiry_date ?? 0).getTime() - new Date(a.doc.expiry_date ?? 0).getTime()));
            if (!this.historyModels().length) this.showHistory.set(false);
        });
    }

    toggleHistory(): void {
        this.showHistory.update(v => !v);
    }

    addDocument(): void {
        if (!this._carId) return;
        void this._navCtrl.navigateForward(DOCUMENTS_ROUTES.add.fullPath, {
            queryParams: { carId: this._carId },
        });
    }

    onDocumentAction(action: ListRowAction, id: number): void {
        if (action === 'view') this.navigateToView(id);
        if (action === 'edit') this.navigateToEdit(id);
        if (action === 'renew') this.navigateToEdit(id);
        if (action === 'delete') this._carDetailFacade.deleteDocument(id);
    }

    navigateToView(id: number): void {
        void this._router.navigate([`${DOCUMENTS_ROUTES.view.fullPath}/${id}`]);
    }

    navigateToEdit(id: number): void {
        void this._router.navigate([`${DOCUMENTS_ROUTES.view.fullPath}/${id}/edit`]);
    }

    downloadFile(id: number): void {
        this._documentFile.download(id)
            .pipe(take(1), untilDestroyed(this))
            .subscribe({ error: () => void this._showDownloadError() });
    }

    private async _showDownloadError(): Promise<void> {
        const toast = await this._toastCtrl.create({
            message: this._transloco.translate('documents.detail.fileUnavailable'),
            duration: 3000,
            color: 'danger',
            position: 'top',
        });
        await toast.present();
    }
}
