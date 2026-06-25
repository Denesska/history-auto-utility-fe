import { Injectable } from '@angular/core';
import { CarDto, CreateMaintenanceRecordDto, MaintenanceRecordDto, UpdateMaintenanceRecordDto } from '@hau/autogenapi/models';
import { MaintenanceActions } from '@hau/features/maintenance/state/maintenance.actions';
import { MaintenanceState } from '@hau/features/maintenance/state/maintenance.state';
import { BootstrapState, BootstrapStateModel, BOOTSTRAP_TTL_MS } from '@hau/shared/state/bootstrap/bootstrap.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class MaintenanceFacade {
  @Select(MaintenanceState.cars) cars$!: Observable<CarDto[]>;
  @Select(MaintenanceState.records) records$!: Observable<MaintenanceRecordDto[]>;
  @Select(MaintenanceState.selectedCarId) selectedCarId$!: Observable<number | null>;
  @Select(MaintenanceState.selectedCar) selectedCar$!: Observable<CarDto | null>;
  @Select(MaintenanceState.recordsForSelectedCar) recordsForSelectedCar$!: Observable<MaintenanceRecordDto[]>;
  @Select(MaintenanceState.loading) loading$!: Observable<boolean>;
  @Select(MaintenanceState.submitting) submitting$!: Observable<boolean>;

  constructor(private readonly _store: Store) {}

  loadAll(): void {
    const bs = this._store.selectSnapshot<BootstrapStateModel>(BootstrapState as any);
    const fresh = bs.bootstrapped && bs.lastBootstrappedAt !== null
      && (Date.now() - bs.lastBootstrappedAt < BOOTSTRAP_TTL_MS);
    if (fresh) {
      this._store.dispatch(new MaintenanceActions.HydrateFromBootstrap(bs.ownedCars, bs.sharedCars, bs.maintenance));
    } else {
      this._store.dispatch(new MaintenanceActions.LoadAll());
    }
  }

  selectCar(carId: number): void {
    this._store.dispatch(new MaintenanceActions.SelectCar(carId));
  }

  createRecord(dto: CreateMaintenanceRecordDto): void {
    this._store.dispatch(new MaintenanceActions.CreateRecord(dto));
  }

  updateRecord(id: number, dto: UpdateMaintenanceRecordDto): void {
    this._store.dispatch(new MaintenanceActions.UpdateRecord(id, dto));
  }

  deleteRecord(id: number): void {
    this._store.dispatch(new MaintenanceActions.DeleteRecord(id));
  }
}
