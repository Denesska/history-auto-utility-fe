import { Injectable } from '@angular/core';
import { CarAccessUserDto, CarDto, DocumentDto, MaintenanceIntervalDto, MaintenanceProfileDto, MaintenanceRecordDto, MaintenanceSettingDto, SharedCarDto } from '@hau/autogenapi/models';
import { BootstrapSharedCarEntry } from '@hau/autogenapi/models/bootstrap-response-dto';
import { BootstrapActions } from '@hau/shared/state/bootstrap/bootstrap.actions';
import { BootstrapState } from '@hau/shared/state/bootstrap/bootstrap.state';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BootstrapFacade {
  readonly bootstrapped$: Observable<boolean> = this._store.select(BootstrapState.bootstrapped);
  readonly bootstrapping$: Observable<boolean> = this._store.select(BootstrapState.bootstrapping);
  readonly me$: Observable<CarAccessUserDto | null> = this._store.select(BootstrapState.me);
  readonly ownedCars$: Observable<CarDto[]> = this._store.select(BootstrapState.ownedCars);
  readonly sharedCars$: Observable<BootstrapSharedCarEntry[]> = this._store.select(BootstrapState.sharedCars);
  readonly pendingInvites$: Observable<SharedCarDto[]> = this._store.select(BootstrapState.pendingInvites);
  readonly documents$: Observable<Record<number, DocumentDto[]>> = this._store.select(BootstrapState.documents);
  readonly maintenance$: Observable<Record<number, MaintenanceRecordDto[]>> = this._store.select(BootstrapState.maintenance);
  readonly maintenanceIntervals$: Observable<MaintenanceIntervalDto[]> = this._store.select(BootstrapState.maintenanceIntervals);
  readonly carMaintenanceSettings$: Observable<Record<number, MaintenanceSettingDto[]>> = this._store.select(BootstrapState.carMaintenanceSettings);
  readonly maintenanceProfiles$: Observable<Record<number, MaintenanceProfileDto[]>> = this._store.select(BootstrapState.maintenanceProfiles);

  constructor(private readonly _store: Store) {}

  bootstrap(): void {
    this._store.dispatch(new BootstrapActions.Bootstrap());
  }

  forceRefresh(): void {
    this._store.dispatch(new BootstrapActions.BootstrapForce());
  }

  patchCarMaintenanceSettings(carId: number, settings: MaintenanceSettingDto[]): void {
    this._store.dispatch(new BootstrapActions.PatchCarMaintenanceSettings(carId, settings));
  }

  currentCarMaintenanceSettings(carId: number): MaintenanceSettingDto[] {
    return this._store.selectSnapshot(BootstrapState.carMaintenanceSettings)[carId] ?? [];
  }

  patchCarMaintenanceProfiles(carId: number, profiles: MaintenanceProfileDto[]): void {
    this._store.dispatch(new BootstrapActions.PatchCarMaintenanceProfiles(carId, profiles));
  }

  currentCarMaintenanceProfiles(carId: number): MaintenanceProfileDto[] {
    return this._store.selectSnapshot(BootstrapState.maintenanceProfiles)[carId] ?? [];
  }
}
