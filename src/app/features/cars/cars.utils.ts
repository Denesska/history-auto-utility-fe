export function removeNullProperties<T>(obj: T): T {
    const clone = {...obj};
    for (const key in clone) {
        if (clone[key] === null) {
            delete clone[key];
        }
    }
    return clone;
}

export function daysUntil(dateStr: string | null | undefined): number | null {
    if (!dateStr) return null;
    return Math.ceil((new Date(dateStr).getTime() - Date.now()) / 86400000);
}

export function formatDate(dateStr: string | null | undefined): string {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function formatMileage(val: number | null | undefined): string {
    if (val == null) return '—';
    return Number(val).toLocaleString() + ' km';
}