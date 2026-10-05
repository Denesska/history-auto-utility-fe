/**
 * Mirrors `history-auto-utility-be/src/modules/admin/dto/admin-stats.dto.ts`.
 * Hand-written rather than generated, like the sale-contract models — the
 * OpenAPI client regeneration is unreliable (see project notes).
 */

/** 0 = all time. */
export type AdminRange = 7 | 30 | 90 | 365 | 0;
export type AdminBucket = 'day' | 'week' | 'month';

export interface AdminKpis {
    totalUsers: number;
    newUsers: number;
    newUsersPrev: number | null;
    dau: number;
    wau: number;
    mau: number;
    totalCars: number;
    newCars: number;
    totalDocuments: number;
    newDocuments: number;
    totalMaintenance: number;
    newMaintenance: number;
}

export interface AdminSeriesPoint {
    date: string;
    signups: number;
    cumulativeUsers: number;
    activeUsers: number;
    cars: number;
    documents: number;
    maintenance: number;
}

export type AdminFunnelKey = 'signedUp' | 'addedCar' | 'addedRecord' | 'engaged' | 'sharedCar';

export interface AdminFunnelStep {
    key: AdminFunnelKey;
    users: number;
}

export interface AdminFeatureUsage {
    key: string;
    total: number;
    inRange: number;
    users: number | null;
}

export interface AdminRetentionCohort {
    week: string;
    size: number;
    weeks: (number | null)[];
}

export interface AdminLabelCount {
    label: string;
    count: number;
}

export interface AdminStorageRow {
    context: string;
    files: number;
    bytes: number;
}

export interface AdminStats {
    generatedAt: string;
    range: AdminRange;
    bucket: AdminBucket;
    trackingSince: string | null;
    kpis: AdminKpis;
    series: AdminSeriesPoint[];
    funnel: AdminFunnelStep[];
    features: AdminFeatureUsage[];
    retention: AdminRetentionCohort[];
    platforms: AdminLabelCount[];
    appVersions: AdminLabelCount[];
    pushUsers: AdminLabelCount[];
    storage: AdminStorageRow[];
    remindersSent: { inRange: number; total: number };
    fleet: {
        topMakes: AdminLabelCount[];
        fuelTypes: AdminLabelCount[];
        avgYear: number | null;
        sold: number;
    };
}

/**
 * Mirrors `admin-organization.dto.ts`. `feature_flags` carries every key the backend's
 * FEATURE_KEYS knows about (false only where explicitly disabled) — kept as `Record<string,
 * boolean>` rather than `Record<FeatureKey, boolean>` so an unrecognized key (frontend not yet
 * updated) still renders instead of being dropped by the type.
 */
export interface AdminOrganization {
    id: number;
    name: string;
    plan: string | null;
    member_count: number;
    car_count: number;
    feature_flags: Record<string, boolean>;
}

export interface AdminUserRow {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    picture: string;
    isAdmin: boolean;
    createdAt: string;
    lastActiveAt: string | null;
    cars: number;
    sharedWithMe: number;
    documents: number;
    maintenance: number;
    notes: number;
    blogEntries: number;
    activeDays30: number;
    platform: string | null;
    appVersion: string | null;
    pushEnabled: boolean;
}
