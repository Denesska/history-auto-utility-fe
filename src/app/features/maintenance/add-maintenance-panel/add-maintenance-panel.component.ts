import { DecimalPipe } from '@angular/common';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import {
  Component,
  ElementRef,
  inject,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  CarDto,
  CreateMaintenanceRecordDto,
  ExtractionResultDto,
  MaintenanceRecordDto,
  ServiceCategory,
  ServiceType,
  UpdateMaintenanceRecordDto,
} from '@hau/autogenapi/models';
import { SERVICE_TYPE_CONFIG } from '@hau/features/maintenance/service-type.config';
import { CATEGORY_CONFIG } from '@hau/shared/config/maintenance-category.config';
import {
  COMMON_CURRENCIES,
  DEFAULT_CURRENCY,
} from '@hau/shared/config/currency.config';
import { MaintenanceFacade } from '@hau/features/maintenance/state/maintenance.facade';
import {
  FUEL_PUMP_ICON_NAME,
  FUEL_PUMP_ICON_SRC,
} from '@hau/shared/icons/fuel-pump.icon';
import { ContextFile, UploadService } from '@hau/core/upload/upload.service';
import {
  OdometerScanService,
  ScanDocumentType,
} from '@hau/core/odometer-scan.service';
import {
  DropdownComponent,
  DropdownOption,
} from '@hau/shared/component/dropdown/dropdown.component';
import { IonIcon, IonSpinner } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  closeOutline,
  addOutline,
  cameraOutline,
  documentTextOutline,
  alarmOutline,
  receiptOutline,
  speedometerOutline,
  checkmarkCircleOutline,
  checkmarkOutline,
  downloadOutline,
} from 'ionicons/icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { EMPTY, forkJoin, switchMap, take } from 'rxjs';
import { FullscreenPanelComponent } from '@hau/shared/component/fullscreen-panel/fullscreen-panel.component';
import { OverlayBackDirective } from '@hau/core/navigation/overlay-back.directive';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { FeatureService } from '@hau/core/features/feature.service';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { SupplierApiService, SupplierDto, WithSupplierId } from '@hau/features/supplier';
import { InvoiceScanComponent } from '../invoice-scan/invoice-scan.component';
import { InvoiceScanApplied } from '../invoice-scan/invoice-extraction.model';

// The auto-generated API client is stale (must not be regenerated), so the two
// fields added to MaintenanceRecord for the invoice scan are layered on locally —
// same approach as WithSupplierId.
type WithInvoiceFields<T> = T & {
  labor_cost?: number | null;
  notes?: string | null;
};

export interface PartEntry {
  name: string;
  code?: string;
  quantity?: number;
  price?: number;
  /** True when the part came from an invoice scan — a re-scan replaces these but keeps manually added ones. Not sent to the backend. */
  scanned?: boolean;
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

@UntilDestroy()
@Component({
  selector: 'app-add-maintenance-panel',
  templateUrl: 'add-maintenance-panel.component.html',
  styleUrls: ['./add-maintenance-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    LoaderComponent,
    ReactiveFormsModule,
    FormsModule,
    DecimalPipe,
    IonIcon,
    IonSpinner,
    TranslocoPipe,
    FullscreenPanelComponent,
    DropdownComponent,
    OverlayBackDirective,
    InvoiceScanComponent,
  ],
})
export class AddMaintenancePanelComponent implements OnInit, OnDestroy {
  @Input() selectedCarId: number | null = null;
  /** Pre-selects a service type (e.g. from the car hub's fuel quick-action) when adding a new record — ignored when editing. */
  @Input() initialServiceType: ServiceType | null = null;
  /** Pre-fills the title when a wishlist item graduates into a real record — ignored when editing. */
  @Input() initialTitle: string | null = null;
  /** Pre-fills the cost with a wishlist item's estimate; the user corrects it to what it actually cost. */
  @Input() initialCost: number | null = null;
  @Input() cars: CarDto[] = [];
  @Input() submitting = false;
  @Input() editRecord: MaintenanceRecordDto | null = null;

  @Output() closed = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<void>();

  form!: FormGroup;
  uploading = false;

  readonly serviceTypeCategories = SERVICE_TYPE_CONFIG;

  @ViewChild('partNameInput')
  private _partNameInput?: ElementRef<HTMLInputElement>;

  @ViewChild(InvoiceScanComponent)
  private _invoiceScan?: InvoiceScanComponent;

  parts: PartEntry[] = [];
  addingPart = false;
  newPartName = '';
  newPartCode = '';
  newPartQuantity: number | null = 1;
  newPartPrice: number | null = null;

  // Labor cost is persisted (labor_cost) but `cost` stays the independently
  // editable total: changing labor adds the delta onto whatever the total
  // currently holds, same as a part's price, rather than force-recomputing it.
  // _lastLaborCost is the baseline that delta is measured from.
  laborCost: number | null = null;
  private _lastLaborCost = 0;

  showReminder = false;

  existingAttachments: ContextFile[] = [];
  existingAttachmentUrls: Record<number, string> = {};
  stagedAttachments: StagedAttachment[] = [];
  private _removedAttachmentIds: number[] = [];

  // Original invoice / service-report files, stored as 'maintenance_invoice' on save.
  // Add mode: mirrors the scan component's file list. Edit mode: files added via the "add invoice" button.
  stagedInvoices: File[] = [];
  existingInvoices: ContextFile[] = [];
  private _removedInvoiceIds: number[] = [];

  // ── Fuel entry (ALIMENTARE) ───────────────────────────────────────
  autoFilledFields = new Set<string>();
  receiptScan: PhotoScanState = {
    status: 'idle',
    previewUrl: null,
    offline: false,
  };
  odometerScan: PhotoScanState = {
    status: 'idle',
    previewUrl: null,
    offline: false,
  };
  /** Set when a receipt shows a total that includes non-fuel products, so the user double-checks Cost before saving. */
  receiptTotalMismatch: number | null = null;
  suppliers: SupplierDto[] = [];
  readonly sessionContext = inject(SessionContextService);
  readonly featureService = inject(FeatureService);

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _facade: MaintenanceFacade,
    private readonly _upload: UploadService,
    private readonly _scanService: OdometerScanService,
    private readonly _transloco: TranslocoService,
    private readonly _elRef: ElementRef<HTMLElement>,
    private readonly _renderer: Renderer2,
    private readonly _supplierApi: SupplierApiService,
  ) {
    addIcons({
      closeOutline,
      addOutline,
      cameraOutline,
      documentTextOutline,
      alarmOutline,
      receiptOutline,
      speedometerOutline,
      checkmarkCircleOutline,
      checkmarkOutline,
      downloadOutline,
    });
    // Custom icon (Ionicons has no gas-pump glyph) — see fuel-pump.icon.ts.
    addIcons({ [FUEL_PUMP_ICON_NAME]: FUEL_PUMP_ICON_SRC });
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
      car_id: [
        rec?.car_id ?? this.selectedCarId ?? this.cars[0]?.id ?? null,
        Validators.required,
      ],
      service_date: [
        rec?.service_date.split('T')[0] ??
          new Date().toISOString().split('T')[0],
        Validators.required,
      ],
      mileage: [rec?.mileage ?? null, Validators.min(0)],
      service_type: [
        rec?.service_type ?? this.initialServiceType ?? null,
        Validators.required,
      ],
      // Required for every other type ("Titlu"); for ALIMENTARE the same control
      // is repurposed as an optional "Note" field near the end of the form (99%
      // of fill-ups leave it blank) — see the service_type subscription below.
      description: [
        rec?.description ?? this.initialTitle ?? '',
        (rec?.service_type ?? this.initialServiceType) === 'ALIMENTARE'
          ? []
          : Validators.required,
      ],
      // Not required: omitting it still defaults to OTHER server-side. This is the
      // link between a record and its matching Plan progress bar (see plan-items.util.ts).
      service_category: [
        rec?.service_category ??
          ((rec?.service_type ?? this.initialServiceType) === 'ALIMENTARE'
            ? 'COMBUSTIBIL'
            : null),
      ],
      cost: [
        rec?.cost ?? this.initialCost ?? null,
        [Validators.required, Validators.min(0)],
      ],
      currency: [rec?.currency ?? DEFAULT_CURRENCY],
      expiry_date: [rec?.expiry_date?.split('T')[0] ?? null],
      is_diy: [rec?.is_diy ?? false],
      notes: [(rec as WithInvoiceFields<MaintenanceRecordDto> | null)?.notes ?? ''],
      fuel_liters: [rec?.fuel_liters ?? null, Validators.min(0)],
      energy_kwh: [rec?.energy_kwh ?? null, Validators.min(0)],
      is_company_expense: [rec?.is_company_expense ?? false],
      supplier_id: [
        (rec as WithSupplierId<MaintenanceRecordDto> | null)?.supplier_id ??
          null,
      ],
    });

    // Suppliers are business-only: in personal the picker is hidden and GET /supplier would 403.
    if (this.sessionContext.isBusiness()) {
      this.featureService
        .isEnabled$('supplier')
        .pipe(switchMap(on => (on ? this._supplierApi.getAll() : EMPTY)))
        .subscribe({
          next: suppliers => {
            this.suppliers = suppliers.filter(s => s.is_active);
          },
          error: () => {},
        });
    }

    this.parts = (rec?.parts ?? []).map(p => ({
      name: p.name,
      code: p.code ?? undefined,
      quantity: p.quantity ?? undefined,
      price: p.price ?? undefined,
    }));
    this.showReminder = !!rec?.expiry_date;
    // Restore the persisted labor so its nudge baseline matches what's on screen.
    const savedLabor = (rec as WithInvoiceFields<MaintenanceRecordDto> | null)?.labor_cost;
    this.laborCost = savedLabor ?? null;
    this._lastLaborCost = savedLabor ?? 0;

    // On edit, trust which axis the record actually has data on; on a new record,
    // default from the selected car's fuel_type (hybrid defaults to Fuel, changeable
    // via the toggle in the template).
    this.energyMode = rec
      ? rec.energy_kwh != null
        ? 'ELECTRIC'
        : 'FUEL'
      : this._defaultEnergyMode(this.selectedCar);

    // Keeps energyMode aligned with the selected car when it's unambiguous (pure
    // combustion or pure electric) — left alone for hybrid/plugin-hybrid/unknown so
    // the user's own choice via the toggle isn't silently overridden.
    this.form
      .get('car_id')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe(() => {
        const fuelType = this.selectedCar?.fuel_type;
        if (fuelType === 'ELECTRIC') this.energyMode = 'ELECTRIC';
        else if (
          fuelType &&
          fuelType !== 'HYBRID' &&
          fuelType !== 'PLUGIN_HYBRID'
        )
          this.energyMode = 'FUEL';
      });

    // Keeps the description control's required-ness in sync with the picked type —
    // needed because the category picker stays editable even after arriving with
    // initialServiceType pre-set, so ALIMENTARE can be toggled on/off after init.
    this.form
      .get('service_type')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((type: ServiceType | null) => {
        // The invoice-scan card is hidden for fuel entries — drop its staged originals.
        if (type === 'ALIMENTARE') this.stagedInvoices = [];
        const descCtrl = this.form.get('description');
        descCtrl?.setValidators(
          type === 'ALIMENTARE' ? [] : Validators.required,
        );
        descCtrl?.updateValueAndValidity({ emitEvent: false });

        // ALIMENTARE records are always fuel purchases — force the category and
        // hide the picker (see isFuelEntry in the template); leaving that type
        // clears it back so the field re-appears ready to pick again.
        const categoryCtrl = this.form.get('service_category');
        if (type === 'ALIMENTARE') {
          categoryCtrl?.setValue('COMBUSTIBIL', { emitEvent: false });
        } else if (categoryCtrl?.value === 'COMBUSTIBIL') {
          categoryCtrl.setValue(null, { emitEvent: false });
        }
      });

    // Switching to DIY (where labor doesn't apply) just resets the labor field and
    // its nudge baseline rather than touching the total itself.
    this.form
      .get('is_diy')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe(isDiy => {
        if (isDiy) {
          this.laborCost = null;
          this._lastLaborCost = 0;
        }
      });

    if (rec) {
      this._upload
        .getFilesForContext('maintenance_invoice', rec.id)
        .pipe(untilDestroyed(this))
        .subscribe(files => {
          this.existingInvoices = files;
        });
      this._upload
        .getFilesForContext('maintenance', rec.id)
        .pipe(untilDestroyed(this))
        .subscribe(files => {
          this.existingAttachments = files;
          for (const file of files) {
            if (!file.mimeType.startsWith('image/')) continue;
            this._upload
              .getReadUrl(file.fileId)
              .pipe(untilDestroyed(this))
              .subscribe(res => {
                this.existingAttachmentUrls[file.fileId] = res.readUrl;
              });
          }
        });
    }
  }

  /** Clears the scan card and everything derived from it (staged originals, scanned-part tracking). */
  resetInvoiceScan(): void {
    this._invoiceScan?.reset();
    this.stagedInvoices = [];
    this.parts = this.parts.filter(p => !p.scanned);
  }

  close(): void {
    this.resetInvoiceScan();
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
    // Any pending automatic re-scan (server-overloaded/offline retry loop) is cancelled
    // by untilDestroyed() in _scanPhoto() — the captured photo isn't kept once the panel closes.
  }

  get selectedServiceType(): ServiceType | null {
    return this.form?.get('service_type')?.value ?? null;
  }

  selectServiceType(type: ServiceType): void {
    this.form.get('service_type')?.setValue(type);
  }

  // ── Category (manual selection) ─────────────────────────────────────
  // Excludes COMBUSTIBIL: that value is forced automatically from service_type
  // = ALIMENTARE (see ngOnInit's service_type subscription) and never user-picked.
  get categoryOptions(): DropdownOption[] {
    return CATEGORY_CONFIG.filter(c => c.value !== 'COMBUSTIBIL').map(c => ({
      value: c.value,
      label: this._transloco.translate(c.label),
    }));
  }

  onCategoryChange(value: string | number): void {
    this.form.get('service_category')?.setValue(value as ServiceCategory);
  }

  // ── Currency (cost picker, same idea as documents-form's currencyOptions) ──
  /** The common currencies, plus the record's own if it was saved with another one (e.g. read from a scan). */
  get currencyOptions(): DropdownOption[] {
    const current = (
      this.form.get('currency')?.value as string | null
    )?.toUpperCase();
    const codes =
      current && !COMMON_CURRENCIES.includes(current)
        ? [...COMMON_CURRENCIES, current]
        : COMMON_CURRENCIES;
    return codes.map(code => ({ value: code, label: code }));
  }

  get supplierOptions(): DropdownOption[] {
    return [
      {
        value: 0,
        label: this._transloco.translate('documents.form.fields.noSupplier'),
      },
      ...this.suppliers.map(s => ({
        value: s.id,
        label: `${s.name} (${this._transloco.translate('supplier.type.' + s.type)})`,
      })),
    ];
  }

  onSupplierChange(value: string | number): void {
    this.form.get('supplier_id')?.setValue(Number(value) || null);
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
    this.form
      .get(mode === 'ELECTRIC' ? 'fuel_liters' : 'energy_kwh')
      ?.setValue(null);
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
    if (!this.isFuelEntry)
      return this.editRecord
        ? 'maintenance.form.editTitle'
        : 'maintenance.form.title';
    const base =
      this.energyMode === 'ELECTRIC'
        ? 'maintenance.form.chargeTitle'
        : 'maintenance.form.fuelTitle';
    return this.editRecord ? `${base}Edit` : base;
  }

  get pricePerEnergyUnit(): number | null {
    const cost = Number(this.form?.get('cost')?.value);
    const qty = Number(
      this.form?.get(
        this.energyMode === 'ELECTRIC' ? 'energy_kwh' : 'fuel_liters',
      )?.value,
    );
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

  // ── Invoice scan ───────────────────────────────────────────────────

  onInvoiceFilesChange(files: File[]): void {
    this.stagedInvoices = files;
  }

  /**
   * Applies an AI invoice extraction to the form. Fields the result has null for
   * are left alone. Parts from a previous scan are replaced, manually added ones
   * kept; cost = scan grand total + those manual parts (a part's price is its line
   * total, which feeds the cost directly). Labor/cost baselines are reset at the end
   * so later manual edits nudge cost by the right delta.
   */
  onInvoiceApplied(applied: InvoiceScanApplied): void {
    const r = applied.result;
    const patch: Record<string, unknown> = {};

    if (r.service_type) patch['service_type'] = r.service_type;
    if (r.service_category && r.service_category !== 'COMBUSTIBIL')
      patch['service_category'] = r.service_category;
    if (r.title) patch['description'] = r.title;
    if (r.notes) patch['notes'] = r.notes;
    if (r.service_date) patch['service_date'] = r.service_date;
    const mileageCtrl = this.form.get('mileage');
    if (
      r.mileage != null &&
      (mileageCtrl?.value == null || mileageCtrl.value === '')
    ) {
      patch['mileage'] = r.mileage;
    }
    if (r.currency) patch['currency'] = r.currency;

    const hasLabor =
      r.labor.length > 0 || r.documents.some(d => d.kind === 'service_report');
    if (hasLabor) patch['is_diy'] = false;

    const supplierId = this._matchSupplierId(r.supplier_name);
    if (supplierId != null) patch['supplier_id'] = supplierId;

    // Parts: replace the previously scanned ones, keep the manual ones.
    const manualParts = this.parts.filter(p => !p.scanned);
    const scannedParts: PartEntry[] = r.parts.map(p => ({
      name: p.name,
      code: p.code ?? undefined,
      quantity: p.quantity,
      price: p.total ?? undefined,
      scanned: true,
    }));
    this.parts = [...scannedParts, ...manualParts];

    const manualTotal = manualParts.reduce((sum, p) => sum + (p.price ?? 0), 0);
    patch['cost'] = Math.round((r.totals.grand_total + manualTotal) * 100) / 100;

    this.form.patchValue(patch);

    // Labor (own field) and reset the nudge baseline to what's now shown, so a
    // later manual labor edit moves cost by exactly its delta.
    this.laborCost = r.totals.labor > 0 ? r.totals.labor : null;
    this._lastLaborCost = this.laborCost ?? 0;
  }

  private _matchSupplierId(name: string | null): number | null {
    if (
      !name ||
      !this.sessionContext.isBusiness() ||
      !this.featureService.isEnabled('supplier')
    )
      return null;
    const norm = (v: string) => v.trim().toLowerCase().replace(/\s+/g, ' ');
    const target = norm(name);
    if (!target) return null;
    const exact = this.suppliers.find(s => norm(s.name) === target);
    if (exact) return exact.id;
    const fuzzy = this.suppliers.filter(s => {
      const n = norm(s.name);
      return n.length >= 3 && (n.includes(target) || target.includes(n));
    });
    return fuzzy.length === 1 ? fuzzy[0].id : null;
  }

  // Edit mode: invoices already stored on the record, plus adding/removing them.

  onInvoiceFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    this.stagedInvoices.push(...Array.from(input.files));
    input.value = '';
  }

  removeStagedInvoice(index: number): void {
    this.stagedInvoices.splice(index, 1);
  }

  removeExistingInvoice(file: ContextFile): void {
    this._removedInvoiceIds.push(file.fileId);
    this.existingInvoices = this.existingInvoices.filter(
      f => f.fileId !== file.fileId,
    );
  }

  downloadInvoice(file: ContextFile): void {
    this._upload
      .getReadUrl(file.fileId, true)
      .pipe(take(1), untilDestroyed(this))
      .subscribe(res => {
        if (Capacitor.isNativePlatform()) void Browser.open({ url: res.readUrl });
        else window.open(res.readUrl, '_blank');
      });
  }

  // ── Attachments ────────────────────────────────────────────────────

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    for (const file of Array.from(input.files)) {
      this.stagedAttachments.push({
        file,
        previewUrl: file.type.startsWith('image/')
          ? URL.createObjectURL(file)
          : null,
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
    this.existingAttachments = this.existingAttachments.filter(
      f => f.fileId !== file.fileId,
    );
  }

  // ── Fuel entry: receipt/pump-display + odometer photo scan ─────────

  onReceiptFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    this.receiptTotalMismatch = null;
    const expectedType =
      this.energyMode === 'ELECTRIC' ? 'CHARGING_RECEIPT' : 'FUEL_RECEIPT';
    this._scanService
      .resize(file)
      .then(resized => this._scanPhoto(resized, 'receipt', expectedType));
  }

  onOdometerFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    this._scanService
      .resize(file)
      .then(resized => this._scanPhoto(resized, 'odometer', 'ODOMETER'));
  }

  // Scans a captured photo and, on a transient failure (AI server overloaded — HTTP 503 —
  // or the device is offline), OdometerScanService automatically retries with backoff instead
  // of asking the user to retake the photo: the resized file is already in memory, so it's
  // simply resubmitted later. Any other failure (unreadable / wrong document type) falls back
  // to manual entry immediately, no retry.
  private _scanPhoto(
    file: File,
    kind: 'receipt' | 'odometer',
    expectedType: ScanDocumentType,
  ): void {
    const state = kind === 'receipt' ? this.receiptScan : this.odometerScan;
    // A retake replaces the previously staged photo for this slot rather than
    // piling another one on — otherwise a few failed scan attempts in a row
    // (see below) would attach several near-duplicate photos to the record.
    this._unstageScanPhoto(state);

    // Stage the photo immediately — before the scan request even starts, not
    // when it resolves. The user took it to document this fill-up either way,
    // and save() doesn't block while a scan is in flight (see save()): if the
    // user hits Save while this is still 'scanning'/'retrying' (AI overloaded,
    // retry backoff runs up to ~4.5 minutes), staging only on resolution left
    // that save with no attachment at all — the same class of bug as a failed
    // scan silently dropping the photo. Only the auto-fill of fields and the
    // capture tile's "done" thumbnail state still depend on the scan actually
    // resolving successfully.
    state.previewUrl = URL.createObjectURL(file);
    this.stagedAttachments.push({ file, previewUrl: state.previewUrl });

    state.status = 'scanning';
    state.offline = !navigator.onLine;

    this._scanService
      .scan(file, expectedType, offline => {
        state.status = 'retrying';
        state.offline = offline;
      })
      .pipe(untilDestroyed(this))
      .subscribe(result => {
        if (result) {
          state.status = 'done';
          if (kind === 'receipt') this._applyReceiptResult(result);
          else this._applyOdometerResult(result);
        } else {
          state.status = 'failed';
        }
      });
  }

  // Removes the attachment staged by a previous scan attempt for this capture
  // slot (receipt or odometer), if any, so retaking the photo replaces it
  // instead of attaching both.
  private _unstageScanPhoto(state: PhotoScanState): void {
    if (!state.previewUrl) return;
    const idx = this.stagedAttachments.findIndex(
      a => a.previewUrl === state.previewUrl,
    );
    if (idx !== -1) {
      URL.revokeObjectURL(state.previewUrl);
      this.stagedAttachments.splice(idx, 1);
    }
    state.previewUrl = null;
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
        if (f.currency) patch['currency'] = f.currency.trim().toUpperCase();
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
        if (f.currency) patch['currency'] = f.currency.trim().toUpperCase();
      }
      if (f.fuel_station_name && !this.form.get('description')?.value) {
        patch['description'] = f.fuel_station_name;
      }
      // The receipt included products other than fuel (car wash, shop, ...) — flag it so
      // the user double-checks Cost before saving, rather than silently trusting the total.
      // Charging summaries don't have this ambiguity (see gemini-extraction.service.ts).
      if (
        f.receipt_total_amount &&
        f.fuel_total_amount &&
        Number(f.receipt_total_amount) !== Number(f.fuel_total_amount)
      ) {
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
    const dto: WithInvoiceFields<
      WithSupplierId<CreateMaintenanceRecordDto | UpdateMaintenanceRecordDto>
    > = {
      car_id: Number(raw.car_id),
      service_date: raw.service_date,
      mileage:
        raw.mileage != null && raw.mileage !== ''
          ? Number(raw.mileage)
          : undefined,
      service_type: raw.service_type,
      service_category: raw.service_category ?? undefined,
      description: raw.description,
      cost: Number(raw.cost),
      currency: raw.currency || DEFAULT_CURRENCY,
      expiry_date: this.showReminder ? raw.expiry_date || undefined : undefined,
      is_diy: !!raw.is_diy,
      notes: raw.notes?.trim() ? raw.notes.trim() : null,
      labor_cost:
        !raw.is_diy && this.laborCost ? Number(this.laborCost) : null,
      fuel_liters:
        raw.fuel_liters != null && raw.fuel_liters !== ''
          ? Number(raw.fuel_liters)
          : undefined,
      energy_kwh:
        raw.energy_kwh != null && raw.energy_kwh !== ''
          ? Number(raw.energy_kwh)
          : undefined,
      is_company_expense: !!raw.is_company_expense,
      supplier_id: raw.supplier_id ? Number(raw.supplier_id) : null,
      parts: this.parts.map(p => ({
        name: p.name,
        code: p.code,
        quantity: p.quantity,
        price: p.price,
      })),
    };

    this.uploading = true;
    const op$ = this.editRecord
      ? this._facade.updateRecord(this.editRecord.id, dto)
      : this._facade.createRecord(dto as CreateMaintenanceRecordDto);

    op$.pipe(take(1)).subscribe({
      next: () => this._afterSave(),
      error: () => {
        this.uploading = false;
      },
    });
  }

  private _afterSave(): void {
    const savedId = this._facade.getLastSavedId();
    if (!savedId) {
      this.uploading = false;
      this.submitted.emit();
      return;
    }

    const deletions$ = [
      ...this._removedAttachmentIds,
      ...this._removedInvoiceIds,
    ].map(id => this._upload.deleteFile(id));
    const uploads$ = [
      ...this.stagedAttachments.map(a =>
        this._upload.uploadFile(a.file, 'maintenance', savedId),
      ),
      ...this.stagedInvoices.map(f =>
        this._upload.uploadFile(f, 'maintenance_invoice', savedId),
      ),
    ];

    if (!deletions$.length && !uploads$.length) {
      this.uploading = false;
      this.submitted.emit();
      return;
    }

    // Only reached when an attachment was actually added/removed — the
    // plain create/update API response never carries attachmentsCount/
    // thumbnailUrl (only the list endpoint does), so without this the
    // Istoric list row's thumbnail/📎 badge for this record would stay
    // stale until the next full reload. One refresh per save, fired after
    // every upload/deletion has settled — not one per file.
    const carId = Number(this.form.get('car_id')?.value);

    forkJoin([...deletions$, ...uploads$])
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.uploading = false;
          if (carId) this._facade.refreshCarRecords(carId);
          this.submitted.emit();
        },
        error: () => {
          this.uploading = false;
          if (carId) this._facade.refreshCarRecords(carId);
          this.submitted.emit();
        },
      });
  }
}
