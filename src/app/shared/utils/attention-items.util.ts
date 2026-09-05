import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { daysUntil } from '@hau/shared/utils/date-math.util';
import { getDocExpiry } from '@hau/shared/utils/document-status.util';

export const ATTENTION_EXPIRY_THRESHOLD_DAYS = 30;
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
      const raw = getDocExpiry(docs, type) ?? (car[carField] as string | null | undefined);
      if (!raw) continue;

      const daysLeft = daysUntil(raw);
      if (daysLeft === null || daysLeft > ATTENTION_EXPIRY_THRESHOLD_DAYS) continue;

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
