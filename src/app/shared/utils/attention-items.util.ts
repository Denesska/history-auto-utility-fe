import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { daysUntil } from '@hau/shared/utils/date-math.util';
import { expiringWindowDays, getDocValidity } from '@hau/shared/utils/document-status.util';

export const ATTENTION_URGENT_THRESHOLD_DAYS = 3;

const DOC_SOURCES: { type: string; labelKey: string; carField: keyof CarDto }[] = [
  { type: 'RCA', labelKey: 'overview.deadlines.insurance', carField: 'rca_expiry_date' },
  { type: 'ITP', labelKey: 'overview.deadlines.technicalInspection', carField: 'itp_expiry_date' },
  { type: 'ROV', labelKey: 'overview.deadlines.vignette', carField: 'rov_expiry_date' },
];

export interface AttentionItem {
  carId: number;
  carName: string;
  docLabelKey: string;
  daysLeft: number;
  severity: 'urgent' | 'warning';
}

export function buildAttentionItems(
  cars: CarDto[],
  docsByCarId: Record<number, DocumentDto[]>,
): AttentionItem[] {
  const items: AttentionItem[] = [];

  for (const car of cars) {
    const carName = car.nickname || `${car.make} ${car.model}`;
    const docs = docsByCarId[car.id] ?? [];

    for (const { type, labelKey, carField } of DOC_SOURCES) {
      const validity = getDocValidity(docs, type);
      const raw = validity?.expiryDate ?? (car[carField] as string | null | undefined);
      if (!raw) continue;

      // Same proportional window as the document lists (~10% of the period, max 30 days).
      const daysLeft = daysUntil(raw);
      if (daysLeft === null || daysLeft > expiringWindowDays(validity?.issueDate, raw)) continue;

      items.push({
        carId: car.id,
        carName,
        docLabelKey: labelKey,
        daysLeft,
        severity: daysLeft < ATTENTION_URGENT_THRESHOLD_DAYS ? 'urgent' : 'warning',
      });
    }
  }

  return items.sort((a, b) => a.daysLeft - b.daysLeft);
}
