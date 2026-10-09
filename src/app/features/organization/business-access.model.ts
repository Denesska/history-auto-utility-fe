/**
 * Hand-written copies of the backend's business-access DTOs (same convention
 * as `organization.model.ts` / `admin/admin.model.ts` — the OpenAPI client
 * isn't regenerated for this, see api-backend.yaml staleness notes).
 * Mirrors `history-auto-utility-be/src/modules/business-access/dto/business-access-status.dto.ts`.
 */

export type BusinessAccessStatus = 'NONE' | 'PENDING' | 'APPROVED' | 'REJECTED';

/** The user's own latest request, as surfaced back to them (no reviewer identity). */
export interface BusinessAccessRequestSummaryDto {
    id: number;
    company_name: string;
    note: string | null;
    rejection_reason: string | null;
    created_at: string;
    decided_at: string | null;
}

/**
 * `status` already folds in the "allowed" rule (is_admin / grandfathered
 * Director+ / approved request) — it reads APPROVED even when the user has
 * no actual request row, so the UI only ever needs `canCreateOrganization`
 * to decide whether to show "Create company" or the request-gate states.
 */
export interface BusinessAccessStatusDto {
    status: BusinessAccessStatus;
    canCreateOrganization: boolean;
    request: BusinessAccessRequestSummaryDto | null;
}
