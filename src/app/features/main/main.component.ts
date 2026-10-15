import { NavigationHistoryService } from '@hau/core/navigation/navigation-history.service';
import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonRouterOutlet,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  carOutline,
  closeOutline,
  notificationsOutline,
  searchOutline,
  chevronDownOutline,
  timeOutline,
  documentTextOutline,
  barChartOutline,
  calendarOutline,
  readerOutline,
  heartOutline,
  bookOutline,
  shareSocialOutline,
  personOutline,
  addOutline,
  businessOutline,
  briefcaseOutline,
  settingsOutline,
  cashOutline,
  documentAttachOutline,
} from 'ionicons/icons';
import { combineLatest, filter } from 'rxjs';
import { TranslocoPipe } from '@jsverse/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService, AUTH_ROUTES } from '@hau/features/auth';
import { SessionContextService } from '@hau/core/session/session-context.service';
import {
  ContextScopeData,
  fitsContext,
} from '@hau/features/main/context-scope.guard';
import { CARS_ROUTES, CarListFacade } from '@hau/features/cars';
import { BLOG_ROUTES } from '@hau/features/blog';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { VersionService } from '@hau/core/version.service';
import {
  CarAccessUserDto,
  CarDto,
  DocumentDto,
  MaintenanceRecordDto,
} from '@hau/autogenapi/models';
import { BootstrapSharedCarEntry } from '@hau/autogenapi/models/bootstrap-response-dto';
import { daysUntil } from '@hau/shared/utils/date-math.util';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { NotificationsFacade } from '@hau/shared/state/notifications/notifications.facade';
import { NotificationsSocketService } from '@hau/core/notifications-socket.service';
import { PushNotificationsService } from '@hau/core/push-notifications.service';
import { AdminApiService } from '@hau/features/admin';
import {
  AttentionItem,
  buildAttentionItems,
} from '@hau/shared/utils/attention-items.util';
import { FeatureService } from '@hau/core/features/feature.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { FabActionService } from '@hau/core/fab-action.service';
import { CarTabContribution } from '@hau/core/car-page/car-page.contributions';
import { CarPageContributionsService } from '@hau/core/car-page/car-page-contributions.service';
import { NotificationsPanelComponent } from '@hau/features/notifications';
import { ContextBadgeComponent } from '@hau/features/main/context-badge/context-badge.component';
import {
  NavigationPreferencesService,
  ResolvedBottomBarEntry,
} from '@hau/core/navigation/navigation-preferences.service';
import { SingleCarService } from '@hau/core/navigation/single-car.service';

/** A sidebar entry. `scope`/`orgRoles` mirror the route's `data` (see main.routes.ts / ACCOUNT-CONTEXT.md). */
export interface NavItem extends ContextScopeData {
  key: string;
  labelKey: string;
  icon: string;
  route: string;
  disabled: boolean;
  /** Extra gate on top of scope/role (e.g. the app-admin flag). */
  requiresAdmin?: boolean;
}

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
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    IonButtons,
    IonBackButton,
    IonToolbar,
    IonHeader,
    IonRouterOutlet,
    IonIcon,
    TranslocoPipe,
    NgTemplateOutlet,
    NotificationsPanelComponent,
    ContextBadgeComponent,
  ],
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly versionService = inject(VersionService);
  readonly headerActions = inject(HeaderActionsService);
  private readonly adminApi = inject(AdminApiService);
  readonly sessionContext = inject(SessionContextService);
  readonly fabAction = inject(FabActionService);
  private readonly _contributions = inject(CarPageContributionsService);
  private readonly navHistory = inject(NavigationHistoryService);
  private readonly _hostEl = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly navPrefs = inject(NavigationPreferencesService);
  readonly singleCarService = inject(SingleCarService);

  // The floating shell header's real rendered height (title, back button, safe-area
  // padding — see .hau-header--minimal), exposed as a CSS custom property so every
  // routed page's <ion-content> can reserve exactly that much clearance at its top
  // via --padding-top (see global.scss). Measured live via ResizeObserver rather than
  // a fixed constant — a guessed pixel value here is exactly what caused the
  // 2026-08-15 and 2026-09-03 incidents (see main.component.scss), and this number
  // isn't even constant: it changes with the safe-area inset, and collapses to 0 on
  // routes with no header content at all.
  // `read: ElementRef` is required here — ion-header matches the IonHeader
  // Angular component (imported below), so a bare @ViewChild('shellHeader')
  // would resolve to that component instance instead of the DOM node, and
  // .nativeElement would silently be undefined.
  @ViewChild('shellHeader', { read: ElementRef })
  private _shellHeaderRef?: ElementRef<HTMLElement>;
  private _headerResizeObserver?: ResizeObserver;

  vehicleCount = 0;
  sharedVehicleCount = 0;
  currentPath = this.router.url;
  selectedMenuItem = this.resolveActiveMenuItem(this.router.url);
  attentionItems: AttentionItem[] = [];
  unreadNotifCount = 0;
  currentUser: CarAccessUserDto | null = null;

  ownedCars: CarDto[] = [];
  sharedCars: BootstrapSharedCarEntry[] = [];
  documentsByCarId: Record<number, DocumentDto[]> = {};
  maintenanceByCarId: Record<number, MaintenanceRecordDto[]> = {};
  expandedCarId: number | null = MainComponent.scopedCarIdFromPath(
    this.router.url,
  );
  carSearchQuery = '';

  readonly icons = {
    car: `${ICON_BASE}/hau-car.svg`,
    home: `${ICON_BASE}/hau-home.svg`,
    warning: `${ICON_BASE}/hau-warning.svg`,
    logout: `${ICON_BASE}/hau-logout.svg`,
    checkCircle: `${ICON_BASE}/hau-check-circle.svg`,
    add: `${ICON_BASE}/hau-add.svg`,
  };

  private readonly featureService = inject(FeatureService);

  private readonly allNavItems: NavItem[] = [
    {
      key: 'garage',
      labelKey: 'sidebar.nav.garage',
      icon: `${ICON_BASE}/hau-car.svg`,
      route: '/main/cars',
      disabled: false,
      scope: ['personal', 'business'],
    },
    {
      key: 'documents',
      labelKey: 'sidebar.nav.documents',
      icon: `${ICON_BASE}/hau-document.svg`,
      route: '/main/documents',
      disabled: false,
      scope: ['personal', 'business'],
      feature: 'documents',
    },
    {
      key: 'saleContract',
      labelKey: 'sidebar.nav.saleContract',
      icon: `${ICON_BASE}/hau-contract.svg`,
      route: '/main/sale-contract',
      disabled: false,
      scope: ['personal', 'business'],
      orgRoles: ['OWNER', 'SUPER_ADMIN', 'FLEET_ADMIN'],
      feature: 'sale_contract',
    },
    {
      key: 'maintenance',
      labelKey: 'sidebar.nav.maintenance',
      icon: `${ICON_BASE}/hau-wrench.svg`,
      route: '/main/maintenance',
      disabled: false,
      scope: ['personal', 'business'],
      feature: 'maintenance',
    },
    {
      key: 'reports',
      labelKey: 'sidebar.nav.reports',
      icon: `${ICON_BASE}/hau-chart.svg`,
      route: '/main/reports',
      disabled: false,
      scope: ['personal', 'business'],
      feature: 'reports',
    },
    {
      key: 'blog',
      labelKey: 'sidebar.nav.blog',
      icon: `${ICON_BASE}/hau-pencil.svg`,
      route: '/main/blog',
      disabled: false,
      scope: ['personal', 'business'],
      feature: 'journal',
    },
    // App-owner tool: personal context only, and still needs User.is_admin (resolved once per shell lifetime).
    {
      key: 'admin',
      labelKey: 'sidebar.nav.admin',
      icon: `${ICON_BASE}/hau-speedometer.svg`,
      route: HAU_ROUTES.admin.fullPath,
      disabled: false,
      scope: ['personal'],
      requiresAdmin: true,
    },
    // Members / roles / cost dashboard of the active organization: business context only.
    {
      key: 'organization',
      labelKey: 'sidebar.nav.organization',
      icon: `${ICON_BASE}/hau-settings.svg`,
      route: HAU_ROUTES.organization.fullPath,
      disabled: false,
      scope: ['business'],
    },
    {
      key: 'supplier',
      labelKey: 'sidebar.nav.supplier',
      icon: `${ICON_BASE}/hau-briefcase.svg`,
      route: HAU_ROUTES.supplier.fullPath,
      disabled: false,
      scope: ['business'],
      feature: 'supplier',
    },
    {
      key: 'sentDestinations',
      labelKey: 'sidebar.nav.sentDestinations',
      icon: `${ICON_BASE}/hau-navigation.svg`,
      route: HAU_ROUTES.sentDestinations.fullPath,
      disabled: false,
      scope: ['personal', 'business'],
    },
  ];

  readonly isAdmin = signal(false);

  /** Sidebar items visible in the current context / org role. */
  readonly navItems = computed(() =>
    this.allNavItems.filter(
      item =>
        fitsContext(item, this.sessionContext, this.featureService) &&
        (!item.requiresAdmin || this.isAdmin()),
    ),
  );

  constructor(
    private router: Router,
    private authService: AuthService,
    private carListFacade: CarListFacade,
    private bootstrapFacade: BootstrapFacade,
    private notificationsFacade: NotificationsFacade,
    private notificationsSocketService: NotificationsSocketService,
    private pushNotificationsService: PushNotificationsService,
  ) {
    addIcons({
      carOutline,
      notificationsOutline,
      closeOutline,
      searchOutline,
      chevronDownOutline,
      timeOutline,
      documentTextOutline,
      barChartOutline,
      calendarOutline,
      readerOutline,
      heartOutline,
      bookOutline,
      shareSocialOutline,
      personOutline,
      addOutline,
      businessOutline,
      briefcaseOutline,
      settingsOutline,
      cashOutline,
      documentAttachOutline,
    });
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        untilDestroyed(this),
      )
      .subscribe(() => {
        this.currentPath = this.router.url;
        this.selectedMenuItem = this.resolveActiveMenuItem(this.currentPath);
        const scopedCarId = MainComponent.scopedCarIdFromPath(this.currentPath);
        if (scopedCarId !== null) {
          this.expandedCarId = scopedCarId;
        }
      });
  }

  ngOnInit(): void {
    // The header's ion-back-button would pop Ionic's own page stack / use its defaultHref;
    // capture the click first so Back always goes through the navigation history.
    this._hostEl.nativeElement.addEventListener('click', this._onBackClick, true);
    this.versionService.check();
    this.bootstrapFacade.bootstrap();

    this.notificationsFacade.load();
    this.notificationsSocketService.connect();
    void this.pushNotificationsService.register();

    this.adminApi
      .isAdmin()
      .pipe(untilDestroyed(this))
      .subscribe(isAdmin => {
        this.isAdmin.set(isAdmin);
      });

    this.notificationsFacade.unreadCount$
      .pipe(untilDestroyed(this))
      .subscribe(count => {
        this.unreadNotifCount = count;
      });

    this.bootstrapFacade.me$.pipe(untilDestroyed(this)).subscribe(me => {
      this.currentUser = me;
    });

    combineLatest([
      this.bootstrapFacade.ownedCars$,
      this.bootstrapFacade.sharedCars$,
    ])
      .pipe(untilDestroyed(this))
      .subscribe(([owned, shared]) => {
        this.ownedCars = owned.filter(c => c.status !== 'SOLD');
        this.sharedCars = shared.filter(e => e.car.status !== 'SOLD');
        this.vehicleCount = this.ownedCars.length;
        this.sharedVehicleCount = this.sharedCars.length;
      });

    combineLatest([
      this.bootstrapFacade.ownedCars$,
      this.bootstrapFacade.documents$,
    ])
      .pipe(untilDestroyed(this))
      .subscribe(([cars, docsByCarId]) => {
        this.documentsByCarId = docsByCarId;
        this.attentionItems = buildAttentionItems(cars, docsByCarId);
      });

    this.bootstrapFacade.maintenance$
      .pipe(untilDestroyed(this))
      .subscribe(maintenanceByCarId => {
        this.maintenanceByCarId = maintenanceByCarId;
      });
  }

  ngAfterViewInit(): void {
    const headerEl = this._shellHeaderRef?.nativeElement;
    if (!headerEl) return;

    this._headerResizeObserver = new ResizeObserver(entries => {
      const height = entries[0]?.contentRect.height ?? 0;
      document.documentElement.style.setProperty(
        '--hau-shell-header-h',
        `${height}px`,
      );
    });
    this._headerResizeObserver.observe(headerEl);
  }

  ngOnDestroy(): void {
    this._hostEl.nativeElement.removeEventListener('click', this._onBackClick, true);
    this._headerResizeObserver?.disconnect();
  }

  private static readonly CAR_DETAILS_PREFIX = '/main/cars/details/';

  // Parses the car id out of a scoped car route (e.g. "/main/cars/details/1/rapoarte" -> 1),
  // or null if the path isn't scoped to a car at all.
  private static scopedCarIdFromPath(path: string): number | null {
    const clean = path.split('?')[0];
    if (!clean.startsWith(MainComponent.CAR_DETAILS_PREFIX)) return null;
    const id = Number(
      clean.slice(MainComponent.CAR_DETAILS_PREFIX.length).split('/')[0],
    );
    return Number.isNaN(id) ? null : id;
  }

  // ── Scoped-per-car chrome (hub + its sub-screens): no tab bar/FAB, back-link goes up one level ──
  private _scopedSegments(): string[] {
    return this.currentPath
      .split('?')[0]
      .slice(MainComponent.CAR_DETAILS_PREFIX.length)
      .split('/')
      .filter(Boolean);
  }

  get isScopedCarRoute(): boolean {
    return this.currentPath
      .split('?')[0]
      .startsWith(MainComponent.CAR_DETAILS_PREFIX);
  }

  get isCarHubRoot(): boolean {
    return this.isScopedCarRoute && this._scopedSegments().length === 1;
  }

  // The car hub root gets the hero-photo overlay header (transparent, no
  // clearance, black scrim) only while it has no title — that's the "live"
  // car preview. The SOLD/archived view is the same route but does set a
  // title (see cars-details.component.ts `_pushHeaderTitle`), and reads much
  // better as a normal page (proper clearance, theme-tinted scrim, back
  // button + title in the bar) since it has no hero photo carousel bleeding
  // to the top edge — see main.component.html / main.component.scss. A hub
  // without a hero photo (common for fleet cars) has nothing to bleed under the
  // header either, so it also gets the normal clearance (`heroOverlay`).
  get isCarHubOverlay(): boolean {
    return (
      this.isCarHubRoot &&
      !this.headerActions.title() &&
      this.headerActions.heroOverlay()
    );
  }

  // The long "Adaugă vehicul" form has the same problem as the scoped-per-car
  // screens — the bottom tab bar just sits in the way while filling it in.
  get isCarFormRoute(): boolean {
    return this.currentPath.split('?')[0] === CARS_ROUTES.create.fullPath;
  }

  // Same reasoning for the Jurnal write/edit form (/main/blog/new, /main/blog/:id/edit).
  get isBlogWriteRoute(): boolean {
    const path = this.currentPath.split('?')[0];
    if (path === BLOG_ROUTES.new.fullPath) return true;
    return /^\/main\/blog\/[^/]+\/edit$/.test(path);
  }

  // Reached via a car's own "Jurnal" tile (/main/blog?carId=X) — the path is
  // still the top-level blog route, but the list is locked to that one car
  // (see BlogListComponent isScoped), so it's a car-scoped screen just like
  // /main/cars/details/... and should hide the main-menu tab bar the same way
  // — *except* when Journal is this car's own chosen bottom-bar slot, same
  // exception as any other car tab (see isScopedBlogBottomBarRoute below).
  get isScopedBlogRoute(): boolean {
    const [path, query] = this.currentPath.split('?');
    return (
      path === BLOG_ROUTES.list.fullPath &&
      new URLSearchParams(query ?? '').has('carId')
    );
  }

  // Journal's own version of isScopedCarBottomBarRoute (2026-10-05 fix — see "FAB audit" in
  // FEATURE.md): Journal became a `kind: 'car'` bottom-bar destination on 2026-10-04, but this
  // route's bar-hiding was never updated to match, so a car whose Journal tab *was* chosen for
  // the bar still lost it (and the shell FAB with it) the moment ?carId= was added — the one
  // car-kind destination that behaved differently from Documents/Istoric/Notes/Wishlist. Mirrors
  // isScopedCarBottomBarRoute's own logic (same `tab.isActive` check, via the `jurnal`
  // CarTabContribution's bespoke path+query `isActive` — see blog.car-page.ts), just keyed off
  // the blog route's own `?carId=` instead of the `/main/cars/details/:id` path param.
  get isScopedBlogBottomBarRoute(): boolean {
    if (!this.isScopedBlogRoute) return false;
    const carId = Number(
      new URLSearchParams(this.currentPath.split('?')[1] ?? '').get('carId'),
    );
    if (!carId) return false;
    return this.navPrefs.resolvedBottomBar().some(entry => {
      if (entry.destination.kind !== 'car' || entry.carId !== carId) return false;
      const tab = this._contributions.tabById(entry.destination.carTabId!);
      return !!tab?.isActive?.(this.currentPath, carId);
    });
  }

  // Same reasoning again for document sub-screens (view/add/edit) — the list
  // itself (/main/documents) is a main page and keeps the tab bar, but any
  // route past that ("/main/documents/123", ".../add", ".../123/edit") is a
  // detail/form screen and shouldn't show it.
  private static readonly DOCUMENTS_PREFIX = '/main/documents/';

  // Same again for the sale-contract wizard and detail view. The list at
  // /main/sale-contract is a main page; anything past it is a form or a
  // detail screen, where the tab bar and the shell FAB would compete with
  // the page's own actions.
  private static readonly SALE_CONTRACT_PREFIX = '/main/sale-contract/';

  get isScopedDocumentsRoute(): boolean {
    return this.currentPath
      .split('?')[0]
      .startsWith(MainComponent.DOCUMENTS_PREFIX);
  }

  get isScopedSaleContractRoute(): boolean {
    return this.currentPath
      .split('?')[0]
      .startsWith(MainComponent.SALE_CONTRACT_PREFIX);
  }

  // Supplier, Admin and Organization are all reached from the Account screen's
  // Navigation section (mobile) or the sidebar (desktop), never from a bottom
  // tab — same standing as a drilled-into documents/sale-contract sub-screen,
  // so they all get the same treatment: no tab bar/shell FAB (Supplier has its
  // own page-local FAB; Admin/Organization have none), and (since none of the
  // three are in TOP_LEVEL_ROUTES below) a back button.
  private static readonly SUPPLIER_PREFIX = '/main/supplier';
  private static readonly ADMIN_PREFIX = '/main/admin';
  private static readonly ORGANIZATION_PREFIX = '/main/organization';

  get isSupplierRoute(): boolean {
    return this.currentPath
      .split('?')[0]
      .startsWith(MainComponent.SUPPLIER_PREFIX);
  }

  get isAdminRoute(): boolean {
    return this.currentPath
      .split('?')[0]
      .startsWith(MainComponent.ADMIN_PREFIX);
  }

  get isOrganizationRoute(): boolean {
    return this.currentPath
      .split('?')[0]
      .startsWith(MainComponent.ORGANIZATION_PREFIX);
  }

  /**
   * Car-scoped routes normally hide the bottom bar/FAB entirely ("drilled into a car"). Two
   * exceptions keep it visible instead — the bar must stay where the user arrived *through*
   * it (see "Bottom bar visibility on car-scoped routes" in core/navigation/FEATURE.md):
   *  1. The car hub root, in single-car mode, for that one car (its "My car" destination).
   *  2. A car tab route that exactly matches a destination currently in the user's chosen
   *     bottom bar, for that same car (e.g. Documents in the bar -> `.../documents`).
   * Record detail / edit sub-pages and any tab NOT currently in the bar keep today's
   * behavior (bar hidden, back button) — `CarTabContribution.isActive` only matches a tab's
   * own exact route, never a deeper child of it, so e.g. `.../istoric/:recordId` never matches.
   */
  get isScopedCarBottomBarRoute(): boolean {
    if (!this.isScopedCarRoute) return false;
    const carId = MainComponent.scopedCarIdFromPath(this.currentPath);
    if (carId == null) return false;
    if (this.isCarHubRoot) {
      return (
        this.singleCarService.isSingleCarMode() &&
        this.singleCarService.singleCar()?.id === carId
      );
    }
    // The slot must also resolve to THIS car — each car-kind slot now has its own assigned car
    // (see "Per-slot car" in core/navigation/FEATURE.md), so Documents stays visible for the
    // slot's own car, not for every car's Documents page.
    return this.navPrefs.resolvedBottomBar().some(entry => {
      if (entry.destination.kind !== 'car' || entry.carId !== carId) return false;
      const tab = this._contributions.tabById(entry.destination.carTabId!);
      return !!tab?.isActive?.(this.currentPath, carId);
    });
  }

  get hideBottomNav(): boolean {
    return (
      (this.isScopedCarRoute && !this.isScopedCarBottomBarRoute) ||
      this.isCarFormRoute ||
      this.isBlogWriteRoute ||
      (this.isScopedBlogRoute && !this.isScopedBlogBottomBarRoute) ||
      this.isScopedDocumentsRoute ||
      this.isAdminRoute ||
      this.isOrganizationRoute ||
      this.isScopedSaleContractRoute ||
      this.isSupplierRoute
    );
  }

  // The current per-car subnav item (Prezentare, Istoric, Documente, ...) for a given car —
  // '' means the car's hub root (Prezentare, the one subnav item that isn't a contribution —
  // see sidebarTabs below). Used to highlight the matching subnav button so the sidebar
  // reflects the page the user is actually looking at, not just the car.
  isCarSubnavActive(carId: number, segment: string): boolean {
    if (MainComponent.scopedCarIdFromPath(this.currentPath) !== carId)
      return false;
    return (this._scopedSegments()[1] ?? '') === segment;
  }

  /** Every other subnav item (Istoric, Documente, Rapoarte, ...) — see core/car-page/FEATURE.md. */
  get sidebarTabs(): CarTabContribution[] {
    return this._contributions.visibleSidebarTabs();
  }

  isSidebarTabActive(tab: CarTabContribution, carId: number): boolean {
    return tab.isActive?.(this.currentPath, carId) ?? false;
  }

  // Sibling top-level destinations reached directly via the sidebar/bottom tabs —
  // these are never "drilled into", so they never get a back button.
  private static readonly TOP_LEVEL_ROUTES = new Set([
    '/main/cars',
    '/main/documents',
    '/main/documents/',
    '/main/maintenance',
    '/main/maintenance/',
    HAU_ROUTES.sentDestinations.fullPath,
    `${HAU_ROUTES.sentDestinations.fullPath}/`,
    '/main/reports',
    '/main/reports/',
    '/main/blog',
    '/main/settings',
    '/main/settings/',
  ]);

  get showBackButton(): boolean {
    // The single-car hub root is now reached directly via the bottom bar's Garage/"My car"
    // item, same standing as any other top-level destination — no back button (see
    // isScopedCarBottomBarRoute's doc). A car *tab* route that's a bottom-bar exception still
    // shows the normal back button — it's also still reachable by drilling in from the hub.
    if (this.isCarHubRoot && this.isScopedCarBottomBarRoute) return false;
    return !MainComponent.TOP_LEVEL_ROUTES.has(this.currentPath);
  }

  // Whether the shared header has anything to show at all — the back button,
  // a page's own title, or its action buttons (both projected in via
  // HeaderActionsService). The header sits in normal document flow (see
  // .hau-header--minimal) and always reserves real space when rendered, so a
  // route with none of the three would otherwise still show an empty bar —
  // collapse it to zero height instead. In practice every route now sets a
  // title except the car hub root, so this rarely collapses anymore.
  get hasHeaderContent(): boolean {
    return (
      this.showBackButton ||
      !!this.headerActions.startTemplate() ||
      !!this.headerActions.template() ||
      !!this.headerActions.title()
    );
  }

  get backHref(): string {
    return this.navHistory.parentOf(this.currentPath);
  }

  goBack(): void {
    this.navHistory.back();
  }

  private readonly _onBackClick = (ev: Event): void => {
    if (!(ev.target as Element | null)?.closest?.('ion-back-button')) return;
    ev.preventDefault();
    ev.stopPropagation();
    this.goBack();
  };

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

  navigateToHome() {
    void this.router.navigate([HAU_ROUTES.cars.fullPath]);
  }
  // Single-car mode: Garage goes straight to that one car's hub instead of the list — see
  // "Single car" in core/navigation/FEATURE.md.
  navigateToGarage() {
    const car = this.singleCarService.singleCar();
    if (car) {
      void this.router.navigate([`${CARS_ROUTES.details.fullPath}/${car.id}`]);
      return;
    }
    void this.router.navigate([HAU_ROUTES.cars.fullPath]);
  }
  navigateToAddVehicle() {
    void this.router.navigate([CARS_ROUTES.create.fullPath]);
  }

  /**
   * Business: only an org admin manages the fleet — see "Adding a car" in
   * ACCOUNT-CONTEXT.md / features/cars/FEATURE.md. Gates the desktop sidebar's
   * "add vehicle" button; `cars-list.component.ts` applies the same check for the
   * header "+"/empty-state CTA/FAB, `cars.car-page.ts`'s `add-vehicle` sheet action
   * for the single-car "…" menu, and the `/main/cars/create` route for a direct link.
   */
  readonly canAddVehicle = computed(
    () =>
      this.sessionContext.isPersonal() ||
      ['OWNER', 'SUPER_ADMIN', 'FLEET_ADMIN'].includes(
        this.sessionContext.activeOrgRole() ?? '',
      ),
  );
  navigateToSettings() {
    void this.router.navigate([HAU_ROUTES.settings.fullPath]);
  }
  navigateToReports() {
    void this.router.navigate([HAU_ROUTES.reports.fullPath]);
  }

  // The FAB's action is registered by whichever routed page is currently
  // active (see FabActionService). A page that hasn't registered one renders
  // the FAB disabled (`.hau-fab--disabled`, `aria-disabled`, `pointer-events:
  // none`) instead of a silent no-op, so this guard is belt-and-suspenders.
  onFabTap(): void {
    this.fabAction.action()?.run();
  }

  isActive(item: { route: string; key: string }) {
    return this.selectedMenuItem === item.key;
  }

  // ── Mobile bottom bar — configurable destinations (see core/navigation/FEATURE.md) ──

  /**
   * The bottom bar's resolved slots (1-3), split around the center FAB. Right-side count always
   * includes the trailing, fixed Account button, so the split stays visually balanced for every
   * length — e.g. today's default (garage, reports, journal) splits 2 (garage, reports) / 2
   * (journal, account), unchanged from before this was made configurable.
   */
  get bottomBarLeftItems(): ResolvedBottomBarEntry[] {
    const items = this.navPrefs.resolvedBottomBar();
    return items.slice(0, Math.ceil(items.length / 2));
  }

  get bottomBarRightItems(): ResolvedBottomBarEntry[] {
    const items = this.navPrefs.resolvedBottomBar();
    return items.slice(Math.ceil(items.length / 2));
  }

  /** Garage shows as "My car" (and its own icon stays car-outline) while in single-car mode. */
  destinationLabelKey(entry: ResolvedBottomBarEntry): string {
    if (entry.destination.id === 'garage' && this.singleCarService.isSingleCarMode()) {
      return 'nav.tabs.myCar';
    }
    return entry.destination.labelKey;
  }

  isDestinationActive(entry: ResolvedBottomBarEntry): boolean {
    const dest = entry.destination;
    if (dest.id === 'garage') {
      // `isTabActive`'s plain startsWith would also match any car detail sub-route — '/main/cars'
      // is a path prefix of '/main/cars/details/**' too, same ambiguity resolveActiveMenuItem()
      // already special-cases for the desktop sidebar. Garage/"My car" must only read active on
      // its own screen, never while a Documents/History/... destination for the same route is
      // also active (visible together now that car-scoped routes can keep the bar — see
      // isScopedCarBottomBarRoute).
      const car = this.singleCarService.singleCar();
      if (car) {
        return (
          this.isCarHubRoot &&
          MainComponent.scopedCarIdFromPath(this.currentPath) === car.id
        );
      }
      return !this.isScopedCarRoute && this.isTabActive(HAU_ROUTES.cars.fullPath);
    }
    if (dest.kind === 'global') {
      return this.isTabActive((dest.link?.().commands[0] as string) ?? '');
    }
    // Car destination: active only on THIS slot's own car (see "Per-slot car" in
    // core/navigation/FEATURE.md) — not any car's Documents/History/... page.
    const tab = this._contributions.tabById(dest.carTabId!);
    if (!tab?.isActive || entry.carId == null) return false;
    const carId = MainComponent.scopedCarIdFromPath(this.currentPath);
    return carId != null && carId === entry.carId && tab.isActive(this.currentPath, carId);
  }

  /**
   * A car-kind slot now always carries its own resolved car (explicit, favourite, or first
   * active car — see `NavigationPreferencesService.resolvedBottomBar`'s doc), so a tap never
   * needs to ask which car: no more car-picker sheet (removed 2026-10-04, see
   * core/navigation/FEATURE.md).
   */
  goToDestination(entry: ResolvedBottomBarEntry): void {
    const dest = entry.destination;
    if (dest.id === 'garage') {
      this.navigateToGarage();
      return;
    }
    if (dest.kind === 'global') {
      const { commands, queryParams } = dest.link!();
      void this.router.navigate([commands[0] as string], queryParams ? { queryParams } : undefined);
      return;
    }
    if (entry.carId == null) return; // no active cars in this context — nothing to open
    this._goToCarTab(dest.carTabId!, entry.carId);
  }

  private _goToCarTab(carTabId: string, carId: number): void {
    const tab = this._contributions.tabById(carTabId);
    if (!tab) return;
    const { commands, queryParams } = tab.link(carId);
    void this.router.navigate([commands[0] as string], queryParams ? { queryParams } : undefined);
  }

  // ── "Mașinile mele" — per-car list + subnav (desktop sidebar / mobile hub) ──
  get visibleCars(): VisibleCarEntry[] {
    const query = this.carSearchQuery.trim().toLowerCase();
    const owned: VisibleCarEntry[] = this.ownedCars.map(car => ({
      car,
      shared: false,
    }));
    const shared: VisibleCarEntry[] = this.sharedCars.map(e => ({
      car: e.car,
      shared: true,
    }));
    const all = [...owned, ...shared];
    if (!query) return all;
    return all.filter(({ car }) => {
      const haystack =
        `${car.nickname ?? ''} ${car.make} ${car.model} ${car.license_plate ?? ''}`.toLowerCase();
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

  /**
   * The rest of the per-car subnav (Istoric, Documente, Rapoarte, Plan, Notițe, Wishlist,
   * Jurnal, Partajare) — whatever features registered/enabled, via `tab.link(carId)`. See
   * `sidebarTabs` and `core/car-page/FEATURE.md`.
   */
  goToSidebarTab(tab: CarTabContribution, carId: number): void {
    const { commands, queryParams } = tab.link(carId);
    void this.router.navigate([commands[0] as string], queryParams ? { queryParams } : undefined);
  }

  goToJurnal(carId?: number): void {
    void this.router.navigate(
      [HAU_ROUTES.blog.fullPath],
      carId != null ? { queryParams: { carId } } : {},
    );
  }

  isTabActive(prefix: string): boolean {
    return this.currentPath.startsWith(prefix);
  }

  private resolveActiveMenuItem(path: string): string | null {
    // A scoped car page (e.g. its Rapoarte/Documente/Istoric tab) is represented by
    // the per-car subnav highlighting, not by the top-level menu — so no top-level
    // item should appear selected while drilled into a specific car.
    if (path.split('?')[0].startsWith(MainComponent.CAR_DETAILS_PREFIX)) {
      return null;
    }
    if (path.startsWith(HAU_ROUTES.cars.fullPath)) {
      return 'garage';
    }
    if (path.startsWith(HAU_ROUTES.documents.fullPath)) {
      return 'documents';
    }
    if (path.startsWith(HAU_ROUTES.maintenance.fullPath)) {
      return 'maintenance';
    }
    if (path.startsWith(HAU_ROUTES.sentDestinations.fullPath)) {
      return 'sentDestinations';
    }
    if (path.startsWith(HAU_ROUTES.blog.fullPath)) {
      return 'blog';
    }
    if (path.startsWith(HAU_ROUTES.reports.fullPath)) {
      return 'reports';
    }
    if (path.startsWith(HAU_ROUTES.admin.fullPath)) {
      return 'admin';
    }
    if (path.startsWith(HAU_ROUTES.organization.fullPath)) {
      return 'organization';
    }
    if (path.startsWith(HAU_ROUTES.supplier.fullPath)) {
      return 'supplier';
    }
    return 'garage';
  }

  logout() {
    this.carListFacade.reset();
    this.bootstrapFacade.reset();
    this.notificationsSocketService.disconnect();
    this.authService.logout().subscribe(() => {
      void this.router.navigate([HAU_ROUTES.auth.fullPath]);
    });
  }

  /**
   * Personal -> business: switching is a re-login for now (ACCOUNT-CONTEXT.md).
   * Remember the Business tab, log out and land on the login page.
   */
  switchToBusinessAccount(): void {
    this.authService.setLoginTab('business');
    this.carListFacade.reset();
    this.bootstrapFacade.reset();
    this.notificationsSocketService.disconnect();
    this.authService.logout().subscribe(() => {
      void this.router.navigate([AUTH_ROUTES.login.fullPath]);
    });
  }
}
