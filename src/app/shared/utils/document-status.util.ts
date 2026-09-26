import { DocumentDto } from '@hau/autogenapi/models';
import { TranslocoService } from '@ngneat/transloco';
import { isForeignVignette, vignetteCountryOf } from '@hau/shared/config/vignette-country.config';

/**
 * Expiry of the car's own document of this type (the active one if several).
 * Foreign (travel) vignettes never count here — for 'ROV' this is the home vignette.
 */
export function getDocExpiry(docs: DocumentDto[] | null | undefined, type: string): string | null {
    return getDocValidity(docs, type)?.expiryDate ?? null;
}

/** Same pick as `getDocExpiry()`, with the issue date too — needed for the proportional warning window. */
export function getDocValidity(
    docs: DocumentDto[] | null | undefined,
    type: string,
): { issueDate: string | null; expiryDate: string } | null {
    if (!docs) return null;
    const matches = docs.filter(d => d.document_type === type && d.expiry_date && !isForeignVignette(d));
    const doc = matches.find(d => d.is_active !== false) ?? matches[0];
    return doc ? { issueDate: doc.issue_date ?? null, expiryDate: doc.expiry_date! } : null;
}

/**
 * Foreign (travel) vignettes that are in force today — one per country, the one
 * lasting longest — for the small flag pills next to the car's own deadlines.
 */
export function activeForeignVignettes(docs: DocumentDto[] | null | undefined): { country: string; daysLeft: number }[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const byCountry = new Map<string, number>();
    for (const d of docs ?? []) {
        if (!isForeignVignette(d) || !d.expiry_date || d.is_active === false) continue;
        if (d.issue_date && new Date(d.issue_date.slice(0, 10) + 'T00:00:00') > today) continue;
        const daysLeft = Math.round((new Date(d.expiry_date.slice(0, 10) + 'T00:00:00').getTime() - today.getTime()) / 86_400_000);
        if (daysLeft < 0) continue;
        const country = vignetteCountryOf(d)!;
        byCountry.set(country, Math.max(daysLeft, byCountry.get(country) ?? -1));
    }
    return [...byCountry].map(([country, daysLeft]) => ({ country, daysLeft }));
}

export type DocUrgency = 'expired' | 'critical' | 'warning' | 'ok';

export function docUrgencyClass(days: number): DocUrgency {
    if (days < 0) return 'expired';
    if (days <= 7) return 'critical';
    if (days <= 14) return 'warning';
    return 'ok';
}

export type DocStatus = 'valid' | 'expiring' | 'expired' | 'no-expiry';

/** The "expiring soon" window never exceeds this — a 1-year document warns 30 days ahead. */
export const MAX_EXPIRING_WINDOW_DAYS = 30;
/** Share of the validity period that counts as "expiring soon". */
const EXPIRING_WINDOW_SHARE = 0.1;

/**
 * How many days before its expiry a document starts counting as "expiring soon":
 * ~10% of its validity period, rounded to whole days, at least 1 and at most 30
 * (7 days → 1, 30 days → 3, 90 days → 9, 1 year → 30). Without an issue date
 * the period is unknown, so the 30-day cap applies.
 */
export function expiringWindowDays(issueDate: string | null | undefined, expiryDate: string | null | undefined): number {
    if (!issueDate || !expiryDate) return MAX_EXPIRING_WINDOW_DAYS;
    const periodDays = Math.round((new Date(expiryDate).getTime() - new Date(issueDate).getTime()) / 86_400_000);
    if (!(periodDays > 0)) return MAX_EXPIRING_WINDOW_DAYS;
    return Math.min(MAX_EXPIRING_WINDOW_DAYS, Math.max(1, Math.round(periodDays * EXPIRING_WINDOW_SHARE)));
}

/**
 * Status + days-left for a single document, used across every doc list/detail
 * view. Pass the issue date so "expiring" scales with the validity period
 * (see `expiringWindowDays`); without it the 30-day window applies.
 */
export function calcDocStatus(
    expiryDate: string | null | undefined,
    issueDate?: string | null,
): { status: DocStatus; daysLeft: number | null } {
    if (!expiryDate) return { status: 'no-expiry', daysLeft: null };
    const daysLeft = Math.ceil((new Date(expiryDate).getTime() - Date.now()) / 86_400_000);
    if (daysLeft < 0)                                          return { status: 'expired',  daysLeft };
    if (daysLeft <= expiringWindowDays(issueDate, expiryDate)) return { status: 'expiring', daysLeft };
    return { status: 'valid', daysLeft };
}

/**
 * Ids of the expired documents that are only history for their car. Documents
 * are grouped by kind — same car, same `document_type`, and for vignettes the
 * same country (null = RO). Within a kind:
 * - if any document is not expired (valid, expiring or without an expiry date),
 *   every expired one is superseded — a not-expired document always runs past it;
 * - otherwise only the most recently expired one stays (the real "renew this"
 *   signal), and the older expired ones are superseded.
 */
export function supersededDocumentIds(docs: readonly DocumentDto[] | null | undefined): Set<number> {
    const kindOf = (d: DocumentDto) => `${d.car_id}|${d.document_type}|${vignetteCountryOf(d) ?? ''}`;
    const expired = (d: DocumentDto) => calcDocStatus(d.expiry_date).status === 'expired';
    const expiryTime = (d: DocumentDto) => new Date(d.expiry_date!).getTime();

    const byKind = new Map<string, DocumentDto[]>();
    for (const d of docs ?? []) {
        const kind = kindOf(d);
        byKind.set(kind, [...(byKind.get(kind) ?? []), d]);
    }

    const superseded = new Set<number>();
    for (const group of byKind.values()) {
        const expiredDocs = group.filter(expired);
        if (!expiredDocs.length) continue;
        const hasCurrent = expiredDocs.length < group.length;
        // Latest expiry first; same day → the newer row (higher id) wins.
        const [latest, ...older] = [...expiredDocs].sort((a, b) => expiryTime(b) - expiryTime(a) || b.id - a.id);
        if (hasCurrent) superseded.add(latest.id);
        older.forEach(d => superseded.add(d.id));
    }
    return superseded;
}

/** % of the validity window already elapsed (0-100), or null if issue/expiry dates are missing. */
export function calcDocProgress(issueDate: string | null | undefined, expiryDate: string | null | undefined): number | null {
    if (!issueDate || !expiryDate) return null;
    const start = new Date(issueDate).getTime();
    const end = new Date(expiryDate).getTime();
    if (end <= start) return null;
    const pct = ((Date.now() - start) / (end - start)) * 100;
    return Math.min(100, Math.max(0, Math.round(pct)));
}

export type DocCtaStyle = 'solid' | 'outline' | 'none';

export function docCtaFor(status: DocStatus, transloco: TranslocoService): { label: string; style: DocCtaStyle } {
    switch (status) {
        case 'expired':  return { label: transloco.translate('documents.cta.renew'),    style: 'solid' };
        case 'expiring': return { label: transloco.translate('documents.cta.schedule'), style: 'outline' };
        default:          return { label: '', style: 'none' };
    }
}
