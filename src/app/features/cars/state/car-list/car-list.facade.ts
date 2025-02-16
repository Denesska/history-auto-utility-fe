import { inject, Injectable } from '@angular/core';
import { CarDto } from '@hau/autogenapi/models';
import { CarListActions } from '@hau/features/cars/state/car-list/car-list.actions';
import { CarListState } from '@hau/features/cars/state/car-list/car-list.state';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class CarListFacade {
  carList$: Observable<CarDto[]> = inject(Store).select(CarListState.carList);
  loading$: Observable<boolean> = inject(Store).select(CarListState.loading);

  constructor(private readonly _store: Store) {}

  loadCarList(): void {
    this._store.dispatch(new CarListActions.LoadCarList());
  }
}
