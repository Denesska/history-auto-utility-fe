import { Provider } from '@angular/core';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { provideNavDestinations } from '@hau/core/navigation/nav-destinations';

/** Sale contracts' nav destination (see core/navigation/FEATURE.md) — hidden for Driver/Finance, same orgRoles as its route/sidebar entry. */
export function provideSaleContractNav(): Provider {
  return provideNavDestinations(() => [
    {
      id: 'sale-contract',
      feature: 'sale_contract',
      labelKey: 'sidebar.nav.saleContract',
      icon: 'document-attach-outline',
      kind: 'global',
      scope: ['personal', 'business'],
      orgRoles: ['OWNER', 'SUPER_ADMIN', 'FLEET_ADMIN'],
      link: () => ({ commands: [HAU_ROUTES.saleContract.fullPath] }),
    },
  ]);
}
