import { PlanItemTrackingUnit } from '@hau/shared/utils/plan-items.util';

/**
 * Generic, feature-agnostic shape the car hub's "Stare & scadențe" card renders — built by
 * each feature's own `CarDeadlineSource` (`core/car-page/car-page.contributions.ts`): the
 * document half lives in `features/documents/document-deadline-items.util.ts`, the
 * maintenance half in `features/maintenance/maintenance-deadline-items.util.ts`. Only the
 * generic ordering/urgency math that doesn't need to know which feature an item came from
 * stays here — see `core/car-page/FEATURE.md`.
 */
export type DeadlineKind = 'document' | 'maintenance';

/**
 * Only three states reach the UI. `untracked` plan items (no service history yet)
 * are dropped here rather than rendered as a 0% bar — an empty bar reads as
 * "you're fine" when it actually means "we don't know".
 */
export type DeadlineState = 'ok' | 'warning' | 'overdue';

export interface CarDeadlineItem {
  /**
   * Stable across reloads and independent of list position — this is what gets
   * persisted as the user's manual order, so it must not be an index or a label.
   */
  key: string;
  /** Which `CarDeadlineSource` produced this item — used to route open()/dismiss() back to it. */
  sourceId: string;
  carId: number;
  kind: DeadlineKind;
  labelKey: string;
  icon: string;
  state: DeadlineState;
  progressPercent: number;
  /** Signed: negative means overdue by that many days. Null for km-tracked items. */
  daysLeft: number | null;
  /** Signed: negative means overdue by that many km. Null for date-tracked items. */
  kmRemaining: number | null;
  trackingUnit: PlanItemTrackingUnit;
  /** Start of the validity window (document issue date / last service date). */
  fromDate: string | null;
  /** End of the validity window (expiry date / next due date). */
  dueDate: string | null;
  lastMileage: number | null;
  /** Source document the deadline was computed from (null for the car-row fallback and maintenance). */
  documentId: number | null;
  /** Most recent maintenance record the deadline is based on (null for documents / no record yet). */
  maintenanceRecordId: number | null;
  /** Set for a foreign (travel) vignette: the country whose flag to show next to the label. */
  countryCode: string | null;
  /**
   * True for an RCA/ITP/ITP-like document deadline eligible for the car hub's expiry alert
   * banner — set only by the documents source (see its `document-deadline-items.util.ts`).
   * `cars-details.component.ts`'s `getNextExpiry()` derives the banner from this flag alone,
   * so cars never needs to know which document *types* exist.
   */
  alert: boolean;
}

const STATE_RANK: Record<DeadlineState, number> = { overdue: 0, warning: 1, ok: 2 };

/**
 * The automatic order: what needs doing first, first. Overdue before expiring
 * before fine; inside a group, whatever is closest to its threshold.
 */
export function byUrgency(a: CarDeadlineItem, b: CarDeadlineItem): number {
  const byState = STATE_RANK[a.state] - STATE_RANK[b.state];
  if (byState !== 0) return byState;
  return b.progressPercent - a.progressPercent;
}

/** Everything that needs the owner's attention — the collapsed view. */
export function pendingDeadlines(items: CarDeadlineItem[]): CarDeadlineItem[] {
  return items.filter(item => item.state !== 'ok');
}

/**
 * Applies a saved manual order. Keys that no longer exist are ignored, and items
 * the saved order never saw (a document added since) keep their automatic rank at
 * the end — so a stale order degrades instead of hiding new deadlines.
 */
export function applyManualOrder(items: CarDeadlineItem[], order: string[] | null | undefined): CarDeadlineItem[] {
  if (!order?.length) return [...items].sort(byUrgency);

  const rank = new Map(order.map((key, index) => [key, index]));
  const known = items.filter(item => rank.has(item.key)).sort((a, b) => rank.get(a.key)! - rank.get(b.key)!);
  const unknown = items.filter(item => !rank.has(item.key)).sort(byUrgency);

  return [...known, ...unknown];
}
