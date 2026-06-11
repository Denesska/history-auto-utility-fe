import { inject, Injectable } from '@angular/core';
import { AddCarDto, CarDto, DocumentDto, MaintenanceRecordDto } from '@hau/autogenapi/models';
import { CarDetailsActions } from '@hau/features/cars/state/car-details/car-details.actions';
import { CarDetailsState } from '@hau/features/cars/state/car-details/car-details.state';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class CarDetailsFacade {
  currentCar$: Observable<CarDto | null | undefined> = inject(Store).select(CarDetailsState.currentCar);
  loading$: Observable<boolean> = inject(Store).select(CarDetailsState.loading);
  submitting$: Observable<boolean> = inject(Store).select(CarDetailsState.submitting);
  carDocuments$: Observable<DocumentDto[] | null | undefined> = inject(Store).select(CarDetailsState.carDocuments);
  maintenanceRecords$: Observable<MaintenanceRecordDto[] | null | undefined> = inject(Store).select(CarDetailsState.maintenanceRecords);

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

  clearCurrentCar(): void {
    this._store.dispatch(new CarDetailsActions.ClearCurrentCar());
  }
}
