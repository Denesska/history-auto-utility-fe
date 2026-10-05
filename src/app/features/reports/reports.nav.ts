import { Provider } from '@angular/core';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { provideNavDestinations } from '@hau/core/navigation/nav-destinations';

/** Reports' nav destination (see core/navigation/FEATURE.md): the global (all-cars) Rapoarte page. */
export function provideReportsNav(): Provider {
  return provideNavDestinations(() => [
    {
      id: 'reports',
      feature: 'reports',
      labelKey: 'sidebar.nav.reports',
      icon: 'bar-chart-outline',
      kind: 'global',
      scope: ['personal', 'business'],
      link: () => ({ commands: [HAU_ROUTES.reports.fullPath] }),
    },
  ]);
}
