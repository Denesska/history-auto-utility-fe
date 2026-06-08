import {importProvidersFrom} from '@angular/core';
import {Routes} from '@angular/router';
import {HAU_ROUTES} from '@hau/app.routes.const';
import {CarDetailsFacade} from '@hau/features/cars/state/car-details/car-details.facade';
import {CarDetailsState} from '@hau/features/cars/state/car-details/car-details.state';
import {CarListFacade} from '@hau/features/cars/state/car-list/car-list.facade';
import {CarListState} from '@hau/features/cars/state/car-list/car-list.state';
import {BlogFacade} from '@hau/features/blog/state/blog.facade';
import {BlogState} from '@hau/features/blog/state/blog.state';
import {DocumentsFacade} from '@hau/features/documents/state/documents.facade';
import {DocumentsState} from '@hau/features/documents/state/documents.state';
import {MainComponent} from '@hau/features/main/main.component';
import {NgxsModule} from '@ngxs/store';

export const mainRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: HAU_ROUTES.overview.path,
                loadComponent: () => import('../overview/overview.component').then(m => m.OverviewComponent),
                providers: [CarListFacade, importProvidersFrom(NgxsModule.forFeature([CarListState]))],
            },
            {
                path: HAU_ROUTES.cars.path,
                loadChildren: () => import('../cars/cars.routes').then(mod => mod.carRoutes),
                providers: [CarListFacade, CarDetailsFacade, importProvidersFrom(NgxsModule.forFeature([CarListState, CarDetailsState]))],
            },
            {
                path: HAU_ROUTES.documents.path,
                loadChildren: () => import('../documents/documents.routes').then(mod => mod.documentsRoutes),
                providers: [DocumentsFacade, importProvidersFrom(NgxsModule.forFeature([DocumentsState]))],
            },
            {
                path: HAU_ROUTES.blog.path,
                loadChildren: () => import('../blog/blog.routes').then(mod => mod.blogRoutes),
                providers: [BlogFacade, importProvidersFrom(NgxsModule.forFeature([BlogState]))],
            },
            {
                path: HAU_ROUTES.maintenance.path,
                loadChildren: () => import('../maintenance/maintenance.routes').then(mod => mod.maintenanceRoutes),
            },
            {
                path: HAU_ROUTES.settings.path,
                loadChildren: () => import('../settings/settings.routes').then(mod => mod.settingsRoutes),
            },
            {
                path: '**',
                redirectTo: HAU_ROUTES.overview.path
            }
        ]
    },

];