import { inject, Provider } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { CarDto } from '@hau/autogenapi/models';
import { CarAccessRole } from '@hau/autogenapi/models/car-access-dto';
import { provideCarTabs } from '@hau/core/car-page/car-page.contributions';
import { isCarTabActive } from '@hau/shared/utils/car-tab-active.util';
import { CARS_ROUTES } from './cars.routes.const';
import { CarDetailsFacade } from './state/car-details/car-details.facade';
import { CarListState } from './state/car-list/car-list.state';
import { CarNotesFacade } from './state/car-notes/car-notes.facade';
import { CarWishesFacade } from './state/car-wishes/car-wishes.facade';

/** `organization_id` is additive on `CarDto`, not on the generated type — see `features/cars/FEATURE.md`. */
function isOrgCar(car: CarDto): boolean {
  return (car as CarDto & { organization_id?: number | null }).organization_id != null;
}

/**
 * The caller's access role on the car `CarDetailsFacade` currently has loaded — same logic as
 * `cars-details.component.ts`'s `effectiveRole$`, duplicated here (rather than shared) since
 * it's the one piece of cars-owned state `hubVisible` needs and this file has no component to
 * host a field on.
 */
function currentCarRole$(carDetailsFacade: CarDetailsFacade, store: Store): Observable<CarAccessRole> {
  return combineLatest([carDetailsFacade.currentCar$, store.select(CarListState.sharedCarList)]).pipe(
    map(([car, sharedList]) => {
      if (!car) return 'OWNER' as CarAccessRole;
      const entry = sharedList.find(e => e.car.id === car.id);
      return entry ? entry.role : ('OWNER' as CarAccessRole);
    }),
  );
}

/**
 * Cars' own car-page contributions (see `core/car-page/FEATURE.md`): the "Notițe"/"Wishlist"
 * tabs (behind the `car_notes`/`car_wishlist` feature switches) and the "Partajare"/"Sofer"
 * tabs (not behind any switch — `feature: null` — but gated by the car-specific access role
 * via `hubVisible`, same as the hub tiles were before this refactor).
 */
export function provideCarsCarPage(): Provider {
  return provideCarTabs(() => {
    const carDetailsFacade = inject(CarDetailsFacade);
    const carNotesFacade = inject(CarNotesFacade);
    const carWishesFacade = inject(CarWishesFacade);
    const store = inject(Store);
    const role$ = currentCarRole$(carDetailsFacade, store);

    return [
      {
        id: 'notite',
        feature: 'car_notes',
        labelKey: 'cars.details.hub.notite',
        countKey: 'cars.details.hub.notesCount',
        count: (carId: number) => {
          carNotesFacade.loadNotes(carId);
          return carNotesFacade.notesFor(carId).pipe(map(notes => notes.length));
        },
        icon: 'reader-outline',
        order: 40,
        sidebarOrder: 50,
        link: (carId: number) => ({
          commands: [`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.notite.path}`],
        }),
        isActive: (url: string, carId: number) => isCarTabActive(url, carId, CARS_ROUTES.notite.path),
      },
      {
        id: 'wishlist',
        feature: 'car_wishlist',
        labelKey: 'cars.details.hub.wishlist',
        countKey: 'cars.details.hub.wishlistCount',
        count: (carId: number) => {
          carWishesFacade.loadWishlist(carId);
          return carWishesFacade
            .wishlistFor(carId)
            .pipe(map(entry => entry.items.filter(w => w.status === 'ACTIVE').length));
        },
        icon: 'heart-outline',
        order: 50,
        sidebarOrder: 60,
        link: (carId: number) => ({
          commands: [`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.wishlist.path}`],
        }),
        isActive: (url: string, carId: number) => isCarTabActive(url, carId, CARS_ROUTES.wishlist.path),
      },
      {
        id: 'partajare',
        feature: null,
        scope: ['personal'],
        labelKey: 'cars.details.hub.partajare',
        icon: 'share-social-outline',
        order: 80,
        desktopOnly: true,
        hubVisible: () => role$.pipe(map(role => role === 'OWNER')),
        link: (carId: number) => ({
          commands: [`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.partajare.path}`],
        }),
        isActive: (url: string, carId: number) => isCarTabActive(url, carId, CARS_ROUTES.partajare.path),
      },
      {
        id: 'sofer',
        feature: null,
        scope: ['business'],
        labelKey: 'cars.details.hub.sofer',
        icon: 'person-outline',
        order: 90,
        desktopOnly: true,
        // Never had a sidebar entry (pre-existing gap, not changed by this refactor — see
        // "Known gaps" in features/cars/FEATURE.md).
        inSidebar: false,
        hubVisible: (carId: number) =>
          combineLatest([role$, carDetailsFacade.currentCar$]).pipe(
            map(([role, car]) => role === 'FULL' && !!car && car.id === carId && isOrgCar(car)),
          ),
        link: (carId: number) => ({
          commands: [`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.sofer.path}`],
        }),
        isActive: (url: string, carId: number) => isCarTabActive(url, carId, CARS_ROUTES.sofer.path),
      },
    ];
  });
}
