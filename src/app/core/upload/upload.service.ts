import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';

export type UploadContextType = 'car' | 'maintenance' | 'document' | 'inspection' | 'journal';

export interface UploadResult {
  fileId: number;
  fileKey: string;
}

interface RequestUploadResponse {
  fileId: number;
  fileKey: string;
  uploadUrl: string;
  expiresIn: number;
}

interface ConfirmUploadResponse {
  fileId: number;
  fileKey: string;
  uploadedAt: string;
}

@Injectable({ providedIn: 'root' })
export class UploadService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = environment.apiUrl;

  /**
   * Full upload flow:
   *   1. Request signed PUT URL from backend
   *   2. PUT file directly to R2 (native fetch — bypasses the withCredentials interceptor)
   *   3. Confirm upload with backend
   *
   * Returns the fileId and fileKey on success.
   */
  uploadFile(file: File, contextType: UploadContextType, contextId?: number): Observable<UploadResult> {
    return this._requestUploadUrl(file, contextType, contextId).pipe(
      switchMap(({ fileId, fileKey, uploadUrl }) =>
        from(this._putToR2(uploadUrl, file)).pipe(
          switchMap(() => this._confirmUpload(fileId)),
          switchMap(confirmed => [{ fileId: confirmed.fileId, fileKey }] as UploadResult[]),
        ),
      ),
    );
  }

  getReadUrl(fileId: number): Observable<{ readUrl: string; expiresIn: number }> {
    return this._http.get<{ readUrl: string; expiresIn: number }>(
      `${this._apiUrl}/upload/${fileId}/url`,
    );
  }

  deleteFile(fileId: number): Observable<void> {
    return this._http.delete<void>(`${this._apiUrl}/upload/${fileId}`);
  }

  // ── Private helpers ────────────────────────────────────────────────────────

  private _requestUploadUrl(
    file: File,
    contextType: UploadContextType,
    contextId?: number,
  ): Observable<RequestUploadResponse> {
    return this._http.post<RequestUploadResponse>(`${this._apiUrl}/upload/request`, {
      originalFileName: file.name,
      mimeType: file.type,
      size: file.size,
      contextType,
      ...(contextId != null ? { contextId } : {}),
    });
  }

  private async _putToR2(signedUrl: string, file: File): Promise<void> {
    const response = await fetch(signedUrl, {
      method: 'PUT',
      body: file,
      headers: { 'Content-Type': file.type },
    });
    if (!response.ok) {
      throw new Error(`R2 upload failed: ${response.status} ${response.statusText}`);
    }
  }

  private _confirmUpload(fileId: number): Observable<ConfirmUploadResponse> {
    return this._http.post<ConfirmUploadResponse>(`${this._apiUrl}/upload/${fileId}/confirm`, {});
  }
}
