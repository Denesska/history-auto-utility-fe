import { LocalDatePipe } from '@hau/shared/pipes/local-date.pipe';
import { NavigationHistoryService } from '@hau/core/navigation/navigation-history.service';
import { AsyncPipe, DecimalPipe, NgClass } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { MaintenanceRecordDto } from '@hau/autogenapi/models';
import { MaintenanceFacade } from '@hau/features/maintenance/state/maintenance.facade';
import { CARS_ROUTES } from '@hau/features/cars';
import { formatDate, formatMileage } from '@hau/shared/utils/formatting.util';
import {
  CATEGORY_CONFIG,
  ServiceCategoryConfig,
} from '@hau/shared/config/maintenance-category.config';
import { serviceTypeConfig } from '@hau/features/maintenance/service-type.config';
import { ContextFile, UploadService } from '@hau/core/upload/upload.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { AddMaintenancePanelComponent } from '@hau/features/maintenance/add-maintenance-panel/add-maintenance-panel.component';
import {
  FUEL_PUMP_ICON_NAME,
  FUEL_PUMP_ICON_SRC,
} from '@hau/shared/icons/fuel-pump.icon';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { FeatureService } from '@hau/core/features/feature.service';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { SupplierApiService, SupplierDto, WithSupplierId } from '@hau/features/supplier';
import {
  AlertController,
  IonContent,
  IonIcon,
  NavController,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  createOutline,
  trashOutline,
  calendarOutline,
  speedometerOutline,
  cashOutline,
  buildOutline,
  personOutline,
  documentTextOutline,
  waterOutline,
  discOutline,
  colorFilterOutline,
  constructOutline,
  shieldCheckmarkOutline,
  batteryChargingOutline,
  listOutline,
  flashOutline,
  carOutline,
  checkmarkCircleOutline,
  trendingDownOutline,
  receiptOutline,
  downloadOutline,
  imageOutline,
} from 'ionicons/icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { combineLatest, EMPTY, switchMap, take } from 'rxjs';

// Fields added to MaintenanceRecord for the invoice scan, layered on locally (same as
// the add/edit panel) until the generated client is regenerated.
type WithInvoiceFields<T> = T & {
  labor_cost?: number | null;
  notes?: string | null;
};

@UntilDestroy()
@Component({
  selector: 'app-maintenance-record-detail',
  templateUrl: 'maintenance-record-detail.component.html',
  styleUrls: ['./maintenance-record-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    LoaderComponent,
    IonContent,
    IonIcon,
    DecimalPipe,
    LocalDatePipe,
    NgClass,
    AsyncPipe,
    TranslocoPipe,
    AddMaintenancePanelComponent,
  ],
})
export class MaintenanceRecordDetailComponent
  implements OnInit, ViewWillEnter, ViewWillLeave
{
  record: MaintenanceRecordDto | null = null;
  loading = true;
  deleting = false;
  editing = signal(false);

  readonly submitting$ = this._facade.submitting$;

  attachments: ContextFile[] = [];
  attachmentUrls: Record<number, string> = {};
  invoices: ContextFile[] = [];
  suppliers: SupplierDto[] = [];
  private readonly _sessionContext = inject(SessionContextService);
  private readonly _featureService = inject(FeatureService);

  @ViewChild('headerActionsTpl')
  private _headerActionsTpl!: TemplateRef<unknown>;

  private _viewActive = false;

  protected readonly formatDate = formatDate;
  protected readonly formatMileage = formatMileage;
  protected readonly serviceTypeConfig = serviceTypeConfig;

  private _recordId: number | null = null;
  private _attachmentsLoadedFor: number | null = null;

  private readonly _navHistory = inject(NavigationHistoryService);

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _navCtrl: NavController,
    private readonly _facade: MaintenanceFacade,
    private readonly _alertCtrl: AlertController,
    private readonly _transloco: TranslocoService,
    private readonly _upload: UploadService,
    private readonly _headerActions: HeaderActionsService,
    private readonly _supplierApi: SupplierApiService,
  ) {
    addIcons({
      createOutline,
      trashOutline,
      calendarOutline,
      speedometerOutline,
      cashOutline,
      buildOutline,
      personOutline,
      documentTextOutline,
      waterOutline,
      discOutline,
      colorFilterOutline,
      constructOutline,
      shieldCheckmarkOutline,
      batteryChargingOutline,
      listOutline,
      flashOutline,
      carOutline,
      checkmarkCircleOutline,
      trendingDownOutline,
      receiptOutline,
      downloadOutline,
      imageOutline,
    });
    // Custom icon (Ionicons has no gas-pump glyph) — see fuel-pump.icon.ts.
    addIcons({ [FUEL_PUMP_ICON_NAME]: FUEL_PUMP_ICON_SRC });
  }

  ngOnInit(): void {
    const recordId = this._route.snapshot.paramMap.get('recordId');
    if (!recordId) return;
    this._recordId = Number(recordId);

    combineLatest([this._facade.records$, this._facade.loading$])
      .pipe(untilDestroyed(this))
      .subscribe(([records, loading]) => {
        this.loading = loading;
        const rec = records.find(r => r.id === this._recordId);
        if (rec) {
          this.record = rec;
          if (this._attachmentsLoadedFor !== rec.id) {
            this._attachmentsLoadedFor = rec.id;
            this._loadAttachments(rec.id);
            this._loadInvoices(rec.id);
          }
        }
        this._pushHeaderTitle();
      });

    this._facade.loadAll();

    // Suppliers are business-only: in personal there is no supplier name to show and GET /supplier would 403.
    if (this._sessionContext.isBusiness()) {
      this._featureService
        .isEnabled$('supplier')
        .pipe(
          switchMap(on => (on ? this._supplierApi.getAll() : EMPTY)),
          untilDestroyed(this),
        )
        .subscribe({
          next: suppliers => {
            this.suppliers = suppliers;
          },
          error: () => {},
        });
    }
  }

  get laborCost(): number {
    return (this.record as WithInvoiceFields<MaintenanceRecordDto> | null)?.labor_cost ?? 0;
  }

  get notes(): string {
    return (this.record as WithInvoiceFields<MaintenanceRecordDto> | null)?.notes?.trim() ?? '';
  }

  private get _partsCostOverride(): number | null {
    return (this.record as { parts_cost?: number | null } | null)?.parts_cost ?? null;
  }

  private _partCurrency(p: { currency?: string | null }): string {
    return (p.currency || this.record?.currency || 'RON').toUpperCase();
  }

  /** Currency a part's price is shown in: its own, else the record's. */
  partCurrency(p: { currency?: string | null }): string {
    return this._partCurrency(p);
  }

  /**
   * Parts subtotal lines: the manual override (always in the record currency) when set, otherwise
   * the per-currency sums (record currency first) — no conversion on this read-only view.
   */
  get partsSubtotals(): { amount: number; currency: string }[] {
    const recCur = (this.record?.currency || 'RON').toUpperCase();
    if (this._partsCostOverride != null) return [{ amount: this._partsCostOverride, currency: recCur }];
    const byCurrency = new Map<string, number>();
    for (const p of this.record?.parts ?? []) {
      if (!p.price) continue;
      const cur = this._partCurrency(p);
      byCurrency.set(cur, (byCurrency.get(cur) ?? 0) + p.price);
    }
    return [...byCurrency.entries()]
      .map(([currency, amount]) => ({ amount, currency }))
      .sort((a, b) => Number(b.currency === recCur) - Number(a.currency === recCur));
  }

  /** True when the manual parts total no longer matches the per-part prices, so those prices are hidden. */
  get partsOverridden(): boolean {
    if (this._partsCostOverride == null) return false;
    const recCur = (this.record?.currency || 'RON').toUpperCase();
    const parts = (this.record?.parts ?? []).filter(p => p.price);
    // Mixed currencies can't be compared without a rate: treat the override as authoritative.
    if (parts.some(p => this._partCurrency(p) !== recCur)) return true;
    const sum = parts.reduce((acc, p) => acc + (p.price ?? 0), 0);
    return Math.abs(sum - this._partsCostOverride) > 0.005;
  }

  get supplierName(): string | null {
    const supplierId = this.record
      ? (this.record as WithSupplierId<MaintenanceRecordDto>).supplier_id
      : null;
    return supplierId
      ? (this.suppliers.find(s => s.id === supplierId)?.name ?? null)
      : null;
  }

  // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
  // fire on back-navigation — these Ionic lifecycle hooks do, regardless of
  // caching, so the header actions never linger onto another page.
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

  private _pushHeaderTitle(): void {
    if (!this._viewActive) return;
    this._headerActions.setTitle(this.record?.description ?? null);
  }

  private _loadAttachments(recordId: number): void {
    this._upload
      .getFilesForContext('maintenance', recordId)
      .pipe(untilDestroyed(this))
      .subscribe(files => {
        this.attachments = files;
        for (const file of files) {
          this._upload
            .getReadUrl(file.fileId)
            .pipe(untilDestroyed(this))
            .subscribe(res => {
              this.attachmentUrls[file.fileId] = res.readUrl;
            });
        }
      });
  }

  private _loadInvoices(recordId: number): void {
    this._upload
      .getFilesForContext('maintenance_invoice', recordId)
      .pipe(untilDestroyed(this))
      .subscribe(files => {
        this.invoices = files;
      });
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

  getCategoryConfig(rec: MaintenanceRecordDto): ServiceCategoryConfig {
    const config =
      CATEGORY_CONFIG.find(c => c.value === rec.service_category) ??
      CATEGORY_CONFIG[CATEGORY_CONFIG.length - 1];
    // A charging session (energy_kwh set) reads better with a plug/bolt icon than the
    // generic fuel-pump one COMBUSTIBIL otherwise shows — same category, different glyph.
    if (rec.service_category === 'COMBUSTIBIL' && rec.energy_kwh != null) {
      return { ...config, icon: 'flash-outline' };
    }
    return config;
  }

  async confirmDelete(): Promise<void> {
    if (!this.record) return;
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate(
        'maintenance.detail.deleteAlert.header',
      ),
      message: this._transloco.translate(
        'maintenance.detail.deleteAlert.message',
      ),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.delete'),
          role: 'destructive',
          handler: () => this._deleteRecord(),
        },
      ],
    });
    await alert.present();
  }

  private _deleteRecord(): void {
    if (!this.record) return;
    this.deleting = true;
    const carId = this.record.car_id;
    this._facade
      .deleteRecord(this.record.id)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this._navHistory.backAfterDelete(undefined, {
            fallback: `${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.istoric.path}`,
          });
        },
        error: () => {
          this.deleting = false;
        },
      });
  }
}
