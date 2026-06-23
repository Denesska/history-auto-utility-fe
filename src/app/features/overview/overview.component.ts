import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
import { MAINTENANCE_ROUTES } from '@hau/features/maintenance/maintenance.routes.const';
import { daysUntil, formatDate } from '@hau/features/cars/cars.utils';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';
import { PullToRefreshService } from '@hau/core/pull-to-refresh.service';
import { IonContent, IonIcon, IonRefresher, IonRefresherContent, NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';
import { TranslocoPipe } from '@ngneat/transloco';
import { combineLatest, map } from 'rxjs';
import { DocExpiryRowComponent } from '@hau/shared/component/doc-expiry-row/doc-expiry-row.component';

const ICON_BASE = 'assets/icons';

interface ExpiringDocRow {
  car: CarDto;
  docId: number;
  docType: string;
  days: number;
  dateStr: string;
}

interface QuickAction {
  iconSrc: string;
  title: string;
  subtitle: string;
  action: () => void;
}

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['./overview.component.scss'],
  imports: [AsyncPipe, IonContent, IonIcon, IonRefresher, IonRefresherContent, TranslocoPipe, DocExpiryRowComponent],
})
export class OverviewComponent implements OnInit {
  readonly carList$ = this._carListFacade.carList$;
  private readonly _activeCarList$ = this._carListFacade.activeCarList$;
  private readonly _docsMap$ = this._carListFacade.carDocumentsMap$;

  private readonly _activeDocs$ = combineLatest([this._activeCarList$, this._docsMap$]).pipe(
    map(([cars, docsMap]) => cars.flatMap(c => docsMap[c.id] ?? []))
  );

  readonly docsExpiringSoon$ = this._activeDocs$.pipe(
    map(docs => {
      const now = Date.now();
      const in30 = now + 30 * 86400000;
      return docs.filter(d => {
        if (!d.expiry_date) return false;
        const exp = new Date(d.expiry_date).getTime();
        return exp > now && exp <= in30;
      }).length;
    })
  );

  readonly upcomingService$ = this._activeDocs$.pipe(
    map(docs => {
      const now = Date.now();
      const in30 = now + 30 * 86400000;
      return docs.filter(d => {
        if (!d.expiry_date) return false;
        if (!['ITP', 'ROV'].includes(d.document_type)) return false;
        const exp = new Date(d.expiry_date).getTime();
        return exp > now && exp <= in30;
      }).length;
    })
  );

  readonly alerts$ = this._activeDocs$.pipe(
    map(docs => {
      const in7 = Date.now() + 7 * 86400000;
      return docs.filter(d => {
        if (!d.expiry_date) return false;
        return new Date(d.expiry_date).getTime() <= in7;
      }).length;
    })
  );

  readonly expiringDocs$ = combineLatest([this._activeCarList$, this._docsMap$]).pipe(
    map(([cars, docsMap]) => {
      const rows: ExpiringDocRow[] = [];
      for (const c of cars) {
        for (const doc of (docsMap[c.id] ?? [])) {
          if (!doc.expiry_date) continue;
          const days = daysUntil(doc.expiry_date);
          if (days === null) continue;
          rows.push({ car: c, docId: doc.id, docType: doc.document_type, days, dateStr: formatDate(doc.expiry_date) });
        }
      }
      return rows.sort((a, b) => a.days - b.days).slice(0, 5);
    })
  );

  readonly icons = {
    car:         `${ICON_BASE}/hau-car.svg`,
    document:    `${ICON_BASE}/hau-document.svg`,
    wrench:      `${ICON_BASE}/hau-wrench.svg`,
    warning:     `${ICON_BASE}/hau-warning.svg`,
    add:         `${ICON_BASE}/hau-add.svg`,
    speedometer: `${ICON_BASE}/hau-speedometer.svg`,
    checkCircle: `${ICON_BASE}/hau-check-circle.svg`,
  };

  quickActions!: QuickAction[];

  constructor(
    private readonly _carListFacade: CarListFacade,
    private readonly _router: Router,
    private readonly _navCtrl: NavController,
    private readonly _pullToRefresh: PullToRefreshService,
  ) {
    addIcons({ chevronForward });

    this.quickActions = [
      { iconSrc: `${ICON_BASE}/hau-add.svg`,         title: 'overview.actions.addVehicle',      subtitle: 'overview.actions.addVehicleSub',      action: () => this.navigateToAddCar() },
      { iconSrc: `${ICON_BASE}/hau-document.svg`,    title: 'overview.actions.uploadDoc',       subtitle: 'overview.actions.uploadDocSub',       action: () => this.navigateToAddDocument() },
      { iconSrc: `${ICON_BASE}/hau-wrench.svg`,      title: 'overview.actions.logMaintenance',  subtitle: 'overview.actions.logMaintenanceSub',  action: () => this.navigateToAddMaintenance() },
      { iconSrc: `${ICON_BASE}/hau-speedometer.svg`, title: 'overview.actions.checkDeadlines',  subtitle: 'overview.actions.checkDeadlinesSub',  action: () => this.navigateToGarage() },
    ];
  }

  ngOnInit(): void {
    this._carListFacade.loadCarList();
  }

  onRefresh(event: Event): void {
    this._pullToRefresh.refresh(event);
  }

  navigateToDocument(docId: number): void {
    void this._router.navigate([`${DOCUMENTS_ROUTES.view.fullPath}/${docId}`]);
  }

  navigateToDocuments(): void {
    void this._router.navigate([DOCUMENTS_ROUTES.list.fullPath]);
  }

  navigateToAddCar(): void {
    void this._router.navigate([CARS_ROUTES.create.fullPath]);
  }

  navigateToAddDocument(): void {
    void this._navCtrl.navigateForward(DOCUMENTS_ROUTES.add.fullPath);
  }

  navigateToAddMaintenance(): void {
    void this._navCtrl.navigateForward(MAINTENANCE_ROUTES.root.fullPath, {
      queryParams: { openPanel: true },
    });
  }

  navigateToMaintenance(): void {
    void this._router.navigate([MAINTENANCE_ROUTES.root.fullPath]);
  }

  navigateToGarage(): void {
    void this._router.navigate([HAU_ROUTES.cars.fullPath]);
  }
}
