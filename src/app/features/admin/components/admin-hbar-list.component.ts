import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export interface AdminHBarItem {
    label: string;
    value: number;
    /** Optional right-hand text; defaults to the value itself. */
    display?: string;
}

/**
 * Labeled horizontal bars (funnel steps, platforms, top makes…). Bars scale
 * to `max` when given (e.g. the funnel's first step), otherwise to the largest item.
 */
@Component({
    selector: 'app-admin-hbar-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <ul class="ahb">
            @for (item of items(); track item.label) {
                <li class="ahb-row">
                    <span class="ahb-label">{{ item.label }}</span>
                    <span class="ahb-track">
                        <span class="ahb-fill" [style.width.%]="scale() ? (item.value / scale()) * 100 : 0"></span>
                    </span>
                    <span class="ahb-value">{{ item.display ?? item.value }}</span>
                </li>
            } @empty {
                <li class="ahb-empty">{{ emptyText() }}</li>
            }
        </ul>
    `,
    styles: [`
        :host { display: block; }
        .ahb { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        .ahb-row {
            display: grid; grid-template-columns: minmax(90px, 38%) 1fr auto;
            align-items: center; gap: 10px;
            font-size: 0.84rem;
        }
        .ahb-label { color: var(--hau-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .ahb-track { height: 8px; border-radius: 4px; background: var(--hau-bg-soft); overflow: hidden; }
        .ahb-fill { display: block; height: 100%; border-radius: 4px; background: var(--hau-primary); }
        .ahb-value { color: var(--hau-text-muted); font-variant-numeric: tabular-nums; text-align: right; min-width: 3ch; }
        .ahb-empty { color: var(--hau-text-dim); font-size: 0.84rem; }
    `],
})
export class AdminHBarListComponent {
    readonly items = input.required<AdminHBarItem[]>();
    readonly max = input<number | null>(null);
    readonly emptyText = input('');

    readonly scale = computed(() => this.max() ?? Math.max(0, ...this.items().map(i => i.value)));
}
