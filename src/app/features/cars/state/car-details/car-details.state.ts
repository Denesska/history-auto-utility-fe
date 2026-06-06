import { Injectable } from '@angular/core';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { AddCarDto, CarDto, DocumentDto, MaintenanceRecordDto } from '@hau/autogenapi/models';
import { CarService, DocumentService, MaintenanceRecordService } from '@hau/autogenapi/services';
import { CarDetailsActions } from '@hau/features/cars/state/car-details/car-details.actions';
import { CarListActions } from '@hau/features/cars/state/car-list/car-list.actions';
import { NavController, ToastController } from '@ionic/angular';
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
  },
  maintenanceRecords: {
    items?: MaintenanceRecordDto[] | null,
    loading: boolean,
  },
  submitting: boolean,
}

const initialCarDetailsState: CarDetailsStateModel = {
  currentCar: {
    item: null,
    loading: false
  },
  carDocuments: {
    items: null,
    loading: false,
  },
  maintenanceRecords: {
    items: null,
    loading: false,
  },
  submitting: false,
};

@State<CarDetailsStateModel>({
  name: 'carDetails',
  defaults: initialCarDetailsState,
})
@Injectable()
export class CarDetailsState {
  constructor(
    private readonly _carService: CarService,
    private readonly _documentService: DocumentService,
    private readonly _maintenanceService: MaintenanceRecordService,
    private _navCtrl: NavController,
    private _toastCtrl: ToastController,
  ) { }

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

  @Selector()
  static maintenanceRecords(state: CarDetailsStateModel): MaintenanceRecordDto[] | null | undefined {
    return state.maintenanceRecords.items;
  }

  @Selector()
  static submitting(state: CarDetailsStateModel): boolean {
    return state.submitting;
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
  createCar({ dispatch, patchState }: StateContext<CarDetailsStateModel>, { car }: CarDetailsActions.CreateCar) {
    patchState({ submitting: true });
    this._carService.carControllerCreateCar({ body: car }).pipe(take(1)).subscribe({
      next: (createdCar) => dispatch(new CarDetailsActions.CreateCarSuccess(createdCar)),
      error: (err) => dispatch(new CarDetailsActions.CreateCarError(err)),
    });
  }

  @Action(CarDetailsActions.CreateCarSuccess)
  async createCarSuccess({ patchState, dispatch }: StateContext<CarDetailsStateModel>, { car }: CarDetailsActions.CreateCarSuccess) {
    patchState({ submitting: false });
    dispatch(new CarListActions.InjectCar(car));
    const toast = await this._toastCtrl.create({
      message: 'Mașina a fost adăugată cu succes!',
      duration: 2500,
      color: 'success',
      position: 'top',
    });
    await toast.present();
    this._navCtrl.navigateRoot([HAU_ROUTES.cars.fullPath]);
  }

  @Action(CarDetailsActions.CreateCarError)
  async createCarError({ patchState }: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.CreateCarError) {
    patchState({ submitting: false });
    console.error('Error creating car:', err);
    const message = err?.error?.message
      ? (Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message)
      : 'A apărut o eroare. Încearcă din nou.';
    const toast = await this._toastCtrl.create({
      message,
      duration: 4000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

  @Action(CarDetailsActions.UpdateCar)
  updateCar({ dispatch, patchState }: StateContext<CarDetailsStateModel>, { car }: CarDetailsActions.UpdateCar) {
    patchState({ submitting: true });
    this._carService.carControllerUpdateCar({ body: car }).pipe(take(1)).subscribe({
      next: (updatedCar) => dispatch(new CarDetailsActions.UpdateCarSuccess(updatedCar)),
      error: (err) => dispatch(new CarDetailsActions.UpdateCarError(err)),
    });
  }

  @Action(CarDetailsActions.UpdateCarSuccess)
  async updateCarSuccess({ patchState, dispatch }: StateContext<CarDetailsStateModel>, { car }: CarDetailsActions.UpdateCarSuccess) {
    patchState({ submitting: false, currentCar: { item: car, loading: false } });
    dispatch(new CarListActions.UpdateCarInList(car));
    const toast = await this._toastCtrl.create({
      message: 'Mașina a fost actualizată cu succes!',
      duration: 2500,
      color: 'success',
      position: 'top',
    });
    await toast.present();
    this._navCtrl.navigateRoot([HAU_ROUTES.cars.fullPath]);
  }

  @Action(CarDetailsActions.UpdateCarError)
  async updateCarError({ patchState }: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.UpdateCarError) {
    patchState({ submitting: false });
    console.error('Error updating car:', err);
    const message = err?.error?.message
      ? (Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message)
      : 'A apărut o eroare. Încearcă din nou.';
    const toast = await this._toastCtrl.create({
      message,
      duration: 4000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
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

  @Action(CarDetailsActions.LoadMaintenanceRecords)
  loadMaintenanceRecords({ dispatch }: StateContext<CarDetailsStateModel>, { carId }: CarDetailsActions.LoadMaintenanceRecords) {
    this._maintenanceService.maintenanceRecordControllerGetMaintenanceRecordsByCarId({ carId }).pipe(take(1)).subscribe({
      next: (response: MaintenanceRecordDto[]) => dispatch(new CarDetailsActions.LoadMaintenanceRecordsSuccess(response)),
      error: (err: HttpErrorResponse) => dispatch(new CarDetailsActions.LoadMaintenanceRecordsError(err)),
    });
  }

  @Action(CarDetailsActions.LoadMaintenanceRecordsSuccess)
  loadMaintenanceRecordsSuccess({ patchState }: StateContext<CarDetailsStateModel>, { response }: CarDetailsActions.LoadMaintenanceRecordsSuccess) {
    patchState({
      maintenanceRecords: {
        items: response,
        loading: false
      }
    });
  }

  @Action(CarDetailsActions.LoadMaintenanceRecordsError)
  loadMaintenanceRecordsError({ patchState }: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.LoadMaintenanceRecordsError) {
    console.error('Error loading maintenance records:', err);
    patchState({
      maintenanceRecords: {
        items: null,
        loading: false
      }
    });
  }

  @Action(CarDetailsActions.DeleteCar)
  deleteCar({ dispatch, patchState }: StateContext<CarDetailsStateModel>, { carId }: CarDetailsActions.DeleteCar) {
    patchState({ submitting: true });
    this._carService.carControllerDeleteCar({ id: carId }).pipe(take(1)).subscribe({
      next: (car) => dispatch(new CarDetailsActions.DeleteCarSuccess(car.id)),
      error: (err) => dispatch(new CarDetailsActions.DeleteCarError(err)),
    });
  }

  @Action(CarDetailsActions.DeleteCarSuccess)
  async deleteCarSuccess({ patchState, dispatch }: StateContext<CarDetailsStateModel>, { carId }: CarDetailsActions.DeleteCarSuccess) {
    patchState({ submitting: false });
    dispatch(new CarListActions.RemoveCar(carId));
    const toast = await this._toastCtrl.create({
      message: 'Mașina a fost ștearsă cu succes!',
      duration: 2500,
      color: 'success',
      position: 'top',
    });
    await toast.present();
    this._navCtrl.navigateRoot([HAU_ROUTES.cars.fullPath]);
  }

  @Action(CarDetailsActions.DeleteCarError)
  async deleteCarError({ patchState }: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.DeleteCarError) {
    patchState({ submitting: false });
    const message = err?.error?.message
      ? (Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message)
      : 'A apărut o eroare. Încearcă din nou.';
    const toast = await this._toastCtrl.create({
      message,
      duration: 4000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

  @Action(CarDetailsActions.MarkAsSold)
  markAsSold({ dispatch, patchState }: StateContext<CarDetailsStateModel>, { carId }: CarDetailsActions.MarkAsSold) {
    patchState({ submitting: true });
    this._carService.carControllerMarkAsSold({ id: carId }).pipe(take(1)).subscribe({
      next: (car) => dispatch(new CarDetailsActions.MarkAsSoldSuccess(car)),
      error: (err) => dispatch(new CarDetailsActions.MarkAsSoldError(err)),
    });
  }

  @Action(CarDetailsActions.MarkAsSoldSuccess)
  async markAsSoldSuccess({ patchState, dispatch }: StateContext<CarDetailsStateModel>, { car }: CarDetailsActions.MarkAsSoldSuccess) {
    patchState({ submitting: false });
    dispatch(new CarListActions.UpdateCarInList(car));
    const toast = await this._toastCtrl.create({
      message: 'Mașina a fost marcată ca vândută.',
      duration: 2500,
      color: 'success',
      position: 'top',
    });
    await toast.present();
    this._navCtrl.navigateRoot([HAU_ROUTES.cars.fullPath]);
  }

  @Action(CarDetailsActions.MarkAsSoldError)
  async markAsSoldError({ patchState }: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.MarkAsSoldError) {
    patchState({ submitting: false });
    const message = err?.error?.message
      ? (Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message)
      : 'A apărut o eroare. Încearcă din nou.';
    const toast = await this._toastCtrl.create({
      message,
      duration: 4000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

  @Action(CarDetailsActions.RestoreCar)
  restoreCar({ dispatch, patchState }: StateContext<CarDetailsStateModel>, { carId }: CarDetailsActions.RestoreCar) {
    patchState({ submitting: true });
    this._carService.carControllerRestore({ id: carId }).pipe(take(1)).subscribe({
      next: (car) => dispatch(new CarDetailsActions.RestoreCarSuccess(car)),
      error: (err) => dispatch(new CarDetailsActions.RestoreCarError(err)),
    });
  }

  @Action(CarDetailsActions.RestoreCarSuccess)
  async restoreCarSuccess({ patchState, dispatch }: StateContext<CarDetailsStateModel>, { car }: CarDetailsActions.RestoreCarSuccess) {
    patchState({ submitting: false });
    dispatch(new CarListActions.UpdateCarInList(car));
    const toast = await this._toastCtrl.create({
      message: 'Mașina a fost restaurată în garaj.',
      duration: 2500,
      color: 'success',
      position: 'top',
    });
    await toast.present();
    this._navCtrl.navigateRoot([HAU_ROUTES.cars.fullPath]);
  }

  @Action(CarDetailsActions.RestoreCarError)
  async restoreCarError({ patchState }: StateContext<CarDetailsStateModel>, { err }: CarDetailsActions.RestoreCarError) {
    patchState({ submitting: false });
    const message = err?.error?.message
      ? (Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message)
      : 'A apărut o eroare. Încearcă din nou.';
    const toast = await this._toastCtrl.create({
      message,
      duration: 4000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }
}
