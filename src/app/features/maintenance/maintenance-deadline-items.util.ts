import { CarDto, MaintenanceIntervalDto, MaintenanceRecordDto, MaintenanceSettingDto } from '@hau/autogenapi/models';
import { daysUntil } from '@hau/shared/utils/date-math.util';
import { buildPlanItems, PlanItem, UsageProfile } from '@hau/shared/utils/plan-items.util';
import { CarDeadlineItem } from '@hau/shared/utils/deadline-items.util';

/**
 * Maintenance's half of the car hub's "Stare & scadențe" card — the counterpart to
 * `features/documents/document-deadline-items.util.ts`. Registered as a `CarDeadlineSource`
 * in `maintenance.car-page.ts` (see `core/car-page/FEATURE.md`); split out of the old combined
 * `shared/utils/deadline-items.util.ts#buildDeadlineItems` so `features/cars` doesn't need to
 * know what a maintenance record even is. `item.key` stays `plan:<category>` so a dismiss can
 * recover the `ServiceCategory` without a separate field.
 */
function planToDeadline(item: PlanItem, carId: number): CarDeadlineItem | null {
  if (item.state === 'untracked') return null;

  return {
    key: `plan:${item.category}`,
    sourceId: 'maintenance',
    carId,
    kind: 'maintenance',
    labelKey: item.labelKey,
    icon: item.icon,
    state: item.state,
    progressPercent: item.progressPercent,
    daysLeft: item.trackingUnit === 'date' && item.nextDueDate ? daysUntil(item.nextDueDate) : null,
    kmRemaining: item.trackingUnit === 'km' ? item.kmRemaining : null,
    trackingUnit: item.trackingUnit,
    fromDate: item.lastDate,
    dueDate: item.nextDueDate,
    lastMileage: item.lastMileage,
    documentId: null,
    maintenanceRecordId: item.lastRecordId,
    countryCode: null,
    alert: false,
  };
}

/** Every maintenance-backed deadline on one car, for the hub's "normal" usage profile. */
export function buildMaintenanceDeadlineItems(
  car: CarDto,
  records: MaintenanceRecordDto[],
  profile: UsageProfile,
  intervals: MaintenanceIntervalDto[],
  settings: MaintenanceSettingDto[],
  carId: number,
): CarDeadlineItem[] {
  return buildPlanItems(car, records, profile, intervals, settings)
    .map(item => planToDeadline(item, carId))
    .filter((item): item is CarDeadlineItem => item != null);
}
