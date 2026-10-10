import { Provider } from '@angular/core';
import { CARS_ROUTES } from '@hau/features/cars';
import { provideCarTabs } from '@hau/core/car-page/car-page.contributions';
import { isCarTabActive } from '@hau/shared/utils/car-tab-active.util';

/**
 * Reports' car-page contribution (see `core/car-page/FEATURE.md`): the "Rapoarte" hub
 * tile/subnav entry. Its second line is the current year, not a count — rendered as a small
 * tab-id-keyed exception in `cars-details.component.html` rather than through `count`/`countKey`.
 */
export function provideReportsCarPage(): Provider {
  return provideCarTabs(() => [
    {
      id: 'rapoarte',
      feature: 'reports',
      labelKey: 'cars.details.hub.rapoarte',
      icon: 'bar-chart-outline',
      order: 30,
      link: (carId: number) => ({
        commands: [`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.rapoarte.path}`],
      }),
      isActive: (url: string, carId: number) =>
        isCarTabActive(url, carId, CARS_ROUTES.rapoarte.path),
    },
  ]);
}
