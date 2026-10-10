import { OrganizationMembershipDto, OrganizationRole } from './organization.model';

/**
 * Frontend mirror of the backend's `organization-roles.ts` (UI gating only —
 * the backend re-checks everything itself, this just decides what to show).
 * Which roles each role may invite or assign. OWNER never appears as a
 * value — it's assigned directly in the database, never through the app.
 */
export const INVITABLE_ROLES: Record<OrganizationRole, OrganizationRole[]> = {
    [OrganizationRole.OWNER]: [OrganizationRole.SUPER_ADMIN, OrganizationRole.FLEET_ADMIN, OrganizationRole.FINANCE, OrganizationRole.DRIVER],
    [OrganizationRole.SUPER_ADMIN]: [OrganizationRole.FLEET_ADMIN, OrganizationRole.FINANCE, OrganizationRole.DRIVER],
    [OrganizationRole.FLEET_ADMIN]: [OrganizationRole.DRIVER],
    [OrganizationRole.FINANCE]: [],
    [OrganizationRole.MANAGER]: [],
    [OrganizationRole.DRIVER]: [],
};

/**
 * Whether `actorRole` (as `actorUserId`) may change the role of, or remove,
 * `target`. OWNER is untouchable. SUPER_ADMIN (Director) peers can see each
 * other but can't manage one another — only OWNER can. A FLEET_ADMIN may
 * only manage the DRIVERs they personally invited.
 */
export function canManageMember(actorRole: OrganizationRole, actorUserId: number, target: OrganizationMembershipDto): boolean {
    if (target.role === OrganizationRole.OWNER) return false;
    if (actorRole === OrganizationRole.OWNER) return true;
    if (target.role === OrganizationRole.SUPER_ADMIN) return false;
    if (actorRole === OrganizationRole.SUPER_ADMIN) return true;
    if (actorRole === OrganizationRole.FLEET_ADMIN && target.role === OrganizationRole.DRIVER) {
        return target.invited_by.id === actorUserId;
    }
    return false;
}
