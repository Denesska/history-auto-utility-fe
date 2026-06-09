import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfiguration } from '../api-configuration';
import { DocumentDto } from '../models/document-dto';

@Injectable({ providedIn: 'root' })
export class DocumentAllApiService {
  constructor(
    private readonly config: ApiConfiguration,
    private readonly http: HttpClient,
  ) {}

  getAllDocuments(): Observable<DocumentDto[]> {
    return this.http.get<DocumentDto[]>(`${this.config.rootUrl}/api/document/all`);
  }
}
