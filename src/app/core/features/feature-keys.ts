/**
 * One key per vertical feature an organization can switch off. Must match the backend's
 * `enabled_features` keys; the list grows with new features.
 *
 * `documents` | `maintenance` | `car_notes` | `car_wishlist` | `journal` | `reports` back the
 * car page's pluggable tabs/actions (see `core/car-page/FEATURE.md`) — each gates the matching
 * global route/menu entry too (e.g. `/main/maintenance`, the sidebar's "Întreținere" item).
 */
export type FeatureKey =
  | 'supplier'
  | 'fleet_cost'
  | 'sale_contract'
  | 'documents'
  | 'maintenance'
  | 'car_notes'
  | 'car_wishlist'
  | 'journal'
  | 'reports';
