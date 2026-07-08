import { Injectable } from '@angular/core';
import { CarAccessUserDto, CarDto, DocumentDto, MaintenanceRecordDto, SharedCarDto } from '@hau/autogenapi/models';
import { BootstrapSharedCarEntry } from '@hau/autogenapi/models/bootstrap-response-dto';
import { BootstrapApiService } from '@hau/autogenapi/services/bootstrap.service';
import { BootstrapActions } from '@hau/shared/state/bootstrap/bootstrap.actions';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, EMPTY, take, tap } from 'rxjs';

export const BOOTSTRAP_TTL_MS = 5 * 60 * 1000;

export interface BootstrapStateModel {
  bootstrapping: boolean;
  bootstrapped: boolean;
  lastBootstrappedAt: number | null;
  me: CarAccessUserDto | null;
  ownedCars: CarDto[];
  sharedCars: BootstrapSharedCarEntry[];
  pendingInvites: SharedCarDto[];
  documents: Record<number, DocumentDto[]>;
  maintenance: Record<number, MaintenanceRecordDto[]>;
}

const defaults: BootstrapStateModel = {
  bootstrapping: false,
  bootstrapped: false,
  lastBootstrappedAt: null,
  me: null,
  ownedCars: [],
  sharedCars: [],
  pendingInvites: [],
  documents: {},
  maintenance: {},
};

@State<BootstrapStateModel>({ name: 'bootstrap', defaults })
@Injectable()
export class BootstrapState {
  constructor(private readonly bootstrapApi: BootstrapApiService) {}

  @Selector()
  static bootstrapped(s: BootstrapStateModel): boolean { return s.bootstrapped; }

  @Selector()
  static bootstrapping(s: BootstrapStateModel): boolean { return s.bootstrapping; }

  @Selector()
  static me(s: BootstrapStateModel): CarAccessUserDto | null { return s.me; }

  @Selector()
  static ownedCars(s: BootstrapStateModel): CarDto[] { return s.ownedCars; }

  @Selector()
  static sharedCars(s: BootstrapStateModel): BootstrapSharedCarEntry[] { return s.sharedCars; }

  @Selector()
  static pendingInvites(s: BootstrapStateModel): SharedCarDto[] { return s.pendingInvites; }

  @Selector()
  static documents(s: BootstrapStateModel): Record<number, DocumentDto[]> { return s.documents; }

  @Selector()
  static maintenance(s: BootstrapStateModel): Record<number, MaintenanceRecordDto[]> { return s.maintenance; }

  @Action(BootstrapActions.Bootstrap)
  bootstrap({ getState, patchState, dispatch }: StateContext<BootstrapStateModel>) {
    const { bootstrapping, bootstrapped, lastBootstrappedAt } = getState();
    if (bootstrapping) return;
    const fresh = bootstrapped && lastBootstrappedAt !== null && (Date.now() - lastBootstrappedAt < BOOTSTRAP_TTL_MS);
    if (fresh) return;
    patchState({ bootstrapping: true });
    return this._fetch(dispatch);
  }

  @Action(BootstrapActions.BootstrapForce)
  bootstrapForce({ patchState, dispatch }: StateContext<BootstrapStateModel>) {
    patchState({ bootstrapping: true });
    return this._fetch(dispatch);
  }

  @Action(BootstrapActions.BootstrapSuccess)
  bootstrapSuccess(
    { patchState, dispatch }: StateContext<BootstrapStateModel>,
    { me, ownedCars, sharedCars, pendingInvites, documents, maintenance }: BootstrapActions.BootstrapSuccess,
  ) {
    patchState({ bootstrapping: false, bootstrapped: true, lastBootstrappedAt: Date.now(), me, ownedCars, sharedCars, pendingInvites, documents, maintenance });
    dispatch(new _HydrateDependentStates(ownedCars, sharedCars, documents, maintenance));
  }

  @Action(BootstrapActions.BootstrapFailure)
  bootstrapFailure({ patchState }: StateContext<BootstrapStateModel>) {
    patchState({ bootstrapping: false });
  }

  @Action(BootstrapActions.PatchCar)
  patchCar({ getState, patchState }: StateContext<BootstrapStateModel>, { car }: BootstrapActions.PatchCar) {
    patchState({ ownedCars: getState().ownedCars.map(c => c.id === car.id ? car : c) });
  }

  @Action(BootstrapActions.InjectCar)
  injectCar({ getState, patchState }: StateContext<BootstrapStateModel>, { car }: BootstrapActions.InjectCar) {
    patchState({ ownedCars: [...getState().ownedCars, car] });
  }

  @Action(BootstrapActions.RemoveCar)
  removeCar({ getState, patchState }: StateContext<BootstrapStateModel>, { carId }: BootstrapActions.RemoveCar) {
    patchState({ ownedCars: getState().ownedCars.filter(c => c.id !== carId) });
  }

  @Action(BootstrapActions.PatchCarDocuments)
  patchCarDocuments({ getState, patchState }: StateContext<BootstrapStateModel>, { carId, documents }: BootstrapActions.PatchCarDocuments) {
    patchState({ documents: { ...getState().documents, [carId]: documents } });
  }

  @Action(BootstrapActions.PatchCarMaintenance)
  patchCarMaintenance({ getState, patchState }: StateContext<BootstrapStateModel>, { carId, records }: BootstrapActions.PatchCarMaintenance) {
    patchState({ maintenance: { ...getState().maintenance, [carId]: records } });
  }

  private _fetch(dispatch: StateContext<BootstrapStateModel>['dispatch']) {
    return this.bootstrapApi.getInitialData().pipe(
      take(1),
      tap(data => dispatch(new BootstrapActions.BootstrapSuccess(
        data.me, data.ownedCars, data.sharedCars, data.pendingInvites, data.documents, data.maintenance,
      ))),
      catchError(err => {
        dispatch(new BootstrapActions.BootstrapFailure(err));
        return EMPTY;
      }),
    );
  }
}

export class _HydrateDependentStates {
  static readonly type = '[Bootstrap] Hydrate dependent states';
  constructor(
    readonly ownedCars: CarDto[],
    readonly sharedCars: BootstrapSharedCarEntry[],
    readonly documents: Record<number, DocumentDto[]>,
    readonly maintenance: Record<number, MaintenanceRecordDto[]>,
  ) {}
}
