import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { catchError, EMPTY, map, Observable, throwError } from 'rxjs';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { SessionReset } from '@hau/core/session/session.actions';
import { NavDestination } from '@hau/core/navigation/nav-destinations';
import { NavigationDestinationsService } from '@hau/core/navigation/navigation-destinations.service';
import { NavigationPrefsApiService } from '@hau/core/navigation/navigation-prefs-api.service';
import { SingleCarService } from '@hau/core/navigation/single-car.service';

/** Shown when the user has no saved choice, or every chosen id turned out unavailable. */
const DEFAULT_BOTTOM_BAR_IDS: readonly string[] = ['garage', 'reports', 'journal'];
/** User-chosen bottom-bar slots; Account is always added as a fixed 4th, so 3 + Account split 2|2 around the FAB. */
export const MAX_BOTTOM_BAR_ITEMS = 3;

/**
 * A stored bottom-bar slot id is either a bare destination id (`'garage'`) or, for a `kind:
 * 'car'` destination with an explicit per-slot car, `'<destId>:<carId>'` (e.g. `'documents:143'`)
 * — see "Mobile bottom bar" / per-slot car in core/navigation/FEATURE.md. The backend only
 * validates the shape (`^[a-z][a-z0-9_:-]{0,40}$`), the frontend owns the meaning of the `:`.
 */
export function parseBottomBarId(raw: string): { destId: string; carId: number | null; all: boolean } {
  const sep = raw.indexOf(':');
  if (sep === -1) return { destId: raw, carId: null, all: false };
  const suffix = raw.slice(sep + 1);
  if (suffix === ALL_CARS_SUFFIX) return { destId: raw.slice(0, sep), carId: null, all: true };
  const carId = Number(suffix);
  return { destId: raw.slice(0, sep), carId: Number.isFinite(carId) ? carId : null, all: false };
}

/** Suffix of a slot id meaning "all cars" (`'notes:all'`) — only meaningful for a destination with `allLink`. */
export const ALL_CARS_SUFFIX = 'all';

/** One resolved bottom-bar slot: its destination plus (for a `kind: 'car'` one) the car it opens. */
export interface ResolvedBottomBarEntry {
  /** The exact stored string for this slot (`'documents'` or `'documents:143'`) — a stable `track` key, and what the settings editor seeds itself from. */
  rawId: string;
  destination: NavDestination;
  /**
   * `kind: 'car'` only: the car this slot actually opens — the slot's own stored car if it's
   * still accessible, else the favourite car if accessible, else the first active car, else
   * `null` (no active cars at all). `null` for any other destination (garage/global).
   */
  carId: number | null;
  /** `kind: 'car'` with `allLink` only: the slot opens the destination's global all-cars page (`carId` is then `null`). */
  isAll: boolean;
}

/**
 * Resolves a stored bottom-bar id list (or `null`, meaning "use the defaults") into actual
 * slots — the fallback rule from "Bottom bar" in core/navigation/FEATURE.md. A standalone,
 * side-effect-free function (not a method) so the Settings bottom-bar editor's "Reset to
 * default" button can preview exactly what `null` would resolve to, for the local draft, without
 * calling `setBottomBar(null)` and touching the live, saved preference.
 */
export function resolveBottomBarEntries(
  ids: readonly string[] | null,
  available: readonly NavDestination[],
  activeCars: readonly { id: number }[],
  favoriteId: number | null,
): ResolvedBottomBarEntry[] {
  // Stored car if still active -> favourite if active -> "all" (only for a destination with a
  // global page, and only when there's more than one car to be "all" of) -> first active car.
  const resolveCar = (
    dest: NavDestination,
    storedCarId: number | null,
    storedAll: boolean,
  ): { carId: number | null; isAll: boolean } => {
    const supportsAll = !!dest.allLink && activeCars.length > 1;
    if (storedAll && supportsAll) return { carId: null, isAll: true };
    if (storedCarId != null && activeCars.some(c => c.id === storedCarId)) return { carId: storedCarId, isAll: false };
    if (favoriteId != null && activeCars.some(c => c.id === favoriteId)) return { carId: favoriteId, isAll: false };
    if (supportsAll) return { carId: null, isAll: true };
    return { carId: activeCars[0]?.id ?? null, isAll: false };
  };

  const resolve = (idList: readonly string[]): ResolvedBottomBarEntry[] =>
    idList
      .map((rawId): ResolvedBottomBarEntry | null => {
        const { destId, carId, all } = parseBottomBarId(rawId);
        const destination = available.find(d => d.id === destId);
        if (!destination) return null;
        if (destination.kind !== 'car') return { rawId, destination, carId: null, isAll: false };
        return { rawId, destination, ...resolveCar(destination, carId, all) };
      })
      .filter((e): e is ResolvedBottomBarEntry => !!e);

  let result = ids ? resolve(ids) : [];
  if (!result.length) result = resolve(DEFAULT_BOTTOM_BAR_IDS);
  if (!result.length) result = resolve(['garage']);
  return result.slice(0, MAX_BOTTOM_BAR_ITEMS);
}

/**
 * Holds the current session context's navigation preferences (mobile bottom-bar items,
 * favourite car) as signals, saves changes via `PUT /api/user-settings/navigation`, and resets
 * on `SessionReset` (login/logout/context switch — see core/navigation/FEATURE.md).
 *
 * Not `providedIn: 'root'`: it depends on `NavigationDestinationsService`, which (like
 * `CarPageContributionsService`) is only provided inside `features/main/main.routes.ts`'s root
 * route — a root service can't see a descendant route's providers. Registered there alongside
 * it, so only usable from within the authenticated `/main` subtree, which is the only place
 * navigation prefs matter.
 */
@Injectable()
export class NavigationPreferencesService {
  private readonly _bootstrapFacade = inject(BootstrapFacade);
  private readonly _destinations = inject(NavigationDestinationsService);
  private readonly _api = inject(NavigationPrefsApiService);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _actions = inject(Actions);
  private readonly _singleCar = inject(SingleCarService);

  private readonly _bootstrapNav = toSignal(this._bootstrapFacade.navigation$, { initialValue: null });

  // `undefined` = no optimistic local change yet -> read straight from bootstrap.
  // Local wins once the user acts, so the UI doesn't wait for the next bootstrap round-trip.
  private readonly _localBottomBar = signal<string[] | null | undefined>(undefined);
  private readonly _localFavoriteCarId = signal<number | null | undefined>(undefined);

  // Flips true when the most recent PUT failed — the optimistic local value above still
  // applies either way (same "don't wait for the round trip" rule). The Settings screen watches
  // this (via an `effect()`) to show its own error toast for both setters; `setFavoriteCar`'s
  // other caller (the car hub's star action, `toggleFavorite`) doesn't check it and keeps the
  // original fire-and-forget silence.
  private readonly _saveError = signal(false);
  readonly saveError = this._saveError.asReadonly();

  /** Consumes the current error flag (e.g. right after showing a toast for it). */
  clearSaveError(): void {
    this._saveError.set(false);
  }

  /** Raw chosen bottom-bar ids (1-3), or null = not set (use the defaults). */
  readonly bottomBarIds = computed(() => {
    const local = this._localBottomBar();
    return local !== undefined ? local : (this._bootstrapNav()?.bottom_bar ?? null);
  });

  /** The favourited car for this context, or null = none set / no longer accessible. */
  readonly favoriteCarId = computed(() => {
    const local = this._localFavoriteCarId();
    return local !== undefined ? local : (this._bootstrapNav()?.favorite_car_id ?? null);
  });

  /**
   * The bottom bar's actual ordered slots (garage + whatever the feature registered) — see
   * "Bottom bar" in core/navigation/FEATURE.md for the fallback rule: unknown/hidden/disabled
   * chosen ids are skipped; if nothing is left, fall back to the (also filtered) defaults; if
   * even those are all hidden, the always-visible Garage destination alone. Each `kind: 'car'`
   * slot additionally resolves which car it opens (see `ResolvedBottomBarEntry.carId`'s doc) —
   * the slot's own stored car if still accessible, else the favourite, else "all cars" (destinations with a global page, >1 active cars), else the first active car.
   * The actual resolution is `resolveBottomBarEntries()` (below) — pulled out as a standalone
   * function so the Settings editor's "Reset to default" can preview what `null` resolves to
   * without touching this signal's live `bottomBarIds()` input.
   */
  readonly resolvedBottomBar = computed<ResolvedBottomBarEntry[]>(() =>
    resolveBottomBarEntries(
      this.bottomBarIds(),
      this._destinations.visibleDestinations(),
      this._singleCar.activeCars(),
      this.favoriteCarId(),
    ),
  );

  constructor() {
    this._actions.pipe(ofActionDispatched(SessionReset), takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._localBottomBar.set(undefined);
      this._localFavoriteCarId.set(undefined);
    });
  }

  /** Every destination currently available to pick from (the settings bottom-bar editor's per-slot dropdown). */
  availableDestinations(): NavDestination[] {
    return this._destinations.visibleDestinations();
  }

  isFavorite(carId: number): boolean {
    return this.favoriteCarId() === carId;
  }

  toggleFavorite(carId: number): void {
    this.setFavoriteCar(this.isFavorite(carId) ? null : carId);
  }

  setFavoriteCar(carId: number | null): void {
    this._localFavoriteCarId.set(carId);
    this._saveError.set(false);
    this._api
      .updatePrefs({ favorite_car_id: carId })
      .pipe(catchError(() => { this._saveError.set(true); return EMPTY; }))
      .subscribe();
  }

  /**
   * 1-3 unique ids (optionally `destId:carId`), or null to reset to the defaults. The local
   * (optimistic) state updates synchronously, before the PUT even fires — but unlike every
   * other setter here, this one does **not** self-subscribe: the Settings bottom-bar editor is
   * its only caller (2026-10-05, since that editor moved to an explicit Save button rather than
   * saving on every edit), and it needs to know when the PUT actually settles, to close the
   * panel on success and keep it open with a toast on failure. The returned `Observable` must
   * be subscribed to for the request to actually go out — if another caller ever needs
   * fire-and-forget semantics again, give it its own `.subscribe()` at the call site rather than
   * reintroducing one in here for every caller.
   */
  setBottomBar(ids: string[] | null): Observable<void> {
    this._localBottomBar.set(ids);
    this._saveError.set(false);
    return this._api.updatePrefs({ bottom_bar: ids }).pipe(
      map(() => void 0),
      catchError(err => {
        this._saveError.set(true);
        return throwError(() => err);
      }),
    );
  }
}
