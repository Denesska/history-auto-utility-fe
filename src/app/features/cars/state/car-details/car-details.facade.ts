import { Injectable } from '@angular/core';
import { AddCarDto, CarDto, DocumentDto, MaintenanceRecordDto } from '@hau/autogenapi/models';
import { CarDetailsActions } from '@hau/features/cars/state/car-details/car-details.actions';
import { CarDetailsState } from '@hau/features/cars/state/car-details/car-details.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class CarDetailsFacade {
  @Select(CarDetailsState.currentCar) currentCar$!: Observable<CarDto | null | undefined>;
  @Select(CarDetailsState.loading) loading$!: Observable<boolean>;
  @Select(CarDetailsState.submitting) submitting$!: Observable<boolean>;
  @Select(CarDetailsState.carDocuments) carDocuments$!: Observable<DocumentDto[] | null | undefined>;
  @Select(CarDetailsState.maintenanceRecords) maintenanceRecords$!: Observable<MaintenanceRecordDto[] | null | undefined>;

  constructor(private readonly _store: Store) { }

  loadCurrentCar(id: string): void {
    this._store.dispatch(new CarDetailsActions.LoadCurrentCar(id));
  }

  createCar(car: AddCarDto & { files?: File[] }): void {
    this._store.dispatch(new CarDetailsActions.CreateCar(car));
  }

  udpateCar(car: CarDto): void {
    this._store.dispatch(new CarDetailsActions.UpdateCar(car));
  }

  loadCarDocuments(id: string): void {
    this._store.dispatch(new CarDetailsActions.LoadCarDocuments(id));
  }

  loadMaintenanceRecords(carId: string): void {
    this._store.dispatch(new CarDetailsActions.LoadMaintenanceRecords(carId));
  }

  deleteCar(carId: string): void {
    this._store.dispatch(new CarDetailsActions.DeleteCar(carId));
  }

  markAsSold(carId: string): void {
    this._store.dispatch(new CarDetailsActions.MarkAsSold(carId));
  }

  restoreCar(carId: string): void {
    this._store.dispatch(new CarDetailsActions.RestoreCar(carId));
  }
}
