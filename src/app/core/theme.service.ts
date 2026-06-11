import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Capacitor, SystemBars, SystemBarsStyle } from '@capacitor/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark' | 'auto';

const STORAGE_KEY = 'hau-theme';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly _mode = new BehaviorSubject<ThemeMode>(this.readStored());
    readonly mode$ = this._mode.asObservable();

    private readonly _isDark = new BehaviorSubject<boolean>(false);
    readonly isDark$ = this._isDark.asObservable();

    private readonly media = window.matchMedia(MEDIA_QUERY);

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.media.addEventListener('change', () => {
            if (this.mode === 'auto') {
                this.applyIsDark(this.media.matches);
            }
        });
        this.applyIsDark(this.resolveIsDark(this.mode));
    }

    get mode(): ThemeMode {
        return this._mode.value;
    }

    get isDark(): boolean {
        return this._isDark.value;
    }

    setMode(mode: ThemeMode): void {
        this._mode.next(mode);
        localStorage.setItem(STORAGE_KEY, mode);
        this.applyIsDark(this.resolveIsDark(mode));
    }

    private resolveIsDark(mode: ThemeMode): boolean {
        if (mode === 'auto') {
            return this.media.matches;
        }
        return mode === 'dark';
    }

    private applyIsDark(value: boolean): void {
        this._isDark.next(value);
        this.document.body.classList.toggle('dark', value);
        this.document.body.classList.toggle('light', this._mode.value === 'light');
        this.syncNativeSystemBars(value);
    }

    private syncNativeSystemBars(isDark: boolean): void {
        if (!Capacitor.isNativePlatform()) {
            return;
        }

        void SystemBars.setStyle({
            style: isDark ? SystemBarsStyle.Dark : SystemBarsStyle.Light,
        }).catch(() => {
            // Status bar styling is best-effort and must not block theme changes.
        });
    }

    private readStored(): ThemeMode {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'light' || stored === 'dark' || stored === 'auto') {
            return stored;
        }
        return 'auto';
    }
}
