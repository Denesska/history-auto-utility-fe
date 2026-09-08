import { Component, Input } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

export type LoaderVariant = 'tach' | 'fuel';
export type LoaderSize = 'sm' | 'md' | 'lg';

// ── Dial geometry ────────────────────────────────────────────────────────────
// Both dials live in the same 200×200 viewBox. Angles are measured from 12
// o'clock, clockwise-positive, which is what `rotate()` on the needle wants —
// so one number drives both the needle transform and the arc fill.
interface Tick {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  major: boolean;
}
interface Num {
  x: number;
  y: number;
  text: string;
}
interface Geometry {
  cx: number;
  cy: number;
  a0: number;
  sweep: number;
  /** Length of the arc path, in user units — the stroke-dasharray of the fill. */
  len: number;
  track: string;
  /** Redline (tach) / reserve (fuel) band — a permanent dial marking on an outer ring. */
  zone: string;
  ticks: Tick[];
  nums: Num[];
}

const polar = (a: number, r: number, cx: number, cy: number): [number, number] => [
  +(cx + r * Math.sin((a * Math.PI) / 180)).toFixed(2),
  +(cy - r * Math.cos((a * Math.PI) / 180)).toFixed(2),
];

const arc = (a0: number, a1: number, r: number, cx: number, cy: number): string => {
  const [x0, y0] = polar(a0, r, cx, cy);
  const [x1, y1] = polar(a1, r, cx, cy);
  return `M ${x0} ${y0} A ${r} ${r} 0 ${Math.abs(a1 - a0) > 180 ? 1 : 0} 1 ${x1} ${y1}`;
};

const arcLength = (r: number, sweep: number): number => +((2 * Math.PI * r * sweep) / 360).toFixed(2);

// ── Tachometer ───────────────────────────────────────────────────────────────
// Scaled like the E36/E46 cluster it's modelled on: 250° of sweep covering
// 0–8300 rpm, printed numbers every 1000, a tick every 250, and the red zone
// starting at 7200 — so the "8" sits inside the red, exactly as on the car.
const TACH_CX = 100;
const TACH_CY = 100;
const TACH_R = 72;
const TACH_A0 = -125;
const TACH_SWEEP = 250;
const TACH_MAX_RPM = 8300;
const TACH_REDLINE_RPM = 7200;

/** Dial angle for an rpm reading. */
const rpmAngle = (rpm: number): number => TACH_A0 + TACH_SWEEP * (rpm / TACH_MAX_RPM);

const TACH: Geometry = {
  cx: TACH_CX,
  cy: TACH_CY,
  a0: TACH_A0,
  sweep: TACH_SWEEP,
  len: arcLength(TACH_R, TACH_SWEEP),
  track: arc(TACH_A0, 125, TACH_R, TACH_CX, TACH_CY),
  zone: arc(rpmAngle(TACH_REDLINE_RPM), 125, TACH_R + 8, TACH_CX, TACH_CY),
  ticks: Array.from({ length: Math.floor(TACH_MAX_RPM / 250) + 1 }, (_, i) => {
    const rpm = i * 250;
    const a = rpmAngle(rpm);
    const major = rpm % 1000 === 0;
    const [x1, y1] = polar(a, 62, TACH_CX, TACH_CY);
    const [x2, y2] = polar(a, major ? 52 : 57, TACH_CX, TACH_CY);
    return { x1, y1, x2, y2, major };
  }),
  nums: Array.from({ length: 9 }, (_, i) => {
    const [x, y] = polar(rpmAngle(i * 1000), 42, TACH_CX, TACH_CY);
    return { x, y, text: String(i) };
  }),
};

// ── Fuel gauge ───────────────────────────────────────────────────────────────
// The small round gauge from the same cluster: 140° of sweep, printed 0 · ½ ·
// 1/1 with a short tick on each quarter between them, and the reserve painted
// red at the empty end.
const FUEL_CX = 100;
const FUEL_CY = 140;
const FUEL_R = 72;
const FUEL_A0 = -70;
const FUEL_SWEEP = 140;
const FUEL_RESERVE = 0.12;

const fuelAngle = (fraction: number): number => FUEL_A0 + FUEL_SWEEP * fraction;

const FUEL: Geometry = {
  cx: FUEL_CX,
  cy: FUEL_CY,
  a0: FUEL_A0,
  sweep: FUEL_SWEEP,
  len: arcLength(FUEL_R, FUEL_SWEEP),
  track: arc(FUEL_A0, 70, FUEL_R, FUEL_CX, FUEL_CY),
  zone: arc(FUEL_A0, fuelAngle(FUEL_RESERVE), FUEL_R + 8, FUEL_CX, FUEL_CY),
  // Five ticks: a long one under each printed label, a short one on the
  // quarters in between — which stay unlabelled.
  ticks: Array.from({ length: 5 }, (_, i) => {
    const a = fuelAngle(i / 4);
    const major = i % 2 === 0;
    const [x1, y1] = polar(a, 62, FUEL_CX, FUEL_CY);
    const [x2, y2] = polar(a, major ? 52 : 57, FUEL_CX, FUEL_CY);
    return { x1, y1, x2, y2, major };
  }),
  nums: ['0', '½', '1/1'].map((text, i) => {
    const [x, y] = polar(fuelAngle(i / 2), 40, FUEL_CX, FUEL_CY);
    return { x, y, text };
  }),
};

/**
 * Instrument-cluster loading indicator — a tachometer needle (default) or a
 * fuel gauge needle.
 *
 * With no `progress` the needle runs free: the tach blips the throttle, the
 * fuel needle sweeps E→F. Bind `progress` (0–100) once the real percentage is
 * known and the same needle becomes a gauge, snapping to "full" at 100.
 *
 * ```html
 * <app-loader />                                  <!-- indeterminate, md -->
 * <app-loader variant="fuel" [progress]="pct" />  <!-- determinate fuel gauge -->
 * <app-loader size="lg" [overlay]="true" />       <!-- full-screen takeover -->
 * ```
 */
@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['./loader.component.scss'],
  imports: [TranslocoPipe],
  host: {
    '[class.is-overlay]': 'overlay',
  },
})
export class LoaderComponent {
  @Input() variant: LoaderVariant = 'tach';
  @Input() size: LoaderSize = 'md';

  /** 0–100 for a real percentage; `null` (default) leaves the needle free-running. */
  @Input() progress: number | null = null;

  /** Caption under the dial. `null` falls back to "Se încarcă…"; `''` hides it. */
  @Input() label: string | null = null;

  /** Render as a full-screen backdrop instead of inline. */
  @Input() overlay = false;

  /** Set while the user is holding/tapping the dial — the needle revs faster. */
  protected revving = false;

  private _revTimer: ReturnType<typeof setTimeout> | null = null;

  protected get geom(): Geometry {
    return this.variant === 'fuel' ? FUEL : TACH;
  }

  protected get isDeterminate(): boolean {
    return this.progress !== null;
  }

  protected get value(): number {
    return Math.min(100, Math.max(0, Math.round(this.progress ?? 0)));
  }

  protected get isFull(): boolean {
    return this.isDeterminate && this.value >= 100;
  }

  protected get needleAngle(): number {
    const g = this.geom;
    return g.a0 + g.sweep * (this.value / 100);
  }

  protected get dashOffset(): number {
    return +(this.geom.len * (1 - this.value / 100)).toFixed(2);
  }

  protected get dialClasses(): string {
    return [
      'hau-loader',
      `hau-loader--${this.variant}`,
      `hau-loader--${this.size}`,
      this.isDeterminate ? 'hau-loader--determinate' : 'hau-loader--indeterminate',
      this.isFull ? 'is-full' : '',
      this.revving ? 'is-revving' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  /**
   * Tapping a free-running dial blips the throttle — the needle revs harder for
   * a moment, with a haptic tick to match. Purely playful; a determinate dial
   * is showing a real number, so it only answers with the haptic.
   */
  protected blip(): void {
    void this.tick();
    if (this.isDeterminate) {
      return;
    }
    this.revving = true;
    if (this._revTimer) {
      clearTimeout(this._revTimer);
    }
    this._revTimer = setTimeout(() => {
      this.revving = false;
      this._revTimer = null;
    }, 1400);
  }

  private async tick(): Promise<void> {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch {
      // No native haptics (web/PWA without the plugin) — the needle blip alone
      // is enough feedback.
    }
  }
}
