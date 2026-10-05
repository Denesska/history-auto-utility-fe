import { InjectionToken, Injector, Provider, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ContextScope } from '@hau/core/context/context-scope';
import { FeatureKey } from '@hau/core/features/feature-keys';
import { CarDeadlineItem } from '@hau/shared/utils/deadline-items.util';

/**
 * What a feature plugs into the car page's hub grid / desktop sidebar subnav (see
 * `core/car-page/FEATURE.md`). Registered with `provideCarTabs()` at the composition
 * root (`features/main/main.routes.ts`), consumed by `CarPageContributionsService`.
 */
export interface CarTabContribution {
  /** Stable id, also used as the `track` key and the hub tile's CSS state. */
  id: string;
  /** `null` for tabs that aren't behind an organization feature switch (sharing, driver assignment). */
  feature: FeatureKey | null;
  labelKey: string;
  icon: string;
  /** Lower sorts first — matches the hub grid's visual order. */
  order: number;
  link(carId: number): { commands: unknown[]; queryParams?: Record<string, unknown> };
  scope?: ContextScope[];
  orgRoles?: string[];
  /**
   * Live count shown under the tile's title (notes saved, active wishes, journal entries,
   * maintenance records). Paired with `countKey`, a transloco key taking a `{ count }` param —
   * a tab with no `count`/`countKey` shows no second line (Plan). The two tiles whose second
   * line isn't a plain count (Documente's expiring-vs-total message, Rapoarte's current year)
   * are rendered as small, tab-id-keyed exceptions in `cars-details.component.html` rather than
   * forced through this field — see `core/car-page/FEATURE.md`.
   */
  count?(carId: number): Signal<number | null> | Observable<number | null>;
  /** Transloco key for `count`, e.g. `'cars.details.hub.notesCount'` (expects `{ count }`). Required together with `count`. */
  countKey?: string;
  /**
   * For the one tile whose second line isn't a plain count — Documente's expiring-vs-total
   * message (styled red when something is expiring). Already-resolved display text (the owning
   * feature calls `TranslocoService.translate` itself), not a key/params pair, so this generic
   * field never needs to know what's being translated. Mutually exclusive with `count`/`countKey`
   * in practice (a tab uses one or the other) — see `CarPageContributionsService.subLabelOf`.
   */
  subLabel?(carId: number): Observable<{ text: string; danger?: boolean } | null>;
  /** Hub tile only renders at ≥1024px (`.vd-hub-tile--desktop-only`) — redundant with the "…" sheet action on mobile. */
  desktopOnly?: boolean;
  /**
   * Hub-only dynamic gate on top of `scope`/`orgRoles`/`feature`, for the two tabs whose
   * visibility depends on the *car-specific* access role (`CarAccessRole`, from
   * `effectiveRole$`), not the session's organization role — e.g. "Partajare" needs
   * `role === 'OWNER'`, "Sofer" needs `role === 'FULL'` on an organization car. The
   * sidebar subnav deliberately does NOT apply this (pre-existing behavior — see
   * `features/cars/FEATURE.md`), so it is only consulted by the car hub's tile grid.
   * Defaults to always visible.
   */
  hubVisible?(carId: number, injector: Injector): Observable<boolean>;
  /**
   * Whether this tab also appears in the desktop sidebar's per-car subnav (`main.component.html`
   * `#carSubnav`). Defaults to true. `sofer` (driver assignment) is the one tab that has never
   * had a subnav entry (pre-existing gap, not something this refactor changes — see
   * `features/cars/FEATURE.md`'s "Known gaps"), so it sets this to `false`.
   */
  inSidebar?: boolean;
  /** Sidebar order, if it must differ from the hub tile's `order` (e.g. Plan sits later in the hub grid than in the subnav). Defaults to `order`. */
  sidebarOrder?: number;
  /**
   * Sidebar active-state check (see `shared/utils/car-tab-active.util.ts`'s `isCarTabActive`
   * helper, which every current tab uses). Omitted entirely for a tab that can never be
   * "active" from the sidebar's own route tree (Jurnal, which navigates to `/main/blog`).
   */
  isActive?(url: string, carId: number): boolean;
}

/**
 * An "add" action a feature plugs into the car page's "…" overflow sheet (or, for
 * `add-fuel-entry`, the quick icon button next to the car's name — see
 * `features/cars/cars-details/cars-details.component.html`).
 */
export interface CarActionContribution {
  id: string;
  feature: FeatureKey | null;
  labelKey: string;
  /** Secondary description line shown under the label in the sheet (optional — not every action has one). */
  descKey?: string;
  icon: string;
  /** `.vd-sheet-icon--<colorClass>` modifier, e.g. `'green'` / `'purple'`. Defaults to `'blue'`. */
  colorClass?: string;
  order: number;
  scope?: ContextScope[];
  /** Business-only role gate, same convention as `CarTabContribution.orgRoles` — e.g. "Add vehicle" is admin-only in business (see `features/cars/FEATURE.md`). */
  orgRoles?: string[];
  run(carId: number, injector: Injector): void;
}

// Each multi-provider contributes one FEATURE's whole tab/action list (not one entry each),
// so `CarPageContributionsService` sees `CarTabContribution[][]` / `CarActionContribution[][]`
// and flattens it — see that service's `_tabs`/`_actions`.
export const CAR_TABS = new InjectionToken<CarTabContribution[][]>('CAR_TABS');
export const CAR_ACTIONS = new InjectionToken<CarActionContribution[][]>('CAR_ACTIONS');

/**
 * Registers one feature's car-page tabs at the composition root (see `core/car-page/FEATURE.md`).
 * `factory` runs inside Angular's DI (via `useFactory`), so it may `inject()` whatever service a
 * tab's `count`/`hubVisible` closure needs (e.g. `CarDetailsFacade` for the Istoric count).
 */
export function provideCarTabs(factory: () => CarTabContribution[]): Provider {
  return { provide: CAR_TABS, useFactory: factory, multi: true };
}

/** Registers one feature's car-page "add" actions at the composition root; see `provideCarTabs`. */
export function provideCarActions(factory: () => CarActionContribution[]): Provider {
  return { provide: CAR_ACTIONS, useFactory: factory, multi: true };
}

/**
 * What a feature plugs into the car hub's "Stare & scadențe" (deadlines) card — the
 * documents half (RCA/ITP/ROV + foreign vignettes) and the maintenance half (service
 * intervals/settings/profiles) each register one of these instead of the card hardcoding
 * either. See `core/car-page/FEATURE.md` and `CarDeadlineItem`
 * (`shared/utils/deadline-items.util.ts`) for the generic item shape the card renders.
 *
 * `items$`/`open`/`dismiss` close over whatever the owning feature's `useFactory` injected
 * (its own facade, `BootstrapFacade`, a `NavController`) — same convention as
 * `CarTabContribution.count`/`CarActionContribution.run`. `open`/`dismiss` both receive the
 * clicked item plus an `Injector` (same as `CarActionContribution.run`'s `injector` param) so a
 * factory that didn't need DI at registration time can still reach a service lazily.
 */
export interface CarDeadlineSource {
  /** Stable id, also written onto every item it produces as `CarDeadlineItem.sourceId`. */
  id: string;
  feature: FeatureKey;
  /** Emits `[]` until its own feature's data has loaded for `carId` — never fetches on a disabled feature. */
  items$(carId: number): Observable<CarDeadlineItem[]>;
  /** Card tap: view the record behind the item, falling back to the same target `dismiss`-less items would act on. */
  open(item: CarDeadlineItem, injector: Injector): void;
  /**
   * Turns this item's own tracking off instead of just hiding it (maintenance only — a document
   * deadline has no such setting, so it has no `dismiss`; the card falls back to its own generic
   * dismissed-keys list for any item whose source doesn't define one — see
   * `CarPageContributionsService.dismissDeadlineItem`).
   */
  dismiss?(item: CarDeadlineItem, injector: Injector): Observable<void> | Promise<void>;
}

// One multi-provider per feature, same flattening convention as CAR_TABS/CAR_ACTIONS.
export const CAR_DEADLINE_SOURCES = new InjectionToken<CarDeadlineSource[][]>('CAR_DEADLINE_SOURCES');

/** Registers one feature's car-page deadline source(s) at the composition root; see `provideCarTabs`. */
export function provideCarDeadlineSources(factory: () => CarDeadlineSource[]): Provider {
  return { provide: CAR_DEADLINE_SOURCES, useFactory: factory, multi: true };
}
