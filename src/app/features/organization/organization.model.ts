/**
 * Hand-written copies of the backend's organization DTOs (same convention as
 * `features/admin/admin.model.ts` — the OpenAPI client isn't regenerated for
 * every small addition, see api-backend.yaml staleness notes).
 */

export enum OrganizationRole {
    /** True account owner — one per org, assigned directly in the database, never through the app's invite UI. Outranks everyone, including SUPER_ADMIN/Director. */
    OWNER = 'OWNER',
    /** "Director" in the UI. Only OWNER can create one; Directors see each other but can't manage one another. */
    SUPER_ADMIN = 'SUPER_ADMIN',
    FLEET_ADMIN = 'FLEET_ADMIN',
    /** Disabled for now — not offered in the invite UI. */
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
    /** True only for a company-created local account (username+password, no Google identity) — never true for a real Google-identity member. Gates the "reset password" row action and hides the role-change/remove rank checks that don't apply to these accounts. */
    is_company_managed: boolean;
    /** Short login username of a company-managed account; null/absent for a Google-identity member. */
    username?: string | null;
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

/** The car's current driver, as surfaced on the Organization fleet list — just enough to show who it is and render an avatar (same shape as `AssignmentUserDto` minus `email`, see `features/cars/driver-assignment/driver-assignment.model.ts`). */
export interface OrganizationCarDriverDto {
    id: number;
    first_name: string;
    last_name: string;
    picture: string | null;
}

/**
 * A car already in the organization's fleet — shown in the "company cars"
 * section. Deliberately no `nickname` here: a car's nickname is private to
 * whoever set it (see the cars feature's CarUserNickname-backed model) and an
 * admin viewing the whole fleet never sees any individual's private label —
 * this list always shows make+model, with `photoUrl` for the row thumbnail.
 */
export interface OrganizationCarDto {
    id: number;
    make: string;
    model: string;
    photoUrl: string | null;
    license_plate: string | null;
    vin: string | null;
    year: number | null;
    /** The car's current driver (active assignment), or `null` if unassigned — see `features/cars/driver-assignment/`. */
    currentDriver: OrganizationCarDriverDto | null;
}

/**
 * Response of creating a company-owned local account
 * (`POST /organization/:organizationId/members/local`). `credentials` is the
 * ONLY time the plaintext password is ever returned — it can't be fetched
 * again afterward, only reset to a new one (see `resetLocalPassword`).
 * `credentials.email` is an internal identifier, never shown — the member logs
 * in with `credentials.username`.
 */
export interface CreateLocalMemberResultDto {
    membership: OrganizationMembershipDto;
    credentials: { email: string; password: string; username: string };
}

/** The outcome of importing one row of a fleet-import file. */
export interface ImportRowResultDto {
    row: number;
    success: boolean;
    carId?: number;
    label?: string;
    error?: string;
}

export interface ImportCarsResultDto {
    total: number;
    created: number;
    failed: number;
    results: ImportRowResultDto[];
}
