import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

/**
 * BNR cross rates (`GET /exchange-rate`), cached per (from, to, date). Hand-written on purpose:
 * the generated API client is stale and must not be regenerated.
 * `peek()` is synchronous (for templates / getters); `getRate()` fetches once and never throws.
 */
@Injectable({ providedIn: 'root' })
export class ExchangeRateService {
  private readonly _http = inject(HttpClient);
  /** number = rate, null = lookup failed. */
  private readonly _cache = new Map<string, number | null>();
  private readonly _pending = new Map<string, Promise<number | null>>();

  private _key(from: string, to: string, date: string): string {
    return `${from.toUpperCase()}>${to.toUpperCase()}@${date}`;
  }

  /** Units of `to` per 1 `from`; 1 when equal. undefined = not fetched yet, null = failed. */
  peek(from: string, to: string, date: string): number | null | undefined {
    if (from.toUpperCase() === to.toUpperCase()) return 1;
    return this._cache.get(this._key(from, to, date));
  }

  async getRate(from: string, to: string, date: string): Promise<number | null> {
    if (from.toUpperCase() === to.toUpperCase()) return 1;
    const key = this._key(from, to, date);
    if (this._cache.has(key)) return this._cache.get(key) ?? null;
    let pending = this._pending.get(key);
    if (!pending) {
      pending = firstValueFrom(
        this._http.get<{ rate: number }>(`${environment.apiUrl}/exchange-rate`, {
          params: { from: from.toUpperCase(), to: to.toUpperCase(), date },
        }),
      )
        .then(r => (Number.isFinite(r?.rate) && r.rate > 0 ? r.rate : null))
        .catch(() => null)
        .then(rate => {
          this._cache.set(key, rate);
          this._pending.delete(key);
          return rate;
        });
      this._pending.set(key, pending);
    }
    return pending;
  }
}
