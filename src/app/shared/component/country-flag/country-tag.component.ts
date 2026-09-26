import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CountryFlagComponent } from './country-flag.component';

/** Flag + ISO code ("🇭🇺 HU") — the one way a vignette's country is shown next to a document. */
@Component({
    selector: 'app-country-tag',
    standalone: true,
    imports: [CountryFlagComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<app-country-flag [code]="code" /><span class="ct-code">{{ code }}</span>`,
    styles: [`
        :host {
            display: inline-flex;
            align-items: center;
            gap: .3em;
            font-weight: 700;
            font-size: .85em;
            letter-spacing: .02em;
            white-space: nowrap;
        }
    `],
})
export class CountryTagComponent {
    @Input({ required: true }) code = '';
}
