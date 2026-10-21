import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ExtractionResultDto } from '@hau/autogenapi/models';
import { AiQuotaService } from '@hau/core/ai-quota.service';
import { DocumentExtractionService } from '@hau/core/document-extraction.service';
import { resizeImage } from '@hau/shared/utils/image-resize.util';
import { catchError, map, Observable, of, retry, take, tap, throwError, timer } from 'rxjs';

export type ScanDocumentType = 'FUEL_RECEIPT' | 'CHARGING_RECEIPT' | 'ODOMETER';

// Backoff schedule for automatic retries of a failed photo scan (AI server
// overloaded — HTTP 503 — or the device is offline). ~4.5 minutes of retrying
// total before giving up and asking for manual entry.
const SCAN_RETRY_DELAYS_MS = [15_000, 30_000, 60_000, 60_000, 60_000];

// Photo → extracted fields, shared by every "photograph it instead of typing it"
// flow (maintenance fuel entry, the car hub's update-mileage sheet). Wraps the
// document-extraction endpoint with the client-side resize and the transient-failure
// retry, so callers only deal with "got a result" / "couldn't read it".
@Injectable({ providedIn: 'root' })
export class OdometerScanService {
  private readonly _extraction = inject(DocumentExtractionService);
  private readonly _aiQuota = inject(AiQuotaService);

  /** Downscales a phone-camera photo to what the extraction endpoint accepts. */
  resize(file: File): Promise<File> {
    return resizeImage(file, 1600, 0.7);
  }

  /**
   * Extracts a (already resized) photo, retrying with backoff on a transient failure
   * (HTTP 503 or offline). Emits once, then completes: the result when the photo was
   * detected as `expectedType`, `null` for anything else (unreadable / wrong document /
   * retries exhausted). `onRetry` fires before each wait, with whether the device is
   * offline. Unsubscribing cancels any pending retry.
   */
  scan(file: File, expectedType: ScanDocumentType, onRetry?: (offline: boolean) => void): Observable<ExtractionResultDto | null> {
    return this._extraction.extract(file).pipe(
      take(1),
      retry({
        count: SCAN_RETRY_DELAYS_MS.length,
        delay: (err: HttpErrorResponse, attempt: number) => {
          const offline = !navigator.onLine;
          if (this._aiQuota.isQuotaError(err)) return throwError(() => err);
          if (!offline && err.status !== 503) return throwError(() => err);
          onRetry?.(offline);
          return timer(SCAN_RETRY_DELAYS_MS[attempt - 1]);
        },
      }),
      tap(() => this._aiQuota.checkWarning()),
      map(result => (result.detected && result.document_type === expectedType ? result : null)),
      // Over quota: no inline slot here, so tell the user via toast; the caller falls back to manual entry.
      catchError(err => {
        void this._aiQuota.toastIfQuotaError(err);
        return of(null);
      }),
    );
  }

  /** Scans an odometer photo and returns the km read from it, or `null`. */
  scanOdometer(file: File, onRetry?: (offline: boolean) => void): Observable<number | null> {
    return this.scan(file, 'ODOMETER', onRetry).pipe(map(result => this.readKm(result)));
  }

  /** The odometer reading in an extraction result, if any. */
  readKm(result: ExtractionResultDto | null): number | null {
    const km = result?.fields?.odometer_km ? Number(result.fields.odometer_km) : NaN;
    return Number.isFinite(km) && km >= 0 ? Math.round(km) : null;
  }
}
