import { inject, Injectable } from '@angular/core';
import { CarAccessDto } from '@hau/autogenapi/models';
import { CarAccessService } from '@hau/autogenapi/services';
import { CarAccessActions } from '@hau/features/cars/state/car-access/car-access.actions';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

export interface CarAccessStateModel {
    entriesByCarId: Record<number, CarAccessDto[]>;
    loading: boolean;
    inviting: boolean;
}

const defaults: CarAccessStateModel = {
    entriesByCarId: {},
    loading: false,
    inviting: false,
};

@State<CarAccessStateModel>({ name: 'carAccess', defaults })
@Injectable()
export class CarAccessState {
    private readonly _carAccessService = inject(CarAccessService);

    @Selector()
    static loading(s: CarAccessStateModel): boolean { return s.loading; }

    @Selector()
    static inviting(s: CarAccessStateModel): boolean { return s.inviting; }

    static entriesForCar(carId: number) {
        return createSelector([CarAccessState], (s: CarAccessStateModel): CarAccessDto[] => s.entriesByCarId[carId] ?? []);
    }

    @Action(CarAccessActions.LoadAccess)
    loadAccess({ patchState, dispatch }: StateContext<CarAccessStateModel>, { carId }: CarAccessActions.LoadAccess) {
        patchState({ loading: true });
        return this._carAccessService.getAccessList({ carId }).pipe(
            tap({
                next: entries => dispatch(new CarAccessActions.LoadAccessSuccess(carId, entries)),
                error: () => dispatch(new CarAccessActions.LoadAccessError(carId)),
            }),
        );
    }

    @Action(CarAccessActions.LoadAccessSuccess)
    loadAccessSuccess(
        { getState, patchState }: StateContext<CarAccessStateModel>,
        { carId, entries }: CarAccessActions.LoadAccessSuccess,
    ) {
        patchState({ entriesByCarId: { ...getState().entriesByCarId, [carId]: entries }, loading: false });
    }

    @Action(CarAccessActions.LoadAccessError)
    loadAccessError({ patchState }: StateContext<CarAccessStateModel>) {
        patchState({ loading: false });
    }

    @Action(CarAccessActions.InviteUser)
    inviteUser(
        { getState, patchState }: StateContext<CarAccessStateModel>,
        { carId, email, role }: CarAccessActions.InviteUser,
    ) {
        patchState({ inviting: true });
        return this._carAccessService.inviteUser({ carId, body: { email, role } }).pipe(
            tap(entry => {
                const existing = getState().entriesByCarId[carId] ?? [];
                patchState({
                    entriesByCarId: { ...getState().entriesByCarId, [carId]: [...existing, entry] },
                    inviting: false,
                });
            }),
        );
    }

    @Action(CarAccessActions.ChangeRole)
    changeRole(
        { getState, patchState }: StateContext<CarAccessStateModel>,
        { carId, targetUserId, role }: CarAccessActions.ChangeRole,
    ) {
        return this._carAccessService.changeRole({ carId, targetUserId, body: { role } }).pipe(
            tap(updated => {
                const existing = getState().entriesByCarId[carId] ?? [];
                patchState({
                    entriesByCarId: { ...getState().entriesByCarId, [carId]: existing.map(e => e.id === updated.id ? updated : e) },
                });
            }),
        );
    }

    @Action(CarAccessActions.RemoveAccess)
    removeAccess(
        { getState, patchState }: StateContext<CarAccessStateModel>,
        { carId, entryId, targetUserId }: CarAccessActions.RemoveAccess,
    ) {
        return this._carAccessService.removeAccess({ carId, targetUserId }).pipe(
            tap(() => {
                const existing = getState().entriesByCarId[carId] ?? [];
                patchState({ entriesByCarId: { ...getState().entriesByCarId, [carId]: existing.filter(e => e.id !== entryId) } });
            }),
        );
    }

    @Action(CarAccessActions.AcceptInvitation)
    acceptInvitation(_ctx: StateContext<CarAccessStateModel>, { carId }: CarAccessActions.AcceptInvitation) {
        return this._carAccessService.acceptInvitation({ carId });
    }
}
