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
  HostListener,
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
  MaintenanceSettingDto,
  ServiceType,
  UpdateMaintenanceRecordDto,
} from '@hau/autogenapi/models';
import { SERVICE_TYPE_CONFIG } from '@hau/features/maintenance/service-type.config';
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
import { AutocompleteComponent } from '@hau/shared/component/autocomplete/autocomplete.component';
import { IonIcon, IonSpinner } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  closeOutline,
  createOutline,
  addOutline,
  cameraOutline,
  documentTextOutline,
  alarmOutline,
  receiptOutline,
  speedometerOutline,
  checkmarkCircleOutline,
  checkmarkOutline,
  downloadOutline,
  waterOutline,
  carSportOutline,
  flashOutline,
  bulbOutline,
  gitCompareOutline,
  constructOutline,
  batteryChargingOutline,
  funnelOutline,
  listOutline,
  filterOutline,
  carOutline,
  settingsOutline,
  buildOutline,
  thermometerOutline,
  colorFilterOutline,
  snowOutline,
  syncOutline,
  discOutline,
  shieldCheckmarkOutline,
} from 'ionicons/icons';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import {
  PLAN_ITEM_CONFIG,
  PlanItemKey,
  WORK_ITEM_KEYS,
  deriveCategoryFromItems,
  getPlanItemDefinitions,
} from '@hau/shared/config/plan-item.catalog';
import { buildPlanItems } from '@hau/shared/utils/plan-items.util';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { EMPTY, forkJoin, switchMap, take } from 'rxjs';
import { FullscreenPanelComponent } from '@hau/shared/component/fullscreen-panel/fullscreen-panel.component';
import { OverlayBackDirective } from '@hau/core/navigation/overlay-back.directive';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { FeatureService } from '@hau/core/features/feature.service';
import { ExchangeRateService } from '@hau/core/exchange-rate.service';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { SupplierApiService, SupplierDto, WithSupplierId } from '@hau/features/supplier';
import { SupplierType } from '@hau/shared/config/supplier-type.config';
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
  /** Currency of the price; undefined = same as the record currency. */
  currency?: string;
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

interface PlanChip {
  key: PlanItemKey;
  icon: string;
  labelKey: string;
  tracked: boolean;
  /** Translation key for the item's current Plan status; null when the item isn't tracked. */
  statusKey: string | null;
  statusClass: 'ok' | 'soon' | 'overdue' | 'none' | null;
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
    AutocompleteComponent,
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
  /** Plan items to pre-tick when adding a new record (e.g. from a Plan bar's "log service" action) — ignored when editing. */
  @Input() presetPlanItems: PlanItemKey[] = [];

  @Output() closed = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<void>();

  form!: FormGroup;
  uploading = false;

  @ViewChild('partNameInput')
  private _partNameInput?: ElementRef<HTMLInputElement>;

  @ViewChild(InvoiceScanComponent)
  private _invoiceScan?: InvoiceScanComponent;

  parts: PartEntry[] = [];
  addingPart = false;
  /** Index of the part being edited in the sheet; null when adding a new one. */
  editingPartIndex: number | null = null;
  newPartName = '';
  newPartCode = '';
  newPartQuantity: number | null = 1;
  newPartPrice: number | null = null;
  newPartCurrency = DEFAULT_CURRENCY;

  /** Manual parts-total override (parts_cost / parts_cost_currency); null = automatic sum. */
  partsCostOverride: number | null = null;
  editingPartsTotal = false;
  totalSheetAmount: number | null = null;

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
  private readonly _bootstrapFacade = inject(BootstrapFacade);
  private readonly _exchangeRates = inject(ExchangeRateService);

  // ── Plan items ("What was changed?") ──────────────────────────────
  selectedPlanItems: PlanItemKey[] = [];
  planSheetOpen = false;
  /** Free-text jobs ("Other job…") that have no catalog item. */
  customItems: string[] = [];
  customInput = '';
  readonly maxCustomItems = 10;
  readonly maxCustomLength = 60;
  /** Lower-cased custom items that an invoice scan added (a re-scan replaces those, never typed ones). */
  private _scanCustom = new Set<string>();
  /** True once the user picked the expense type by hand — auto-fill (items / scan) then stays off. */
  private _typeTouched = false;
  private _scanType: ServiceType | null = null;
  /** Form fields last filled by an invoice scan (a re-scan may overwrite those, never hand-typed ones). */
  private _scanFilled = new Set<string>();
  private _laborFromScan = false;
  /** Expense types the end-of-form picker offers; fuel/charging has its own entry point. */
  readonly expenseTypeOptions = SERVICE_TYPE_CONFIG.filter(c => c.value !== 'ALIMENTARE');
  private _maintenanceByCar: Record<number, MaintenanceRecordDto[]> = {};
  private _settingsByCar: Record<number, MaintenanceSettingDto[]> = {};
  private _planChipsCache: { key: string; chips: PlanChip[] } | null = null;

  /** Serialized form state taken at the end of init; hasUnsavedChanges() compares against it. */
  private _initialSignature = '';
  /** Set after a successful save or a confirmed discard so the route guard / beforeunload stop prompting. */
  private _allowLeave = false;

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
      createOutline,
      addOutline,
      cameraOutline,
      documentTextOutline,
      alarmOutline,
      receiptOutline,
      speedometerOutline,
      checkmarkCircleOutline,
      checkmarkOutline,
      downloadOutline,
      waterOutline,
      carSportOutline,
      flashOutline,
      bulbOutline,
      gitCompareOutline,
      constructOutline,
      batteryChargingOutline,
      funnelOutline,
      listOutline,
      filterOutline,
      carOutline,
      settingsOutline,
      buildOutline,
      thermometerOutline,
      colorFilterOutline,
      snowOutline,
      syncOutline,
      discOutline,
      shieldCheckmarkOutline,
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
    this._bootstrapFacade.maintenance$
      .pipe(untilDestroyed(this))
      .subscribe(m => {
        this._maintenanceByCar = m;
        this._planChipsCache = null;
      });
    this._bootstrapFacade.carMaintenanceSettings$
      .pipe(untilDestroyed(this))
      .subscribe(m => {
        this._settingsByCar = m;
        this._planChipsCache = null;
      });
    this.customItems = [...((rec as { custom_items?: string[] } | null)?.custom_items ?? [])];
    this.selectedPlanItems = rec
      ? [...(rec.plan_items ?? [])]
      : [...(this.presetPlanItems ?? [])];
    // An existing record's type, or one handed in by the caller (fuel shortcut, wishlist), is the user's choice.
    this._typeTouched = !!rec || !!this.initialServiceType;
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
        rec?.service_type ?? this.initialServiceType ?? 'MAINTENANCE',
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
      // No UI picker any more: derived from the ticked items on save (_categoryForSave).
      // Holds COMBUSTIBIL for fuel entries and an invoice scan's suggestion.
      service_category: [
        rec?.service_category ??
          ((rec?.service_type ?? this.initialServiceType) === 'ALIMENTARE'
            ? 'COMBUSTIBIL'
            : null),
      ],
      cost: [
        rec?.cost ?? this.initialCost ?? 0,
        [Validators.required, Validators.min(0)],
      ],
      currency: [rec?.currency ?? DEFAULT_CURRENCY],
      expiry_date: [rec?.expiry_date?.split('T')[0] ?? null],
      service_name: [(rec as { service_name?: string | null } | null)?.service_name ?? ''],
      reminder_title: [(rec as WithInvoiceFields<MaintenanceRecordDto> | null)?.reminder_title ?? ''],
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
      currency: p.currency ?? undefined,
    }));
    const savedPartsCost = (rec as { parts_cost?: number | null } | null)?.parts_cost;
    if (savedPartsCost != null) {
      this.partsCostOverride = savedPartsCost;
    }
    this.showReminder = !!rec?.expiry_date;
    this._syncReminderValidators();
    // Restore the persisted labor so its nudge baseline matches what's on screen.
    const savedLabor = (rec as WithInvoiceFields<MaintenanceRecordDto> | null)?.labor_cost;
    this.laborCost = savedLabor ?? 0;
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
          this.laborCost = 0;
          this._lastLaborCost = 0;
          this._laborFromScan = false;
          this.form.get('supplier_id')?.setValue(null);
          this.form.get('service_name')?.setValue('');
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

    // Parts priced in another currency are converted at the BNR rate of the service date:
    // warm the rate cache now and whenever the date or the record currency changes.
    this._prefetchPartRates();
    for (const name of ['service_date', 'currency']) {
      this.form
        .get(name)
        ?.valueChanges.pipe(untilDestroyed(this))
        .subscribe(() => this._prefetchPartRates());
    }

    // Snapshot after defaults / prefill (query params, loaded record) are applied.
    this._initialSignature = this._stateSignature();
  }

  /** Everything the user can enter, serialized — compared against the init snapshot. */
  private _stateSignature(): string {
    const fileSig = (f: File) => [f.name, f.size, f.lastModified];
    return JSON.stringify({
      form: this.form.getRawValue(),
      parts: this.parts.map(p => [p.name, p.code, p.quantity, p.price, p.currency]),
      plan: [...this.selectedPlanItems].sort(),
      custom: this.customItems,
      labor: this.laborCost ?? 0,
      partsCost: this.partsCostOverride,
      showReminder: this.showReminder,
      energyMode: this.energyMode,
      staged: this.stagedAttachments.map(a => fileSig(a.file)),
      invoices: this.stagedInvoices.map(fileSig),
      removed: [this._removedAttachmentIds, this._removedInvoiceIds],
    });
  }

  hasUnsavedChanges(): boolean {
    if (this._allowLeave || !this.form) return false;
    try {
      return this._stateSignature() !== this._initialSignature;
    } catch {
      // Dirty detection must never trap the user in the form.
      return false;
    }
  }

  /** Discard-changes confirm, shown inside the panel (an Ionic alert would render behind this body-level panel). */
  confirmDiscardOpen = false;
  private _confirmResolve: ((leave: boolean) => void) | null = null;

  /** Router / back-navigation guard hook: true = leave, asking first when there are unsaved changes. */
  canDeactivate(): Promise<boolean> {
    if (!this.hasUnsavedChanges()) return Promise.resolve(true);
    // A confirm is already on screen (e.g. a second Back press): keep the form, keep that dialog.
    if (this._confirmResolve) return Promise.resolve(false);
    this.confirmDiscardOpen = true;
    return new Promise<boolean>(resolve => {
      this._confirmResolve = resolve;
    });
  }

  /** Stay (false) / Discard (true) buttons, backdrop and device Back of the confirm. */
  resolveDiscard(leave: boolean): void {
    if (leave) this._allowLeave = true;
    this.confirmDiscardOpen = false;
    const resolve = this._confirmResolve;
    this._confirmResolve = null;
    resolve?.(leave);
  }

  /** Close / X / device-back entry point: confirms first when something was entered, then emits `closed`. */
  async requestClose(): Promise<void> {
    let leave = true;
    try {
      leave = await this.canDeactivate();
    } catch {
      leave = true;
    }
    if (leave) this.close();
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent): void {
    if (this.hasUnsavedChanges()) {
      event.preventDefault();
      event.returnValue = '';
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
    this._confirmResolve?.(true);
    this._confirmResolve = null;
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
    this._typeTouched = true;
    this.form.get('service_type')?.setValue(type);
  }

  /** Auto-fills the expense type from the invoice scan / ticked items until the user picks one. */
  private _autoSetType(): void {
    if (this._typeTouched || this.isFuelEntry) return;
    const items = this.selectedPlanItems;
    const hasWork = items.some(k => WORK_ITEM_KEYS.includes(k)) || this.customItems.length > 0;
    const hasPlan = items.some(k => !WORK_ITEM_KEYS.includes(k));
    let type: ServiceType | null = null;
    if (this._scanType && this._scanType !== 'ALIMENTARE') type = this._scanType;
    else if (hasWork && !hasPlan) type = 'REPAIR';
    else if (items.length || this.customItems.length) type = 'MAINTENANCE';
    if (type) this.form.get('service_type')?.setValue(type);
  }

  // ── Plan items ("What was changed?") ─────────────────────────────────
  private get _selectedCar(): CarDto | null {
    const id = Number(this.form?.get('car_id')?.value);
    return this.cars.find(c => c.id === id) ?? null;
  }

  /** Items applicable to the selected car: tracked ones first (each with its Plan status), then the rest. */
  get planChips(): PlanChip[] {
    const car = this._selectedCar;
    if (!car) return [];
    const records = this._maintenanceByCar[car.id] ?? [];
    // Normal (built-in) profile = the car's rows without a profile id. The Plan page's
    // active profile is component-local state, so it can't be read from here.
    const settings = (this._settingsByCar[car.id] ?? []).filter(s => !s.profile_id);
    const cacheKey = `${car.id}|${settings.map(s => s.item + s.tracked).join()}|${records.length}|${car.actual_mileage}|${car.fuel_type}|${car.transmission}`;
    if (this._planChipsCache?.key === cacheKey) return this._planChipsCache.chips;

    const planByItem = new Map(
      buildPlanItems(car, records, 'normal', settings).map(p => [p.item, p]),
    );
    const workChips = WORK_ITEM_KEYS.map((key): PlanChip => ({
      key,
      icon: PLAN_ITEM_CONFIG[key].icon,
      labelKey: PLAN_ITEM_CONFIG[key].labelKey,
      tracked: false,
      statusKey: null,
      statusClass: null,
    }));
    const chips = getPlanItemDefinitions(car).map((def): PlanChip => {
      const cfg = PLAN_ITEM_CONFIG[def.key];
      const plan = planByItem.get(def.key);
      let statusKey: string | null = null;
      let statusClass: PlanChip['statusClass'] = null;
      if (plan) {
        if (plan.state === 'overdue') { statusKey = 'maintenance.planItems.statusOverdue'; statusClass = 'overdue'; }
        else if (plan.state === 'warning') { statusKey = 'maintenance.planItems.statusSoon'; statusClass = 'soon'; }
        else if (plan.state === 'ok') { statusKey = 'maintenance.planItems.statusOk'; statusClass = 'ok'; }
        else { statusKey = 'maintenance.planItems.statusNoHistory'; statusClass = 'none'; }
      }
      return {
        key: def.key,
        icon: cfg.icon,
        labelKey: cfg.labelKey,
        tracked: !!plan,
        statusKey,
        statusClass,
      };
    });
    const sorted = [...chips.filter(c => c.tracked), ...chips.filter(c => !c.tracked), ...workChips];
    this._planChipsCache = { key: cacheKey, chips: sorted };
    return sorted;
  }

  /** Ticked items as removable chips, in catalog order. */
  get selectedPlanChips(): PlanChip[] {
    return this.planChips.filter(c => this.isPlanItemSelected(c.key));
  }

  /** Up to 3 overdue / due-soon tracked items, overdue first. Shown only while nothing is ticked. */
  get suggestedPlanChips(): PlanChip[] {
    const chips = this.planChips;
    const rank = (c: PlanChip) => (c.statusClass === 'overdue' ? 0 : 1);
    return chips
      .filter(c => c.statusClass === 'overdue' || c.statusClass === 'soon')
      .sort((x, y) => rank(x) - rank(y))
      .slice(0, 3);
  }

  /** Full checklist for the bottom sheet, grouped; items not applicable to the car are already absent. */
  get planChipGroups(): { labelKey: string; chips: PlanChip[] }[] {
    const groups: { labelKey: string; keys: PlanItemKey[] }[] = [
      { labelKey: 'maintenance.planItems.groupFluids', keys: ['ENGINE_OIL', 'GEARBOX_OIL', 'DIFFERENTIAL_OIL', 'BRAKE_FLUID', 'COOLANT', 'POWER_STEERING_FLUID'] },
      { labelKey: 'maintenance.planItems.groupFilters', keys: ['AIR_FILTER', 'CABIN_FILTER', 'FUEL_FILTER'] },
      { labelKey: 'maintenance.planItems.groupOther', keys: ['AC_SERVICE', 'TIRES', 'INSPECTION', 'TIMING_BELT'] },
      { labelKey: 'maintenance.planItems.groupRepairs', keys: WORK_ITEM_KEYS },
    ];
    const chips = this.planChips;
    return groups
      .map(g => ({ labelKey: g.labelKey, chips: g.keys.map(k => chips.find(c => c.key === k)).filter((c): c is PlanChip => !!c) }))
      .filter(g => g.chips.length);
  }

  isPlanItemSelected(key: PlanItemKey): boolean {
    return this.selectedPlanItems.includes(key);
  }

  togglePlanItem(key: PlanItemKey): void {
    this.selectedPlanItems = this.isPlanItemSelected(key)
      ? this.selectedPlanItems.filter(k => k !== key)
      : [...this.selectedPlanItems, key];
    this._autoSetType();
  }

  /** Selected items that still apply to the currently selected car. */
  private _applicablePlanItems(items: readonly PlanItemKey[]): PlanItemKey[] {
    const car = this._selectedCar;
    if (!car) return [];
    const keys = new Set<PlanItemKey>([...getPlanItemDefinitions(car).map(d => d.key), ...WORK_ITEM_KEYS]);
    return items.filter(k => keys.has(k));
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

  /** Suppliers are a business-only feature (GET /supplier answers 403 in personal context). */
  get supplierEnabled(): boolean {
    return (
      this.sessionContext.isBusiness() && this.featureService.isEnabled('supplier')
    );
  }

  get supplierOptions(): DropdownOption[] {
    return this.suppliers.map(s => ({ value: s.id, label: s.name }));
  }

  onSupplierChange(value: string | number): void {
    this.form.get('supplier_id')?.setValue(Number(value) || null);
  }

  /** Creates a workshop from the autocomplete's typed name and selects it. */
  onSupplierCreate(name: string): void {
    this._supplierApi
      .create({ name, type: SupplierType.SERVICE })
      .pipe(take(1))
      .subscribe({
        next: created => {
          this.suppliers = [...this.suppliers, created];
          this.form.get('supplier_id')?.setValue(created.id);
        },
        error: () => {},
      });
  }

  /** Personal accounts have no supplier directory: the workshop is a free-text name on the record. */
  get serviceNameEnabled(): boolean {
    return !this.sessionContext.isBusiness();
  }

  /** Distinct workshop names from the user's own records (all cars), most recent first. */
  get serviceNameOptions(): DropdownOption[] {
    const all = Object.values(this._maintenanceByCar).flat() as (MaintenanceRecordDto & { service_name?: string | null })[];
    const seen = new Set<string>();
    const out: DropdownOption[] = [];
    const add = (name: string | null | undefined): void => {
      const n = name?.trim();
      if (n && !seen.has(n.toLowerCase())) {
        seen.add(n.toLowerCase());
        out.push({ value: n, label: n });
      }
    };
    add(this.form.get('service_name')?.value);
    [...all]
      .sort((a, b) => (b.service_date ?? '').localeCompare(a.service_date ?? ''))
      .forEach(r => add(r.service_name));
    return out;
  }

  onServiceNameChange(value: string | number | null): void {
    this.form.get('service_name')?.setValue(value == null ? '' : String(value));
    this.form.get('service_name')?.markAsDirty();
  }

  // ── Custom ("Other job…") items ──────────────────────────────────────
  get canAddCustom(): boolean {
    return !!this.customInput.trim() && this.customItems.length < this.maxCustomItems;
  }

  addCustomItem(): void {
    if (!this.canAddCustom) return;
    this._pushCustom(this.customInput);
    this.customInput = '';
    this._autoSetType();
  }

  removeCustomItem(index: number): void {
    const [removed] = this.customItems.splice(index, 1);
    if (removed) this._scanCustom.delete(removed.toLowerCase());
    this._autoSetType();
  }

  private _pushCustom(raw: string, fromScan = false): void {
    const v = raw.trim().slice(0, this.maxCustomLength);
    if (!v || this.customItems.length >= this.maxCustomItems) return;
    if (this.customItems.some(c => c.toLowerCase() === v.toLowerCase())) return;
    this.customItems = [...this.customItems, v];
    if (fromScan) this._scanCustom.add(v.toLowerCase());
  }

  /** "I did it myself": no workshop, no labor. */
  toggleDiy(): void {
    const ctrl = this.form.get('is_diy');
    ctrl?.setValue(!ctrl.value);
    ctrl?.markAsDirty();
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

  /** The record's currency (what the cost picker holds). */
  get recordCurrency(): string {
    return (this.form.get('currency')?.value as string | null)?.toUpperCase() || DEFAULT_CURRENCY;
  }

  partCurrency(p: PartEntry): string {
    return p.currency?.toUpperCase() || this.recordCurrency;
  }

  /** Service date as YYYY-MM-DD — the day whose BNR rate converts foreign-currency parts. */
  private get _rateDate(): string {
    return String(this.form.get('service_date')?.value || new Date().toISOString().split('T')[0]).split('T')[0];
  }

  /** A part's price in the record currency; null when it needs a rate that isn't available (yet). */
  private _priceInRecordCurrency(price: number, currency: string | undefined): number | null {
    const cur = currency?.toUpperCase() || this.recordCurrency;
    if (cur === this.recordCurrency) return price;
    const rate = this._exchangeRates.peek(cur, this.recordCurrency, this._rateDate);
    return rate ? Math.round(price * rate * 100) / 100 : null;
  }

  /** Fetches (cached) the rates the current parts need; the template picks them up via peek(). */
  private _prefetchPartRates(): void {
    if (!this.form) return;
    for (const p of this.parts) {
      const cur = this.partCurrency(p);
      if (p.price && cur !== this.recordCurrency) {
        void this._exchangeRates.getRate(cur, this.recordCurrency, this._rateDate);
      }
    }
  }

  /**
   * Automatic parts sum in the record currency. `converted` = some parts were in another currency;
   * `missing` = a needed rate couldn't be fetched (yet), so those parts are left out.
   */
  get autoPartsTotal(): { amount: number; converted: boolean; missing: boolean } {
    let amount = 0;
    let converted = false;
    let missing = false;
    for (const p of this.parts) {
      if (!p.price) continue;
      if (this.partCurrency(p) !== this.recordCurrency) converted = true;
      const v = this._priceInRecordCurrency(p.price, p.currency);
      if (v == null) missing = true;
      else amount += v;
    }
    return { amount: Math.round(amount * 100) / 100, converted, missing };
  }

  /** What the parts line shows: the override when there is one (record currency), otherwise the automatic sum. */
  get partsTotal(): { amount: number; converted: boolean; missing: boolean } | null {
    if (this.partsCostOverride != null) return { amount: this.partsCostOverride, converted: false, missing: false };
    const auto = this.autoPartsTotal;
    return this.parts.some(p => p.price) ? auto : null;
  }

  /** True when the manual parts total no longer matches the per-part prices — chips then hide their prices. */
  get partsOverridden(): boolean {
    return this.partsCostOverride != null && Math.abs(this.partsCostOverride - this.autoPartsTotal.amount) > 0.005;
  }

  /** Currency options for a part's picker. */
  get partCurrencyOptions(): DropdownOption[] {
    // The backend only accepts the four common currencies here, so never offer the record's exotic one.
    return COMMON_CURRENCIES.map(code => ({ value: code, label: code }));
  }

  private _supportedCurrency(code: string | null | undefined): string | null {
    const c = code?.toUpperCase();
    return c && COMMON_CURRENCIES.includes(c) ? c : null;
  }

  openEditPartsTotal(): void {
    // The override is entered in the record currency (no picker); it keeps its number if the currency changes.
    this.totalSheetAmount = this.partsCostOverride ?? this.partsTotal?.amount ?? null;
    this.editingPartsTotal = true;
  }

  closePartsTotalSheet(): void {
    this.editingPartsTotal = false;
  }

  savePartsTotal(): void {
    if (this.totalSheetAmount == null || Number(this.totalSheetAmount) < 0) return;
    this.partsCostOverride = Number(this.totalSheetAmount);
    this.editingPartsTotal = false;
  }

  resetPartsTotal(): void {
    this.partsCostOverride = null;
    this.editingPartsTotal = false;
  }

  /**
   * How much a part's price nudges the total cost: its price in the record currency (converted at the
   * BNR rate of the service date), 0 when a parts-total override exists or no rate could be fetched.
   */
  private async _partNudge(price: number | null | undefined, currency: string | undefined): Promise<number> {
    if (this.partsCostOverride != null || !price) return 0;
    const cur = currency?.toUpperCase() || this.recordCurrency;
    if (cur === this.recordCurrency) return price;
    const rate = await this._exchangeRates.getRate(cur, this.recordCurrency, this._rateDate);
    return rate ? Math.round(price * rate * 100) / 100 : 0;
  }

  onLaborCostChange(value: number | null): void {
    this.laborCost = value;
    this._laborFromScan = false;
    const delta = (value ?? 0) - this._lastLaborCost;
    this._lastLaborCost = value ?? 0;
    this._nudgeCost(delta);
  }

  private _nudgeCost(delta: number): void {
    if (!delta) return;
    const costCtrl = this.form.get('cost');
    const current = Number(costCtrl?.value) || 0;
    costCtrl?.setValue(Math.round((current + delta) * 100) / 100);
  }

  // ── Parts ──────────────────────────────────────────────────────────

  openAddPart(): void {
    this.newPartName = '';
    this.newPartCode = '';
    this.newPartQuantity = 1;
    this.newPartPrice = null;
    this.newPartCurrency = this._supportedCurrency(this.recordCurrency) ?? DEFAULT_CURRENCY;
    this.editingPartIndex = null;
    this.addingPart = true;
    // The name input only exists once the @if block above renders it, so the
    // ViewChild isn't populated until after this change detection pass.
    setTimeout(() => this._partNameInput?.nativeElement.focus());
  }

  openEditPart(index: number): void {
    const part = this.parts[index];
    if (!part) return;
    this.newPartName = part.name;
    this.newPartCode = part.code ?? '';
    this.newPartQuantity = part.quantity ?? null;
    this.newPartPrice = part.price ?? null;
    this.newPartCurrency = this.partCurrency(part);
    this.editingPartIndex = index;
    this.addingPart = true;
  }

  removeEditingPart(): void {
    if (this.editingPartIndex != null) this.removePart(this.editingPartIndex);
    this.cancelAddPart();
  }

  cancelAddPart(): void {
    this.addingPart = false;
    this.editingPartIndex = null;
  }

  confirmAddPart(): void {
    const name = this.newPartName.trim();
    if (!name) return;
    const part: PartEntry = {
      name,
      code: this.newPartCode.trim() || undefined,
      quantity: this.newPartQuantity ?? undefined,
      price: this.newPartPrice ?? undefined,
      currency: this._newPartCurrencyOrUndefined(),
    };
    if (this.editingPartIndex != null) {
      const old = this.parts[this.editingPartIndex];
      // An edited part is the user's now: a re-scan must not replace it.
      this.parts[this.editingPartIndex] = part;
      void this._nudgeForPartChange(part, old);
      this._prefetchPartRates();
      this.editingPartIndex = null;
      this.addingPart = false;
      return;
    }
    this.parts.push(part);
    // Adding a priced part nudges the total cost up — the user can still edit
    // Cost total by hand afterward, this is just a helpful starting point.
    void this._nudgeForPartChange(part, undefined);
    this._prefetchPartRates();
    this.addingPart = false;
  }

  private async _nudgeForPartChange(added: PartEntry | undefined, removed: PartEntry | undefined): Promise<void> {
    const [plus, minus] = await Promise.all([
      this._partNudge(added?.price, added?.currency),
      this._partNudge(removed?.price, removed?.currency),
    ]);
    this._nudgeCost(plus - minus);
  }

  removePart(index: number): void {
    // Mirrors the add / edit nudge: the part's price comes back off the total.
    const [removed] = this.parts.splice(index, 1);
    void this._nudgeForPartChange(undefined, removed);
  }

  /** Undefined when the part is in the record currency, so it keeps following it. */
  private _newPartCurrencyOrUndefined(): string | undefined {
    return this.newPartCurrency && this.newPartCurrency !== this.recordCurrency ? this.newPartCurrency : undefined;
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
    // A field is overwritable if the user hasn't touched it and it is empty / a default,
    // or if an earlier scan filled it.
    const put = (name: string, value: unknown, overwriteDefault = false): void => {
      const ctrl = this.form.get(name);
      if (!ctrl) return;
      const empty = ctrl.value == null || ctrl.value === '' || (name === 'cost' && Number(ctrl.value) === 0);
      if (this._scanFilled.has(name) || (!ctrl.dirty && (empty || overwriteDefault))) {
        patch[name] = value;
        this._scanFilled.add(name);
      }
    };

    this._scanType = r.service_type;
    if (r.service_category && r.service_category !== 'COMBUSTIBIL')
      put('service_category', r.service_category);
    if (r.title) put('description', r.title);
    if (r.notes) put('notes', r.notes);
    if (r.service_date) put('service_date', r.service_date, true);
    if (r.mileage != null) put('mileage', r.mileage);
    if (r.currency) put('currency', r.currency, true);

    const hasLabor =
      r.labor.length > 0 || r.documents.some(d => d.kind === 'service_report');
    if (hasLabor) put('is_diy', false, true);

    const supplierId = this._matchSupplierId(r.supplier_name);
    if (supplierId != null && !this.form.get('is_diy')?.value) put('supplier_id', supplierId);
    if (this.serviceNameEnabled && r.supplier_name && !this.form.get('is_diy')?.value)
      put('service_name', r.supplier_name);

    // Parts: replace the previously scanned ones, keep the manual ones.
    const manualParts = this.parts.filter(p => !p.scanned);
    const scannedParts: PartEntry[] = r.parts.map(p => ({
      name: p.name,
      code: p.code ?? undefined,
      quantity: p.quantity,
      price: p.total ?? undefined,
      currency: r.currency ? r.currency.trim().toUpperCase() : undefined,
      scanned: true,
    }));
    this.parts = [...scannedParts, ...manualParts];

    // Manual parts in another currency than the (post-scan) record currency don't count toward the total.
    const finalCurrency = String(patch['currency'] ?? this.form.get('currency')?.value ?? DEFAULT_CURRENCY).toUpperCase();
    const manualTotal = manualParts
      .filter(p => (p.currency?.toUpperCase() || finalCurrency) === finalCurrency)
      .reduce((sum, p) => sum + (p.price ?? 0), 0);
    put('cost', Math.round((r.totals.grand_total + manualTotal) * 100) / 100, true);

    this.form.patchValue(patch);

    // Tick the items the invoice shows were done (merged with already-ticked ones).
    if (r.plan_items?.length) {
      const merged = new Set<PlanItemKey>([
        ...this.selectedPlanItems,
        ...this._applicablePlanItems(r.plan_items),
      ]);
      this.selectedPlanItems = [...merged];
    }
    // Custom jobs: replace the previous scan's, keep typed ones.
    if (r.custom_items) {
      this.customItems = this.customItems.filter(c => !this._scanCustom.has(c.toLowerCase()));
      this._scanCustom.clear();
      r.custom_items.forEach(c => this._pushCustom(c, true));
    }
    this._autoSetType();

    // Labor (own field) and reset the nudge baseline to what's now shown, so a
    // later manual labor edit moves cost by exactly its delta. A hand-typed labor stays.
    if (!this.form.get('is_diy')?.value && (!this.laborCost || this._laborFromScan)) {
      this.laborCost = r.totals.labor > 0 ? r.totals.labor : 0;
      this._lastLaborCost = this.laborCost ?? 0;
      this._laborFromScan = this.laborCost != null;
    }
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
    if (!this.showReminder) {
      this.form.get('expiry_date')?.setValue(null);
      this.form.get('reminder_title')?.setValue('');
    }
    this._syncReminderValidators();
  }

  /** The reminder title is required only while the custom reminder is switched on. */
  private _syncReminderValidators(): void {
    const ctrl = this.form.get('reminder_title');
    ctrl?.setValidators(this.showReminder ? [Validators.required] : []);
    ctrl?.updateValueAndValidity({ emitEvent: false });
  }

  // ── Save ───────────────────────────────────────────────────────────

  /**
   * The category is no longer picked by the user: it's derived from the ticked items.
   * Nothing ticked: a new record gets the invoice scan's suggestion (held in the form
   * control) or OTHER; an edit keeps its existing category (not sent).
   */
  private _categoryForSave(formValue: ServiceCategory | null): ServiceCategory | undefined {
    if (this.isFuelEntry) return formValue ?? undefined;
    const items = this._applicablePlanItems(this.selectedPlanItems);
    if (items.length) return deriveCategoryFromItems(items);
    if (this.editRecord) return undefined;
    return formValue ?? 'OTHER';
  }

  /** True once Save was tapped with an invalid form — errors then show even on untouched fields. */
  submitAttempted = false;

  /** Whether a control's error should be visible (touched, or Save was tapped). */
  showError(name: string): boolean {
    const ctrl = this.form?.get(name);
    return !!ctrl && ctrl.invalid && (ctrl.touched || this.submitAttempted);
  }

  /** Transloco key of a control's first error. */
  errorKey(name: string): string {
    const errors = this.form?.get(name)?.errors ?? {};
    if (errors['required']) return 'maintenance.form.validation.required';
    if (errors['min']) return 'maintenance.form.validation.min';
    return 'maintenance.form.validation.invalid';
  }

  private _showValidationErrors(): void {
    this.submitAttempted = true;
    this.form.markAllAsTouched();
    // Wait for the error styling to render, then bring the first invalid field into view.
    setTimeout(() => {
      const first = this._elRef.nativeElement.querySelector<HTMLElement>('.amp-box--error');
      if (!first) return;
      first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      first.querySelector<HTMLElement>('input, textarea, select')?.focus({ preventScroll: true });
    });
  }

  save(): void {
    if (this.submitting || this.uploading) return;
    if (this.form.invalid) {
      this._showValidationErrors();
      return;
    }

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
      service_category: this._categoryForSave(raw.service_category),
      custom_items: raw.service_type === 'ALIMENTARE' ? [] : this.customItems,
      service_name:
        this.serviceNameEnabled && !this.isFuelEntry && !raw.is_diy && raw.service_name?.trim()
          ? raw.service_name.trim()
          : this.serviceNameEnabled ? null : undefined,
      plan_items:
        raw.service_type === 'ALIMENTARE'
          ? []
          : this._applicablePlanItems(this.selectedPlanItems),
      description: raw.description,
      cost: Number(raw.cost),
      currency: raw.currency || DEFAULT_CURRENCY,
      expiry_date: this.showReminder ? raw.expiry_date || undefined : undefined,
      reminder_title:
        this.showReminder && raw.expiry_date && raw.reminder_title?.trim()
          ? raw.reminder_title.trim()
          : null,
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
        currency: this._supportedCurrency(p.currency),
      })),
      parts_cost: !this.isFuelEntry && this.partsCostOverride != null ? this.partsCostOverride : null,
      // The override is always in the record currency (null for an exotic one the backend can't store = follows the record).
      parts_cost_currency:
        !this.isFuelEntry && this.partsCostOverride != null
          ? this._supportedCurrency(this.recordCurrency)
          : null,
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
    this._allowLeave = true;
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
