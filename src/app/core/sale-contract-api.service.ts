import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import {
    CreateSaleContractPayload,
    GenerateSaleContractPayload,
    IdentityExtractionResult,
    SaleContract,
    SaleContractFileLink,
    SaleContractSummary,
    UpdateSaleContractPayload,
    UserIdentity,
    ContractParty,
} from '@hau/features/sale-contract/sale-contract.model';

/**
 * The sale-contract API (`/api/sale-contract`).
 *
 * Written by hand against HttpClient rather than generated — see the note in
 * `sale-contract.model.ts`. It lives in `core/` next to `DocumentFileService`
 * because the identity-extraction call is useful outside the feature too (a
 * car's page could offer "scan the buyer's ID" without pulling in the wizard).
 */
@Injectable({ providedIn: 'root' })
export class SaleContractApiService {
    private readonly _http = inject(HttpClient);
    private readonly _apiUrl = environment.apiUrl;

    private get _base(): string {
        return `${this._apiUrl}/sale-contract`;
    }

    // -- contracts ----------------------------------------------------------

    list(): Observable<SaleContractSummary[]> {
        return this._http.get<SaleContractSummary[]>(this._base);
    }

    get(id: number): Observable<SaleContract> {
        return this._http.get<SaleContract>(`${this._base}/${id}`);
    }

    create(payload: CreateSaleContractPayload): Observable<SaleContract> {
        return this._http.post<SaleContract>(this._base, payload);
    }

    update(id: number, payload: UpdateSaleContractPayload): Observable<SaleContract> {
        return this._http.put<SaleContract>(`${this._base}/${id}`, payload);
    }

    /** Deletes the contract and the stored PDF. Not reversible, by design. */
    remove(id: number): Observable<void> {
        return this._http.delete<void>(`${this._base}/${id}`);
    }

    // -- generating and downloading -----------------------------------------

    generate(id: number, payload: GenerateSaleContractPayload): Observable<SaleContractFileLink> {
        return this._http.post<SaleContractFileLink>(`${this._base}/${id}/generate`, payload);
    }

    getDownloadLink(id: number): Observable<SaleContractFileLink> {
        return this._http.get<SaleContractFileLink>(`${this._base}/${id}/download`);
    }

    /**
     * Saves the generated PDF, following the same approach as
     * `DocumentFileService.download`: the signed URL already carries an
     * `attachment` disposition, so on the web the current tab starts a download
     * without navigating away — a `download` attribute would be ignored, the
     * file is on another origin.
     */
    download(link: SaleContractFileLink): void {
        if (Capacitor.isNativePlatform()) {
            void Browser.open({ url: link.url });
        } else {
            window.location.href = link.url;
        }
    }

    /** Fetches a fresh link and follows it, for a contract generated earlier. */
    downloadById(id: number): Observable<void> {
        return this.getDownloadLink(id).pipe(
            tap(link => this.download(link)),
            map(() => undefined),
        );
    }

    // -- identity -----------------------------------------------------------

    /**
     * Reads the fields off a photo of an identity document.
     *
     * `consent_version` is mandatory: the document usually belongs to the other
     * party to the sale, who is not a user of this app, and the backend refuses
     * the request without a stated consent version. Send the version of the
     * wording the user was actually shown — not a hardcoded value chosen here.
     *
     * Nothing is stored by this call. The result is a suggestion the user has to
     * review; never write it straight into a contract without showing it first.
     */
    extractIdentity(file: File, consentVersion: string): Observable<IdentityExtractionResult> {
        const body = new FormData();
        body.append('file', file);
        body.append('consent_version', consentVersion);
        return this._http.post<IdentityExtractionResult>(`${this._base}/extract-identity`, body);
    }

    getMyIdentity(): Observable<UserIdentity> {
        return this._http.get<UserIdentity>(`${this._base}/my-identity`);
    }

    saveMyIdentity(identity: ContractParty): Observable<UserIdentity> {
        return this._http.put<UserIdentity>(`${this._base}/my-identity`, { identity });
    }

    deleteMyIdentity(): Observable<void> {
        return this._http.delete<void>(`${this._base}/my-identity`);
    }
}
