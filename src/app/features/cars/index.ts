/**
 * Public entry point for the cars feature. Other features and the shell
 * must import cars only through this barrel — never via a deep
 * `@hau/features/cars/**` path. See "Feature boundaries" in CLAUDE.md.
 *
 * Route arrays (cars.routes.ts) and lazy-loaded pages are NOT exported here —
 * the shell lazy-loads them by relative path (loadChildren), the one allowed
 * exception to this barrel rule.
 */
export { CARS_ROUTES } from './cars.routes.const';

export { CarListFacade } from './state/car-list/car-list.facade';
export { CarListState, type SharedCarEntry } from './state/car-list/car-list.state';
export { CarDetailsFacade } from './state/car-details/car-details.facade';
export { CarDetailsState } from './state/car-details/car-details.state';
export { CarNotesFacade } from './state/car-notes/car-notes.facade';
export { CarNotesState } from './state/car-notes/car-notes.state';
export { CarAccessFacade } from './state/car-access/car-access.facade';
export { CarAccessState } from './state/car-access/car-access.state';
export { CarWishesFacade } from './state/car-wishes/car-wishes.facade';
export { CarWishesState } from './state/car-wishes/car-wishes.state';
export { provideCarsCarPage } from './cars.car-page';
export { provideCarsNav } from './cars.nav';
