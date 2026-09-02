import { DocumentDto } from '@hau/autogenapi/models';

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
