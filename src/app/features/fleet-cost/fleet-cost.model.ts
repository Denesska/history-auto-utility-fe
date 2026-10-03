/**
 * Hand-written copies of the backend's fleet-cost DTOs (same convention as
 * `features/organization/organization.model.ts` — the OpenAPI client isn't
 * regenerated for every small addition).
 */

/** 0 = all time. */
export const FLEET_COST_RANGES = [90, 180, 365, 0] as const;
export type FleetCostRange = (typeof FLEET_COST_RANGES)[number];

export interface FleetCostByMonthDto {
    month: string;
    total: number;
    companyExpense: number;
}

export interface FleetCostByCarDto {
    carId: number;
    label: string;
    licensePlate: string | null;
    total: number;
    companyExpense: number;
    recordCount: number;
}

export interface FleetCostDashboardDto {
    range: FleetCostRange;
    totalCost: number;
    companyExpenseCost: number;
    recordCount: number;
    carCount: number;
    byMonth: FleetCostByMonthDto[];
    byCar: FleetCostByCarDto[];
}
