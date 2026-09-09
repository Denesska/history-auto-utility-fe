import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import {
    IonContent, IonIcon, ViewWillEnter, ViewWillLeave,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { gridOutline, listOutline, sunnyOutline, moonOutline, contrastOutline, speedometerOutline, notificationsOutline, documentTextOutline, logOutOutline } from 'ionicons/icons';
import { ThemeMode, ThemeService } from '@hau/core/theme.service';
import { ViewMode, ViewModeService } from '@hau/core/view-mode.service';
import { LANGUAGE_STORAGE_KEY } from '@hau/core/transloco/transloco-http-loader.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { AuthService } from '@hau/features/auth/auth.service';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';
import { NotificationsSocketService } from '@hau/core/notifications-socket.service';
import { NotificationsPanelComponent } from '@hau/shared/component/notifications-panel/notifications-panel.component';
import { SettingsService, UpdateUserSettings } from './settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['./settings.component.scss'],
    imports: [
        IonContent, IonIcon,
        TranslocoPipe, AsyncPipe, NotificationsPanelComponent,
    ],
})
export class SettingsComponent implements OnInit, ViewWillEnter, ViewWillLeave {
    private readonly transloco = inject(TranslocoService);
    private readonly themeService = inject(ThemeService);
    private readonly viewModeService = inject(ViewModeService);
    private readonly settingsService = inject(SettingsService);
    private readonly _headerActions = inject(HeaderActionsService);
    private readonly router = inject(Router);
    private readonly authService = inject(AuthService);
    private readonly carListFacade = inject(CarListFacade);
    private readonly notificationsSocketService = inject(NotificationsSocketService);

    readonly themeMode$ = this.themeService.mode$;
    readonly viewMode$ = this.viewModeService.viewMode$;

    readonly languages: { code: string; label: string }[] = [
        { code: 'en', label: 'EN' },
        { code: 'ro', label: 'RO' },
    ];

    readonly reminderDayOptions = [1, 7, 14, 30];
    remindersEnabled = true;
    reminderDays: number[] = [7];

    constructor() {
        addIcons({ gridOutline, listOutline, sunnyOutline, moonOutline, contrastOutline, speedometerOutline, notificationsOutline, documentTextOutline, logOutOutline });
    }

    ngOnInit(): void {
        this.settingsService.getSettings().subscribe({
            next: settings => {
                this.remindersEnabled = settings.expiry_reminders_enabled;
                this.reminderDays = settings.expiry_reminder_days;
            },
            error: () => {},
        });
    }

    // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
    // fire on back-navigation — these Ionic lifecycle hooks do.
    ionViewWillEnter(): void {
        this._headerActions.setTitle(this.transloco.translate('settings.title'));
    }

    ionViewWillLeave(): void {
        // Defensive: this page projects no action buttons, but clearing both
        // slots on leave keeps the invariant that no page ever inherits
        // another's — a lingering *start* template would hide the back button.
        this._headerActions.clear();
        this._headerActions.clearTitle();
    }

    get activeLang(): string {
        return this.transloco.getActiveLang();
    }

    goToDocuments(): void {
        void this.router.navigate([HAU_ROUTES.documents.fullPath]);
    }

    logout(): void {
        this.carListFacade.reset();
        this.notificationsSocketService.disconnect();
        this.authService.logout().subscribe(() => {
            void this.router.navigate([HAU_ROUTES.auth.fullPath]);
        });
    }

    setLanguage(lang: string): void {
        if (lang === this.activeLang) return;
        this.applyLanguage(lang, true);
    }

    setThemeMode(mode: ThemeMode): void {
        if (mode === this.themeService.mode) return;
        this.themeService.setMode(mode);
        this.persist({ theme: mode });
    }

    setViewMode(mode: ViewMode): void {
        if (mode === this.viewModeService.viewMode) return;
        this.viewModeService.setViewMode(mode);
        this.persist({ view_mode: mode });
    }

    toggleReminders(): void {
        this.remindersEnabled = !this.remindersEnabled;
        this.persist({ expiry_reminders_enabled: this.remindersEnabled });
    }

    toggleReminderDay(day: number): void {
        this.reminderDays = this.reminderDays.includes(day)
            ? this.reminderDays.filter(d => d !== day)
            : [...this.reminderDays, day];
        this.persist({ expiry_reminder_days: this.reminderDays });
    }

    private applyLanguage(lang: string, persist: boolean): void {
        this.transloco.setActiveLang(lang);
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        if (persist) {
            this.persist({ language: lang });
        }
    }

    private persist(change: UpdateUserSettings): void {
        this.settingsService.updateSettings(change).subscribe({ error: () => {} });
    }
}
