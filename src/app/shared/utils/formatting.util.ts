export function formatDate(dateStr: string | null | undefined): string {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function formatMileage(val: number | null | undefined): string {
    if (val == null) return '—';
    return Number(val).toLocaleString() + ' km';
}
