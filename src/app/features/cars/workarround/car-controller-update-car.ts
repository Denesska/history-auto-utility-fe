// /* tslint:disable */
// /* eslint-disable */
// import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { filter, map } from 'rxjs/operators';
// import { StrictHttpResponse } from '../../strict-http-response';
// import { RequestBuilder } from '../../request-builder';

// import { CarDto } from '../../models/car-dto';
// import { UpdateCarDto } from '../../models/update-car-dto';

// export interface CarControllerUpdateCar$Params {
//       body: UpdateCarDto & { image?: File }
// }

// export function carControllerUpdateCar(http: HttpClient, rootUrl: string, params: CarControllerUpdateCar$Params, context?: HttpContext): Observable<StrictHttpResponse<CarDto>> {
//   const rb = new RequestBuilder(rootUrl, carControllerUpdateCar.PATH, 'put');
//   if (params) {
//     const formData = new FormData();
//     const { image, ...carData } = params.body;
    
//     // Append all car data fields
//     Object.entries(carData).forEach(([key, value]) => {
//       if (value !== null && value !== undefined) {
//         formData.append(key, value.toString());
//       }
//     });
    
//     // Append the image file if it exists
//     if (image) {
//       formData.append('file', image);
//     }
    
//     rb.body(formData, 'multipart/form-data');
//   }

//   return http.request(
//     rb.build({ responseType: 'json', accept: 'application/json', context })
//   ).pipe(
//     filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
//     map((r: HttpResponse<any>) => {
//       return r as StrictHttpResponse<CarDto>;
//     })
//   );
// }

// carControllerUpdateCar.PATH = '/car';
