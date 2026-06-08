import { inject, Injectable } from '@angular/core';
import { CarDto, CreateMaintenanceRecordDto, MaintenanceRecordDto } from '@hau/autogenapi/models';
import { CarService, MaintenanceRecordService } from '@hau/autogenapi/services';
import { MaintenanceActions } from '@hau/features/maintenance/state/maintenance.actions';
import { ToastController } from '@ionic/angular/standalone';
import { TranslocoService } from '@ngneat/transloco';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, forkJoin, of, switchMap, take, tap } from 'rxjs';

export interface MaintenanceStateModel {
  cars: CarDto[];
  records: MaintenanceRecordDto[];
  selectedCarId: number | null;
  loading: boolean;
  submitting: boolean;
}

const defaults: MaintenanceStateModel = {
  cars: [],
  records: [],
  selectedCarId: null,
  loading: false,
  submitting: false,
};

@State<MaintenanceStateModel>({ name: 'maintenance', defaults })
@Injectable()
export class MaintenanceState {
  private readonly _carService = inject(CarService);
  private readonly _maintenanceService = inject(MaintenanceRecordService);
  private readonly _toastCtrl = inject(ToastController);
  private readonly _transloco = inject(TranslocoService);

  @Selector()
  static cars(s: MaintenanceStateModel): CarDto[] { return s.cars; }

  @Selector()
  static records(s: MaintenanceStateModel): MaintenanceRecordDto[] { return s.records; }

  @Selector()
  static selectedCarId(s: MaintenanceStateModel): number | null { return s.selectedCarId; }

  @Selector()
  static loading(s: MaintenanceStateModel): boolean { return s.loading; }

  @Selector()
  static submitting(s: MaintenanceStateModel): boolean { return s.submitting; }

  @Selector()
  static selectedCar(s: MaintenanceStateModel): CarDto | null {
    return s.cars.find(c => c.id === s.selectedCarId) ?? null;
  }

  @Selector()
  static recordsForSelectedCar(s: MaintenanceStateModel): MaintenanceRecordDto[] {
    if (!s.selectedCarId) return [];
    return s.records.filter(r => r.car_id === s.selectedCarId);
  }

  @Action(MaintenanceActions.LoadAll)
  loadAll({ patchState, dispatch }: StateContext<MaintenanceStateModel>) {
    patchState({ loading: true });

    return this._carService.carControllerGetAllCars().pipe(
      take(1),
      switchMap(cars => {
        if (cars.length === 0) {
          return of({ cars, records: [] as MaintenanceRecordDto[] });
        }
        return forkJoin(
          cars.map(car =>
            this._maintenanceService.maintenanceRecordControllerGetMaintenanceRecordsByCarId({ carId: String(car.id) }).pipe(
              catchError(() => of([] as MaintenanceRecordDto[])),
            ),
          ),
        ).pipe(
          switchMap(recordArrays => of({ cars, records: recordArrays.flat() })),
        );
      }),
      tap({
        next: ({ cars, records }) => dispatch(new MaintenanceActions.LoadAllSuccess(cars, records)),
        error: () => dispatch(new MaintenanceActions.LoadAllError()),
      }),
    );
  }

  @Action(MaintenanceActions.LoadAllSuccess)
  loadAllSuccess({ patchState, getState }: StateContext<MaintenanceStateModel>, { cars, records }: MaintenanceActions.LoadAllSuccess) {
    const currentSelectedId = getState().selectedCarId;
    const activeCars = cars.filter(c => c.status === 'ACTIVE');
    const selectedCarId = currentSelectedId
      ? (activeCars.find(c => c.id === currentSelectedId) ? currentSelectedId : (activeCars[0]?.id ?? null))
      : (activeCars[0]?.id ?? null);
    patchState({ cars: activeCars, records, selectedCarId, loading: false });
  }

  @Action(MaintenanceActions.LoadAllError)
  loadAllError({ patchState }: StateContext<MaintenanceStateModel>) {
    patchState({ loading: false });
  }

  @Action(MaintenanceActions.SelectCar)
  selectCar({ patchState }: StateContext<MaintenanceStateModel>, { carId }: MaintenanceActions.SelectCar) {
    patchState({ selectedCarId: carId });
  }

  @Action(MaintenanceActions.CreateRecord)
  createRecord({ patchState, dispatch }: StateContext<MaintenanceStateModel>, { dto }: MaintenanceActions.CreateRecord) {
    patchState({ submitting: true });
    return this._maintenanceService.maintenanceRecordControllerCreateMaintenanceRecord({ body: dto as CreateMaintenanceRecordDto }).pipe(
      take(1),
      tap({
        next: (record) => dispatch(new MaintenanceActions.CreateRecordSuccess(record)),
        error: () => dispatch(new MaintenanceActions.CreateRecordError()),
      }),
    );
  }

  @Action(MaintenanceActions.CreateRecordSuccess)
  async createRecordSuccess({ patchState, getState }: StateContext<MaintenanceStateModel>, { record }: MaintenanceActions.CreateRecordSuccess) {
    patchState({ submitting: false, records: [...getState().records, record] });
    const toast = await this._toastCtrl.create({
      message: this._transloco.translate('maintenance.toast.createSuccess'),
      duration: 2500,
      color: 'success',
      position: 'top',
    });
    await toast.present();
  }

  @Action(MaintenanceActions.CreateRecordError)
  async createRecordError({ patchState }: StateContext<MaintenanceStateModel>) {
    patchState({ submitting: false });
    const toast = await this._toastCtrl.create({
      message: this._transloco.translate('maintenance.toast.createError'),
      duration: 3000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

  @Action(MaintenanceActions.DeleteRecord)
  deleteRecord({ dispatch, getState, patchState }: StateContext<MaintenanceStateModel>, { id }: MaintenanceActions.DeleteRecord) {
    return this._maintenanceService.maintenanceRecordControllerDeleteMaintenanceRecord({ id: String(id) }).pipe(
      take(1),
      tap({
        next: () => dispatch(new MaintenanceActions.DeleteRecordSuccess(id)),
        error: () => {},
      }),
    );
  }

  @Action(MaintenanceActions.DeleteRecordSuccess)
  deleteRecordSuccess({ patchState, getState }: StateContext<MaintenanceStateModel>, { id }: MaintenanceActions.DeleteRecordSuccess) {
    patchState({ records: getState().records.filter(r => r.id !== id) });
  }
}
