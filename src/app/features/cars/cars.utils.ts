export function removeNullProperties<T>(obj: T): T {
  const clone = { ...obj };
  for (const key in clone) {
    if (clone[key] === null) {
      delete clone[key];
    }
  }
  return clone;
}
