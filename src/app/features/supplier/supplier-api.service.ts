import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CreateSupplierPayload, SupplierDto, UpdateSupplierPayload } from './supplier.model';

/**
 * The supplier directory API (`/api/supplier`). Also consumed from
 * `features/documents` and `features/maintenance` (their forms), outside
 * this feature itself. Hand-written rather than generated: see
 * `SupplierDto.ts`'s `WithSupplierId` note.
 */
@Injectable({ providedIn: 'root' })
export class SupplierApiService {
    private readonly _http = inject(HttpClient);
    private readonly _base = `${environment.apiUrl}/supplier`;

    getAll(): Observable<SupplierDto[]> {
        return this._http.get<SupplierDto[]>(this._base);
    }

    create(dto: CreateSupplierPayload): Observable<SupplierDto> {
        return this._http.post<SupplierDto>(this._base, dto);
    }

    update(id: number, dto: UpdateSupplierPayload): Observable<SupplierDto> {
        return this._http.put<SupplierDto>(`${this._base}/${id}`, dto);
    }

    delete(id: number): Observable<SupplierDto> {
        return this._http.delete<SupplierDto>(`${this._base}/${id}`);
    }
}
