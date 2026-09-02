import { Injectable } from '@angular/core';
import { CarAccessDto, CarAccessRole } from '@hau/autogenapi/models';
import { CarAccessActions } from '@hau/features/cars/state/car-access/car-access.actions';
import { CarAccessState } from '@hau/features/cars/state/car-access/car-access.state';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';

@Injectable()
export class CarAccessFacade {
    @Select(CarAccessState.loading) loading$!: Observable<boolean>;
    @Select(CarAccessState.inviting) inviting$!: Observable<boolean>;

    constructor(
        private readonly _store: Store,
        private readonly _bootstrapFacade: BootstrapFacade,
    ) {}

    entriesFor(carId: number): Observable<CarAccessDto[]> {
        return this._store.select(CarAccessState.entriesForCar(carId));
    }

    loadAccess(carId: number): void {
        this._store.dispatch(new CarAccessActions.LoadAccess(carId));
    }

    inviteUser(carId: number, email: string, role: CarAccessRole) {
        return this._store.dispatch(new CarAccessActions.InviteUser(carId, email, role));
    }

    changeRole(carId: number, targetUserId: number, role: CarAccessRole) {
        return this._store.dispatch(new CarAccessActions.ChangeRole(carId, targetUserId, role));
    }

    removeAccess(carId: number, entryId: number, targetUserId: number) {
        return this._store.dispatch(new CarAccessActions.RemoveAccess(carId, entryId, targetUserId));
    }

    // Accepting a share changes the current user's own sharedCars list, which
    // lives in BootstrapState, not here — force a bootstrap refresh so the rest
    // of the app (sidebar car list, notifications) picks it up too.
    acceptInvitation(carId: number): Observable<void> {
        return this._store.dispatch(new CarAccessActions.AcceptInvitation(carId)).pipe(
            tap(() => this._bootstrapFacade.forceRefresh()),
        );
    }
}
