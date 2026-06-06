import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarDto, DocumentDto, ExtractionResultDto } from '@hau/autogenapi/models';
import { DocumentService } from '@hau/autogenapi/services';
import { DOC_TYPE_CONFIG } from '@hau/features/documents/documents-list/documents-list.component';
import { DocumentsFacade } from '@hau/features/documents/state/documents.facade';
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

@UntilDestroy()
@Component({
    selector: 'app-documents-form',
    templateUrl: 'documents-form.component.html',
    styleUrls: ['./documents-form.component.scss'],
    imports: [IonContent, IonIcon, IonSpinner, ReactiveFormsModule],
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

    extracting = false;
    extractionResult: ExtractionResultDto | null = null;
    extractionFailed = false;

    readonly docTypes = Object.entries(DOC_TYPE_CONFIG).map(([value, cfg]) => ({
        value, label: cfg.label, color: cfg.color,
    }));

    readonly statusOptions = ['Active', 'Inactive', 'Expired'];

    get isEditMode(): boolean { return !!this.editDoc; }
    get pageTitle(): string { return this.isEditMode ? 'Edit Document' : 'Add Document'; }

    constructor(
        private readonly _fb: FormBuilder,
        private readonly _facade: DocumentsFacade,
        private readonly _nav: NavController,
        private readonly _route: ActivatedRoute,
        private readonly _docService: DocumentService,
    ) {
        addIcons({
            addOutline, calendarOutline, carOutline,
            checkmarkCircleOutline, chevronDownOutline,
            closeOutline, saveOutline, documentTextOutline,
            cloudUploadOutline, trashOutline, attachOutline,
            informationCircleOutline, warningOutline,
        });

        this.form = this._fb.group({
            document_type: [null, Validators.required],
            car_id:        [null, Validators.required],
            provider:      [null],
            policy_number: [null],
            status:        ['Active'],
            issue_date:    [null],
            expiry_date:   [null],
            no_expiry:     [false],
            policyholder:  [null],
            cnp_id:        [null],
        });

        this.form.get('no_expiry')!.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe((noExpiry: boolean) => {
                const ctrl = this.form.get('expiry_date')!;
                if (noExpiry) { ctrl.setValue(null); ctrl.disable(); }
                else { ctrl.enable(); }
            });
    }

    ngOnInit(): void {
        const id = this._route.snapshot.paramMap.get('id');

        combineLatest([this._facade.cars$, this._facade.documents$])
            .pipe(untilDestroyed(this))
            .subscribe(([cars, docs]) => {
                this.cars = cars;
                if (id && !this.editDoc) {
                    const found = docs.find(d => d.id === Number(id));
                    if (found) { this.editDoc = found; this.patchForm(found); }
                }
            });

        this._facade.submitting$
            .pipe(untilDestroyed(this))
            .subscribe(s => (this.submitting = s));

        this._facade.loadAll();
    }

    private patchForm(doc: DocumentDto): void {
        this.existingFileName = doc.file_name ?? null;
        this.form.patchValue({
            document_type: doc.document_type,
            car_id:        doc.car_id,
            provider:      doc.provider ?? null,
            policy_number: doc.policy_number ?? null,
            status:        doc.status ?? 'Active',
            issue_date:    doc.issue_date ? doc.issue_date.slice(0, 10) : null,
            expiry_date:   doc.expiry_date ? doc.expiry_date.slice(0, 10) : null,
            no_expiry:     !doc.expiry_date,
            policyholder:  doc.policyholder ?? null,
            cnp_id:        doc.cnp_id ?? null,
        });
    }

    save(): void {
        if (this.form.invalid) { this.form.markAllAsTouched(); return; }
        const v = this.form.getRawValue();
        const dto = {
            document_type: v.document_type as string,
            car_id:        Number(v.car_id),
            provider:      v.provider || undefined,
            policy_number: v.policy_number || undefined,
            status:        v.status || undefined,
            issue_date:    v.issue_date || undefined,
            expiry_date:   v.no_expiry ? undefined : (v.expiry_date || undefined),
            policyholder:  v.policyholder || undefined,
            cnp_id:        v.cnp_id || undefined,
        };

        const op$ = this.isEditMode
            ? this._facade.updateDocument(this.editDoc!.id, dto)
            : this._facade.createDocument(dto);

        op$.pipe(take(1)).subscribe({
            next: () => {
                const savedId = this.isEditMode ? this.editDoc!.id : this._facade.getLastSavedId();
                if (this.selectedFile && savedId) {
                    this.uploading = true;
                    this._docService.documentControllerUploadFile(savedId, this.selectedFile)
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
        if (f.insurer_name)       patch['provider']      = f.insurer_name;
        if (f.policy_number)      patch['policy_number'] = f.policy_number;
        if (f.policyholder_name)  patch['policyholder']  = f.policyholder_name;
        if (f.owner_cnp)          patch['cnp_id']        = f.owner_cnp;
        if (f.issue_date)         patch['issue_date']    = f.issue_date.slice(0, 10);
        if (f.valid_until) {
            patch['expiry_date'] = f.valid_until.slice(0, 10);
            patch['no_expiry']   = false;
        }

        this.form.patchValue(patch);
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
        if (this.extractionFailed) return 'Could not read the document';
        if (!this.extractionResult) return '';
        if (!this.extractionResult.detected) return 'Document type not recognised';
        return this.extractionResult.confidence === 'high'
            ? 'Fields pre-filled from your document'
            : 'Fields extracted with lower confidence';
    }

    get extractionBannerDesc(): string {
        if (this.extractionFailed) return 'The document could not be analysed. Please fill in the fields manually.';
        if (!this.extractionResult) return '';
        if (!this.extractionResult.detected) return 'We could not identify this document type. Please fill in the fields manually.';
        return this.extractionResult.confidence === 'high'
            ? 'Please review the pre-filled values and correct any errors before saving.'
            : 'Some values may be inaccurate — please verify all fields carefully before saving.';
    }
}
