import { CarDto, MaintenanceIntervalDto, MaintenanceRecordDto, MaintenanceSettingDto, ServiceCategory } from '@hau/autogenapi/models';
import { addMonths } from '@hau/shared/utils/date-math.util';
import { CATEGORY_CONFIG } from '@hau/shared/config/maintenance-category.config';

export type UsageProfile = 'normal' | 'intensive' | 'occasional';

/**
 * `'custom'` isn't a built-in usage profile — it means a named MaintenanceProfile is
 * active instead, so the multiplier is neutral: any interval not explicitly
 * overridden within that profile falls back to the raw global default, not a
 * driving-intensity-scaled one (a custom profile has no notion of "intensity").
 */
export type PlanMultiplierProfile = UsageProfile | 'custom';

export const PROFILE_MULTIPLIER: Record<PlanMultiplierProfile, number> = {
  normal: 1,
  intensive: 0.7,
  occasional: 1.3,
  custom: 1,
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
  profile: PlanMultiplierProfile,
  intervals: MaintenanceIntervalDto[],
  settings: MaintenanceSettingDto[] = [],
): PlanItem[] {
  const multiplier = PROFILE_MULTIPLIER[profile];
  const odometer = car.actual_mileage ?? car.current_mileage ?? null;

  return CATEGORY_CONFIG
    .map((cfg): PlanItem | null => {
      // A settings row is only present when the user deviated from the neutral
      // state, but when it exists its interval_km/interval_months are already
      // resolved (custom override merged with the global default) — no need to
      // fall back to `intervals` on top of it.
      const setting = settings.find(s => s.category === cfg.value);
      if (setting?.tracked === false) return null;

      const def = intervals.find(i => i.category === cfg.value);
      const resolvedKm = setting ? setting.interval_km : def?.interval_km ?? null;
      const resolvedMonths = setting ? setting.interval_months : def?.interval_months ?? null;
      if (resolvedKm == null && resolvedMonths == null) return null;

      const trackingUnit: PlanItemTrackingUnit = resolvedKm != null ? 'km' : 'date';
      // Only the default km interval scales with usage profile — a value the user
      // typed in manually is authoritative and shouldn't move under them depending
      // on which profile is selected. Time-based intervals never scale either way
      // (e.g. brake fluid every 2 years doesn't change with how much you drive).
      const intervalKm = resolvedKm != null
        ? (setting?.is_custom_km ? resolvedKm : Math.round(resolvedKm * multiplier))
        : null;
      const intervalMonths = resolvedMonths;

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

      const kmProgress = (intervalKm != null && odometer != null && last.mileage != null)
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
      const kmRemaining = kmProgress != null ? intervalKm! - (odometer! - last.mileage!) : null;
      const state: PlanItemState = !hasProgress
        ? 'untracked'
        : progressPercent >= 100 ? 'overdue' : progressPercent >= 80 ? 'warning' : 'ok';

      return {
        category: cfg.value,
        labelKey: cfg.label,
        icon: cfg.icon,
        lastDate: last.service_date,
        lastMileage: last.mileage ?? null,
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
