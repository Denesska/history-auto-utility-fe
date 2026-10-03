import { inject, Provider } from '@angular/core';
import { NavController } from '@ionic/angular';
import { combineLatest, map, of, switchMap } from 'rxjs';
import { TranslocoService } from '@jsverse/transloco';
import { ServiceCategory } from '@hau/autogenapi/models';
import { CARS_ROUTES, CarDetailsFacade } from '@hau/features/cars';
import {
  provideCarActions,
  provideCarDeadlineSources,
  provideCarTabs,
} from '@hau/core/car-page/car-page.contributions';
import { isCarTabActive } from '@hau/shared/utils/car-tab-active.util';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { buildMaintenanceDeadlineItems } from './maintenance-deadline-items.util';
import { CarMaintenanceProfilesService } from './car-maintenance-profiles.service';
import { CarMaintenanceSettingsService } from './car-maintenance-settings.service';
import { MAINTENANCE_ROUTES } from './maintenance.routes.const';

/**
 * Maintenance's car-page contributions (see `core/car-page/FEATURE.md`): the "Istoric" and
 * "Plan" hub tiles/subnav entries, the "add maintenance" and "add fuel/charge entry" actions
 * in the car's "…" sheet / quick button, and the maintenance half of the "Stare & scadențe"
 * deadlines card. Registered once at the composition root (`features/main/main.routes.ts`) —
 * this file has no page component and no route array, only data other features/the shell plug
 * into the car page.
 */
export function provideMaintenanceCarPage(): Provider[] {
  return [
    provideCarTabs(() => {
      // Istoric's count reads BootstrapFacade.maintenance$ (already loaded for every accessible
      // car at bootstrap, and kept fresh by MaintenanceState's own create/delete actions, which
      // patch it back — see car-maintenance-settings.service.ts's doc) rather than loading its
      // own copy, same data source the deadline source below uses.
      const bootstrapFacade = inject(BootstrapFacade);
      return [
        {
          id: 'istoric',
          feature: 'maintenance',
          labelKey: 'cars.details.hub.istoric',
          countKey: 'cars.details.hub.istoricCount',
          count: (carId: number) =>
            bootstrapFacade.maintenance$.pipe(map(byCarId => byCarId[carId]?.length ?? 0)),
          icon: 'time-outline',
          order: 10,
          link: (carId: number) => ({
            commands: [`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.istoric.path}`],
          }),
          isActive: (url: string, carId: number) =>
            isCarTabActive(url, carId, CARS_ROUTES.istoric.path),
        },
        {
          id: 'plan',
          feature: 'maintenance',
          labelKey: 'cars.details.hub.plan',
          icon: 'calendar-outline',
          order: 70,
          // Plan also has its own sidebar subnav entry on desktop, but it's the only way to
          // reach it (and the maintenance settings panel inside it) on mobile, so it's a
          // normal (non-desktopOnly) hub tile. In the sidebar it historically sits right after
          // Rapoarte, ahead of Notițe/Wishlist/Jurnal — kept via sidebarOrder since the hub
          // grid places it later (after Jurnal).
          sidebarOrder: 40,
          link: (carId: number) => ({
            commands: [`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.plan.path}`],
          }),
          isActive: (url: string, carId: number) =>
            isCarTabActive(url, carId, CARS_ROUTES.plan.path),
        },
      ];
    }),
    provideCarActions(() => {
      const navCtrl = inject(NavController);
      return [
        {
          id: 'add-fuel-entry',
          feature: 'maintenance',
          labelKey: 'cars.details.addFuelEntry',
          icon: 'fuel-pump',
          order: 5,
          run: (carId: number) =>
            void navCtrl.navigateForward(MAINTENANCE_ROUTES.add.fullPath, {
              queryParams: { carId, serviceType: 'ALIMENTARE' },
            }),
        },
        {
          id: 'add-maintenance',
          feature: 'maintenance',
          labelKey: 'cars.details.addMaintenance',
          descKey: 'cars.details.sheet.addMaintenanceDesc',
          icon: 'add-circle-outline',
          colorClass: 'green',
          order: 20,
          run: (carId: number) =>
            void navCtrl.navigateForward(MAINTENANCE_ROUTES.add.fullPath, {
              queryParams: { carId },
            }),
        },
      ];
    }),
    provideCarDeadlineSources(() => {
      const carDetailsFacade = inject(CarDetailsFacade);
      const bootstrapFacade = inject(BootstrapFacade);
      const navCtrl = inject(NavController);
      const profilesService = inject(CarMaintenanceProfilesService);
      const settingsService = inject(CarMaintenanceSettingsService);
      const transloco = inject(TranslocoService);
      return [
        {
          id: 'maintenance',
          feature: 'maintenance',
          // Every stream here is already loaded for the car page (BootstrapFacade) — no
          // dedicated per-car maintenance fetch needed (see core/car-page/FEATURE.md).
          items$: (carId: number) =>
            combineLatest([
              carDetailsFacade.currentCar$,
              bootstrapFacade.maintenance$,
              bootstrapFacade.maintenanceIntervals$,
              bootstrapFacade.carMaintenanceSettings$,
              bootstrapFacade.maintenanceProfiles$,
            ]).pipe(
              map(([car, recordsByCarId, intervals, settingsByCarId, profilesByCarId]) => {
                if (!car || car.id !== carId) return [];
                // The hub always shows the "normal" built-in profile's numbers (no profile
                // picker here, unlike the Plan page), but a category the user customized
                // should still reflect that — fall back to their oldest/first custom
                // profile, if any (CarMaintenanceProfilesService.createProfile appends, so
                // oldest-first = creation order).
                const defaultProfileId = profilesByCarId[carId]?.[0]?.id ?? null;
                const settings =
                  defaultProfileId != null
                    ? (settingsByCarId[carId] ?? []).filter(s => s.profile_id === defaultProfileId)
                    : [];
                return buildMaintenanceDeadlineItems(
                  car,
                  recordsByCarId[carId] ?? [],
                  'normal',
                  intervals ?? [],
                  settings,
                  carId,
                );
              }),
            ),
          // View the last record of that category if there is one; otherwise go straight to
          // logging a new one — same fallback the "…" sheet's add-maintenance action uses.
          open: item => {
            if (item.maintenanceRecordId != null) {
              void navCtrl.navigateForward(
                `${CARS_ROUTES.details.fullPath}/${item.carId}/${CARS_ROUTES.istoric.path}/${item.maintenanceRecordId}`,
              );
            } else {
              void navCtrl.navigateForward(MAINTENANCE_ROUTES.add.fullPath, {
                queryParams: { carId: item.carId },
              });
            }
          },
          // Dismissing turns tracking off for that category instead of just hiding the row —
          // auto-creating a default profile on first dismiss, same as the Plan settings panel.
          dismiss: item => {
            const category = item.key.replace('plan:', '') as ServiceCategory;
            const existingProfiles = bootstrapFacade.currentCarMaintenanceProfiles(item.carId);
            const profileId$ = existingProfiles.length
              ? of(existingProfiles[0].id)
              : profilesService
                  .createProfile(item.carId, transloco.translate('plan.settings.defaultProfileName'))
                  .pipe(map(created => created.id));
            return profileId$.pipe(
              switchMap(profileId => settingsService.updateSetting(item.carId, profileId, category, { tracked: false })),
              map(() => void 0),
            );
          },
        },
      ];
    }),
  ];
}
