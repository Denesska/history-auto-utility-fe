import { DocumentDto } from '@hau/autogenapi/models';

export function getDocExpiry(docs: DocumentDto[] | null | undefined, type: string): string | null {
    if (!docs) return null;
    return docs.find(d => d.document_type === type && d.expiry_date)?.expiry_date ?? null;
}

export function removeNullProperties<T>(obj: T): T {
    const clone = {...obj};
    for (const key in clone) {
        if (clone[key] === null) {
            delete clone[key];
        }
    }
    return clone;
}

export function daysUntil(dateStr: string | null | undefined): number | null {
    if (!dateStr) return null;
    return Math.ceil((new Date(dateStr).getTime() - Date.now()) / 86400000);
}

export type DocUrgency = 'expired' | 'critical' | 'warning' | 'ok';

export function docUrgencyClass(days: number): DocUrgency {
    if (days < 0) return 'expired';
    if (days <= 7) return 'critical';
    if (days <= 14) return 'warning';
    return 'ok';
}

export function formatDate(dateStr: string | null | undefined): string {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function formatMileage(val: number | null | undefined): string {
    if (val == null) return '—';
    return Number(val).toLocaleString() + ' km';
}

export function formatLicensePlate(value: string | null | undefined): string {
    if (!value) return '';
    const cleaned = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    const groups = cleaned.match(/[A-Z]+|[0-9]+/g) ?? [];
    return groups.join(' ');
}