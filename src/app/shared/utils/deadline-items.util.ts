import { CarDto, DocumentDto, MaintenanceIntervalDto, MaintenanceRecordDto, MaintenanceSettingDto } from '@hau/autogenapi/models';
import { daysUntil } from '@hau/features/cars/cars.utils';
import { docTypeConfig } from '@hau/features/documents/document-type.config';
import { buildPlanItems, PlanItem, PlanItemTrackingUnit, UsageProfile } from '@hau/shared/utils/plan-items.util';

export type DeadlineKind = 'document' | 'maintenance';

/**
 * Only three states reach the UI. `untracked` plan items (no service history yet)
 * are dropped here rather than rendered as a 0% bar — an empty bar reads as
 * "you're fine" when it actually means "we don't know".
 */
export type DeadlineState = 'ok' | 'warning' | 'overdue';

export const DEADLINE_WARNING_DAYS = 30;

/**
 * A document's validity window needs a start date to draw a progress bar. Most
 * documents have `issue_date`; the ones that don't (imported/legacy rows, or the
 * RCA/ITP/ROV dates denormalized onto the car itself) fall back to assuming a
 * one-year window, which is the common case for all three.
 */
const ASSUMED_DOC_VALIDITY_DAYS = 365;

export interface DeadlineItem {
  /**
   * Stable across reloads and independent of list position — this is what gets
   * persisted as the user's manual order, so it must not be an index or a label.
   */
  key: string;
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
  /** Original plan item, for the maintenance rows that need its extra fields. */
  planItem: PlanItem | null;
}

/** Document types that carry an expiry date and therefore belong in this list. */
const CAR_DOC_FALLBACKS: { type: string; carField: keyof CarDto }[] = [
  { type: 'RCA', carField: 'rca_expiry_date' },
  { type: 'ITP', carField: 'itp_expiry_date' },
  { type: 'ROV', carField: 'rov_expiry_date' },
];

interface DocSource {
  type: string;
  expiry: string;
  issued: string | null;
}

function collectDocSources(car: CarDto, docs: DocumentDto[] | null | undefined): DocSource[] {
  const byType = new Map<string, DocSource>();

  for (const doc of docs ?? []) {
    if (!doc.expiry_date || doc.is_active === false) continue;
    const existing = byType.get(doc.document_type);
    // Keep the one that expires last: a renewed policy supersedes the old row
    // instead of showing up twice (or, worse, showing the expired one).
    if (existing && new Date(existing.expiry).getTime() >= new Date(doc.expiry_date).getTime()) continue;
    byType.set(doc.document_type, {
      type: doc.document_type,
      expiry: doc.expiry_date,
      issued: doc.issue_date ?? null,
    });
  }

  // The car row denormalizes RCA/ITP/ROV expiry dates; use them only when there's
  // no uploaded document of that type, so the two can't disagree on screen.
  for (const { type, carField } of CAR_DOC_FALLBACKS) {
    if (byType.has(type)) continue;
    const raw = car[carField] as string | null | undefined;
    if (!raw) continue;
    byType.set(type, { type, expiry: raw, issued: null });
  }

  return [...byType.values()];
}

function documentToDeadline(source: DocSource): DeadlineItem | null {
  const daysLeft = daysUntil(source.expiry);
  if (daysLeft === null) return null;

  const totalDays = source.issued
    ? Math.max(1, Math.round((new Date(source.expiry).getTime() - new Date(source.issued).getTime()) / 86400000))
    : ASSUMED_DOC_VALIDITY_DAYS;

  const consumed = totalDays - daysLeft;
  const progressPercent = Math.min(100, Math.max(0, Math.round((consumed / totalDays) * 100)));
  const cfg = docTypeConfig(source.type);

  return {
    key: `doc:${source.type}`,
    kind: 'document',
    labelKey: cfg.label,
    icon: cfg.icon,
    state: daysLeft < 0 ? 'overdue' : daysLeft <= DEADLINE_WARNING_DAYS ? 'warning' : 'ok',
    progressPercent,
    daysLeft,
    kmRemaining: null,
    trackingUnit: 'date',
    fromDate: source.issued,
    dueDate: source.expiry,
    lastMileage: null,
    planItem: null,
  };
}

function planToDeadline(item: PlanItem): DeadlineItem | null {
  if (item.state === 'untracked') return null;

  return {
    key: `plan:${item.category}`,
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
    planItem: item,
  };
}

const STATE_RANK: Record<DeadlineState, number> = { overdue: 0, warning: 1, ok: 2 };

/**
 * The automatic order: what needs doing first, first. Overdue before expiring
 * before fine; inside a group, whatever is closest to its threshold.
 */
export function byUrgency(a: DeadlineItem, b: DeadlineItem): number {
  const byState = STATE_RANK[a.state] - STATE_RANK[b.state];
  if (byState !== 0) return byState;
  return b.progressPercent - a.progressPercent;
}

/**
 * Every deadline on one car — documents and maintenance in a single list, so the
 * hub, the collapsed summary and the reorder screen can't drift apart.
 */
export function buildDeadlineItems(
  car: CarDto,
  docs: DocumentDto[] | null | undefined,
  records: MaintenanceRecordDto[],
  intervals: MaintenanceIntervalDto[],
  profile: UsageProfile = 'normal',
  settings: MaintenanceSettingDto[] = [],
): DeadlineItem[] {
  const documents = collectDocSources(car, docs)
    .map(documentToDeadline)
    .filter((item): item is DeadlineItem => item != null);

  const maintenance = buildPlanItems(car, records, profile, intervals, settings)
    .map(planToDeadline)
    .filter((item): item is DeadlineItem => item != null);

  return [...documents, ...maintenance].sort(byUrgency);
}

/** Everything that needs the owner's attention — the collapsed view. */
export function pendingDeadlines(items: DeadlineItem[]): DeadlineItem[] {
  return items.filter(item => item.state !== 'ok');
}

/**
 * Applies a saved manual order. Keys that no longer exist are ignored, and items
 * the saved order never saw (a document added since) keep their automatic rank at
 * the end — so a stale order degrades instead of hiding new deadlines.
 */
export function applyManualOrder(items: DeadlineItem[], order: string[] | null | undefined): DeadlineItem[] {
  if (!order?.length) return [...items].sort(byUrgency);

  const rank = new Map(order.map((key, index) => [key, index]));
  const known = items.filter(item => rank.has(item.key)).sort((a, b) => rank.get(a.key)! - rank.get(b.key)!);
  const unknown = items.filter(item => !rank.has(item.key)).sort(byUrgency);

  return [...known, ...unknown];
}
