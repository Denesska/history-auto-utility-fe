import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import {
    IonContent, IonHeader, IonIcon, IonTitle, IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { gridOutline, listOutline, sunnyOutline, moonOutline, contrastOutline, speedometerOutline } from 'ionicons/icons';
import { ThemeMode, ThemeService } from '@hau/core/theme.service';
import { ViewMode, ViewModeService } from '@hau/core/view-mode.service';
import { LANGUAGE_STORAGE_KEY } from '@hau/core/transloco/transloco-http-loader.service';
import { SettingsService, UpdateUserSettings } from './settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['./settings.component.scss'],
    imports: [
        IonContent, IonHeader, IonToolbar, IonTitle, IonIcon,
        TranslocoPipe, AsyncPipe,
    ],
})
export class SettingsComponent implements OnInit {
    private readonly transloco = inject(TranslocoService);
    private readonly themeService = inject(ThemeService);
    private readonly viewModeService = inject(ViewModeService);
    private readonly settingsService = inject(SettingsService);

    readonly themeMode$ = this.themeService.mode$;
    readonly viewMode$ = this.viewModeService.viewMode$;

    readonly languages: { code: string; label: string }[] = [
        { code: 'en', label: 'EN' },
        { code: 'ro', label: 'RO' },
    ];

    constructor() {
        addIcons({ gridOutline, listOutline, sunnyOutline, moonOutline, contrastOutline, speedometerOutline });
    }

    get activeLang(): string {
        return this.transloco.getActiveLang();
    }

    ngOnInit(): void {
        this.settingsService.getSettings().subscribe({
            next: (settings) => {
                if (settings.language) {
                    this.applyLanguage(settings.language, false);
                }
                if (settings.view_mode === 'cards' || settings.view_mode === 'list') {
                    this.viewModeService.setViewMode(settings.view_mode);
                }
            },
            error: () => {},
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
