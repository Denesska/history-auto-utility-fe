import { Injectable } from '@angular/core';
import { CarDto } from '@hau/autogenapi/models';
import { CarListActions } from '@hau/features/cars/state/car-list/car-list.actions';
import { CarListState } from '@hau/features/cars/state/car-list/car-list.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class CarListFacade {
  @Select(CarListState.carList) carList$!: Observable<CarDto[]>;
  @Select(CarListState.loading) loading$!: Observable<boolean>;

  constructor(private readonly _store: Store) { }

  loadCarList(): void {
    this._store.dispatch(new CarListActions.LoadCarList());
  }
}
