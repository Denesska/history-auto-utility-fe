const DEFAULT_MAX_YEAR_DIGITS = 4;

/**
 * Normalizes characters that are a common mobile/keyboard mistake for a
 * digit before stripping — chiefly the letter "o"/"O" typed instead of "0".
 * Preserves string length (1 char -> 1 char) so caret math downstream stays
 * valid against the result.
 */
function normalizeYearChars(raw: string): string {
  return raw.replace(/[oO]/g, '0');
}

/**
 * Normalizes then strips everything but digits from `raw`, capping the
 * result at `maxLength` digits.
 */
export function sanitizeYearDigits(
  raw: string,
  maxLength: number = DEFAULT_MAX_YEAR_DIGITS,
): string {
  return normalizeYearChars(raw)
    .replace(/\D+/g, '')
    .slice(0, maxLength);
}

/**
 * How many characters that will survive sanitizing (digits, or an "o"/"O"
 * that normalizes to a digit) appear in `value` before index `caret`. Run
 * against the raw, pre-sanitize value.
 */
export function digitCountBefore(value: string, caret: number): number {
  const normalized = normalizeYearChars(value);
  let count = 0;
  for (let i = 0; i < caret && i < normalized.length; i++) {
    if (/\d/.test(normalized[i])) count++;
  }
  return count;
}

/** The index right after the n-th digit character in `value` (n = `count`). */
export function caretAfterDigitCount(value: string, count: number): number {
  if (count <= 0) return 0;
  let seen = 0;
  for (let i = 0; i < value.length; i++) {
    if (/\d/.test(value[i])) {
      seen++;
      if (seen === count) return i + 1;
    }
  }
  return value.length;
}
