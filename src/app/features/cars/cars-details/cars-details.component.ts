import { AsyncPipe, DecimalPipe } from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { CarAccessRole } from '@hau/autogenapi/models/car-access-dto';
import { CarNoteService, BlogService } from '@hau/autogenapi/services';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { getCarSubtitle } from '@hau/features/cars/cars.utils';
import { daysAgo, daysUntil } from '@hau/shared/utils/date-math.util';
import { formatDate, formatMileage } from '@hau/shared/utils/formatting.util';
import { getDocExpiry } from '@hau/shared/utils/document-status.util';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { RemoveCarPanelComponent } from '@hau/features/cars/remove-car-panel/remove-car-panel.component';
import { CarListState } from '@hau/features/cars/state/car-list/car-list.state';
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
import { MAINTENANCE_ROUTES } from '@hau/features/maintenance/maintenance.routes.const';
import { PhotoCarouselComponent, PhotoItem } from '@hau/shared/component/photo-carousel/photo-carousel.component';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import {
  applyManualOrder,
  buildDeadlineItems,
  DeadlineItem,
} from '@hau/shared/utils/deadline-items.util';
import { DeadlineOrderService } from '@hau/core/deadline-order.service';
import { CarMaintenanceSettingsService } from '@hau/core/car-maintenance-settings.service';
import { AlertController, IonContent, IonIcon, IonicSafeString, NavController } from '@ionic/angular/standalone';
import { Store } from '@ngxs/store';
import { combineLatest, map, take } from 'rxjs';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { addIcons } from 'ionicons';
import {
  pencilOutline,
  chevronDown,
  chevronUp,
  reorderThreeOutline,
  refreshOutline,
  addCircleOutline,
  cloudUploadOutline,
  carOutline,
  chevronForward,
  ellipsisHorizontal,
  shareSocialOutline,
  exitOutline,
  logOutOutline,
  checkmarkCircleOutline,
  closeOutline,
} from 'ionicons/icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

export interface ExpiryInfo {
  labelKey: string;
  date: string;
  days: number;
  warning: boolean;
}

export interface MileageUpdateInfo {
  key: string;
  params?: Record<string, unknown>;
}

const DOC_TYPE_LABEL_KEYS: Record<string, string> = {
  RCA: 'car.documents.insurance.label',
  ITP: 'car.documents.technicalInspection.label',
  ROV: 'car.documents.vignette.label',
};

const MILEAGE_JUMP_WARNING_KM = 10000;

@UntilDestroy()
@Component({
  selector: 'app-cars-details',
  templateUrl: 'cars-details.component.html',
  styleUrls: ['./cars-details.component.scss'],
  imports: [
    AsyncPipe, DecimalPipe, IonContent, IonIcon, RemoveCarPanelComponent, PhotoCarouselComponent, TranslocoPipe,
    CdkDropList, CdkDrag, CdkDragHandle, CdkDragPlaceholder,
  ],
})
export class CarsDetailsComponent implements OnInit {
  readonly currentCar$ = this._carDetailFacade.currentCar$;
  readonly maintenanceRecords$ = this._carDetailFacade.maintenanceRecords$;
  readonly carDocuments$ = this._carDetailFacade.carDocuments$;
  readonly maintenanceIntervals$ = this._bootstrapFacade.maintenanceIntervals$;
  readonly carMaintenanceSettings$ = this._bootstrapFacade.carMaintenanceSettings$;

  removePanelOpen = false;
  moreMenuOpen = false;

  soldDetailsExpanded = false;
  overviewExpanded = false;

  notesCount: number | null = null;
  jurnalCount: number | null = null;
  readonly currentYear = new Date().getFullYear();

  /** Documents + maintenance in one list, already in the order the user sees them. */
  deadlines: DeadlineItem[] = [];
  deadlinesExpanded = false;
  hasManualOrder = false;

  /**
   * Armed by a long-press on any card (not a plain tap — see onCardPointerDown),
   * so a scroll gesture that happens to start on a card never accidentally drags
   * it. While active: drag handles (left side) and dismiss (X) badges show on
   * every card, and the section wiggles to make that obvious.
   */
  reorderModeActive = false;

  private _carId: number | null = null;
  private _deadlineOrder: string[] = [];
  /** Document-kind deadline keys the user dismissed (maintenance uses `tracked` instead). */
  private _dismissedKeys: string[] = [];
  private _pressStart: { x: number; y: number } | null = null;
  private _longPressTimer: ReturnType<typeof setTimeout> | null = null;
  private static readonly LONG_PRESS_MS = 500;
  private static readonly LONG_PRESS_MOVE_TOLERANCE_PX = 10;

  readonly effectiveRole$ = combineLatest([
    this.currentCar$,
    this._store.select(CarListState.sharedCarList),
  ]).pipe(
    map(([car, sharedList]) => {
      if (!car) return 'OWNER' as CarAccessRole;
      const entry = sharedList.find(e => e.car.id === car.id);
      return entry ? entry.role : ('OWNER' as CarAccessRole);
    }),
  );

  protected readonly formatDate = formatDate;
  protected readonly formatMileage = formatMileage;
  protected readonly daysUntil = daysUntil;
  protected readonly getDocExpiry = getDocExpiry;
  protected readonly getCarSubtitle = getCarSubtitle;

  constructor(
    private readonly _carDetailFacade: CarDetailsFacade,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _navCtrl: NavController,
    private readonly _store: Store,
    private readonly _alertCtrl: AlertController,
    private readonly _carNoteService: CarNoteService,
    private readonly _blogService: BlogService,
    private readonly _transloco: TranslocoService,
    private readonly _bootstrapFacade: BootstrapFacade,
    private readonly _deadlineOrderService: DeadlineOrderService,
    private readonly _maintenanceSettingsService: CarMaintenanceSettingsService,
  ) {
    addIcons({
      pencilOutline, addCircleOutline, cloudUploadOutline, carOutline,
      chevronForward, ellipsisHorizontal, shareSocialOutline,
      exitOutline, logOutOutline, checkmarkCircleOutline,
      chevronDown, chevronUp, reorderThreeOutline, refreshOutline,
      closeOutline,
    });
  }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
      const carId = params['id'];
      this._carId = Number(carId);
      this._carDetailFacade.loadCurrentCar(carId);
      this._carDetailFacade.loadMaintenanceRecords(carId);
      this._carDetailFacade.loadCarDocuments(carId);
      this._loadNotesCount(carId);
      this._loadJurnalCount(carId);
      this._loadDeadlineOrder(this._carId);
      this._loadDismissedKeys(this._carId);
    });

    // Deadlines are derived, never stored: any change to the car's mileage, its
    // documents or its service history re-runs the whole list.
    combineLatest([
      this.currentCar$,
      this.carDocuments$,
      this.maintenanceRecords$,
      this.maintenanceIntervals$,
      this.carMaintenanceSettings$,
    ]).pipe(untilDestroyed(this)).subscribe(([car, docs, records, intervals, settingsByCarId]) => {
      const settings = car ? (settingsByCarId[car.id] ?? []) : [];
      this.deadlines = car
        ? this._applyDismissed(applyManualOrder(buildDeadlineItems(car, docs, records ?? [], intervals ?? [], 'normal', settings), this._deadlineOrder))
        : [];
    });
  }

  private _loadDeadlineOrder(carId: number): void {
    this._deadlineOrderService.getOrder(carId).pipe(take(1)).subscribe(order => {
      this._deadlineOrder = order;
      this.hasManualOrder = order.length > 0;
      this.deadlines = applyManualOrder(this.deadlines, order);
    });
  }

  private _loadDismissedKeys(carId: number): void {
    this._deadlineOrderService.getDismissed(carId).pipe(take(1)).subscribe(dismissed => {
      this._dismissedKeys = dismissed;
      this.deadlines = this._applyDismissed(this.deadlines);
    });
  }

  // Maintenance-kind dismissal goes through CarMaintenanceSetting.tracked instead
  // (it's already filtered out upstream, in buildPlanItems) — this only needs to
  // hide document-kind items, the one case with no other mechanism for it.
  private _applyDismissed(items: DeadlineItem[]): DeadlineItem[] {
    return items.filter(item => !(item.kind === 'document' && this._dismissedKeys.includes(item.key)));
  }

  private _loadNotesCount(carId: string): void {
    this._carNoteService.carNoteControllerGetCarNotesByCarId({ carId }).pipe(take(1)).subscribe({
      next: notes => { this.notesCount = notes.length; },
      error: () => { this.notesCount = null; },
    });
  }

  private _loadJurnalCount(carId: string): void {
    this._blogService.getEntries({ car_id: Number(carId) }).pipe(take(1)).subscribe({
      next: entries => { this.jurnalCount = entries.length; },
      error: () => { this.jurnalCount = null; },
    });
  }

  navigateToGarage(): void {
    this._navCtrl.navigateBack(HAU_ROUTES.cars.fullPath, { animated: false });
  }

  navigateToEdit(car: CarDto): void {
    this.moreMenuOpen = false;
    this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.edit.path}`,
      { animated: false },
    );
  }

  navigateToCarDocuments(car: CarDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.documents.path}`,
    );
  }

  navigateToJurnal(): void {
    void this._navCtrl.navigateForward(HAU_ROUTES.blog.fullPath);
  }

  navigateToReports(car: CarDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.rapoarte.path}`,
    );
  }

  navigateToPlan(car: CarDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.plan.path}`,
    );
  }

  navigateToMaintenanceHistory(car: CarDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.istoric.path}`,
    );
  }

  navigateToNotes(car: CarDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.notite.path}`,
    );
  }

  navigateToSharing(car: CarDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.partajare.path}`,
    );
  }

  getExpiringDocsCount(docs: DocumentDto[]): number {
    return docs.filter(d => {
      const days = daysUntil(d.expiry_date);
      return days !== null && days <= 30;
    }).length;
  }

  navigateToAddMaintenance(car: CarDto): void {
    this.moreMenuOpen = false;
    void this._navCtrl.navigateForward(MAINTENANCE_ROUTES.add.fullPath, {
      queryParams: { carId: car.id },
    });
  }

  navigateToUploadDocument(car: CarDto): void {
    this.moreMenuOpen = false;
    void this._navCtrl.navigateForward(DOCUMENTS_ROUTES.add.fullPath, {
      queryParams: { carId: car.id },
    });
  }

  openRemovePanel(): void {
    this.moreMenuOpen = false;
    this.removePanelOpen = true;
  }

  onMarkAsSold(car: CarDto): void {
    this.removePanelOpen = false;
    this._carDetailFacade.markAsSold(String(car.id));
  }

  onRestoreCar(car: CarDto): void {
    this.removePanelOpen = false;
    this._carDetailFacade.restoreCar(String(car.id));
  }

  async onDeletePermanently(car: CarDto): Promise<void> {
    this.removePanelOpen = false;
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('cars.details.deleteAlert.header'),
      message: new IonicSafeString(this._transloco.translate('cars.details.deleteAlert.message', { name: `${car.make} ${car.model}` })),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.delete'),
          role: 'destructive',
          handler: () => this._carDetailFacade.deleteCar(String(car.id)),
        },
      ],
    });
    await alert.present();
  }

  getSortedPhotos(car: CarDto): PhotoItem[] {
    if (!car.photos?.length) return [];
    return [...car.photos].sort((a, b) => (b.is_default ? 1 : 0) - (a.is_default ? 1 : 0))
      .map(p => ({ url: p.url, isDefault: p.is_default }));
  }

  getNextExpiry(docs: DocumentDto[] | null | undefined): ExpiryInfo | null {
    const candidates = (['RCA', 'ITP', 'ROV'] as const)
      .map(type => ({ type, date: getDocExpiry(docs, type) }))
      .filter((c): c is { type: 'RCA' | 'ITP' | 'ROV'; date: string } => c.date != null)
      .map(c => ({ type: c.type, date: c.date, days: daysUntil(c.date) ?? 9999 }))
      .filter(c => c.days > 0)
      .sort((a, b) => a.days - b.days);

    if (!candidates.length) return null;
    const soonest = candidates[0];
    return {
      labelKey: DOC_TYPE_LABEL_KEYS[soonest.type],
      date: soonest.date,
      days: soonest.days,
      warning: soonest.days < 60,
    };
  }

  getFuelLabel(fuel: CarDto['fuel_type']): string {
    const map: Record<string, string> = {
      PETROL: 'Petrol', DIESEL: 'Diesel', HYBRID: 'Hybrid',
      PLUGIN_HYBRID: 'Plug-in Hybrid', ELECTRIC: 'Electric', LPG: 'LPG',
    };
    return fuel ? (map[fuel] ?? fuel) : '—';
  }

  getTransmissionLabel(t: CarDto['transmission']): string {
    const map: Record<string, string> = {
      MANUAL: 'Manual', AUTOMATIC: 'Automatic', SEMI_AUTOMATIC: 'Semi-automatic',
    };
    return t ? (map[t] ?? t) : '—';
  }

  // The dark km card tracks *actual* mileage (updated over time from the hub),
  // kept separate from `current_mileage`, which is the initial/purchase-time
  // value set once in the car form. Falls back to the initial value until the
  // owner records a real update.
  // ── Stare & scadențe ───────────────────────────────────────────────
  // Collapsed shows just the first 3 items (whatever order they're already
  // in — manual order or by urgency); expanded shows everything and is the
  // only place rows can be dragged, since the collapsed list is a truncated
  // subset and its indices don't map onto the full order.
  //
  // With 3 items or fewer there's nothing worth folding away — collapsing a
  // 1-item list just adds an extra tap to see the one thing that's there — so
  // below that threshold the section always renders as if already expanded,
  // and the toggle button doesn't show at all. `deadlinesExpanded` still
  // tracks the user's own toggle for when there ARE enough items for it to
  // matter.

  private static readonly DEADLINES_COLLAPSE_THRESHOLD = 3;

  /** True once collapsing would actually hide something worth revealing. */
  get showDeadlinesToggle(): boolean {
    return this.deadlines.length > CarsDetailsComponent.DEADLINES_COLLAPSE_THRESHOLD;
  }

  /** Whether the section is rendering its full, draggable list right now. */
  get isDeadlinesExpanded(): boolean {
    return this.deadlinesExpanded || !this.showDeadlinesToggle;
  }

  /** What the section renders right now. */
  get visibleDeadlines(): DeadlineItem[] {
    return this.isDeadlinesExpanded
      ? this.deadlines
      : this.deadlines.slice(0, CarsDetailsComponent.DEADLINES_COLLAPSE_THRESHOLD);
  }

  toggleDeadlines(): void {
    this.deadlinesExpanded = !this.deadlinesExpanded;
  }

  onDeadlineDrop(event: CdkDragDrop<DeadlineItem[]>): void {
    if (event.previousIndex === event.currentIndex) return;

    const reordered = [...this.deadlines];
    moveItemInArray(reordered, event.previousIndex, event.currentIndex);

    this.deadlines = reordered;
    this._deadlineOrder = reordered.map(item => item.key);
    this.hasManualOrder = true;

    if (this._carId != null) this._deadlineOrderService.saveOrder(this._carId, this._deadlineOrder);
  }

  resetDeadlineOrder(): void {
    this._deadlineOrder = [];
    this.hasManualOrder = false;
    this.deadlines = applyManualOrder(this.deadlines, null);

    if (this._carId != null) this._deadlineOrderService.clearOrder(this._carId);
  }

  // ── Long-press-to-reorder ────────────────────────────────────────────
  // A plain tap/scroll must never arm reorder mode — only a press that's held
  // in place for LONG_PRESS_MS does. onCardPointerMove cancels the pending
  // timer the moment the finger travels past the tolerance, which is exactly
  // what a scroll gesture does within the first few pixels.

  onCardPointerDown(event: PointerEvent): void {
    if (!this.isDeadlinesExpanded || this.reorderModeActive) return;
    this._pressStart = { x: event.clientX, y: event.clientY };
    this._longPressTimer = setTimeout(() => this._enterReorderMode(), CarsDetailsComponent.LONG_PRESS_MS);
  }

  onCardPointerMove(event: PointerEvent): void {
    if (!this._pressStart) return;
    const dx = Math.abs(event.clientX - this._pressStart.x);
    const dy = Math.abs(event.clientY - this._pressStart.y);
    if (dx > CarsDetailsComponent.LONG_PRESS_MOVE_TOLERANCE_PX || dy > CarsDetailsComponent.LONG_PRESS_MOVE_TOLERANCE_PX) {
      this._cancelLongPress();
    }
  }

  onCardPointerUp(): void {
    this._cancelLongPress();
  }

  onCardPointerCancel(): void {
    this._cancelLongPress();
  }

  exitReorderMode(): void {
    this.reorderModeActive = false;
  }

  private _cancelLongPress(): void {
    if (this._longPressTimer) {
      clearTimeout(this._longPressTimer);
      this._longPressTimer = null;
    }
    this._pressStart = null;
  }

  private async _enterReorderMode(): Promise<void> {
    this._pressStart = null;
    this._longPressTimer = null;
    this.reorderModeActive = true;
    try {
      await Haptics.impact({ style: ImpactStyle.Medium });
    } catch {
      // No native haptics support (web/PWA without the plugin) — the wiggle
      // animation alone still communicates that reorder mode is active.
    }
  }

  // ── Dismiss (X) ──────────────────────────────────────────────────────
  // Maintenance items are "dismissed" by turning off tracking (CarMaintenanceSetting),
  // which already has its own undo UI (⚙ Setări mentenanță); document items have no
  // such setting, so they go through the separate dismissed-keys list instead.

  async confirmDismiss(item: DeadlineItem): Promise<void> {
    const label = this._transloco.translate(item.labelKey);
    const isMaintenance = item.kind === 'maintenance';

    const alert = await this._alertCtrl.create({
      header: this._transloco.translate(
        isMaintenance
          ? 'cars.details.hub.deadlines.confirmDismissMaintenanceTitle'
          : 'cars.details.hub.deadlines.confirmDismissDocumentTitle',
      ),
      message: this._transloco.translate(
        isMaintenance
          ? 'cars.details.hub.deadlines.confirmDismissMaintenanceMessage'
          : 'cars.details.hub.deadlines.confirmDismissDocumentMessage',
        { label },
      ),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        { text: this._transloco.translate('common.confirm'), handler: () => this._dismissItem(item) },
      ],
    });
    await alert.present();
  }

  private _dismissItem(item: DeadlineItem): void {
    if (this._carId == null) return;
    const carId = this._carId;

    this.deadlines = this.deadlines.filter(d => d.key !== item.key);

    if (item.kind === 'maintenance' && item.planItem) {
      const category = item.planItem.category;
      this._maintenanceSettingsService.updateSetting(carId, category, { tracked: false }).pipe(take(1)).subscribe(updated => {
        this._bootstrapFacade.carMaintenanceSettings$.pipe(take(1)).subscribe(byCarId => {
          const current = byCarId[carId] ?? [];
          const merged = current.some(r => r.category === category)
            ? current.map(r => (r.category === category ? updated : r))
            : [...current, updated];
          this._bootstrapFacade.patchCarMaintenanceSettings(carId, merged);
        });
      });
    } else {
      this._dismissedKeys = [...this._dismissedKeys, item.key];
      this._deadlineOrderService.saveDismissed(carId, this._dismissedKeys);
    }
  }

  /** The big right-hand number: days or km, positive until it goes overdue. */
  getDeadlineRemaining(item: DeadlineItem): { key: string; params: Record<string, unknown>; isOverdue: boolean } {
    if (item.trackingUnit === 'km' && item.kmRemaining != null) {
      const isOverdue = item.kmRemaining < 0;
      return {
        key: isOverdue ? 'cars.details.hub.upcoming.overdueKm' : 'cars.details.hub.upcoming.remainingKm',
        params: { km: Math.abs(item.kmRemaining).toLocaleString() },
        isOverdue,
      };
    }

    const days = item.daysLeft ?? 0;
    const isOverdue = days < 0;
    return {
      key: isOverdue ? 'cars.details.hub.upcoming.overdueDays' : 'cars.details.hub.upcoming.remainingDays',
      params: { count: Math.abs(days) },
      isOverdue,
    };
  }

  /** The small line under the bar — where the item comes from, in its own terms. */
  getDeadlineDetail(item: DeadlineItem): { key: string; params: Record<string, unknown> } {
    if (item.kind === 'document') {
      return item.fromDate
        ? { key: 'cars.details.hub.deadlines.validBetween', params: { from: formatDate(item.fromDate), to: formatDate(item.dueDate) } }
        : { key: 'cars.details.hub.deadlines.validUntil', params: { date: formatDate(item.dueDate) } };
    }

    if (item.trackingUnit === 'km' && item.lastMileage != null) {
      return {
        key: 'cars.details.hub.deadlines.lastAtMileage',
        params: { date: formatDate(item.fromDate), km: formatMileage(item.lastMileage) },
      };
    }

    return { key: 'cars.details.hub.upcoming.lastDone', params: { date: formatDate(item.fromDate) } };
  }

  /** Documents get a "renew" / "schedule" shortcut; maintenance gets "log it". */
  onDeadlineAction(item: DeadlineItem, car: CarDto): void {
    if (item.kind === 'document') this.navigateToCarDocuments(car);
    else this.navigateToAddMaintenance(car);
  }

  getDisplayMileage(car: CarDto): number | null {
    return car.actual_mileage ?? car.current_mileage ?? null;
  }

  getMileageUpdateInfo(car: CarDto): MileageUpdateInfo {
    const days = daysAgo(car.actual_mileage_updated_at);
    if (days === null) return { key: 'cars.details.hub.km.neverUpdated' };
    if (days <= 0) return { key: 'cars.details.hub.km.updatedToday' };
    if (days === 1) return { key: 'cars.details.hub.km.updatedYesterday' };
    return { key: 'cars.details.hub.km.updatedDaysAgo', params: { count: days } };
  }

  async openUpdateMileageDialog(car: CarDto): Promise<void> {
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('cars.details.hub.km.dialogTitle'),
      inputs: [{
        name: 'mileage',
        type: 'number',
        placeholder: this._transloco.translate('cars.details.hub.km.dialogPlaceholder'),
        value: this.getDisplayMileage(car),
        min: 0,
      }],
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.save'),
          handler: (data: { mileage: string }) => {
            const newMileage = Number(data.mileage);
            if (!Number.isFinite(newMileage) || newMileage < 0) return false;
            this._handleMileageUpdate(car, newMileage);
            return true;
          },
        },
      ],
    });
    await alert.present();
  }

  private _handleMileageUpdate(car: CarDto, newMileage: number): void {
    const reference = this.getDisplayMileage(car) ?? 0;
    const delta = newMileage - reference;
    if (delta < 0) {
      void this._confirmMileageAnomaly(car, newMileage, 'cars.details.hub.km.warnDecrease');
      return;
    }
    if (delta > MILEAGE_JUMP_WARNING_KM) {
      void this._confirmMileageAnomaly(car, newMileage, 'cars.details.hub.km.warnJump');
      return;
    }
    this._saveMileage(car, newMileage);
  }

  private async _confirmMileageAnomaly(car: CarDto, newMileage: number, messageKey: string): Promise<void> {
    const alert = await this._alertCtrl.create({
      message: this._transloco.translate(messageKey),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        { text: this._transloco.translate('common.confirm'), handler: () => this._saveMileage(car, newMileage) },
      ],
    });
    await alert.present();
  }

  private _saveMileage(car: CarDto, newMileage: number): void {
    // Partial payload on purpose: the API only needs id + actual_mileage, and
    // spreading the full CarDto would also serialize `photos`/`user_id` into the
    // update request's FormData, which the backend doesn't expect.
    this._carDetailFacade.udpateCar({ id: car.id, actual_mileage: newMileage } as CarDto);
  }
}
