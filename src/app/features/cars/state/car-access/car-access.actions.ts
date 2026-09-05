import { CarAccessDto, CarAccessRole } from '@hau/autogenapi/models';

export namespace CarAccessActions {
    export class LoadAccess {
        static readonly type = '[CarAccess] Load';
        constructor(public readonly carId: number) {}
    }

    export class LoadAccessSuccess {
        static readonly type = '[CarAccess] Load Success';
        constructor(public readonly carId: number, public readonly entries: CarAccessDto[]) {}
    }

    export class LoadAccessError {
        static readonly type = '[CarAccess] Load Error';
        constructor(public readonly carId: number) {}
    }

    export class InviteUser {
        static readonly type = '[CarAccess] Invite';
        constructor(public readonly carId: number, public readonly email: string, public readonly role: CarAccessRole) {}
    }

    export class ChangeRole {
        static readonly type = '[CarAccess] Change Role';
        constructor(public readonly carId: number, public readonly targetUserId: number, public readonly role: CarAccessRole) {}
    }

    export class RemoveAccess {
        static readonly type = '[CarAccess] Remove';
        constructor(public readonly carId: number, public readonly entryId: number, public readonly targetUserId: number) {}
    }

    export class AcceptInvitation {
        static readonly type = '[CarAccess] Accept Invitation';
        constructor(public readonly carId: number) {}
    }
}
