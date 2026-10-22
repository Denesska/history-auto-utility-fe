import { Injectable, inject } from '@angular/core';
import { NavigationHistoryService } from '@hau/core/navigation/navigation-history.service';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { AddCarDto, CarDto } from '@hau/autogenapi/models';
import { CarService, MaintenanceRecordService } from '@hau/autogenapi/services';
import { CarDetailsActions } from '@hau/features/cars/state/car-details/car-details.actions';
import { CarListActions } from '@hau/features/cars/state/car-list/car-list.actions';
import { BootstrapActions } from '@hau/shared/state/bootstrap/bootstrap.actions';
import { SessionReset } from '@hau/core/session/session.actions';
import { NavController, ToastController } from '@ionic/angular';
import { TranslocoService } from '@jsverse/transloco';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { take } from 'rxjs';

export interface CarDetailsStateModel {
  currentCar: {
    item?: CarDto | null;
    loading: boolean;
  };
  submitting: boolean;
}

const initialCarDetailsState: CarDetailsStateModel = {
  currentCar: {
    item: null,
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
  private readonly _navHistory = inject(NavigationHistoryService);
  private readonly _maintenanceService = inject(MaintenanceRecordService);

  constructor(
    private readonly _carService: CarService,
    private _navCtrl: NavController,
    private _toastCtrl: ToastController,
    private readonly _transloco: TranslocoService,
  ) {}

  @Selector()
  static currentCar(state: CarDetailsStateModel): CarDto | null | undefined {
    return state.currentCar.item;
  }

  @Selector()
  static loading(state: CarDetailsStateModel): boolean {
    return state.currentCar.loading;
  }

  @Selector()
  static submitting(state: CarDetailsStateModel): boolean {
    return state.submitting;
  }

  @Action(CarDetailsActions.LoadCurrentCar)
  loadCurrentCar(
    { dispatch }: StateContext<CarDetailsStateModel>,
    { id }: CarDetailsActions.LoadCurrentCar,
  ) {
    this._carService
      .carControllerGetCar({ id })
      .pipe(take(1))
      .subscribe({
        next: response =>
          dispatch(new CarDetailsActions.LoadCurrentCarSuccess(response)),
        error: err => dispatch(new CarDetailsActions.LoadCurrentCarError(err)),
      });
  }

  @Action(CarDetailsActions.LoadCurrentCarSuccess)
  loadCurrentCarSuccess(
    { patchState }: StateContext<CarDetailsStateModel>,
    { response }: CarDetailsActions.LoadCurrentCarSuccess,
  ) {
    patchState({
      currentCar: {
        item: response,
        loading: false,
      },
    });
  }

  @Action(CarDetailsActions.LoadCurrentCarError)
  loadCurrentCarError(
    { patchState }: StateContext<CarDetailsStateModel>,
    { err }: CarDetailsActions.LoadCurrentCarError,
  ) {
    console.error('Error loading car:', err);
    patchState({
      currentCar: {
        item: null,
        loading: false,
      },
    });
  }

  /**
   * The backend mirrors a car's last-oil-change fields into a real ENGINE_OIL maintenance record
   * (createCar / updateCar), which is what the Plan counts from. The bootstrap `maintenance` map
   * (read by the Plan) doesn't know about it, so pull that car's records and patch them in —
   * otherwise the Engine oil bar only appears after a page reload. Best-effort.
   */
  private _refreshBootstrapRecordsForOil(car: CarDto, dispatch: StateContext<CarDetailsStateModel>['dispatch']): void {
    if (!car.last_oil_service_date && car.last_oil_service_mileage == null) return;
    this._maintenanceService
      .maintenanceRecordControllerGetMaintenanceRecordsByCarId({ carId: String(car.id) })
      .pipe(take(1))
      .subscribe({
        next: records => dispatch(new BootstrapActions.PatchCarMaintenance(car.id, records)),
        error: () => {},
      });
  }

  @Action(CarDetailsActions.CreateCar)
  createCar(
    { dispatch, patchState }: StateContext<CarDetailsStateModel>,
    { car, navigateOnSuccess }: CarDetailsActions.CreateCar,
  ) {
    patchState({ submitting: true });
    this._carService
      .carControllerCreateCar({ body: car })
      .pipe(take(1))
      .subscribe({
        next: createdCar =>
          dispatch(
            new CarDetailsActions.CreateCarSuccess(
              createdCar,
              navigateOnSuccess,
            ),
          ),
        error: err => dispatch(new CarDetailsActions.CreateCarError(err)),
      });
  }

  @Action(CarDetailsActions.CreateCarSuccess)
  async createCarSuccess(
    { patchState, dispatch }: StateContext<CarDetailsStateModel>,
    { car, navigateOnSuccess }: CarDetailsActions.CreateCarSuccess,
  ) {
    // Set as the current car (not just injected into the list) so the car hub page this
    // navigates to below already has data to render on arrival — no "car not found"/empty
    // flash while its own loadCurrentCar() request is still in flight.
    patchState({ submitting: false, currentCar: { item: car, loading: false } });
    dispatch(new CarListActions.InjectCar(car));
    this._refreshBootstrapRecordsForOil(car, dispatch);
    const toast = await this._toastCtrl.create({
      message: this._transloco.translate('cars.toast.createSuccess'),
      duration: 2500,
      color: 'success',
      position: 'top',
    });
    await toast.present();
    if (navigateOnSuccess) {
      // Land on the new car's own hub instead of back on the garage (replaceCurrent drops
      // the create form from history — see NavigationHistoryService) — "save & add another"
      // (navigateOnSuccess === false) stays on the form, unaffected.
      this._navHistory.replaceCurrent(`${CARS_ROUTES.details.fullPath}/${car.id}`);
    }
  }

  @Action(CarDetailsActions.CreateCarError)
  async createCarError(
    { patchState }: StateContext<CarDetailsStateModel>,
    { err }: CarDetailsActions.CreateCarError,
  ) {
    patchState({ submitting: false });
    console.error('Error creating car:', err);
    const message = this._translateCarError(err);
    const toast = await this._toastCtrl.create({
      message,
      duration: 4000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

  @Action(CarDetailsActions.UpdateCar)
  updateCar(
    { dispatch, patchState }: StateContext<CarDetailsStateModel>,
    { car, navigateOnSuccess }: CarDetailsActions.UpdateCar,
  ) {
    patchState({ submitting: true });
    this._carService
      .carControllerUpdateCar({ body: car })
      .pipe(take(1))
      .subscribe({
        next: updatedCar =>
          dispatch(
            new CarDetailsActions.UpdateCarSuccess(
              updatedCar,
              navigateOnSuccess,
            ),
          ),
        error: err => dispatch(new CarDetailsActions.UpdateCarError(err)),
      });
  }

  @Action(CarDetailsActions.UpdateCarSuccess)
  async updateCarSuccess(
    { patchState, dispatch }: StateContext<CarDetailsStateModel>,
    { car, navigateOnSuccess }: CarDetailsActions.UpdateCarSuccess,
  ) {
    patchState({
      submitting: false,
      currentCar: { item: car, loading: false },
    });
    dispatch(new CarListActions.UpdateCarInList(car));
    this._refreshBootstrapRecordsForOil(car, dispatch);
    const toast = await this._toastCtrl.create({
      message: this._transloco.translate('cars.toast.updateSuccess'),
      duration: 2500,
      color: 'success',
      position: 'top',
    });
    await toast.present();
    if (navigateOnSuccess) {
      this._navHistory.back({ fallback: HAU_ROUTES.cars.fullPath });
    }
  }

  @Action(CarDetailsActions.UpdateCarError)
  async updateCarError(
    { patchState }: StateContext<CarDetailsStateModel>,
    { err }: CarDetailsActions.UpdateCarError,
  ) {
    patchState({ submitting: false });
    console.error('Error updating car:', err);
    const message = this._translateCarError(err);
    const toast = await this._toastCtrl.create({
      message,
      duration: 4000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

  @Action(CarDetailsActions.DeleteCar)
  deleteCar(
    { dispatch, patchState }: StateContext<CarDetailsStateModel>,
    { carId }: CarDetailsActions.DeleteCar,
  ) {
    patchState({ submitting: true });
    this._carService
      .carControllerDeleteCar({ id: carId })
      .pipe(take(1))
      .subscribe({
        next: car => dispatch(new CarDetailsActions.DeleteCarSuccess(car.id)),
        error: err => dispatch(new CarDetailsActions.DeleteCarError(err)),
      });
  }

  @Action(CarDetailsActions.DeleteCarSuccess)
  async deleteCarSuccess(
    { patchState, dispatch }: StateContext<CarDetailsStateModel>,
    { carId }: CarDetailsActions.DeleteCarSuccess,
  ) {
    patchState({ submitting: false });
    dispatch(new CarListActions.RemoveCar(carId));
    const toast = await this._toastCtrl.create({
      message: this._transloco.translate('cars.toast.deleteSuccess'),
      duration: 2500,
      color: 'success',
      position: 'top',
    });
    await toast.present();
    this._navHistory.backAfterDelete(`${CARS_ROUTES.details.fullPath}/${carId}`, {
      fallback: HAU_ROUTES.cars.fullPath,
    });
  }

  @Action(CarDetailsActions.DeleteCarError)
  async deleteCarError(
    { patchState }: StateContext<CarDetailsStateModel>,
    { err }: CarDetailsActions.DeleteCarError,
  ) {
    patchState({ submitting: false });
    const message = err?.error?.message
      ? Array.isArray(err.error.message)
        ? err.error.message.join(', ')
        : err.error.message
      : this._transloco.translate('cars.toast.genericError');
    const toast = await this._toastCtrl.create({
      message,
      duration: 4000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

  @Action(CarDetailsActions.MarkAsSold)
  markAsSold(
    { dispatch, patchState }: StateContext<CarDetailsStateModel>,
    { carId }: CarDetailsActions.MarkAsSold,
  ) {
    patchState({ submitting: true });
    this._carService
      .carControllerMarkAsSold({ id: carId })
      .pipe(take(1))
      .subscribe({
        next: car => dispatch(new CarDetailsActions.MarkAsSoldSuccess(car)),
        error: err => dispatch(new CarDetailsActions.MarkAsSoldError(err)),
      });
  }

  @Action(CarDetailsActions.MarkAsSoldSuccess)
  async markAsSoldSuccess(
    { patchState, dispatch }: StateContext<CarDetailsStateModel>,
    { car }: CarDetailsActions.MarkAsSoldSuccess,
  ) {
    patchState({ submitting: false });
    dispatch(new CarListActions.UpdateCarInList(car));
    const toast = await this._toastCtrl.create({
      message: this._transloco.translate('cars.toast.markSoldSuccess'),
      duration: 2500,
      color: 'success',
      position: 'top',
    });
    await toast.present();
    this._navCtrl.navigateRoot([HAU_ROUTES.cars.fullPath]);
  }

  @Action(CarDetailsActions.MarkAsSoldError)
  async markAsSoldError(
    { patchState }: StateContext<CarDetailsStateModel>,
    { err }: CarDetailsActions.MarkAsSoldError,
  ) {
    patchState({ submitting: false });
    const message = err?.error?.message
      ? Array.isArray(err.error.message)
        ? err.error.message.join(', ')
        : err.error.message
      : this._transloco.translate('cars.toast.genericError');
    const toast = await this._toastCtrl.create({
      message,
      duration: 4000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

  // Also handles SessionReset (dispatched by AuthService on login/logout/context
  // switch) so a new user/context never inherits the previously open car.
  @Action([CarDetailsActions.ClearCurrentCar, SessionReset])
  clearCurrentCar({ patchState }: StateContext<CarDetailsStateModel>) {
    patchState({ currentCar: { item: null, loading: false } });
  }

  @Action(CarDetailsActions.RestoreCar)
  restoreCar(
    { dispatch, patchState }: StateContext<CarDetailsStateModel>,
    { carId }: CarDetailsActions.RestoreCar,
  ) {
    patchState({ submitting: true });
    this._carService
      .carControllerRestore({ id: carId })
      .pipe(take(1))
      .subscribe({
        next: car => dispatch(new CarDetailsActions.RestoreCarSuccess(car)),
        error: err => dispatch(new CarDetailsActions.RestoreCarError(err)),
      });
  }

  @Action(CarDetailsActions.RestoreCarSuccess)
  async restoreCarSuccess(
    { patchState, dispatch }: StateContext<CarDetailsStateModel>,
    { car }: CarDetailsActions.RestoreCarSuccess,
  ) {
    patchState({ submitting: false });
    dispatch(new CarListActions.UpdateCarInList(car));
    const toast = await this._toastCtrl.create({
      message: this._transloco.translate('cars.toast.restoreSuccess'),
      duration: 2500,
      color: 'success',
      position: 'top',
    });
    await toast.present();
    this._navCtrl.navigateRoot([HAU_ROUTES.cars.fullPath]);
  }

  @Action(CarDetailsActions.RestoreCarError)
  async restoreCarError(
    { patchState }: StateContext<CarDetailsStateModel>,
    { err }: CarDetailsActions.RestoreCarError,
  ) {
    patchState({ submitting: false });
    const message = err?.error?.message
      ? Array.isArray(err.error.message)
        ? err.error.message.join(', ')
        : err.error.message
      : this._transloco.translate('cars.toast.genericError');
    const toast = await this._toastCtrl.create({
      message,
      duration: 4000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

  private _translateCarError(err: any): string {
    const code = err?.error?.code;
    const codeToKey: Record<string, string> = {
      // No CAR_NICKNAME_CONFLICT anymore — nicknames are private per viewer now
      // (see CarUserNickname), so two people's labels never "conflict".
      CAR_VIN_CONFLICT: 'cars.toast.vinConflict',
      CAR_ORG_PLATE_CONFLICT: 'cars.toast.orgPlateConflict',
    };
    if (code && codeToKey[code]) {
      return this._transloco.translate(codeToKey[code]);
    }
    if (err?.error?.message) {
      return Array.isArray(err.error.message)
        ? err.error.message.join(', ')
        : err.error.message;
    }
    return this._transloco.translate('cars.toast.genericError');
  }
}
