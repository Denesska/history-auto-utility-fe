import { SupplierType } from '@hau/features/supplier/supplier.model';

/** Icon + color per supplier type — same shape/convention as `document-type.config.ts`. */
export const SUPPLIER_TYPE_CONFIG: Record<SupplierType, { label: string; icon: string; color: string }> = {
    [SupplierType.SERVICE]:   { label: 'supplier.type.SERVICE',   icon: 'construct-outline',         color: 'service' },
    [SupplierType.PARTS]:     { label: 'supplier.type.PARTS',     icon: 'cog-outline',               color: 'parts' },
    [SupplierType.INSURANCE]: { label: 'supplier.type.INSURANCE', icon: 'shield-checkmark-outline',  color: 'insurance' },
    [SupplierType.FUEL]:      { label: 'supplier.type.FUEL',      icon: 'water-outline',             color: 'fuel' },
    [SupplierType.OTHER]:     { label: 'supplier.type.OTHER',     icon: 'briefcase-outline',         color: 'other' },
};
