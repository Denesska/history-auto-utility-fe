import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom, timeout } from 'rxjs';
import { environment } from '../../environments/environment';

export interface NavDestinationHistoryItem {
  id: number;
  name: string | null;
  lat: number | null;
  lon: number | null;
  /** Unix timestamp in seconds. */
  ts: number;
}

interface NavDestinationHistoryResponse {
  items?: unknown;
}

const MAX_ITEMS = 100;
const MAX_EVENT_ID = 2_147_483_647;
const REQUEST_TIMEOUT_MS = 15_000;
const CACHE_PREFIX = 'hau.nav-destination-history:';

@Injectable({ providedIn: 'root' })
export class NavDestinationHistoryService {
  readonly items = signal<NavDestinationHistoryItem[]>([]);
  readonly loading = signal(false);
  readonly failed = signal(false);
  readonly configured = !!environment.navRelaySlug;

  private readonly endpoint = environment.navRelaySlug
    ? `${environment.apiUrl}/n/${environment.navRelaySlug}/history`
    : null;
  private refreshInFlight: Promise<void> | null = null;

  constructor(private readonly http: HttpClient) {
    this.items.set(this.readCache());
  }

  /** Fetches the relay's latest sent destinations and falls back to its scoped local cache. */
  refresh(): Promise<void> {
    if (!this.endpoint) {
      this.failed.set(false);
      return Promise.resolve();
    }
    if (this.refreshInFlight) return this.refreshInFlight;

    this.loading.set(true);
    this.failed.set(false);
    this.refreshInFlight = firstValueFrom(
      this.http.get<NavDestinationHistoryResponse>(this.endpoint).pipe(timeout(REQUEST_TIMEOUT_MS)),
    ).then(response => {
      if (!Array.isArray(response?.items)) throw new Error('Invalid navigation history response');
      // Read the latest in-memory state when the request resolves. A share or
      // resend may have updated it while this older GET was in flight.
      const normalized = this.normalizeItems([...response.items, ...this.items()]);
      this.items.set(normalized);
      this.writeCache(normalized);
    }).catch(() => {
      this.failed.set(true);
      // Keep the validated cache visible when the network is unavailable.
    }).finally(() => {
      this.loading.set(false);
      this.refreshInFlight = null;
    });

    return this.refreshInFlight;
  }

  /** Records a resolved result from a successful share immediately, then reconciles with the relay. */
  async shareSucceeded(item: Partial<NavDestinationHistoryItem> | null | undefined): Promise<void> {
    const valid = this.parseItem(item);
    if (valid) {
      const current = this.normalizeItems([valid, ...this.items()]);
      this.items.set(current);
      this.writeCache(current);
    }
    await this.refresh();
  }

  /** Resends by server history ID, so the relay reuses its resolved destination record. */
  async resend(id: number): Promise<void> {
    if (!this.endpoint) throw new Error('Nav relay is not configured');
    const response = await firstValueFrom(
      this.http.post<unknown>(`${this.endpoint}/${encodeURIComponent(String(id))}/resend`, {})
        .pipe(timeout(REQUEST_TIMEOUT_MS)),
    );
    const appended = this.parseItem(response);
    if (appended) {
      const current = this.normalizeItems([appended, ...this.items()]);
      this.items.set(current);
      this.writeCache(current);
    }
    await this.refresh();
  }

  private normalizeItems(value: unknown): NavDestinationHistoryItem[] {
    if (!Array.isArray(value)) return [];
    const sorted = value
      .map(item => this.parseItem(item))
      .filter((item): item is NavDestinationHistoryItem => item !== null)
      .sort((a, b) => b.id - a.id);
    const seen = new Set<string>();
    const result: NavDestinationHistoryItem[] = [];
    for (const item of sorted) {
      const key = this.dedupKey(item);
      if (seen.has(key)) continue;
      seen.add(key);
      result.push(item);
      if (result.length === MAX_ITEMS) break;
    }
    return result;
  }

  private parseItem(value: unknown): NavDestinationHistoryItem | null {
    if (!value || typeof value !== 'object') return null;
    const row = value as Record<string, unknown>;
    const id = row['id'];
    const ts = row['ts'];
    const name = row['name'];
    const lat = row['lat'];
    const lon = row['lon'];
    if (!Number.isSafeInteger(id) || (id as number) <= 0 || (id as number) > MAX_EVENT_ID || !this.isFiniteNumber(ts)) return null;
    if (!Number.isFinite(new Date((ts as number) * 1000).getTime())) return null;
    if (name !== null && name !== undefined && typeof name !== 'string') return null;
    if (lat !== null && lat !== undefined && !this.isFiniteNumber(lat)) return null;
    if (lon !== null && lon !== undefined && !this.isFiniteNumber(lon)) return null;
    let latitude = lat == null ? null : lat as number;
    let longitude = lon == null ? null : lon as number;
    if (latitude !== null && (latitude < -90 || latitude > 90)) return null;
    if (longitude !== null && (longitude < -180 || longitude > 180)) return null;
    const hasUsableName = typeof name === 'string' && name.trim().length > 0;
    if ((latitude === null) !== (longitude === null)) {
      if (!hasUsableName) return null;
      latitude = null;
      longitude = null;
    }
    if (latitude === null && !hasUsableName) return null;
    return {
      id: id as number,
      name: typeof name === 'string' ? name : null,
      lat: latitude,
      lon: longitude,
      ts: ts as number,
    };
  }

  private isFiniteNumber(value: unknown): value is number {
    return typeof value === 'number' && Number.isFinite(value);
  }

  private dedupKey(item: NavDestinationHistoryItem): string {
    if (item.lat !== null && item.lon !== null) {
      return `coords:${Math.round(item.lat * 100_000)},${Math.round(item.lon * 100_000)}`;
    }
    // A name is presentation text, not a location identity: nearby branches can
    // share one. Keep name-only records distinct by event ID.
    return `id:${item.id}`;
  }

  private cacheKey(): string | null {
    return this.endpoint ? `${CACHE_PREFIX}${this.endpoint}` : null;
  }

  private readCache(): NavDestinationHistoryItem[] {
    const key = this.cacheKey();
    if (!key) return [];
    try {
      if (typeof localStorage === 'undefined') return [];
      const raw = localStorage.getItem(key);
      return raw ? this.normalizeItems(JSON.parse(raw)) : [];
    } catch {
      return [];
    }
  }

  private writeCache(items: NavDestinationHistoryItem[]): void {
    const key = this.cacheKey();
    if (!key) return;
    try {
      if (typeof localStorage === 'undefined') return;
      localStorage.setItem(key, JSON.stringify(items));
    } catch {
      // Storage can be unavailable or full; the in-memory list still works.
    }
  }
}
