/**
 * Public entry point for the blog feature. Other features and the shell
 * must import blog only through this barrel — never via a deep
 * `@hau/features/blog/**` path. See "Feature boundaries" in CLAUDE.md.
 *
 * Route arrays (blog.routes.ts) and lazy-loaded pages are NOT exported here —
 * the shell lazy-loads them by relative path (loadChildren).
 */
export { BLOG_ROUTES } from './blog.routes.const';
export { BlogFacade } from './state/blog.facade';
export { BlogState } from './state/blog.state';
export { provideBlogCarPage } from './blog.car-page';
