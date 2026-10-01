import { Routes } from '@angular/router';

export const organizationRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./organization.component').then(m => m.OrganizationComponent),
    },
];
