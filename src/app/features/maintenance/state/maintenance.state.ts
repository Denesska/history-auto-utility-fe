import { inject, Injectable } from '@angular/core';
import { CarDto, CreateMaintenanceRecordDto, MaintenanceRecordDto } from '@hau/autogenapi/models';
import { CarService, MaintenanceRecordService } from '@hau/autogenapi/services';
import { MaintenanceRecordAllApiService } from '@hau/autogenapi/services/maintenance-record-all.service';
import { MaintenanceActions } from '@hau/features/maintenance/state/maintenance.actions';
import { _HydrateDependentStates } from '@hau/shared/state/bootstrap/bootstrap.state';
import { ToastController } from '@ionic/angular/standalone';
import { TranslocoService } from '@ngneat/transloco';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, forkJoin, of, take, tap } from 'rxjs';

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
  private readonly _maintenanceAllService = inject(MaintenanceRecordAllApiService);
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

  @Action(MaintenanceActions.HydrateFromBootstrap)
  hydrateFromBootstrap(
    { patchState, getState }: StateContext<MaintenanceStateModel>,
    { cars, maintenance }: MaintenanceActions.HydrateFromBootstrap,
  ) {
    this._applyData(patchState, getState, cars, Object.values(maintenance).flat());
  }

  @Action(_HydrateDependentStates)
  hydrateFromBootstrapEvent(
    { patchState, getState }: StateContext<MaintenanceStateModel>,
    { ownedCars, maintenance }: _HydrateDependentStates,
  ) {
    this._applyData(patchState, getState, ownedCars, Object.values(maintenance).flat());
  }

  @Action(MaintenanceActions.LoadAll)
  loadAll({ patchState, dispatch }: StateContext<MaintenanceStateModel>) {
    patchState({ loading: true });

    return forkJoin([
      this._carService.carControllerGetAllCars(),
      this._maintenanceAllService.getAllMaintenanceRecords().pipe(catchError(() => of([] as MaintenanceRecordDto[]))),
    ]).pipe(
      take(1),
      tap({
        next: ([cars, records]) => dispatch(new MaintenanceActions.LoadAllSuccess(cars, records)),
        error: () => dispatch(new MaintenanceActions.LoadAllError()),
      }),
    );
  }

  @Action(MaintenanceActions.LoadAllSuccess)
  loadAllSuccess({ patchState, getState }: StateContext<MaintenanceStateModel>, { cars, records }: MaintenanceActions.LoadAllSuccess) {
    this._applyData(patchState, getState, cars, records);
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
        next: (record) => dispatch(new MaintenanceActions.CreateRecordSuccess(record as unknown as MaintenanceRecordDto)),
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
  deleteRecord({ dispatch }: StateContext<MaintenanceStateModel>, { id }: MaintenanceActions.DeleteRecord) {
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

  private _applyData(
    patchState: StateContext<MaintenanceStateModel>['patchState'],
    getState: StateContext<MaintenanceStateModel>['getState'],
    cars: CarDto[],
    records: MaintenanceRecordDto[],
  ): void {
    const activeCars = cars.filter(c => !c.status || c.status === 'ACTIVE');
    const currentSelectedId = getState().selectedCarId;
    const selectedCarId = currentSelectedId
      ? (activeCars.find(c => c.id === currentSelectedId) ? currentSelectedId : (activeCars[0]?.id ?? null))
      : (activeCars[0]?.id ?? null);
    patchState({ cars: activeCars, records, selectedCarId, loading: false });
  }
}
