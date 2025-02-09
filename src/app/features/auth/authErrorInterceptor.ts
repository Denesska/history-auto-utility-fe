import {inject} from '@angular/core';
import {HttpInterceptorFn} from '@angular/common/http';
import {AuthService} from '@hau/features/auth/auth.service';
import {catchError, switchMap, throwError} from 'rxjs';

export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    return next(req).pipe(
        catchError((error) => {
            if (error.status === 401) {
                if (req.url.includes('/auth/refresh')) {
                    const returnUrl = window.location.pathname + window.location.search;
                    authService.logout(returnUrl);
                    return throwError(() => error);
                }

                return authService.refreshSession().pipe(
                    switchMap(() => next(req)), // Reface requestul original după refresh
                    catchError(() => {
                        const returnUrl = window.location.pathname + window.location.search;
                        authService.logout(returnUrl);
                        return throwError(() => error);
                    })
                );
            } else if (error.status === 403) {
                console.warn("Access denied. You do not have permission to view this resource.");
            }
            return throwError(() => error);
        })
    );
};


/*export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    return next(req).pipe(
        catchError((error) => {
            if (error.status === 401) {
                return authService.refreshSession().pipe(
                    switchMap(() => next(req)), // Reface requestul original după refresh
                    catchError(() => {
                        const returnUrl = window.location.pathname + window.location.search;
                        authService.logout(returnUrl);
                        return throwError(() => error);
                    })
                );
            } else if (error.status === 403) {
                console.warn("Access denied. You do not have permission to view this resource.");
            }
            return throwError(() => error);
        })
    );
};*/
