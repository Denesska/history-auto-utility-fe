import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentDto } from '@hau/autogenapi/models';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
// eslint-disable-next-line no-restricted-imports -- known cross-feature coupling, tracked in docs/architecture-audit.md
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
import { docTypeConfig } from '@hau/shared/config/document-type.config';
import {
    calcDocProgress, calcDocStatus, docCtaFor,
    DocCtaStyle, DocStatus,
} from '@hau/shared/utils/document-status.util';
import { DocExpiryRowComponent } from '@hau/shared/component/doc-expiry-row/doc-expiry-row.component';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { IonContent, IonFab, IonFabButton, IonIcon, NavController, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, addOutline, documentTextOutline } from 'ionicons/icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

export interface CarDocViewModel {
    doc: DocumentDto;
    status: DocStatus;
    daysLeft: number | null;
    typeLabel: string;
    isActive: boolean;
    progressPercent: number | null;
    ctaLabel: string;
    ctaStyle: DocCtaStyle;
}

// Most urgent first: expired, then soonest-expiring, then valid, then no-expiry.
const STATUS_ORDER: Record<DocStatus, number> = { expired: 0, expiring: 1, valid: 2, 'no-expiry': 3 };

function sortByUrgency(a: CarDocViewModel, b: CarDocViewModel): number {
    if (a.status !== b.status) return STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
    if (a.daysLeft !== null && b.daysLeft !== null) return a.daysLeft - b.daysLeft;
    return 0;
}

function buildDocViewModel(doc: DocumentDto, transloco: TranslocoService): CarDocViewModel {
    const cfg = docTypeConfig(doc.document_type);
    const { status, daysLeft } = calcDocStatus(doc.expiry_date);
    const cta = docCtaFor(status, transloco);
    return {
        doc,
        status,
        daysLeft,
        typeLabel: transloco.translate(cfg.label),
        isActive: doc.is_active !== false,
        progressPercent: calcDocProgress(doc.issue_date, doc.expiry_date),
        ctaLabel: cta.label,
        ctaStyle: cta.style,
    };
}

@UntilDestroy()
@Component({
    selector: 'app-car-documents',
    templateUrl: 'car-documents.component.html',
    styleUrls: ['./car-documents.component.scss'],
    imports: [IonContent, IonFab, IonFabButton, IonIcon, AsyncPipe, DatePipe, TranslocoPipe, DocExpiryRowComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarDocumentsComponent implements OnInit, ViewWillEnter, ViewWillLeave {
    @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;

    readonly currentCar$ = this._carDetailFacade.currentCar$;
    readonly viewModels = signal<CarDocViewModel[]>([]);

    private _carId: string | null = null;

    constructor(
        private readonly _carDetailFacade: CarDetailsFacade,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _router: Router,
        private readonly _navCtrl: NavController,
        private readonly _transloco: TranslocoService,
        private readonly _headerActions: HeaderActionsService,
    ) {
        addIcons({ add, addOutline, documentTextOutline });
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
            this.viewModels.set((docs ?? []).map(d => buildDocViewModel(d, this._transloco)).sort(sortByUrgency));
        });
    }

    addDocument(): void {
        if (!this._carId) return;
        void this._navCtrl.navigateForward(DOCUMENTS_ROUTES.add.fullPath, {
            queryParams: { carId: this._carId },
        });
    }

    navigateToView(id: number): void {
        void this._router.navigate([`${DOCUMENTS_ROUTES.view.fullPath}/${id}`]);
    }

    navigateToEdit(id: number): void {
        void this._router.navigate([`${DOCUMENTS_ROUTES.view.fullPath}/${id}/edit`]);
    }
}
