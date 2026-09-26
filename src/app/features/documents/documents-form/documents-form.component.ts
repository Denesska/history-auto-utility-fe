import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarDto, DocumentDto, ExtractionResultDto } from '@hau/autogenapi/models';
import { DOC_TYPE_CONFIG, docLabelKey, docTypeFormFields } from '@hau/shared/config/document-type.config';
import { DocumentsFacade } from '@hau/features/documents/state/documents.facade';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { UploadService } from '@hau/core/upload/upload.service';
import { DocumentExtractionService } from '@hau/core/document-extraction.service';
import { DocumentFileService } from '@hau/core/document-file.service';
import { formatDate } from '@hau/shared/utils/formatting.util';
import { calcDocStatus } from '@hau/shared/utils/document-status.util';
import { BreadcrumbComponent, BreadcrumbItem } from '@hau/shared/component/breadcrumb/breadcrumb.component';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { AlertController, IonContent, IonIcon, IonicSafeString, IonSpinner, NavController, ToastController, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    addOutline, calendarOutline, carOutline,
    checkmarkCircleOutline, chevronDownOutline,
    closeOutline, checkmarkOutline, documentTextOutline,
    cloudUploadOutline, trashOutline, attachOutline,
    informationCircleOutline, warningOutline,
    alertCircleOutline, checkmarkDoneOutline, timeOutline,
} from 'ionicons/icons';
import { combineLatest, forkJoin, Observable, of, take } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { resizeImage } from '@hau/shared/utils/image-resize.util';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { COMMON_CURRENCIES, DEFAULT_CURRENCY } from '@hau/shared/config/currency.config';
import {
    countryNameKey, HOME_VIGNETTE_COUNTRY, VIGNETTE_COUNTRIES, VignetteDuration,
    vignetteCountryConfig, vignetteCountryOf, vignetteExpiryFor,
} from '@hau/shared/config/vignette-country.config';

// Mirrors the backend's DocumentExtractionService.SUPPORTED_MIME_TYPES.
const EXTRACTABLE_MIME_TYPES = new Set(['application/pdf', 'image/jpeg', 'image/png', 'image/webp']);

@UntilDestroy()
@Component({
    selector: 'app-documents-form',
    templateUrl: 'documents-form.component.html',
    styleUrls: ['./documents-form.component.scss'],
    imports: [LoaderComponent, IonContent, IonIcon, IonSpinner, ReactiveFormsModule, TranslocoPipe, DropdownComponent, BreadcrumbComponent],
})
export class DocumentsFormComponent implements OnInit, ViewWillEnter, ViewWillLeave {
    @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;
    @ViewChild('headerStartActionsTpl') private _headerStartActionsTpl!: TemplateRef<unknown>;

    private _viewActive = false;

    form!: FormGroup;
    submitting = false;
    uploading = false;
    cars: CarDto[] = [];
    docs: DocumentDto[] = [];
    editDoc: DocumentDto | null = null;

    selectedFile: File | null = null;
    existingFileName: string | null = null;
    dragOver = false;
    lockedCarId: number | null = null;

    extracting = false;
    extractionResult: ExtractionResultDto | null = null;
    extractionFailed = false;
    extractionServiceUnavailable = false;

    readonly docTypes: { value: string; label: string; color: string }[];
    readonly countryOptions: DropdownOption[];
    /** Quick-pick period last chosen for a foreign vignette; drives the end date when the start moves. */
    selectedDurationKey: string | null = null;
    readonly statusOptions: { value: string; label: string }[];

    get isEditMode(): boolean { return !!this.editDoc; }
    get pageTitle(): string {
        return this._transloco.translate(this.isEditMode ? 'documents.form.editTitle' : 'documents.form.addTitle');
    }

    constructor(
        private readonly _fb: FormBuilder,
        private readonly _facade: DocumentsFacade,
        private readonly _nav: NavController,
        private readonly _route: ActivatedRoute,
        private readonly _extractionService: DocumentExtractionService,
        private readonly _upload: UploadService,
        private readonly _transloco: TranslocoService,
        private readonly _alertCtrl: AlertController,
        private readonly _bootstrapFacade: BootstrapFacade,
        private readonly _headerActions: HeaderActionsService,
        private readonly _documentFile: DocumentFileService,
        private readonly _toastCtrl: ToastController,
    ) {
        addIcons({
            addOutline, calendarOutline, carOutline, checkmarkCircleOutline,
            chevronDownOutline, closeOutline, checkmarkOutline, documentTextOutline,
            cloudUploadOutline, trashOutline, attachOutline,
            informationCircleOutline, warningOutline,
            alertCircleOutline, checkmarkDoneOutline, timeOutline,
        });

        this.docTypes = Object.entries(DOC_TYPE_CONFIG).map(([value, cfg]) => ({
            value, label: this._transloco.translate(cfg.pickerLabel ?? cfg.label), color: cfg.color,
        }));

        this.countryOptions = VIGNETTE_COUNTRIES.map(c => ({
            value: c.code, label: this._transloco.translate(countryNameKey(c.code)), flag: c.code,
        }));

        this.statusOptions = [
            { value: 'Active',   label: this._transloco.translate('documents.form.statusOptions.active') },
            { value: 'Inactive', label: this._transloco.translate('documents.form.statusOptions.inactive') },
            { value: 'Expired',  label: this._transloco.translate('documents.form.statusOptions.expired') },
        ];

        this.form = this._fb.group({
            document_type:     [null, Validators.required],
            car_id:            [null, Validators.required],
            provider:          [null],
            policy_series:     [null],
            policy_number:     [null],
            status:            ['Active'],
            issue_date:        [null, Validators.required],
            expiry_date:       [null, Validators.required],
            no_expiry:         [false],
            itp_two_years:     [false],
            premium:           [null],
            currency:          [null],
            bonus_malus_class: [null],
            policyholder:      [null],
            cnp_id:            [null],
            country:           [HOME_VIGNETTE_COUNTRY],
        });

        this.form.get('no_expiry')!.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe((noExpiry: boolean) => this.toggleExpiryValidation(noExpiry));

        this.toggleExpiryValidation(this.form.get('no_expiry')!.value);

        this.form.get('document_type')!.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe(type => this.onDocumentTypeChange(type));

        this.form.get('itp_two_years')!.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe(() => {
                if (this.hasAutoExpiryLogic) this.applyExpiryFromStart();
            });

        this.form.get('country')!.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe(country => this.onCountryChange(country));

        this.form.get('issue_date')!.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe(() => {
                if (this.hasAutoExpiryLogic) this.applyExpiryFromStart();
            });
    }

    get isRovType(): boolean {
        return this.selectedDocType === 'ROV';
    }

    get selectedCountry(): string {
        return this.form.get('country')?.value || HOME_VIGNETTE_COUNTRY;
    }

    get isForeignVignetteSelected(): boolean {
        return this.isRovType && this.selectedCountry !== HOME_VIGNETTE_COUNTRY;
    }

    /**
     * A vignette's state, derived from the period entered — shown as a single
     * icon next to "Validity" instead of a status the user has to pick. A travel
     * vignette never warns: running out is the plan, so past its end it's "ended".
     */
    get vignetteValidity(): { state: string; icon: string; labelKey: string; params: Record<string, unknown> } | null {
        if (!this.isRovType) return null;
        const start = this.form.get('issue_date')?.value as string | null;
        const end = this.form.get('expiry_date')?.value as string | null;
        if (!start || !end) return null;

        const today = this.formatDate(new Date());
        if (start > today) {
            return { state: 'upcoming', icon: 'time-outline', labelKey: 'documents.vignette.validity.upcoming', params: { date: formatDate(start) } };
        }
        const { status, daysLeft } = calcDocStatus(end, start);
        const foreign = this.isForeignVignetteSelected;
        if (status === 'expired') {
            return foreign
                ? { state: 'ended', icon: 'checkmark-done-outline', labelKey: 'documents.vignette.validity.ended', params: { date: formatDate(end) } }
                : { state: 'expired', icon: 'alert-circle-outline', labelKey: 'documents.vignette.validity.expired', params: { date: formatDate(end) } };
        }
        if (status === 'expiring' && !foreign) {
            return { state: 'expiring', icon: 'warning-outline', labelKey: 'documents.vignette.validity.expiring', params: { days: daysLeft } };
        }
        return { state: 'valid', icon: 'checkmark-circle-outline', labelKey: 'documents.vignette.validity.valid', params: { days: daysLeft } };
    }

    /** Quick-pick periods for the chosen foreign vignette country (none for RO). */
    get vignetteDurations(): readonly VignetteDuration[] {
        return this.isForeignVignetteSelected ? (vignetteCountryConfig(this.selectedCountry)?.durations ?? []) : [];
    }

    /** A chip reads as selected only while the dates still match it — a hand-edited end date un-selects it. */
    isDurationActive(duration: VignetteDuration): boolean {
        const start = this.form.get('issue_date')?.value as string | null;
        const end = this.form.get('expiry_date')?.value as string | null;
        return !!start && !!end && vignetteExpiryFor(start, duration) === end;
    }

    selectDuration(duration: VignetteDuration): void {
        this.selectedDurationKey = duration.key;
        this.applyExpiryFromStart();
    }

    private onCountryChange(country: string | null): void {
        if (!this.isRovType) return;
        const cfg = vignetteCountryConfig(country);
        this.selectedDurationKey = country && country !== HOME_VIGNETTE_COUNTRY
            ? (cfg?.defaultDuration ?? cfg?.durations[0]?.key ?? null)
            : null;
        this.applyExpiryFromStart();
    }

    private get selectedDuration(): VignetteDuration | undefined {
        return this.vignetteDurations.find(d => d.key === this.selectedDurationKey);
    }

    get isItpType(): boolean {
        return this.selectedDocType === 'ITP';
    }

    get hasAutoExpiryLogic(): boolean {
        return ['ITP', 'RCA', 'ROV'].includes(this.selectedDocType ?? '');
    }

    get showNoExpiryCheckbox(): boolean {
        return !!this.selectedDocType && !this.hasAutoExpiryLogic;
    }

    get providerLabelKey(): string {
        return this.isItpType ? 'documents.form.fields.itpStation' : 'documents.form.fields.provider';
    }

    get providerPlaceholderKey(): string {
        return this.isItpType ? 'documents.form.placeholders.itpStation' : 'documents.form.placeholders.provider';
    }

    /** The common currencies, plus the document's own if it was saved with another one (e.g. read from a scan). */
    get currencyOptions(): DropdownOption[] {
        const current = (this.form.get('currency')?.value as string | null)?.toUpperCase();
        const codes = current && !COMMON_CURRENCIES.includes(current) ? [...COMMON_CURRENCIES, current] : COMMON_CURRENCIES;
        return codes.map(code => ({ value: code, label: code }));
    }

    get selectedDocType(): string | null {
        return this.form.get('document_type')?.value ?? null;
    }

    showField(field: string): boolean {
        return docTypeFormFields(this.selectedDocType).includes(field);
    }

    get showAmountSection(): boolean {
        return this.showField('premium');
    }

    get showAdditionalDetailsSection(): boolean {
        return this.showField('policyholder') || this.showField('cnp_id');
    }

    get showPolicyFieldsSection(): boolean {
        return this.showField('provider') || this.showField('policy_series')
            || this.showField('policy_number') || this.showField('bonus_malus_class');
    }

    private onDocumentTypeChange(type: string | null): void {
        if (!type) return;
        const visible = new Set(docTypeFormFields(type));
        for (const field of ['provider', 'policy_series', 'policy_number', 'bonus_malus_class', 'premium', 'currency', 'policyholder', 'cnp_id']) {
            if (!visible.has(field)) this.form.get(field)!.reset(null);
        }
        if (visible.has('currency') && !this.isEditMode) {
            this.form.patchValue({ currency: DEFAULT_CURRENCY });
        }
        if (type !== 'ROV') {
            this.form.patchValue({ country: HOME_VIGNETTE_COUNTRY }, { emitEvent: false });
            this.selectedDurationKey = null;
        }
        if (this.hasAutoExpiryLogicFor(type)) {
            this.form.patchValue({ no_expiry: false, itp_two_years: false });
            this.toggleExpiryValidation(false);
            if (!this.isEditMode) this.applyDefaultDates(type);
        } else {
            this.form.patchValue({ itp_two_years: false });
        }
    }

    private formatDate(d: Date): string {
        return d.toISOString().slice(0, 10);
    }

    private addDays(dateStr: string, days: number): string {
        const d = new Date(`${dateStr}T00:00:00`);
        d.setDate(d.getDate() + days);
        return this.formatDate(d);
    }

    private addYears(dateStr: string, years: number): string {
        const d = new Date(`${dateStr}T00:00:00`);
        d.setFullYear(d.getFullYear() + years);
        return this.formatDate(d);
    }

    private calcExpiryFromStart(type: string, start: string, itpTwoYears: boolean): string {
        switch (type) {
            case 'ITP':
                return itpTwoYears ? this.addYears(start, 2) : this.addDays(start, 365);
            case 'ROV': {
                const duration = this.selectedDuration;
                return duration ? vignetteExpiryFor(start, duration) : this.addYears(start, 1);
            }
            case 'RCA':
                return this.addYears(start, 1);
            default:
                return start;
        }
    }

    private applyDefaultDates(type: string): void {
        const today = this.formatDate(new Date());
        const patch: Record<string, unknown> = {
            issue_date: today,
            expiry_date: this.calcExpiryFromStart(type, today, false),
            itp_two_years: false,
            no_expiry: false,
        };
        if (type === 'ITP') patch['currency'] = DEFAULT_CURRENCY;
        this.form.patchValue(patch, { emitEvent: false });
    }

    private applyExpiryFromStart(): void {
        const type = this.selectedDocType;
        const start = this.form.get('issue_date')?.value as string | null;
        if (!type || !start || !this.hasAutoExpiryLogic) return;
        const itpTwoYears = type === 'ITP' && (this.form.get('itp_two_years')?.value as boolean);
        this.form.patchValue(
            { expiry_date: this.calcExpiryFromStart(type, start, itpTwoYears) },
            { emitEvent: false },
        );
    }

    get lockedCarLabel(): string {
        const car = this.cars.find(c => c.id === this.lockedCarId);
        if (!car) return '';
        return `${car.make} ${car.model} · ${car.license_plate}`;
    }

    get carOptions(): DropdownOption[] {
        return this.selectableCars.map(car => ({
            value: car.id,
            label: `${car.make} ${car.model} · ${car.license_plate}`,
        }));
    }

    get selectableCars(): CarDto[] {
        const selectedCarId = this.form?.get('car_id')?.value;
        return this.cars.filter(c => c.status !== 'SOLD' || c.id === selectedCarId);
    }

    ngOnInit(): void {
        const id = this._route.snapshot.paramMap.get('id');
        const preselectedCarId = this._route.snapshot.queryParamMap.get('carId');
        if (preselectedCarId) {
            this.lockedCarId = Number(preselectedCarId);
            this.form.get('car_id')!.disable();
        }

        combineLatest([this._facade.cars$, this._facade.documents$])
            .pipe(untilDestroyed(this))
            .subscribe(([cars, docs]) => {
                this.cars = cars;
                this.docs = docs;
                if (id && !this.editDoc) {
                    const found = docs.find(d => d.id === Number(id));
                    if (found) { this.editDoc = found; this.patchForm(found); }
                } else if (this.lockedCarId && !this.form.get('car_id')?.value) {
                    const car = cars.find(c => c.id === this.lockedCarId);
                    if (car) this.form.patchValue({ car_id: car.id });
                }
                this._pushHeaderTitle();
            });

        this._facade.submitting$
            .pipe(untilDestroyed(this))
            .subscribe(s => (this.submitting = s));

        this._facade.loadAll();
    }

    // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
    // fire on back-navigation — these Ionic lifecycle hooks do.
    ionViewWillEnter(): void {
        this._viewActive = true;
        this._headerActions.set(this._headerActionsTpl);
        this._headerActions.setStart(this._headerStartActionsTpl);
        this._pushHeaderTitle();
    }

    ionViewWillLeave(): void {
        this._viewActive = false;
        this._headerActions.clear();
        this._headerActions.clearTitle();
    }

    private _pushHeaderTitle(): void {
        if (!this._viewActive) return;
        this._headerActions.setTitle(this.pageTitle);
    }

    get breadcrumbItems(): BreadcrumbItem[] {
        return [
            { label: this._transloco.translate('documents.title'), action: () => this.cancel() },
            { label: this.pageTitle },
        ];
    }

    private patchForm(doc: DocumentDto): void {
        this.existingFileName = doc.file_name ?? null;
        const issueDate = doc.issue_date ? doc.issue_date.slice(0, 10) : null;
        const expiryDate = doc.expiry_date ? doc.expiry_date.slice(0, 10) : null;
        const itpTwoYears = doc.document_type === 'ITP' && issueDate && expiryDate
            ? expiryDate === this.addYears(issueDate, 2)
            : false;

        // Set silently and first: the country's own change handler would otherwise
        // recompute the expiry date the patch below is about to restore.
        this.form.patchValue({ country: vignetteCountryOf(doc) ?? HOME_VIGNETTE_COUNTRY }, { emitEvent: false });
        this.form.patchValue({
            document_type:     doc.document_type,
            car_id:            doc.car_id,
            provider:          doc.provider ?? null,
            policy_series:     doc.policy_series ?? null,
            policy_number:     doc.policy_number ?? null,
            status:            doc.status ?? 'Active',
            issue_date:        issueDate,
            expiry_date:       expiryDate,
            no_expiry:         !this.hasAutoExpiryLogicFor(doc.document_type) && !doc.expiry_date,
            itp_two_years:     itpTwoYears,
            premium:           doc.premium ?? null,
            currency:          doc.currency?.toUpperCase() ?? DEFAULT_CURRENCY,
            bonus_malus_class: doc.bonus_malus_class ?? null,
            policyholder:      doc.policyholder ?? null,
            cnp_id:            doc.cnp_id ?? null,
        });
        this.selectedDurationKey = issueDate && expiryDate
            ? (this.vignetteDurations.find(d => vignetteExpiryFor(issueDate, d) === expiryDate)?.key ?? null)
            : null;
        this.toggleExpiryValidation(!this.hasAutoExpiryLogicFor(doc.document_type) && !doc.expiry_date);
    }

    private hasAutoExpiryLogicFor(type: string | null | undefined): boolean {
        return !!type && ['ITP', 'RCA', 'ROV'].includes(type);
    }

    private toggleExpiryValidation(noExpiry: boolean): void {
        const ctrl = this.form.get('expiry_date')!;
        if (noExpiry) {
            ctrl.setValue(null);
            ctrl.disable();
            ctrl.clearValidators();
        } else {
            ctrl.enable();
            ctrl.setValidators(Validators.required);
        }
        ctrl.updateValueAndValidity();
    }

    async save(): Promise<void> {
        if (this.form.invalid) { this.form.markAllAsTouched(); return; }
        const v = this.form.getRawValue();
        const dto = {
            document_type:     v.document_type as string,
            car_id:            Number(v.car_id),
            provider:          v.provider || undefined,
            policy_series:     v.policy_series || undefined,
            policy_number:     v.policy_number || undefined,
            // Vignettes carry no user-picked status — it's derived from the period.
            status:            v.document_type === 'ROV' ? undefined : (v.status || undefined),
            issue_date:        v.issue_date || undefined,
            expiry_date:       v.no_expiry ? undefined : (v.expiry_date || undefined),
            premium:           v.premium != null && v.premium !== '' ? Number(v.premium) : undefined,
            currency:          v.currency || undefined,
            bonus_malus_class: v.bonus_malus_class || undefined,
            policyholder:      v.policyholder || undefined,
            cnp_id:            v.cnp_id || undefined,
            is_active:         undefined as boolean | undefined,
            country:           v.document_type === 'ROV' ? (v.country || HOME_VIGNETTE_COUNTRY) as string : null,
        };

        let deactivateIds: number[] = [];
        if (this.hasAutoExpiryLogic && dto.issue_date && dto.expiry_date) {
            const overlapping = this.findOverlapping(dto.car_id, dto.document_type, dto.country, dto.issue_date, dto.expiry_date);
            if (overlapping.length) {
                const decision = await this.confirmOverlap(overlapping);
                if (!decision) return;
                dto.is_active = decision.newIsActive;
                deactivateIds = decision.deactivateIds;
            }
        }

        const op$ = this.isEditMode
            ? this._facade.updateDocument(this.editDoc!.id, dto)
            : this._facade.createDocument(dto);

        op$.pipe(take(1)).subscribe({
            next: () => {
                const after$: Observable<unknown> = deactivateIds.length
                    ? forkJoin(deactivateIds.map(id => this._facade.deactivateDocument(id)))
                    : of(null);
                after$.pipe(take(1)).subscribe(() => {
                    this._bootstrapFacade.forceRefresh();
                    this.finishSave();
                });
            },
            error: () => {},
        });
    }

    private finishSave(): void {
        const savedId = this.isEditMode ? this.editDoc!.id : this._facade.getLastSavedId();
        if (this.selectedFile && savedId) {
            this.uploading = true;
            this._upload.uploadFile(this.selectedFile, 'document', savedId)
                .pipe(take(1))
                .subscribe({
                    // Refresh again: the save above already refreshed bootstrap, but the
                    // file is attached by this later request — without a second pass the
                    // cached document keeps its empty file_url and the list shows no clip
                    // until the bootstrap TTL expires.
                    next: () => {
                        this.uploading = false;
                        this._bootstrapFacade.forceRefresh();
                        this._nav.back();
                    },
                    // The document itself is already saved — only the file didn't make
                    // it. Say so instead of leaving the user thinking it was attached.
                    error: () => {
                        this.uploading = false;
                        void this._showUploadError();
                        this._nav.back();
                    },
                });
        } else {
            this._nav.back();
        }
    }

    private async _showUploadError(): Promise<void> {
        const toast = await this._toastCtrl.create({
            message: this._transloco.translate('documents.form.uploadFailed'),
            duration: 4000,
            color: 'danger',
            position: 'top',
        });
        await toast.present();
    }

    /** Edit mode: opens the file already attached to this document. */
    openExistingFile(): void {
        if (!this.editDoc) return;
        this._documentFile.open(this.editDoc.id)
            .pipe(take(1), untilDestroyed(this))
            .subscribe({ error: () => void this._showFileUnavailable() });
    }

    private async _showFileUnavailable(): Promise<void> {
        const toast = await this._toastCtrl.create({
            message: this._transloco.translate('documents.detail.fileUnavailable'),
            duration: 3000,
            color: 'danger',
            position: 'top',
        });
        await toast.present();
    }

    // Vignettes only clash within the same country: a Hungarian one alongside the
    // Romanian one is two valid documents, not a renewal of one another.
    private findOverlapping(carId: number, type: string, country: string | null, issueDate: string, expiryDate: string): DocumentDto[] {
        const newStart = new Date(issueDate).getTime();
        const newEnd = new Date(expiryDate).getTime();
        return this.docs.filter(d =>
            d.car_id === carId &&
            d.document_type === type &&
            (type !== 'ROV' || vignetteCountryOf(d) === country) &&
            d.id !== this.editDoc?.id &&
            !!d.issue_date && !!d.expiry_date &&
            new Date(d.issue_date).getTime() <= newEnd &&
            new Date(d.expiry_date).getTime() >= newStart,
        );
    }

    private overlapDocLabel(d: DocumentDto): string {
        const range = `${formatDate(d.issue_date)} – ${formatDate(d.expiry_date)}`;
        return d.provider ? `${d.provider} (${range})` : range;
    }

    private escapeHtml(s: string): string {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    private async confirmOverlap(overlapping: DocumentDto[]): Promise<{ newIsActive: boolean; deactivateIds: number[] } | null> {
        const typeLabel = this._transloco.translate(docLabelKey({ document_type: this.selectedDocType!, country: this.selectedCountry }))
            + (this.isRovType ? ` (${this._transloco.translate(countryNameKey(this.selectedCountry))})` : '');
        const periodLabel = overlapping.map(d => this.overlapDocLabel(d)).join(', ');
        const periodHtml = `<span style="color: var(--ion-color-warning, #f4a124); font-weight: 600;">${this.escapeHtml(periodLabel)}</span>`;

        const continueAnyway = await new Promise<boolean>(async resolve => {
            const alert = await this._alertCtrl.create({
                header: this._transloco.translate('documents.form.overlapAlert.header'),
                message: new IonicSafeString(
                    this._transloco.translate('documents.form.overlapAlert.message', { type: typeLabel, period: periodHtml }),
                ),
                buttons: [
                    { text: this._transloco.translate('documents.form.overlapAlert.cancel'), role: 'cancel', handler: () => resolve(false) },
                    { text: this._transloco.translate('documents.form.overlapAlert.continue'), role: 'confirm', handler: () => resolve(true) },
                ],
            });
            await alert.present();
        });
        if (!continueAnyway) return null;

        const inputs = [
            ...overlapping.map(d => ({
                type: 'radio' as const,
                label: this.overlapDocLabel(d),
                value: String(d.id),
                checked: false,
            })),
            {
                type: 'radio' as const,
                label: this._transloco.translate('documents.form.overlapAlert.newDocument'),
                value: 'new',
                checked: true,
            },
        ];
        const choice = await new Promise<string>(async resolve => {
            const alert = await this._alertCtrl.create({
                header: this._transloco.translate('documents.form.overlapAlert.chooseActiveHeader'),
                inputs,
                buttons: [
                    { text: this._transloco.translate('documents.form.overlapAlert.confirm'), role: 'confirm', handler: (value: string) => resolve(value) },
                ],
            });
            await alert.present();
        });

        if (choice === 'new') {
            return { newIsActive: true, deactivateIds: overlapping.map(d => d.id) };
        }
        const keepId = Number(choice);
        return {
            newIsActive: false,
            deactivateIds: overlapping.filter(d => d.id !== keepId).map(d => d.id),
        };
    }

    cancel(): void { this._nav.back(); }

    // ── File handling ─────────────────────────────────────────────────

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files?.length) this.setFile(input.files[0]);
    }

    onDrop(event: DragEvent): void {
        event.preventDefault();
        this.dragOver = false;
        const file = event.dataTransfer?.files[0];
        if (file) this.setFile(file);
    }

    onDragOver(event: DragEvent): void { event.preventDefault(); this.dragOver = true; }
    onDragLeave(): void { this.dragOver = false; }

    removeFile(): void {
        this.selectedFile = null;
        this.extractionResult = null;
        this.extractionFailed = false;
        this.extractionServiceUnavailable = false;
    }

    private setFile(file: File): void {
        this.selectedFile = file;
        this.extractionResult = null;
        this.extractionFailed = false;
        this.extractionServiceUnavailable = false;

        // Only run extraction in add mode, on formats the backend can read (PDF or a document photo).
        if (this.isEditMode || !EXTRACTABLE_MIME_TYPES.has(file.type)) return;

        this.extracting = true;
        const isImage = file.type !== 'application/pdf';
        // Smaller/lower-quality than the car-photo resize (1920/0.8) — this copy is only sent
        // to the AI extraction endpoint, not stored, so favour a faster upload over image fidelity.
        (isImage ? resizeImage(file, 1600, 0.7) : Promise.resolve(file))
            .then(extractFile => {
                this._extractionService.extract(extractFile)
                    .pipe(take(1))
                    .subscribe({
                        next: result => {
                            this.extracting = false;
                            this.extractionResult = result;
                            if (result.detected) this.applyExtraction(result);
                        },
                        error: (err: HttpErrorResponse) => {
                            this.extracting = false;
                            this.extractionFailed = true;
                            this.extractionServiceUnavailable = err?.status === 503;
                        },
                    });
            });
    }

    private applyExtraction(result: ExtractionResultDto): void {
        const f = result.fields;
        const patch: Record<string, unknown> = {};

        if (result.document_type) {
            const knownType = this.docTypes.find(t => t.value === result.document_type);
            if (knownType) patch['document_type'] = knownType.value;
        }
        if (f.insurer_name)          patch['provider']          = f.insurer_name;
        if (f.policy_series)           patch['policy_series']       = f.policy_series;
        if (f.policy_number)           patch['policy_number']       = f.policy_number;
        if (f.policyholder_name)       patch['policyholder']        = f.policyholder_name;
        if (f.owner_cnp)               patch['cnp_id']              = f.owner_cnp;
        if (f.premium)                 patch['premium']             = Number(f.premium);
        if (f.currency)                patch['currency']            = f.currency.trim().toUpperCase();
        else if (f.premium)            patch['currency']            = DEFAULT_CURRENCY;
        if (f.bonus_malus_class)       patch['bonus_malus_class']   = f.bonus_malus_class;
        const extractedCountry = f.vignette_country?.trim().toUpperCase();
        if ((patch['document_type'] ?? this.selectedDocType) === 'ROV' && extractedCountry && /^[A-Z]{2}$/.test(extractedCountry)) {
            patch['country'] = extractedCountry;
        }

        const validFrom = f.valid_from ?? f.issue_date;
        if (validFrom) patch['issue_date'] = validFrom.slice(0, 10);

        if (f.valid_until) {
            patch['expiry_date'] = f.valid_until.slice(0, 10);
            patch['no_expiry']   = false;
            const docType = (patch['document_type'] ?? result.document_type) as string | undefined;
            const start = patch['issue_date'] as string | undefined;
            if (docType === 'ITP' && start) {
                patch['itp_two_years'] = f.valid_until.slice(0, 10) === this.addYears(start.slice(0, 10), 2);
            }
        }

        if (!this.form.get('car_id')?.value) {
            const matchedCar = this.findCarFromExtraction(f.plate_number, f.vin);
            if (matchedCar) patch['car_id'] = matchedCar.id;
        }

        this.form.patchValue(patch, { emitEvent: false });
        if (patch['no_expiry'] === false) this.toggleExpiryValidation(false);
        if (patch['country']) {
            const expiry = this.form.get('expiry_date')?.value as string | null;
            const start = this.form.get('issue_date')?.value as string | null;
            if (f.valid_until) {
                // Dates came from the document itself — just light up the chip they match, if any.
                this.selectedDurationKey = start && expiry
                    ? (this.vignetteDurations.find(d => vignetteExpiryFor(start, d) === expiry)?.key ?? null)
                    : null;
            } else {
                this.onCountryChange(patch['country'] as string);
            }
        }
    }

    private findCarFromExtraction(plate?: string, vin?: string): CarDto | undefined {
        if (plate) {
            const normalised = plate.replace(/\s/g, '').toUpperCase();
            const byPlate = this.cars.find(
                c => c.license_plate?.replace(/\s/g, '').toUpperCase() === normalised,
            );
            if (byPlate) return byPlate;
        }
        if (vin) {
            const normalisedVin = vin.replace(/\s/g, '').toUpperCase();
            return this.cars.find(c => c.vin?.replace(/\s/g, '').toUpperCase() === normalisedVin);
        }
        return undefined;
    }

    get fileSizeLabel(): string {
        if (!this.selectedFile) return '';
        const b = this.selectedFile.size;
        if (b < 1024) return `${b} B`;
        if (b < 1024 * 1024) return `${(b / 1024).toFixed(0)} KB`;
        return `${(b / (1024 * 1024)).toFixed(1)} MB`;
    }

    isInvalid(field: string): boolean {
        const c = this.form.get(field);
        return !!(c && c.invalid && (c.dirty || c.touched));
    }

    get extractionBannerMod(): string {
        if (!this.extractionResult) return 'neutral';
        if (!this.extractionResult.detected) return 'neutral';
        return this.extractionResult.confidence === 'high' ? 'info' : 'caution';
    }

    get extractionBannerIcon(): string {
        if (this.extractionFailed || !this.extractionResult?.detected) return 'warning-outline';
        return this.extractionResult.confidence === 'high'
            ? 'checkmark-circle-outline'
            : 'information-circle-outline';
    }

    get extractionBannerTitle(): string {
        if (this.extractionServiceUnavailable) return this._transloco.translate('documents.form.extraction.serviceUnavailableTitle');
        if (this.extractionFailed) return this._transloco.translate('documents.form.extraction.failedTitle');
        if (!this.extractionResult) return '';
        if (!this.extractionResult.detected) return this._transloco.translate('documents.form.extraction.notRecognisedTitle');
        return this._transloco.translate(this.extractionResult.confidence === 'high'
            ? 'documents.form.extraction.highConfidenceTitle'
            : 'documents.form.extraction.lowConfidenceTitle');
    }

    get extractionBannerDesc(): string {
        if (this.extractionServiceUnavailable) return this._transloco.translate('documents.form.extraction.serviceUnavailableDesc');
        if (this.extractionFailed) return this._transloco.translate('documents.form.extraction.failedDesc');
        if (!this.extractionResult) return '';
        if (!this.extractionResult.detected) return this._transloco.translate('documents.form.extraction.notRecognisedDesc');
        return this._transloco.translate(this.extractionResult.confidence === 'high'
            ? 'documents.form.extraction.highConfidenceDesc'
            : 'documents.form.extraction.lowConfidenceDesc');
    }
}
