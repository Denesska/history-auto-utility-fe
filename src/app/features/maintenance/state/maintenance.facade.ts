import { Injectable } from '@angular/core';
import { CarDto, CreateMaintenanceRecordDto, MaintenanceRecordDto } from '@hau/autogenapi/models';
import { MaintenanceActions } from '@hau/features/maintenance/state/maintenance.actions';
import { MaintenanceState } from '@hau/features/maintenance/state/maintenance.state';
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
    this._store.dispatch(new MaintenanceActions.LoadAll());
  }

  selectCar(carId: number): void {
    this._store.dispatch(new MaintenanceActions.SelectCar(carId));
  }

  createRecord(dto: CreateMaintenanceRecordDto): void {
    this._store.dispatch(new MaintenanceActions.CreateRecord(dto));
  }

  deleteRecord(id: number): void {
    this._store.dispatch(new MaintenanceActions.DeleteRecord(id));
  }
}
