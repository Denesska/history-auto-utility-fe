import { Provider } from '@angular/core';
import { provideNavDestinations } from '@hau/core/navigation/nav-destinations';

/**
 * Cars' own extra nav destinations (see core/navigation/FEATURE.md): "Notițe" and "Wishlist",
 * both `car`-kind destinations reusing their matching `CarTabContribution`s (see
 * `cars.car-page.ts`). The Garage destination itself is core-owned (see
 * `core/navigation/navigation-destinations.service.ts`), not contributed here.
 */
export function provideCarsNav(): Provider {
  return provideNavDestinations(() => [
    {
      id: 'notes',
      feature: 'car_notes',
      labelKey: 'cars.details.hub.notite',
      icon: 'reader-outline',
      kind: 'car',
      carTabId: 'notite',
      // Global all-cars notes page (no HAU_ROUTES entry for it).
      allLink: () => ({ commands: ['/main/notes'] }),
    },
    {
      id: 'wishlist',
      feature: 'car_wishlist',
      labelKey: 'cars.details.hub.wishlist',
      icon: 'heart-outline',
      kind: 'car',
      carTabId: 'wishlist',
    },
  ]);
}
