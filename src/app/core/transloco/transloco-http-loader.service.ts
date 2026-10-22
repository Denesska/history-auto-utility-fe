import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Translation,
  TranslocoLoader,
  TranslocoService,
} from '@jsverse/transloco';
import { Observable, firstValueFrom } from 'rxjs';

export const LANGUAGE_STORAGE_KEY = 'hau-lang';

/** True only when the user picked a language themselves (Settings or the legal page switcher). */
export function hasExplicitLang(): boolean {
  try {
    return !!localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return false;
  }
}

/** Language ids registered in Transloco (single source of truth: `availableLangs` in main.ts). */
function supportedLangs(transloco: TranslocoService): string[] {
  return (transloco.getAvailableLangs() as (string | { id: string })[]).map(l =>
    typeof l === 'string' ? l : l.id,
  );
}

/**
 * Device language: first supported primary subtag in `navigator.languages` (mirrors the system
 * locale in the Android WebView / iOS WKWebView), falling back to `en`.
 */
export function detectDeviceLang(transloco: TranslocoService): string {
  const supported = supportedLangs(transloco);
  const candidates = [...(navigator.languages ?? []), navigator.language];
  for (const tag of candidates) {
    const primary = tag?.toLowerCase().split(/[-_]/)[0];
    if (primary && supported.includes(primary)) return primary;
  }
  return 'en';
}

/** Explicit stored choice wins; otherwise the device language (never persisted, so it stays "not chosen"). */
export function resolveInitialLang(transloco: TranslocoService): string {
  return localStorage.getItem(LANGUAGE_STORAGE_KEY) ?? detectDeviceLang(transloco);
}

export function preloadTranslation(
  transloco: TranslocoService,
): () => Promise<Translation> {
  return () => {
    const lang = resolveInitialLang(transloco);
    transloco.setActiveLang(lang);
    return firstValueFrom(transloco.load(lang));
  };
}

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private readonly http: HttpClient) {}

  getTranslation(lang: string): Observable<Translation> {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}
