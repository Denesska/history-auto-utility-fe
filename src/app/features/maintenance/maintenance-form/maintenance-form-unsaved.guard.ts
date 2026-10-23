import { CanDeactivateFn } from '@angular/router';

export interface MaintenanceFormPendingChanges {
  canDeactivate(): boolean | Promise<boolean>;
}

export const maintenanceFormUnsavedGuard: CanDeactivateFn<MaintenanceFormPendingChanges> = component =>
  component.canDeactivate();
