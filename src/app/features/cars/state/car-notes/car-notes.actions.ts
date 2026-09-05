import { CarNoteDto } from '@hau/autogenapi/models';

export interface CarNoteWritePayload {
    title: string;
    content: string;
    group_name: string | null;
}

export namespace CarNotesActions {
    export class LoadNotes {
        static readonly type = '[CarNotes] Load';
        constructor(public readonly carId: number) {}
    }

    export class LoadNotesSuccess {
        static readonly type = '[CarNotes] Load Success';
        constructor(public readonly carId: number, public readonly notes: CarNoteDto[]) {}
    }

    export class LoadNotesError {
        static readonly type = '[CarNotes] Load Error';
        constructor(public readonly carId: number) {}
    }

    export class CreateNote {
        static readonly type = '[CarNotes] Create';
        constructor(public readonly carId: number, public readonly dto: CarNoteWritePayload) {}
    }

    export class UpdateNote {
        static readonly type = '[CarNotes] Update';
        constructor(public readonly carId: number, public readonly id: number, public readonly dto: CarNoteWritePayload) {}
    }

    export class DeleteNote {
        static readonly type = '[CarNotes] Delete';
        constructor(public readonly carId: number, public readonly id: number) {}
    }
}
