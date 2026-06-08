import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Translation, TranslocoLoader, TranslocoService } from '@ngneat/transloco';
import { Observable, firstValueFrom } from 'rxjs';

export const LANGUAGE_STORAGE_KEY = 'hau-lang';

export function getStoredLang(): string {
  return localStorage.getItem(LANGUAGE_STORAGE_KEY) ?? 'en';
}

export function preloadTranslation(transloco: TranslocoService): () => Promise<Translation> {
  return () => {
    const lang = getStoredLang();
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
