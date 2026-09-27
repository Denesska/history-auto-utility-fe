import { inject, Injectable } from '@angular/core';
import { CarNoteDto } from '@hau/autogenapi/models';
import { CarNoteService } from '@hau/autogenapi/services';
import { CarNotesActions, CarNoteWritePayload } from '@hau/features/cars/state/car-notes/car-notes.actions';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

export interface CarNotesStateModel {
    notesByCarId: Record<number, CarNoteDto[]>;
    loading: boolean;
    saving: boolean;
}

const defaults: CarNotesStateModel = {
    notesByCarId: {},
    loading: false,
    saving: false,
};

@State<CarNotesStateModel>({ name: 'carNotes', defaults })
@Injectable()
export class CarNotesState {
    private readonly _carNoteService = inject(CarNoteService);

    @Selector()
    static loading(s: CarNotesStateModel): boolean { return s.loading; }

    @Selector()
    static saving(s: CarNotesStateModel): boolean { return s.saving; }

    static notesForCar(carId: number) {
        return createSelector([CarNotesState], (s: CarNotesStateModel): CarNoteDto[] => s.notesByCarId[carId] ?? []);
    }

    @Action(CarNotesActions.LoadNotes)
    loadNotes({ patchState, dispatch }: StateContext<CarNotesStateModel>, { carId }: CarNotesActions.LoadNotes) {
        patchState({ loading: true });
        return this._carNoteService.carNoteControllerGetCarNotesByCarId({ carId: String(carId) }).pipe(
            tap({
                next: notes => dispatch(new CarNotesActions.LoadNotesSuccess(carId, notes)),
                error: () => dispatch(new CarNotesActions.LoadNotesError(carId)),
            }),
        );
    }

    @Action(CarNotesActions.LoadNotesSuccess)
    loadNotesSuccess(
        { getState, patchState }: StateContext<CarNotesStateModel>,
        { carId, notes }: CarNotesActions.LoadNotesSuccess,
    ) {
        patchState({ notesByCarId: { ...getState().notesByCarId, [carId]: notes }, loading: false });
    }

    @Action(CarNotesActions.LoadNotesError)
    loadNotesError({ patchState }: StateContext<CarNotesStateModel>) {
        patchState({ loading: false });
    }

    @Action(CarNotesActions.CreateNote)
    createNote({ getState, patchState }: StateContext<CarNotesStateModel>, { carId, dto }: CarNotesActions.CreateNote) {
        patchState({ saving: true });
        return this._carNoteService.carNoteControllerCreateCarNote({
            body: {
                car_id: carId,
                title: dto.title,
                content: dto.content,
                labels: dto.labels,
                is_checklist: dto.is_checklist,
                checked_in_place: dto.checked_in_place,
                items: dto.items,
                color: dto.color,
            },
        }).pipe(
            tap({
                next: created => {
                    const existing = getState().notesByCarId[carId] ?? [];
                    patchState({
                        notesByCarId: { ...getState().notesByCarId, [carId]: [...existing, created] },
                        saving: false,
                    });
                },
                error: () => patchState({ saving: false }),
            }),
        );
    }

    @Action(CarNotesActions.UpdateNote)
    updateNote(
        { getState, patchState }: StateContext<CarNotesStateModel>,
        { carId, id, dto }: CarNotesActions.UpdateNote,
    ) {
        patchState({ saving: true });
        // Full write: sending `labels` also makes the backend clear the legacy group_name.
        // `color: null` is sent explicitly so a previously set color is cleared.
        return this._carNoteService.carNoteControllerUpdateCarNote({
            id: String(id),
            body: {
                title: dto.title,
                content: dto.content,
                labels: dto.labels,
                is_checklist: dto.is_checklist,
                checked_in_place: dto.checked_in_place,
                items: dto.items,
                color: dto.color,
            },
        }).pipe(
            tap({
                next: updated => {
                    const existing = getState().notesByCarId[carId] ?? [];
                    patchState({
                        notesByCarId: { ...getState().notesByCarId, [carId]: existing.map(n => n.id === updated.id ? updated : n) },
                        saving: false,
                    });
                },
                error: () => patchState({ saving: false }),
            }),
        );
    }

    @Action(CarNotesActions.PatchNote)
    patchNote(
        { getState, patchState }: StateContext<CarNotesStateModel>,
        { carId, id, partial }: CarNotesActions.PatchNote,
    ) {
        const previous = (getState().notesByCarId[carId] ?? []).find(n => n.id === id);
        const replace = (note: CarNoteDto) => {
            const existing = getState().notesByCarId[carId] ?? [];
            patchState({ notesByCarId: { ...getState().notesByCarId, [carId]: existing.map(n => n.id === id ? note : n) } });
        };

        // Only the keys actually present in `partial` are sent / applied.
        const body = Object.fromEntries(
            Object.entries(partial).filter(([, v]) => v !== undefined),
        ) as Partial<CarNoteWritePayload>;

        if (previous) {
            replace({ ...previous, ...body });
        }

        return this._carNoteService.carNoteControllerUpdateCarNote({ id: String(id), body }).pipe(
            tap({
                next: updated => replace(updated),
                error: () => { if (previous) replace(previous); },
            }),
        );
    }

    @Action(CarNotesActions.DeleteNote)
    deleteNote({ getState, patchState }: StateContext<CarNotesStateModel>, { carId, id }: CarNotesActions.DeleteNote) {
        return this._carNoteService.carNoteControllerDeleteCarNote({ id: String(id) }).pipe(
            tap(() => {
                const existing = getState().notesByCarId[carId] ?? [];
                patchState({ notesByCarId: { ...getState().notesByCarId, [carId]: existing.filter(n => n.id !== id) } });
            }),
        );
    }
}
