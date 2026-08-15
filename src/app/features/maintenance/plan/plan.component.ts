import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  carOutline, waterOutline, buildOutline, discOutline,
  colorFilterOutline, constructOutline, shieldCheckmarkOutline,
  batteryChargingOutline, listOutline, flashOutline,
} from 'ionicons/icons';
import { combineLatest, map, Observable } from 'rxjs';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { CarDto } from '@hau/autogenapi/models';
import { formatDate } from '@hau/features/cars/cars.utils';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { buildPlanItems, PlanItem, UsageProfile } from '@hau/shared/utils/plan-items.util';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';

export type { PlanItem, PlanItemState, UsageProfile } from '@hau/shared/utils/plan-items.util';

@Component({
  selector: 'app-maintenance-plan',
  templateUrl: 'plan.component.html',
  styleUrls: ['./plan.component.scss'],
  imports: [AsyncPipe, DecimalPipe, IonContent, IonIcon, DropdownComponent, TranslocoPipe],
})
export class MaintenancePlanComponent implements OnInit {
  selectedCarId: number | null = null;
  profile: UsageProfile = 'normal';
  isScoped = false;

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
      batteryChargingOutline, listOutline, flashOutline,
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
    if (carId) this.selectedCarId = Number(carId);

    this.vm$ = combineLatest([
      this._bootstrapFacade.ownedCars$,
      this._bootstrapFacade.maintenance$,
      this._bootstrapFacade.maintenanceIntervals$,
    ]).pipe(
      map(([cars, maintenanceByCarId, intervals]) => {
        if (this.selectedCarId === null && cars.length > 0) {
          this.selectedCarId = cars[0].id;
        }
        const car = cars.find(c => c.id === this.selectedCarId) ?? null;
        const records = car ? (maintenanceByCarId[car.id] ?? []) : [];
        return { car, items: car ? buildPlanItems(car, records, this.profile, intervals) : [] };
      }),
    );
  }

  selectCar(carId: number): void {
    this.selectedCarId = carId;
  }

  setProfile(profile: UsageProfile): void {
    this.profile = profile;
  }
}
