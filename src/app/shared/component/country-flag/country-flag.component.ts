import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * A small country flag, drawn as inline SVG rather than an emoji: emoji flags
 * don't render on Windows (they show as two letters), and this has to look the
 * same on every platform. Covers the vignette countries; anything else falls
 * back to a neutral chip with the code, so an unexpected value still reads.
 * Emblems (SK, SI, MD) are simplified to what's legible at ~16px.
 */
@Component({
    selector: 'app-country-flag',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <svg viewBox="0 0 30 20" class="cf" role="img" [attr.aria-label]="code" preserveAspectRatio="none">
            @switch (code) {
                @case ('RO') {
                    <rect width="10" height="20" fill="#002B7F"/><rect x="10" width="10" height="20" fill="#FCD116"/><rect x="20" width="10" height="20" fill="#CE1126"/>
                }
                @case ('HU') {
                    <rect width="30" height="7" fill="#CE2939"/><rect y="6.67" width="30" height="6.67" fill="#fff"/><rect y="13.33" width="30" height="6.67" fill="#477050"/>
                }
                @case ('AT') {
                    <rect width="30" height="20" fill="#C8102E"/><rect y="6.67" width="30" height="6.67" fill="#fff"/>
                }
                @case ('BG') {
                    <rect width="30" height="7" fill="#fff"/><rect y="6.67" width="30" height="6.67" fill="#00966E"/><rect y="13.33" width="30" height="6.67" fill="#D62612"/>
                }
                @case ('CZ') {
                    <rect width="30" height="10" fill="#fff"/><rect y="10" width="30" height="10" fill="#D7141A"/><path d="M0 0 L15 10 L0 20 Z" fill="#11457E"/>
                }
                @case ('SK') {
                    <rect width="30" height="7" fill="#fff"/><rect y="6.67" width="30" height="6.67" fill="#0B4EA2"/><rect y="13.33" width="30" height="6.67" fill="#EE1C25"/>
                    <path d="M6.5 4.5 H15.5 V11 Q15.5 15 11 16.5 Q6.5 15 6.5 11 Z" fill="#EE1C25" stroke="#fff" stroke-width="0.8"/>
                    <path d="M10.4 6.2 H11.6 V13 H10.4 Z M8.8 7.8 H13.2 V8.8 H8.8 Z M8.3 10 H13.7 V11 H8.3 Z" fill="#fff"/>
                    <path d="M7.3 13.2 Q9 11.6 11 13 Q13 11.6 14.7 13.2 Q13.4 15.4 11 16.1 Q8.6 15.4 7.3 13.2 Z" fill="#0B4EA2"/>
                }
                @case ('SI') {
                    <rect width="30" height="7" fill="#fff"/><rect y="6.67" width="30" height="6.67" fill="#005DA4"/><rect y="13.33" width="30" height="6.67" fill="#ED1C24"/>
                    <path d="M6 2.5 H12 V8 Q12 10.5 9 11.5 Q6 10.5 6 8 Z" fill="#005DA4" stroke="#ED1C24" stroke-width="0.6"/>
                    <path d="M6.6 8.4 L8 6.4 L9 7.6 L10 6.4 L11.4 8.4 Z" fill="#fff"/>
                }
                @case ('CH') {
                    <rect width="30" height="20" fill="#DA291C"/><rect x="13" y="4" width="4" height="12" fill="#fff"/><rect x="9" y="8" width="12" height="4" fill="#fff"/>
                }
                @case ('MD') {
                    <rect width="10" height="20" fill="#0046AE"/><rect x="10" width="10" height="20" fill="#FFD200"/><rect x="20" width="10" height="20" fill="#CC092F"/>
                    <ellipse cx="15" cy="10" rx="3" ry="4.2" fill="#B07E28"/><ellipse cx="15" cy="10.6" rx="1.7" ry="2.2" fill="#CC092F"/>
                }
                @default {
                    <rect width="30" height="20" fill="var(--hau-bg-soft, #e5e7eb)"/>
                    <text x="15" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="var(--hau-text-muted, #6b7280)">{{ code }}</text>
                }
            }
        </svg>`,
    styles: [`
        :host { display: inline-flex; flex-shrink: 0; vertical-align: middle; line-height: 0; }
        .cf {
            width: var(--country-flag-width, 1.25em);
            height: calc(var(--country-flag-width, 1.25em) * 2 / 3);
            border-radius: 2px;
            box-shadow: 0 0 0 1px rgb(0 0 0 / 14%);
            overflow: hidden;
        }
    `],
})
export class CountryFlagComponent {
    @Input({ required: true }) code = '';
}
