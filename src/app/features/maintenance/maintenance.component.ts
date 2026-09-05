import { AsyncPipe, DecimalPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto, MaintenanceRecordDto, ServiceCategory, ServiceType } from '@hau/autogenapi/models';
import { AddMaintenancePanelComponent } from '@hau/features/maintenance/add-maintenance-panel/add-maintenance-panel.component';
import { SERVICE_TYPE_CONFIG, serviceTypeConfig } from '@hau/features/maintenance/service-type.config';
import { MaintenanceFacade } from '@hau/features/maintenance/state/maintenance.facade';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { CATEGORY_CONFIG, ServiceCategoryConfig } from '@hau/shared/config/maintenance-category.config';
import { PullToRefreshService } from '@hau/core/pull-to-refresh.service';
// eslint-disable-next-line no-restricted-imports -- known cross-feature coupling, tracked in docs/architecture-audit.md
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonSkeletonText, NavController, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  add, addOutline, waterOutline, shieldCheckmarkOutline, settingsOutline,
  batteryChargingOutline, constructOutline, colorFilterOutline, flashOutline,
  checkmarkCircleOutline, trashOutline, calendarOutline, speedometerOutline,
  timeOutline, listOutline, buildOutline, carOutline,
  pencilOutline, discOutline, attachOutline,
} from 'ionicons/icons';
import { map } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

export type Tab = 'all' | 'upcoming' | 'history';

@UntilDestroy()
@Component({
  selector: 'app-maintenance',
  templateUrl: 'maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  imports: [AsyncPipe, DecimalPipe, NgClass, IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonSkeletonText, AddMaintenancePanelComponent, DropdownComponent, TranslocoPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;
  readonly cars$       = this._facade.cars$;
  readonly loading$    = this._facade.loading$;
  readonly submitting$ = this._facade.submitting$;
  readonly selectedCar$ = this._facade.selectedCar$;
  readonly records$    = this._facade.recordsForSelectedCar$;

  readonly stats$ = this.records$.pipe(map(recs => this._computeStats(recs)));

  readonly activeTab = signal<Tab>('all');
  readonly addPanelOpen = signal(false);
  readonly editingRecord = signal<MaintenanceRecordDto | null>(null);
  readonly filterCategory = signal<ServiceCategory | null>(null);
  readonly serviceTypeFilter = signal<ServiceType | null>(null);
  readonly isScoped = signal(false);

  readonly categories = CATEGORY_CONFIG;
  readonly serviceTypeCategories = SERVICE_TYPE_CONFIG;
  readonly serviceTypeConfig = serviceTypeConfig;

  constructor(
    private readonly _facade: MaintenanceFacade,
    private readonly _route: ActivatedRoute,
    private readonly _transloco: TranslocoService,
    private readonly _pullToRefresh: PullToRefreshService,
    private readonly _navCtrl: NavController,
    private readonly _headerActions: HeaderActionsService,
  ) {
    addIcons({
      add, addOutline, waterOutline, shieldCheckmarkOutline, settingsOutline,
      batteryChargingOutline, constructOutline, colorFilterOutline, flashOutline,
      checkmarkCircleOutline, trashOutline, calendarOutline, speedometerOutline,
      timeOutline, listOutline, buildOutline, carOutline,
      pencilOutline, discOutline, attachOutline,
    });
  }

  // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
  // fire on back-navigation — these Ionic lifecycle hooks do.
  ionViewWillEnter(): void {
    this._headerActions.setTitle(this._transloco.translate('maintenance.title'));
    this._headerActions.set(this._headerActionsTpl);
  }

  ionViewWillLeave(): void {
    this._headerActions.clearTitle();
    this._headerActions.clear();
  }

  ngOnInit(): void {
    // Scoped route (cars/details/:id/istoric) locks the car and hides the selector;
    // the global route (/main/maintenance) falls back to the ?carId= query param.
    const scopedCarId = this._route.snapshot.paramMap.get('id');
    const carId = scopedCarId ?? this._route.snapshot.queryParamMap.get('carId');
    this.isScoped.set(scopedCarId != null);
    if (carId) {
      this._facade.selectCar(Number(carId));
      this.activeTab.set('history');
    }
    this._facade.loadAll();
  }

  onRefresh(event: Event): void {
    this._pullToRefresh.refresh(event);
  }

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
    this.filterCategory.set(null);
    this.serviceTypeFilter.set(null);
  }

  selectCar(car: CarDto): void {
    this._facade.selectCar(car.id);
  }

  carOptions(cars: CarDto[]): DropdownOption[] {
    return cars.map(c => ({ value: c.id, label: c.year ? `${c.make} ${c.model} · ${c.year}` : `${c.make} ${c.model}` }));
  }

  onCarChange(value: string | number, cars: CarDto[]): void {
    const car = cars.find(c => c.id === Number(value));
    if (car) this.selectCar(car);
  }

  openAddPanel(): void {
    this.editingRecord.set(null);
    this.addPanelOpen.set(true);
  }

  openEditPanel(rec: MaintenanceRecordDto): void {
    this.editingRecord.set(rec);
    this.addPanelOpen.set(true);
  }

  onPanelClosed(): void {
    this.addPanelOpen.set(false);
    this.editingRecord.set(null);
  }

  onRecordCreated(): void {
    this.addPanelOpen.set(false);
    this.editingRecord.set(null);
  }

  deleteRecord(id: number): void {
    this._facade.deleteRecord(id);
  }

  toggleCategory(cat: ServiceCategory): void {
    this.filterCategory.update(current => current === cat ? null : cat);
  }

  toggleServiceTypeFilter(type: ServiceType): void {
    this.serviceTypeFilter.update(current => current === type ? null : type);
  }

  getYearForRecord(rec: MaintenanceRecordDto): number {
    return new Date(rec.service_date).getFullYear();
  }

  isNewYearGroup(records: MaintenanceRecordDto[], index: number): boolean {
    if (index === 0) return true;
    return this.getYearForRecord(records[index]) !== this.getYearForRecord(records[index - 1]);
  }

  getYearSummary(records: MaintenanceRecordDto[], year: number): { count: number; total: number } {
    const yearRecords = records.filter(r => this.getYearForRecord(r) === year);
    return {
      count: yearRecords.length,
      total: yearRecords.reduce((sum, r) => sum + (r.cost ?? 0), 0),
    };
  }

  getUpcoming(records: MaintenanceRecordDto[]): MaintenanceRecordDto[] {
    const now = Date.now();
    return records
      .filter(r => r.expiry_date && new Date(r.expiry_date).getTime() > now)
      .sort((a, b) => new Date(a.expiry_date!).getTime() - new Date(b.expiry_date!).getTime());
  }

  getFiltered(records: MaintenanceRecordDto[]): MaintenanceRecordDto[] {
    const now = Date.now();
    const filterCategory = this.filterCategory();
    let list = filterCategory
      ? records.filter(r => r.service_category === filterCategory)
      : records;

    const serviceTypeFilter = this.serviceTypeFilter();
    if (serviceTypeFilter) {
      list = list.filter(r => r.service_type === serviceTypeFilter);
    }

    switch (this.activeTab()) {
      case 'upcoming':
        return list
          .filter(r => r.expiry_date && new Date(r.expiry_date).getTime() > now)
          .sort((a, b) => new Date(a.expiry_date!).getTime() - new Date(b.expiry_date!).getTime());
      default:
        return list.sort((a, b) => new Date(b.service_date).getTime() - new Date(a.service_date).getTime());
    }
  }

  getPriorityLabel(record: MaintenanceRecordDto): { label: string; css: string } | null {
    if (!record.expiry_date) return null;
    const days = Math.ceil((new Date(record.expiry_date).getTime() - Date.now()) / 86400000);
    if (days <= 0)  return { label: this._transloco.translate('maintenance.priority.expired'), css: 'badge--expired' };
    if (days <= 14) return { label: this._transloco.translate('maintenance.priority.urgent'),  css: 'badge--high' };
    if (days <= 45) return { label: this._transloco.translate('maintenance.priority.medium'),  css: 'badge--medium' };
    return null;
  }

  getDaysLeft(record: MaintenanceRecordDto): string {
    if (!record.expiry_date) return '';
    const days = Math.ceil((new Date(record.expiry_date).getTime() - Date.now()) / 86400000);
    if (days <= 0) return this._transloco.translate('maintenance.daysLeft.expired');
    return days === 1
      ? this._transloco.translate('maintenance.daysLeft.oneDay')
      : this._transloco.translate('maintenance.daysLeft.days', { count: days });
  }

  getCategoryConfig(cat: ServiceCategory): ServiceCategoryConfig {
    return CATEGORY_CONFIG.find(c => c.value === cat) ?? CATEGORY_CONFIG[CATEGORY_CONFIG.length - 1];
  }

  navigateToRecordDetail(rec: MaintenanceRecordDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${rec.car_id}/${CARS_ROUTES.istoric.path}/${rec.id}`,
    );
  }

  formatMileage(val: number | null | undefined): string {
    if (val == null) return '—';
    return Number(val).toLocaleString() + ' km';
  }

  formatDate(dateStr: string | null | undefined): string {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  private _computeStats(records: MaintenanceRecordDto[]) {
    const oilRecords = records
      .filter(r => r.service_category === 'OIL_CHANGE')
      .sort((a, b) => new Date(b.service_date).getTime() - new Date(a.service_date).getTime());

    const now = Date.now();
    const upcoming = records
      .filter(r => r.expiry_date && new Date(r.expiry_date).getTime() > now)
      .sort((a, b) => new Date(a.expiry_date!).getTime() - new Date(b.expiry_date!).getTime());

    return {
      lastOilDate:      oilRecords[0]?.service_date ?? null,
      lastOilMileage:   oilRecords[0]?.mileage ?? null,
      totalRecords:     records.length,
      nextServiceDate:  upcoming[0]?.expiry_date ?? null,
      nextServiceDays:  upcoming[0]?.expiry_date
        ? Math.ceil((new Date(upcoming[0].expiry_date).getTime() - now) / 86400000)
        : null,
    };
  }
}
