import { Injectable } from '@angular/core';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { CarService, DocumentService } from '@hau/autogenapi/services';
import { CarDetailsState } from '@hau/features/cars/state/car-details/car-details.state';
import { CarListActions } from '@hau/features/cars/state/car-list/car-list.actions';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { take, tap } from 'rxjs';

export interface CarListStateModel {
  list: {
    loading: boolean,
    items: CarDto[]
  },
  carDocumentsMap: { [carId: number]: DocumentDto[] }
}

const initialCarListState: CarListStateModel = {
  list: {
    loading: true,
    items: []
  },
  carDocumentsMap: {}
};

@State<CarListStateModel>({
  name: 'cars',
  defaults: initialCarListState,
  children: [CarDetailsState]
})
@Injectable()
export class CarListState {
  constructor(
    private readonly _carService: CarService,
    private readonly _documentService: DocumentService,
  ) { }

  @Selector()
  static carList(state: CarListStateModel): CarDto[] {
    return state.list.items;
  }

  @Selector()
  static loading(state: CarListStateModel): boolean {
    return state.list.loading;
  }

  @Selector()
  static carDocumentsMap(state: CarListStateModel): { [carId: number]: DocumentDto[] } {
    return state.carDocumentsMap;
  }

  @Action(CarListActions.LoadCarList)
  loadCarList({ patchState, dispatch }: StateContext<CarListStateModel>) {
    // Set loading state to true
    patchState({
      list: {
        loading: true,
        items: []
      }
    });

    return this._carService.carControllerGetAllCars().pipe(
      take(1),
      tap({
        next: (response) => dispatch(new CarListActions.LoadCarListSuccess(response)),
        error: (err) => dispatch(new CarListActions.LoadCarListError(err))
      })
    );
  }

  @Action(CarListActions.LoadCarListSuccess)
  loadCarListSuccess({ patchState, dispatch }: StateContext<CarListStateModel>, { response }: CarListActions.LoadCarListSuccess) {
    patchState({
      list: { items: response, loading: false },
      carDocumentsMap: {},
    });
    response.forEach(car => dispatch(new CarListActions.LoadCarDocuments(car.id)));
  }

  @Action(CarListActions.LoadCarListError)
  loadCarListError({ patchState }: StateContext<CarListStateModel>, { err }: CarListActions.LoadCarListError) {
    console.error('Error loading car list:', err);
    patchState({
      list: { loading: false, items: [] }
    });
  }

  @Action(CarListActions.LoadCarDocuments)
  loadCarDocuments({ dispatch }: StateContext<CarListStateModel>, { carId }: CarListActions.LoadCarDocuments) {
    return this._documentService.documentControllerGetDocumentsByCarId({ carId: String(carId) }).pipe(
      take(1),
      tap({
        next: (docs) => dispatch(new CarListActions.LoadCarDocumentsSuccess(carId, docs)),
        error: (err) => dispatch(new CarListActions.LoadCarDocumentsError(err)),
      }),
    );
  }

  @Action(CarListActions.LoadCarDocumentsSuccess)
  loadCarDocumentsSuccess({ getState, patchState }: StateContext<CarListStateModel>, { carId, documents }: CarListActions.LoadCarDocumentsSuccess) {
    patchState({
      carDocumentsMap: { ...getState().carDocumentsMap, [carId]: documents },
    });
  }

  @Action(CarListActions.LoadCarDocumentsError)
  loadCarDocumentsError(_: StateContext<CarListStateModel>, { err }: CarListActions.LoadCarDocumentsError) {
    console.error('Error loading car documents:', err);
  }
}