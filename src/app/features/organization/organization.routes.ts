import { Routes } from '@angular/router';
import { ContextScopeData } from '@hau/features/main/context-scope.guard';

export const organizationRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./organization.component').then(m => m.OrganizationComponent),
    },
    {
        path: 'costs/:organizationId',
        data: { scope: ['business'], feature: 'fleet_cost' } satisfies ContextScopeData,
        loadComponent: () => import('../fleet-cost/fleet-cost-page.component').then(m => m.FleetCostPageComponent),
    },
    {
        path: 'import-cars/:organizationId',
        loadComponent: () => import('./organization-import-cars/organization-import-cars.component').then(m => m.OrganizationImportCarsComponent),
    },
];
