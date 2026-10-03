import { inject, Injectable } from '@angular/core';
import { AddCarDto, CarDto } from '@hau/autogenapi/models';
import { CarDetailsActions } from '@hau/features/cars/state/car-details/car-details.actions';
import { CarDetailsState } from '@hau/features/cars/state/car-details/car-details.state';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class CarDetailsFacade {
  currentCar$: Observable<CarDto | null | undefined> = inject(Store).select(CarDetailsState.currentCar);
  loading$: Observable<boolean> = inject(Store).select(CarDetailsState.loading);
  submitting$: Observable<boolean> = inject(Store).select(CarDetailsState.submitting);

  constructor(private readonly _store: Store) { }

  loadCurrentCar(id: string): void {
    this._store.dispatch(new CarDetailsActions.LoadCurrentCar(id));
  }

  createCar(car: AddCarDto & { files?: File[] }, navigateOnSuccess: boolean = true): void {
    this._store.dispatch(new CarDetailsActions.CreateCar(car, navigateOnSuccess));
  }

  udpateCar(car: CarDto, navigateOnSuccess: boolean = true): void {
    this._store.dispatch(new CarDetailsActions.UpdateCar(car, navigateOnSuccess));
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
