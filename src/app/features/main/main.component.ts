import { Location, LowerCasePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon,
  IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton,
  IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, MenuController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, carOutline } from 'ionicons/icons';
import { catchError, filter, forkJoin, map, of, switchMap } from 'rxjs';
import { TranslocoPipe } from '@ngneat/transloco';
import { AuthService } from '@hau/features/auth/auth.service';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { VersionService } from '@hau/core/version.service';
import { CarAccessService } from '@hau/autogenapi/services/car-access.service';
import { CarService } from '@hau/autogenapi/services/car.service';
import { DocumentService } from '@hau/autogenapi/services/document.service';
import { CarDto, DocumentDto, SharedCarDto } from '@hau/autogenapi/models';
import { daysUntil, getDocExpiry } from '@hau/features/cars/cars.utils';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';

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
    IonListHeader, IonItem, IonLabel, IonIcon, IonButton, TranslocoPipe,
    LowerCasePipe,
  ],
})
export class MainComponent implements OnInit {
  readonly versionService = inject(VersionService);

  vehicleCount = 0;
  sharedVehicleCount = 0;
  currentPath = this.router.url;
  selectedMenuItem = this.resolveActiveMenuItem(this.router.url);
  pendingInvites: SharedCarDto[] = [];
  acceptingInviteId: number | null = null;
  attentionItems: AttentionItem[] = [];

  readonly icons = {
    car:        `${ICON_BASE}/hau-car.svg`,
    home:       `${ICON_BASE}/hau-home.svg`,
    warning:    `${ICON_BASE}/hau-warning.svg`,
    settings:   `${ICON_BASE}/hau-settings.svg`,
    logout:     `${ICON_BASE}/hau-logout.svg`,
    chevron:    `${ICON_BASE}/hau-chevron.svg`,
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
    private carService: CarService,
    private documentService: DocumentService,
    private menuCtrl: MenuController,
    private carListFacade: CarListFacade,
  ) {
    addIcons({ mailOutline, carOutline });
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentPath = this.router.url;
        this.selectedMenuItem = this.resolveActiveMenuItem(this.currentPath);
        this.refreshAppData();
      });
  }

  ngOnInit(): void {
    this.versionService.check();
    this.refreshAppData();
  }

  private refreshAppData(): void {
    this.carListFacade.loadCarList();
    this.loadSidebarData();
  }

  private loadSidebarData(): void {
    forkJoin({
      owned: this.carService.carControllerGetAllCars(),
      shared: this.carAccessService.getSharedCars(),
    }).pipe(
      switchMap(({ owned, shared }) => {
        if (!owned.length) {
          return of({ owned, shared, docsByCarId: {} as Record<number, DocumentDto[]> });
        }
        return forkJoin(
          owned.map(car =>
            this.documentService.documentControllerGetDocumentsByCarId({ carId: String(car.id) }).pipe(
              map(docs => ({ carId: car.id, docs })),
              catchError(() => of({ carId: car.id, docs: [] as DocumentDto[] })),
            ),
          ),
        ).pipe(
          map(results => ({
            owned,
            shared,
            docsByCarId: Object.fromEntries(results.map(r => [r.carId, r.docs])),
          })),
        );
      }),
    ).subscribe({
      next: ({ owned, shared, docsByCarId }) => {
        this.vehicleCount = owned.length;
        this.attentionItems = this.buildAttentionItems(owned, docsByCarId);
        this.pendingInvites = shared.filter(c => c.accepted_at === null);
        this.sharedVehicleCount = shared.filter(c => c.accepted_at !== null).length;
      },
      error: () => {},
    });
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

  acceptInvite(carId: number): void {
    this.acceptingInviteId = carId;
    this.carAccessService.acceptInvitation({ carId }).subscribe({
      next: () => {
        this.pendingInvites = this.pendingInvites.filter(c => c.id !== carId);
        this.acceptingInviteId = null;
      },
      error: () => {
        this.acceptingInviteId = null;
      },
    });
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
    return url !== '/main/overview' && url !== '/main/cars' && url !== '/main/blog' && url !== '/main/documents' && url !== '/main/documents/';
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
    this.authService.logout('');
    void this.closeMenu().then(() => this.router.navigate([HAU_ROUTES.auth.fullPath]));
  }
}
