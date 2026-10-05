/**
 * Public entry point for the sale-contract feature. Other features and the
 * shell must import sale-contract only through this barrel — never via a
 * deep `@hau/features/sale-contract/**` path. See "Feature boundaries" in
 * CLAUDE.md.
 *
 * Nothing outside this feature consumes it today (the shell lazy-loads its
 * routes by relative path) — this barrel exists as the boundary, ready to
 * export something the day another feature needs it.
 */
export { provideSaleContractNav } from './sale-contract.nav';
