import { CarDto } from '@hau/autogenapi/models';

export function getCarSubtitle(car: Pick<CarDto, 'nickname' | 'make' | 'model' | 'license_plate'>): string {
    if (car.nickname) {
        return car.license_plate ? `${car.make} ${car.model} · ${car.license_plate}` : `${car.make} ${car.model}`;
    }
    return car.license_plate ?? '';
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

export function formatLicensePlate(value: string | null | undefined): string {
    if (!value) return '';
    const cleaned = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    const groups = cleaned.match(/[A-Z]+|[0-9]+/g) ?? [];
    return groups.join(' ');
}