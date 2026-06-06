import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { MaintenanceFacade } from './state/maintenance.facade';
import { MaintenanceState } from './state/maintenance.state';

export const maintenanceRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maintenance.component').then(m => m.MaintenanceComponent),
    providers: [MaintenanceFacade, importProvidersFrom(NgxsModule.forFeature([MaintenanceState]))],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
