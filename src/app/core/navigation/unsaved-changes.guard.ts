import { CanDeactivateFn } from '@angular/router';

/** Implemented by routed forms that ask before the user leaves with unsaved input. */
export interface PendingChangesComponent {
  canDeactivate(): boolean | Promise<boolean>;
}

/** Generic CanDeactivate guard: defers to the component's own `canDeactivate()`. */
export const unsavedChangesGuard: CanDeactivateFn<PendingChangesComponent> = component =>
  component.canDeactivate();
