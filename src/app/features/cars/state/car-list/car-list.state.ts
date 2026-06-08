import { Injectable } from '@angular/core';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { CarAccessRole } from '@hau/autogenapi/models/car-access-dto';
import { CarAccessService, CarService, DocumentService } from '@hau/autogenapi/services';
import { CarListActions } from '@hau/features/cars/state/car-list/car-list.actions';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { forkJoin, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs';

export interface SharedCarEntry {
  car: CarDto;
  role: CarAccessRole;
}

export interface CarListStateModel {
  list: { loading: boolean; items: CarDto[] };
  sharedList: { loading: boolean; items: SharedCarEntry[] };
  carDocumentsMap: { [carId: number]: DocumentDto[] | undefined };
}

const initialCarListState: CarListStateModel = {
  list: { loading: true, items: [] },
  sharedList: { loading: false, items: [] },
  carDocumentsMap: {},
};

@State<CarListStateModel>({
  name: 'cars',
  defaults: initialCarListState,
})
@Injectable()
export class CarListState {
  constructor(
    private readonly _carService: CarService,
    private readonly _documentService: DocumentService,
    private readonly _carAccessService: CarAccessService,
  ) {}

  @Selector()
  static carList(state: CarListStateModel): CarDto[] {
    return state.list.items;
  }

  @Selector()
  static activeCarList(state: CarListStateModel): CarDto[] {
    return state.list.items.filter(c => !c.status || c.status === 'ACTIVE');
  }

  @Selector()
  static soldCarList(state: CarListStateModel): CarDto[] {
    return state.list.items.filter(c => c.status === 'SOLD');
  }

  @Selector()
  static loading(state: CarListStateModel): boolean {
    return state.list.loading;
  }

  @Selector()
  static carDocumentsMap(state: CarListStateModel): { [carId: number]: DocumentDto[] | undefined } {
    return state.carDocumentsMap;
  }

  @Selector()
  static sharedCarList(state: CarListStateModel): SharedCarEntry[] {
    return state.sharedList.items;
  }

  @Action(CarListActions.Reset)
  reset({ setState }: StateContext<CarListStateModel>) {
    setState(initialCarListState);
  }

  @Action(CarListActions.LoadCarList)
  loadCarList({ patchState, getState, dispatch }: StateContext<CarListStateModel>) {
    patchState({ list: { ...getState().list, loading: true } });
    dispatch(new CarListActions.LoadSharedCars());
    return this._carService.carControllerGetAllCars().pipe(
      take(1),
      tap({
        next: response => dispatch(new CarListActions.LoadCarListSuccess(response)),
        error: err => dispatch(new CarListActions.LoadCarListError(err)),
      }),
    );
  }

  @Action(CarListActions.LoadSharedCars)
  loadSharedCars({ patchState, getState, dispatch }: StateContext<CarListStateModel>) {
    patchState({ sharedList: { ...getState().sharedList, loading: true } });
    return this._carAccessService.getSharedCars().pipe(
      take(1),
      switchMap(sharedCars => {
        const accepted = sharedCars.filter(c => c.accepted_at !== null);
        if (!accepted.length) return of([] as SharedCarEntry[]);
        return forkJoin(
          accepted.map(s =>
            this._carService.carControllerGetCar({ id: String(s.id) }).pipe(
              map(car => ({ car, role: s.shared_role })),
            ),
          ),
        );
      }),
      tap({
        next: items => dispatch(new CarListActions.LoadSharedCarsSuccess(items)),
        error: err => dispatch(new CarListActions.LoadSharedCarsError(err)),
      }),
    );
  }

  @Action(CarListActions.LoadSharedCarsSuccess)
  loadSharedCarsSuccess({ patchState, dispatch }: StateContext<CarListStateModel>, { items }: CarListActions.LoadSharedCarsSuccess) {
    patchState({ sharedList: { loading: false, items } });
    items.forEach(entry => dispatch(new CarListActions.LoadCarDocuments(entry.car.id)));
  }

  @Action(CarListActions.LoadSharedCarsError)
  loadSharedCarsError({ patchState }: StateContext<CarListStateModel>) {
    patchState({ sharedList: { loading: false, items: [] } });
  }

  @Action(CarListActions.LoadCarListSuccess)
  loadCarListSuccess({ patchState, dispatch }: StateContext<CarListStateModel>, { response }: CarListActions.LoadCarListSuccess) {
    patchState({ list: { items: response, loading: false }, carDocumentsMap: {} });
    response.forEach(car => dispatch(new CarListActions.LoadCarDocuments(car.id)));
  }

  @Action(CarListActions.LoadCarListError)
  loadCarListError({ patchState }: StateContext<CarListStateModel>, { err }: CarListActions.LoadCarListError) {
    console.error('Error loading car list:', err);
    patchState({ list: { loading: false, items: [] } });
  }

  @Action(CarListActions.LoadCarDocuments)
  loadCarDocuments({ dispatch }: StateContext<CarListStateModel>, { carId }: CarListActions.LoadCarDocuments) {
    return this._documentService.documentControllerGetDocumentsByCarId({ carId: String(carId) }).pipe(
      take(1),
      tap({
        next: docs => dispatch(new CarListActions.LoadCarDocumentsSuccess(carId, docs)),
        error: err => dispatch(new CarListActions.LoadCarDocumentsError(err)),
      }),
    );
  }

  @Action(CarListActions.LoadCarDocumentsSuccess)
  loadCarDocumentsSuccess({ getState, patchState }: StateContext<CarListStateModel>, { carId, documents }: CarListActions.LoadCarDocumentsSuccess) {
    patchState({ carDocumentsMap: { ...getState().carDocumentsMap, [carId]: documents } });
  }

  @Action(CarListActions.LoadCarDocumentsError)
  loadCarDocumentsError(_: StateContext<CarListStateModel>, { err }: CarListActions.LoadCarDocumentsError) {
    console.error('Error loading car documents:', err);
  }

  @Action(CarListActions.InjectCar)
  injectCar({ getState, patchState, dispatch }: StateContext<CarListStateModel>, { car }: CarListActions.InjectCar) {
    const current = getState().list.items;
    patchState({ list: { loading: false, items: [...current, car] } });
    dispatch(new CarListActions.LoadCarDocuments(car.id));
  }

  @Action(CarListActions.RemoveCar)
  removeCar({ getState, patchState }: StateContext<CarListStateModel>, { carId }: CarListActions.RemoveCar) {
    const current = getState().list.items;
    patchState({ list: { loading: false, items: current.filter(c => c.id !== carId) } });
  }

  @Action(CarListActions.UpdateCarInList)
  updateCarInList({ getState, patchState }: StateContext<CarListStateModel>, { car }: CarListActions.UpdateCarInList) {
    const current = getState().list.items;
    patchState({ list: { loading: false, items: current.map(c => c.id === car.id ? car : c) } });
  }
}
