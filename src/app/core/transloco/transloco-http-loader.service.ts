import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Translation, TranslocoLoader, TranslocoService } from '@ngneat/transloco';
import { Observable, firstValueFrom } from 'rxjs';

export function preloadTranslation(transloco: TranslocoService): () => Promise<Translation> {
  return () => {
    transloco.setActiveLang('en');
    return firstValueFrom(transloco.load('en'));
  };
}

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private readonly http: HttpClient) {}

  getTranslation(lang: string): Observable<Translation> {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}
