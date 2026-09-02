import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  carOutline, waterOutline, buildOutline, discOutline,
  colorFilterOutline, constructOutline, shieldCheckmarkOutline,
  batteryChargingOutline, listOutline, flashOutline, optionsOutline,
} from 'ionicons/icons';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { CarDto } from '@hau/autogenapi/models';
import { formatDate } from '@hau/shared/utils/formatting.util';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { buildPlanItems, PlanItem, UsageProfile } from '@hau/shared/utils/plan-items.util';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { CarMaintenanceSettingsPanelComponent } from '@hau/features/maintenance/car-maintenance-settings-panel/car-maintenance-settings-panel.component';

export type { PlanItem, PlanItemState, UsageProfile } from '@hau/shared/utils/plan-items.util';

@UntilDestroy()
@Component({
  selector: 'app-maintenance-plan',
  templateUrl: 'plan.component.html',
  styleUrls: ['./plan.component.scss'],
  imports: [AsyncPipe, DecimalPipe, IonContent, IonIcon, DropdownComponent, TranslocoPipe, CarMaintenanceSettingsPanelComponent],
})
export class MaintenancePlanComponent implements OnInit {
  // Plain mutated fields here would silently desync from vm$: it's built once in
  // ngOnInit via combineLatest, so a re-render only happens when a *stream* emits.
  // Both selection and profile drive what buildPlanItems computes, so they need to
  // be actual combineLatest sources, not just fields the template happens to read.
  private readonly _selectedCarId$ = new BehaviorSubject<number | null>(null);
  private readonly _profile$ = new BehaviorSubject<UsageProfile>('normal');

  get selectedCarId(): number | null { return this._selectedCarId$.value; }
  get profile(): UsageProfile { return this._profile$.value; }

  isScoped = false;
  settingsPanelOpen = false;

  readonly profiles: UsageProfile[] = ['normal', 'intensive', 'occasional'];
  readonly cars$ = this._bootstrapFacade.ownedCars$;

  protected readonly formatDate = formatDate;

  vm$!: Observable<{ car: CarDto | null; items: PlanItem[] }>;

  constructor(
    private readonly _bootstrapFacade: BootstrapFacade,
    private readonly _route: ActivatedRoute,
    private readonly _transloco: TranslocoService,
  ) {
    addIcons({
      carOutline, waterOutline, buildOutline, discOutline,
      colorFilterOutline, constructOutline, shieldCheckmarkOutline,
      batteryChargingOutline, listOutline, flashOutline, optionsOutline,
    });
  }

  get profileOptions(): DropdownOption[] {
    return this.profiles.map(p => ({ value: p, label: this._transloco.translate(`plan.profiles.${p}`) }));
  }

  carOptions(cars: CarDto[]): DropdownOption[] {
    return cars.map(c => ({ value: c.id, label: `${c.make} ${c.model}` }));
  }

  onCarChange(value: string | number): void {
    this.selectCar(Number(value));
  }

  onProfileChange(value: string | number): void {
    this.setProfile(value as UsageProfile);
  }

  ngOnInit(): void {
    // Scoped route (cars/details/:id/plan) locks the car and hides the selector;
    // the global route (/main/plan) falls back to the ?carId= query param.
    const scopedCarId = this._route.snapshot.paramMap.get('id');
    const carId = scopedCarId ?? this._route.snapshot.queryParamMap.get('carId');
    this.isScoped = scopedCarId != null;
    if (carId) this._selectedCarId$.next(Number(carId));

    // Defaults to the first owned car once the list loads, if the route didn't
    // pin one. Kept out of the vm$ pipe below on purpose: calling next() on
    // _selectedCarId$ from inside a map() that also reads _selectedCarId$ as a
    // combineLatest source would re-enter that same pipe mid-emission.
    this._bootstrapFacade.ownedCars$.pipe(untilDestroyed(this)).subscribe(cars => {
      if (this._selectedCarId$.value === null && cars.length > 0) {
        this._selectedCarId$.next(cars[0].id);
      }
    });

    this.vm$ = combineLatest([
      this._bootstrapFacade.ownedCars$,
      this._bootstrapFacade.maintenance$,
      this._bootstrapFacade.maintenanceIntervals$,
      this._bootstrapFacade.carMaintenanceSettings$,
      this._selectedCarId$,
      this._profile$,
    ]).pipe(
      map(([cars, maintenanceByCarId, intervals, settingsByCarId, selectedCarId, profile]) => {
        const car = cars.find(c => c.id === selectedCarId) ?? null;
        const records = car ? (maintenanceByCarId[car.id] ?? []) : [];
        const settings = car ? (settingsByCarId[car.id] ?? []) : [];
        return { car, items: car ? buildPlanItems(car, records, profile, intervals, settings) : [] };
      }),
    );
  }

  openSettingsPanel(): void {
    this.settingsPanelOpen = true;
  }

  closeSettingsPanel(): void {
    this.settingsPanelOpen = false;
  }

  selectCar(carId: number): void {
    this._selectedCarId$.next(carId);
  }

  setProfile(profile: UsageProfile): void {
    this._profile$.next(profile);
  }
}
