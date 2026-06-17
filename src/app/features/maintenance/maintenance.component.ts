import { AsyncPipe, DecimalPipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto, MaintenanceRecordDto, ServiceCategory } from '@hau/autogenapi/models';
import { AddMaintenancePanelComponent } from '@hau/features/maintenance/add-maintenance-panel/add-maintenance-panel.component';
import { MaintenanceFacade } from '@hau/features/maintenance/state/maintenance.facade';
import { PullToRefreshService } from '@hau/core/pull-to-refresh.service';
import { IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonSkeletonText, NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  add, addOutline, waterOutline, shieldCheckmarkOutline, settingsOutline,
  batteryChargingOutline, constructOutline, colorFilterOutline, flashOutline,
  checkmarkCircleOutline, trashOutline, calendarOutline, speedometerOutline,
  timeOutline, listOutline, buildOutline, carOutline, chevronDownOutline,
} from 'ionicons/icons';
import { map } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

export type Tab = 'all' | 'upcoming' | 'history';

export interface ServiceCategoryConfig {
  value: ServiceCategory;
  label: string;
  icon: string;
}

export const CATEGORY_CONFIG: ServiceCategoryConfig[] = [
  { value: 'OIL_CHANGE',           label: 'maintenance.categories.oilChange',           icon: 'water-outline' },
  { value: 'BRAKE_SERVICE',        label: 'maintenance.categories.brakeService',        icon: 'build-outline' },
  { value: 'TIRE_SERVICE',         label: 'maintenance.categories.tireService',         icon: 'settings-outline' },
  { value: 'FLUID_SERVICE',        label: 'maintenance.categories.fluidService',        icon: 'color-filter-outline' },
  { value: 'ENGINE_SERVICE',       label: 'maintenance.categories.engineService',       icon: 'construct-outline' },
  { value: 'INSPECTION',           label: 'maintenance.categories.inspection',          icon: 'shield-checkmark-outline' },
  { value: 'BATTERY_SERVICE',      label: 'maintenance.categories.batteryService',      icon: 'battery-charging-outline' },
  { value: 'FILTER_SERVICE',       label: 'maintenance.categories.filterService',       icon: 'list-outline' },
  { value: 'LIGHT_SERVICE',        label: 'maintenance.categories.lightService',        icon: 'flash-outline' },
  { value: 'TRANSMISSION_SERVICE', label: 'maintenance.categories.transmissionService', icon: 'car-outline' },
  { value: 'OTHER',                label: 'maintenance.categories.other',               icon: 'checkmark-circle-outline' },
];

@UntilDestroy()
@Component({
  selector: 'app-maintenance',
  templateUrl: 'maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  imports: [AsyncPipe, DecimalPipe, NgClass, IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonSkeletonText, AddMaintenancePanelComponent, TranslocoPipe],
})
export class MaintenanceComponent implements OnInit {
  readonly cars$       = this._facade.cars$;
  readonly loading$    = this._facade.loading$;
  readonly submitting$ = this._facade.submitting$;
  readonly selectedCar$ = this._facade.selectedCar$;
  readonly records$    = this._facade.recordsForSelectedCar$;

  readonly stats$ = this.records$.pipe(map(recs => this._computeStats(recs)));

  activeTab: Tab = 'all';
  addPanelOpen = false;
  carSelectorOpen = false;
  filterCategory: ServiceCategory | null = null;
  preselectedCarId: number | null = null;
  private _navigatedToPanel = false;

  readonly categories = CATEGORY_CONFIG;

  constructor(
    private readonly _facade: MaintenanceFacade,
    private readonly _route: ActivatedRoute,
    private readonly _navCtrl: NavController,
    private readonly _transloco: TranslocoService,
    private readonly _pullToRefresh: PullToRefreshService,
  ) {
    addIcons({
      add, addOutline, waterOutline, shieldCheckmarkOutline, settingsOutline,
      batteryChargingOutline, constructOutline, colorFilterOutline, flashOutline,
      checkmarkCircleOutline, trashOutline, calendarOutline, speedometerOutline,
      timeOutline, listOutline, buildOutline, carOutline, chevronDownOutline,
    });
  }

  ngOnInit(): void {
    this._facade.loadAll();

    this._route.queryParamMap
      .pipe(untilDestroyed(this))
      .subscribe(params => {
        const carId = params.get('carId');
        const openPanel = params.get('openPanel');

        this.preselectedCarId = carId ? Number(carId) : null;
        if (carId) {
          this._facade.selectCar(Number(carId));
        }

        if (openPanel === 'true') {
          this.addPanelOpen = true;
          this._navigatedToPanel = true;
        }
      });
  }

  onRefresh(event: Event): void {
    this._pullToRefresh.refresh(event);
  }

  setTab(tab: Tab): void {
    this.activeTab = tab;
    this.filterCategory = null;
  }

  selectCar(car: CarDto): void {
    this._facade.selectCar(car.id);
    this.carSelectorOpen = false;
  }

  onPanelClosed(): void {
    this.addPanelOpen = false;
    if (this._navigatedToPanel) {
      this._navigatedToPanel = false;
      void this._navCtrl.back();
    }
  }

  onRecordCreated(): void {
    this.addPanelOpen = false;
  }

  deleteRecord(id: number): void {
    this._facade.deleteRecord(id);
  }

  toggleCategory(cat: ServiceCategory): void {
    this.filterCategory = this.filterCategory === cat ? null : cat;
  }

  getUpcoming(records: MaintenanceRecordDto[]): MaintenanceRecordDto[] {
    const now = Date.now();
    return records
      .filter(r => r.expiry_date && new Date(r.expiry_date).getTime() > now)
      .sort((a, b) => new Date(a.expiry_date!).getTime() - new Date(b.expiry_date!).getTime());
  }

  getFiltered(records: MaintenanceRecordDto[]): MaintenanceRecordDto[] {
    const now = Date.now();
    let list = this.filterCategory
      ? records.filter(r => r.service_category === this.filterCategory)
      : records;

    switch (this.activeTab) {
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
