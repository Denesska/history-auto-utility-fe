// Blog category values match the backend API enum (uppercase)
export type BlogCategory = 'PERSONAL' | 'VEHICLE';
export type VehicleEntryCategory =
  | 'REPAIR'
  | 'SERVICE_VISIT'
  | 'TRIP'
  | 'FUEL'
  | 'UPGRADE'
  | 'INSPECTION'
  | 'BREAKDOWN'
  | 'OTHER';

export type TagColor = 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'pink';

export interface BlogTag {
  label: string;
  color: TagColor;
}

export const TAG_COLORS: Record<TagColor, { bg: string; fg: string }> = {
  blue:   { bg: 'rgba(37, 99, 235, 0.10)',  fg: '#2563eb' },
  green:  { bg: 'rgba(22, 163, 74, 0.12)',   fg: '#15803d' },
  purple: { bg: 'rgba(124, 58, 237, 0.10)',  fg: '#7c3aed' },
  orange: { bg: 'rgba(234, 88, 12, 0.12)',   fg: '#c2410c' },
  teal:   { bg: 'rgba(13, 148, 136, 0.12)',  fg: '#0d9488' },
  pink:   { bg: 'rgba(219, 39, 119, 0.10)',  fg: '#be185d' },
};

export const VEHICLE_ENTRY_CATEGORIES: { value: VehicleEntryCategory; label: string }[] = [
  { value: 'REPAIR',        label: 'Repair' },
  { value: 'SERVICE_VISIT', label: 'Service visit' },
  { value: 'TRIP',          label: 'Trip' },
  { value: 'FUEL',          label: 'Fuel' },
  { value: 'UPGRADE',       label: 'Upgrade' },
  { value: 'INSPECTION',    label: 'Inspection' },
  { value: 'BREAKDOWN',     label: 'Breakdown' },
  { value: 'OTHER',         label: 'Other' },
];

export const VEHICLE_ENTRY_CATEGORY_LABELS: Record<VehicleEntryCategory, string> = {
  REPAIR:        'Repair',
  SERVICE_VISIT: 'Service visit',
  TRIP:          'Trip',
  FUEL:          'Fuel',
  UPGRADE:       'Upgrade',
  INSPECTION:    'Inspection',
  BREAKDOWN:     'Breakdown',
  OTHER:         'Other',
};

// Categories shown inline in the chip filter; the rest appear under "More"
export const VEHICLE_CATEGORY_CHIPS_PRIMARY: VehicleEntryCategory[] =
  ['REPAIR', 'SERVICE_VISIT', 'TRIP', 'FUEL', 'UPGRADE', 'INSPECTION', 'BREAKDOWN'];

export const TAG_COLOR_CYCLE: TagColor[] = ['blue', 'purple', 'green', 'orange', 'teal', 'pink'];

export function assignTagColor(label: string): TagColor {
  const hash = label.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return TAG_COLOR_CYCLE[hash % TAG_COLOR_CYCLE.length];
}

// Deterministic gradient per car id (no actual photo in mock/early phase)
const CAR_GRADIENTS = [
  'linear-gradient(135deg, #1e3a5f 0%, #4a90d9 100%)',
  'linear-gradient(135deg, #2d1b69 0%, #8b5cf6 100%)',
  'linear-gradient(135deg, #1a3a2a 0%, #22c55e 100%)',
  'linear-gradient(135deg, #7c2d12 0%, #f97316 100%)',
  'linear-gradient(135deg, #0f172a 0%, #475569 100%)',
  'linear-gradient(135deg, #450a0a 0%, #ef4444 100%)',
];
export function carGradient(carId: number): string {
  return CAR_GRADIENTS[carId % CAR_GRADIENTS.length];
}
