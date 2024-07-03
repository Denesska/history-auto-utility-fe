import { Injectable } from '@angular/core';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { CarDto } from '@hau/autogenapi/models';
import { CarService } from '@hau/autogenapi/services';
import { CarDetailsActions } from '@hau/features/cars/state/car-details/car-details.actions';
import { NavController } from '@ionic/angular';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { take } from 'rxjs';

export interface CarDetailsStateModel {
  currentCar: {
    item?: CarDto | null,
    loading: boolean,
  }
}

const initialCarDetailsState = {
  currentCar: {
    item: null,
    loading: false
  }
};

@State<CarDetailsStateModel>({
  name: 'carDetails',
  defaults: initialCarDetailsState,
})
@Injectable()
export class CarDetailsState {
  constructor(private readonly _carService: CarService, private _navCtrl: NavController) { }

  @Selector()
  static currentCar(state: CarDetailsStateModel): CarDto | null | undefined {
    return state.currentCar.item;
  }

  @Selector()
  static loading(state: CarDetailsStateModel): boolean {
    return state.currentCar.loading;
  }

  @Action(CarDetailsActions.LoadCurrentCar)
  loadCurrentCar({ dispatch }: StateContext<CarDetailsStateModel>, { id }: CarDetailsActions.LoadCurrentCar) {
    this._carService.carControllerGetCar({ id }).pipe(take(1)).subscribe({
      next: (response) => dispatch(new CarDetailsActions.LoadCurrentCarSuccess(response)),
      error: (err) => dispatch(new CarDetailsActions.LoadCurrentCarError(err)),
    })
  }

  @Action(CarDetailsActions.LoadCurrentCarSuccess)
  loadCurrentCarSuccess({ patchState }: StateContext<CarDetailsStateModel>, { response }: CarDetailsActions.LoadCurrentCarSuccess) {
    const currentCar = {
      item: response,
      loading: false
    }
    patchState({ currentCar });
  }

  @Action(CarDetailsActions.LoadCurrentCarError)
  loadCurrentCarError(_: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.LoadCurrentCarError) {
    console.log(err)
  }

  @Action(CarDetailsActions.CreateCar)
  createCar({ dispatch }: StateContext<CarDetailsStateModel>, { car }: CarDetailsActions.CreateCar) {
    this._carService.carControllerCreateCar({ body: car }).pipe(take(1)).subscribe({
      next: () => dispatch(new CarDetailsActions.CreateCarSuccess()),
      error: (err) => dispatch(new CarDetailsActions.CreateCarError(err)),
    })
  }

  @Action(CarDetailsActions.CreateCarSuccess)
  createCarSuccess({ patchState }: StateContext<CarDetailsStateModel>) {
    console.log("car created");
    this._navCtrl.navigateRoot([HAU_ROUTES.cars.fullPath]);
  }

  @Action(CarDetailsActions.CreateCarError)
  createCarError(_: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.CreateCarError) {
    console.log(err)
  }

  @Action(CarDetailsActions.UpdateCar)
  updateCar({ dispatch }: StateContext<CarDetailsStateModel>, { car }: CarDetailsActions.CreateCar) {
    //TO DO - backend changes needed.
    // this._carService.carControllerUpdateCar({ body: car }).pipe(take(1)).subscribe({
    //   next: () => dispatch(new CarDetailsActions.CreateCarSuccess()),
    //   error: (err) => dispatch(new CarDetailsActions.CreateCarError(err)),
    // })
  }

  @Action(CarDetailsActions.UpdateCarSuccess)
  updateCarSuccess({ patchState }: StateContext<CarDetailsStateModel>) {
    console.log("car created");
  }

  @Action(CarDetailsActions.UpdateCarError)
  updateCarError(_: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.CreateCarError) {
    console.log(err)
  }
}
