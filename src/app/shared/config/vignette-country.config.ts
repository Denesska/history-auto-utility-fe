import { DocumentDto } from '@hau/autogenapi/models';

/**
 * The country whose vignette is the car's "own" one. A ROV document with a null
 * `country` is a home vignette — that's every vignette created before the
 * column existed, and the default for new ones.
 */
export const HOME_VIGNETTE_COUNTRY = 'RO';

/** One quick-pick validity period for a country's vignette. */
export interface VignetteDuration {
    /** Stable id, also the suffix of its i18n key. */
    key: string;
    days?: number;
    months?: number;
    years?: number;
}

export interface VignetteCountry {
    code: string;
    /** Quick-pick periods for a foreign vignette; the home one keeps the form's usual 1-year default. */
    durations: readonly VignetteDuration[];
    /** Pre-selected period — the one a traveller most often buys. */
    defaultDuration?: string;
}

const D = (days: number): VignetteDuration => ({ key: `days${days}`, days });
const M = (months: number): VignetteDuration => ({ key: `months${months}`, months });
const Y1: VignetteDuration = { key: 'year1', years: 1 };

/**
 * Countries offered in the vignette country picker — RO first, then the
 * vignette (not toll-booth) countries a Romanian driver typically crosses.
 * Periods reflect what each country actually sells; the resulting end date
 * stays editable, since a few (CH, HU annual) follow calendar rules we don't model.
 */
export const VIGNETTE_COUNTRIES: readonly VignetteCountry[] = [
    { code: 'RO', durations: [] },
    { code: 'HU', durations: [D(1), D(10), M(1), Y1], defaultDuration: 'days10' },
    { code: 'AT', durations: [D(1), D(10), M(2), Y1], defaultDuration: 'days10' },
    { code: 'BG', durations: [{ key: 'weekend', days: 3 }, D(7), M(1), M(3), Y1], defaultDuration: 'days7' },
    { code: 'CZ', durations: [D(1), D(10), D(30), Y1], defaultDuration: 'days10' },
    { code: 'SK', durations: [D(1), D(10), D(30), Y1], defaultDuration: 'days10' },
    { code: 'SI', durations: [D(7), M(1), M(6), Y1], defaultDuration: 'days7' },
    { code: 'CH', durations: [Y1], defaultDuration: 'year1' },
    { code: 'MD', durations: [D(7), D(15), D(30), D(90), D(180), Y1], defaultDuration: 'days7' },
];

export function vignetteCountryConfig(code: string | null | undefined): VignetteCountry | undefined {
    return VIGNETTE_COUNTRIES.find(c => c.code === (code || HOME_VIGNETTE_COUNTRY));
}

/** The country a ROV document is valid in (RO when unset). Null for any other document type. */
export function vignetteCountryOf(doc: Pick<DocumentDto, 'document_type' | 'country'>): string | null {
    if (doc.document_type !== 'ROV') return null;
    return doc.country || HOME_VIGNETTE_COUNTRY;
}

/**
 * A vignette for a country other than the home one — a travel vignette. These
 * never count as the car's vignette: no chip deadline, no "expired" alarm, no
 * renew prompt. They're shown while valid and then quietly become history.
 */
export function isForeignVignette(doc: Pick<DocumentDto, 'document_type' | 'country'>): boolean {
    const country = vignetteCountryOf(doc);
    return country != null && country !== HOME_VIGNETTE_COUNTRY;
}

/** i18n key for a country's name. */
export function countryNameKey(code: string): string {
    return `countries.${code}`;
}

/** Inclusive end date for a vignette starting on `start` (YYYY-MM-DD) and lasting `duration`. */
export function vignetteExpiryFor(start: string, duration: VignetteDuration): string {
    const d = new Date(`${start}T00:00:00`);
    if (duration.days) d.setDate(d.getDate() + duration.days - 1);
    if (duration.months) d.setMonth(d.getMonth() + duration.months);
    if (duration.years) d.setFullYear(d.getFullYear() + duration.years);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/** Regional-indicator emoji flag — used only where an SVG can't render (native `<option>`s). */
export function countryFlagEmoji(code: string): string {
    if (!/^[A-Z]{2}$/.test(code)) return '';
    return String.fromCodePoint(...[...code].map(c => 0x1f1e6 + c.charCodeAt(0) - 65));
}
