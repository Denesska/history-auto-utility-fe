/**
 * Public entry point for the fleet-cost feature. Other features and the
 * shell must import fleet-cost only through this barrel — never via a deep
 * `@hau/features/fleet-cost/**` path. See "Feature boundaries" in CLAUDE.md.
 *
 * Nothing outside this feature consumes it today — this barrel exists as
 * the boundary, ready to export something the day another feature needs it.
 */
export {};
