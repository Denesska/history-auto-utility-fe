/**
 * Hand-written copies of the backend's organization DTOs (same convention as
 * `features/admin/admin.model.ts` — the OpenAPI client isn't regenerated for
 * every small addition, see api-backend.yaml staleness notes).
 */

export enum OrganizationRole {
    SUPER_ADMIN = 'SUPER_ADMIN',
    FLEET_ADMIN = 'FLEET_ADMIN',
    MANAGER = 'MANAGER',
    DRIVER = 'DRIVER',
    FINANCE = 'FINANCE',
}

/** One organization as listed for "my organizations" — includes the caller's own role in it. */
export interface MyOrganizationDto {
    id: number;
    name: string;
    role: OrganizationRole;
    accepted_at: string | null;
}

export interface OrganizationMemberUserDto {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    picture?: string;
}

export interface OrganizationMembershipDto {
    id: number;
    organization_id: number;
    role: OrganizationRole;
    user: OrganizationMemberUserDto;
    invited_by: OrganizationMemberUserDto;
    accepted_at: string | null;
    created_at: string;
}
