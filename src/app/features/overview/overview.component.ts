import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDto } from '@hau/autogenapi/models';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { IonContent, IonIcon, IonSkeletonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { shield, construct, car, water, chevronForward, checkmarkCircle, calendarOutline } from 'ionicons/icons';
import { TranslocoPipe } from '@ngneat/transloco';
import { map } from 'rxjs';

const ICON_BASE = 'assets/icons';

interface CarDeadlineRow {
  car: CarDto;
  rca: { days: number; dateStr: string };
  itp: { days: number; dateStr: string };
  rov: { days: number; dateStr: string };
  oilKm: number;
}

interface ActivityItem {
  iconSrc: string;
  iconClass: string;
  description: string;
  carInfo: string;
  date: string;
  time: string;
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
  imports: [AsyncPipe, DecimalPipe, IonContent, IonIcon, IonSkeletonText, TranslocoPipe, ImageUrlPipe],
})
export class OverviewComponent implements OnInit {
  readonly carList$ = this._carListFacade.carList$;
  readonly loading$ = this._carListFacade.loading$;

  readonly deadlines$ = this.carList$.pipe(
    map(cars => cars.map((c, i) => this._buildDeadlineRow(c, i)))
  );

  readonly icons = {
    car:         `${ICON_BASE}/hau-car.svg`,
    document:    `${ICON_BASE}/hau-document.svg`,
    wrench:      `${ICON_BASE}/hau-wrench.svg`,
    warning:     `${ICON_BASE}/hau-warning.svg`,
    chevron:     `${ICON_BASE}/hau-chevron.svg`,
    add:         `${ICON_BASE}/hau-add.svg`,
    speedometer: `${ICON_BASE}/hau-speedometer.svg`,
    checkCircle: `${ICON_BASE}/hau-check-circle.svg`,
  };

  readonly activityItems: ActivityItem[] = [
    { iconSrc: `${ICON_BASE}/hau-document.svg`,    iconClass: 'blue',   description: 'overview.activity.regUpdated',     carInfo: 'BMW 520i (IS49WAU)',   date: 'overview.activity.today',     time: '10:24 AM' },
    { iconSrc: `${ICON_BASE}/hau-wrench.svg`,      iconClass: 'green',  description: 'overview.activity.oilLogged',      carInfo: 'BMW 318iA (BV31HAU)', date: 'overview.activity.yesterday', time: '04:18 PM' },
    { iconSrc: `${ICON_BASE}/hau-document.svg`,    iconClass: 'orange', description: 'overview.activity.reminderSet',    carInfo: 'BMW 525iA (B33HAU)',  date: 'overview.activity.yesterday', time: '11:03 AM' },
    { iconSrc: `${ICON_BASE}/hau-warning.svg`,     iconClass: 'blue',   description: 'overview.activity.insuranceUpd',   carInfo: 'BMW 520i (IS49WAU)',   date: '12 May 2026',                 time: '09:41 AM' },
    { iconSrc: `${ICON_BASE}/hau-check-circle.svg`,iconClass: 'green',  description: 'overview.activity.itpCompleted',   carInfo: 'BMW 318iA (BV31HAU)', date: '10 May 2026',                 time: '02:37 PM' },
  ];

  quickActions!: QuickAction[];

  constructor(
    private readonly _carListFacade: CarListFacade,
    private readonly _router: Router,
  ) {
    addIcons({ shield, construct, car, water, chevronForward, checkmarkCircle, calendarOutline });

    this.quickActions = [
      { iconSrc: `${ICON_BASE}/hau-add.svg`,         title: 'overview.actions.addVehicle',      subtitle: 'overview.actions.addVehicleSub',      action: () => this.navigateToAddCar() },
      { iconSrc: `${ICON_BASE}/hau-document.svg`,    title: 'overview.actions.uploadDoc',       subtitle: 'overview.actions.uploadDocSub',       action: () => this.navigateToGarage() },
      { iconSrc: `${ICON_BASE}/hau-wrench.svg`,      title: 'overview.actions.logMaintenance',  subtitle: 'overview.actions.logMaintenanceSub',  action: () => this.navigateToGarage() },
      { iconSrc: `${ICON_BASE}/hau-speedometer.svg`, title: 'overview.actions.checkDeadlines',  subtitle: 'overview.actions.checkDeadlinesSub',  action: () => this.navigateToGarage() },
    ];
  }

  ngOnInit(): void {
    this._carListFacade.loadCarList();
  }

  navigateToCarDetails(c: CarDto): void {
    void this._router.navigate([`${CARS_ROUTES.details.fullPath}/${c.id}`]);
  }

  navigateToAddCar(): void {
    void this._router.navigate([CARS_ROUTES.create.fullPath]);
  }

  navigateToGarage(): void {
    void this._router.navigate([HAU_ROUTES.cars.fullPath]);
  }

  private _buildDeadlineRow(c: CarDto, index: number): CarDeadlineRow {
    const rcaDays = [30, 20, 35][index % 3];
    const itpDays = [45, 40, 50][index % 3];
    const rovDays = [60, 55, 65][index % 3];
    const oilKm   = [1200, 800, 1700][index % 3];
    return { car: c, rca: this._addDays(rcaDays), itp: this._addDays(itpDays), rov: this._addDays(rovDays), oilKm };
  }

  private _addDays(days: number): { days: number; dateStr: string } {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return { days, dateStr: d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) };
  }
}
