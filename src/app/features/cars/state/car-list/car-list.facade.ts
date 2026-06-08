import { Injectable } from '@angular/core';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { CarListActions } from '@hau/features/cars/state/car-list/car-list.actions';
import { CarListState, SharedCarEntry } from '@hau/features/cars/state/car-list/car-list.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class CarListFacade {
  carList$: Observable<CarDto[]> = this._store.select(CarListState.carList);
  activeCarList$: Observable<CarDto[]> = this._store.select(CarListState.activeCarList);
  soldCarList$: Observable<CarDto[]> = this._store.select(CarListState.soldCarList);
  loading$: Observable<boolean> = this._store.select(CarListState.loading);
  carDocumentsMap$: Observable<{ [carId: number]: DocumentDto[] | undefined }> = this._store.select(CarListState.carDocumentsMap);
  sharedCarList$: Observable<SharedCarEntry[]> = this._store.select(CarListState.sharedCarList);

  constructor(private readonly _store: Store) { }

  loadCarList(): void {
    this._store.dispatch(new CarListActions.LoadCarList());
  }

  reset(): void {
    this._store.dispatch(new CarListActions.Reset());
  }
}
