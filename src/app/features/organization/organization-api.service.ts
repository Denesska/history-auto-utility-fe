import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
    CreateLocalMemberResultDto,
    ImportCarsResultDto,
    MyOrganizationDto,
    OrganizationCarDto,
    OrganizationMembershipDto,
    OrganizationRole,
} from './organization.model';

/**
 * The organization API (`/api/organization`). Also used from `features/auth`
 * (the org-picker), `features/cars` and `features/notifications`, outside
 * this feature itself.
 */
@Injectable({ providedIn: 'root' })
export class OrganizationApiService {
    private readonly _http = inject(HttpClient);
    private readonly _base = `${environment.apiUrl}/organization`;

    myOrganizations(): Observable<MyOrganizationDto[]> {
        return this._http.get<MyOrganizationDto[]>(this._base);
    }

    createOrganization(name: string): Observable<MyOrganizationDto> {
        return this._http.post<MyOrganizationDto>(this._base, { name });
    }

    members(organizationId: number): Observable<OrganizationMembershipDto[]> {
        return this._http.get<OrganizationMembershipDto[]>(`${this._base}/${organizationId}/members`);
    }

    inviteMember(organizationId: number, email: string, role: OrganizationRole): Observable<OrganizationMembershipDto> {
        return this._http.post<OrganizationMembershipDto>(`${this._base}/${organizationId}/members/invite`, { email, role });
    }

    acceptInvitation(organizationId: number): Observable<OrganizationMembershipDto> {
        return this._http.post<OrganizationMembershipDto>(`${this._base}/${organizationId}/members/accept`, {});
    }

    /**
     * Creates a brand-new, company-owned account (username+password, no
     * Google sign-in, no email invite) — for drivers/employees who don't
     * have their own Google account. `credentials` in the response is the
     * only time the plaintext password is ever visible.
     */
    createLocalMember(
        organizationId: number,
        firstName: string,
        lastName: string,
        username: string | null,
        role: OrganizationRole,
    ): Observable<CreateLocalMemberResultDto> {
        return this._http.post<CreateLocalMemberResultDto>(`${this._base}/${organizationId}/members/local`, {
            firstName,
            lastName,
            ...(username ? { username } : {}),
            role,
        });
    }

    /** A free, globally-unique username derived from the typed names (`gandzde`). */
    suggestUsername(organizationId: number, firstName: string, lastName: string): Observable<{ username: string }> {
        return this._http.get<{ username: string }>(`${this._base}/${organizationId}/members/username-suggestion`, { params: { firstName, lastName } });
    }

    usernameAvailable(organizationId: number, username: string): Observable<{ available: boolean }> {
        return this._http.get<{ available: boolean }>(`${this._base}/${organizationId}/members/username-available`, { params: { username } });
    }

    /**
     * Resets a company-managed member's password back to the shared default
     * and forces them to change it on next login. Only valid for a member
     * whose `is_company_managed` is `true`.
     */
    resetLocalPassword(organizationId: number, targetUserId: number): Observable<{ password: string }> {
        return this._http.post<{ password: string }>(`${this._base}/${organizationId}/members/${targetUserId}/reset-password`, {});
    }

    changeRole(organizationId: number, targetUserId: number, role: OrganizationRole): Observable<OrganizationMembershipDto> {
        return this._http.patch<OrganizationMembershipDto>(`${this._base}/${organizationId}/members/${targetUserId}/role`, { role });
    }

    removeMember(organizationId: number, targetUserId: number): Observable<void> {
        return this._http.delete<void>(`${this._base}/${organizationId}/members/${targetUserId}`);
    }

    leaveOrganization(organizationId: number): Observable<void> {
        return this._http.delete<void>(`${this._base}/${organizationId}/members/leave`);
    }

    deleteOrganization(organizationId: number): Observable<void> {
        return this._http.delete<void>(`${this._base}/${organizationId}`);
    }

    /** Un-links a car from the organization — the car itself isn't deleted, it becomes personal again. */
    removeCar(organizationId: number, carId: number): Observable<void> {
        return this._http.delete<void>(`${this._base}/${organizationId}/cars/${carId}`);
    }

    /** Every car currently in the organization's fleet. */
    cars(organizationId: number): Observable<OrganizationCarDto[]> {
        return this._http.get<OrganizationCarDto[]>(`${this._base}/${organizationId}/cars`);
    }

    /** Bulk-creates cars in the fleet from an uploaded .csv/.xlsx/.xls file — Director-tier only. */
    importCars(organizationId: number, file: File): Observable<ImportCarsResultDto> {
        const formData = new FormData();
        formData.append('file', file);
        return this._http.post<ImportCarsResultDto>(`${this._base}/${organizationId}/cars/import`, formData);
    }
}
