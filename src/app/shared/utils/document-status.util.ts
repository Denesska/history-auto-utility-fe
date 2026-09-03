import { DocumentDto } from '@hau/autogenapi/models';
import { TranslocoService } from '@ngneat/transloco';

export function getDocExpiry(docs: DocumentDto[] | null | undefined, type: string): string | null {
    if (!docs) return null;
    const matches = docs.filter(d => d.document_type === type && d.expiry_date);
    return (matches.find(d => d.is_active !== false) ?? matches[0])?.expiry_date ?? null;
}

export type DocUrgency = 'expired' | 'critical' | 'warning' | 'ok';

export function docUrgencyClass(days: number): DocUrgency {
    if (days < 0) return 'expired';
    if (days <= 7) return 'critical';
    if (days <= 14) return 'warning';
    return 'ok';
}

export type DocStatus = 'valid' | 'expiring' | 'expired' | 'no-expiry';

const EXPIRY_SOON_DAYS = 30;

/** Status + days-left for a single document's expiry date, used across every doc list/detail view. */
export function calcDocStatus(expiryDate: string | null | undefined): { status: DocStatus; daysLeft: number | null } {
    if (!expiryDate) return { status: 'no-expiry', daysLeft: null };
    const daysLeft = Math.ceil((new Date(expiryDate).getTime() - Date.now()) / 86_400_000);
    if (daysLeft < 0)                 return { status: 'expired',  daysLeft };
    if (daysLeft <= EXPIRY_SOON_DAYS) return { status: 'expiring', daysLeft };
    return { status: 'valid', daysLeft };
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
