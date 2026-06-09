import { Injectable } from '@angular/core';
import { CarDto, DocumentDto, MaintenanceRecordDto, SharedCarDto } from '@hau/autogenapi/models';
import { BootstrapSharedCarEntry } from '@hau/autogenapi/models/bootstrap-response-dto';
import { BootstrapActions } from '@hau/shared/state/bootstrap/bootstrap.actions';
import { BootstrapState } from '@hau/shared/state/bootstrap/bootstrap.state';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BootstrapFacade {
  readonly bootstrapped$: Observable<boolean> = this._store.select(BootstrapState.bootstrapped);
  readonly bootstrapping$: Observable<boolean> = this._store.select(BootstrapState.bootstrapping);
  readonly ownedCars$: Observable<CarDto[]> = this._store.select(BootstrapState.ownedCars);
  readonly sharedCars$: Observable<BootstrapSharedCarEntry[]> = this._store.select(BootstrapState.sharedCars);
  readonly pendingInvites$: Observable<SharedCarDto[]> = this._store.select(BootstrapState.pendingInvites);
  readonly documents$: Observable<Record<number, DocumentDto[]>> = this._store.select(BootstrapState.documents);
  readonly maintenance$: Observable<Record<number, MaintenanceRecordDto[]>> = this._store.select(BootstrapState.maintenance);

  constructor(private readonly _store: Store) {}

  bootstrap(): void {
    this._store.dispatch(new BootstrapActions.Bootstrap());
  }

  forceRefresh(): void {
    this._store.dispatch(new BootstrapActions.BootstrapForce());
  }
}
