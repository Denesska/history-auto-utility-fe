import { Provider } from '@angular/core';
import { provideNavDestinations } from '@hau/core/navigation/nav-destinations';

/**
 * Maintenance's nav destinations (see core/navigation/FEATURE.md): "Istoric" (history) and
 * "Plan", both `car`-kind destinations reusing their matching `CarTabContribution`s (see
 * `maintenance.car-page.ts`) for their actual link.
 */
export function provideMaintenanceNav(): Provider {
  return provideNavDestinations(() => [
    {
      id: 'history',
      feature: 'maintenance',
      labelKey: 'cars.details.hub.istoric',
      icon: 'time-outline',
      kind: 'car',
      carTabId: 'istoric',
    },
    {
      id: 'plan',
      feature: 'maintenance',
      labelKey: 'cars.details.hub.plan',
      icon: 'calendar-outline',
      kind: 'car',
      carTabId: 'plan',
    },
  ]);
}
