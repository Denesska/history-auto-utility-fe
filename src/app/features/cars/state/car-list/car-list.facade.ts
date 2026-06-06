import { Injectable } from '@angular/core';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { CarListActions } from '@hau/features/cars/state/car-list/car-list.actions';
import { CarListState, SharedCarEntry } from '@hau/features/cars/state/car-list/car-list.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class CarListFacade {
  @Select(CarListState.carList) carList$!: Observable<CarDto[]>;
  @Select(CarListState.activeCarList) activeCarList$!: Observable<CarDto[]>;
  @Select(CarListState.soldCarList) soldCarList$!: Observable<CarDto[]>;
  @Select(CarListState.loading) loading$!: Observable<boolean>;
  @Select(CarListState.carDocumentsMap) carDocumentsMap$!: Observable<{ [carId: number]: DocumentDto[] | undefined }>;
  @Select(CarListState.sharedCarList) sharedCarList$!: Observable<SharedCarEntry[]>;

  constructor(private readonly _store: Store) { }

  loadCarList(): void {
    this._store.dispatch(new CarListActions.LoadCarList());
  }
}
