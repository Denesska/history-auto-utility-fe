import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDto, ExtractionResultDto } from '@hau/autogenapi/models';
import { DocumentExtractionService } from '@hau/core/document-extraction.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { SaleContractApiService } from '@hau/core/sale-contract-api.service';
import { ContractPartyFormComponent } from '@hau/features/sale-contract/components/contract-party-form/contract-party-form.component';
import { ContractVehicleFormComponent } from '@hau/features/sale-contract/components/contract-vehicle-form/contract-vehicle-form.component';
import { ExtractionReviewComponent, ReviewConfidence } from '@hau/features/sale-contract/components/extraction-review/extraction-review.component';
import { IdentityConsentComponent } from '@hau/features/sale-contract/components/identity-consent/identity-consent.component';
import { WizardStepsComponent } from '@hau/features/sale-contract/components/wizard-steps/wizard-steps.component';
import {
    ContractAddress, ContractParty, ContractRepresentative, ContractVehicle,
    CreateSaleContractPayload, IdentityExtractionResult, SaleContract,
    SaleContractConfirmations, SaleContractRole,
} from '@hau/features/sale-contract/sale-contract.model';
import { SALE_CONTRACT_CONSENT_VERSION, SALE_CONTRACT_ROUTES } from '@hau/features/sale-contract/sale-contract.routes.const';
import { BreadcrumbComponent, BreadcrumbItem } from '@hau/shared/component/breadcrumb/breadcrumb.component';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { resizeImage } from '@hau/shared/utils/image-resize.util';
import { formatDate } from '@hau/shared/utils/formatting.util';
import {
    AlertController, IonContent, IonIcon, IonSpinner,
    NavController, ToastController, ViewWillEnter, ViewWillLeave,
} from '@ionic/angular/standalone';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { addIcons } from 'ionicons';
import {
    alertCircleOutline, cameraOutline, carOutline, carSportOutline, cashOutline,
    checkmarkOutline, chevronBackOutline, chevronForwardOutline, closeOutline,
    createOutline, documentTextOutline, timeOutline,
} from 'ionicons/icons';
import { Observable, take, tap } from 'rxjs';

/** One label/value pair on the review step. */
interface ReviewRow {
    labelKey: string;
    value: string;
}

/** Where the vehicle details came from. All three land on the same form. */
type VehicleSource = 'garage' | 'scan' | 'manual';
/** Where the other party's details came from. */
type PartySource = 'scan' | 'manual';

const STEP_ROLE = 0;
const STEP_VEHICLE = 1;
const STEP_PARTIES = 2;
const STEP_PRICE = 3;
const STEP_REVIEW = 4;

const STEP_KEYS = [
    'saleContract.wizard.steps.role',
    'saleContract.wizard.steps.vehicle',
    'saleContract.wizard.steps.parties',
    'saleContract.wizard.steps.price',
    'saleContract.wizard.steps.review',
];

// Mirrors the backend's supported upload types for both extraction endpoints.
const EXTRACTABLE_MIME_TYPES = new Set(['application/pdf', 'image/jpeg', 'image/png', 'image/webp']);

/**
 * The contract wizard — create (`new`) and continue-a-draft (`:id/edit`).
 *
 * It collects what ITL 054, Anexa nr. 2 ("contract de înstrăinare-dobândire a
 * unui mijloc de transport") needs, in five steps, and hands it to the backend
 * which renders the PDF.
 *
 * Three things here are not ordinary form work:
 *
 * 1. **Consent gates the camera.** The other party's identity document belongs
 *    to someone who is not a user of this app. `IdentityConsentComponent` has
 *    to be accepted before the picker is reachable at all, the version of the
 *    wording shown goes to `extractIdentity()` and onto the contract, and
 *    declining is a first-class path that simply switches to typing.
 * 2. **Extraction is a suggestion.** Results are rendered through
 *    `ExtractionReviewComponent`, warnings and confidence in full, above an
 *    editable form. Nothing is auto-accepted and nothing is hidden — a CNP that
 *    failed its checksum arrives with its value kept precisely so the user can
 *    see and fix the misread digit.
 * 3. **Four confirmations gate generation.** They are never pre-ticked and
 *    there is no "tick all" — each records that the user was shown one of the
 *    declarations printed at section (5) of the paper form.
 *
 * There is deliberately no NGXS store (see the comment in `main.routes.ts`) and
 * deliberately no local draft cache: a third party's CNP, ID document number
 * and home address are on this screen, so the only place they are persisted is
 * server-side through `create()`/`update()`, which is encrypted at rest. They
 * are never logged, never put in a URL, and never written to web storage.
 */
@UntilDestroy()
@Component({
    selector: 'app-sale-contract-wizard',
    templateUrl: './sale-contract-wizard.component.html',
    styleUrls: ['./sale-contract-wizard.component.scss'],
    imports: [
        ReactiveFormsModule, TranslocoPipe,
        IonContent, IonIcon, IonSpinner,
        BreadcrumbComponent, DropdownComponent, LoaderComponent,
        WizardStepsComponent, ContractVehicleFormComponent, ContractPartyFormComponent,
        IdentityConsentComponent, ExtractionReviewComponent,
    ],
})
export class SaleContractWizardComponent implements OnInit, ViewWillEnter, ViewWillLeave {
    @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;
    @ViewChild('headerStartActionsTpl') private _headerStartActionsTpl!: TemplateRef<unknown>;

    private readonly _fb = inject(FormBuilder);
    private readonly _api = inject(SaleContractApiService);
    private readonly _docExtraction = inject(DocumentExtractionService);
    private readonly _bootstrap = inject(BootstrapFacade);
    private readonly _headerActions = inject(HeaderActionsService);
    private readonly _transloco = inject(TranslocoService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);
    private readonly _nav = inject(NavController);
    private readonly _alertCtrl = inject(AlertController);
    private readonly _toastCtrl = inject(ToastController);

    readonly stepKeys = STEP_KEYS;
    readonly STEP_ROLE = STEP_ROLE;
    readonly STEP_VEHICLE = STEP_VEHICLE;
    readonly STEP_PARTIES = STEP_PARTIES;
    readonly STEP_PRICE = STEP_PRICE;
    readonly STEP_REVIEW = STEP_REVIEW;

    form!: FormGroup;

    step = STEP_ROLE;
    maxReached = STEP_ROLE;

    contractId: number | null = null;
    loading = false;
    saving = false;
    generating = false;
    /** Set once the user tried to move on with a step still incomplete. */
    showStepErrors = false;

    cars: CarDto[] = [];

    // ── Vehicle step ──────────────────────────────────────────────────
    vehicleSource: VehicleSource | null = null;
    vehicleExtracting = false;
    vehicleExtraction: ExtractionResultDto | null = null;
    vehicleExtractionFailed = false;
    vehicleExtractionUnavailable = false;

    // ── Parties step ──────────────────────────────────────────────────
    otherPartySource: PartySource | null = null;
    /** True only after the consent checkbox was ticked and accepted. */
    consentAccepted = false;
    consentVisible = false;
    identityExtracting = false;
    identityExtraction: IdentityExtractionResult | null = null;
    identityExtractionFailed = false;
    identityExtractionUnavailable = false;
    myIdentityPrefilled = false;

    /** Scanning your own document needs no consent gate — see onMyIdentityFileSelected. */
    myIdentityExtracting = false;
    myIdentityExtraction: IdentityExtractionResult | null = null;
    myIdentityExtractionFailed = false;
    myIdentityExtractionUnavailable = false;

    private _viewActive = false;

    constructor() {
        addIcons({
            alertCircleOutline, cameraOutline, carOutline, carSportOutline, cashOutline,
            checkmarkOutline, chevronBackOutline, chevronForwardOutline, closeOutline,
            createOutline, documentTextOutline, timeOutline,
        });

        this.form = this._fb.group({
            role: [null as SaleContractRole | null, Validators.required],
            car_id: [null as number | null],
            vehicle: this._buildVehicleGroup(),
            me: this._buildPartyGroup(),
            other: this._buildPartyGroup(),
            price_lei: [null as number | null, [Validators.required, Validators.min(0)]],
            signing_date: [this._today(), Validators.required],
            signing_place: ['', Validators.required],
            has_annexes: [false],
            keep_in_history: [false],
            save_my_identity: [false],
            // Never pre-ticked, and there is no "tick all" — see the class note.
            confirmations: this._fb.group({
                data_verified: [false],
                declarations_accepted: [false],
                criminal_code_acknowledged: [false],
                disclaimer_acknowledged: [false],
            }),
        });

        this._wireCompanyValidators(this.meGroup);
        this._wireCompanyValidators(this.otherGroup);
    }

    // ── Convenience accessors ─────────────────────────────────────────

    get vehicleGroup(): FormGroup { return this.form.get('vehicle') as FormGroup; }
    get meGroup(): FormGroup { return this.form.get('me') as FormGroup; }
    get otherGroup(): FormGroup { return this.form.get('other') as FormGroup; }
    get confirmationsGroup(): FormGroup { return this.form.get('confirmations') as FormGroup; }

    get role(): SaleContractRole | null {
        return this.form.get('role')?.value ?? null;
    }

    get isEditMode(): boolean { return this.contractId !== null; }

    get pageTitle(): string {
        return this._transloco.translate(
            this.isEditMode ? 'saleContract.wizard.editTitle' : 'saleContract.wizard.addTitle',
        );
    }

    get breadcrumbItems(): BreadcrumbItem[] {
        return [
            { label: this._transloco.translate('saleContract.title'), action: () => this.cancel() },
            { label: this.pageTitle },
        ];
    }

    /** "Your details" always fills the section matching the role the user picked. */
    get myPartyTitleKey(): string {
        return this.role === 'BUYER' ? 'saleContract.role.buyerShort' : 'saleContract.role.sellerShort';
    }

    get otherPartyTitleKey(): string {
        return this.role === 'BUYER' ? 'saleContract.role.sellerShort' : 'saleContract.role.buyerShort';
    }

    get carOptions(): DropdownOption[] {
        return this.cars.map(car => ({
            value: car.id,
            label: `${car.make} ${car.model} · ${car.license_plate}`,
        }));
    }

    get vehicleExtractionConfidence(): ReviewConfidence {
        return (this.vehicleExtraction?.confidence ?? 'none') as ReviewConfidence;
    }

    get identityExtractionConfidence(): ReviewConfidence {
        return (this.identityExtraction?.confidence ?? 'none') as ReviewConfidence;
    }

    get myIdentityExtractionConfidence(): ReviewConfidence {
        return (this.myIdentityExtraction?.confidence ?? 'none') as ReviewConfidence;
    }

    get allConfirmed(): boolean {
        const v = this.confirmationsGroup.getRawValue() as Record<string, boolean>;
        return Object.values(v).every(Boolean);
    }

    get canSaveDraft(): boolean {
        return !!this.role && !this.saving && !this.generating && !this.loading;
    }

    // ── Lifecycle ─────────────────────────────────────────────────────

    ngOnInit(): void {
        this._bootstrap.ownedCars$
            .pipe(untilDestroyed(this))
            .subscribe(cars => (this.cars = cars));
        this._bootstrap.bootstrap();

        const id = this._route.snapshot.paramMap.get('id');
        if (id) {
            this._loadContract(Number(id));
        } else {
            this._loadMyIdentity();
        }
    }

    // IonicRouteStrategy caches routed components, so ngOnInit/ngOnDestroy
    // can't be trusted for header registration — these hooks can.
    ionViewWillEnter(): void {
        this._viewActive = true;
        this._headerActions.set(this._headerActionsTpl);
        this._headerActions.setStart(this._headerStartActionsTpl);
        this._headerActions.setTitle(this.pageTitle);
    }

    ionViewWillLeave(): void {
        this._viewActive = false;
        this._headerActions.clear();
        this._headerActions.clearTitle();
    }

    private _pushTitle(): void {
        if (this._viewActive) this._headerActions.setTitle(this.pageTitle);
    }

    // ── Step navigation ───────────────────────────────────────────────

    next(): void {
        if (!this._validateStep(this.step)) {
            this.showStepErrors = true;
            return;
        }
        this.showStepErrors = false;
        this.goToStep(Math.min(this.step + 1, STEP_REVIEW));
    }

    back(): void {
        this.showStepErrors = false;
        if (this.step === STEP_ROLE) return;
        this.goToStep(this.step - 1);
    }

    goToStep(index: number): void {
        if (index < STEP_ROLE || index > STEP_REVIEW) return;
        this.step = index;
        this.maxReached = Math.max(this.maxReached, index);
        this.showStepErrors = false;
    }

    private _validateStep(index: number): boolean {
        switch (index) {
            case STEP_ROLE:
                return !!this.role;
            case STEP_VEHICLE:
                this.vehicleGroup.markAllAsTouched();
                return this.vehicleGroup.valid;
            case STEP_PARTIES:
                this.meGroup.markAllAsTouched();
                this.otherGroup.markAllAsTouched();
                return this.meGroup.valid && this.otherGroup.valid;
            case STEP_PRICE:
                for (const name of ['price_lei', 'signing_date', 'signing_place']) {
                    this.form.get(name)?.markAsTouched();
                }
                return ['price_lei', 'signing_date', 'signing_place']
                    .every(name => !!this.form.get(name)?.valid);
            default:
                return true;
        }
    }

    // ── Step 1: role ──────────────────────────────────────────────────

    selectRole(role: SaleContractRole): void {
        this.form.get('role')?.setValue(role);
        this._pushTitle();
    }

    // ── Step 2: vehicle ───────────────────────────────────────────────

    selectVehicleSource(source: VehicleSource): void {
        this.vehicleSource = source;
        this.vehicleExtraction = null;
        this.vehicleExtractionFailed = false;
        this.vehicleExtractionUnavailable = false;

        // Apply the first car straight away when picking the garage path.
        // The native <select> underneath app-dropdown always *displays* its
        // first option, with or without a value bound — so leaving car_id null
        // shows a car that was never chosen, next to an empty form. The user
        // then hits Continue believing they picked it. Selecting it for real
        // makes what is displayed and what is in the form agree.
        if (source === 'garage' && this.cars.length > 0 && this.form.get('car_id')?.value == null) {
            this.onCarPicked(this.cars[0].id);
        }
    }

    resetVehicleSource(): void {
        this.vehicleSource = null;
    }

    onCarPicked(value: string | number): void {
        const car = this.cars.find(c => c.id === Number(value));
        if (!car) return;
        this.form.get('car_id')?.setValue(car.id);
        this.vehicleGroup.patchValue({
            make: car.make,
            type: car.model ?? '',
            vin: car.vin ?? '',
            license_plate: car.license_plate,
            manufacture_year: car.year ?? null,
            itp_expiry_date: car.itp_expiry_date ? car.itp_expiry_date.slice(0, 10) : '',
            acquired_date: car.ownership_start_date ? car.ownership_start_date.slice(0, 10) : '',
        });
    }

    /**
     * The registration certificate ("talon") goes through the same extraction
     * endpoint the documents form uses — the backend already recognises
     * `REGISTRATION` documents. Only the fields the contract form has blanks
     * for are mapped across; colour and fuel type have nowhere to go.
     */
    onRegistrationFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file) return;

        this.vehicleExtraction = null;
        this.vehicleExtractionFailed = false;
        this.vehicleExtractionUnavailable = false;

        if (!EXTRACTABLE_MIME_TYPES.has(file.type)) {
            this.vehicleExtractionFailed = true;
            return;
        }

        this.vehicleExtracting = true;
        this._prepare(file).then(prepared => {
            this._docExtraction.extract(prepared)
                .pipe(take(1), untilDestroyed(this))
                .subscribe({
                    next: result => {
                        this.vehicleExtracting = false;
                        this.vehicleExtraction = result;
                        if (result.detected) this._applyVehicleExtraction(result);
                        else this.vehicleExtractionFailed = true;
                    },
                    error: (err: HttpErrorResponse) => {
                        this.vehicleExtracting = false;
                        this.vehicleExtractionFailed = true;
                        this.vehicleExtractionUnavailable = err?.status === 503;
                    },
                });
        });
    }

    private _applyVehicleExtraction(result: ExtractionResultDto): void {
        const f = result.fields;
        const patch: Record<string, unknown> = {};
        if (f.vehicle_make) patch['make'] = f.vehicle_make;
        if (f.vehicle_model) patch['type'] = f.vehicle_model;
        else if (f.vehicle_category) patch['type'] = f.vehicle_category;
        if (f.vin) patch['vin'] = f.vin;
        if (f.plate_number) patch['license_plate'] = f.plate_number;
        if (f.manufacture_year) patch['manufacture_year'] = this._toNumber(f.manufacture_year);
        if (f.engine_capacity) patch['engine_capacity_cm3'] = this._toNumber(f.engine_capacity);
        if (f.max_weight) patch['max_weight_tons'] = this._toNumber(f.max_weight);
        if (f.valid_until) patch['itp_expiry_date'] = f.valid_until.slice(0, 10);
        if (f.civ_number) patch['civ_number'] = f.civ_number;
        this.vehicleGroup.patchValue(patch);

        // A photographed plate that matches a car already in the garage is
        // worth linking, so the contract shows up on that car's history.
        if (f.plate_number && this.form.get('car_id')?.value == null) {
            const normalised = f.plate_number.replace(/\s/g, '').toUpperCase();
            const match = this.cars.find(c => c.license_plate?.replace(/\s/g, '').toUpperCase() === normalised);
            if (match) this.form.get('car_id')?.setValue(match.id);
        }
    }

    // ── Step 3: parties ───────────────────────────────────────────────

    private _loadMyIdentity(): void {
        this._api.getMyIdentity()
            .pipe(take(1), untilDestroyed(this))
            .subscribe({
                next: saved => {
                    if (!saved.identity) return;
                    this._patchParty(this.meGroup, saved.identity);
                    this.myIdentityPrefilled = true;
                },
                // Nothing saved yet, or the call failed — the form is simply empty.
                error: () => {},
            });
    }

    selectOtherPartySource(source: PartySource): void {
        if (source === 'scan') {
            // The picker stays out of reach until consent is given.
            this.consentVisible = true;
            return;
        }
        this.otherPartySource = 'manual';
    }

    onConsentAccepted(): void {
        this.consentAccepted = true;
        this.consentVisible = false;
        this.otherPartySource = 'scan';
    }

    /** Declining is a normal path: the details get typed in instead. */
    onConsentDeclined(): void {
        this.consentVisible = false;
        this.consentAccepted = false;
        this.otherPartySource = 'manual';
    }

    resetOtherPartySource(): void {
        this.otherPartySource = null;
        this.consentVisible = false;
        this.identityExtraction = null;
        this.identityExtractionFailed = false;
        this.identityExtractionUnavailable = false;
    }

    onIdentityFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        // Belt and braces: the input is only rendered once consent is accepted,
        // but the backend refuses the call without a consent version anyway.
        if (!file || !this.consentAccepted) return;

        this.identityExtraction = null;
        this.identityExtractionFailed = false;
        this.identityExtractionUnavailable = false;

        if (!EXTRACTABLE_MIME_TYPES.has(file.type)) {
            this.identityExtractionFailed = true;
            return;
        }

        this.identityExtracting = true;
        this._prepare(file).then(prepared => {
            this._api.extractIdentity(prepared, SALE_CONTRACT_CONSENT_VERSION)
                .pipe(take(1), untilDestroyed(this))
                .subscribe({
                    next: result => {
                        this.identityExtracting = false;
                        this.identityExtraction = result;
                        if (result.detected) this._applyIdentityExtraction(this.otherGroup, result);
                        else this.identityExtractionFailed = true;
                    },
                    error: (err: HttpErrorResponse) => {
                        this.identityExtracting = false;
                        this.identityExtractionFailed = true;
                        this.identityExtractionUnavailable = err?.status === 503;
                    },
                });
        });
    }

    /**
     * Your own document — no consent screen first (see class comment): you're
     * the one photographing it, so there's no third party to agree on your
     * behalf. The consent_version is still sent because the backend requires
     * one on every extraction call regardless of whose document it is.
     */
    onMyIdentityFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file) return;

        this.myIdentityExtraction = null;
        this.myIdentityExtractionFailed = false;
        this.myIdentityExtractionUnavailable = false;

        if (!EXTRACTABLE_MIME_TYPES.has(file.type)) {
            this.myIdentityExtractionFailed = true;
            return;
        }

        this.myIdentityExtracting = true;
        this._prepare(file).then(prepared => {
            this._api.extractIdentity(prepared, SALE_CONTRACT_CONSENT_VERSION)
                .pipe(take(1), untilDestroyed(this))
                .subscribe({
                    next: result => {
                        this.myIdentityExtracting = false;
                        this.myIdentityExtraction = result;
                        if (result.detected) this._applyIdentityExtraction(this.meGroup, result);
                        else this.myIdentityExtractionFailed = true;
                    },
                    error: (err: HttpErrorResponse) => {
                        this.myIdentityExtracting = false;
                        this.myIdentityExtractionFailed = true;
                        this.myIdentityExtractionUnavailable = err?.status === 503;
                    },
                });
        });
    }

    /**
     * Fills a party's form from the extraction. A CNP that failed its
     * checksum is kept, not dropped: it comes back flagged, and the user is the
     * one who compares it against the document.
     */
    private _applyIdentityExtraction(group: FormGroup, result: IdentityExtractionResult): void {
        const f = result.fields;
        const patch: Record<string, unknown> = {};
        const name = f.full_name
            ?? [f.last_name, f.first_name].filter(Boolean).join(' ').trim();
        if (name) patch['full_name'] = name;
        if (f.cnp) patch['cnp_or_cif'] = f.cnp;
        if (f.id_series) patch['id_series'] = f.id_series;
        if (f.id_number) patch['id_number'] = f.id_number;
        group.patchValue(patch);
        if (f.address) this._patchAddress(group.get('address') as FormGroup, f.address);
    }

    // ── Step 5: review and generate ───────────────────────────────────

    get reviewSigningDate(): string {
        return formatDate(this.form.get('signing_date')?.value as string | null);
    }

    get vehicleReviewRows(): ReviewRow[] {
        const vehicle = this._vehicleFrom();
        return this._rows([
            ['saleContract.fields.make', vehicle.make],
            ['saleContract.fields.type', vehicle.type],
            ['saleContract.fields.vin', vehicle.vin],
            ['saleContract.fields.licensePlate', vehicle.license_plate],
            ['saleContract.fields.manufactureYear', vehicle.manufacture_year],
            ['saleContract.fields.engineSeries', vehicle.engine_series],
            ['saleContract.fields.engineCapacity', vehicle.engine_capacity_cm3],
            ['saleContract.fields.maxWeight', vehicle.max_weight_tons],
            ['saleContract.fields.civNumber', vehicle.civ_number],
            ['saleContract.fields.euroNorm', vehicle.euro_norm],
            ['saleContract.fields.itpExpiry', vehicle.itp_expiry_date ? formatDate(vehicle.itp_expiry_date) : undefined],
            ['saleContract.fields.acquiredDate', vehicle.acquired_date ? formatDate(vehicle.acquired_date) : undefined],
            ['saleContract.fields.acquiredDocument', vehicle.acquired_document],
        ]);
    }

    get priceReviewRows(): ReviewRow[] {
        const price = this.form.get('price_lei')?.value as number | string | null;
        return this._rows([
            ['saleContract.fields.priceLei', price == null || price === '' ? undefined : String(price)],
            ['saleContract.fields.signingDate', this.reviewSigningDate],
            ['saleContract.fields.signingPlace', this.form.get('signing_place')?.value as string],
            [
                'saleContract.fields.hasAnnexes',
                this._transloco.translate(this.form.get('has_annexes')?.value ? 'common.yes' : 'common.no'),
            ],
        ]);
    }

    get myPartyReviewRows(): ReviewRow[] { return this._partyRows(this.meGroup); }
    get otherPartyReviewRows(): ReviewRow[] { return this._partyRows(this.otherGroup); }

    private _partyRows(group: FormGroup): ReviewRow[] {
        const party = this._partyFrom(group);
        const rep = party.representative;
        return this._rows([
            [party.is_company ? 'saleContract.fields.companyName' : 'saleContract.fields.fullName', party.full_name],
            [party.is_company ? 'saleContract.fields.cif' : 'saleContract.fields.cnp', party.cnp_or_cif],
            ['saleContract.fields.idSeries', party.id_series],
            ['saleContract.fields.idNumber', party.id_number],
            ['saleContract.fields.representative', rep?.full_name],
            ['saleContract.fields.capacity', party.capacity],
            ['saleContract.fields.phone', party.phone],
            ['saleContract.fields.email', party.email],
            ['saleContract.fields.address', this._addressLine(party.address)],
            ['saleContract.fields.fiscalAddress', this._addressLine(party.fiscal_address)],
        ]);
    }

    /**
     * The address blanks joined for reading only — the abbreviations are the
     * ones the paper form itself prints, and are the same in both languages.
     */
    private _addressLine(address: ContractAddress | undefined): string | undefined {
        if (!address) return undefined;
        const street = [
            address.street,
            address.street_number ? `nr. ${address.street_number}` : null,
            address.building ? `bl. ${address.building}` : null,
            address.staircase ? `sc. ${address.staircase}` : null,
            address.floor ? `et. ${address.floor}` : null,
            address.apartment ? `ap. ${address.apartment}` : null,
        ].filter(Boolean).join(', ');
        const place = [
            address.village_or_sector, address.city, address.county,
            address.postal_code, address.country,
        ].filter(Boolean).join(', ');
        const line = [street, place].filter(part => part.length).join(' — ');
        return line.length ? line : undefined;
    }

    private _rows(entries: [string, string | number | undefined | null][]): ReviewRow[] {
        return entries
            .filter(([, value]) => value != null && `${value}`.trim().length > 0)
            .map(([labelKey, value]) => ({ labelKey, value: `${value}` }));
    }

    generate(): void {
        // The button is disabled until all four are ticked, and the backend
        // rejects the request unless each one is literally `true`.
        if (!this.allConfirmed) return;
        // Everything up to here has to hold too — the backend validates the
        // whole contract, not just the confirmations.
        for (const index of [STEP_ROLE, STEP_VEHICLE, STEP_PARTIES, STEP_PRICE]) {
            if (!this._validateStep(index)) {
                // Order matters: goToStep clears the error flag, so set it after.
                this.goToStep(index);
                this.showStepErrors = true;
                return;
            }
        }
        this.generating = true;

        this._persist().pipe(take(1), untilDestroyed(this)).subscribe({
            next: contract => {
                this._maybeSaveMyIdentity();
                this._api.generate(contract.id, {
                    confirmations: this.confirmationsGroup.getRawValue() as SaleContractConfirmations,
                    copies: 1,
                    keep_in_history: !!this.form.get('keep_in_history')?.value,
                })
                    .pipe(take(1), untilDestroyed(this))
                    .subscribe({
                        next: link => {
                            this.generating = false;
                            this._api.download(link);
                            void this._toast('saleContract.toast.generated');
                            void this._router.navigate(
                                [SALE_CONTRACT_ROUTES.list.fullPath, contract.id],
                                { replaceUrl: true },
                            );
                        },
                        error: () => {
                            this.generating = false;
                            void this._toast('saleContract.toast.error', 'danger');
                        },
                    });
            },
            error: () => {
                this.generating = false;
                void this._toast('saleContract.toast.error', 'danger');
            },
        });
    }

    // ── Saving ────────────────────────────────────────────────────────

    /** The top-bar save: keeps the draft server-side and stays on the wizard. */
    save(): void {
        if (!this.canSaveDraft) return;
        const wasNew = !this.isEditMode;
        this.saving = true;
        this._persist().pipe(take(1), untilDestroyed(this)).subscribe({
            next: () => {
                this.saving = false;
                this._maybeSaveMyIdentity();
                void this._toast(wasNew ? 'saleContract.toast.created' : 'saleContract.toast.updated');
                this._pushTitle();
            },
            error: () => {
                this.saving = false;
                void this._toast('saleContract.toast.error', 'danger');
            },
        });
    }

    /**
     * Draft persistence is server-side on purpose: `localStorage` would leave a
     * third party's CNP and address sitting unencrypted on the device.
     */
    private _persist(): Observable<SaleContract> {
        const payload = this._buildPayload();
        const request$: Observable<SaleContract> = this.contractId
            ? this._api.update(this.contractId, payload)
            : this._api.create(payload);
        return request$.pipe(tap(contract => (this.contractId = contract.id)));
    }

    private _maybeSaveMyIdentity(): void {
        if (!this.form.get('save_my_identity')?.value) return;
        this._api.saveMyIdentity(this._partyFrom(this.meGroup))
            .pipe(take(1), untilDestroyed(this))
            .subscribe({
                next: () => void this._toast('saleContract.toast.identitySaved'),
                error: () => {},
            });
    }

    // ── Leaving ───────────────────────────────────────────────────────

    /**
     * Leaving a half-filled form is cancelling it (CLAUDE.md) — but a draft
     * that already reached the server is worth one question first.
     */
    cancel(): void {
        if (!this.contractId && !this.form.dirty) {
            this._leave();
            return;
        }
        void this._confirmLeave();
    }

    private async _confirmLeave(): Promise<void> {
        const alert = await this._alertCtrl.create({
            header: this._transloco.translate('saleContract.wizard.leave.title'),
            message: this._transloco.translate('saleContract.wizard.leave.body'),
            buttons: [
                { text: this._transloco.translate('saleContract.wizard.leave.stay'), role: 'cancel' },
                {
                    text: this._transloco.translate('saleContract.wizard.leave.leave'),
                    role: 'destructive',
                    handler: () => this._leave(),
                },
            ],
        });
        await alert.present();
    }

    private _leave(): void {
        this._nav.navigateBack(SALE_CONTRACT_ROUTES.list.fullPath);
    }

    // ── Loading an existing draft ─────────────────────────────────────

    private _loadContract(id: number): void {
        this.loading = true;
        this._api.get(id)
            .pipe(take(1), untilDestroyed(this))
            .subscribe({
                next: contract => {
                    this.loading = false;
                    this._patchContract(contract);
                },
                error: () => {
                    this.loading = false;
                    void this._toast('saleContract.toast.error', 'danger');
                    this._leave();
                },
            });
    }

    private _patchContract(contract: SaleContract): void {
        this.contractId = contract.id;
        this.form.patchValue({
            role: contract.role,
            car_id: contract.car_id,
            price_lei: contract.price_lei,
            signing_date: contract.signing_date ? contract.signing_date.slice(0, 10) : this._today(),
            signing_place: contract.signing_place ?? '',
            has_annexes: !!contract.has_annexes,
        });
        this._patchVehicle(contract.vehicle);

        const mine = contract.role === 'SELLER' ? contract.seller : contract.buyer;
        const theirs = contract.role === 'SELLER' ? contract.buyer : contract.seller;
        if (mine) this._patchParty(this.meGroup, mine);
        if (theirs) this._patchParty(this.otherGroup, theirs);

        // A draft that already has details doesn't need its source asked again.
        this.vehicleSource = 'manual';
        this.otherPartySource = 'manual';
        this.maxReached = STEP_REVIEW;
        this.form.markAsPristine();
        this._pushTitle();
    }

    // ── Form plumbing ─────────────────────────────────────────────────

    private _buildVehicleGroup(): FormGroup {
        return this._fb.group({
            make: ['', Validators.required],
            type: [''],
            vin: ['', Validators.required],
            engine_series: [''],
            engine_capacity_cm3: [null as number | null],
            max_weight_tons: [null as number | null],
            license_plate: ['', Validators.required],
            itp_expiry_date: [''],
            civ_number: [''],
            manufacture_year: [null as number | null],
            euro_norm: [''],
            acquired_date: [''],
            acquired_document: [''],
        });
    }

    private _buildAddressGroup(): FormGroup {
        return this._fb.group({
            country: [''],
            county: [''],
            postal_code: [''],
            city: [''],
            village_or_sector: [''],
            street: [''],
            street_number: [''],
            building: [''],
            staircase: [''],
            floor: [''],
            apartment: [''],
        });
    }

    private _buildPartyGroup(): FormGroup {
        return this._fb.group({
            is_company: [false],
            full_name: ['', Validators.required],
            id_series: [''],
            id_number: [''],
            // One blank on the paper form, one field here: CNP or CIF.
            cnp_or_cif: ['', Validators.required],
            phone: [''],
            email: [''],
            capacity: [''],
            address: this._buildAddressGroup(),
            has_fiscal_address: [false],
            fiscal_address: this._buildAddressGroup(),
            representative: this._fb.group({
                full_name: [''],
                id_series: [''],
                id_number: [''],
                cif: [''],
                phone: [''],
                email: [''],
            }),
        });
    }

    /** A company signs through a legal representative, so that name is required. */
    private _wireCompanyValidators(group: FormGroup): void {
        const repName = group.get('representative.full_name') as AbstractControl;
        const apply = (isCompany: boolean): void => {
            if (isCompany) repName.setValidators(Validators.required);
            else repName.clearValidators();
            repName.updateValueAndValidity({ emitEvent: false });
        };
        group.get('is_company')?.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe((isCompany: boolean) => apply(isCompany));
        apply(!!group.get('is_company')?.value);
    }

    private _patchVehicle(vehicle: ContractVehicle): void {
        this.vehicleGroup.patchValue({
            make: vehicle.make ?? '',
            type: vehicle.type ?? '',
            vin: vehicle.vin ?? '',
            engine_series: vehicle.engine_series ?? '',
            engine_capacity_cm3: vehicle.engine_capacity_cm3 ?? null,
            max_weight_tons: vehicle.max_weight_tons ?? null,
            license_plate: vehicle.license_plate ?? '',
            itp_expiry_date: vehicle.itp_expiry_date ? vehicle.itp_expiry_date.slice(0, 10) : '',
            civ_number: vehicle.civ_number ?? '',
            manufacture_year: vehicle.manufacture_year ?? null,
            euro_norm: vehicle.euro_norm ?? '',
            acquired_date: vehicle.acquired_date ? vehicle.acquired_date.slice(0, 10) : '',
            acquired_document: vehicle.acquired_document ?? '',
        });
    }

    private _patchParty(group: FormGroup, party: ContractParty): void {
        group.patchValue({
            is_company: !!party.is_company,
            full_name: party.full_name ?? '',
            id_series: party.id_series ?? '',
            id_number: party.id_number ?? '',
            cnp_or_cif: party.cnp_or_cif ?? '',
            phone: party.phone ?? '',
            email: party.email ?? '',
            capacity: party.capacity ?? '',
            has_fiscal_address: !!party.fiscal_address,
        });
        if (party.address) this._patchAddress(group.get('address') as FormGroup, party.address);
        if (party.fiscal_address) this._patchAddress(group.get('fiscal_address') as FormGroup, party.fiscal_address);
        if (party.representative) {
            const rep = party.representative;
            (group.get('representative') as FormGroup).patchValue({
                full_name: rep.full_name ?? '',
                id_series: rep.id_series ?? '',
                id_number: rep.id_number ?? '',
                cif: rep.cif ?? '',
                phone: rep.phone ?? '',
                email: rep.email ?? '',
            });
        }
    }

    private _patchAddress(group: FormGroup, address: ContractAddress): void {
        group.patchValue({
            country: address.country ?? '',
            county: address.county ?? '',
            postal_code: address.postal_code ?? '',
            city: address.city ?? '',
            village_or_sector: address.village_or_sector ?? '',
            street: address.street ?? '',
            street_number: address.street_number ?? '',
            building: address.building ?? '',
            staircase: address.staircase ?? '',
            floor: address.floor ?? '',
            apartment: address.apartment ?? '',
        });
    }

    // ── Payload ───────────────────────────────────────────────────────

    private _buildPayload(): CreateSaleContractPayload {
        const role = (this.role ?? 'SELLER') as SaleContractRole;
        const me = this._partyFrom(this.meGroup);
        const other = this._partyFrom(this.otherGroup);
        const carId = this.form.get('car_id')?.value as number | null;
        const priceLei = this.form.get('price_lei')?.value as number | string | null;
        const signingDate = this.form.get('signing_date')?.value as string;
        const signingPlace = this.form.get('signing_place')?.value as string;

        const payload: CreateSaleContractPayload = {
            role,
            seller: role === 'SELLER' ? me : other,
            buyer: role === 'SELLER' ? other : me,
            vehicle: this._vehicleFrom(),
            has_annexes: !!this.form.get('has_annexes')?.value,
            keep_in_history: !!this.form.get('keep_in_history')?.value,
        };
        if (carId != null) payload.car_id = Number(carId);
        if (priceLei != null && priceLei !== '') payload.price_lei = Number(priceLei);
        if (signingDate) payload.signing_date = signingDate;
        if (signingPlace) payload.signing_place = signingPlace;

        // The API needs the version of the consent wording as soon as any
        // identity data for the other party is on the contract — whether it was
        // read off a photo or typed in after the user declined the camera.
        if (this._hasIdentityData(other)) payload.consent_version = SALE_CONTRACT_CONSENT_VERSION;

        // `price_in_words` is deliberately absent: the backend derives it from
        // the figure, and two sources for one value end up disagreeing.
        return payload;
    }

    private _hasIdentityData(party: ContractParty): boolean {
        return !!(party.full_name || party.cnp_or_cif || party.id_number || party.address);
    }

    private _partyFrom(group: FormGroup): ContractParty {
        const v = group.getRawValue() as Record<string, unknown>;
        const party: ContractParty = { is_company: !!v['is_company'] };
        party.full_name = this._clean(v['full_name']);
        party.cnp_or_cif = this._clean(v['cnp_or_cif']);
        party.phone = this._clean(v['phone']);
        party.email = this._clean(v['email']);
        party.capacity = this._clean(v['capacity']);
        if (!party.is_company) {
            party.id_series = this._clean(v['id_series']);
            party.id_number = this._clean(v['id_number']);
        }

        const address = this._addressFrom(group.get('address') as FormGroup);
        if (address) party.address = address;

        if (v['has_fiscal_address']) {
            const fiscal = this._addressFrom(group.get('fiscal_address') as FormGroup);
            if (fiscal) party.fiscal_address = fiscal;
        }

        if (party.is_company) {
            const rep = this._representativeFrom(group.get('representative') as FormGroup);
            if (rep) party.representative = rep;
        }
        return party;
    }

    private _addressFrom(group: FormGroup): ContractAddress | undefined {
        const v = group.getRawValue() as Record<string, unknown>;
        const address: ContractAddress = {};
        let any = false;
        for (const key of [
            'country', 'county', 'postal_code', 'city', 'village_or_sector',
            'street', 'street_number', 'building', 'staircase', 'floor', 'apartment',
        ] as const) {
            const trimmed = this._clean(v[key]);
            if (trimmed) {
                address[key] = trimmed;
                any = true;
            }
        }
        return any ? address : undefined;
    }

    private _representativeFrom(group: FormGroup): ContractRepresentative | undefined {
        const v = group.getRawValue() as Record<string, unknown>;
        const rep: ContractRepresentative = {};
        let any = false;
        for (const key of ['full_name', 'id_series', 'id_number', 'cif', 'phone', 'email'] as const) {
            const trimmed = this._clean(v[key]);
            if (trimmed) {
                rep[key] = trimmed;
                any = true;
            }
        }
        return any ? rep : undefined;
    }

    private _vehicleFrom(): ContractVehicle {
        const v = this.vehicleGroup.getRawValue() as Record<string, unknown>;
        const vehicle: ContractVehicle = {};
        for (const key of [
            'make', 'type', 'vin', 'engine_series', 'license_plate',
            'itp_expiry_date', 'civ_number', 'euro_norm', 'acquired_date', 'acquired_document',
        ] as const) {
            const trimmed = this._clean(v[key]);
            if (trimmed) vehicle[key] = trimmed;
        }
        const capacity = this._toNumber(v['engine_capacity_cm3']);
        if (capacity != null) vehicle.engine_capacity_cm3 = capacity;
        const weight = this._toNumber(v['max_weight_tons']);
        if (weight != null) vehicle.max_weight_tons = weight;
        const year = this._toNumber(v['manufacture_year']);
        if (year != null) vehicle.manufacture_year = year;
        return vehicle;
    }

    private _clean(value: unknown): string | undefined {
        if (typeof value !== 'string') return undefined;
        const trimmed = value.trim();
        return trimmed.length ? trimmed : undefined;
    }

    private _toNumber(value: unknown): number | null {
        if (value == null || value === '') return null;
        const parsed = Number(String(value).replace(',', '.').replace(/[^\d.-]/g, ''));
        return Number.isFinite(parsed) ? parsed : null;
    }

    private _today(): string {
        const now = new Date();
        const month = `${now.getMonth() + 1}`.padStart(2, '0');
        const day = `${now.getDate()}`.padStart(2, '0');
        return `${now.getFullYear()}-${month}-${day}`;
    }

    /**
     * Photos go to an extraction endpoint that stores nothing, so a smaller,
     * faster upload beats image fidelity — same trade-off as `documents-form`.
     */
    private _prepare(file: File): Promise<File> {
        if (file.type === 'application/pdf') return Promise.resolve(file);
        return resizeImage(file, 1600, 0.7).catch(() => file);
    }

    private async _toast(key: string, color: 'success' | 'danger' = 'success'): Promise<void> {
        const toast = await this._toastCtrl.create({
            message: this._transloco.translate(key),
            duration: color === 'danger' ? 4000 : 2500,
            color,
            position: 'top',
        });
        await toast.present();
    }
}
