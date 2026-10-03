import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, shareReplay, switchMap, timer } from 'rxjs';
import { environment } from '../../../../environments/environment';

interface SilhouetteResponse {
  status: 'READY' | 'PENDING' | 'FAILED';
  svg: string | null;
}

/** Generation takes ~60s server-side: poll every 5s for up to ~90s (18 tries), then give up. */
const POLL_INTERVAL_MS = 5000;
const MAX_POLLS = 18;

/**
 * Fetches the schematic side-view silhouette of a make+model
 * (`GET /api/vehicle-silhouette`). Results are cached per make+model for the
 * app's lifetime (an in-memory map of shared observables) so a list of cars
 * of the same model shares one request/poll. `refCount` makes the polling stop
 * once every subscriber is gone (e.g. the page was left); finished results stay
 * cached, while an abandoned poll simply restarts for the next subscriber. Emits the SVG markup, or
 * `null` when none is available (failed, still pending after the last poll,
 * or the request errored) — callers then show their generic fallback.
 *
 * Lives next to the component (not in `core/`) because `shared/` must stay
 * self-contained and can't import `features/`.
 */
@Injectable({ providedIn: 'root' })
export class VehicleSilhouetteService {
  private readonly _http = inject(HttpClient);
  private readonly _base = `${environment.apiUrl}/vehicle-silhouette`;
  private readonly _cache = new Map<string, Observable<string | null>>();

  get(make: string, model: string): Observable<string | null> {
    const key = `${make.trim().toLowerCase()}|${model.trim().toLowerCase()}`;
    let result$ = this._cache.get(key);
    if (!result$) {
      result$ = this._fetch(make.trim(), model.trim(), 0).pipe(shareReplay({ bufferSize: 1, refCount: true }));
      this._cache.set(key, result$);
    }
    return result$;
  }

  private _fetch(make: string, model: string, attempt: number): Observable<string | null> {
    return this._http.get<SilhouetteResponse>(this._base, { params: { make, model } }).pipe(
      catchError(() => of<SilhouetteResponse>({ status: 'FAILED', svg: null })),
      switchMap(res => {
        if (res.status === 'READY' && res.svg) return of(res.svg);
        if (res.status === 'PENDING' && attempt < MAX_POLLS) {
          return timer(POLL_INTERVAL_MS).pipe(switchMap(() => this._fetch(make, model, attempt + 1)));
        }
        return of(null);
      }),
    );
  }
}
