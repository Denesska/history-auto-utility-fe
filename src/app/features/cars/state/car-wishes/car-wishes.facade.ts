import { Injectable } from '@angular/core';
import { CarWishDto } from '@hau/autogenapi/models';
import { CarWishesActions, CarWishWritePayload } from '@hau/features/cars/state/car-wishes/car-wishes.actions';
import { CarWishesState, CarWishlistEntry } from '@hau/features/cars/state/car-wishes/car-wishes.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class CarWishesFacade {
    @Select(CarWishesState.loading) loading$!: Observable<boolean>;
    @Select(CarWishesState.saving) saving$!: Observable<boolean>;

    constructor(private readonly _store: Store) {}

    wishlistFor(carId: number): Observable<CarWishlistEntry> {
        return this._store.select(CarWishesState.wishlistForCar(carId));
    }

    loadWishlist(carId: number): void {
        this._store.dispatch(new CarWishesActions.LoadWishlist(carId));
    }

    createWish(carId: number, dto: CarWishWritePayload) {
        return this._store.dispatch(new CarWishesActions.CreateWish(carId, dto));
    }

    updateWish(carId: number, id: number, dto: CarWishWritePayload) {
        return this._store.dispatch(new CarWishesActions.UpdateWish(carId, id, dto));
    }

    setWishStatus(carId: number, id: number, status: CarWishDto['status']) {
        return this._store.dispatch(new CarWishesActions.SetWishStatus(carId, id, status));
    }

    deleteWish(carId: number, id: number) {
        return this._store.dispatch(new CarWishesActions.DeleteWish(carId, id));
    }

    reorderWishes(carId: number, ids: number[]) {
        return this._store.dispatch(new CarWishesActions.ReorderWishes(carId, ids));
    }

    setBudget(carId: number, budget: number | null) {
        return this._store.dispatch(new CarWishesActions.SetBudget(carId, budget));
    }
}
