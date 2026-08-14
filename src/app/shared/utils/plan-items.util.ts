import { CarDto, MaintenanceIntervalDto, MaintenanceRecordDto, ServiceCategory } from '@hau/autogenapi/models';
import { addMonths } from '@hau/features/cars/cars.utils';
import { CATEGORY_CONFIG } from '@hau/features/maintenance/maintenance.component';

export type UsageProfile = 'normal' | 'intensive' | 'occasional';

export const PROFILE_MULTIPLIER: Record<UsageProfile, number> = {
  normal: 1,
  intensive: 0.7,
  occasional: 1.3,
};

export type PlanItemState = 'ok' | 'warning' | 'overdue' | 'untracked';

// Which unit drives the countdown/progress display. Only categories with a km
// interval (currently just OIL_CHANGE) are km-tracked; everything else is
// tracked purely by time — see MaintenanceIntervalService on the backend for
// the seeded defaults per category.
export type PlanItemTrackingUnit = 'km' | 'date';

export interface PlanItem {
  category: ServiceCategory;
  labelKey: string;
  icon: string;
  lastDate: string | null;
  lastMileage: number | null;
  trackingUnit: PlanItemTrackingUnit;
  intervalKm: number | null;
  intervalMonths: number | null;
  kmRemaining: number | null;
  nextDueDate: string | null;
  progressPercent: number;
  state: PlanItemState;
}

export function buildPlanItems(
  car: CarDto,
  records: MaintenanceRecordDto[],
  profile: UsageProfile,
  intervals: MaintenanceIntervalDto[],
): PlanItem[] {
  const multiplier = PROFILE_MULTIPLIER[profile];
  const odometer = car.actual_mileage ?? car.current_mileage ?? null;

  return CATEGORY_CONFIG
    .map((cfg): PlanItem | null => {
      const def = intervals.find(i => i.category === cfg.value);
      if (!def || (def.interval_km == null && def.interval_months == null)) return null;

      const trackingUnit: PlanItemTrackingUnit = def.interval_km != null ? 'km' : 'date';
      // Only km-based intervals scale with usage profile — time-based ones
      // (e.g. brake fluid every 2 years) don't change with how much you drive.
      const intervalKm = def.interval_km != null ? Math.round(def.interval_km * multiplier) : null;
      const intervalMonths = def.interval_months;

      const last = records
        .filter(r => r.service_category === cfg.value)
        .sort((a, b) => new Date(b.service_date).getTime() - new Date(a.service_date).getTime())[0];

      if (!last) {
        return {
          category: cfg.value,
          labelKey: cfg.label,
          icon: cfg.icon,
          lastDate: null,
          lastMileage: null,
          trackingUnit,
          intervalKm,
          intervalMonths,
          kmRemaining: null,
          nextDueDate: null,
          progressPercent: 0,
          state: 'untracked',
        };
      }

      const kmProgress = (intervalKm != null && odometer != null)
        ? (odometer - last.mileage) / intervalKm
        : null;

      const nextDueDate = intervalMonths != null ? addMonths(last.service_date, intervalMonths) : null;
      const dateProgress = (intervalMonths != null && nextDueDate != null)
        ? (Date.now() - new Date(last.service_date).getTime()) /
          (new Date(nextDueDate).getTime() - new Date(last.service_date).getTime())
        : null;

      // Due at whichever threshold (km or time) comes first.
      const progress = Math.max(kmProgress ?? -Infinity, dateProgress ?? -Infinity);
      const hasProgress = progress > -Infinity;
      const progressPercent = hasProgress ? Math.min(100, Math.max(0, Math.round(progress * 100))) : 0;
      // Signed on purpose (negative = overdue by that amount) so the UI can
      // distinguish "due in X" from "X overdue" instead of flattening both to 0.
      const kmRemaining = kmProgress != null ? intervalKm! - (odometer! - last.mileage) : null;
      const state: PlanItemState = !hasProgress
        ? 'untracked'
        : progressPercent >= 100 ? 'overdue' : progressPercent >= 80 ? 'warning' : 'ok';

      return {
        category: cfg.value,
        labelKey: cfg.label,
        icon: cfg.icon,
        lastDate: last.service_date,
        lastMileage: last.mileage,
        trackingUnit,
        intervalKm,
        intervalMonths,
        kmRemaining,
        nextDueDate,
        progressPercent,
        state,
      };
    })
    .filter((item): item is PlanItem => item != null)
    .sort((a, b) => b.progressPercent - a.progressPercent);
}
