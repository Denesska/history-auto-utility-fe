import { computed, Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map } from 'rxjs';
import { CarDto } from '@hau/autogenapi/models';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';

/**
 * Whether the current session (personal or business) has exactly one active car — the
 * "single car" mode that turns the Garage destination into "My car" and lands the user
 * straight on it (see core/navigation/FEATURE.md). Sourced from `BootstrapFacade` (owned +
 * personally-shared cars, excluding SOLD) rather than `CarListFacade` so this stays a `core/`
 * service — `core/` must never import a feature, not even `features/cars` (see "Feature
 * boundaries" in the frontend CLAUDE.md) — duplicating the same owned/shared/SOLD filter
 * `MainComponent` already applies for its own vehicle counts.
 */
@Injectable({ providedIn: 'root' })
export class SingleCarService {
  private readonly _bootstrapFacade = inject(BootstrapFacade);

  private readonly _activeCars = toSignal(
    combineLatest([
      this._bootstrapFacade.ownedCars$,
      this._bootstrapFacade.sharedCars$,
    ]).pipe(
      map(([owned, shared]) => [
        ...owned.filter(c => c.status !== 'SOLD'),
        ...shared.map(e => e.car).filter(c => c.status !== 'SOLD'),
      ]),
    ),
    { initialValue: [] as CarDto[] },
  );

  /** Every active (non-SOLD) car accessible in this session — owned + shared with you. */
  readonly activeCars = this._activeCars;

  /** True once bootstrap has resolved exactly one active car. */
  readonly isSingleCarMode = computed(() => this._activeCars().length === 1);

  /** The one active car in single-car mode, else `null` (0, or 2+, cars). */
  readonly singleCar = computed<CarDto | null>(() => {
    const cars = this._activeCars();
    return cars.length === 1 ? cars[0] : null;
  });
}
