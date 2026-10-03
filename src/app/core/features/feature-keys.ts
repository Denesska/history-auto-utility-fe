/** One key per vertical feature an organization can switch off. Must match the backend's `enabled_features` keys; the list grows with new features. */
export type FeatureKey = 'supplier' | 'fleet_cost' | 'sale_contract';
