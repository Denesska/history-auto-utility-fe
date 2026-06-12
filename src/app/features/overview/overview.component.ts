import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
import { MAINTENANCE_ROUTES } from '@hau/features/maintenance/maintenance.routes.const';
import { daysUntil, formatDate, getDocExpiry } from '@hau/features/cars/cars.utils';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { PullToRefreshService } from '@hau/core/pull-to-refresh.service';
import { IonContent, IonIcon, IonRefresher, IonRefresherContent, IonSkeletonText, NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { shield, construct, car, chevronForward } from 'ionicons/icons';
import { TranslocoPipe } from '@ngneat/transloco';
import { combineLatest, map } from 'rxjs';

const ICON_BASE = 'assets/icons';

interface CarDeadlineRow {
  car: CarDto;
  rca: { days: number; dateStr: string } | null;
  itp: { days: number; dateStr: string } | null;
  rov: { days: number; dateStr: string } | null;
}

interface ExpiringDocRow {
  car: CarDto;
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
  imports: [AsyncPipe, IonContent, IonIcon, IonRefresher, IonRefresherContent, IonSkeletonText, TranslocoPipe, ImageUrlPipe],
})
export class OverviewComponent implements OnInit {
  readonly carList$ = this._carListFacade.carList$;
  readonly loading$ = this._carListFacade.loading$;
  private readonly _docsMap$ = this._carListFacade.carDocumentsMap$;

  readonly deadlines$ = combineLatest([this.carList$, this._docsMap$]).pipe(
    map(([cars, docsMap]) => cars.map(c => this._buildDeadlineRow(c, docsMap[c.id] ?? [])))
  );

  readonly docsExpiringSoon$ = this._docsMap$.pipe(
    map(docsMap => {
      const now = Date.now();
      const in30 = now + 30 * 86400000;
      return Object.values(docsMap)
        .flatMap(docs => docs ?? [])
        .filter(d => {
          if (!d.expiry_date) return false;
          const exp = new Date(d.expiry_date).getTime();
          return exp > now && exp <= in30;
        }).length;
    })
  );

  readonly upcomingService$ = this._docsMap$.pipe(
    map(docsMap => {
      const now = Date.now();
      const in30 = now + 30 * 86400000;
      return Object.values(docsMap)
        .flatMap(docs => docs ?? [])
        .filter(d => {
          if (!d.expiry_date) return false;
          if (!['ITP', 'ROV'].includes(d.document_type)) return false;
          const exp = new Date(d.expiry_date).getTime();
          return exp > now && exp <= in30;
        }).length;
    })
  );

  readonly alerts$ = this._docsMap$.pipe(
    map(docsMap => {
      const in7 = Date.now() + 7 * 86400000;
      return Object.values(docsMap)
        .flatMap(docs => docs ?? [])
        .filter(d => {
          if (!d.expiry_date) return false;
          return new Date(d.expiry_date).getTime() <= in7;
        }).length;
    })
  );

  readonly expiringDocs$ = combineLatest([this.carList$, this._docsMap$]).pipe(
    map(([cars, docsMap]) => {
      const rows: ExpiringDocRow[] = [];
      for (const c of cars) {
        for (const doc of (docsMap[c.id] ?? [])) {
          if (!doc.expiry_date) continue;
          const days = daysUntil(doc.expiry_date);
          if (days === null) continue;
          rows.push({ car: c, docType: doc.document_type, days, dateStr: formatDate(doc.expiry_date) });
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
    addIcons({ shield, construct, car, chevronForward });

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

  navigateToCarDetails(c: CarDto): void {
    void this._router.navigate([`${CARS_ROUTES.details.fullPath}/${c.id}`]);
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

  navigateToGarage(): void {
    void this._router.navigate([HAU_ROUTES.cars.fullPath]);
  }

  docUrgencyClass(days: number): string {
    if (days < 0) return 'expired';
    if (days <= 7) return 'critical';
    if (days <= 14) return 'warning';
    return 'ok';
  }

  private _buildDeadlineRow(c: CarDto, docs: DocumentDto[]): CarDeadlineRow {
    return {
      car: c,
      rca: this._docInfo(docs, 'RCA'),
      itp: this._docInfo(docs, 'ITP'),
      rov: this._docInfo(docs, 'ROV'),
    };
  }

  private _docInfo(docs: DocumentDto[], type: string): { days: number; dateStr: string } | null {
    const expiry = getDocExpiry(docs, type);
    if (!expiry) return null;
    const days = daysUntil(expiry);
    if (days === null) return null;
    return { days, dateStr: formatDate(expiry) };
  }
}
