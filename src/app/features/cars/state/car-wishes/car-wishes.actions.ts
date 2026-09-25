import { CarWishDto, CarWishlistDto, ServiceType } from '@hau/autogenapi/models';

export interface CarWishWritePayload {
    title: string;
    notes: string | null;
    estimated_cost: number | null;
    service_type: ServiceType | null;
}

export namespace CarWishesActions {
    export class LoadWishlist {
        static readonly type = '[CarWishes] Load';
        constructor(public readonly carId: number) {}
    }

    export class LoadWishlistSuccess {
        static readonly type = '[CarWishes] Load Success';
        constructor(public readonly carId: number, public readonly wishlist: CarWishlistDto) {}
    }

    export class LoadWishlistError {
        static readonly type = '[CarWishes] Load Error';
        constructor(public readonly carId: number) {}
    }

    export class CreateWish {
        static readonly type = '[CarWishes] Create';
        constructor(public readonly carId: number, public readonly dto: CarWishWritePayload) {}
    }

    export class UpdateWish {
        static readonly type = '[CarWishes] Update';
        constructor(public readonly carId: number, public readonly id: number, public readonly dto: CarWishWritePayload) {}
    }

    export class DeleteWish {
        static readonly type = '[CarWishes] Delete';
        constructor(public readonly carId: number, public readonly id: number) {}
    }

    /** Moves a wish between ACTIVE and DONE. DONE wishes leave the budget line entirely. */
    export class SetWishStatus {
        static readonly type = '[CarWishes] Set Status';
        constructor(
            public readonly carId: number,
            public readonly id: number,
            public readonly status: CarWishDto['status'],
        ) {}
    }

    /** `ids` is the full top-to-bottom order of the car's wishes after the drag. */
    export class ReorderWishes {
        static readonly type = '[CarWishes] Reorder';
        constructor(public readonly carId: number, public readonly ids: number[]) {}
    }

    export class SetBudget {
        static readonly type = '[CarWishes] Set Budget';
        constructor(public readonly carId: number, public readonly budget: number | null) {}
    }
}
