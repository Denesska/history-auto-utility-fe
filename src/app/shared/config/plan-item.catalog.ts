import { PlanItemKey, ServiceCategory } from '@hau/autogenapi/models';

export type { PlanItemKey };

/**
 * Plan item catalog. Mirrors `history-auto-utility-be/src/modules/maintenance-record/plan-item.catalog.ts`
 * — change the rules in both places.
 */

/** Plan items only (no work items). Item order = enum order (also the tiebreak for the derived record category). */
export const PLAN_ITEM_KEYS: PlanItemKey[] = [
  'ENGINE_OIL', 'AIR_FILTER', 'CABIN_FILTER', 'FUEL_FILTER', 'GEARBOX_OIL', 'DIFFERENTIAL_OIL',
  'BRAKE_FLUID', 'COOLANT', 'POWER_STEERING_FLUID', 'AC_SERVICE', 'TIRES', 'INSPECTION',
  'TIMING_BELT',
];

/**
 * One-off work items: pickable on a record ("Repairs") but with no interval, so they never
 * appear on the Plan, in settings or in deadlines (getPlanItemDefinitions omits them).
 */
export const WORK_ITEM_KEYS: PlanItemKey[] = ['BRAKE_PARTS', 'BATTERY', 'LIGHTS', 'SUSPENSION', 'ENGINE_REPAIR', 'BODYWORK', 'ELECTRICAL'];

export const OIL_VISCOSITIES = [
  '0W-16', '0W-20', '0W-30', '0W-40', '5W-20', '5W-30', '5W-40', '10W-40', '10W-60', '15W-40', '20W-50',
] as const;

export interface PlanItemConfig {
  labelKey: string;
  hintKey: string;
  icon: string;
}

export const PLAN_ITEM_CONFIG: Record<PlanItemKey, PlanItemConfig> = {
  ENGINE_OIL:           { labelKey: 'plan.items.engineOil',          hintKey: 'plan.itemHints.engineOil',          icon: 'water-outline' },
  AIR_FILTER:           { labelKey: 'plan.items.airFilter',          hintKey: 'plan.itemHints.airFilter',          icon: 'funnel-outline' },
  CABIN_FILTER:         { labelKey: 'plan.items.cabinFilter',        hintKey: 'plan.itemHints.cabinFilter',        icon: 'list-outline' },
  FUEL_FILTER:          { labelKey: 'plan.items.fuelFilter',         hintKey: 'plan.itemHints.fuelFilter',         icon: 'filter-outline' },
  GEARBOX_OIL:          { labelKey: 'plan.items.gearboxOil',         hintKey: 'plan.itemHints.gearboxOil',         icon: 'car-outline' },
  DIFFERENTIAL_OIL:     { labelKey: 'plan.items.differentialOil',    hintKey: 'plan.itemHints.differentialOil',    icon: 'settings-outline' },
  BRAKE_FLUID:          { labelKey: 'plan.items.brakeFluid',         hintKey: 'plan.itemHints.brakeFluid',         icon: 'build-outline' },
  COOLANT:              { labelKey: 'plan.items.coolant',            hintKey: 'plan.itemHints.coolant',            icon: 'thermometer-outline' },
  POWER_STEERING_FLUID: { labelKey: 'plan.items.powerSteeringFluid', hintKey: 'plan.itemHints.powerSteeringFluid', icon: 'color-filter-outline' },
  AC_SERVICE:           { labelKey: 'plan.items.acService',          hintKey: 'plan.itemHints.acService',          icon: 'snow-outline' },
  TIRES:                { labelKey: 'plan.items.tires',              hintKey: 'plan.itemHints.tires',              icon: 'disc-outline' },
  INSPECTION:           { labelKey: 'plan.items.inspection',         hintKey: 'plan.itemHints.inspection',         icon: 'shield-checkmark-outline' },
  TIMING_BELT:          { labelKey: 'plan.items.timingBelt',         hintKey: 'plan.itemHints.timingBelt',         icon: 'sync-outline' },
  BRAKE_PARTS:          { labelKey: 'plan.items.brakeParts',         hintKey: 'plan.itemHints.brakeParts',         icon: 'build-outline' },
  BATTERY:              { labelKey: 'plan.items.battery',            hintKey: 'plan.itemHints.battery',            icon: 'battery-charging-outline' },
  LIGHTS:               { labelKey: 'plan.items.lights',             hintKey: 'plan.itemHints.lights',             icon: 'bulb-outline' },
  SUSPENSION:           { labelKey: 'plan.items.suspension',         hintKey: 'plan.itemHints.suspension',         icon: 'git-compare-outline' },
  ENGINE_REPAIR:        { labelKey: 'plan.items.engineRepair',       hintKey: 'plan.itemHints.engineRepair',       icon: 'construct-outline' },
  BODYWORK:             { labelKey: 'plan.items.bodywork',           hintKey: 'plan.itemHints.bodywork',           icon: 'car-sport-outline' },
  ELECTRICAL:           { labelKey: 'plan.items.electrical',         hintKey: 'plan.itemHints.electrical',         icon: 'flash-outline' },
};

/** Ionicons used by PLAN_ITEM_CONFIG that components must register via addIcons (kebab-case names). */
export const PLAN_ITEM_ICON_NAMES = Object.values(PLAN_ITEM_CONFIG).map(c => c.icon);

/** ServiceCategory a record gets when it has none of its own — see the first ticked item in enum order. */
export const PLAN_ITEM_TO_CATEGORY: Record<PlanItemKey, ServiceCategory> = {
  ENGINE_OIL: 'OIL_CHANGE',
  AIR_FILTER: 'FILTER_SERVICE',
  CABIN_FILTER: 'FILTER_SERVICE',
  FUEL_FILTER: 'FILTER_SERVICE',
  GEARBOX_OIL: 'TRANSMISSION_SERVICE',
  DIFFERENTIAL_OIL: 'TRANSMISSION_SERVICE',
  BRAKE_FLUID: 'BRAKE_SERVICE',
  COOLANT: 'FLUID_SERVICE',
  POWER_STEERING_FLUID: 'FLUID_SERVICE',
  AC_SERVICE: 'FLUID_SERVICE',
  TIRES: 'TIRE_SERVICE',
  INSPECTION: 'INSPECTION',
  TIMING_BELT: 'ENGINE_SERVICE',
  BRAKE_PARTS: 'BRAKE_SERVICE',
  BATTERY: 'BATTERY_SERVICE',
  LIGHTS: 'LIGHT_SERVICE',
  SUSPENSION: 'OTHER',
  ENGINE_REPAIR: 'ENGINE_SERVICE',
  BODYWORK: 'OTHER',
  ELECTRICAL: 'OTHER',
};

/** First ticked Plan item in enum order wins; work items only count when no Plan item is ticked; OTHER when nothing is. */
export function deriveCategoryFromItems(items: readonly PlanItemKey[]): ServiceCategory {
  const first = PLAN_ITEM_KEYS.find(k => items.includes(k)) ?? WORK_ITEM_KEYS.find(k => items.includes(k));
  return first ? PLAN_ITEM_TO_CATEGORY[first] : 'OTHER';
}

export function engineOilKmFor(viscosity: string | null | undefined): number {
  switch (viscosity) {
    case '0W-16': case '0W-20': case '0W-30': case '5W-20':
      return 15000;
    case '0W-40': case '5W-30': case '5W-40':
      return 12000;
    case '10W-40': case '10W-60': case '15W-40': case '20W-50':
      return 8000;
    default:
      return 10000;
  }
}

export interface PlanItemDefinition {
  key: PlanItemKey;
  km: number | null;
  months: number | null;
  oilChanges: number | null;
  trackedByDefault: boolean;
}

/** The slice of a car the catalog needs (drivetrain/viscosity are read defensively — optional). */
export interface PlanCatalogCar {
  fuel_type?: string | null;
  transmission?: string | null;
  drivetrain?: string | null;
  engine_oil_viscosity?: string | null;
}

/** Applicable items for the car with default intervals; non-applicable items are omitted. */
export function getPlanItemDefinitions(car: PlanCatalogCar): PlanItemDefinition[] {
  const electric = car.fuel_type === 'ELECTRIC';
  const diesel = car.fuel_type === 'DIESEL';
  const defs: PlanItemDefinition[] = [];
  const add = (key: PlanItemKey, km: number | null, months: number | null, oilChanges: number | null, trackedByDefault: boolean) =>
    defs.push({ key, km, months, oilChanges, trackedByDefault });

  if (!electric) add('ENGINE_OIL', engineOilKmFor(car.engine_oil_viscosity), 12, null, true);
  if (!electric) add('AIR_FILTER', 30000, 24, null, true);
  add('CABIN_FILTER', 15000, 12, null, true);
  if (!electric) {
    add('FUEL_FILTER', diesel ? null : 60000, diesel ? 24 : 60, diesel ? 2 : null, diesel);
  }
  add('GEARBOX_OIL', car.transmission === 'MANUAL' ? 80000 : 60000, 60, null, !electric);
  if (car.drivetrain === 'REAR' || car.drivetrain === 'ALL_WHEEL') add('DIFFERENTIAL_OIL', 60000, 60, null, true);
  add('BRAKE_FLUID', null, 24, null, true);
  add('COOLANT', 100000, 60, null, true);
  add('POWER_STEERING_FLUID', 100000, 60, null, false);
  add('AC_SERVICE', null, 24, null, false);
  add('TIRES', null, 72, null, true);
  add('INSPECTION', null, 12, null, true);
  // Some engines have a chain instead; users simply ignore the item (see the hint).
  if (!electric) add('TIMING_BELT', 100000, 60, null, true);
  return defs;
}
