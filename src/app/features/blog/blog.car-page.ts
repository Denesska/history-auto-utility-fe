import { inject, Provider } from '@angular/core';
import { BlogService } from '@hau/autogenapi/services';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { provideCarTabs } from '@hau/core/car-page/car-page.contributions';
import { catchError, map, of, take } from 'rxjs';

/**
 * Blog's car-page contribution (see `core/car-page/FEATURE.md`): the "Jurnal" hub tile/subnav
 * entry, which navigates to the global `/main/blog` route scoped to this car (`?carId=`) rather
 * than to a route under `cars/details/:id`. Its `isActive` can't use the shared
 * `isCarTabActive()` util (that one only matches a `cars/details/:id/<segment>` shape) — it's a
 * bespoke path+query check instead, reused by `MainComponent.isScopedBlogBottomBarRoute` (fixed
 * 2026-10-05) the same way `isScopedCarBottomBarRoute` reuses every other tab's `isActive` — so
 * the bar (and the shell FAB) now does stay visible when Journal is this car's own chosen
 * bottom-bar slot, same as Documents/Istoric/Notes/Wishlist. See "Bottom bar visibility on
 * car-scoped routes" in `core/navigation/FEATURE.md`.
 */
export function provideBlogCarPage(): Provider {
  return provideCarTabs(() => {
    const blogService = inject(BlogService);
    return [
      {
        id: 'jurnal',
        feature: 'journal',
        labelKey: 'cars.details.hub.jurnal',
        countKey: 'cars.details.hub.jurnalCount',
        count: (carId: number) =>
          blogService.getEntries({ car_id: carId }).pipe(
            take(1),
            map(entries => entries.length),
            catchError(() => of(0)),
          ),
        icon: 'book-outline',
        order: 60,
        sidebarOrder: 70,
        link: (carId: number) => ({
          commands: [HAU_ROUTES.blog.fullPath],
          queryParams: { carId },
        }),
        isActive: (url: string, carId: number) => {
          const [path, query] = url.split('?');
          if (path !== HAU_ROUTES.blog.fullPath) return false;
          return new URLSearchParams(query ?? '').get('carId') === String(carId);
        },
      },
    ];
  });
}
