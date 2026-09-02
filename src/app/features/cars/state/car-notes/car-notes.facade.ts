import { Injectable } from '@angular/core';
import { CarNoteDto } from '@hau/autogenapi/models';
import { CarNotesActions, CarNoteWritePayload } from '@hau/features/cars/state/car-notes/car-notes.actions';
import { CarNotesState } from '@hau/features/cars/state/car-notes/car-notes.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class CarNotesFacade {
    @Select(CarNotesState.loading) loading$!: Observable<boolean>;
    @Select(CarNotesState.saving) saving$!: Observable<boolean>;

    constructor(private readonly _store: Store) {}

    notesFor(carId: number): Observable<CarNoteDto[]> {
        return this._store.select(CarNotesState.notesForCar(carId));
    }

    loadNotes(carId: number): void {
        this._store.dispatch(new CarNotesActions.LoadNotes(carId));
    }

    createNote(carId: number, dto: CarNoteWritePayload) {
        return this._store.dispatch(new CarNotesActions.CreateNote(carId, dto));
    }

    updateNote(carId: number, id: number, dto: CarNoteWritePayload) {
        return this._store.dispatch(new CarNotesActions.UpdateNote(carId, id, dto));
    }

    deleteNote(carId: number, id: number) {
        return this._store.dispatch(new CarNotesActions.DeleteNote(carId, id));
    }
}
