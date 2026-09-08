import { CanDeactivateFn } from '@angular/router';

export interface CarFormPendingChanges {
  canDeactivate(): boolean | Promise<boolean>;
}

export const carFormUnsavedGuard: CanDeactivateFn<CarFormPendingChanges> = component =>
  component.canDeactivate();
