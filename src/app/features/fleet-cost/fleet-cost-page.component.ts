import { DecimalPipe } from '@angular/common';
import { Component, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { FleetCostApiService } from '@hau/core/fleet-cost-api.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { AdminBarChartComponent, AdminBarPoint } from '@hau/features/admin/components/admin-bar-chart.component';
import { AdminHBarItem, AdminHBarListComponent } from '@hau/features/admin/components/admin-hbar-list.component';
import { FleetCostDashboardDto, FleetCostRange, FLEET_COST_RANGES } from './fleet-cost.model';

@Component({
  selector: 'app-fleet-cost-page',
  templateUrl: './fleet-cost-page.component.html',
  styleUrls: ['./fleet-cost-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [DecimalPipe, IonContent, TranslocoPipe, DropdownComponent, LoaderComponent, AdminBarChartComponent, AdminHBarListComponent],
})
export class FleetCostPageComponent implements ViewWillEnter, ViewWillLeave {
  private readonly _route = inject(ActivatedRoute);
  private readonly _api = inject(FleetCostApiService);
  private readonly _transloco = inject(TranslocoService);
  private readonly _headerActions = inject(HeaderActionsService);

  private organizationId!: number;

  readonly range = signal<FleetCostRange>(90);
  readonly dashboard = signal<FleetCostDashboardDto | null>(null);
  readonly loading = signal(false);
  readonly error = signal(false);

  readonly monthPoints = computed<AdminBarPoint[]>(() => {
    const d = this.dashboard();
    if (!d) return [];
    return d.byMonth.map(m => ({
      label: m.month.slice(5),
      value: m.total,
      tooltip: `${m.month} — ${this._formatCost(m.total)} RON`,
    }));
  });

  readonly carItems = computed<AdminHBarItem[]>(() => {
    const d = this.dashboard();
    if (!d) return [];
    return d.byCar.map(c => ({
      label: c.licensePlate ? `${c.label} (${c.licensePlate})` : c.label,
      value: c.total,
      display: `${this._formatCost(c.total)} RON`,
    }));
  });

  ionViewWillEnter(): void {
    this.organizationId = Number(this._route.snapshot.paramMap.get('organizationId'));
    this._headerActions.setTitle(this._transloco.translate('fleetCost.title'));
    this.load();
  }

  ionViewWillLeave(): void {
    this._headerActions.clear();
    this._headerActions.clearTitle();
  }

  get rangeOptions(): DropdownOption[] {
    return FLEET_COST_RANGES.map(r => ({
      value: r,
      label: r === 0 ? this._transloco.translate('fleetCost.range.all') : this._transloco.translate('fleetCost.range.days', { n: r }),
    }));
  }

  onRangeChange(value: string | number): void {
    this.range.set(Number(value) as FleetCostRange);
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(false);
    this._api.getDashboard(this.organizationId, this.range()).subscribe({
      next: d => { this.dashboard.set(d); this.loading.set(false); },
      error: () => { this.loading.set(false); this.error.set(true); },
    });
  }

  private _formatCost(n: number): string {
    return Math.round(n).toLocaleString('ro-RO');
  }
}
