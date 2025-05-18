import { Injectable } from '@angular/core';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { AddCarDto, CarDto, DocumentDto } from '@hau/autogenapi/models';
import { CarService, DocumentService } from '@hau/autogenapi/services';
import { CarDetailsActions } from '@hau/features/cars/state/car-details/car-details.actions';
import { NavController } from '@ionic/angular';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export interface CarDetailsStateModel {
  currentCar: {
    item?: CarDto | null,
    loading: boolean,
  },
  carDocuments: {
    items?: DocumentDto[] | null,
    loading: boolean,
  }
}

const initialCarDetailsState = {
  currentCar: {
    item: null,
    loading: false
  },
  carDocuments: {
    items: null,
    loading: false,
  }
};

@State<CarDetailsStateModel>({
  name: 'carDetails',
  defaults: initialCarDetailsState,
})
@Injectable()
export class CarDetailsState {
  constructor(private readonly _carService: CarService, private readonly _documentService: DocumentService, private _navCtrl: NavController) { }

  @Selector()
  static currentCar(state: CarDetailsStateModel): CarDto | null | undefined {
    return state.currentCar.item;
  }

  @Selector()
  static loading(state: CarDetailsStateModel): boolean {
    return state.currentCar.loading;
  }

  @Selector()
  static carDocuments(state: CarDetailsStateModel): DocumentDto[] | null | undefined {
    return state.carDocuments.items;
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
    patchState({
      currentCar: {
        item: response,
        loading: false
      }
    });
  }

  @Action(CarDetailsActions.LoadCurrentCarError)
  loadCurrentCarError({ patchState }: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.LoadCurrentCarError) {
    console.error('Error loading car:', err);
    patchState({
      currentCar: {
        item: null,
        loading: false
      }
    });
  }

  @Action(CarDetailsActions.CreateCar)
  createCar({ dispatch }: StateContext<CarDetailsStateModel>, { car }: CarDetailsActions.CreateCar) {
    // Debug log: should show a flat object, not { car: { ... } }
    console.log('Payload to API:', car);

    this._carService.carControllerCreateCar({ body: car }).pipe(take(1)).subscribe({
      next: () => dispatch(new CarDetailsActions.CreateCarSuccess()),
      error: (err) => dispatch(new CarDetailsActions.CreateCarError(err)),
    });
  }

  @Action(CarDetailsActions.CreateCarSuccess)
  createCarSuccess({ patchState }: StateContext<CarDetailsStateModel>) {
    this._navCtrl.navigateRoot([HAU_ROUTES.cars.fullPath]);
  }

  @Action(CarDetailsActions.CreateCarError)
  createCarError(_: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.CreateCarError) {
    console.error('Error creating car:', err);
  }

  @Action(CarDetailsActions.UpdateCar)
  updateCar({ dispatch }: StateContext<CarDetailsStateModel>, { car }: CarDetailsActions.UpdateCar) {
    let payload: any = { ...car };
    if (typeof payload.image === 'string') {
      delete payload.image;
    }
    this._carService.carControllerUpdateCar({ body: payload }).pipe(take(1)).subscribe({
      next: () => dispatch(new CarDetailsActions.UpdateCarSuccess()),
      error: (err) => dispatch(new CarDetailsActions.UpdateCarError(err)),
    })
  }

  @Action(CarDetailsActions.UpdateCarSuccess)
  updateCarSuccess({ patchState }: StateContext<CarDetailsStateModel>) {
    this._navCtrl.navigateRoot([HAU_ROUTES.cars.fullPath]);
  }

  @Action(CarDetailsActions.UpdateCarError)
  updateCarError(_: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.UpdateCarError) {
    console.error('Error updating car:', err);
  }

  @Action(CarDetailsActions.LoadCarDocuments)
  loadCarDocuments({ dispatch }: StateContext<CarDetailsStateModel>, { carId }: CarDetailsActions.LoadCarDocuments) {
    this._documentService.documentControllerGetDocumentsByCarId({ carId }).pipe(take(1)).subscribe({
      next: (response: DocumentDto[]) => dispatch(new CarDetailsActions.LoadCarDocumentsSuccess(response)),
      error: (err: HttpErrorResponse) => dispatch(new CarDetailsActions.LoadCarDocumentsError(err)),
    })
  }

  @Action(CarDetailsActions.LoadCarDocumentsSuccess)
  loadCarDocumentsSuccess({ patchState }: StateContext<CarDetailsStateModel>, { response }: CarDetailsActions.LoadCarDocumentsSuccess) {
    patchState({
      carDocuments: {
        items: response,
        loading: false
      }
    });
  }

  @Action(CarDetailsActions.LoadCarDocumentsError)
  loadCarDocumentsError({ patchState }: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.LoadCarDocumentsError) {
    console.error('Error loading car documents:', err);
    patchState({
      carDocuments: {
        items: null,
        loading: false
      }
    });
  }
}
