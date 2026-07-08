import { Location, LowerCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  IonBackButton, IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonIcon,
  IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton,
  IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, MenuController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { carOutline, closeOutline, notificationsOutline } from 'ionicons/icons';
import { combineLatest, filter, Subject, takeUntil } from 'rxjs';
import { TranslocoPipe } from '@ngneat/transloco';
import { AuthService } from '@hau/features/auth/auth.service';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { VersionService } from '@hau/core/version.service';
import { CarAccessService } from '@hau/autogenapi/services/car-access.service';
import { CarAccessUserDto, CarDto, DocumentDto } from '@hau/autogenapi/models';
import { daysUntil, getDocExpiry } from '@hau/features/cars/cars.utils';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { NotificationsFacade } from '@hau/shared/state/notifications/notifications.facade';
import { NotificationDto } from '@hau/core/notifications-api.service';
import { NotificationsSocketService } from '@hau/core/notifications-socket.service';
import { PushNotificationsService } from '@hau/core/push-notifications.service';

const EXPIRY_THRESHOLD_DAYS = 30;
const URGENT_THRESHOLD_DAYS = 3;
const ICON_BASE = 'assets/icons';

const DOC_SOURCES: { type: string; labelKey: string; carField: keyof CarDto }[] = [
  { type: 'RCA', labelKey: 'overview.deadlines.insurance', carField: 'rca_expiry_date' },
  { type: 'ITP', labelKey: 'overview.deadlines.technicalInspection', carField: 'itp_expiry_date' },
  { type: 'ROV', labelKey: 'overview.deadlines.vignette', carField: 'rov_expiry_date' },
];

export interface AttentionItem {
  carName: string;
  docLabelKey: string;
  daysLeft: number;
  severity: 'urgent' | 'warning';
}

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    IonSplitPane, IonButtons, IonTitle, IonMenuButton, IonBackButton,
    IonToolbar, IonHeader, IonMenu, IonContent, IonRouterOutlet, IonList,
    IonListHeader, IonItem, IonLabel, IonIcon, IonButton, IonBadge, TranslocoPipe,
    LowerCasePipe,
  ],
})
export class MainComponent implements OnInit, OnDestroy {
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

  private readonly _destroy$ = new Subject<void>();

  readonly icons = {
    car:        `${ICON_BASE}/hau-car.svg`,
    home:       `${ICON_BASE}/hau-home.svg`,
    warning:    `${ICON_BASE}/hau-warning.svg`,
    logout:     `${ICON_BASE}/hau-logout.svg`,
    checkCircle:`${ICON_BASE}/hau-check-circle.svg`,
    add:        `${ICON_BASE}/hau-add.svg`,
  };

  readonly menuItems = [
    { key: 'overview',     labelKey: 'sidebar.nav.overview',     icon: `${ICON_BASE}/hau-speedometer.svg`, route: '/main/overview',    disabled: false },
    { key: 'documents',    labelKey: 'sidebar.nav.documents',    icon: `${ICON_BASE}/hau-document.svg`,    route: '/main/documents',   disabled: false },
    { key: 'maintenance',  labelKey: 'sidebar.nav.maintenance',  icon: `${ICON_BASE}/hau-wrench.svg`,      route: '/main/maintenance', disabled: false },
    { key: 'reports',      labelKey: 'sidebar.nav.reports',      icon: `${ICON_BASE}/hau-chart.svg`,       route: '',                  disabled: true  },
    { key: 'blog',         labelKey: 'sidebar.nav.blog',         icon: `${ICON_BASE}/hau-pencil.svg`,      route: '/main/blog',        disabled: false },
  ];

  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService,
    private carAccessService: CarAccessService,
    private menuCtrl: MenuController,
    private carListFacade: CarListFacade,
    private bootstrapFacade: BootstrapFacade,
    private notificationsFacade: NotificationsFacade,
    private notificationsSocketService: NotificationsSocketService,
    private pushNotificationsService: PushNotificationsService,
  ) {
    addIcons({ carOutline, notificationsOutline, closeOutline });
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
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
      .pipe(takeUntil(this._destroy$))
      .subscribe(items => { this.notifications = items; });

    this.notificationsFacade.unreadCount$
      .pipe(takeUntil(this._destroy$))
      .subscribe(count => { this.unreadNotifCount = count; });

    this.bootstrapFacade.me$
      .pipe(takeUntil(this._destroy$))
      .subscribe(me => { this.currentUser = me; });

    combineLatest([this.bootstrapFacade.ownedCars$, this.bootstrapFacade.sharedCars$])
      .pipe(takeUntil(this._destroy$))
      .subscribe(([owned, shared]) => {
        this.vehicleCount = owned.filter(c => c.status !== 'SOLD').length;
        this.sharedVehicleCount = shared.filter(e => e.car.status !== 'SOLD').length;
        this.acceptedCarIds = new Set(shared.map(e => e.car.id));
      });

    combineLatest([this.bootstrapFacade.ownedCars$, this.bootstrapFacade.documents$])
      .pipe(takeUntil(this._destroy$))
      .subscribe(([cars, docsByCarId]) => {
        this.attentionItems = this.buildAttentionItems(cars, docsByCarId);
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private buildAttentionItems(
    cars: CarDto[],
    docsByCarId: Record<number, DocumentDto[]>,
  ): AttentionItem[] {
    const items: AttentionItem[] = [];

    for (const car of cars) {
      const carName = car.nickname || `${car.make} ${car.model}`;
      const docs = docsByCarId[car.id] ?? [];

      for (const { type, labelKey, carField } of DOC_SOURCES) {
        const raw = getDocExpiry(docs, type) ?? (car[carField] as string | null | undefined);
        if (!raw) continue;

        const daysLeft = daysUntil(raw);
        if (daysLeft === null || daysLeft > EXPIRY_THRESHOLD_DAYS) continue;

        items.push({
          carName,
          docLabelKey: labelKey,
          daysLeft,
          severity: daysLeft < URGENT_THRESHOLD_DAYS ? 'urgent' : 'warning',
        });
      }
    }

    return items.sort((a, b) => a.daysLeft - b.daysLeft);
  }

  isCarShareAccepted(carId: number): boolean {
    return this.acceptedCarIds.has(carId);
  }

  acceptCarShareNotification(notif: NotificationDto): void {
    const carId = notif.data['carId'];
    this.acceptingNotifId = notif.id;
    this.carAccessService.acceptInvitation({ carId }).subscribe({
      next: () => {
        this.acceptingNotifId = null;
        this.notificationsFacade.markAsRead(notif.id);
        this.bootstrapFacade.forceRefresh();
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
      void this.closeMenu().then(() =>
        this.router.navigate([`${CARS_ROUTES.details.fullPath}/${notif.data['carId']}`]),
      );
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

  get currentPageTitle(): string {
    const url = this.currentPath;
    if (url.startsWith('/main/blog/new')) return 'blog.newEntry';
    if (url.startsWith('/main/blog')) return 'blog.title';
    if (url.startsWith('/main/cars/create')) return 'sidebar.addVehicle';
    if (url.startsWith('/main/cars')) return 'sidebar.nav.garage';
    if (url.startsWith('/main/documents')) return 'sidebar.nav.documents';
    if (url.startsWith('/main/maintenance')) return 'sidebar.nav.maintenance';
    if (url.startsWith('/main/overview')) return 'overview.title';
    if (url.startsWith('/main/settings')) return 'sidebar.settings';
    return 'homepage';
  }

  get showBackButton(): boolean {
    const url = this.currentPath;
    return url !== '/main/overview' && url !== '/main/cars' && url !== '/main/blog' && url !== '/main/documents' && url !== '/main/documents/' && url !== '/main/maintenance' && url !== '/main/maintenance/';
  }

  get backHref(): string {
    const url = this.currentPath;
    if (url.startsWith('/main/cars')) return '/main/cars';
    if (url.startsWith('/main/blog')) return '/main/blog';
    if (url.startsWith('/main/documents')) return '/main/documents';
    return '/main/overview';
  }

  goBack(): void { this.location.back(); }

  private closeMenu(): Promise<boolean> {
    return this.menuCtrl.close();
  }

  navigateTo(route: string, key: string, disabled = false) {
    if (disabled) return;
    this.selectedMenuItem = key;
    void this.closeMenu().then(() => this.router.navigate([route]));
  }

  get userInitials(): string {
    const user = this.currentUser;
    if (!user) return '';
    return `${user.first_name?.[0] ?? ''}${user.last_name?.[0] ?? ''}`.toUpperCase();
  }

  navigateToHome()        { void this.closeMenu().then(() => this.router.navigate([HAU_ROUTES.overview.fullPath])); }
  navigateToGarage()      { void this.closeMenu().then(() => this.router.navigate([HAU_ROUTES.cars.fullPath])); }
  navigateToAddVehicle()  { void this.closeMenu().then(() => this.router.navigate([CARS_ROUTES.create.fullPath])); }
  navigateToSettings()    { void this.closeMenu().then(() => this.router.navigate([HAU_ROUTES.settings.fullPath])); }

  isActive(item: { route: string; key: string }) {
    return this.selectedMenuItem === item.key;
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
    if (path.startsWith(HAU_ROUTES.overview.fullPath)) {
      return 'overview';
    }
    return 'overview';
  }

  logout() {
    this.carListFacade.reset();
    this.notificationsSocketService.disconnect();
    this.authService.logout().subscribe(() => {
      void this.closeMenu().then(() => this.router.navigate([HAU_ROUTES.auth.fullPath]));
    });
  }
}
