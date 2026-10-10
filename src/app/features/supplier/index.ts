/**
 * Public entry point for the supplier feature. Other features and the shell
 * must import supplier only through this barrel — never via a deep
 * `@hau/features/supplier/**` path. See "Feature boundaries" in CLAUDE.md.
 */
export { SupplierApiService } from './supplier-api.service';
export { type SupplierDto, type WithSupplierId } from './supplier.model';
export { provideSupplierNav } from './supplier.nav';
