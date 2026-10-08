import { computed, inject, Injectable, signal } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { NavController } from '@ionic/angular';
import { SingleCarService } from '@hau/core/navigation/single-car.service';

interface HistoryEntry {
  url: string;
  /** Tab-group key (`<navTab>:<id>`) when the page is a tab of a tabbed page, else null. */
  tab: string | null;
}

export interface BackOptions {
  /** Where to go when there is no previous entry (deep link / fresh tab). Defaults to `parentOf(currentUrl)`. */
  fallback?: string;
}

const STORAGE_KEY = 'hau.navHistory';
const MAX_ENTRIES = 50;
const CAR_DETAILS_PREFIX = '/main/cars/details/';

/**
 * One generic "where did the user come from" history for the whole app. Back, Cancel,
 * Save and Delete all go through `back()` / `backAfterDelete()` so the user always
 * returns to the exact page they came from, instead of each screen guessing a parent.
 * See `core/navigation/FEATURE.md` for the recording rules.
 */
@Injectable({ providedIn: 'root' })
export class NavigationHistoryService {
  private readonly _router = inject(Router);
  private readonly _navCtrl = inject(NavController);
  private readonly _singleCar = inject(SingleCarService);

  private _stack: HistoryEntry[] = this._load();
  private readonly _depth = signal(this._stack.length);

  /** True when there is a previous page to return to. */
  readonly canGoBack = computed(() => this._depth() > 1);

  // Captured on NavigationStart, consumed on NavigationEnd.
  private _trigger: string | undefined;
  private _replace = false;
  // Set by back(): the URL we are navigating to on purpose.
  private _backTarget: string | null = null;

  constructor() {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this._trigger = event.navigationTrigger;
        this._replace = !!this._router.getCurrentNavigation()?.extras.replaceUrl;
      } else if (event instanceof NavigationEnd) {
        this._record(event.urlAfterRedirects);
        this._backTarget = null;
      } else if (event instanceof NavigationCancel || event instanceof NavigationError) {
        this._backTarget = null;
      }
    });
  }

  /** Go to the previous page; with no history, to `options.fallback` or the logical parent. */
  back(options?: BackOptions): void {
    const current = this._currentUrl();
    const prev = this._stack.length > 1 ? this._stack[this._stack.length - 2].url : null;
    this._go(prev ?? options?.fallback ?? this.parentOf(current));
  }

  /**
   * Like back(), but first forgets every history entry belonging to the deleted record
   * (its detail and edit pages) so Back never lands on a page that no longer exists.
   */
  backAfterDelete(deletedUrl?: string, options?: BackOptions): void {
    const current = this._currentUrl();
    const base = this._pathOf(deletedUrl ?? current).replace(/\/edit$/, '');
    this._stack = this._stack.filter(e => {
      const path = this._pathOf(e.url);
      return path !== base && !path.startsWith(`${base}/`);
    });
    this._sync();
    const prev = this._stack.length ? this._stack[this._stack.length - 1].url : null;
    this._go(prev ?? options?.fallback ?? this.parentOf(base));
  }

  /**
   * Navigate to `url` in place of the current page, the same as a plain `replaceUrl: true`
   * navigation (rule 4 in `_record`): the stack's top entry becomes `url` instead of a new
   * entry being pushed on top of it. For a flow that lands on a different page than the one
   * it was opened from (e.g. creating a car and landing on that car's hub instead of back on
   * the garage) — Back from `url` goes to whatever was before the replaced entry, exactly as
   * if the flow's own page had never been part of history.
   */
  replaceCurrent(url: string): void {
    void this._router.navigateByUrl(url, { replaceUrl: true });
  }

  /** Logical parent of a URL; used only when there is no history to go back to. */
  parentOf(url: string): string {
    const path = this._pathOf(url);
    if (path.startsWith(CAR_DETAILS_PREFIX)) {
      const segments = path.slice(CAR_DETAILS_PREFIX.length).split('/').filter(Boolean);
      if (segments.length <= 1) {
        // In single-car mode the garage immediately redirects back to this same car (see
        // features/cars/cars-list), so falling back to it here would just bounce straight
        // back — stay on the car hub itself instead (see core/navigation/FEATURE.md).
        const carId = Number(segments[0]);
        if (this._singleCar.isSingleCarMode() && this._singleCar.singleCar()?.id === carId) {
          return path;
        }
        return '/main/cars';
      }
      return `${CAR_DETAILS_PREFIX}${segments.slice(0, -1).join('/')}`;
    }
    if (path.startsWith('/main/cars')) return '/main/cars';
    if (path.startsWith('/main/blog')) return '/main/blog';
    if (path.startsWith('/main/documents')) return '/main/documents';
    // Reached from the Account screen's Navigation section (mobile) or the
    // sidebar (desktop) — fall back there when there's nothing to go back to.
    if (
      path.startsWith('/main/supplier') ||
      path.startsWith('/main/admin') ||
      path.startsWith('/main/organization')
    ) {
      return '/main/settings';
    }
    return '/main/cars';
  }

  /** Forget everything (logout, account-context switch: earlier pages may no longer be accessible). */
  clear(): void {
    this._stack = [];
    this._sync();
  }

  private _go(target: string): void {
    this._backTarget = target;
    void this._navCtrl.navigateBack(target);
  }

  private _record(rawUrl: string): void {
    const url = rawUrl || '/';
    if (url.startsWith('/auth')) return;
    const tab = this._tabKey();
    const top = this._stack[this._stack.length - 1];

    if (this._backTarget != null) {
      const idx = this._lastIndexOf(url);
      this._stack = idx >= 0 ? this._stack.slice(0, idx + 1) : [{ url, tab }];
    } else if (top?.url === url) {
      top.tab = tab;
    } else if (this._trigger === 'popstate') {
      const prev = this._stack[this._stack.length - 2];
      if (prev?.url === url) this._stack.pop();
      else this._push(url, tab);
    } else if (this._replace && top) {
      this._stack[this._stack.length - 1] = { url, tab };
    } else if (top && this._isSamePage(top, url, tab)) {
      this._stack[this._stack.length - 1] = { url, tab };
    } else {
      this._push(url, tab);
    }
    this._trigger = undefined;
    this._replace = false;
    this._sync();
  }

  private _push(url: string, tab: string | null): void {
    this._stack.push({ url, tab });
    if (this._stack.length > MAX_ENTRIES) this._stack.splice(0, this._stack.length - MAX_ENTRIES);
  }

  /** Same page = only query/fragment changed, or a move between sibling tabs of one tabbed page. */
  private _isSamePage(top: HistoryEntry, url: string, tab: string | null): boolean {
    if (this._pathOf(top.url) === this._pathOf(url)) return true;
    return tab != null && top.tab === tab;
  }

  /** `<navTab>:<id>` of the deepest active route when it is marked `data: { navTab }`. */
  private _tabKey(): string | null {
    let route: ActivatedRouteSnapshot | null = this._router.routerState.snapshot.root;
    while (route?.firstChild) route = route.firstChild;
    const group = route?.data?.['navTab'];
    if (!group) return null;
    return `${group}:${route.paramMap.get('id') ?? ''}`;
  }

  private _lastIndexOf(url: string): number {
    for (let i = this._stack.length - 1; i >= 0; i--) {
      if (this._stack[i].url === url) return i;
    }
    return -1;
  }

  private _currentUrl(): string {
    return this._router.url;
  }

  private _pathOf(url: string): string {
    return url.split(/[?#]/)[0];
  }

  private _sync(): void {
    this._depth.set(this._stack.length);
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(this._stack));
    } catch {
      // Storage unavailable (private mode, quota) — history just won't survive a refresh.
    }
  }

  private _load(): HistoryEntry[] {
    try {
      const parsed = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '[]');
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter(e => e && typeof e.url === 'string')
        .map(e => ({ url: e.url, tab: typeof e.tab === 'string' ? e.tab : null }))
        .slice(-MAX_ENTRIES);
    } catch {
      return [];
    }
  }
}
