import { DOCUMENT } from '@angular/common';
import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet, ToastController } from '@ionic/angular/standalone';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { TranslocoService } from '@ngneat/transloco';
import { ThemeService } from '@hau/core/theme.service';
import { NavShareService } from '@hau/core/nav-share.service';
import { AuthService } from '@hau/features/auth/auth.service';
import { AUTH_ROUTES } from '@hau/features/auth/auth.routes.const';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    imports: [IonRouterOutlet, IonApp]
})
export class AppComponent implements OnInit {
    private static readonly EXIT_PRESS_INTERVAL_MS = 2000;
    private lastBackPressAt = 0;

    constructor(
        private _theme: ThemeService,
        private router: Router,
        private zone: NgZone,
        private authService: AuthService,
        private navShare: NavShareService,
        private toastCtrl: ToastController,
        private transloco: TranslocoService,
        @Inject(DOCUMENT) private document: Document,
    ) {}

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
            event.detail.register(-1, () => this.zone.run(() => this.handleRootBackButton()));
        });
    }

    private async handleRootBackButton(): Promise<void> {
        const now = Date.now();
        if (now - this.lastBackPressAt < AppComponent.EXIT_PRESS_INTERVAL_MS) {
            void App.exitApp();
            return;
        }

        this.lastBackPressAt = now;
        const toast = await this.toastCtrl.create({
            message: this.transloco.translate('app.exitConfirm'),
            duration: AppComponent.EXIT_PRESS_INTERVAL_MS,
            position: 'bottom',
        });
        await toast.present();
    }

    private initializePushNotificationTaps(): void {
        void PushNotifications.addListener('pushNotificationActionPerformed', action => {
            const url = this.buildNotificationUrl(action.notification.data);
            void this.zone.run(() => this.router.navigateByUrl(url));
        });
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

        void App.getLaunchUrl().then((result) => {
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
            await this.router.navigateByUrl(HAU_ROUTES.main.fullPath, { replaceUrl: true });
            return;
        }

        await this.router.navigateByUrl(AUTH_ROUTES.login.fullPath, { replaceUrl: true });
    }
}
