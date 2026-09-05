import { AsyncPipe, DecimalPipe, NgClass } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaintenanceRecordDto } from '@hau/autogenapi/models';
import { MaintenanceFacade } from '@hau/features/maintenance/state/maintenance.facade';
// eslint-disable-next-line no-restricted-imports -- known cross-feature coupling, tracked in docs/architecture-audit.md
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { formatDate, formatMileage } from '@hau/shared/utils/formatting.util';
import { CATEGORY_CONFIG, ServiceCategoryConfig } from '@hau/shared/config/maintenance-category.config';
import { serviceTypeConfig } from '@hau/features/maintenance/service-type.config';
import { ContextFile, UploadService } from '@hau/core/upload/upload.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { AddMaintenancePanelComponent } from '@hau/features/maintenance/add-maintenance-panel/add-maintenance-panel.component';
import { FUEL_PUMP_ICON_NAME, FUEL_PUMP_ICON_SRC } from '@hau/shared/icons/fuel-pump.icon';
import { AlertController, IonContent, IonIcon, IonSpinner, NavController, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  pencilOutline, trashOutline, calendarOutline, speedometerOutline,
  cashOutline, buildOutline, personOutline, documentTextOutline,
  waterOutline, discOutline, colorFilterOutline, constructOutline,
  shieldCheckmarkOutline, batteryChargingOutline, listOutline, flashOutline,
  carOutline, checkmarkCircleOutline, trendingDownOutline,
} from 'ionicons/icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { combineLatest, take } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-maintenance-record-detail',
  templateUrl: 'maintenance-record-detail.component.html',
  styleUrls: ['./maintenance-record-detail.component.scss'],
  imports: [IonContent, IonIcon, IonSpinner, DecimalPipe, NgClass, AsyncPipe, TranslocoPipe, AddMaintenancePanelComponent],
})
export class MaintenanceRecordDetailComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  record: MaintenanceRecordDto | null = null;
  loading = true;
  deleting = false;
  editing = signal(false);

  readonly submitting$ = this._facade.submitting$;

  attachments: ContextFile[] = [];
  attachmentUrls: Record<number, string> = {};

  @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;

  private _viewActive = false;

  protected readonly formatDate = formatDate;
  protected readonly formatMileage = formatMileage;
  protected readonly serviceTypeConfig = serviceTypeConfig;

  private _recordId: number | null = null;
  private _attachmentsLoadedFor: number | null = null;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _navCtrl: NavController,
    private readonly _facade: MaintenanceFacade,
    private readonly _alertCtrl: AlertController,
    private readonly _transloco: TranslocoService,
    private readonly _upload: UploadService,
    private readonly _headerActions: HeaderActionsService,
  ) {
    addIcons({
      pencilOutline, trashOutline, calendarOutline, speedometerOutline,
      cashOutline, buildOutline, personOutline, documentTextOutline,
      waterOutline, discOutline, colorFilterOutline, constructOutline,
      shieldCheckmarkOutline, batteryChargingOutline, listOutline, flashOutline,
      carOutline, checkmarkCircleOutline, trendingDownOutline,
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
          }
        }
        this._pushHeaderTitle();
      });

    this._facade.loadAll();
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
    this._upload.getFilesForContext('maintenance', recordId)
      .pipe(untilDestroyed(this))
      .subscribe(files => {
        this.attachments = files;
        for (const file of files) {
          this._upload.getReadUrl(file.fileId)
            .pipe(untilDestroyed(this))
            .subscribe(res => { this.attachmentUrls[file.fileId] = res.readUrl; });
        }
      });
  }

  getCategoryConfig(rec: MaintenanceRecordDto): ServiceCategoryConfig {
    const config = CATEGORY_CONFIG.find(c => c.value === rec.service_category) ?? CATEGORY_CONFIG[CATEGORY_CONFIG.length - 1];
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
      header: this._transloco.translate('maintenance.detail.deleteAlert.header'),
      message: this._transloco.translate('maintenance.detail.deleteAlert.message'),
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
    this._facade.deleteRecord(this.record.id).pipe(take(1)).subscribe({
      next: () => {
        void this._navCtrl.navigateBack(
          `${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.istoric.path}`,
        );
      },
      error: () => { this.deleting = false; },
    });
  }
}
