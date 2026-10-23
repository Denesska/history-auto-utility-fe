import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '@hau/core/navigation/unsaved-changes.guard';

export const documentsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./documents-list/documents-list.component').then(m => m.DocumentsListComponent),
    },
    {
        path: 'add',
        loadComponent: () => import('./documents-form/documents-form.component').then(m => m.DocumentsFormComponent),
        canDeactivate: [unsavedChangesGuard],
    },
    {
        path: ':id/edit',
        loadComponent: () => import('./documents-form/documents-form.component').then(m => m.DocumentsFormComponent),
        canDeactivate: [unsavedChangesGuard],
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
