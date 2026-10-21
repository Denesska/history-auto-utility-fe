import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

export interface AdminBarPoint {
    /** Short axis label (only first / middle / last are drawn). */
    label: string;
    value: number;
    /** Full hover text, already translated. */
    tooltip: string;
}

/**
 * Single-series vertical bar chart. Plain DOM + CSS rather than a chart
 * library — one series, one hue, a hover tooltip is all it needs.
 */
@Component({
    selector: 'app-bar-chart',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="abc" role="img" [attr.aria-label]="ariaLabel()">
            <div class="abc-plot">
                <span class="abc-max">{{ formatMax()(max()) }}</span>
                <div class="abc-bars" (mouseleave)="hover.set(null)">
                    @for (p of points(); track $index) {
                        <div class="abc-slot" (mouseenter)="hover.set($index)" (click)="hover.set($index)">
                            <div class="abc-bar" [class.abc-bar--hover]="hover() === $index"
                                 [style.height.%]="p.value === 0 ? 0 : Math.max(2, (p.value / max()) * 100)"></div>
                        </div>
                    }
                    @if (hover() !== null) {
                        <div class="abc-tip" [style.left.%]="tipLeft()">
                            {{ points()[hover()!].tooltip }}
                        </div>
                    }
                </div>
            </div>
            <div class="abc-axis">
                @for (l of axisLabels(); track $index) {
                    <span>{{ l }}</span>
                }
            </div>
        </div>
    `,
    styles: [`
        :host { display: block; }
        .abc-plot { position: relative; padding-top: 18px; }
        .abc-max {
            position: absolute; top: 0; left: 0;
            font-size: 0.7rem; color: var(--hau-text-dim); font-variant-numeric: tabular-nums;
        }
        .abc-bars {
            position: relative;
            display: flex; align-items: flex-end; gap: 2px;
            height: 150px;
            border-top: 1px dashed var(--hau-border);
            border-bottom: 1px solid var(--hau-border);
        }
        .abc-slot {
            flex: 1 1 0; min-width: 0; height: 100%;
            display: flex; align-items: flex-end; cursor: default;
        }
        .abc-bar {
            width: 100%;
            background: var(--hau-primary);
            border-radius: 4px 4px 0 0;
            opacity: 0.85;
            transition: opacity var(--hau-transition-fast, 0.15s);
        }
        .abc-bar--hover { opacity: 1; background: var(--hau-primary-strong); }
        .abc-tip {
            position: absolute; bottom: calc(100% + 6px);
            transform: translateX(-50%);
            padding: 6px 10px;
            background: var(--hau-hero-card-bg); color: var(--hau-on-dark-text);
            border-radius: var(--hau-radius-sm);
            font-size: 0.75rem; white-space: nowrap; pointer-events: none;
            box-shadow: var(--hau-shadow-md); z-index: 2;
        }
        .abc-axis {
            display: flex; justify-content: space-between;
            margin-top: 6px;
            font-size: 0.7rem; color: var(--hau-text-dim);
        }
    `],
})
export class BarChartComponent {
    readonly points = input.required<AdminBarPoint[]>();
    readonly ariaLabel = input('');
    /** Lower bound of the y-scale (1 suits counts; pass a small fraction for money). */
    readonly minScale = input(1);
    /** Formats the y-axis max label (defaults to the raw number). */
    readonly formatMax = input<(v: number) => string>(v => String(v));

    readonly hover = signal<number | null>(null);
    readonly Math = Math;

    readonly max = computed(() => Math.max(this.minScale(), ...this.points().map(p => p.value)));

    // Kept away from the edges so the tooltip never clips outside the card.
    readonly tipLeft = computed(() => {
        const i = this.hover();
        if (i === null) return 0;
        return Math.min(85, Math.max(15, ((i + 0.5) / this.points().length) * 100));
    });

    readonly axisLabels = computed(() => {
        const pts = this.points();
        if (pts.length === 0) return [];
        if (pts.length < 3) return pts.map(p => p.label);
        return [pts[0].label, pts[Math.floor(pts.length / 2)].label, pts[pts.length - 1].label];
    });
}
