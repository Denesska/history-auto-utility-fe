/**
 * Normalizes a license plate for live display: uppercase, letters and digits
 * only (any separator the user typed — space, hyphen, etc. — collapses away),
 * with a single space inserted at every letter<->digit boundary. Existing
 * letter/letter or digit/digit groups that were already separated (e.g. a
 * two-part prefix like "B AB 1234") keep their own single-space boundary
 * instead of being merged back together.
 *
 * "bv95hau" -> "BV 95 HAU", "xyw234" -> "XYW 234", "B-AB 1234" -> "B AB 1234".
 * No leading/trailing space in the result.
 */
export function formatLicensePlate(value: string | null | undefined): string {
  if (!value) return '';

  const isAlnum = (ch: string): boolean => /[\p{L}0-9]/u.test(ch);

  // Uppercase, then turn every non letter/digit character into a space —
  // this is what collapses "-", multiple spaces, etc. into a single separator.
  let result = Array.from(value.toUpperCase())
    .map(ch => (isAlnum(ch) ? ch : ' '))
    .join('');

  // Insert a boundary space wherever a letter and a digit are directly
  // adjacent (no separator at all between them).
  result = result
    .replace(/(\p{L})(?=[0-9])/gu, '$1 ')
    .replace(/([0-9])(?=\p{L})/gu, '$1 ');

  return result.replace(/\s+/g, ' ').trim();
}
