import { Injectable } from '@angular/core';
import { AddCarDto, CarDto, DocumentDto } from '@hau/autogenapi/models';
import { CarDetailsActions } from '@hau/features/cars/state/car-details/car-details.actions';
import { CarDetailsState } from '@hau/features/cars/state/car-details/car-details.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class CarDetailsFacade {
  @Select(CarDetailsState.currentCar) currentCar$!: Observable<
    CarDto | null | undefined
  >;
  @Select(CarDetailsState.loading) loading$!: Observable<boolean>;
  @Select(CarDetailsState.carDocuments) carDocuments$!: Observable<
    DocumentDto[] | null | undefined
  >;

  constructor(private readonly _store: Store) {}

  loadCurrentCar(id: string): void {
    this._store.dispatch(new CarDetailsActions.LoadCurrentCar(id));
  }

  createCar(car: AddCarDto): void {
    this._store.dispatch(new CarDetailsActions.CreateCar(car));
  }

  udpateCar(car: CarDto): void {
    this._store.dispatch(new CarDetailsActions.UpdateCar(car));
  }

  loadCarDocuments(id: string): void {
    this._store.dispatch(new CarDetailsActions.LoadCarDocuments(id));
  }
}
