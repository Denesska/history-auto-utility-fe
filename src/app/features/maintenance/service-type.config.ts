import { ServiceType } from '@hau/autogenapi/models';
import { FUEL_PUMP_ICON_NAME } from '@hau/shared/icons/fuel-pump.icon';

/**
 * Single source of truth for the 4 intervention categories (service_type) and their
 * color identity. Consumed by Istoric, Add-intervenție, Rapoarte and history-card —
 * never redefine these colors locally in a component.
 *
 * Not to be confused with `service_category` (CATEGORY_CONFIG in maintenance.component.ts),
 * which is a separate, finer-grained axis (which service was performed).
 */
export interface ServiceTypeConfig {
    value: ServiceType;
    labelKey: string;
    colorVar: string;
    tintVar: string;
    textVar: string;
    icon: string;
    /** Matches the .hau-cat-chip--* modifier defined in theme/hau-design-system.scss */
    chipClass: string;
}

export const SERVICE_TYPE_CONFIG: ServiceTypeConfig[] = [
    {
        value: 'MAINTENANCE',
        labelKey: 'maintenance.form.serviceTypes.maintenance',
        colorVar: 'var(--hau-cat-intretinere)',
        tintVar: 'var(--hau-cat-intretinere-tint)',
        textVar: 'var(--hau-cat-intretinere-text)',
        icon: 'build-outline',
        chipClass: 'hau-cat-chip--intretinere',
    },
    {
        value: 'REPAIR',
        labelKey: 'maintenance.form.serviceTypes.repair',
        colorVar: 'var(--hau-cat-reparatie)',
        tintVar: 'var(--hau-cat-reparatie-tint)',
        textVar: 'var(--hau-cat-reparatie-text)',
        icon: 'hammer-outline',
        chipClass: 'hau-cat-chip--reparatie',
    },
    {
        value: 'IMPROVEMENT',
        labelKey: 'maintenance.form.serviceTypes.improvement',
        colorVar: 'var(--hau-cat-imbunatatire)',
        tintVar: 'var(--hau-cat-imbunatatire-tint)',
        textVar: 'var(--hau-cat-imbunatatire-text)',
        icon: 'trending-up-outline',
        chipClass: 'hau-cat-chip--imbunatatire',
    },
    {
        value: 'PASSION',
        labelKey: 'maintenance.form.serviceTypes.passion',
        colorVar: 'var(--hau-cat-pasiune)',
        tintVar: 'var(--hau-cat-pasiune-tint)',
        textVar: 'var(--hau-cat-pasiune-text)',
        icon: 'heart-outline',
        chipClass: 'hau-cat-chip--pasiune',
    },
    {
        value: 'ALIMENTARE',
        labelKey: 'maintenance.form.serviceTypes.fuel',
        colorVar: 'var(--hau-cat-alimentare)',
        tintVar: 'var(--hau-cat-alimentare-tint)',
        textVar: 'var(--hau-cat-alimentare-text)',
        icon: FUEL_PUMP_ICON_NAME,
        chipClass: 'hau-cat-chip--alimentare',
    },
];

export function serviceTypeConfig(type: ServiceType | string | null | undefined): ServiceTypeConfig {
    return SERVICE_TYPE_CONFIG.find(c => c.value === type) ?? SERVICE_TYPE_CONFIG[0];
}
