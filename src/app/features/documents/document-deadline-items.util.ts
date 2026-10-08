import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { daysUntil } from '@hau/shared/utils/date-math.util';
import { expiringWindowDays } from '@hau/shared/utils/document-status.util';
import { docTypeConfig } from '@hau/shared/config/document-type.config';
import { HOME_VIGNETTE_COUNTRY, isForeignVignette, vignetteCountryOf } from '@hau/shared/config/vignette-country.config';
import { CarDeadlineItem } from '@hau/shared/utils/deadline-items.util';

/**
 * Documents' half of the car hub's "Stare & scadențe" card — the counterpart to
 * `features/maintenance/maintenance-deadline-items.util.ts`. Registered as a
 * `CarDeadlineSource` in `documents.car-page.ts` (see `core/car-page/FEATURE.md`); split out
 * of the old combined `shared/utils/deadline-items.util.ts#buildDeadlineItems` so `features/cars`
 * doesn't need to know what a document even is.
 */

/**
 * A document's validity window needs a start date to draw a progress bar. Most
 * documents have `issue_date`; the ones that don't (imported/legacy rows, or the
 * RCA/ITP/ROV dates denormalized onto the car itself) fall back to assuming a
 * one-year window, which is the common case for all three.
 */
const ASSUMED_DOC_VALIDITY_DAYS = 365;

/**
 * Document types that carry an expiry date and therefore belong in this list.
 * The vignette (ROV, home and foreign alike) is handled separately by
 * `vignetteDeadlines()` below — unlike RCA/ITP it must disappear once expired
 * rather than linger as an "overdue" row, and it carries a country flag.
 */
const CAR_DOC_FALLBACKS: { type: string; carField: keyof CarDto }[] = [
  { type: 'RCA', carField: 'rca_expiry_date' },
  { type: 'ITP', carField: 'itp_expiry_date' },
];

/** The document types eligible for the car hub's expiry alert banner (see `CarDeadlineItem.alert`). ROV is added separately by `vignetteDeadlines()`. */
const ALERT_DOC_TYPES = new Set([...CAR_DOC_FALLBACKS.map(f => f.type), 'ROV']);

interface DocSource {
  type: string;
  expiry: string;
  issued: string | null;
  documentId: number | null;
}

function collectDocSources(car: CarDto, docs: DocumentDto[] | null | undefined): DocSource[] {
  const byType = new Map<string, DocSource>();

  for (const doc of docs ?? []) {
    if (!doc.expiry_date || doc.is_active === false) continue;
    // Every vignette (home or foreign) is handled separately — see vignetteDeadlines().
    if (doc.document_type === 'ROV') continue;
    const existing = byType.get(doc.document_type);
    // Keep the one that expires last: a renewed policy supersedes the old row
    // instead of showing up twice (or, worse, showing the expired one).
    if (existing && new Date(existing.expiry).getTime() >= new Date(doc.expiry_date).getTime()) continue;
    byType.set(doc.document_type, {
      type: doc.document_type,
      expiry: doc.expiry_date,
      issued: doc.issue_date ?? null,
      documentId: doc.id,
    });
  }

  // The car row denormalizes RCA/ITP expiry dates; use them only when there's
  // no uploaded document of that type, so the two can't disagree on screen.
  for (const { type, carField } of CAR_DOC_FALLBACKS) {
    if (byType.has(type)) continue;
    const raw = car[carField] as string | null | undefined;
    if (!raw) continue;
    byType.set(type, { type, expiry: raw, issued: null, documentId: null });
  }

  return [...byType.values()];
}

function documentToDeadline(source: DocSource, carId: number): CarDeadlineItem | null {
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
    sourceId: 'documents',
    carId,
    kind: 'document',
    labelKey: cfg.label,
    icon: cfg.icon,
    // Warning window scales with the validity period (~10%, max 30 days).
    state: daysLeft < 0 ? 'overdue' : daysLeft <= expiringWindowDays(source.issued, source.expiry) ? 'warning' : 'ok',
    progressPercent,
    daysLeft,
    kmRemaining: null,
    trackingUnit: 'date',
    fromDate: source.issued,
    dueDate: source.expiry,
    lastMileage: null,
    documentId: source.documentId,
    maintenanceRecordId: null,
    countryCode: null,
    alert: ALERT_DOC_TYPES.has(source.type),
  };
}

/**
 * Vignette deadlines — the car's own (Romanian) vignette and any foreign travel
 * ones, all rendered the same way: a country flag and the days left. Unlike
 * RCA/ITP, a vignette is never shown as "overdue" — running out is simply the
 * end of its validity window, home or abroad, so once `daysLeft` goes negative
 * it just drops off the list instead of lingering as a red row. The home one
 * still warns as it approaches expiry (and still drives the hub's alert
 * banner, via `alert: true`); a foreign one stays in the calm `ok` state the
 * whole time, since running out at the end of a trip is the expected outcome,
 * not something to warn about or "renew".
 */
function vignetteDeadlines(car: CarDto, docs: DocumentDto[] | null | undefined, carId: number): CarDeadlineItem[] {
  const items: CarDeadlineItem[] = [];

  // The home vignette: the uploaded document expiring last, or the car-row
  // fallback when there's no uploaded one — same pattern as collectDocSources().
  let home: DocSource | null = null;
  for (const doc of docs ?? []) {
    if (doc.document_type !== 'ROV' || isForeignVignette(doc) || !doc.expiry_date || doc.is_active === false) continue;
    if (!home || new Date(home.expiry).getTime() < new Date(doc.expiry_date).getTime()) {
      home = { type: 'ROV', expiry: doc.expiry_date, issued: doc.issue_date ?? null, documentId: doc.id };
    }
  }
  if (!home && car.rov_expiry_date) {
    home = { type: 'ROV', expiry: car.rov_expiry_date, issued: null, documentId: null };
  }
  if (home) {
    const base = documentToDeadline(home, carId);
    if (base && base.daysLeft != null && base.daysLeft >= 0) {
      items.push({ ...base, countryCode: HOME_VIGNETTE_COUNTRY, alert: true });
    }
  }

  // Foreign (travel) vignettes: one row each, shown only while still valid.
  for (const doc of docs ?? []) {
    if (!isForeignVignette(doc) || !doc.expiry_date || doc.is_active === false) continue;
    const base = documentToDeadline({ type: doc.document_type, expiry: doc.expiry_date, issued: doc.issue_date ?? null, documentId: doc.id }, carId);
    if (!base || base.daysLeft == null || base.daysLeft < 0) continue;
    items.push({
      ...base,
      key: `doc:vignette:${doc.id}`,
      labelKey: 'documents.types.ROV_FOREIGN',
      state: 'ok',
      countryCode: vignetteCountryOf(doc),
      alert: false,
    });
  }

  return items;
}

/** Every document-backed deadline on one car — RCA/ITP (uploaded or car-row fallback) plus every vignette (home and foreign). */
export function buildDocumentDeadlineItems(car: CarDto, docs: DocumentDto[] | null | undefined, carId: number): CarDeadlineItem[] {
  return collectDocSources(car, docs)
    .map(source => documentToDeadline(source, carId))
    .filter((item): item is CarDeadlineItem => item != null)
    .concat(vignetteDeadlines(car, docs, carId));
}
