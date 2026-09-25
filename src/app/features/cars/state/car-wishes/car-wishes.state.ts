import { inject, Injectable } from '@angular/core';
import { CarWishDto } from '@hau/autogenapi/models';
import { CarWishService } from '@hau/autogenapi/services';
import { CarWishesActions } from '@hau/features/cars/state/car-wishes/car-wishes.actions';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

export interface CarWishlistEntry {
    budget: number | null;
    items: CarWishDto[];
}

export interface CarWishesStateModel {
    wishlistByCarId: Record<number, CarWishlistEntry>;
    loading: boolean;
    saving: boolean;
}

const defaults: CarWishesStateModel = {
    wishlistByCarId: {},
    loading: false,
    saving: false,
};

const EMPTY_WISHLIST: CarWishlistEntry = { budget: null, items: [] };

@State<CarWishesStateModel>({ name: 'carWishes', defaults })
@Injectable()
export class CarWishesState {
    private readonly _carWishService = inject(CarWishService);

    @Selector()
    static loading(s: CarWishesStateModel): boolean { return s.loading; }

    @Selector()
    static saving(s: CarWishesStateModel): boolean { return s.saving; }

    static wishlistForCar(carId: number) {
        return createSelector([CarWishesState], (s: CarWishesStateModel): CarWishlistEntry =>
            s.wishlistByCarId[carId] ?? EMPTY_WISHLIST);
    }

    @Action(CarWishesActions.LoadWishlist)
    loadWishlist({ patchState, dispatch }: StateContext<CarWishesStateModel>, { carId }: CarWishesActions.LoadWishlist) {
        patchState({ loading: true });
        return this._carWishService.carWishControllerGetWishlist({ carId: String(carId) }).pipe(
            tap({
                next: wishlist => dispatch(new CarWishesActions.LoadWishlistSuccess(carId, wishlist)),
                error: () => dispatch(new CarWishesActions.LoadWishlistError(carId)),
            }),
        );
    }

    @Action(CarWishesActions.LoadWishlistSuccess)
    loadWishlistSuccess(
        ctx: StateContext<CarWishesStateModel>,
        { carId, wishlist }: CarWishesActions.LoadWishlistSuccess,
    ) {
        this._writeEntry(ctx, carId, { budget: wishlist.budget ?? null, items: wishlist.items });
        ctx.patchState({ loading: false });
    }

    @Action(CarWishesActions.LoadWishlistError)
    loadWishlistError({ patchState }: StateContext<CarWishesStateModel>) {
        patchState({ loading: false });
    }

    @Action(CarWishesActions.CreateWish)
    createWish(ctx: StateContext<CarWishesStateModel>, { carId, dto }: CarWishesActions.CreateWish) {
        ctx.patchState({ saving: true });
        return this._carWishService.carWishControllerCreateWish({
            body: {
                car_id: carId,
                title: dto.title,
                notes: dto.notes ?? undefined,
                estimated_cost: dto.estimated_cost ?? undefined,
                service_type: dto.service_type ?? undefined,
            },
        }).pipe(
            tap(created => {
                // The server assigns the position (bottom of the list), so appending
                // keeps the array in position order without a re-sort.
                this._writeItems(ctx, carId, items => [...items, created]);
                ctx.patchState({ saving: false });
            }),
        );
    }

    @Action(CarWishesActions.UpdateWish)
    updateWish(ctx: StateContext<CarWishesStateModel>, { carId, id, dto }: CarWishesActions.UpdateWish) {
        ctx.patchState({ saving: true });
        return this._carWishService.carWishControllerUpdateWish({
            id: String(id),
            // Explicit nulls (not undefined) so the backend clears a cleared cost or
            // note instead of leaving the old value in place.
            body: {
                title: dto.title,
                notes: dto.notes,
                estimated_cost: dto.estimated_cost,
                service_type: dto.service_type,
            },
        }).pipe(
            tap(updated => {
                this._writeItems(ctx, carId, items => items.map(w => w.id === updated.id ? updated : w));
                ctx.patchState({ saving: false });
            }),
        );
    }

    @Action(CarWishesActions.SetWishStatus)
    setWishStatus(ctx: StateContext<CarWishesStateModel>, { carId, id, status }: CarWishesActions.SetWishStatus) {
        return this._carWishService.carWishControllerUpdateWish({ id: String(id), body: { status } }).pipe(
            tap(updated => this._writeItems(ctx, carId, items => items.map(w => w.id === updated.id ? updated : w))),
        );
    }

    @Action(CarWishesActions.DeleteWish)
    deleteWish(ctx: StateContext<CarWishesStateModel>, { carId, id }: CarWishesActions.DeleteWish) {
        return this._carWishService.carWishControllerDeleteWish({ id: String(id) }).pipe(
            tap(() => this._writeItems(ctx, carId, items => items.filter(w => w.id !== id))),
        );
    }

    @Action(CarWishesActions.ReorderWishes)
    reorderWishes(ctx: StateContext<CarWishesStateModel>, { carId, ids }: CarWishesActions.ReorderWishes) {
        // Applied optimistically: ion-reorder-group has already moved the row on
        // screen by the time this runs, so waiting for the server would make the
        // list visibly jump back and then forward again.
        const before = this._readItems(ctx, carId);
        const byId = new Map(before.map(w => [w.id, w]));
        this._writeItems(ctx, carId, () => ids.map(id => byId.get(id)).filter((w): w is CarWishDto => !!w));

        return this._carWishService.carWishControllerReorderWishes({
            carId: String(carId),
            body: { ids },
        }).pipe(
            tap({
                next: items => this._writeItems(ctx, carId, () => items),
                // Put the pre-drag order back rather than leaving the screen showing
                // an order the server never accepted.
                error: () => this._writeItems(ctx, carId, () => before),
            }),
        );
    }

    @Action(CarWishesActions.SetBudget)
    setBudget(ctx: StateContext<CarWishesStateModel>, { carId, budget }: CarWishesActions.SetBudget) {
        return this._carWishService.carWishControllerSetBudget({
            carId: String(carId),
            body: { budget },
        }).pipe(
            tap(wishlist => this._writeEntry(ctx, carId, { budget: wishlist.budget ?? null, items: wishlist.items })),
        );
    }

    private _readItems(ctx: StateContext<CarWishesStateModel>, carId: number): CarWishDto[] {
        return ctx.getState().wishlistByCarId[carId]?.items ?? [];
    }

    private _writeEntry(ctx: StateContext<CarWishesStateModel>, carId: number, entry: CarWishlistEntry): void {
        ctx.patchState({ wishlistByCarId: { ...ctx.getState().wishlistByCarId, [carId]: entry } });
    }

    private _writeItems(
        ctx: StateContext<CarWishesStateModel>,
        carId: number,
        project: (items: CarWishDto[]) => CarWishDto[],
    ): void {
        const entry = ctx.getState().wishlistByCarId[carId] ?? EMPTY_WISHLIST;
        this._writeEntry(ctx, carId, { ...entry, items: project(entry.items) });
    }
}
