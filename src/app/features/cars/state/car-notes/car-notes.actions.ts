import { CarNoteChecklistItemDto, CarNoteDto } from '@hau/autogenapi/models';

export interface CarNoteWritePayload {
    title: string;
    content: string;
    labels: string[];
    is_checklist: boolean;
    checked_in_place: boolean;
    items: CarNoteChecklistItemDto[];
    /** A NOTE_COLORS key, or null for the default surface. */
    color: string | null;
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

    /**
     * Lightweight optimistic update (tick a checklist item, change color…): PUTs only
     * the given fields, applies them locally first and rolls back on error. Does not
     * toggle the `saving` flag.
     */
    export class PatchNote {
        static readonly type = '[CarNotes] Patch';
        constructor(
            public readonly carId: number,
            public readonly id: number,
            public readonly partial: Partial<CarNoteWritePayload>,
        ) {}
    }

    export class DeleteNote {
        static readonly type = '[CarNotes] Delete';
        constructor(public readonly carId: number, public readonly id: number) {}
    }
}
