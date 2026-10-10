import { Provider } from '@angular/core';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { provideNavDestinations } from '@hau/core/navigation/nav-destinations';

/** Suppliers' nav destination (see core/navigation/FEATURE.md): business-only. */
export function provideSupplierNav(): Provider {
  return provideNavDestinations(() => [
    {
      id: 'suppliers',
      feature: 'supplier',
      labelKey: 'sidebar.nav.supplier',
      icon: 'briefcase-outline',
      kind: 'global',
      scope: ['business'],
      link: () => ({ commands: [HAU_ROUTES.supplier.fullPath] }),
    },
  ]);
}
