// SupplierType lives in shared/config/supplier-type.config.ts (shared/ can't
// depend on features/*, and the icon/color config needs the enum) — re-exported
// here so existing imports from this module keep working.
import { SupplierType } from '@hau/shared/config/supplier-type.config';
export { SupplierType };

export interface SupplierDto {
    id: number;
    name: string;
    type: SupplierType;
    contact_name: string | null;
    phone: string | null;
    email: string | null;
    address: string | null;
    notes: string | null;
    is_active: boolean;
    /** Null = personal supplier, visible only to its creator. */
    organization_id: number | null;
}

export interface CreateSupplierPayload {
    name: string;
    type?: SupplierType;
    contact_name?: string;
    phone?: string;
    email?: string;
    address?: string;
    notes?: string;
    organization_id?: number;
}

export type UpdateSupplierPayload = Partial<CreateSupplierPayload> & { is_active?: boolean };

/**
 * `supplier_id` is additive on `Document`/`MaintenanceRecord` but the generated
 * OpenAPI client (`@hau/autogenapi`) only picks it up on a regen — which is
 * manual and risky (see the api-backend.yaml staleness note in memory) — so
 * callers that read/write it on those generated DTOs extend them with this
 * instead of regenerating the client just for one field.
 */
export type WithSupplierId<T> = T & { supplier_id?: number | null };
