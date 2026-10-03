import { inject, Provider } from '@angular/core';
import { NavController } from '@ionic/angular';
import { combineLatest, map } from 'rxjs';
import { TranslocoService } from '@jsverse/transloco';
import { CARS_ROUTES, CarDetailsFacade } from '@hau/features/cars';
import {
  provideCarActions,
  provideCarDeadlineSources,
  provideCarTabs,
} from '@hau/core/car-page/car-page.contributions';
import { isCarTabActive } from '@hau/shared/utils/car-tab-active.util';
import { daysUntil } from '@hau/shared/utils/date-math.util';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { buildDocumentDeadlineItems } from './document-deadline-items.util';
import { DOCUMENTS_ROUTES } from './documents.routes.const';

/**
 * Documents' car-page contributions (see `core/car-page/FEATURE.md`): the "Documente" hub
 * tile/subnav entry (with its expiring-vs-total second line, via `subLabel` — not a plain
 * count, see `CarTabContribution.subLabel`'s doc), the "upload document" action in the car's
 * "…" sheet, and the document half of the "Stare & scadențe" deadlines card.
 */
export function provideDocumentsCarPage(): Provider[] {
  return [
    provideCarTabs(() => {
      const bootstrapFacade = inject(BootstrapFacade);
      const transloco = inject(TranslocoService);
      return [
        {
          id: 'documents',
          feature: 'documents',
          labelKey: 'cars.details.hub.documente',
          icon: 'document-text-outline',
          order: 20,
          link: (carId: number) => ({
            commands: [`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.documents.path}`],
          }),
          isActive: (url: string, carId: number) =>
            isCarTabActive(url, carId, CARS_ROUTES.documents.path),
          subLabel: (carId: number) =>
            bootstrapFacade.documents$.pipe(
              map(byCarId => {
                const docs = byCarId[carId] ?? [];
                const expiring = docs.filter(d => {
                  const days = daysUntil(d.expiry_date);
                  return days !== null && days <= 30;
                }).length;
                return expiring > 0
                  ? { text: transloco.translate('cars.details.hub.documentsExpiring', { count: expiring }), danger: true }
                  : { text: transloco.translate('cars.details.hub.documentsTotal', { count: docs.length }) };
              }),
            ),
        },
      ];
    }),
    provideCarActions(() => {
      const navCtrl = inject(NavController);
      return [
        {
          id: 'add-document',
          feature: 'documents',
          labelKey: 'cars.details.uploadDocument',
          descKey: 'cars.details.sheet.uploadDocumentDesc',
          icon: 'cloud-upload-outline',
          colorClass: 'purple',
          order: 30,
          run: (carId: number) =>
            void navCtrl.navigateForward(DOCUMENTS_ROUTES.add.fullPath, {
              queryParams: { carId },
            }),
        },
      ];
    }),
    provideCarDeadlineSources(() => {
      const carDetailsFacade = inject(CarDetailsFacade);
      const bootstrapFacade = inject(BootstrapFacade);
      const navCtrl = inject(NavController);
      return [
        {
          id: 'documents',
          feature: 'documents',
          // Both streams are already loaded as part of the car page / bootstrap — no dedicated
          // per-car document fetch needed here (see core/car-page/FEATURE.md).
          items$: (carId: number) =>
            combineLatest([carDetailsFacade.currentCar$, bootstrapFacade.documents$]).pipe(
              map(([car, byCarId]) =>
                car && car.id === carId ? buildDocumentDeadlineItems(car, byCarId[carId] ?? [], carId) : [],
              ),
            ),
          // View the specific document if there is one; a car-row-only RCA/ITP/ROV fallback
          // (no uploaded document yet) falls back to the car's own Documents tab instead.
          open: item => {
            if (item.documentId != null) {
              void navCtrl.navigateForward(`${DOCUMENTS_ROUTES.view.fullPath}/${item.documentId}`);
            } else {
              void navCtrl.navigateForward(`${CARS_ROUTES.details.fullPath}/${item.carId}/${CARS_ROUTES.documents.path}`);
            }
          },
          // No `dismiss` — a document deadline has no tracking setting to turn off, so the
          // card falls back to its own generic dismissed-keys list (see
          // CarPageContributionsService.dismissDeadlineItem).
        },
      ];
    }),
  ];
}
