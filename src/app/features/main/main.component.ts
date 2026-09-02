import { Location, LowerCasePipe, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  IonBackButton, IonButtons, IonHeader, IonIcon,
  IonRouterOutlet, IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  carOutline, closeOutline, notificationsOutline, searchOutline, chevronDownOutline,
  timeOutline, documentTextOutline, barChartOutline, calendarOutline, readerOutline,
  heartOutline, bookOutline, shareSocialOutline, personOutline, addOutline,
} from 'ionicons/icons';
import { combineLatest, filter } from 'rxjs';
import { TranslocoPipe } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService } from '@hau/features/auth/auth.service';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { VersionService } from '@hau/core/version.service';
import { CarAccessFacade } from '@hau/features/cars/state/car-access/car-access.facade';
import { CarAccessUserDto, CarDto, DocumentDto, MaintenanceRecordDto } from '@hau/autogenapi/models';
import { BootstrapSharedCarEntry } from '@hau/autogenapi/models/bootstrap-response-dto';
import { daysUntil } from '@hau/shared/utils/date-math.util';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { NotificationsFacade } from '@hau/shared/state/notifications/notifications.facade';
import { NotificationDto } from '@hau/core/notifications-api.service';
import { NotificationsSocketService } from '@hau/core/notifications-socket.service';
import { PushNotificationsService } from '@hau/core/push-notifications.service';
import { AttentionItem, buildAttentionItems } from '@hau/shared/utils/attention-items.util';

export interface VisibleCarEntry {
  car: CarDto;
  shared: boolean;
}

const EXPIRY_THRESHOLD_DAYS = 30;
const ICON_BASE = 'assets/icons';

@UntilDestroy()
@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    IonButtons, IonBackButton,
    IonToolbar, IonHeader, IonRouterOutlet,
    IonIcon, TranslocoPipe,
    LowerCasePipe, NgTemplateOutlet,
  ],
})
export class MainComponent implements OnInit {
  readonly versionService = inject(VersionService);

  vehicleCount = 0;
  sharedVehicleCount = 0;
  currentPath = this.router.url;
  selectedMenuItem = this.resolveActiveMenuItem(this.router.url);
  attentionItems: AttentionItem[] = [];
  notifications: NotificationDto[] = [];
  unreadNotifCount = 0;
  acceptedCarIds = new Set<number>();
  acceptingNotifId: number | null = null;
  currentUser: CarAccessUserDto | null = null;

  ownedCars: CarDto[] = [];
  sharedCars: BootstrapSharedCarEntry[] = [];
  documentsByCarId: Record<number, DocumentDto[]> = {};
  maintenanceByCarId: Record<number, MaintenanceRecordDto[]> = {};
  expandedCarId: number | null = null;
  carSearchQuery = '';
  mobileNotifPanelOpen = false;

  readonly icons = {
    car:        `${ICON_BASE}/hau-car.svg`,
    home:       `${ICON_BASE}/hau-home.svg`,
    warning:    `${ICON_BASE}/hau-warning.svg`,
    logout:     `${ICON_BASE}/hau-logout.svg`,
    checkCircle:`${ICON_BASE}/hau-check-circle.svg`,
    add:        `${ICON_BASE}/hau-add.svg`,
  };

  readonly menuItems = [
    { key: 'garage',       labelKey: 'sidebar.nav.garage',       icon: `${ICON_BASE}/hau-car.svg`,         route: '/main/cars',        disabled: false },
    { key: 'documents',    labelKey: 'sidebar.nav.documents',    icon: `${ICON_BASE}/hau-document.svg`,    route: '/main/documents',   disabled: false },
    { key: 'maintenance',  labelKey: 'sidebar.nav.maintenance',  icon: `${ICON_BASE}/hau-wrench.svg`,      route: '/main/maintenance', disabled: false },
    { key: 'reports',      labelKey: 'sidebar.nav.reports',      icon: `${ICON_BASE}/hau-chart.svg`,       route: '/main/reports',     disabled: false },
    { key: 'blog',         labelKey: 'sidebar.nav.blog',         icon: `${ICON_BASE}/hau-pencil.svg`,      route: '/main/blog',        disabled: false },
  ];

  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService,
    private carAccessFacade: CarAccessFacade,
    private carListFacade: CarListFacade,
    private bootstrapFacade: BootstrapFacade,
    private notificationsFacade: NotificationsFacade,
    private notificationsSocketService: NotificationsSocketService,
    private pushNotificationsService: PushNotificationsService,
  ) {
    addIcons({
      carOutline, notificationsOutline, closeOutline, searchOutline, chevronDownOutline,
      timeOutline, documentTextOutline, barChartOutline, calendarOutline, readerOutline,
      heartOutline, bookOutline, shareSocialOutline, personOutline, addOutline,
    });
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd), untilDestroyed(this))
      .subscribe(() => {
        this.currentPath = this.router.url;
        this.selectedMenuItem = this.resolveActiveMenuItem(this.currentPath);
      });
  }

  ngOnInit(): void {
    this.versionService.check();
    this.bootstrapFacade.bootstrap();

    this.notificationsFacade.load();
    this.notificationsSocketService.connect();
    void this.pushNotificationsService.register();

    this.notificationsFacade.items$
      .pipe(untilDestroyed(this))
      .subscribe(items => { this.notifications = items; });

    this.notificationsFacade.unreadCount$
      .pipe(untilDestroyed(this))
      .subscribe(count => { this.unreadNotifCount = count; });

    this.bootstrapFacade.me$
      .pipe(untilDestroyed(this))
      .subscribe(me => { this.currentUser = me; });

    combineLatest([this.bootstrapFacade.ownedCars$, this.bootstrapFacade.sharedCars$])
      .pipe(untilDestroyed(this))
      .subscribe(([owned, shared]) => {
        this.ownedCars = owned.filter(c => c.status !== 'SOLD');
        this.sharedCars = shared.filter(e => e.car.status !== 'SOLD');
        this.vehicleCount = this.ownedCars.length;
        this.sharedVehicleCount = this.sharedCars.length;
        this.acceptedCarIds = new Set(shared.map(e => e.car.id));
      });

    combineLatest([this.bootstrapFacade.ownedCars$, this.bootstrapFacade.documents$])
      .pipe(untilDestroyed(this))
      .subscribe(([cars, docsByCarId]) => {
        this.documentsByCarId = docsByCarId;
        this.attentionItems = buildAttentionItems(cars, docsByCarId);
      });

    this.bootstrapFacade.maintenance$
      .pipe(untilDestroyed(this))
      .subscribe(maintenanceByCarId => { this.maintenanceByCarId = maintenanceByCarId; });
  }

  isCarShareAccepted(carId: number): boolean {
    return this.acceptedCarIds.has(carId);
  }

  acceptCarShareNotification(notif: NotificationDto): void {
    const carId = notif.data['carId'];
    this.acceptingNotifId = notif.id;
    // Facade already triggers a bootstrap refresh on success.
    this.carAccessFacade.acceptInvitation(carId).subscribe({
      next: () => {
        this.acceptingNotifId = null;
        this.notificationsFacade.markAsRead(notif.id);
      },
      error: () => {
        this.acceptingNotifId = null;
      },
    });
  }

  onNotificationClick(notif: NotificationDto): void {
    this.notificationsFacade.markAsRead(notif.id);

    const navigableTypes: NotificationDto['type'][] = ['CAR_SHARED', 'CAR_ACCESS_ROLE_CHANGED', 'CAR_ACCESS_ACCEPTED', 'DOCUMENT_EXPIRING', 'VIN_CONFLICT', 'LICENSE_PLATE_CONFLICT'];
    if (navigableTypes.includes(notif.type) && notif.data['carId'] != null) {
      void this.router.navigate([`${CARS_ROUTES.details.fullPath}/${notif.data['carId']}`]);
    }
  }

  markAllNotificationsRead(): void {
    this.notificationsFacade.markAllAsRead();
  }

  deleteNotification(notif: NotificationDto): void {
    this.notificationsFacade.delete(notif.id);
  }

  hasClearableNotifications(): boolean {
    return this.notifications.some(n => !!n.read_at);
  }

  clearReadNotifications(): void {
    this.notificationsFacade.clearRead();
  }

  private static readonly CAR_DETAILS_PREFIX = '/main/cars/details/';

  // Translation keys for scoped sub-screen path segments, used to label the back
  // pill when going up from a 3rd-level screen (e.g. a maintenance record's detail
  // screen back to Istoric) instead of all the way back to the hub.
  private static readonly SEGMENT_LABEL_KEYS: Record<string, string> = {
    istoric: 'cars.details.hub.istoric',
    documents: 'cars.details.hub.documente',
    rapoarte: 'cars.details.hub.rapoarte',
    notite: 'cars.details.hub.notite',
    partajare: 'cars.details.hub.partajare',
    plan: 'cars.details.hub.plan',
  };

  // ── Scoped-per-car chrome (hub + its sub-screens): no tab bar/FAB, back-link goes up one level ──
  private _scopedSegments(): string[] {
    return this.currentPath.split('?')[0].slice(MainComponent.CAR_DETAILS_PREFIX.length).split('/').filter(Boolean);
  }

  get isScopedCarRoute(): boolean {
    return this.currentPath.split('?')[0].startsWith(MainComponent.CAR_DETAILS_PREFIX);
  }

  get isCarHubRoot(): boolean {
    return this.isScopedCarRoute && this._scopedSegments().length === 1;
  }

  get scopedCarId(): number | null {
    if (!this.isScopedCarRoute) return null;
    const id = Number(this._scopedSegments()[0]);
    return Number.isFinite(id) ? id : null;
  }

  get scopedCarName(): string {
    const id = this.scopedCarId;
    if (id === null) return '';
    const car = this.ownedCars.find(c => c.id === id) ?? this.sharedCars.find(e => e.car.id === id)?.car;
    return car ? (car.nickname || `${car.make} ${car.model}`) : '';
  }

  // Non-null only for 3rd-level-and-deeper scoped screens, where the back pill
  // should name the parent sub-screen (e.g. 'Istoric') instead of the car.
  get backSegmentLabelKey(): string | null {
    if (!this.isScopedCarRoute || this.isCarHubRoot) return null;
    const segments = this._scopedSegments();
    if (segments.length <= 2) return null;
    return MainComponent.SEGMENT_LABEL_KEYS[segments[segments.length - 2]] ?? null;
  }

  // Sibling top-level destinations reached directly via the sidebar/bottom tabs —
  // these are never "drilled into", so they never get a back button.
  private static readonly TOP_LEVEL_ROUTES = new Set([
    '/main/cars',
    '/main/documents', '/main/documents/',
    '/main/maintenance', '/main/maintenance/',
    '/main/reports', '/main/reports/',
    '/main/blog',
    '/main/settings', '/main/settings/',
  ]);

  get showBackButton(): boolean {
    return !MainComponent.TOP_LEVEL_ROUTES.has(this.currentPath);
  }

  get backHref(): string {
    if (this.isScopedCarRoute) {
      const segments = this._scopedSegments();
      if (segments.length <= 1) return '/main/cars';
      return `${MainComponent.CAR_DETAILS_PREFIX}${segments.slice(0, -1).join('/')}`;
    }
    const url = this.currentPath;
    if (url.startsWith('/main/cars')) return '/main/cars';
    if (url.startsWith('/main/blog')) return '/main/blog';
    if (url.startsWith('/main/documents')) return '/main/documents';
    return '/main/cars';
  }

  goBack(): void { this.location.back(); }

  navigateTo(route: string, key: string, disabled = false) {
    if (disabled) return;
    this.selectedMenuItem = key;
    void this.router.navigate([route]);
  }

  get userInitials(): string {
    const user = this.currentUser;
    if (!user) return '';
    return `${user.first_name?.[0] ?? ''}${user.last_name?.[0] ?? ''}`.toUpperCase();
  }

  navigateToHome()        { void this.router.navigate([HAU_ROUTES.cars.fullPath]); }
  navigateToGarage()      { void this.router.navigate([HAU_ROUTES.cars.fullPath]); }
  navigateToAddVehicle()  { void this.router.navigate([CARS_ROUTES.create.fullPath]); }
  navigateToSettings()    { void this.router.navigate([HAU_ROUTES.settings.fullPath]); }
  navigateToReports()     { void this.router.navigate([HAU_ROUTES.reports.fullPath]); }

  isActive(item: { route: string; key: string }) {
    return this.selectedMenuItem === item.key;
  }

  // ── "Mașinile mele" — per-car list + subnav (desktop sidebar / mobile hub) ──
  get visibleCars(): VisibleCarEntry[] {
    const query = this.carSearchQuery.trim().toLowerCase();
    const owned: VisibleCarEntry[] = this.ownedCars.map(car => ({ car, shared: false }));
    const shared: VisibleCarEntry[] = this.sharedCars.map(e => ({ car: e.car, shared: true }));
    const all = [...owned, ...shared];
    if (!query) return all;
    return all.filter(({ car }) => {
      const haystack = `${car.nickname ?? ''} ${car.make} ${car.model} ${car.license_plate ?? ''}`.toLowerCase();
      return haystack.includes(query);
    });
  }

  toggleCarExpand(carId: number): void {
    this.expandedCarId = this.expandedCarId === carId ? null : carId;
  }

  isCarExpanded(carId: number): boolean {
    return this.expandedCarId === carId;
  }

  hasCarAlert(carId: number): boolean {
    return this.getCarDocBadge(carId) > 0;
  }

  getCarIstoricCount(carId: number): number {
    return (this.maintenanceByCarId[carId] ?? []).length;
  }

  getCarDocBadge(carId: number): number {
    const docs = this.documentsByCarId[carId] ?? [];
    return docs.filter(d => {
      const days = daysUntil(d.expiry_date);
      return days !== null && days <= EXPIRY_THRESHOLD_DAYS;
    }).length;
  }

  goToCarHub(carId: number): void {
    void this.router.navigate([`${CARS_ROUTES.details.fullPath}/${carId}`]);
  }

  goToCarIstoric(carId: number): void {
    void this.router.navigate([`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.istoric.path}`]);
  }

  goToCarDocuments(carId: number): void {
    void this.router.navigate([`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.documents.path}`]);
  }

  goToCarReports(carId: number): void {
    void this.router.navigate([`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.rapoarte.path}`]);
  }

  goToCarPlan(carId: number): void {
    void this.router.navigate([`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.plan.path}`]);
  }

  goToCarNotes(carId: number): void {
    void this.router.navigate([`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.notite.path}`]);
  }

  goToCarSharing(carId: number): void {
    void this.router.navigate([`${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.partajare.path}`]);
  }

  goToJurnal(): void {
    void this.router.navigate([HAU_ROUTES.blog.fullPath]);
  }

  isTabActive(prefix: string): boolean {
    return this.currentPath.startsWith(prefix);
  }

  private resolveActiveMenuItem(path: string) {
    if (path.startsWith(HAU_ROUTES.cars.fullPath)) {
      return 'garage';
    }
    if (path.startsWith(HAU_ROUTES.documents.fullPath)) {
      return 'documents';
    }
    if (path.startsWith(HAU_ROUTES.maintenance.fullPath)) {
      return 'maintenance';
    }
    if (path.startsWith(HAU_ROUTES.blog.fullPath)) {
      return 'blog';
    }
    if (path.startsWith(HAU_ROUTES.reports.fullPath)) {
      return 'reports';
    }
    return 'garage';
  }

  logout() {
    this.carListFacade.reset();
    this.notificationsSocketService.disconnect();
    this.authService.logout().subscribe(() => {
      void this.router.navigate([HAU_ROUTES.auth.fullPath]);
    });
  }
}
