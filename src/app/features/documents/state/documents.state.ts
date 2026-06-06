import { inject, Injectable } from '@angular/core';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { CarService, DocumentService } from '@hau/autogenapi/services';
import { DocumentsActions } from '@hau/features/documents/state/documents.actions';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, forkJoin, of, switchMap, take, tap } from 'rxjs';

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

@State<DocumentsStateModel>({ name: 'documents', defaults })
@Injectable()
export class DocumentsState {
    private readonly _carService = inject(CarService);
    private readonly _docService = inject(DocumentService);

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

        return this._carService.carControllerGetAllCars().pipe(
            take(1),
            switchMap(cars => {
                if (cars.length === 0) {
                    return of({ cars, documents: [] as DocumentDto[] });
                }
                return forkJoin(
                    cars.map(car =>
                        this._docService.documentControllerGetDocumentsByCarId({ carId: String(car.id) }).pipe(
                            catchError(() => of([] as DocumentDto[])),
                        ),
                    ),
                ).pipe(
                    switchMap(docArrays => of({ cars, documents: docArrays.flat() })),
                );
            }),
            tap({
                next: ({ cars, documents }) => dispatch(new DocumentsActions.LoadAllSuccess(cars, documents)),
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
    deleteSuccess({ getState, patchState }: StateContext<DocumentsStateModel>, { id }: DocumentsActions.DeleteDocumentSuccess) {
        patchState({ documents: getState().documents.filter(d => d.id !== id) });
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
    createSuccess({ getState, patchState }: StateContext<DocumentsStateModel>, { doc }: DocumentsActions.CreateDocumentSuccess) {
        patchState({ documents: [...getState().documents, doc], submitting: false, lastSavedId: doc.id });
    }

    @Action(DocumentsActions.CreateDocumentError)
    createError({ patchState }: StateContext<DocumentsStateModel>) {
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
    updateSuccess({ getState, patchState }: StateContext<DocumentsStateModel>, { doc }: DocumentsActions.UpdateDocumentSuccess) {
        patchState({
            documents: getState().documents.map(d => d.id === doc.id ? doc : d),
            submitting: false,
            lastSavedId: doc.id,
        });
    }

    @Action(DocumentsActions.UpdateDocumentError)
    updateError({ patchState }: StateContext<DocumentsStateModel>) {
        patchState({ submitting: false });
    }

    @Action(DocumentsActions.UpdateDocumentFileSuccess)
    updateFileSuccess({ getState, patchState }: StateContext<DocumentsStateModel>, { doc }: DocumentsActions.UpdateDocumentFileSuccess) {
        patchState({ documents: getState().documents.map(d => d.id === doc.id ? doc : d) });
    }
}
