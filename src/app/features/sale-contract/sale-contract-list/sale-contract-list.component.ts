import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SaleContractApiService } from '@hau/core/sale-contract-api.service';
import { FabActionService } from '@hau/core/fab-action.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { SaleContractSummary } from '@hau/features/sale-contract/sale-contract.model';
import { SALE_CONTRACT_ROUTES } from '@hau/features/sale-contract/sale-contract.routes.const';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { formatDate } from '@hau/shared/utils/formatting.util';
import {
    AlertController, IonContent, IonIcon,
    IonRefresher, IonRefresherContent, ToastController,
    ViewWillEnter, ViewWillLeave,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    addOutline, documentTextOutline, cloudDownloadOutline,
    createOutline, trashOutline, archiveOutline, timeOutline,
} from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { take } from 'rxjs';

/**
 * One list row, precomputed so the template stays free of formatting logic.
 *
 * Deliberately built from `SaleContractSummary` alone — the listing endpoint
 * never decrypts the parties, so nothing personal (a CNP, an address, an ID
 * number) ever reaches this screen. Don't enrich this with a `get(id)` call.
 */
interface SaleContractRowVm {
    id: number;
    roleLabelKey: string;
    makeLabel: string;
    plateLabel: string;
    hasPlate: boolean;
    priceLabel: string | null;
    signingDateLabel: string | null;
    statusLabelKey: string;
    status: SaleContractSummary['status'];
    isDraft: boolean;
    isGenerated: boolean;
    isPurged: boolean;
    retentionUntilLabel: string;
}

@UntilDestroy()
@Component({
    selector: 'app-sale-contract-list',
    templateUrl: 'sale-contract-list.component.html',
    styleUrls: ['./sale-contract-list.component.scss'],
    imports: [
        LoaderComponent, IonContent, IonIcon,
        IonRefresher, IonRefresherContent, TranslocoPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleContractListComponent implements OnInit, ViewWillEnter, ViewWillLeave {
    @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;

    readonly loading = signal(true);
    readonly failed = signal(false);
    readonly rows = signal<SaleContractRowVm[]>([]);
    readonly busyId = signal<number | null>(null);

    private readonly _api = inject(SaleContractApiService);
    private readonly _router = inject(Router);
    private readonly _transloco = inject(TranslocoService);
    private readonly _headerActions = inject(HeaderActionsService);
    private readonly _fabAction = inject(FabActionService);
    private readonly _alertCtrl = inject(AlertController);
    private readonly _toastCtrl = inject(ToastController);

    constructor() {
        addIcons({
            addOutline, documentTextOutline, cloudDownloadOutline,
            createOutline, trashOutline, archiveOutline, timeOutline,
        });
    }

    ngOnInit(): void {
        this._load();
    }

    // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
    // fire on back-navigation — these Ionic lifecycle hooks do.
    ionViewWillEnter(): void {
        this._headerActions.setTitle(this._transloco.translate('saleContract.title'));
        this._headerActions.set(this._headerActionsTpl);
        // The mobile half of the "add" split — see the note in the SCSS. This
        // route keeps the shell's own centre FAB, so "new contract" is wired to
        // that rather than to a second, page-local one.
        this._fabAction.set({ run: () => this.navigateToAdd(), ariaLabelKey: 'saleContract.actions.new' });
        // Coming back from the wizard or from a detail delete, the list is stale.
        if (!this.loading()) this._load();
    }

    ionViewWillLeave(): void {
        this._headerActions.clearTitle();
        this._headerActions.clear();
        this._fabAction.clear();
    }

    // ── Data ──────────────────────────────────────────────────────────
    private _load(event?: Event): void {
        this.loading.set(true);
        this._api.list().pipe(take(1), untilDestroyed(this)).subscribe({
            next: contracts => {
                this.rows.set(contracts.map(c => this._toVm(c)));
                this.failed.set(false);
                this.loading.set(false);
                this._completeRefresher(event);
            },
            error: () => {
                this.failed.set(true);
                this.loading.set(false);
                this._completeRefresher(event);
                void this._showError();
            },
        });
    }

    private _toVm(c: SaleContractSummary): SaleContractRowVm {
        return {
            id: c.id,
            roleLabelKey: c.role === 'SELLER' ? 'saleContract.role.sellerShort' : 'saleContract.role.buyerShort',
            makeLabel: c.vehicle_make ?? '—',
            plateLabel: c.license_plate ?? this._transloco.translate('saleContract.list.noPlate'),
            hasPlate: !!c.license_plate,
            priceLabel: c.price_lei == null ? null : `${c.price_lei.toLocaleString()} lei`,
            signingDateLabel: c.signing_date ? formatDate(c.signing_date) : null,
            statusLabelKey: `saleContract.status.${c.status}`,
            status: c.status,
            isDraft: c.status === 'DRAFT',
            isGenerated: c.status === 'GENERATED',
            // Erased on schedule, not a failure — the row says so and offers no
            // download, because there is no longer a PDF behind it.
            isPurged: c.status === 'PURGED',
            retentionUntilLabel: formatDate(c.retention_until),
        };
    }

    /**
     * Our own refresher handler rather than `PullToRefreshService`: that one
     * force-refreshes the bootstrap state this screen doesn't read from, and
     * contracts are deliberately not held in any store.
     */
    onRefresh(event: Event): void {
        this._load(event);
    }

    private _completeRefresher(event?: Event): void {
        if (!event) return;
        void (event.target as HTMLIonRefresherElement).complete();
    }

    // ── Navigation ────────────────────────────────────────────────────
    navigateToAdd(): void {
        void this._router.navigate([SALE_CONTRACT_ROUTES.create.fullPath]);
    }

    openContract(id: number): void {
        void this._router.navigate([`${SALE_CONTRACT_ROUTES.list.fullPath}/${id}`]);
    }

    continueDraft(id: number): void {
        void this._router.navigate([`${SALE_CONTRACT_ROUTES.list.fullPath}/${id}/edit`]);
    }

    // ── Row actions ───────────────────────────────────────────────────
    download(id: number): void {
        if (this.busyId() !== null) return;
        this.busyId.set(id);
        this._api.downloadById(id).pipe(take(1), untilDestroyed(this)).subscribe({
            next: () => this.busyId.set(null),
            error: () => {
                this.busyId.set(null);
                void this._showError();
            },
        });
    }

    async confirmDelete(id: number): Promise<void> {
        const alert = await this._alertCtrl.create({
            header: this._transloco.translate('saleContract.delete.title'),
            message: this._transloco.translate('saleContract.delete.body'),
            buttons: [
                { text: this._transloco.translate('common.cancel'), role: 'cancel' },
                {
                    text: this._transloco.translate('saleContract.delete.confirm'),
                    role: 'destructive',
                    handler: () => this._delete(id),
                },
            ],
        });
        await alert.present();
    }

    private _delete(id: number): void {
        this.busyId.set(id);
        this._api.remove(id).pipe(take(1), untilDestroyed(this)).subscribe({
            next: () => {
                this.busyId.set(null);
                this.rows.update(rows => rows.filter(r => r.id !== id));
                void this._showToast('saleContract.toast.deleted');
            },
            error: () => {
                this.busyId.set(null);
                void this._showError();
            },
        });
    }

    // ── Feedback ──────────────────────────────────────────────────────
    private _showError(): Promise<void> {
        return this._showToast('saleContract.toast.error', 'danger');
    }

    private async _showToast(key: string, color?: string): Promise<void> {
        const toast = await this._toastCtrl.create({
            message: this._transloco.translate(key),
            duration: 3000,
            color,
            position: 'top',
        });
        await toast.present();
    }
}
