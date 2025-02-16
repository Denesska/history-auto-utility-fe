import { Injectable } from '@angular/core';
import { CarDto } from '@hau/autogenapi/models';
import { CarService } from '@hau/autogenapi/services';
import { CarDetailsState } from '@hau/features/cars/state/car-details/car-details.state';
import { CarListActions } from '@hau/features/cars/state/car-list/car-list.actions';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { take } from 'rxjs';

export interface CarListStateModel {
  list: {
    loading: boolean;
    items: CarDto[];
  };
}

const initialCarListState = {
  list: {
    loading: true,
    items: [],
  },
};

const mockList: CarDto[] = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    license_plate: 'ABC123',
    vin: '1HGCM82633A123456',
    current_mileage: 45000,
    user_id: 1,
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    license_plate: 'XYZ789',
    vin: '2HGES16575H123456',
    current_mileage: 32000,
    user_id: 1,
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    license_plate: 'MUS789',
    vin: '1FATP8UH3K5123456',
    current_mileage: 15000,
    user_id: 2,
  },
  {
    id: 4,
    make: 'BMW',
    model: '330i',
    year: 2022,
    license_plate: 'BMW456',
    vin: 'WBA8B9C50JK123456',
    current_mileage: 8000,
    user_id: 2,
  },
  {
    id: 5,
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    license_plate: 'TSL999',
    vin: '5YJ3E1EA1PF123456',
    current_mileage: 5000,
    user_id: 3,
  },
  {
    id: 6,
    make: 'Chevrolet',
    model: 'Silverado',
    year: 2021,
    license_plate: 'TRK365',
    vin: '3GCUKREC3JG123456',
    current_mileage: 28000,
    user_id: 3,
  },
  {
    id: 7,
    make: 'Audi',
    model: 'Q5',
    year: 2020,
    license_plate: 'AUD777',
    vin: 'WA1ANAFY2L2123456',
    current_mileage: 35000,
    user_id: 4,
  },
  {
    id: 8,
    make: 'Volkswagen',
    model: 'Golf',
    year: 2019,
    license_plate: 'VW1234',
    vin: 'WVWAA7AU6JW123456',
    current_mileage: 42000,
    user_id: 4,
  },
  {
    id: 9,
    make: 'Hyundai',
    model: 'Tucson',
    year: 2022,
    license_plate: 'HYU555',
    vin: 'KM8J3CA46NU123456',
    current_mileage: 12000,
    user_id: 5,
  },
  {
    id: 10,
    make: 'Mazda',
    model: 'CX-5',
    year: 2021,
    license_plate: 'MZD888',
    vin: 'JM3KFBDM7M0123456',
    current_mileage: 25000,
    user_id: 5,
  },
];

@State<CarListStateModel>({
  name: 'cars',
  defaults: initialCarListState,
  children: [CarDetailsState],
})
@Injectable()
export class CarListState {
  constructor(private readonly _carService: CarService) {}

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
    // dispatch(new CarListActions.LoadCarListSuccess(mockList));
    this._carService.carControllerGetAllCars().pipe(take(1)).subscribe({
      next: (response) => dispatch(new CarListActions.LoadCarListSuccess(response)),
      error: (err) => dispatch(new CarListActions.LoadCarListError(err))
    })
  }

  @Action(CarListActions.LoadCarListSuccess)
  loadCarListSuccess(
    { patchState }: StateContext<CarListStateModel>,
    { response }: CarListActions.LoadCarListSuccess,
  ) {
    console.log('denis => received list: ', response);
    const list = {
      items: response,
      loading: false,
    };
    patchState({ list });
  }

  @Action(CarListActions.LoadCarListError)
  loadCarListError(
    _: StateContext<CarListStateModel>,
    { err }: CarListActions.LoadCarListError,
  ) {
    console.log(err);
  }
}
