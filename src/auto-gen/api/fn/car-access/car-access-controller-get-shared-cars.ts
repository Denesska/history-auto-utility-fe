import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { SharedCarDto } from '../../models/car-access-dto';

export function carAccessControllerGetSharedCars(http: HttpClient, rootUrl: string, context?: HttpContext): Observable<StrictHttpResponse<Array<SharedCarDto>>> {
  const rb = new RequestBuilder(rootUrl, carAccessControllerGetSharedCars.PATH, 'get');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<Array<SharedCarDto>>),
  );
}

carAccessControllerGetSharedCars.PATH = '/api/car/shared';
