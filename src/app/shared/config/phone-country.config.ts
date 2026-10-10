import { CountryCode } from 'libphonenumber-js';

/**
 * A short, curated list for the phone-input country picker — not the full
 * ~245 countries libphonenumber-js knows about. Typing or pasting a number
 * with a "+" prefix for *any* country still auto-detects correctly regardless
 * of this list (see phone-input.component.ts); this only limits what you can
 * pick from the dropdown without typing.
 */
export const PHONE_COUNTRIES: readonly CountryCode[] = [
    'RO', 'MD', 'HU', 'DE', 'FR', 'IT', 'ES', 'GB', 'PL', 'AT', 'BG', 'CZ', 'SK', 'SI', 'CH', 'US',
];

export const DEFAULT_PHONE_COUNTRY: CountryCode = 'RO';

/** "Romania +40" — region name via the browser's own locale data, for the picker's aria-label; no i18n file to maintain for ~245 possible countries. */
export function phoneCountryName(code: CountryCode, locale: string): string {
    try {
        return new Intl.DisplayNames([locale], { type: 'region' }).of(code) ?? code;
    } catch {
        return code;
    }
}
