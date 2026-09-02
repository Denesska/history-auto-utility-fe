import {importProvidersFrom} from '@angular/core';
import {Routes} from '@angular/router';
import {HAU_ROUTES} from '@hau/app.routes.const';
import {CarDetailsFacade} from '@hau/features/cars/state/car-details/car-details.facade';
import {CarDetailsState} from '@hau/features/cars/state/car-details/car-details.state';
import {CarListFacade} from '@hau/features/cars/state/car-list/car-list.facade';
import {CarListState} from '@hau/features/cars/state/car-list/car-list.state';
import {CarNotesFacade} from '@hau/features/cars/state/car-notes/car-notes.facade';
import {CarNotesState} from '@hau/features/cars/state/car-notes/car-notes.state';
import {CarAccessFacade} from '@hau/features/cars/state/car-access/car-access.facade';
import {CarAccessState} from '@hau/features/cars/state/car-access/car-access.state';
import {BlogFacade} from '@hau/features/blog/state/blog.facade';
import {BlogState} from '@hau/features/blog/state/blog.state';
import {DocumentsFacade} from '@hau/features/documents/state/documents.facade';
import {DocumentsState} from '@hau/features/documents/state/documents.state';
import {MaintenanceFacade} from '@hau/features/maintenance/state/maintenance.facade';
import {MaintenanceState} from '@hau/features/maintenance/state/maintenance.state';
import {MainComponent} from '@hau/features/main/main.component';
import {NgxsModule} from '@ngxs/store';

export const mainRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        providers: [
            CarListFacade, importProvidersFrom(NgxsModule.forFeature([CarListState])),
            // Accepting a car-share invite happens from the notifications bell in
            // MainComponent itself, not just from within a car — provided here so
            // it's visible to MainComponent as well as the whole cars/ subtree below.
            CarAccessFacade, importProvidersFrom(NgxsModule.forFeature([CarAccessState])),
        ],
        children: [
            {
                path: HAU_ROUTES.cars.path,
                loadChildren: () => import('../cars/cars.routes').then(mod => mod.carRoutes),
                providers: [
                    CarDetailsFacade, importProvidersFrom(NgxsModule.forFeature([CarDetailsState])),
                    // Cars' "istoric" sub-route renders the maintenance feature's own component,
                    // which needs its facade/state — provided here (composition root) rather than
                    // from inside cars.routes.ts, so cars/ never has to know about maintenance/.
                    MaintenanceFacade, importProvidersFrom(NgxsModule.forFeature([MaintenanceState])),
                    CarNotesFacade, importProvidersFrom(NgxsModule.forFeature([CarNotesState])),
                ],
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
                path: HAU_ROUTES.reports.path,
                loadComponent: () => import('../reports/reports.component').then(m => m.ReportsComponent),
            },
            {
                path: HAU_ROUTES.plan.path,
                loadComponent: () => import('../maintenance/plan/plan.component').then(m => m.MaintenancePlanComponent),
            },
            {
                path: HAU_ROUTES.settings.path,
                loadChildren: () => import('../settings/settings.routes').then(mod => mod.settingsRoutes),
            },
            {
                path: '**',
                redirectTo: HAU_ROUTES.cars.path
            }
        ]
    },

];