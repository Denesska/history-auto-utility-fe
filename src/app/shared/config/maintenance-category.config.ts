import { ServiceCategory } from '@hau/autogenapi/models';
import { FUEL_PUMP_ICON_NAME } from '@hau/shared/icons/fuel-pump.icon';

export interface ServiceCategoryConfig {
    value: ServiceCategory;
    label: string;
    icon: string;
}

export const CATEGORY_CONFIG: ServiceCategoryConfig[] = [
    { value: 'OIL_CHANGE',           label: 'maintenance.categories.oilChange',           icon: 'water-outline' },
    { value: 'BRAKE_SERVICE',        label: 'maintenance.categories.brakeService',        icon: 'build-outline' },
    { value: 'TIRE_SERVICE',         label: 'maintenance.categories.tireService',         icon: 'disc-outline' },
    { value: 'FLUID_SERVICE',        label: 'maintenance.categories.fluidService',        icon: 'color-filter-outline' },
    { value: 'ENGINE_SERVICE',       label: 'maintenance.categories.engineService',       icon: 'construct-outline' },
    { value: 'INSPECTION',           label: 'maintenance.categories.inspection',          icon: 'shield-checkmark-outline' },
    { value: 'BATTERY_SERVICE',      label: 'maintenance.categories.batteryService',      icon: 'battery-charging-outline' },
    { value: 'FILTER_SERVICE',       label: 'maintenance.categories.filterService',       icon: 'list-outline' },
    { value: 'LIGHT_SERVICE',        label: 'maintenance.categories.lightService',        icon: 'flash-outline' },
    { value: 'TRANSMISSION_SERVICE', label: 'maintenance.categories.transmissionService', icon: 'car-outline' },
    { value: 'COMBUSTIBIL',          label: 'maintenance.categories.fuel',                icon: FUEL_PUMP_ICON_NAME },
    { value: 'OTHER',                label: 'maintenance.categories.other',               icon: 'checkmark-circle-outline' },
];
