import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { downloadOutline, carOutline, speedometerOutline, constructOutline } from 'ionicons/icons';
import { combineLatest, map, Observable } from 'rxjs';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { CarDto, MaintenanceRecordDto, ServiceType } from '@hau/autogenapi/models';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { SERVICE_TYPE_CONFIG, serviceTypeConfig } from '@hau/features/maintenance/service-type.config';
import { PageHeaderComponent } from '@hau/shared/component/page-header/page-header.component';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';

export type ReportsPeriod = 'month' | 'year' | 'all';

interface CategoryBreakdownRow {
  type: ServiceType;
  labelKey: string;
  colorVar: string;
  total: number;
  percent: number;
}

interface MonthlyBar {
  label: string;
  total: number;
  isPeak: boolean;
}

interface ReportsViewModel {
  records: MaintenanceRecordDto[];
  totalCost: number;
  kmDriven: number | null;
  costPerKm: number | null;
  recordCount: number;
  breakdown: CategoryBreakdownRow[];
  monthly: MonthlyBar[];
  monthlyPeak: number;
}

@Component({
  selector: 'app-reports',
  templateUrl: 'reports.component.html',
  styleUrls: ['./reports.component.scss'],
  imports: [AsyncPipe, DecimalPipe, IonContent, IonIcon, PageHeaderComponent, DropdownComponent, TranslocoPipe],
})
export class ReportsComponent implements OnInit {
  selectedCarId: number | 'all' = 'all';
  period: ReportsPeriod = 'year';
  isScoped = false;

  readonly cars$ = this._bootstrapFacade.ownedCars$;
  readonly serviceTypeCategories = SERVICE_TYPE_CONFIG;

  vm$!: Observable<ReportsViewModel>;

  constructor(
    private readonly _bootstrapFacade: BootstrapFacade,
    private readonly _route: ActivatedRoute,
    private readonly _transloco: TranslocoService,
  ) {
    addIcons({ downloadOutline, carOutline, speedometerOutline, constructOutline });
  }

  ngOnInit(): void {
    // Scoped route (cars/details/:id/rapoarte) locks the car and hides the selector;
    // the global route (/main/reports) falls back to the ?carId= query param.
    const scopedCarId = this._route.snapshot.paramMap.get('id');
    const carId = scopedCarId ?? this._route.snapshot.queryParamMap.get('carId');
    this.isScoped = scopedCarId != null;
    if (carId) this.selectedCarId = Number(carId);

    this.vm$ = combineLatest([
      this._bootstrapFacade.ownedCars$,
      this._bootstrapFacade.maintenance$,
    ]).pipe(
      map(([cars, maintenanceByCarId]) => this._buildViewModel(cars, maintenanceByCarId)),
    );
  }

  selectCar(carId: number | 'all'): void {
    this.selectedCarId = carId;
  }

  onCarChange(value: string | number): void {
    this.selectCar(value === 'all' ? 'all' : Number(value));
  }

  carOptions(cars: CarDto[]): DropdownOption[] {
    return [
      { value: 'all', label: this._transloco.translate('reports.allCars') },
      ...cars.map(c => ({ value: c.id, label: `${c.make} ${c.model}` })),
    ];
  }

  setPeriod(period: ReportsPeriod): void {
    this.period = period;
  }

  private _buildViewModel(cars: CarDto[], maintenanceByCarId: Record<number, MaintenanceRecordDto[]>): ReportsViewModel {
    const carIds = this.selectedCarId === 'all' ? cars.map(c => c.id) : [this.selectedCarId];
    const allRecords = carIds.flatMap(id => maintenanceByCarId[id] ?? []);
    const records = allRecords.filter(r => this._isInPeriod(r.service_date));

    const totalCost = records.reduce((sum, r) => sum + (r.cost ?? 0), 0);
    const recordCount = records.length;

    const mileages = records.map(r => r.mileage).filter((m): m is number => m != null);
    const kmDriven = mileages.length >= 2 ? Math.max(...mileages) - Math.min(...mileages) : null;
    const costPerKm = kmDriven && kmDriven > 0 ? totalCost / kmDriven : null;

    const breakdown = SERVICE_TYPE_CONFIG.map(cfg => {
      const total = records.filter(r => r.service_type === cfg.value).reduce((sum, r) => sum + (r.cost ?? 0), 0);
      return {
        type: cfg.value,
        labelKey: cfg.labelKey,
        colorVar: cfg.colorVar,
        total,
        percent: totalCost > 0 ? Math.round((total / totalCost) * 100) : 0,
      };
    }).filter(row => row.total > 0)
      .sort((a, b) => b.total - a.total);

    const monthly = this._buildMonthly(records);
    const monthlyPeak = Math.max(1, ...monthly.map(m => m.total));

    return { records, totalCost, kmDriven, costPerKm, recordCount, breakdown, monthly, monthlyPeak };
  }

  private _isInPeriod(serviceDate: string): boolean {
    if (this.period === 'all') return true;
    const date = new Date(serviceDate);
    const now = new Date();
    if (this.period === 'year') return date.getFullYear() === now.getFullYear();
    return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
  }

  private _buildMonthly(records: MaintenanceRecordDto[]): MonthlyBar[] {
    const now = new Date();
    const months: { key: string; label: string; total: number }[] = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push({
        key: `${d.getFullYear()}-${d.getMonth()}`,
        label: d.toLocaleDateString(this._transloco.getActiveLang(), { month: 'short' }),
        total: 0,
      });
    }
    for (const r of records) {
      const d = new Date(r.service_date);
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      const bucket = months.find(m => m.key === key);
      if (bucket) bucket.total += r.cost ?? 0;
    }
    const peak = Math.max(...months.map(m => m.total));
    return months.map(m => ({ label: m.label, total: m.total, isPeak: m.total > 0 && m.total === peak }));
  }

  readonly serviceTypeConfig = serviceTypeConfig;
}
