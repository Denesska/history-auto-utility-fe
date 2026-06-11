import { inject, Injectable } from '@angular/core';
import { CarDto, CreateDocumentDto, DocumentDto } from '@hau/autogenapi/models';
import { DocumentService } from '@hau/autogenapi/services';
import { DocumentsActions } from '@hau/features/documents/state/documents.actions';
import { DocumentsState } from '@hau/features/documents/state/documents.state';
import { BootstrapState, BootstrapStateModel, BOOTSTRAP_TTL_MS } from '@hau/shared/state/bootstrap/bootstrap.state';
import { Store } from '@ngxs/store';
import { Observable, switchMap, tap } from 'rxjs';

@Injectable()
export class DocumentsFacade {
    readonly cars$: Observable<CarDto[]>           = this._store.select(DocumentsState.cars);
    readonly documents$: Observable<DocumentDto[]> = this._store.select(DocumentsState.documents);
    readonly loading$: Observable<boolean>         = this._store.select(DocumentsState.loading);
    readonly submitting$: Observable<boolean>      = this._store.select(DocumentsState.submitting);
    readonly lastSavedId$: Observable<number|null> = this._store.select(DocumentsState.lastSavedId);

    private readonly _docService = inject(DocumentService);

    constructor(private readonly _store: Store) {}

    loadAll(): void {
        const bs = this._store.selectSnapshot<BootstrapStateModel>(BootstrapState as any);
        const fresh = bs.bootstrapped && bs.lastBootstrappedAt !== null
            && (Date.now() - bs.lastBootstrappedAt < BOOTSTRAP_TTL_MS);
        if (fresh) {
            this._store.dispatch(new DocumentsActions.HydrateFromBootstrap(bs.ownedCars, bs.sharedCars, bs.documents));
        } else {
            this._store.dispatch(new DocumentsActions.LoadAll());
        }
    }

    deleteDocument(id: number): void {
        this._store.dispatch(new DocumentsActions.DeleteDocument(id));
    }

    createDocument(dto: CreateDocumentDto): Observable<void> {
        return this._store.dispatch(new DocumentsActions.CreateDocument(dto));
    }

    updateDocument(id: number, dto: CreateDocumentDto): Observable<void> {
        return this._store.dispatch(new DocumentsActions.UpdateDocument(id, dto));
    }

    uploadFile(id: number, file: File): Observable<DocumentDto> {
        return this._docService.documentControllerUploadFile(id, file).pipe(
            tap(doc => this._store.dispatch(new DocumentsActions.UpdateDocumentFileSuccess(doc))),
        );
    }

    getLastSavedId(): number | null {
        return this._store.selectSnapshot(DocumentsState.lastSavedId);
    }
}
