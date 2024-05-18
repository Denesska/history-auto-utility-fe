import { Injectable } from '@angular/core';
import { CarDto } from '@hau/autogenapi/models';
import { CarService } from '@hau/autogenapi/services';
import { CarDetailsState } from '@hau/features/cars/state/car-details/car-details.state';
import { CarListActions } from '@hau/features/cars/state/car-list/car-list.actions';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { take } from 'rxjs';

export interface CarListStateModel {
  list: {
    loading: boolean,
    items: CarDto[]
  }
}

const initialCarListState = {
  list: {
    loading: true,
    items: []
  }
};

@State<CarListStateModel>({
  name: 'cars',
  defaults: initialCarListState,
  children: [CarDetailsState]
})
@Injectable()
export class CarListState {
  constructor(private readonly _carService: CarService) { }

  @Selector()
  static carList(state: CarListStateModel): CarDto[] {
    return state.list.items;
  }

  @Selector()
  static loading(state: CarListStateModel): boolean {
    return state.list.loading;
  }

  @Action(CarListActions.LoadCarList)
  loadCarList({ dispatch }: StateContext<CarListStateModel>) {
    this._carService.carControllerGetAllCars().pipe(take(1)).subscribe({
      next: (response) => dispatch(new CarListActions.LoadCarListSuccess(response)),
      error: (err) => dispatch(new CarListActions.LoadCarListError(err))
    })
  }

  @Action(CarListActions.LoadCarListSuccess)
  loadCarListSuccess({ patchState }: StateContext<CarListStateModel>, { response }: CarListActions.LoadCarListSuccess) {
    const list = {
      items: response,
      loading: false
    }
    patchState({ list });
  }

  @Action(CarListActions.LoadCarListError)
  loadCarListError(_: StateContext<CarListStateModel>, { err }: CarListActions.LoadCarListError) {
    console.log(err)
  }
}
