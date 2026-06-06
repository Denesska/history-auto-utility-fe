import { CarDto, CreateDocumentDto, DocumentDto } from '@hau/autogenapi/models';

export namespace DocumentsActions {
    export class LoadAll {
        static readonly type = '[Documents] Load All';
    }

    export class LoadAllSuccess {
        static readonly type = '[Documents] Load All Success';
        constructor(
            public readonly cars: CarDto[],
            public readonly documents: DocumentDto[],
        ) {}
    }

    export class LoadAllError {
        static readonly type = '[Documents] Load All Error';
    }

    export class DeleteDocument {
        static readonly type = '[Documents] Delete';
        constructor(public readonly id: number) {}
    }

    export class DeleteDocumentSuccess {
        static readonly type = '[Documents] Delete Success';
        constructor(public readonly id: number) {}
    }

    export class DeleteDocumentError {
        static readonly type = '[Documents] Delete Error';
    }

    export class CreateDocument {
        static readonly type = '[Documents] Create';
        constructor(public readonly dto: CreateDocumentDto) {}
    }

    export class CreateDocumentSuccess {
        static readonly type = '[Documents] Create Success';
        constructor(public readonly doc: DocumentDto) {}
    }

    export class CreateDocumentError {
        static readonly type = '[Documents] Create Error';
    }

    export class UpdateDocument {
        static readonly type = '[Documents] Update';
        constructor(public readonly id: number, public readonly dto: CreateDocumentDto) {}
    }

    export class UpdateDocumentSuccess {
        static readonly type = '[Documents] Update Success';
        constructor(public readonly doc: DocumentDto) {}
    }

    export class UpdateDocumentError {
        static readonly type = '[Documents] Update Error';
    }

    export class UpdateDocumentFileSuccess {
        static readonly type = '[Documents] Update File Success';
        constructor(public readonly doc: DocumentDto) {}
    }
}
