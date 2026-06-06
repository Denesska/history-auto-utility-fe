import { Routes } from '@angular/router';

export const blogRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./blog-list/blog-list.component').then(m => m.BlogListComponent),
  },
  {
    path: 'new',
    loadComponent: () => import('./blog-entry-write/blog-entry-write.component').then(m => m.BlogEntryWriteComponent),
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./blog-entry-write/blog-entry-write.component').then(m => m.BlogEntryWriteComponent),
  },
  {
    path: ':id',
    loadComponent: () => import('./blog-entry-view/blog-entry-view.component').then(m => m.BlogEntryViewComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
