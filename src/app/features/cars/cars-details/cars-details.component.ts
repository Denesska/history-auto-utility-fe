import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto, DocumentDto, MaintenanceIntervalDto, MaintenanceRecordDto } from '@hau/autogenapi/models';
import { CarAccessRole } from '@hau/autogenapi/models/car-access-dto';
import { CarNoteService, BlogService } from '@hau/autogenapi/services';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { daysAgo, daysUntil, formatDate, formatMileage, getDocExpiry } from '@hau/features/cars/cars.utils';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { RemoveCarPanelComponent } from '@hau/features/cars/remove-car-panel/remove-car-panel.component';
import { CarListState } from '@hau/features/cars/state/car-list/car-list.state';
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
import { MAINTENANCE_ROUTES } from '@hau/features/maintenance/maintenance.routes.const';
import { PhotoCarouselComponent, PhotoItem } from '@hau/shared/component/photo-carousel/photo-carousel.component';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { buildPlanItems, PlanItem } from '@hau/shared/utils/plan-items.util';
import { AlertController, IonContent, IonIcon, IonicSafeString, NavController } from '@ionic/angular/standalone';
import { Store } from '@ngxs/store';
import { combineLatest, map, take } from 'rxjs';
import { addIcons } from 'ionicons';
import {
  pencilOutline,
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

// TODO: mocked fallback for the "Urmează la întreținere" section — used only when
// a car doesn't have real service history yet for at least 2 categories.
const MOCK_UPCOMING_ITEMS: PlanItem[] = [
  {
    category: 'OIL_CHANGE', labelKey: 'maintenance.categories.oilChange', icon: 'water-outline',
    lastDate: '2026-03-15T00:00:00.000Z', lastMileage: null, trackingUnit: 'km',
    intervalKm: 10000, intervalMonths: 12, kmRemaining: 2400, nextDueDate: '2027-03-15T00:00:00.000Z',
    progressPercent: 76, state: 'ok',
  },
  {
    category: 'BRAKE_SERVICE', labelKey: 'maintenance.categories.brakeService', icon: 'build-outline',
    lastDate: '2025-01-10T00:00:00.000Z', lastMileage: null, trackingUnit: 'date',
    intervalKm: null, intervalMonths: 24, kmRemaining: null, nextDueDate: '2027-01-10T00:00:00.000Z',
    progressPercent: 80, state: 'warning',
  },
];

@UntilDestroy()
@Component({
  selector: 'app-cars-details',
  templateUrl: 'cars-details.component.html',
  styleUrls: ['./cars-details.component.scss'],
  imports: [AsyncPipe, DecimalPipe, IonContent, IonIcon, RemoveCarPanelComponent, PhotoCarouselComponent, TranslocoPipe],
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
  ) {
    addIcons({
      pencilOutline, addCircleOutline, cloudUploadOutline, carOutline,
      chevronForward, ellipsisHorizontal, shareSocialOutline,
      exitOutline, logOutOutline, checkmarkCircleOutline,
    });
  }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
      const carId = params['id'];
      this._carDetailFacade.loadCurrentCar(carId);
      this._carDetailFacade.loadMaintenanceRecords(carId);
      this._carDetailFacade.loadCarDocuments(carId);
      this._loadNotesCount(carId);
      this._loadJurnalCount(carId);
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

  // Up to 2 closest-to-due maintenance items, real km-based data from the same
  // logic as the Plan de întreținere screen (see shared/utils/plan-items.util.ts).
  // TODO: time-based intervals (e.g. brake fluid every N months) aren't modeled
  // yet — every item here is km-only until that's added.
  // TODO: when a car has fewer than 2 categories with real service history, the
  // remaining slot(s) are backfilled with MOCK_UPCOMING_ITEMS below so the section
  // still matches the design instead of disappearing — replace with real data
  // once every car has maintenance history logged.
  // "Peste ~X" once due date/km is in the future, "restanță X" once it's past —
  // kmRemaining/nextDueDate are signed, so overdue amounts stay visible instead
  // of flattening to "peste ~0" the moment something becomes due.
  getRemainingInfo(item: PlanItem): { key: string; params: Record<string, unknown>; isOverdue: boolean } {
    if (item.trackingUnit === 'km' && item.kmRemaining != null) {
      const isOverdue = item.kmRemaining < 0;
      return {
        key: isOverdue ? 'cars.details.hub.upcoming.overdueKm' : 'cars.details.hub.upcoming.remainingKm',
        params: { km: Math.abs(item.kmRemaining).toLocaleString() },
        isOverdue,
      };
    }
    const days = item.nextDueDate ? daysUntil(item.nextDueDate) ?? 0 : 0;
    const isOverdue = days < 0;
    return {
      key: isOverdue ? 'cars.details.hub.upcoming.overdueDays' : 'cars.details.hub.upcoming.remainingDays',
      params: { count: Math.abs(days) },
      isOverdue,
    };
  }

  getUpcomingPlanItems(car: CarDto, records: MaintenanceRecordDto[], intervals: MaintenanceIntervalDto[]): PlanItem[] {
    const real = buildPlanItems(car, records, 'normal', intervals).filter(item => item.state !== 'untracked');
    if (real.length >= 2) return real.slice(0, 2);

    const realCategories = new Set(real.map(item => item.category));
    const mocked = MOCK_UPCOMING_ITEMS.filter(item => !realCategories.has(item.category));
    return [...real, ...mocked].slice(0, 2);
  }

  // The dark km card tracks *actual* mileage (updated over time from the hub),
  // kept separate from `current_mileage`, which is the initial/purchase-time
  // value set once in the car form. Falls back to the initial value until the
  // owner records a real update.
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
