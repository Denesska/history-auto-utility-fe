import { Routes } from '@angular/router';

export const sentDestinationsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sent-destinations.component').then(m => m.SentDestinationsComponent),
  },
  { path: '**', redirectTo: '' },
];
