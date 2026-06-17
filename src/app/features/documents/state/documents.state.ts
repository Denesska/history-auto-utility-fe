import { inject, Injectable } from '@angular/core';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { BootstrapSharedCarEntry } from '@hau/autogenapi/models/bootstrap-response-dto';
import { CarAccessService, CarService, DocumentService } from '@hau/autogenapi/services';
import { DocumentAllApiService } from '@hau/autogenapi/services/document-all.service';
import { DocumentsActions } from '@hau/features/documents/state/documents.actions';
import { _HydrateDependentStates } from '@hau/shared/state/bootstrap/bootstrap.state';
import { ToastController } from '@ionic/angular/standalone';
import { TranslocoService } from '@ngneat/transloco';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { forkJoin, of, switchMap, take, tap } from 'rxjs';

export interface DocumentsStateModel {
    cars: CarDto[];
    documents: DocumentDto[];
    loading: boolean;
    submitting: boolean;
    lastSavedId: number | null;
}

const defaults: DocumentsStateModel = {
    cars: [],
    documents: [],
    loading: false,
    submitting: false,
    lastSavedId: null,
};

function mergeAccessibleCars(ownedCars: CarDto[], sharedCars: CarDto[]): CarDto[] {
    const ownedIds = new Set(ownedCars.map(c => c.id));
    return [...ownedCars, ...sharedCars.filter(c => !ownedIds.has(c.id))];
}

function sharedEntriesToCars(sharedCars: BootstrapSharedCarEntry[]): CarDto[] {
    return sharedCars.map(e => e.car);
}

@State<DocumentsStateModel>({ name: 'documents', defaults })
@Injectable()
export class DocumentsState {
    private readonly _carService = inject(CarService);
    private readonly _carAccessService = inject(CarAccessService);
    private readonly _docService = inject(DocumentService);
    private readonly _docAllService = inject(DocumentAllApiService);
    private readonly _toastCtrl = inject(ToastController);
    private readonly _transloco = inject(TranslocoService);

    @Selector()
    static cars(s: DocumentsStateModel): CarDto[] { return s.cars; }

    @Selector()
    static documents(s: DocumentsStateModel): DocumentDto[] { return s.documents; }

    @Selector()
    static loading(s: DocumentsStateModel): boolean { return s.loading; }

    @Selector()
    static submitting(s: DocumentsStateModel): boolean { return s.submitting; }

    @Selector()
    static lastSavedId(s: DocumentsStateModel): number | null { return s.lastSavedId; }

    @Action(DocumentsActions.LoadAll)
    loadAll({ patchState, dispatch }: StateContext<DocumentsStateModel>) {
        patchState({ loading: true });

        return forkJoin([
            this._carService.carControllerGetAllCars(),
            this._docAllService.getAllDocuments(),
            this._loadAcceptedSharedCars(),
        ]).pipe(
            take(1),
            tap({
                next: ([ownedCars, documents, sharedCars]) => dispatch(
                    new DocumentsActions.LoadAllSuccess(mergeAccessibleCars(ownedCars, sharedCars), documents),
                ),
                error: () => dispatch(new DocumentsActions.LoadAllError()),
            }),
        );
    }

    @Action(DocumentsActions.LoadAllSuccess)
    loadAllSuccess({ patchState }: StateContext<DocumentsStateModel>, { cars, documents }: DocumentsActions.LoadAllSuccess) {
        patchState({ cars, documents, loading: false });
    }

    @Action(DocumentsActions.LoadAllError)
    loadAllError({ patchState }: StateContext<DocumentsStateModel>) {
        patchState({ loading: false });
    }

    @Action(DocumentsActions.DeleteDocument)
    deleteDocument({ dispatch }: StateContext<DocumentsStateModel>, { id }: DocumentsActions.DeleteDocument) {
        return this._docService.documentControllerDeleteDocument({ id: String(id) }).pipe(
            take(1),
            tap({
                next: () => dispatch(new DocumentsActions.DeleteDocumentSuccess(id)),
                error: () => dispatch(new DocumentsActions.DeleteDocumentError()),
            }),
        );
    }

    @Action(DocumentsActions.DeleteDocumentSuccess)
    async deleteSuccess({ getState, patchState }: StateContext<DocumentsStateModel>, { id }: DocumentsActions.DeleteDocumentSuccess) {
        const toast = await this._toastCtrl.create({
            message: this._transloco.translate('documents.toast.deleteSuccess'),
            duration: 2000,
            color: 'success',
            position: 'top',
        });
        await toast.present();
        patchState({ documents: getState().documents.filter(d => d.id !== id) });
    }

    @Action(DocumentsActions.DeleteDocumentError)
    async deleteError() {
        const toast = await this._toastCtrl.create({
            message: this._transloco.translate('documents.toast.deleteError'),
            duration: 3000,
            color: 'danger',
            position: 'top',
        });
        await toast.present();
    }

    @Action(DocumentsActions.CreateDocument)
    createDocument({ patchState, dispatch }: StateContext<DocumentsStateModel>, { dto }: DocumentsActions.CreateDocument) {
        patchState({ submitting: true });
        return this._docService.documentControllerCreateDocument({ body: dto }).pipe(
            take(1),
            tap({
                next: doc => dispatch(new DocumentsActions.CreateDocumentSuccess(doc)),
                error: () => dispatch(new DocumentsActions.CreateDocumentError()),
            }),
        );
    }

    @Action(DocumentsActions.CreateDocumentSuccess)
    async createSuccess({ getState, patchState }: StateContext<DocumentsStateModel>, { doc }: DocumentsActions.CreateDocumentSuccess) {
        const toast = await this._toastCtrl.create({
            message: this._transloco.translate('documents.toast.createSuccess'),
            duration: 2000,
            color: 'success',
            position: 'top',
        });
        await toast.present();
        patchState({ documents: [...getState().documents, doc], submitting: false, lastSavedId: doc.id });
    }

    @Action(DocumentsActions.CreateDocumentError)
    async createError({ patchState }: StateContext<DocumentsStateModel>) {
        const toast = await this._toastCtrl.create({
            message: this._transloco.translate('documents.toast.createError'),
            duration: 3000,
            color: 'danger',
            position: 'top',
        });
        await toast.present();
        patchState({ submitting: false });
    }

    @Action(DocumentsActions.UpdateDocument)
    updateDocument({ patchState, dispatch }: StateContext<DocumentsStateModel>, { id, dto }: DocumentsActions.UpdateDocument) {
        patchState({ submitting: true });
        return this._docService.documentControllerUpdateDocument({ id: String(id), body: dto as never }).pipe(
            take(1),
            tap({
                next: doc => dispatch(new DocumentsActions.UpdateDocumentSuccess(doc)),
                error: () => dispatch(new DocumentsActions.UpdateDocumentError()),
            }),
        );
    }

    @Action(DocumentsActions.UpdateDocumentSuccess)
    async updateSuccess({ getState, patchState }: StateContext<DocumentsStateModel>, { doc }: DocumentsActions.UpdateDocumentSuccess) {
        const toast = await this._toastCtrl.create({
            message: this._transloco.translate('documents.toast.updateSuccess'),
            duration: 2000,
            color: 'success',
            position: 'top',
        });
        await toast.present();
        patchState({
            documents: getState().documents.map(d => d.id === doc.id ? doc : d),
            submitting: false,
            lastSavedId: doc.id,
        });
    }

    @Action(DocumentsActions.UpdateDocumentError)
    async updateError({ patchState }: StateContext<DocumentsStateModel>) {
        const toast = await this._toastCtrl.create({
            message: this._transloco.translate('documents.toast.updateError'),
            duration: 3000,
            color: 'danger',
            position: 'top',
        });
        await toast.present();
        patchState({ submitting: false });
    }

    @Action(DocumentsActions.UpdateDocumentFileSuccess)
    updateFileSuccess({ getState, patchState }: StateContext<DocumentsStateModel>, { doc }: DocumentsActions.UpdateDocumentFileSuccess) {
        patchState({ documents: getState().documents.map(d => d.id === doc.id ? doc : d) });
    }

    @Action([DocumentsActions.HydrateFromBootstrap, _HydrateDependentStates])
    hydrateFromBootstrap(
        { patchState }: StateContext<DocumentsStateModel>,
        { ownedCars, sharedCars, documents }: DocumentsActions.HydrateFromBootstrap | _HydrateDependentStates,
    ) {
        const flatDocs = Object.values(documents).flat();
        patchState({
            cars: mergeAccessibleCars(ownedCars, sharedEntriesToCars(sharedCars)),
            documents: flatDocs,
            loading: false,
        });
    }

    private _loadAcceptedSharedCars() {
        return this._carAccessService.getSharedCars().pipe(
            switchMap(sharedCars => {
                const accepted = sharedCars.filter(c => c.accepted_at !== null);
                if (!accepted.length) return of([] as CarDto[]);
                return forkJoin(
                    accepted.map(s => this._carService.carControllerGetCar({ id: String(s.id) })),
                );
            }),
        );
    }
}
