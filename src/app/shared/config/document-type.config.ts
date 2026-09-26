import { DocumentDto } from '@hau/autogenapi/models';
import { isForeignVignette } from '@hau/shared/config/vignette-country.config';

export const DOC_TYPE_CONFIG: Record<string, { label: string; icon: string; color: string; pickerLabel?: string }> = {
    RCA:          { label: 'documents.types.RCA',          icon: 'shield-checkmark-outline', color: 'rca' },
    ITP:          { label: 'documents.types.ITP',          icon: 'clipboard-outline',         color: 'itp' },
    ROV:          { label: 'documents.types.ROV',          icon: 'trail-sign-outline',         color: 'rov', pickerLabel: 'documents.types.ROV_PICKER' },
    REGISTRATION: { label: 'documents.types.REGISTRATION', icon: 'car-outline',                color: 'registration' },
    ROAD_TAX:     { label: 'documents.types.ROAD_TAX',     icon: 'cash-outline',               color: 'roadtax' },
};

/** Optional form fields shown per document type (dates, vehicle and file are always shown). */
export const DOC_TYPE_FORM_FIELDS: Record<string, readonly string[]> = {
    RCA:          ['provider', 'policy_series', 'policy_number', 'bonus_malus_class', 'premium', 'currency', 'policyholder', 'cnp_id'],
    ITP:          ['provider', 'premium', 'currency'],
    ROV:          ['premium', 'currency'],
    REGISTRATION: ['premium', 'currency'],
    ROAD_TAX:     ['premium', 'currency'],
};

const ALL_OPTIONAL_DOC_FIELDS = [
    'provider', 'policy_series', 'policy_number', 'bonus_malus_class',
    'premium', 'currency', 'policyholder', 'cnp_id',
] as const;

export function docTypeFormFields(type: string | null | undefined): readonly string[] {
    if (!type) return [];
    return DOC_TYPE_FORM_FIELDS[type] ?? ALL_OPTIONAL_DOC_FIELDS;
}

export function docTypeConfig(type: string) {
    return DOC_TYPE_CONFIG[type] ?? { label: type, icon: 'document-outline', color: 'slate' };
}

/**
 * The name to show for one document. Only differs from the type's own label for
 * a foreign vignette: that's a "Vinietă", not a "Rovinietă" (the Romanian one).
 */
export function docLabelKey(doc: Pick<DocumentDto, 'document_type' | 'country'>): string {
    if (isForeignVignette(doc)) return 'documents.types.ROV_FOREIGN';
    return docTypeConfig(doc.document_type).label;
}
