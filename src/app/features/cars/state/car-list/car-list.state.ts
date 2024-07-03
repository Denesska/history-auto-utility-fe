import { Injectable } from '@angular/core';
import { CarDto } from '@hau/autogenapi/models';
import { CarService } from '@hau/autogenapi/services';
import { CarDetailsState } from '@hau/features/cars/state/car-details/car-details.state';
import { CarListActions } from '@hau/features/cars/state/car-list/car-list.actions';
import { Action, Selector, State, StateContext } from '@ngxs/store';

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
    dispatch(new CarListActions.LoadCarListSuccess(mockList));
    // this._carService.carControllerGetAllCars().pipe(take(1)).subscribe({
    //   next: (response) => dispatch(new CarListActions.LoadCarListSuccess(response)),
    //   error: (err) => dispatch(new CarListActions.LoadCarListError(err))
    // })
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

const mockList: CarDto[] = [
  {
    "current_mileage": 45322,
    "id": 1,
    "license_plate": "ABC1234",
    "make": "Toyota",
    "model": "Camry",
    "user_id": 101,
    "vin": "1HGCM82633A123456",
    "year": 2018
  },
  {
    "current_mileage": 67210,
    "id": 2,
    "license_plate": "XYZ5678",
    "make": "Honda",
    "model": "Civic",
    "user_id": 102,
    "vin": "2HGFB2F59CH123456",
    "year": 2017
  },
  {
    "current_mileage": 12345,
    "id": 3,
    "license_plate": "LMN9101",
    "make": "Ford",
    "model": "Focus",
    "user_id": 103,
    "vin": "3FAHP0HA3AR123456",
    "year": 2020
  },
  {
    "current_mileage": 88976,
    "id": 4,
    "license_plate": "GHI2345",
    "make": "Chevrolet",
    "model": "Malibu",
    "user_id": 104,
    "vin": "1G1ZB5E14AF123456",
    "year": 2016
  },
  {
    "current_mileage": 53123,
    "id": 5,
    "license_plate": "JKL3456",
    "make": "Nissan",
    "model": "Altima",
    "user_id": 105,
    "vin": "1N4AL3AP3FC123456",
    "year": 2019
  }
];