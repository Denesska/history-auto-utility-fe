export function formatDate(dateStr: string | null | undefined): string {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function formatMileage(val: number | null | undefined): string {
    if (val == null) return '—';
    return Number(val).toLocaleString() + ' km';
}

/** Km driven since the car was added: "+5.6k" / "+850". Null when there's nothing to show. */
export function formatMileageDriven(initial: number | null | undefined, current: number | null | undefined): string | null {
    if (initial == null || current == null || current <= initial) return null;
    const driven = current - initial;
    if (driven < 1000) return '+' + driven.toLocaleString();
    const k = driven / 1000;
    return '+' + (k < 100 ? k.toFixed(1).replace(/\.0$/, '') : Math.round(k)) + 'k';
}
