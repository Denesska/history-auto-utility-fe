import { Routes } from '@angular/router';

export const organizationRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./organization.component').then(m => m.OrganizationComponent),
    },
    {
        path: 'costs/:organizationId',
        loadComponent: () => import('../fleet-cost/fleet-cost-page.component').then(m => m.FleetCostPageComponent),
    },
    {
        path: 'import-cars/:organizationId',
        loadComponent: () => import('./organization-import-cars/organization-import-cars.component').then(m => m.OrganizationImportCarsComponent),
    },
];
