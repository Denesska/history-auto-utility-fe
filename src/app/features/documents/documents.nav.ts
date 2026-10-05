import { Provider } from '@angular/core';
import { provideNavDestinations } from '@hau/core/navigation/nav-destinations';

/**
 * Documents' nav destination (see core/navigation/FEATURE.md): the mobile bottom bar's
 * "Documente" entry, a `car`-kind destination reusing the `documents` `CarTabContribution`
 * (see `documents.car-page.ts`) for its actual link, so there is one source of truth for
 * where it goes.
 */
export function provideDocumentsNav(): Provider {
  return provideNavDestinations(() => [
    {
      id: 'documents',
      feature: 'documents',
      labelKey: 'cars.details.hub.documente',
      icon: 'document-text-outline',
      kind: 'car',
      carTabId: 'documents',
    },
  ]);
}
