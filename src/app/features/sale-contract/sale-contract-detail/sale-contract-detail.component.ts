import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaleContractApiService } from '@hau/core/sale-contract-api.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import {
    ContractAddress, ContractParty, SaleContract,
} from '@hau/features/sale-contract/sale-contract.model';
import { SALE_CONTRACT_ROUTES } from '@hau/features/sale-contract/sale-contract.routes.const';
import { BreadcrumbComponent, BreadcrumbItem } from '@hau/shared/component/breadcrumb/breadcrumb.component';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { formatDate } from '@hau/shared/utils/formatting.util';
import {
    AlertController, IonContent, IonIcon, IonSpinner,
    NavController, ToastController, ViewWillEnter, ViewWillLeave,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    createOutline, trashOutline, cloudDownloadOutline, archiveOutline,
    personOutline, businessOutline, carOutline, cashOutline,
    checkmarkCircleOutline, ellipseOutline, timeOutline,
} from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { take } from 'rxjs';

/** One party card. `party` is null once the retention job has erased it. */
interface PartyVm {
    titleKey: string;
    party: ContractParty | null;
    /** The form's street blanks, joined: "Str. X nr. 1, bl. A, ap. 2". */
    streetLine: string | null;
    /** The locality blanks: village/sector, city, county, postcode, country. */
    placeLine: string | null;
    /** The whole fiscal domicile on one line — it has a label of its own. */
    fiscalAddressLine: string | null;
}

/** One line of the record of what the user confirmed before generating. */
interface ConfirmationVm {
    labelKey: string;
    confirmed: boolean;
}

/**
 * The street blanks of one address, in the order the form prints them. The
 * abbreviations (nr./bl./sc./et./ap.) are what the paper form itself uses and
 * are identical in both app languages, so they are not translation keys.
 */
function streetLineOf(address: ContractAddress | null | undefined): string | null {
    if (!address) return null;
    const line = [
        address.street,
        address.street_number ? `nr. ${address.street_number}` : null,
        address.building ? `bl. ${address.building}` : null,
        address.staircase ? `sc. ${address.staircase}` : null,
        address.floor ? `et. ${address.floor}` : null,
        address.apartment ? `ap. ${address.apartment}` : null,
    ].filter(Boolean).join(' ');
    return line.length > 0 ? line : null;
}

/** The locality blanks of one address, largest unit last. */
function placeLineOf(address: ContractAddress | null | undefined): string | null {
    if (!address) return null;
    const line = [
        address.village_or_sector,
        address.city,
        address.county,
        address.postal_code,
        address.country,
    ].filter(Boolean).join(', ');
    return line.length > 0 ? line : null;
}

/**
 * The four flags the API stores, in the order the user saw them. Keys are the
 * backend's; labels are the same wording the confirmation step shows.
 */
const CONFIRMATION_LABELS: ReadonlyArray<readonly [string, string]> = [
    ['data_verified', 'saleContract.confirmations.dataVerified'],
    ['declarations_accepted', 'saleContract.confirmations.declarationsAccepted'],
    ['criminal_code_acknowledged', 'saleContract.confirmations.criminalCode'],
    ['disclaimer_acknowledged', 'saleContract.confirmations.disclaimer'],
];

@UntilDestroy()
@Component({
    selector: 'app-sale-contract-detail',
    templateUrl: 'sale-contract-detail.component.html',
    styleUrls: ['./sale-contract-detail.component.scss'],
    imports: [
        LoaderComponent, BreadcrumbComponent, IonContent, IonIcon, IonSpinner, TranslocoPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleContractDetailComponent implements OnInit, ViewWillEnter, ViewWillLeave {
    @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;

    /**
     * The only place this contract lives. It carries the other party's CNP,
     * address and ID document number, so it is held in the component that
     * displays it and nowhere else — no store, no service cache, no URL.
     */
    readonly contract = signal<SaleContract | null>(null);
    readonly loading = signal(true);
    readonly downloading = signal(false);
    readonly deleting = signal(false);

    private readonly _api = inject(SaleContractApiService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);
    private readonly _nav = inject(NavController);
    private readonly _transloco = inject(TranslocoService);
    private readonly _headerActions = inject(HeaderActionsService);
    private readonly _alertCtrl = inject(AlertController);
    private readonly _toastCtrl = inject(ToastController);

    private _id = 0;
    private _viewActive = false;

    constructor() {
        addIcons({
            createOutline, trashOutline, cloudDownloadOutline, archiveOutline,
            personOutline, businessOutline, carOutline, cashOutline,
            checkmarkCircleOutline, ellipseOutline, timeOutline,
        });
    }

    ngOnInit(): void {
        this._id = Number(this._route.snapshot.paramMap.get('id'));
        this._load();
    }

    // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
    // fire on back-navigation — these Ionic lifecycle hooks do.
    ionViewWillEnter(): void {
        this._viewActive = true;
        this._headerActions.set(this._headerActionsTpl);
        this._pushHeaderTitle();
    }

    ionViewWillLeave(): void {
        this._viewActive = false;
        this._headerActions.clear();
        this._headerActions.clearTitle();
    }

    private _load(): void {
        this.loading.set(true);
        this._api.get(this._id).pipe(take(1), untilDestroyed(this)).subscribe({
            next: contract => {
                this.contract.set(contract);
                this.loading.set(false);
                this._pushHeaderTitle();
            },
            error: () => {
                this.loading.set(false);
                void this._showError();
                void this._router.navigate([SALE_CONTRACT_ROUTES.list.fullPath]);
            },
        });
    }

    /** The title resolves with the data, so it is re-pushed whenever that lands. */
    private _pushHeaderTitle(): void {
        if (!this._viewActive) return;
        this._headerActions.setTitle(this.vehicleTitle ?? this._transloco.translate('saleContract.title'));
    }

    get breadcrumbItems(): BreadcrumbItem[] {
        return [
            { label: this._transloco.translate('saleContract.title'), action: () => this.goBack() },
            { label: this.vehicleTitle ?? '' },
        ];
    }

    // ── Derived view data ─────────────────────────────────────────────
    get vehicleTitle(): string | null {
        const c = this.contract();
        if (!c) return null;
        return c.vehicle_make ?? c.vehicle.make ?? c.license_plate ?? null;
    }

    get plateLabel(): string {
        const c = this.contract();
        return c?.license_plate ?? c?.vehicle.license_plate
            ?? this._transloco.translate('saleContract.list.noPlate');
    }

    get hasPlate(): boolean {
        const c = this.contract();
        return !!(c?.license_plate ?? c?.vehicle.license_plate);
    }

    get statusLabelKey(): string {
        return `saleContract.status.${this.contract()?.status ?? 'DRAFT'}`;
    }

    get roleLabelKey(): string {
        return this.contract()?.role === 'BUYER'
            ? 'saleContract.role.buyerShort'
            : 'saleContract.role.sellerShort';
    }

    get isPurged(): boolean { return this.contract()?.status === 'PURGED'; }
    get isGenerated(): boolean { return this.contract()?.status === 'GENERATED'; }

    /** Sections (1) and (2) of the form, in the order they appear on it. */
    get parties(): PartyVm[] {
        const c = this.contract();
        if (!c) return [];
        return [
            this._toPartyVm('saleContract.role.sellerShort', c.seller),
            this._toPartyVm('saleContract.role.buyerShort', c.buyer),
        ];
    }

    private _toPartyVm(titleKey: string, party: ContractParty | null): PartyVm {
        const fiscal = party?.fiscal_address;
        const fiscalLine = [streetLineOf(fiscal), placeLineOf(fiscal)]
            .filter(Boolean).join(', ');
        return {
            titleKey,
            party,
            streetLine: streetLineOf(party?.address),
            placeLine: placeLineOf(party?.address),
            fiscalAddressLine: fiscalLine.length > 0 ? fiscalLine : null,
        };
    }

    get priceLabel(): string | null {
        const price = this.contract()?.price_lei;
        return price == null ? null : `${price.toLocaleString()} lei`;
    }

    get signingDateLabel(): string | null {
        const date = this.contract()?.signing_date;
        return date ? formatDate(date) : null;
    }

    get retentionUntilLabel(): string {
        return formatDate(this.contract()?.retention_until);
    }

    get generatedAtLabel(): string | null {
        const at = this.contract()?.pdf_generated_at;
        return at ? formatDate(at) : null;
    }

    /**
     * What the user confirmed, as a record — never as editable checkboxes. The
     * confirmations were made once, before the PDF was produced; there is
     * nothing to toggle here.
     */
    get confirmations(): ConfirmationVm[] {
        const stored = this.contract()?.confirmations;
        if (!stored) return [];
        return CONFIRMATION_LABELS
            .filter(([key]) => key in stored)
            .map(([key, labelKey]) => ({ labelKey, confirmed: stored[key] === true }));
    }

    formatDateValue(value: string | null | undefined): string {
        return formatDate(value);
    }

    // ── Actions ───────────────────────────────────────────────────────
    navigateToEdit(): void {
        void this._router.navigate([`${SALE_CONTRACT_ROUTES.list.fullPath}/${this._id}/edit`]);
    }

    /** A "special" bottom action, per the top-bar rule — not a page action. */
    download(): void {
        if (this.downloading()) return;
        this.downloading.set(true);
        this._api.downloadById(this._id).pipe(take(1), untilDestroyed(this)).subscribe({
            next: () => this.downloading.set(false),
            error: () => {
                this.downloading.set(false);
                void this._showError();
            },
        });
    }

    async confirmDelete(): Promise<void> {
        const alert = await this._alertCtrl.create({
            header: this._transloco.translate('saleContract.delete.title'),
            message: this._transloco.translate('saleContract.delete.body'),
            buttons: [
                { text: this._transloco.translate('common.cancel'), role: 'cancel' },
                {
                    text: this._transloco.translate('saleContract.delete.confirm'),
                    role: 'destructive',
                    handler: () => this._delete(),
                },
            ],
        });
        await alert.present();
    }

    private _delete(): void {
        if (this.deleting()) return;
        this.deleting.set(true);
        this._api.remove(this._id).pipe(take(1), untilDestroyed(this)).subscribe({
            next: () => {
                this.deleting.set(false);
                void this._showToast('saleContract.toast.deleted');
                void this._router.navigate([SALE_CONTRACT_ROUTES.list.fullPath]);
            },
            error: () => {
                this.deleting.set(false);
                void this._showError();
            },
        });
    }

    goBack(): void { this._nav.back(); }

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
