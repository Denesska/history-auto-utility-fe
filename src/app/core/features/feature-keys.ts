/**
 * One key per vertical feature an organization can switch off. Must match the backend's
 * `enabled_features` keys (and `FEATURE_KEYS` in `common/features/feature-keys.ts`); the list
 * grows with new features.
 *
 * `documents` | `maintenance` | `car_notes` | `car_wishlist` | `journal` | `reports` |
 * `driver_assignment` back the car page's pluggable tabs/actions (see
 * `core/car-page/FEATURE.md`) — each gates the matching global route/menu entry too (e.g.
 * `/main/maintenance`, the sidebar's "Întreținere" item; `driver_assignment` gates the car
 * page's "Sofer" tab/route instead of a global one, see `features/cars/FEATURE.md`).
 *
 * Also the source for the admin "organizations & features" screen's labels
 * (`features/admin/admin.component.ts`) — a key missing from this array is shown there as its
 * raw backend string instead of a translated label.
 */
export const FEATURE_KEYS = [
  'supplier',
  'fleet_cost',
  'sale_contract',
  'documents',
  'maintenance',
  'car_notes',
  'car_wishlist',
  'journal',
  'reports',
  'driver_assignment',
] as const;
export type FeatureKey = (typeof FEATURE_KEYS)[number];
