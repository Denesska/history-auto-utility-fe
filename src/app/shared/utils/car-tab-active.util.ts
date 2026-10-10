/**
 * Shared `CarTabContribution.isActive()` helper: true when `url` is `/main/cars/details/<carId>/<segment>`
 * (any further sub-path included, e.g. `istoric/84` still matches `segment: 'istoric'`) — the same
 * "second path segment" rule `main.component.ts`'s old `isCarSubnavActive` used. See
 * `core/car-page/FEATURE.md`.
 */
export function isCarTabActive(url: string, carId: number, segment: string): boolean {
  const prefix = `/main/cars/details/${carId}/`;
  const path = url.split('?')[0];
  if (!path.startsWith(prefix)) return false;
  return path.slice(prefix.length).split('/')[0] === segment;
}
