import { computed, inject, Injectable, Injector, isSignal, Signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, from, map, Observable, of, switchMap } from 'rxjs';
import { ContextScope, fitsContext } from '@hau/core/context/context-scope';
import { FeatureKey } from '@hau/core/features/feature-keys';
import { FeatureService } from '@hau/core/features/feature.service';
import { SessionContextService } from '@hau/core/session/session-context.service';
import {
  CAR_ACTIONS,
  CAR_DEADLINE_SOURCES,
  CAR_TABS,
  CarActionContribution,
  CarDeadlineSource,
  CarTabContribution,
} from '@hau/core/car-page/car-page.contributions';
import { CarDeadlineItem } from '@hau/shared/utils/deadline-items.util';

/**
 * Resolves the car page's tabs/"add" actions that a feature contributed (`provideCarTabs()` /
 * `provideCarActions()` at the composition root), filtered by the current session context and
 * org role and by the per-organization feature switches, sorted by `order`. See
 * `core/car-page/FEATURE.md`.
 *
 * Not `providedIn: 'root'` on purpose: it (and the `CAR_TABS`/`CAR_ACTIONS` contributions it
 * reads) are provided explicitly in `features/main/main.routes.ts`'s root route `providers`,
 * same convention as `CarListFacade`/`CarWishesFacade` — a root-scoped service can't see a
 * route-level `providers` array's tokens (child injectors are invisible to ancestors), so this
 * has to be provided at (or below) the same level the contributions are registered at.
 */
@Injectable()
export class CarPageContributionsService {
  private readonly _tabs = (inject(CAR_TABS, { optional: true }) ?? []).flat();
  private readonly _actions = (inject(CAR_ACTIONS, { optional: true }) ?? []).flat();
  private readonly _deadlineSources: CarDeadlineSource[] = (inject(CAR_DEADLINE_SOURCES, { optional: true }) ?? []).flat();
  private readonly _sessionContext = inject(SessionContextService);
  private readonly _features = inject(FeatureService);
  private readonly _injector = inject(Injector);

  /**
   * Static (session-context/role/feature-switch) list, hub-grid order — no per-car `hubVisible`
   * check. A `computed()`, not a plain method: `_fits` reads `FeatureService.isEnabled()` and
   * `SessionContextService.context()`, both signals, so this must stay reactive to them rather
   * than being read once — bootstrap (and so `enabledFeatures()`) can still be loading, or not
   * yet reflect a freshly-toggled switch, at the moment a car page first subscribes. A plain
   * method called once (as `visibleTabs$`/`visibleActions$` used to) froze that early, possibly
   * all-enabled, snapshot forever; this recomputes whenever either signal changes.
   *
   * **Feature-tagged entries are held back entirely until `FeatureService.loaded()` is true.**
   * `isEnabled()` treats "not loaded yet" as enabled (core/features/FEATURE.md's documented
   * default, so routes/menu items don't flash-hide while bootstrap is in flight) — but that
   * default is wrong for anything that *fires a request* off a tab being shown, which is exactly
   * what a counted tab's `count()` closure does (`CarNotesFacade.loadNotes`, `.loadWishlist`,
   * `BlogService.getEntries`). Showing the tab a moment early is tolerable; firing its request a
   * moment early against a feature that turns out to be disabled is not — it 403s and trips
   * `authErrorInterceptor`'s toast. So unlike every other `feature`-gated UI in the app, a
   * `feature`-tagged tab/action here waits for `loaded()` before ever appearing; a `feature: null`
   * one (Partajare, Sofer) is never held back, since it isn't behind a switch at all.
   */
  private readonly _staticTabs = computed(() => {
    const loaded = this._features.loaded();
    return this._tabs
      .filter(tab => (tab.feature ? loaded && this._fits(tab.scope, tab.orgRoles, tab.feature) : this._fits(tab.scope, tab.orgRoles, tab.feature)))
      .sort((a, b) => a.order - b.order);
  });

  private readonly _staticActions = computed(() => {
    const loaded = this._features.loaded();
    return this._actions
      .filter(action => (action.feature ? loaded && this._fits(action.scope, undefined, action.feature) : this._fits(action.scope, undefined, action.feature)))
      .sort((a, b) => a.order - b.order);
  });

  /**
   * Deadline sources, same "held back until loaded" rule as `_staticTabs`/`_staticActions` —
   * `items$` fetches its own feature's data, so it must never be subscribed for a disabled
   * (or not-yet-settled) feature. Unlike tabs/actions, a deadline source has no `scope`/
   * `orgRoles` of its own (the deadlines card only ever shows the current car's own data).
   */
  private readonly _visibleDeadlineSources = computed(() => {
    const loaded = this._features.loaded();
    return this._deadlineSources.filter(source => loaded && this._features.isEnabled(source.feature));
  });

  /**
   * The car hub's tile grid for `carId`: the static list, further narrowed by each tab's
   * `hubVisible` (defaults to always-visible — see that field's doc). Re-derives whenever the
   * static list changes (feature switches settling/changing) or a `hubVisible` check re-emits.
   */
  visibleTabs$(carId: number): Observable<CarTabContribution[]> {
    return toObservable(this._staticTabs, { injector: this._injector }).pipe(
      switchMap(candidates => {
        if (!candidates.length) return of([]);
        return combineLatest(
          candidates.map(tab =>
            (tab.hubVisible ? tab.hubVisible(carId, this._injector) : of(true)).pipe(
              map(ok => (ok ? tab : null)),
            ),
          ),
        );
      }),
      map(results => results.filter((t): t is CarTabContribution => t != null)),
    );
  }

  /**
   * Desktop sidebar's per-car subnav: the static list, filtered to `inSidebar !== false` and
   * ordered by `sidebarOrder` — no `hubVisible` check (the sidebar never applied the hub's
   * per-car role gate; see `inSidebar`'s doc). A plain getter is fine here: `main.component.html`
   * re-reads it every change-detection cycle (same as its other per-car getters), so it keeps up
   * with the signal on its own.
   */
  visibleSidebarTabs(): CarTabContribution[] {
    return this._staticTabs()
      .filter(tab => tab.inSidebar !== false)
      .sort((a, b) => (a.sidebarOrder ?? a.order) - (b.sidebarOrder ?? b.order));
  }

  /** The "…" sheet / quick-button actions visible right now — reactive, see `visibleTabs$`'s doc. */
  visibleActions$(): Observable<CarActionContribution[]> {
    return toObservable(this._staticActions, { injector: this._injector });
  }

  /**
   * Normalizes a tab's `count` (Signal or Observable) to an Observable, or `of(null)` when it has
   * none. **Never invokes `tab.count()` for a `feature`-tagged tab until the switches are loaded
   * AND that feature is enabled** (`FeatureService.isEnabled$()`, which itself waits on
   * `whenLoaded$()`) — a `count()` closure is exactly the kind of thing core/features/FEATURE.md
   * means by "anything that fires a feature's API request": `countOf` is normally only called for
   * a tab `visibleTabs$` already decided to show (which, for a `feature`-tagged tab, already means
   * loaded+enabled — see `_staticTabs`'s doc), but this second gate makes that invariant hold even
   * if a caller ever invokes `countOf` directly, and is where the fix actually lives for the
   * disabled case (`isEnabled$` emits `false`, so the request is never made at all; the UI just
   * never gets a count for a tab it isn't showing anyway).
   */
  countOf(tab: CarTabContribution, carId: number): Observable<number | null> {
    if (!tab.count) return of(null);
    const resolve = (): Observable<number | null> => {
      const result = tab.count!(carId);
      return isSignal(result)
        ? toObservable(result as Signal<number | null>, { injector: this._injector })
        : result;
    };
    if (!tab.feature) return resolve();
    return this._features.isEnabled$(tab.feature).pipe(switchMap(enabled => (enabled ? resolve() : of(null))));
  }

  /** Same normalize-and-gate pattern as `countOf`, for `CarTabContribution.subLabel`. */
  subLabelOf(tab: CarTabContribution, carId: number): Observable<{ text: string; danger?: boolean } | null> {
    if (!tab.subLabel) return of(null);
    const resolve = () => tab.subLabel!(carId);
    if (!tab.feature) return resolve();
    return this._features.isEnabled$(tab.feature).pipe(switchMap(enabled => (enabled ? resolve() : of(null))));
  }

  /**
   * The car hub's "Stare & scadențe" card for `carId`: every visible source's items, merged
   * into one flat list (ordering/dismissed-keys are applied by the caller — see
   * `cars-details.component.ts`). Re-derives whenever the visible source list changes
   * (feature switches settling/changing), same reactivity rule as `visibleTabs$`.
   */
  deadlines$(carId: number): Observable<CarDeadlineItem[]> {
    return toObservable(this._visibleDeadlineSources, { injector: this._injector }).pipe(
      switchMap(sources => (sources.length ? combineLatest(sources.map(source => source.items$(carId))) : of([]))),
      map(lists => lists.flat()),
    );
  }

  /** Card tap: delegates to the item's own source — see `CarDeadlineSource.open`. */
  openDeadlineItem(item: CarDeadlineItem, injector: Injector): void {
    this._deadlineSources.find(source => source.id === item.sourceId)?.open(item, injector);
  }

  /**
   * Delegates to the item's own source's `dismiss`, normalized to an `Observable<void>` — or
   * `null` when that source has none (a document deadline), so the caller falls back to its
   * own generic dismissed-keys mechanism. See `CarDeadlineSource.dismiss`.
   */
  dismissDeadlineItem(item: CarDeadlineItem, injector: Injector): Observable<void> | null {
    const source = this._deadlineSources.find(s => s.id === item.sourceId);
    if (!source?.dismiss) return null;
    const result = source.dismiss(item, injector);
    return result instanceof Observable ? result : from(Promise.resolve(result));
  }

  private _fits(
    scope: ContextScope[] | undefined,
    orgRoles: string[] | undefined,
    feature: FeatureKey | null | undefined,
  ): boolean {
    if (!scope && !feature) return true;
    return fitsContext(
      { scope: scope ?? ['personal', 'business'], orgRoles, feature: feature ?? undefined },
      this._sessionContext,
      this._features,
    );
  }
}
