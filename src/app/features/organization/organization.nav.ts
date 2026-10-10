import { inject, Provider } from '@angular/core';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { provideNavDestinations } from '@hau/core/navigation/nav-destinations';
import { SessionContextService } from '@hau/core/session/session-context.service';

/**
 * Organization's nav destinations (see core/navigation/FEATURE.md): the active organization's
 * members/roles page, and its fleet cost dashboard — both business-only. The cost dashboard's
 * route needs the active organization id (`costs/:organizationId`), so its `link()` reads
 * `SessionContextService.activeOrgId()` at click time rather than baking an id in up front.
 */
export function provideOrganizationNav(): Provider {
  return provideNavDestinations(() => {
    const sessionContext = inject(SessionContextService);
    return [
      {
        id: 'organization',
        feature: null,
        labelKey: 'sidebar.nav.organization',
        icon: 'settings-outline',
        kind: 'global',
        scope: ['business'],
        link: () => ({ commands: [HAU_ROUTES.organization.fullPath] }),
      },
      {
        id: 'fleet-cost',
        feature: 'fleet_cost',
        labelKey: 'organization.costDashboard',
        icon: 'cash-outline',
        kind: 'global',
        scope: ['business'],
        link: () => ({
          commands: [`${HAU_ROUTES.organization.fullPath}/costs/${sessionContext.activeOrgId()}`],
        }),
      },
    ];
  });
}
