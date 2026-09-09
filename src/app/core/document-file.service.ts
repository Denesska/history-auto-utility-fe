import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface DocumentFileLink {
    url: string;
    file_name: string;
    file_size: number | null;
    expires_in: number;
}

/**
 * Access to the file attached to a document.
 *
 * The `file_url` on a DocumentDto is a signed URL produced when that document was
 * read, so it expires while the app keeps the document in state. Anything the user
 * clicks asks the backend for a fresh link instead — `GET /document/:id/file`,
 * which also resolves legacy files still stored on the API's own disk.
 */
@Injectable({ providedIn: 'root' })
export class DocumentFileService {
    private readonly _http = inject(HttpClient);
    private readonly _apiUrl = environment.apiUrl;

    getLink(documentId: number, mode: 'inline' | 'download' = 'inline'): Observable<DocumentFileLink> {
        return this._http.get<DocumentFileLink>(`${this._apiUrl}/document/${documentId}/file`, {
            params: { mode },
        });
    }

    /**
     * Saves the attached file. The link is signed with an `attachment` disposition,
     * so on the web the current tab starts a download without navigating away —
     * a plain `download` attribute wouldn't work, the file lives on another origin.
     */
    download(documentId: number): Observable<void> {
        return this.getLink(documentId, 'download').pipe(
            tap(link => {
                if (Capacitor.isNativePlatform()) {
                    void Browser.open({ url: link.url });
                } else {
                    window.location.href = link.url;
                }
            }),
            map(() => undefined),
        );
    }

    /** Opens the attached file for viewing (a new tab on the web, the in-app browser on native). */
    open(documentId: number): Observable<void> {
        return this.getLink(documentId, 'inline').pipe(
            tap(link => {
                if (Capacitor.isNativePlatform()) {
                    void Browser.open({ url: link.url });
                } else {
                    window.open(link.url, '_blank', 'noopener');
                }
            }),
            map(() => undefined),
        );
    }
}
