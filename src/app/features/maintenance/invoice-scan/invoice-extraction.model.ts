export type InvoiceWarningCode = 'TOTAL_MISMATCH'|'MIXED_CURRENCY'|'DUPLICATES_MERGED'|'UNREADABLE_DOCUMENT'|'MISSING_PRICES'|'VAT_UNCLEAR';

export interface InvoiceExtractionResult {
  detected: boolean;
  service_type: 'REPAIR'|'MAINTENANCE'|'IMPROVEMENT'|'PASSION'|null;
  service_category: string|null;
  title: string|null;
  notes: string|null;
  service_date: string|null;   // YYYY-MM-DD
  mileage: number|null;
  supplier_name: string|null;
  currency: 'RON'|'EUR'|'USD'|'MDL';
  parts: { name: string; code: string|null; quantity: number; unit_price: number|null; total: number|null; source: number }[];
  labor: { description: string; amount: number; source: number }[];
  totals: { parts: number; labor: number; other: number; discount: number; grand_total: number; documents_total: number|null };
  documents: { index: number; kind: 'parts_invoice'|'service_report'|'receipt'|'other'|'unreadable'; supplier_name: string|null; number: string|null; date: string|null; total: number|null; currency: string|null }[];
  warnings: { code: InvoiceWarningCode; params?: Record<string, string|number> }[];
}

export interface InvoiceScanApplied { result: InvoiceExtractionResult; files: File[]; }
