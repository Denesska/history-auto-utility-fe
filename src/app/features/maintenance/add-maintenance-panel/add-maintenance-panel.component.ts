import { DecimalPipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarDto, CreateMaintenanceRecordDto, ExtractionResultDto, MaintenanceRecordDto, ServiceType, UpdateMaintenanceRecordDto } from '@hau/autogenapi/models';
import { SERVICE_TYPE_CONFIG } from '@hau/features/maintenance/service-type.config';
import { MaintenanceFacade } from '@hau/features/maintenance/state/maintenance.facade';
import { ContextFile, UploadService } from '@hau/core/upload/upload.service';
import { DocumentExtractionService } from '@hau/core/document-extraction.service';
import { resizeImage } from '@hau/shared/utils/image-resize.util';
import { IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  closeOutline, saveOutline, addOutline,
  cameraOutline, documentTextOutline, alarmOutline,
  receiptOutline, speedometerOutline, checkmarkCircleOutline,
  checkmarkOutline,
} from 'ionicons/icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe } from '@ngneat/transloco';
import { forkJoin, take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FullscreenPanelComponent } from '@hau/shared/component/fullscreen-panel/fullscreen-panel.component';

export interface PartEntry {
  name: string;
  code?: string;
  quantity?: number;
  price?: number;
}

interface StagedAttachment {
  file: File;
  previewUrl: string | null;
}

// A fuel-photo scan (receipt/pump display, or odometer) that hit a transient failure
// (AI server overloaded, or the device is offline) is retried automatically in the
// background rather than forcing the user to retake the photo — see _scanPhoto().
interface PhotoScanState {
  status: 'idle' | 'scanning' | 'retrying' | 'failed' | 'done';
  previewUrl: string | null;
  offline: boolean;
}

// Backoff schedule for automatic retries of a failed fuel/odometer photo scan
// (AI server overloaded — HTTP 503 — or the device is offline). ~4.5 minutes of
// retrying total before giving up and asking for manual entry.
const SCAN_RETRY_DELAYS_MS = [15_000, 30_000, 60_000, 60_000, 60_000];

@UntilDestroy()
@Component({
  selector: 'app-add-maintenance-panel',
  templateUrl: 'add-maintenance-panel.component.html',
  styleUrls: ['./add-maintenance-panel.component.scss'],
  imports: [ReactiveFormsModule, FormsModule, DecimalPipe, IonIcon, IonSpinner, TranslocoPipe, FullscreenPanelComponent],
})
export class AddMaintenancePanelComponent implements OnInit, OnDestroy {
  @Input() selectedCarId: number | null = null;
  /** Pre-selects a service type (e.g. from the car hub's fuel quick-action) when adding a new record — ignored when editing. */
  @Input() initialServiceType: ServiceType | null = null;
  @Input() cars: CarDto[] = [];
  @Input() submitting = false;
  @Input() editRecord: MaintenanceRecordDto | null = null;

  @Output() closed    = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<void>();

  form!: FormGroup;
  uploading = false;

  readonly serviceTypeCategories = SERVICE_TYPE_CONFIG;

  @ViewChild('partNameInput') private _partNameInput?: ElementRef<HTMLInputElement>;

  parts: PartEntry[] = [];
  addingPart = false;
  newPartName = '';
  newPartCode = '';
  newPartQuantity: number | null = 1;
  newPartPrice: number | null = null;

  // Labor cost isn't persisted on its own (the backend only stores a single
  // total `cost`) — it's just a local nudge, same as a part's price: changing
  // it adds the delta onto whatever the total currently holds, so the total
  // stays independently editable rather than being force-recomputed.
  laborCost: number | null = null;
  private _lastLaborCost = 0;

  showReminder = false;

  existingAttachments: ContextFile[] = [];
  existingAttachmentUrls: Record<number, string> = {};
  stagedAttachments: StagedAttachment[] = [];
  private _removedAttachmentIds: number[] = [];

  // ── Fuel entry (ALIMENTARE) ───────────────────────────────────────
  autoFilledFields = new Set<string>();
  receiptScan: PhotoScanState = { status: 'idle', previewUrl: null, offline: false };
  odometerScan: PhotoScanState = { status: 'idle', previewUrl: null, offline: false };
  /** Set when a receipt shows a total that includes non-fuel products, so the user double-checks Cost before saving. */
  receiptTotalMismatch: number | null = null;
  private _retryTimers: ReturnType<typeof setTimeout>[] = [];

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _facade: MaintenanceFacade,
    private readonly _upload: UploadService,
    private readonly _extractionService: DocumentExtractionService,
    private readonly _elRef: ElementRef<HTMLElement>,
    private readonly _renderer: Renderer2,
  ) {
    addIcons({
      closeOutline, saveOutline, addOutline,
      cameraOutline, documentTextOutline, alarmOutline,
      receiptOutline, speedometerOutline, checkmarkCircleOutline,
      checkmarkOutline,
    });
  }

  ngOnInit(): void {
    // Escape the routed page: Ionic's router adds `.ion-page` to every routed
    // component's host, which sets `contain: layout` — that makes the page both
    // a new containing block for `position: fixed` descendants AND a new
    // stacking context capped at z-index:0 relative to its parent. No z-index
    // on this panel can ever out-rank the app-shell header sitting outside that
    // boundary, so we move the host element to <body> instead, same technique
    // Angular CDK Overlay uses.
    this._renderer.appendChild(document.body, this._elRef.nativeElement);

    const rec = this.editRecord;
    this.form = this._fb.group({
      car_id:       [rec?.car_id ?? this.selectedCarId ?? (this.cars[0]?.id ?? null), Validators.required],
      service_date: [rec?.service_date.split('T')[0] ?? new Date().toISOString().split('T')[0], Validators.required],
      mileage:      [rec?.mileage ?? null, Validators.min(0)],
      service_type: [rec?.service_type ?? this.initialServiceType ?? null, Validators.required],
      // Required for every other type ("Titlu"); for ALIMENTARE the same control
      // is repurposed as an optional "Note" field near the end of the form (99%
      // of fill-ups leave it blank) — see the service_type subscription below.
      description:  [rec?.description ?? '', (rec?.service_type ?? this.initialServiceType) === 'ALIMENTARE' ? [] : Validators.required],
      cost:         [rec?.cost ?? null, [Validators.required, Validators.min(0)]],
      expiry_date:  [rec?.expiry_date?.split('T')[0] ?? null],
      is_diy:       [rec?.is_diy ?? false],
      fuel_liters:         [rec?.fuel_liters ?? null, Validators.min(0)],
      energy_kwh:          [rec?.energy_kwh ?? null, Validators.min(0)],
      is_company_expense:  [rec?.is_company_expense ?? false],
    });

    this.parts = (rec?.parts ?? []).map(p => ({
      name: p.name,
      code: p.code ?? undefined,
      quantity: p.quantity ?? undefined,
      price: p.price ?? undefined,
    }));
    this.showReminder = !!rec?.expiry_date;

    // On edit, trust which axis the record actually has data on; on a new record,
    // default from the selected car's fuel_type (hybrid defaults to Fuel, changeable
    // via the toggle in the template).
    this.energyMode = rec
      ? (rec.energy_kwh != null ? 'ELECTRIC' : 'FUEL')
      : this._defaultEnergyMode(this.selectedCar);

    // Keeps energyMode aligned with the selected car when it's unambiguous (pure
    // combustion or pure electric) — left alone for hybrid/plugin-hybrid/unknown so
    // the user's own choice via the toggle isn't silently overridden.
    this.form.get('car_id')?.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        const fuelType = this.selectedCar?.fuel_type;
        if (fuelType === 'ELECTRIC') this.energyMode = 'ELECTRIC';
        else if (fuelType && fuelType !== 'HYBRID' && fuelType !== 'PLUGIN_HYBRID') this.energyMode = 'FUEL';
      });

    // Keeps the description control's required-ness in sync with the picked type —
    // needed because the category picker stays editable even after arriving with
    // initialServiceType pre-set, so ALIMENTARE can be toggled on/off after init.
    this.form.get('service_type')?.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((type: ServiceType | null) => {
        const descCtrl = this.form.get('description');
        descCtrl?.setValidators(type === 'ALIMENTARE' ? [] : Validators.required);
        descCtrl?.updateValueAndValidity({ emitEvent: false });
      });

    // Labor cost has no persisted value to restore on edit — it only ever
    // nudges the total, so switching to DIY (where it doesn't apply) just
    // resets the nudge baseline rather than touching the total itself.
    this.form.get('is_diy')?.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(isDiy => {
        if (isDiy) {
          this.laborCost = null;
          this._lastLaborCost = 0;
        }
      });

    if (rec) {
      this._upload.getFilesForContext('maintenance', rec.id)
        .pipe(untilDestroyed(this))
        .subscribe(files => {
          this.existingAttachments = files;
          for (const file of files) {
            if (!file.mimeType.startsWith('image/')) continue;
            this._upload.getReadUrl(file.fileId)
              .pipe(untilDestroyed(this))
              .subscribe(res => { this.existingAttachmentUrls[file.fileId] = res.readUrl; });
          }
        });
    }
  }

  close(): void {
    for (const a of this.stagedAttachments) {
      if (a.previewUrl) URL.revokeObjectURL(a.previewUrl);
    }
    this.closed.emit();
  }

  ngOnDestroy(): void {
    // We reparented ourselves to <body> in ngOnInit — remove it ourselves too,
    // since Angular's own view cleanup only knows about the original insertion
    // point (the *ngIf/@if placeholder in the parent template), not <body>.
    const el = this._elRef.nativeElement;
    if (el.parentNode === document.body) {
      this._renderer.removeChild(document.body, el);
    }
    // Stop any pending automatic re-scan (server-overloaded/offline retry loop) —
    // the captured photo itself isn't kept once the panel closes.
    this._retryTimers.forEach(t => clearTimeout(t));
  }

  get selectedServiceType(): ServiceType | null {
    return this.form?.get('service_type')?.value ?? null;
  }

  selectServiceType(type: ServiceType): void {
    this.form.get('service_type')?.setValue(type);
  }

  // Arriving via the car hub's fuel shortcut is expected to be the overwhelmingly common
  // path into an ALIMENTARE record, so the type picker (4 other categories that don't
  // apply) is skipped entirely — the form opens straight into the fuel-specific fields.
  // Doesn't apply when editing, or when Alimentare was picked manually from the general
  // "Adaugă mentenanță" flow — that picker stays visible so the user can still change it.
  get skipCategoryPicker(): boolean {
    return !this.editRecord && this.initialServiceType === 'ALIMENTARE';
  }

  get isFuelEntry(): boolean {
    return this.selectedServiceType === 'ALIMENTARE';
  }

  // ── Fuel vs. electric charging (dual-mode ALIMENTARE record) ─────────
  // A single ServiceType=ALIMENTARE record covers both "put fuel in the tank" and
  // "charged the battery" — which applies is driven by the car's own fuel_type:
  // combustion cars only ever see Alimentare, electric cars only ever see Încărcare,
  // and hybrid/plugin-hybrid cars get a small switch since they can do either.
  energyMode: 'FUEL' | 'ELECTRIC' = 'FUEL';

  get selectedCar(): CarDto | null {
    const id = Number(this.form?.get('car_id')?.value);
    return this.cars.find(c => c.id === id) ?? null;
  }

  get isElectricCar(): boolean {
    return this.selectedCar?.fuel_type === 'ELECTRIC';
  }

  get isHybridCar(): boolean {
    const fuelType = this.selectedCar?.fuel_type;
    return fuelType === 'HYBRID' || fuelType === 'PLUGIN_HYBRID';
  }

  setEnergyMode(mode: 'FUEL' | 'ELECTRIC'): void {
    if (this.energyMode === mode) return;
    this.energyMode = mode;
    // A record only ever carries one axis's quantity — clear the other so switching
    // modes mid-entry can't leave a stray fuel_liters+energy_kwh pair behind.
    this.form.get(mode === 'ELECTRIC' ? 'fuel_liters' : 'energy_kwh')?.setValue(null);
    this.autoFilledFields.delete('fuel_liters');
    this.autoFilledFields.delete('energy_kwh');
  }

  private _defaultEnergyMode(car: CarDto | null): 'FUEL' | 'ELECTRIC' {
    return car?.fuel_type === 'ELECTRIC' ? 'ELECTRIC' : 'FUEL';
  }

  // Panel title reflects Alimentare/Încărcare once that's what's on screen, instead of
  // the generic "Adaugă întreținere" — otherwise arriving via the fuel shortcut (which
  // skips the type picker) leaves the title looking disconnected from the form below it.
  get panelTitleKey(): string {
    if (!this.isFuelEntry) return this.editRecord ? 'maintenance.form.editTitle' : 'maintenance.form.title';
    const base = this.energyMode === 'ELECTRIC' ? 'maintenance.form.chargeTitle' : 'maintenance.form.fuelTitle';
    return this.editRecord ? `${base}Edit` : base;
  }

  get pricePerEnergyUnit(): number | null {
    const cost = Number(this.form?.get('cost')?.value);
    const qty = Number(this.form?.get(this.energyMode === 'ELECTRIC' ? 'energy_kwh' : 'fuel_liters')?.value);
    if (!cost || !qty) return null;
    return Math.round((cost / qty) * 100) / 100;
  }

  get partsCost(): number {
    return this.parts.reduce((sum, p) => sum + (p.price ?? 0), 0);
  }

  onLaborCostChange(value: number | null): void {
    this.laborCost = value;
    const delta = (value ?? 0) - this._lastLaborCost;
    this._lastLaborCost = value ?? 0;
    this._nudgeCost(delta);
  }

  private _nudgeCost(delta: number): void {
    if (!delta) return;
    const costCtrl = this.form.get('cost');
    const current = Number(costCtrl?.value) || 0;
    costCtrl?.setValue(current + delta);
  }

  // ── Parts ──────────────────────────────────────────────────────────

  openAddPart(): void {
    this.newPartName = '';
    this.newPartCode = '';
    this.newPartQuantity = 1;
    this.newPartPrice = null;
    this.addingPart = true;
    // The name input only exists once the @if block above renders it, so the
    // ViewChild isn't populated until after this change detection pass.
    setTimeout(() => this._partNameInput?.nativeElement.focus());
  }

  cancelAddPart(): void {
    this.addingPart = false;
  }

  confirmAddPart(): void {
    const name = this.newPartName.trim();
    if (!name) return;
    this.parts.push({
      name,
      code: this.newPartCode.trim() || undefined,
      quantity: this.newPartQuantity ?? undefined,
      price: this.newPartPrice ?? undefined,
    });
    // Adding a priced part nudges the total cost up — the user can still edit
    // Cost total by hand afterward, this is just a helpful starting point.
    if (this.newPartPrice != null) {
      this._nudgeCost(this.newPartPrice);
    }
    this.addingPart = false;
  }

  removePart(index: number): void {
    this.parts.splice(index, 1);
  }

  // ── Attachments ────────────────────────────────────────────────────

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    for (const file of Array.from(input.files)) {
      this.stagedAttachments.push({
        file,
        previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
      });
    }
    input.value = '';
  }

  removeStagedAttachment(index: number): void {
    const [removed] = this.stagedAttachments.splice(index, 1);
    if (removed?.previewUrl) URL.revokeObjectURL(removed.previewUrl);
  }

  removeExistingAttachment(file: ContextFile): void {
    this._removedAttachmentIds.push(file.fileId);
    this.existingAttachments = this.existingAttachments.filter(f => f.fileId !== file.fileId);
  }

  // ── Fuel entry: receipt/pump-display + odometer photo scan ─────────

  onReceiptFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    this.receiptTotalMismatch = null;
    const expectedType = this.energyMode === 'ELECTRIC' ? 'CHARGING_RECEIPT' : 'FUEL_RECEIPT';
    resizeImage(file, 1600, 0.7).then(resized => this._scanPhoto(resized, 'receipt', expectedType));
  }

  onOdometerFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    resizeImage(file, 1600, 0.7).then(resized => this._scanPhoto(resized, 'odometer', 'ODOMETER'));
  }

  // Scans a captured photo and, on a transient failure (AI server overloaded — HTTP 503 —
  // or the device is offline), automatically retries with backoff instead of asking the
  // user to retake the photo: the resized file is already in memory (this method's own
  // closure), so it's simply resubmitted later. Any other failure (unreadable / wrong
  // document type) falls back to manual entry immediately, no retry.
  private _scanPhoto(file: File, kind: 'receipt' | 'odometer', expectedType: 'FUEL_RECEIPT' | 'CHARGING_RECEIPT' | 'ODOMETER', attempt = 0): void {
    const state = kind === 'receipt' ? this.receiptScan : this.odometerScan;
    state.status = attempt === 0 ? 'scanning' : 'retrying';
    state.offline = !navigator.onLine;

    this._extractionService.extract(file)
      .pipe(take(1))
      .subscribe({
        next: result => {
          if (result.detected && result.document_type === expectedType) {
            state.status = 'done';
            state.previewUrl = URL.createObjectURL(file);
            this.stagedAttachments.push({ file, previewUrl: state.previewUrl });
            if (kind === 'receipt') this._applyReceiptResult(result);
            else this._applyOdometerResult(result);
          } else {
            state.status = 'failed';
          }
        },
        error: (err: HttpErrorResponse) => {
          const offline = !navigator.onLine;
          const overloaded = err.status === 503;
          if ((offline || overloaded) && attempt < SCAN_RETRY_DELAYS_MS.length) {
            state.status = 'retrying';
            state.offline = offline;
            const timer = setTimeout(() => this._scanPhoto(file, kind, expectedType, attempt + 1), SCAN_RETRY_DELAYS_MS[attempt]);
            this._retryTimers.push(timer);
          } else {
            state.status = 'failed';
          }
        },
      });
  }

  private _applyReceiptResult(result: ExtractionResultDto): void {
    const f = result.fields;
    const patch: Record<string, unknown> = {};

    // Numeric fields only auto-fill if still empty — a retry can land minutes after the
    // photo was taken, and the user may have typed values manually in the meantime.
    if (this.energyMode === 'ELECTRIC') {
      if (f.energy_kwh && !this.form.get('energy_kwh')?.value) {
        patch['energy_kwh'] = Number(f.energy_kwh);
        this.autoFilledFields.add('energy_kwh');
      }
      if (f.energy_total_amount && !this.form.get('cost')?.value) {
        patch['cost'] = Number(f.energy_total_amount);
        this.autoFilledFields.add('cost');
      }
      if (f.charging_station_name && !this.form.get('description')?.value) {
        patch['description'] = f.charging_station_name;
      }
    } else {
      if (f.fuel_liters && !this.form.get('fuel_liters')?.value) {
        patch['fuel_liters'] = Number(f.fuel_liters);
        this.autoFilledFields.add('fuel_liters');
      }
      if (f.fuel_total_amount && !this.form.get('cost')?.value) {
        patch['cost'] = Number(f.fuel_total_amount);
        this.autoFilledFields.add('cost');
      }
      if (f.fuel_station_name && !this.form.get('description')?.value) {
        patch['description'] = f.fuel_station_name;
      }
      // The receipt included products other than fuel (car wash, shop, ...) — flag it so
      // the user double-checks Cost before saving, rather than silently trusting the total.
      // Charging summaries don't have this ambiguity (see gemini-extraction.service.ts).
      if (f.receipt_total_amount && f.fuel_total_amount && Number(f.receipt_total_amount) !== Number(f.fuel_total_amount)) {
        this.receiptTotalMismatch = Number(f.receipt_total_amount);
      }
    }

    if (f.issue_date) {
      patch['service_date'] = f.issue_date.split('T')[0];
      this.autoFilledFields.add('service_date');
    }

    this.form.patchValue(patch);
  }

  private _applyOdometerResult(result: ExtractionResultDto): void {
    if (result.fields.odometer_km && this.form.get('mileage')?.value == null) {
      this.form.patchValue({ mileage: Number(result.fields.odometer_km) });
      this.autoFilledFields.add('mileage');
    }
  }

  // ── Reminder ───────────────────────────────────────────────────────

  toggleReminder(): void {
    this.showReminder = !this.showReminder;
    if (!this.showReminder) this.form.get('expiry_date')?.setValue(null);
  }

  // ── Save ───────────────────────────────────────────────────────────

  save(): void {
    if (this.form.invalid || this.submitting || this.uploading) return;

    const raw = this.form.value;
    const dto: CreateMaintenanceRecordDto | UpdateMaintenanceRecordDto = {
      car_id:       Number(raw.car_id),
      service_date: raw.service_date,
      mileage:      raw.mileage != null && raw.mileage !== '' ? Number(raw.mileage) : undefined,
      service_type: raw.service_type,
      description:  raw.description,
      cost:         Number(raw.cost),
      expiry_date:  this.showReminder ? (raw.expiry_date || undefined) : undefined,
      is_diy:       !!raw.is_diy,
      fuel_liters:        raw.fuel_liters != null && raw.fuel_liters !== '' ? Number(raw.fuel_liters) : undefined,
      energy_kwh:         raw.energy_kwh != null && raw.energy_kwh !== '' ? Number(raw.energy_kwh) : undefined,
      is_company_expense: !!raw.is_company_expense,
      parts:        this.parts.map(p => ({ name: p.name, code: p.code, quantity: p.quantity, price: p.price })),
    };

    this.uploading = true;
    const op$ = this.editRecord
      ? this._facade.updateRecord(this.editRecord.id, dto)
      : this._facade.createRecord(dto as CreateMaintenanceRecordDto);

    op$.pipe(take(1)).subscribe({
      next: () => this._afterSave(),
      error: () => { this.uploading = false; },
    });
  }

  private _afterSave(): void {
    const savedId = this._facade.getLastSavedId();
    if (!savedId) { this.uploading = false; this.submitted.emit(); return; }

    const deletions$ = this._removedAttachmentIds.map(id => this._upload.deleteFile(id));
    const uploads$ = this.stagedAttachments.map(a => this._upload.uploadFile(a.file, 'maintenance', savedId));

    if (!deletions$.length && !uploads$.length) {
      this.uploading = false;
      this.submitted.emit();
      return;
    }

    forkJoin([...deletions$, ...uploads$]).pipe(take(1)).subscribe({
      next: () => { this.uploading = false; this.submitted.emit(); },
      error: () => { this.uploading = false; this.submitted.emit(); },
    });
  }
}
