import { NavigationHistoryService } from '@hau/core/navigation/navigation-history.service';
import { OverlayBackService } from '@hau/core/navigation/overlay-back.service';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  effect,
  Inject,
  NgZone,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet, ToastController } from '@ionic/angular';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { TranslocoService } from '@jsverse/transloco';
import { DefaultCurrencyService } from '@hau/core/currency/default-currency.service';
import { LanguageSyncService } from '@hau/core/transloco/language-sync.service';
import { ThemeService } from '@hau/core/theme.service';
import { NavShareService } from '@hau/core/nav-share.service';
import { AuthService, AUTH_ROUTES } from '@hau/features/auth';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { DeviceContextService } from '@hau/core/device/device-context.service';
import { SingleCarService } from '@hau/core/navigation/single-car.service';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { CARS_ROUTES } from '@hau/features/cars';
import { addIcons } from 'ionicons';
import { FUEL_PUMP_ICON_NAME, FUEL_PUMP_ICON_SRC } from '@hau/shared/icons/fuel-pump.icon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IonRouterOutlet, IonApp],
})
export class AppComponent implements OnInit {
  private static readonly EXIT_PRESS_INTERVAL_MS = 2000;
  private static readonly EXIT_ROOT_ROUTES = new Set([
    HAU_ROUTES.cars.fullPath,
    HAU_ROUTES.documents.fullPath,
    HAU_ROUTES.reports.fullPath,
    HAU_ROUTES.blog.fullPath,
    HAU_ROUTES.maintenance.fullPath,
    HAU_ROUTES.settings.fullPath,
  ]);
  private lastBackPressAt = 0;
  private rootBackPressCount = 0;
  private exitWarningActive = false;
  private exitWarningExpiresAt = 0;
  private lastRootUrl = '';

  // Custom icons go into the global Ionicons registry once, at startup, so any
  // page can use them without registering them itself — see fuel-pump.icon.ts.
  private static readonly _customIcons = addIcons({ [FUEL_PUMP_ICON_NAME]: FUEL_PUMP_ICON_SRC });

  constructor(
    private _theme: ThemeService,
    private router: Router,
    private zone: NgZone,
    private authService: AuthService,
    private navShare: NavShareService,
    private navHistory: NavigationHistoryService,
    // Injected only to force this `providedIn: 'root'` singleton to construct (and start
    // listening for popstate/Ionic overlay events) at app startup — see its own doc comment.
    private readonly _overlayBack: OverlayBackService,
    private toastCtrl: ToastController,
    private transloco: TranslocoService,
    private singleCar: SingleCarService,
    @Inject(DOCUMENT) private document: Document,
    sessionContext: SessionContextService,
    languageSync: LanguageSyncService,
    defaultCurrency: DefaultCurrencyService,
    // Injected to construct the device/environment state at startup (publishes the --hau-safe-bottom
    // family of CSS vars; see core/device/FEATURE.md).
    _deviceContext: DeviceContextService,
  ) {
    languageSync.start();
    defaultCurrency.start();
    // Business context re-skins the accent tokens (see theme/hau-design-system.scss,
    // `body.ctx-business`) so the user can always tell which environment they're in.
    effect(() => {
      this.document.body.classList.toggle(
        'ctx-business',
        sessionContext.isBusiness(),
      );
    });
  }

  ngOnInit(): void {
    if (Capacitor.isNativePlatform()) {
      this.document.body.classList.add('hau-native');
      this.initializeNativeAuth();
      // Receive "share to app" from Google Maps and forward it to the car's nav relay.
      this.navShare.init();
    }

    if (Capacitor.getPlatform() === 'android') {
      this.initializePushNotificationTaps();
      this.initializeExitOnBackButton();
    }

    if (Capacitor.getPlatform() === 'web' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', event => {
        if (event.data?.type === 'navigate') {
          void this.zone.run(() => this.router.navigateByUrl(event.data.url));
        }
      });
    }
  }

  // Ionic's router outlet already handles back-button navigation (popping the page
  // stack) at its default priority. Registering at priority -1 means this only runs
  // when there's nothing left to pop, i.e. we're at the root of a tab's stack.
  private initializeExitOnBackButton(): void {
    document.addEventListener('ionBackButton', (event: any) => {
      // Nested Ionic outlets also continue the back-button priority chain
      // after popping a page. Only register the exit handler when the URL
      // itself is an exact top-level screen, otherwise a normal Back must
      // never affect the exit sequence or show its toast.
      if (!this.isTopLevelMainRoute()) {
        this.resetExitSequence();
        // Outrank Ionic's own page-stack pop (priority 0) so system Back follows
        // the navigation history like every in-app Back; overlays (100) still win.
        if (this.navHistory.canGoBack()) {
          event.detail.register(1, () =>
            this.zone.run(() => this.navHistory.back()),
          );
        }
        return;
      }
      event.detail.register(-1, () =>
        this.zone.run(() => this.handleRootBackButton()),
      );
    });
  }

  private async handleRootBackButton(): Promise<void> {
    const now = Date.now();
    const rootUrl = this.normalizedRouterUrl();

    if (
      rootUrl !== this.lastRootUrl ||
      now - this.lastBackPressAt >= AppComponent.EXIT_PRESS_INTERVAL_MS
    ) {
      this.resetExitSequence();
      this.lastRootUrl = rootUrl;
    }

    if (this.exitWarningActive && now < this.exitWarningExpiresAt) {
      void App.exitApp();
      return;
    }

    this.lastBackPressAt = now;
    this.rootBackPressCount += 1;

    // The first Back is intentionally silent. The warning appears only
    // after a second consecutive Back on the same top-level screen.
    if (this.rootBackPressCount < 2) return;

    this.exitWarningActive = true;
    this.exitWarningExpiresAt = now + AppComponent.EXIT_PRESS_INTERVAL_MS;
    const toast = await this.toastCtrl.create({
      message: this.transloco.translate('app.exitConfirm'),
      duration: AppComponent.EXIT_PRESS_INTERVAL_MS,
      position: 'bottom',
    });
    await toast.present();
    void toast.onDidDismiss().then(() => {
      if (Date.now() >= this.exitWarningExpiresAt) this.resetExitSequence();
    });
  }

  private isTopLevelMainRoute(): boolean {
    const url = this.normalizedRouterUrl();
    if (AppComponent.EXIT_ROOT_ROUTES.has(url)) return true;
    // Single-car mode: the garage immediately redirects to this car's hub (see
    // features/cars/cars-list and core/navigation/FEATURE.md), so the hub root is the
    // de-facto top-level screen there too — otherwise a root Back on it would fall through
    // to the normal pop/history behavior instead of the double-press-to-exit sequence.
    const singleCar = this.singleCar.singleCar();
    return singleCar != null && url === `${CARS_ROUTES.details.fullPath}/${singleCar.id}`;
  }

  private normalizedRouterUrl(): string {
    const path = this.router.url.split(/[?#]/, 1)[0].replace(/\/+$/, '');
    return path || '/';
  }

  private resetExitSequence(): void {
    this.lastBackPressAt = 0;
    this.rootBackPressCount = 0;
    this.exitWarningActive = false;
    this.exitWarningExpiresAt = 0;
    this.lastRootUrl = '';
  }

  private initializePushNotificationTaps(): void {
    void PushNotifications.addListener(
      'pushNotificationActionPerformed',
      action => {
        const url = this.buildNotificationUrl(action.notification.data);
        void this.zone.run(() => this.router.navigateByUrl(url));
      },
    );
  }

  private buildNotificationUrl(data: Record<string, any>): string {
    const navigableTypes = ['CAR_SHARED', 'CAR_ACCESS_ROLE_CHANGED'];
    try {
      const payload = JSON.parse(data?.['payload'] ?? '{}');
      if (navigableTypes.includes(data?.['type']) && payload.carId != null) {
        return `${CARS_ROUTES.details.fullPath}/${payload.carId}`;
      }
    } catch {
      // fall through to default route below
    }
    return HAU_ROUTES.cars.fullPath;
  }

  private initializeNativeAuth(): void {
    void App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      void this.zone.run(() => this.handleDeepLink(event.url));
    });

    void App.getLaunchUrl().then(result => {
      if (result?.url) {
        void this.zone.run(() => this.handleDeepLink(result.url));
      }
    });

    void App.addListener('appStateChange', ({ isActive }) => {
      if (isActive) {
        void this.zone.run(() => this.redirectFromLoginIfAuthenticated());
      }
    });

    void Browser.addListener('browserFinished', () => {
      void this.zone.run(() => this.redirectFromLoginIfAuthenticated());
    });
  }

  private redirectFromLoginIfAuthenticated(): void {
    if (!this.router.url.includes(AUTH_ROUTES.login.path)) {
      return;
    }

    this.authService.redirectToMainIfAuthenticated(this.router);
  }

  private async handleDeepLink(url: string): Promise<void> {
    let parsed: URL;
    try {
      parsed = new URL(url);
    } catch {
      return;
    }

    const isTokenPath =
      parsed.pathname === '/auth/token' ||
      parsed.pathname.endsWith('/auth/token');

    if (!isTokenPath) {
      return;
    }

    const isAuthenticated = await this.authService.handleOAuthCallback(url);

    void Browser.close().catch(() => {
      // Closing the in-app browser is best-effort and must never block login.
    });

    if (isAuthenticated) {
      await this.router.navigateByUrl(HAU_ROUTES.main.fullPath, {
        replaceUrl: true,
      });
      return;
    }

    await this.router.navigateByUrl(AUTH_ROUTES.login.fullPath, {
      replaceUrl: true,
    });
  }
}
