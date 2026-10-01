import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import {
    MyOrganizationDto,
    OrganizationMembershipDto,
    OrganizationRole,
} from '@hau/features/organization/organization.model';

/**
 * The organization API (`/api/organization`). Lives in `core/` because the
 * shell (sidebar, Account screen) needs `hasOrganization()` to decide whether
 * to show the entry at all, outside the organization feature itself — same
 * reasoning as `AdminApiService`.
 */
@Injectable({ providedIn: 'root' })
export class OrganizationApiService {
    private readonly _http = inject(HttpClient);
    private readonly _base = `${environment.apiUrl}/organization`;

    myOrganizations(): Observable<MyOrganizationDto[]> {
        return this._http.get<MyOrganizationDto[]>(this._base);
    }

    /** Never errors — any failure (offline, older backend) just hides the entry. */
    hasOrganization(): Observable<boolean> {
        return this.myOrganizations().pipe(
            map(orgs => orgs.length > 0),
            catchError(() => of(false)),
        );
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

    changeRole(organizationId: number, targetUserId: number, role: OrganizationRole): Observable<OrganizationMembershipDto> {
        return this._http.patch<OrganizationMembershipDto>(`${this._base}/${organizationId}/members/${targetUserId}/role`, { role });
    }

    removeMember(organizationId: number, targetUserId: number): Observable<void> {
        return this._http.delete<void>(`${this._base}/${organizationId}/members/${targetUserId}`);
    }

    leaveOrganization(organizationId: number): Observable<void> {
        return this._http.delete<void>(`${this._base}/${organizationId}/members/leave`);
    }
}
