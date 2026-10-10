/**
 * Hand-written copies of the backend's driver-assignment DTOs (same
 * convention as `features/organization/organization.model.ts` — the OpenAPI
 * client isn't regenerated for every small addition).
 */

export interface AssignmentUserDto {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    picture?: string;
}

export interface AssignableUserDto {
    user: AssignmentUserDto;
    role: string;
}

export interface DriverAssignmentDto {
    id: number;
    car_id: number;
    driver: AssignmentUserDto;
    assigned_by: AssignmentUserDto;
    started_at: string;
    ended_at: string | null;
    notes: string | null;
}

/**
 * The generated `CarDto` (`@hau/autogenapi`) doesn't carry `organization_id`
 * — it's additive-only on the backend and not threaded through a client
 * regen, same as `WithSupplierId` in `features/supplier/supplier.model.ts`.
 */
export type WithOrganizationId<T> = T & { organization_id?: number | null };
