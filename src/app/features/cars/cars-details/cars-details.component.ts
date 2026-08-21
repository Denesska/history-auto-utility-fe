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
import { daysAgo, daysUntil, formatDate, formatMileage, getCarSubtitle, getDocExpiry } from '@hau/features/cars/cars.utils';
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
  pendingDeadlines,
} from '@hau/shared/utils/deadline-items.util';
import { DeadlineOrderService } from '@hau/core/deadline-order.service';
import { AlertController, IonContent, IonIcon, IonicSafeString, NavController } from '@ionic/angular/standalone';
import { Store } from '@ngxs/store';
import { combineLatest, map, take } from 'rxjs';
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

  private _carId: number | null = null;
  private _deadlineOrder: string[] = [];

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
  ) {
    addIcons({
      pencilOutline, addCircleOutline, cloudUploadOutline, carOutline,
      chevronForward, ellipsisHorizontal, shareSocialOutline,
      exitOutline, logOutOutline, checkmarkCircleOutline,
      chevronDown, chevronUp, reorderThreeOutline, refreshOutline,
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
    });

    // Deadlines are derived, never stored: any change to the car's mileage, its
    // documents or its service history re-runs the whole list.
    combineLatest([
      this.currentCar$,
      this.carDocuments$,
      this.maintenanceRecords$,
      this.maintenanceIntervals$,
    ]).pipe(untilDestroyed(this)).subscribe(([car, docs, records, intervals]) => {
      this.deadlines = car
        ? applyManualOrder(buildDeadlineItems(car, docs, records ?? [], intervals ?? []), this._deadlineOrder)
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
  // Collapsed shows only what's overdue or close to it, because that's the
  // question the hub answers ("is anything wrong?"); expanded shows everything
  // and is the only place rows can be dragged, since the collapsed list is a
  // filtered subset and its indices don't map onto the full order.

  /** What the section renders right now. */
  get visibleDeadlines(): DeadlineItem[] {
    return this.deadlinesExpanded ? this.deadlines : pendingDeadlines(this.deadlines);
  }

  /** How many healthy items are folded away in the collapsed view. */
  get healthyDeadlinesCount(): number {
    return this.deadlines.length - pendingDeadlines(this.deadlines).length;
  }

  get hasPendingDeadlines(): boolean {
    return pendingDeadlines(this.deadlines).length > 0;
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
