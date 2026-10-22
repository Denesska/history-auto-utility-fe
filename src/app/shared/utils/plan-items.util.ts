import { CarDto, MaintenanceRecordDto, MaintenanceSettingDto } from '@hau/autogenapi/models';
import { addMonths } from '@hau/shared/utils/date-math.util';
import { getPlanItemDefinitions, PLAN_ITEM_CONFIG, PlanItemDefinition, PlanItemKey } from '@hau/shared/config/plan-item.catalog';

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

// Which unit drives the countdown/progress display: 'km' when the item has a km
// interval, otherwise 'date' (time and/or oil-change-count based items).
export type PlanItemTrackingUnit = 'km' | 'date';

export interface PlanItem {
  item: PlanItemKey;
  labelKey: string;
  hintKey: string;
  icon: string;
  lastDate: string | null;
  lastMileage: number | null;
  /** Id of the most recent record linked to this item (the one lastDate/lastMileage come from). */
  lastRecordId: number | null;
  trackingUnit: PlanItemTrackingUnit;
  intervalKm: number | null;
  intervalMonths: number | null;
  /** Interval counted in engine oil changes (e.g. diesel fuel filter every 2 oil changes). */
  intervalOilChanges: number | null;
  /** ENGINE_OIL records logged strictly after this item's last service; null when no history or no oil-change interval. */
  oilChangesSince: number | null;
  kmRemaining: number | null;
  nextDueDate: string | null;
  progressPercent: number;
  state: PlanItemState;
}

/** Newest first: service_date, then mileage as tiebreak. */
function byRecency(a: MaintenanceRecordDto, b: MaintenanceRecordDto): number {
  const d = new Date(b.service_date).getTime() - new Date(a.service_date).getTime();
  return d !== 0 ? d : (b.mileage ?? 0) - (a.mileage ?? 0);
}

function isTracked(def: PlanItemDefinition, setting: MaintenanceSettingDto | undefined): boolean {
  return setting ? setting.tracked : def.trackedByDefault;
}

/** Applicable items that are currently switched off — the ones the settings panel offers to turn on. */
export function listUntrackedPlanItems(car: CarDto, settings: MaintenanceSettingDto[] = []): PlanItemDefinition[] {
  return getPlanItemDefinitions(car).filter(def => !isTracked(def, settings.find(s => s.item === def.key)));
}

export function buildPlanItems(
  car: CarDto,
  records: MaintenanceRecordDto[],
  profile: PlanMultiplierProfile,
  settings: MaintenanceSettingDto[] = [],
): PlanItem[] {
  const multiplier = PROFILE_MULTIPLIER[profile];
  const odometer = car.actual_mileage ?? car.current_mileage ?? null;
  const oilRecords = records.filter(r => r.plan_items?.includes('ENGINE_OIL'));

  return getPlanItemDefinitions(car)
    .map((def): PlanItem | null => {
      // A settings row is only present when the user deviated from the neutral state.
      const setting = settings.find(s => s.item === def.key);
      if (!isTracked(def, setting)) return null;

      // A value the user typed in is authoritative and doesn't scale with the usage
      // profile; the default km interval does. Months / oil-change counts never scale.
      const intervalKm = setting?.is_custom_km
        ? setting.interval_km
        : def.km != null ? Math.round(def.km * multiplier) : null;
      const intervalMonths = setting?.is_custom_months ? setting.interval_months : def.months;
      const intervalOilChanges = setting?.is_custom_oil_changes ? (setting.interval_oil_changes ?? null) : def.oilChanges;
      if (intervalKm == null && intervalMonths == null && intervalOilChanges == null) return null;

      const trackingUnit: PlanItemTrackingUnit = intervalKm != null ? 'km' : 'date';
      const cfg = PLAN_ITEM_CONFIG[def.key];
      const base = {
        item: def.key,
        labelKey: cfg.labelKey,
        hintKey: cfg.hintKey,
        icon: cfg.icon,
        trackingUnit,
        intervalKm,
        intervalMonths,
        intervalOilChanges,
      };

      const last = records.filter(r => r.plan_items?.includes(def.key)).sort(byRecency)[0];

      if (!last) {
        return {
          ...base,
          lastDate: null,
          lastMileage: null,
          lastRecordId: null,
          oilChangesSince: null,
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

      const lastTime = new Date(last.service_date).getTime();
      const oilChangesSince = intervalOilChanges != null
        ? oilRecords.filter(r => new Date(r.service_date).getTime() > lastTime).length
        : null;
      const oilProgress = (intervalOilChanges != null && oilChangesSince != null)
        ? oilChangesSince / intervalOilChanges
        : null;

      // Due at whichever threshold comes first.
      const progress = Math.max(kmProgress ?? -Infinity, dateProgress ?? -Infinity, oilProgress ?? -Infinity);
      const hasProgress = progress > -Infinity;
      const progressPercent = hasProgress ? Math.min(100, Math.max(0, Math.round(progress * 100))) : 0;
      // Signed on purpose (negative = overdue by that amount) so the UI can
      // distinguish "due in X" from "X overdue" instead of flattening both to 0.
      const kmRemaining = kmProgress != null ? intervalKm! - (odometer! - last.mileage!) : null;
      const state: PlanItemState = !hasProgress
        ? 'untracked'
        : progressPercent >= 100 ? 'overdue' : progressPercent >= 80 ? 'warning' : 'ok';

      return {
        ...base,
        lastDate: last.service_date,
        lastMileage: last.mileage ?? null,
        lastRecordId: last.id,
        oilChangesSince,
        kmRemaining,
        nextDueDate,
        progressPercent,
        state,
      };
    })
    .filter((item): item is PlanItem => item != null)
    .sort((a, b) => b.progressPercent - a.progressPercent);
}
