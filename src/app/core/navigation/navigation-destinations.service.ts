import { computed, inject, Injectable } from '@angular/core';
import { ContextScope, fitsContext } from '@hau/core/context/context-scope';
import { FeatureKey } from '@hau/core/features/feature-keys';
import { FeatureService } from '@hau/core/features/feature.service';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { NAV_DESTINATIONS, NavDestination } from '@hau/core/navigation/nav-destinations';

/** The Garage destination is core-owned, not a feature contribution — see "garage (special)" in core/navigation/FEATURE.md. */
export const GARAGE_DESTINATION_ID = 'garage';

const GARAGE_DESTINATION: NavDestination = {
  id: GARAGE_DESTINATION_ID,
  feature: null,
  labelKey: 'nav.tabs.garaj',
  icon: 'car-outline',
  kind: 'global',
  scope: ['personal', 'business'],
};

/**
 * Resolves which `NavDestination`s (see `core/navigation/nav-destinations.ts`) are available
 * right now — same session-context/org-role/feature-switch filter as
 * `CarPageContributionsService`'s static tab list (see `core/car-page/FEATURE.md`).
 *
 * Not `providedIn: 'root'`, same reason as `CarPageContributionsService`: it (and the
 * `NAV_DESTINATIONS` contributions it reads) are provided at `features/main/main.routes.ts`'s
 * root route level, where every feature's `provideXNav()` is registered.
 */
@Injectable()
export class NavigationDestinationsService {
  private readonly _destinations = [GARAGE_DESTINATION, ...(inject(NAV_DESTINATIONS, { optional: true }) ?? []).flat()];
  private readonly _sessionContext = inject(SessionContextService);
  private readonly _features = inject(FeatureService);

  /**
   * Same "held back until loaded" rule as `CarPageContributionsService._staticTabs` — a
   * `feature`-tagged destination never appears until the switches are known, so the bottom
   * bar never flashes an entry that's about to disappear.
   */
  readonly visibleDestinations = computed(() => {
    const loaded = this._features.loaded();
    return this._destinations.filter(dest =>
      dest.feature ? loaded && this._fits(dest.scope, dest.orgRoles, dest.feature) : this._fits(dest.scope, dest.orgRoles, dest.feature),
    );
  });

  resolve(id: string): NavDestination | undefined {
    return this.visibleDestinations().find(dest => dest.id === id);
  }

  // Same `orgRoles`-without-`scope`/`feature` fix as `CarPageContributionsService._fits` (see
  // its doc, core/car-page/car-page-contributions.service.ts) — kept in sync so a future
  // `feature: null`, no-`scope` destination with its own `orgRoles` doesn't silently skip the
  // role check the way `cars.car-page.ts`'s `add-vehicle` action did.
  private _fits(scope: ContextScope[] | undefined, orgRoles: string[] | undefined, feature: FeatureKey | null | undefined): boolean {
    if (!scope && !feature && !orgRoles?.length) return true;
    return fitsContext({ scope: scope ?? ['personal', 'business'], orgRoles, feature: feature ?? undefined }, this._sessionContext, this._features);
  }
}
