import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarDto, DocumentDto, ExtractionResultDto } from '@hau/autogenapi/models';
import { DocumentService } from '@hau/autogenapi/services';
import { DOC_TYPE_CONFIG, docTypeFormFields } from '@hau/features/documents/document-type.config';
import { DocumentsFacade } from '@hau/features/documents/state/documents.facade';
import { UploadService } from '@hau/core/upload/upload.service';
import { IonContent, IonIcon, IonSpinner, NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    addOutline, calendarOutline, carOutline,
    checkmarkCircleOutline, chevronDownOutline,
    closeOutline, saveOutline, documentTextOutline,
    cloudUploadOutline, trashOutline, attachOutline,
    informationCircleOutline, warningOutline,
} from 'ionicons/icons';
import { combineLatest, take } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

@UntilDestroy()
@Component({
    selector: 'app-documents-form',
    templateUrl: 'documents-form.component.html',
    styleUrls: ['./documents-form.component.scss'],
    imports: [IonContent, IonIcon, IonSpinner, ReactiveFormsModule, TranslocoPipe],
})
export class DocumentsFormComponent implements OnInit {
    form!: FormGroup;
    submitting = false;
    uploading = false;
    cars: CarDto[] = [];
    editDoc: DocumentDto | null = null;

    selectedFile: File | null = null;
    existingFileName: string | null = null;
    dragOver = false;
    lockedCarId: number | null = null;

    extracting = false;
    extractionResult: ExtractionResultDto | null = null;
    extractionFailed = false;

    readonly docTypes: { value: string; label: string; color: string }[];
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
        private readonly _docService: DocumentService,
        private readonly _upload: UploadService,
        private readonly _transloco: TranslocoService,
    ) {
        addIcons({
            addOutline, calendarOutline, carOutline, checkmarkCircleOutline,
            chevronDownOutline, closeOutline, saveOutline, documentTextOutline,
            cloudUploadOutline, trashOutline, attachOutline,
            informationCircleOutline, warningOutline,
        });

        this.docTypes = Object.entries(DOC_TYPE_CONFIG).map(([value, cfg]) => ({
            value, label: this._transloco.translate(cfg.label), color: cfg.color,
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

        this.form.get('issue_date')!.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe(() => {
                if (this.hasAutoExpiryLogic) this.applyExpiryFromStart();
            });
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
            this.form.patchValue({ currency: 'RON' });
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
            case 'RCA':
            case 'ROV':
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
        if (type === 'ITP') patch['currency'] = 'RON';
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
                if (id && !this.editDoc) {
                    const found = docs.find(d => d.id === Number(id));
                    if (found) { this.editDoc = found; this.patchForm(found); }
                } else if (this.lockedCarId && !this.form.get('car_id')?.value) {
                    const car = cars.find(c => c.id === this.lockedCarId);
                    if (car) this.form.patchValue({ car_id: car.id });
                }
            });

        this._facade.submitting$
            .pipe(untilDestroyed(this))
            .subscribe(s => (this.submitting = s));

        this._facade.loadAll();
    }

    private patchForm(doc: DocumentDto): void {
        this.existingFileName = doc.file_name ?? null;
        const issueDate = doc.issue_date ? doc.issue_date.slice(0, 10) : null;
        const expiryDate = doc.expiry_date ? doc.expiry_date.slice(0, 10) : null;
        const itpTwoYears = doc.document_type === 'ITP' && issueDate && expiryDate
            ? expiryDate === this.addYears(issueDate, 2)
            : false;

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
            currency:          doc.currency ?? 'RON',
            bonus_malus_class: doc.bonus_malus_class ?? null,
            policyholder:      doc.policyholder ?? null,
            cnp_id:            doc.cnp_id ?? null,
        });
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

    save(): void {
        if (this.form.invalid) { this.form.markAllAsTouched(); return; }
        const v = this.form.getRawValue();
        const dto = {
            document_type:     v.document_type as string,
            car_id:            Number(v.car_id),
            provider:          v.provider || undefined,
            policy_series:     v.policy_series || undefined,
            policy_number:     v.policy_number || undefined,
            status:            v.status || undefined,
            issue_date:        v.issue_date || undefined,
            expiry_date:       v.no_expiry ? undefined : (v.expiry_date || undefined),
            premium:           v.premium != null && v.premium !== '' ? Number(v.premium) : undefined,
            currency:          v.currency || undefined,
            bonus_malus_class: v.bonus_malus_class || undefined,
            policyholder:      v.policyholder || undefined,
            cnp_id:            v.cnp_id || undefined,
        };

        const op$ = this.isEditMode
            ? this._facade.updateDocument(this.editDoc!.id, dto)
            : this._facade.createDocument(dto);

        op$.pipe(take(1)).subscribe({
            next: () => {
                const savedId = this.isEditMode ? this.editDoc!.id : this._facade.getLastSavedId();
                if (this.selectedFile && savedId) {
                    this.uploading = true;
                    this._upload.uploadFile(this.selectedFile, 'document', savedId)
                        .pipe(take(1))
                        .subscribe({
                            next: () => { this.uploading = false; this._nav.back(); },
                            error: () => { this.uploading = false; this._nav.back(); },
                        });
                } else {
                    this._nav.back();
                }
            },
            error: () => {},
        });
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
    }

    private setFile(file: File): void {
        this.selectedFile = file;
        this.extractionResult = null;
        this.extractionFailed = false;

        // Only run extraction in add mode on PDF files.
        if (!this.isEditMode && file.type === 'application/pdf') {
            this.extracting = true;
            this._docService.documentControllerExtractDocument(file)
                .pipe(take(1))
                .subscribe({
                    next: result => {
                        this.extracting = false;
                        this.extractionResult = result;
                        if (result.detected) this.applyExtraction(result);
                    },
                    error: () => {
                        this.extracting = false;
                        this.extractionFailed = true;
                    },
                });
        }
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
        if (f.currency)                patch['currency']            = f.currency;
        else if (f.premium)            patch['currency']            = 'RON';
        if (f.bonus_malus_class)       patch['bonus_malus_class']   = f.bonus_malus_class;

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
        if (this.extractionFailed) return this._transloco.translate('documents.form.extraction.failedTitle');
        if (!this.extractionResult) return '';
        if (!this.extractionResult.detected) return this._transloco.translate('documents.form.extraction.notRecognisedTitle');
        return this._transloco.translate(this.extractionResult.confidence === 'high'
            ? 'documents.form.extraction.highConfidenceTitle'
            : 'documents.form.extraction.lowConfidenceTitle');
    }

    get extractionBannerDesc(): string {
        if (this.extractionFailed) return this._transloco.translate('documents.form.extraction.failedDesc');
        if (!this.extractionResult) return '';
        if (!this.extractionResult.detected) return this._transloco.translate('documents.form.extraction.notRecognisedDesc');
        return this._transloco.translate(this.extractionResult.confidence === 'high'
            ? 'documents.form.extraction.highConfidenceDesc'
            : 'documents.form.extraction.lowConfidenceDesc');
    }
}
