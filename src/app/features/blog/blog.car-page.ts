import { inject, Provider } from '@angular/core';
import { BlogService } from '@hau/autogenapi/services';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { provideCarTabs } from '@hau/core/car-page/car-page.contributions';
import { catchError, map, of, take } from 'rxjs';

/**
 * Blog's car-page contribution (see `core/car-page/FEATURE.md`): the "Jurnal" hub tile/subnav
 * entry, which navigates to the global `/main/blog` route scoped to this car (`?carId=`) rather
 * than to a route under `cars/details/:id` — so, unlike every other tab, it has no `isActive`
 * (it can never be the deepest route of a `cars/details/:id/...` tree) and no sidebar entry
 * either *beyond* what `main.component.html`'s old static item had (no active-state highlight).
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
      },
    ];
  });
}
