/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddCarDto } from '../../models/add-car-dto';
import { CarDto } from '../../models/car-dto';

export interface CarControllerCreateCar$Params {
      body: AddCarDto & { image?: File }
}

export function carControllerCreateCar(http: HttpClient, rootUrl: string, params: CarControllerCreateCar$Params, context?: HttpContext): Observable<StrictHttpResponse<CarDto>> {
  const rb = new RequestBuilder(rootUrl, carControllerCreateCar.PATH, 'post');
  if (params) {
    const formData = new FormData();
    const { image, ...carData } = params.body;
    
    // Append all car data fields
    Object.entries(carData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        // Check for File type in a cross-platform way
        const isFile = typeof value === 'object' && value !== null && (value as any).constructor && (value as any).constructor.name === 'File';
        if (typeof value === 'object' && !isFile) {
          console.warn('Skipping object field in FormData:', key, value);
          return;
        }
        formData.append(key, isFile ? value : value.toString());
        console.log('FormData append:', key, value, typeof value);
      }
    });
    
    // Append the image file if it exists
    if (image) {
      formData.append('file', image);
      console.log('FormData append: file', image);
    }
    
    // Test: hardcode a value to check if FormData works
    // formData.append('test', '123');
    
    rb.body(formData);
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CarDto>;
    })
  );
}

carControllerCreateCar.PATH = '/car';
