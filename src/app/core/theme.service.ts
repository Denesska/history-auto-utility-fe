import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'hau-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _isDark = new BehaviorSubject<boolean>(false);
  readonly isDark$ = this._isDark.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.init();
  }

  get isDark(): boolean {
    return this._isDark.value;
  }

  toggle(): void {
    this.setDark(!this.isDark);
  }

  setDark(value: boolean): void {
    this._isDark.next(value);
    this.document.body.classList.toggle('dark', value);
    localStorage.setItem(STORAGE_KEY, value ? 'dark' : 'light');
  }

  private init(): void {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') {
      this.setDark(stored === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDark(prefersDark);
    }
  }
}
