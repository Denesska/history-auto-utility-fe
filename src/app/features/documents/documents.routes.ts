import { Routes } from '@angular/router';

export const documentsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./documents-list/documents-list.component').then(m => m.DocumentsListComponent),
    },
    {
        path: 'add',
        loadComponent: () => import('./documents-form/documents-form.component').then(m => m.DocumentsFormComponent),
    },
    {
        path: ':id/edit',
        loadComponent: () => import('./documents-form/documents-form.component').then(m => m.DocumentsFormComponent),
    },
    {
        path: ':id',
        loadComponent: () => import('./document-detail/document-detail.component').then(m => m.DocumentDetailComponent),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
