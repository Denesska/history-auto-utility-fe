import { CarDto } from '@hau/autogenapi/models';

export function getCarSubtitle(car: Pick<CarDto, 'nickname' | 'make' | 'model' | 'license_plate'>): string {
    if (car.nickname) {
        return car.license_plate ? `${car.make} ${car.model} · ${car.license_plate}` : `${car.make} ${car.model}`;
    }
    return car.license_plate ?? '';
}

/** Owner's display name for the "shared by" line: first + last name, else the email (users have no separate nickname). */
export function ownerDisplayName(owner: { first_name?: string | null; last_name?: string | null; email: string } | null | undefined): string {
    if (!owner) return '';
    return `${owner.first_name ?? ''} ${owner.last_name ?? ''}`.trim() || owner.email;
}

export function removeNullProperties<T>(obj: T): T {
    const clone = {...obj};
    for (const key in clone) {
        if (clone[key] === null) {
            delete clone[key];
        }
    }
    return clone;
}