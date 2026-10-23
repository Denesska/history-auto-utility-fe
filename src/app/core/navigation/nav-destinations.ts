import { InjectionToken, Provider } from '@angular/core';
import { ContextScope } from '@hau/core/context/context-scope';
import { FeatureKey } from '@hau/core/features/feature-keys';

/**
 * A destination a feature offers for the mobile bottom bar (and, later, a settings picker —
 * see core/navigation/FEATURE.md). Feature-agnostic by design: `core/` never imports a
 * feature, so a feature contributes its own entries through `provideNavDestinations()` from a
 * sibling `*.nav.ts` (or its `*.car-page.ts`, for a `car`-kind destination), registered at the
 * composition root (`features/main/main.routes.ts`), same convention as `CAR_TABS`/`CAR_ACTIONS`
 * (`core/car-page/car-page.contributions.ts`).
 */
export interface NavDestination {
  /** Stable id — also what's persisted in the user's chosen `bottom_bar` list. */
  id: string;
  /** `null` for a destination not behind an organization feature switch. */
  feature: FeatureKey | null;
  labelKey: string;
  icon: string;
  scope?: ContextScope[];
  orgRoles?: string[];
  kind: 'global' | 'car';
  /** `kind: 'global'` only — the commands/query params to navigate to. */
  link?(): { commands: unknown[]; queryParams?: Record<string, unknown> };
  /**
   * `kind: 'car'` only — the id of the matching `CarTabContribution` (see
   * `core/car-page/car-page.contributions.ts`) this destination reuses for its `link(carId)`,
   * so there is one source of truth for where the tab actually lives. Resolved through
   * `CarPageContributionsService.tabById()`.
   */
  carTabId?: string;
  /**
   * `kind: 'car'` only, optional — present when the feature has a global, all-cars page (no
   * `carId` filter). Its presence is what makes the bottom-bar editor offer "All cars" for this
   * destination (stored as `'<destId>:all'`); a tap on such a slot navigates here instead of to
   * a per-car tab.
   */
  allLink?(): { commands: unknown[]; queryParams?: Record<string, unknown> };
}

// One multi-provider per feature, same flattening convention as CAR_TABS/CAR_ACTIONS.
export const NAV_DESTINATIONS = new InjectionToken<NavDestination[][]>('NAV_DESTINATIONS');

/** Registers one feature's nav destinations at the composition root; see `provideCarTabs`. */
export function provideNavDestinations(factory: () => NavDestination[]): Provider {
  return { provide: NAV_DESTINATIONS, useFactory: factory, multi: true };
}
