import { Routes } from '@angular/router';

export const saleContractRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./sale-contract-list/sale-contract-list.component').then(m => m.SaleContractListComponent),
    },
    {
        path: 'new',
        loadComponent: () =>
            import('./sale-contract-wizard/sale-contract-wizard.component').then(m => m.SaleContractWizardComponent),
    },
    {
        path: ':id/edit',
        loadComponent: () =>
            import('./sale-contract-wizard/sale-contract-wizard.component').then(m => m.SaleContractWizardComponent),
    },
    {
        path: ':id',
        loadComponent: () =>
            import('./sale-contract-detail/sale-contract-detail.component').then(m => m.SaleContractDetailComponent),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
