import { Provider } from '@angular/core';
import { provideNavDestinations } from '@hau/core/navigation/nav-destinations';

/**
 * Blog's nav destination (see core/navigation/FEATURE.md): the bottom bar's "Jurnal" entry, a
 * `car`-kind destination reusing the `jurnal` `CarTabContribution` (see `blog.car-page.ts`) for
 * its actual link — that tab already points at the global `/main/blog` route scoped with
 * `?carId=`, so there's one source of truth for where a car's journal lives, same convention as
 * every other car-kind destination (documents/history/plan/notes/wishlist). This only affects
 * the mobile bottom bar — the desktop sidebar's own "Jurnal" item (`main.component.ts`'s static
 * nav list) is unrelated and still goes to the unscoped `/main/blog`.
 */
export function provideBlogNav(): Provider {
  return provideNavDestinations(() => [
    {
      id: 'journal',
      feature: 'journal',
      labelKey: 'sidebar.nav.blog',
      icon: 'book-outline',
      kind: 'car',
      carTabId: 'jurnal',
    },
  ]);
}
