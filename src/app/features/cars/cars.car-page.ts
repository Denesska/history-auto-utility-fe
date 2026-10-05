import { inject, Provider } from '@angular/core';
import { NavController } from '@ionic/angular';
import { combineLatest, map, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { CarDto } from '@hau/autogenapi/models';
import { CarAccessRole } from '@hau/autogenapi/models/car-access-dto';
import { provideCarActions, provideCarTabs } from '@hau/core/car-page/car-page.contributions';
import { NavigationPreferencesService } from '@hau/core/navigation/navigation-preferences.service';
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
 * Cars' own car-page contributions (see `core/car-page/FEATURE.md`): the "Notițe"/"Wishlist"/
 * "Sofer" tabs (behind the `car_notes`/`car_wishlist`/`driver_assignment` feature switches), the
 * "Partajare" tab (not behind any switch — `feature: null` — personal-only, so no organization
 * switch applies to it), both also gated by the car-specific access role via `hubVisible`, same
 * as the hub tiles were before this refactor, and two "…" sheet actions: toggling this car as
 * the session's favourite (see core/navigation/FEATURE.md) and, in single-car mode only, "Add
 * vehicle" — the garage is otherwise unreachable while there's only one car (see "Single car" in
 * that same doc).
 */
export function provideCarsCarPage(): Provider[] {
  return [provideCarsCarTabs(), provideCarsCarActions()];
}

function provideCarsCarTabs(): Provider {
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
        feature: 'driver_assignment',
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

function provideCarsCarActions(): Provider {
  return provideCarActions(() => {
    const navCtrl = inject(NavController);
    const navPrefs = inject(NavigationPreferencesService);
    return [
      {
        // Reactive label/icon aren't part of CarActionContribution's static shape — this
        // row's current-favourite state is instead rendered as a small, action-id-keyed
        // exception in cars-details.component.html, same convention as Rapoarte's
        // current-year sub-label (see core/car-page/FEATURE.md).
        id: 'toggle-favorite',
        feature: null,
        labelKey: 'cars.details.sheet.favoriteCar',
        descKey: 'cars.details.sheet.favoriteCarDesc',
        icon: 'star-outline',
        colorClass: 'amber',
        order: 10,
        run: (carId: number) => navPrefs.toggleFavorite(carId),
      },
      {
        // Only ever shown in single-car mode — filtered in cars-details.component.ts, since
        // CarActionContribution has no per-car dynamic visibility gate (unlike
        // CarTabContribution.hubVisible) and this is a session-wide condition, not a per-car
        // one. The garage itself is otherwise unreachable while there's only one car.
        // In business, only an org admin manages the fleet (see "Adding a car" in
        // ACCOUNT-CONTEXT.md and features/cars/FEATURE.md) — `orgRoles` hides this for every
        // other business role; personal is unaffected (orgRoles only applies in business).
        id: 'add-vehicle',
        feature: null,
        orgRoles: ['OWNER', 'SUPER_ADMIN', 'FLEET_ADMIN'],
        labelKey: 'cars.details.addVehicle',
        descKey: 'cars.details.sheet.addVehicleDesc',
        icon: 'add-circle-outline',
        colorClass: 'blue',
        order: 95,
        run: () => {
          void navCtrl.navigateForward(CARS_ROUTES.create.fullPath);
        },
      },
    ];
  });
}
