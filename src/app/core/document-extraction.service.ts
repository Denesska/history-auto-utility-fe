import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExtractionResultDto } from '@hau/autogenapi/models';
import { DocumentService } from '@hau/autogenapi/services';

// Wraps the generated DocumentService's extraction endpoint so callers outside
// the documents feature (e.g. cars-form's "scan registration certificate")
// don't have to inject the documents API client directly — this endpoint reads
// a file and returns suggested field values, it doesn't touch any Document
// entity, so it isn't really "the documents API" from a caller's perspective.
@Injectable({ providedIn: 'root' })
export class DocumentExtractionService {
    private readonly _docService = inject(DocumentService);

    extract(file: File): Observable<ExtractionResultDto> {
        return this._docService.documentControllerExtractDocument(file);
    }
}
