import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, NgZone, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Capacitor } from '@capacitor/core';
import { Keyboard } from '@capacitor/keyboard';
import { AuthService } from '../../features/auth/auth.service';
import { FabActionService } from '../fab-action.service';
import { SessionContextService } from '../session/session-context.service';

export type DevicePlatform = 'android' | 'ios' | 'web';
export type NavigationMode = 'gesture' | 'buttons' | 'unknown';

export interface SafeArea {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

/** Content row height (px) of the shell's mobile bottom tab bar, excluding the safe-area inset. */
const BOTTOM_BAR_ROW_PX = 64;
/** Shell switches to the bottom tab bar below this width (matches main.component.scss). */
const BOTTOM_BAR_MAX_WIDTH = 1024;
/**
 * Minimum bottom clearance (CSS px) on native Android. Some OEM builds (MIUI/HyperOS 3-button nav)
 * under-report the navigation-bar inset, so the reported value is floored at a typical 3-button bar.
 */
const ANDROID_NAV_BAR_FLOOR_PX = 48;
/** A native bottom inset at or above this (CSS px) is a 3-button navigation bar; below it, gesture pill. */
const BUTTON_NAV_MIN_INSET_PX = 40;

/**
 * Single source of truth for "what device / environment is the app running in" plus the CSS custom
 * properties and <html> attributes that bottom-anchored UI relies on (see core/device/FEATURE.md).
 * Constructed at app start by AppComponent; everything else just reads the signals or the CSS vars.
 */
@Injectable({ providedIn: 'root' })
export class DeviceContextService {
  private readonly doc = inject(DOCUMENT);
  private readonly win = this.doc.defaultView as Window;
  private readonly zone = inject(NgZone);
  private readonly auth = inject(AuthService);
  private readonly session = inject(SessionContextService);
  private readonly fabAction = inject(FabActionService);

  // ── Platform ──────────────────────────────────────────────────────────────
  readonly platform: DevicePlatform = (() => {
    const p = Capacitor.getPlatform();
    return p === 'android' || p === 'ios' ? p : 'web';
  })();
  readonly isNative = Capacitor.isNativePlatform();
  readonly isPwa: boolean = this.win.matchMedia?.('(display-mode: standalone)').matches
    || (this.win.navigator as any).standalone === true;
  readonly os: { name: string; version: string } = this.parseOs();
  readonly browser: { name: string; version: string } = this.parseBrowser();
  /**
   * Device model/manufacturer are not available without `@capacitor/device`; on Android the UA model
   * token is used (often "K" on recent Chrome, reduced UA). Installing @capacitor/device would improve it.
   */
  readonly deviceModel: string | null = this.parseModel();

  // ── Live state ────────────────────────────────────────────────────────────
  private readonly _pointer = signal<'coarse' | 'fine'>(this.readPointer());
  readonly pointer = this._pointer.asReadonly();
  private readonly _viewport = signal({ width: 0, height: 0 });
  readonly viewport = this._viewport.asReadonly();
  private readonly _fontScale = signal(1);
  /** Root font-size / 16px (OS "font size" setting reflected into the WebView, or browser zoom). */
  readonly fontScale = this._fontScale.asReadonly();
  private readonly _safeArea = signal<SafeArea>({ top: 0, bottom: 0, left: 0, right: 0 });
  /** Raw insets in CSS px as reported by the platform (no floor applied). */
  readonly safeArea = this._safeArea.asReadonly();
  private readonly _keyboardOpen = signal(false);
  readonly keyboardOpen = this._keyboardOpen.asReadonly();
  private readonly _bottomBarVisible = signal(false);
  /** Set by the shell: whether the mobile bottom tab bar is currently rendered. */
  readonly bottomBarVisible = this._bottomBarVisible.asReadonly();

  /** Reliable bottom clearance for system navigation (px). 0 on web and while the keyboard is open. */
  readonly safeBottom = computed(() => {
    if (this._keyboardOpen()) return 0;
    const raw = this._safeArea().bottom;
    return this.platform === 'android' && this.isNative
      ? Math.max(raw, ANDROID_NAV_BAR_FLOOR_PX)
      : raw;
  });
  /** Height of the shell tab bar content row when visible (px), else 0. */
  readonly bottomBarHeight = computed(() =>
    this._bottomBarVisible() && this._viewport().width < BOTTOM_BAR_MAX_WIDTH ? BOTTOM_BAR_ROW_PX : 0);
  readonly bottomOffset = computed(() => this.safeBottom() + this.bottomBarHeight());
  /** Derived from the *raw* native inset: >= ~40px => 3-button bar, small non-zero => gesture pill. */
  readonly navigationMode = computed<NavigationMode>(() => {
    if (!this.isNative || this.platform !== 'android') return 'unknown';
    const b = this._safeArea().bottom;
    if (b >= BUTTON_NAV_MIN_INSET_PX) return 'buttons';
    return b > 0 ? 'gesture' : 'unknown';
  });

  // ── Identity summary (read-only views of existing state) ──────────────────
  private readonly profile = toSignal(this.auth.profile$, { initialValue: null });
  readonly identity = computed(() => {
    const p = this.profile();
    return {
      signedIn: !!p,
      authMethod: p ? (p.google_id ? 'google' : 'password') as 'google' | 'password' : null,
      accountContext: this.session.context()?.type ?? null,
      orgId: this.session.activeOrgId(),
    };
  });

  private probe: HTMLElement | null = null;
  private started = false;

  constructor() {
    // CSS vars + <html> attributes follow the signals.
    effect(() => {
      const root = this.doc.documentElement;
      this.setVar('--hau-safe-bottom', `${this.safeBottom()}px`);
      this.setVar('--hau-bottom-bar-height', `${this.bottomBarHeight()}px`);
      this.setVar('--hau-bottom-offset', `${this.bottomOffset()}px`);
      // Page-level clearance: routed content already sits above the tab bar (the shell outlet reserves it),
      // so only pages WITHOUT the bar need to clear the system nav bar themselves.
      this.setVar('--hau-page-safe-bottom', this.bottomBarHeight() > 0 ? '0px' : `${this.safeBottom()}px`);
      this.attr(root, 'data-nav-mode', this.navigationMode());
      this.attr(root, 'data-platform', this.platform);
      // Page FABs hide themselves via global.scss when the shell tab bar AND a registered shell "+" action are both present.
      this.attr(root, 'data-bottom-bar', this.bottomBarHeight() > 0 ? 'visible' : 'hidden');
      this.attr(root, 'data-shell-fab', this.fabAction.hasAction() ? 'on' : 'off');
    });
    this.start();
  }

  /** Called by the shell whenever the bottom tab bar appears/disappears. */
  setBottomBarVisible(visible: boolean): void {
    this._bottomBarVisible.set(visible);
  }

  private start(): void {
    if (this.started) return;
    this.started = true;
    this.probe = this.doc.createElement('div');
    this.probe.setAttribute('aria-hidden', 'true');
    this.probe.style.cssText =
      'position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;'
      + 'padding:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) '
      + 'env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px);';
    this.doc.body.appendChild(this.probe);

    this.refresh();
    const onChange = () => this.refresh();
    this.win.addEventListener('resize', onChange);
    this.win.addEventListener('orientationchange', onChange);
    this.win.visualViewport?.addEventListener('resize', onChange);
    this.win.matchMedia?.('(any-pointer: coarse)').addEventListener?.('change', onChange);
    // Capacitor's SystemBars plugin injects --safe-area-inset-* as inline style on <html> after the
    // window insets are applied (and again on rotation / nav-mode change) without firing a DOM event.
    new MutationObserver(onChange).observe(this.doc.documentElement, {
      attributes: true,
      attributeFilter: ['style'],
    });
    // The first native injection can land after bootstrap; re-measure a few times early on.
    [300, 1000, 2500].forEach(ms => setTimeout(onChange, ms));

    if (this.isNative) {
      Keyboard.addListener('keyboardWillShow', () => this.zone.run(() => this._keyboardOpen.set(true))).catch(() => {});
      Keyboard.addListener('keyboardDidHide', () => this.zone.run(() => this._keyboardOpen.set(false))).catch(() => {});
      Keyboard.addListener('keyboardWillHide', () => this.zone.run(() => { this._keyboardOpen.set(false); this.refresh(); })).catch(() => {});
    }
  }

  private refresh(): void {
    const w = this.win;
    this._viewport.update(v =>
      v.width === w.innerWidth && v.height === w.innerHeight ? v : { width: w.innerWidth, height: w.innerHeight });
    this._pointer.set(this.readPointer());
    const fs = parseFloat(getComputedStyle(this.doc.documentElement).fontSize) / 16;
    if (Number.isFinite(fs) && fs !== this._fontScale()) this._fontScale.set(fs);

    const next = this.readSafeArea();
    const cur = this._safeArea();
    if (next.top !== cur.top || next.bottom !== cur.bottom || next.left !== cur.left || next.right !== cur.right) {
      this._safeArea.set(next);
    }
  }

  /** max(env(), Capacitor-injected --safe-area-inset-*) per side, in CSS px. Native only (web insets are meaningless). */
  private readSafeArea(): SafeArea {
    if (!this.isNative) return { top: 0, bottom: 0, left: 0, right: 0 };
    const cs = this.probe ? getComputedStyle(this.probe) : null;
    const root = getComputedStyle(this.doc.documentElement);
    const side = (envProp: string, cssVar: string) => {
      const a = cs ? parseFloat(cs.getPropertyValue(envProp)) || 0 : 0;
      const b = parseFloat(root.getPropertyValue(cssVar)) || 0;
      return Math.round(Math.max(a, b));
    };
    return {
      top: side('padding-top', '--safe-area-inset-top'),
      right: side('padding-right', '--safe-area-inset-right'),
      bottom: side('padding-bottom', '--safe-area-inset-bottom'),
      left: side('padding-left', '--safe-area-inset-left'),
    };
  }

  private readPointer(): 'coarse' | 'fine' {
    return this.win.matchMedia?.('(any-pointer: coarse)').matches ? 'coarse' : 'fine';
  }

  private setVar(name: string, value: string): void {
    const style = this.doc.documentElement.style;
    if (style.getPropertyValue(name) !== value) style.setProperty(name, value);
  }

  private attr(el: HTMLElement, name: string, value: string): void {
    if (el.getAttribute(name) !== value) el.setAttribute(name, value);
  }

  private parseOs(): { name: string; version: string } {
    const ua = this.win.navigator.userAgent;
    let m = /Android\s([\d.]+)/.exec(ua);
    if (m) return { name: 'Android', version: m[1] };
    m = /(?:iPhone|CPU) OS\s([\d_]+)/.exec(ua);
    if (m) return { name: 'iOS', version: m[1].replace(/_/g, '.') };
    m = /Windows NT\s([\d.]+)/.exec(ua);
    if (m) return { name: 'Windows', version: m[1] };
    m = /Mac OS X\s([\d_.]+)/.exec(ua);
    if (m) return { name: 'macOS', version: m[1].replace(/_/g, '.') };
    return { name: /Linux/.test(ua) ? 'Linux' : 'unknown', version: '' };
  }

  private parseBrowser(): { name: string; version: string } {
    const nav = this.win.navigator as any;
    const brands: { brand: string; version: string }[] | undefined = nav.userAgentData?.brands;
    const real = brands?.find(b => !/not.?a.?brand/i.test(b.brand) && b.brand !== 'Chromium')
      ?? brands?.find(b => !/not.?a.?brand/i.test(b.brand));
    if (real) return { name: real.brand, version: real.version };
    const ua = nav.userAgent as string;
    const tests: [string, RegExp][] = [
      ['Edge', /Edg\/([\d.]+)/], ['Firefox', /Firefox\/([\d.]+)/], ['Chrome', /Chrome\/([\d.]+)/],
      ['Safari', /Version\/([\d.]+).*Safari/],
    ];
    for (const [name, re] of tests) {
      const m = re.exec(ua);
      if (m) return { name, version: m[1] };
    }
    return { name: 'unknown', version: '' };
  }

  private parseModel(): string | null {
    const m = /Android[^;]*;\s*([^;)]+?)(?:\sBuild|[;)])/.exec(this.win.navigator.userAgent);
    return m ? m[1].trim() : null;
  }
}
