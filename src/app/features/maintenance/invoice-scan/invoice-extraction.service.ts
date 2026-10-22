import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';
import { resizeImage } from '@hau/shared/utils/image-resize.util';
import { environment } from '../../../../environments/environment';
import { InvoiceExtractionResult } from './invoice-extraction.model';

const MAX_DIMENSION = 2000;
const JPEG_QUALITY = 0.8;

/** Hand-written client for the AI invoice/service-report extraction endpoint (auth via the HTTP interceptor). */
@Injectable({ providedIn: 'root' })
export class InvoiceExtractionService {
  private readonly _http = inject(HttpClient);

  extract(files: File[], carId: number | null, lang: string): Observable<InvoiceExtractionResult> {
    // Resize is only for the request — the caller keeps the originals for storage.
    return from(Promise.all(files.map(f => (f.type === 'application/pdf' ? Promise.resolve(f) : resizeImage(f, MAX_DIMENSION, JPEG_QUALITY))))).pipe(
      switchMap(prepared => {
        const form = new FormData();
        prepared.forEach(f => form.append('files', f, f.name));
        if (carId != null) form.append('car_id', String(carId));
        form.append('lang', lang);
        return this._http.post<InvoiceExtractionResult>(`${environment.apiUrl}/maintenance-record/extract-invoice`, form);
      }),
    );
  }
}
