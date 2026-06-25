import { Injectable } from '@angular/core';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { filter, pairwise, take } from 'rxjs';

export interface PullToRefreshHooks {
  before?: () => void;
  after?: () => void;
}

@Injectable({ providedIn: 'root' })
export class PullToRefreshService {
  constructor(private readonly _bootstrapFacade: BootstrapFacade) {}

  refresh(event: Event, hooks?: PullToRefreshHooks): void {
    hooks?.before?.();
    this._bootstrapFacade.forceRefresh();
    this._bootstrapFacade.bootstrapping$.pipe(
      pairwise(),
      filter(([prev, curr]) => prev && !curr),
      take(1),
    ).subscribe(() => {
      hooks?.after?.();
      void (event.target as HTMLIonRefresherElement).complete();
    });
  }
}
