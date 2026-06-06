"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 20092
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _hau_core_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/core/theme.service */ 29879);



class AppComponent {
  constructor(_theme) {
    this._theme = _theme;
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_hau_core_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-app");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_0__.IonRouterOutlet, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_0__.IonApp],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 85276
/*!*************************************!*\
  !*** ./src/app/app.routes.const.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HAU_ROUTES: () => (/* binding */ HAU_ROUTES)
/* harmony export */ });
const HAU_ROUTES = {
  auth: {
    path: 'auth',
    fullPath: '/auth'
  },
  main: {
    path: 'main',
    fullPath: '/main'
  },
  overview: {
    path: 'overview',
    fullPath: '/main/overview'
  },
  cars: {
    path: 'cars',
    fullPath: '/main/cars'
  },
  documents: {
    path: 'documents',
    fullPath: '/main/documents'
  },
  blog: {
    path: 'blog',
    fullPath: '/main/blog'
  },
  dashboard: {
    path: 'dashboard',
    fullPath: '/main/dashboard'
  },
  maintenance: {
    path: 'maintenance',
    fullPath: '/main/maintenance'
  }
};

/***/ },

/***/ 32181
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hau/app.routes.const */ 85276);
/* harmony import */ var _hau_features_auth_auth_routes_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/features/auth/auth.routes.const */ 88536);
/* harmony import */ var _hau_features_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/auth/auth.guard */ 68802);



const routes = [{
  path: _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_0__.HAU_ROUTES.auth.path,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_auth_auth_routes_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/auth.routes */ 89105)).then(mod => mod.authRoutes)
}, {
  path: _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_0__.HAU_ROUTES.main.path,
  canActivate: [_hau_features_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionicons_dist_esm-es5_index-b72adede_js-node_modules_ionicons_icons_index_mjs"), __webpack_require__.e("src_app_features_main_main_routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/main/main.routes */ 56327)).then(mod => mod.mainRoutes)
}, {
  path: '**',
  redirectTo: _hau_features_auth_auth_routes_const__WEBPACK_IMPORTED_MODULE_1__.AUTH_ROUTES.login.fullPath
}];

/***/ },

/***/ 29879
/*!***************************************!*\
  !*** ./src/app/core/theme.service.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);



const STORAGE_KEY = 'hau-theme';
class ThemeService {
  constructor(document) {
    this.document = document;
    this._isDark = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.isDark$ = this._isDark.asObservable();
    this.init();
  }
  get isDark() {
    return this._isDark.value;
  }
  toggle() {
    this.setDark(!this.isDark);
  }
  setDark(value) {
    this._isDark.next(value);
    this.document.body.classList.toggle('dark', value);
    localStorage.setItem(STORAGE_KEY, value ? 'dark' : 'light');
  }
  init() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') {
      this.setDark(stored === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDark(prefersDark);
    }
  }
  static {
    this.ɵfac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThemeService)(_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 83839
/*!*****************************************************************!*\
  !*** ./src/app/core/transloco/transloco-http-loader.service.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslocoHttpLoader: () => (/* binding */ TranslocoHttpLoader),
/* harmony export */   preloadTranslation: () => (/* binding */ preloadTranslation)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 56196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 50698);



function preloadTranslation(transloco) {
  return () => {
    transloco.setActiveLang('en');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)(transloco.load('en'));
  };
}
class TranslocoHttpLoader {
  constructor(http) {
    this.http = http;
  }
  getTranslation(lang) {
    return this.http.get(`/assets/i18n/${lang}.json`);
  }
  static {
    this.ɵfac = function TranslocoHttpLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TranslocoHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TranslocoHttpLoader,
      factory: TranslocoHttpLoader.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 68802
/*!*********************************************!*\
  !*** ./src/app/features/auth/auth.guard.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 36256);
/* harmony import */ var _hau_features_auth_auth_routes_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/auth/auth.routes.const */ 88536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 61318);






const authGuard = (route, state) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  const returnUrl = state.url;
  return authService.checkSession().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(isAuthenticated => {
    if (isAuthenticated) {
      return true;
    }
    void router.navigate([_hau_features_auth_auth_routes_const__WEBPACK_IMPORTED_MODULE_3__.AUTH_ROUTES.login.fullPath], {
      queryParams: {
        returnUrl
      }
    });
    return false;
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
    console.error("Auth check failed:", error);
    void router.navigate([_hau_features_auth_auth_routes_const__WEBPACK_IMPORTED_MODULE_3__.AUTH_ROUTES.login.fullPath], {
      queryParams: {
        returnUrl
      }
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
  }));
};
// void this.router.navigate([AUTH_ROUTES.login.fullPath]);
// export const canActivate: CanActivateFn = (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
// ) => {
//   const authService = inject(AuthenticationService);
//   const router = inject(Router);
//
//   return authService.checkLogin().pipe(
//       map(() => true),
//       catchError(() => {
//         return router.createUrlTree(['route-to-fallback-page']);
//       })
//   );
// };

/***/ },

/***/ 88536
/*!****************************************************!*\
  !*** ./src/app/features/auth/auth.routes.const.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTH_ROUTES: () => (/* binding */ AUTH_ROUTES)
/* harmony export */ });
const AUTH_ROUTES = {
  login: {
    path: 'login',
    fullPath: '/auth/login'
  },
  token: {
    path: 'token',
    fullPath: '/auth/token'
  }
};

/***/ },

/***/ 36256
/*!***********************************************!*\
  !*** ./src/app/features/auth/auth.service.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 50698);





class AuthService {
  constructor(http) {
    this.http = http;
    this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiUrl;
    this.tokenKey = 'jwt';
    this.refreshKey = 'refreshJwt';
    this.isLoggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.hasToken());
    this.isRefreshing = false;
    this.refreshResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
  }
  checkSession() {
    return this.http.get(`${this.API_URL}/auth/me`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => true), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error("Session check failed:", error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
    }));
  }
  refreshSession() {
    if (this.isRefreshing) {
      return this.refreshResult$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(result => result !== null), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(result => result ? (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true) : (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('Refresh failed'))));
    }
    this.isRefreshing = true;
    this.refreshResult$.next(null);
    return this.http.post(`${this.API_URL}/auth/refresh`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
      this.isRefreshing = false;
      this.refreshResult$.next(true);
      return true;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      this.isRefreshing = false;
      this.refreshResult$.next(false);
      console.error("Refresh token failed:", error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  loginWithGoogle() {
    const origin = encodeURIComponent(window.location.origin);
    window.location.href = `${this.API_URL}/auth/google?origin=${origin}`;
  }
  saveToken(token) {
    localStorage.setItem(this.tokenKey, token);
    this.isLoggedIn$.next(true);
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  getRefreshToken() {
    return localStorage.getItem(this.refreshKey);
  }
  hasToken() {
    return !!this.getToken();
  }
  logout(returnUrl) {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn$.next(false);
  }
  refreshAccessToken() {
    return this.http.post(`${this.API_URL}/auth/refresh-token`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(res => res.accessToken), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error refreshing access token:', error.message);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 23288
/*!*******************************************************!*\
  !*** ./src/app/features/auth/authErrorInterceptor.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authErrorInterceptor: () => (/* binding */ authErrorInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_features_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/features/auth/auth.service */ 36256);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36647);



/*export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
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
};*/
const authErrorInterceptor = (req, next) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_hau_features_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
  return next(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
    if (error.status === 401) {
      if (req.url.includes('/auth/refresh')) {
        const returnUrl = window.location.pathname + window.location.search;
        authService.logout(returnUrl);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
      }
      return authService.refreshSession().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => next(req)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
        const returnUrl = window.location.pathname + window.location.search;
        authService.logout(returnUrl);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
      }));
    } else if (error.status === 403) {
      console.warn("Access denied. You do not have permission to view this resource.");
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
  }));
};

/***/ },

/***/ 7140
/*!***********************************************************!*\
  !*** ./src/app/features/auth/errorHandler.interceptor.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorInterceptor: () => (/* binding */ errorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61318);

const errorInterceptor = (req, next) => {
  return next(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => error);
  }));
};

/***/ },

/***/ 47073
/*!***************************************************************!*\
  !*** ./src/app/features/auth/with-credentials.interceptor.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withCredentialsInterceptor: () => (/* binding */ withCredentialsInterceptor)
/* harmony export */ });
const withCredentialsInterceptor = (req, next) => {
  const modifiedReq = req.clone({
    withCredentials: true
  });
  return next(modifiedReq);
};

/***/ },

/***/ 70896
/*!***********************************************!*\
  !*** ./src/app/shared/state/app/app.state.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppState: () => (/* binding */ AppState),
/* harmony export */   AppStateModel: () => (/* binding */ AppStateModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 68267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94363);



class AppStateModel {}
const initialAppState = {};
let AppState = class AppState {
  static {
    this.ɵfac = function AppState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppState)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AppState,
      factory: AppState.ɵfac
    });
  }
};
AppState = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.State)({
  name: 'app',
  defaults: initialAppState
})], AppState);


/***/ },

/***/ 16171
/*!***********************************************!*\
  !*** ./src/auto-gen/api/api-configuration.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiConfiguration: () => (/* binding */ ApiConfiguration),
/* harmony export */   provideApiConfiguration: () => (/* binding */ provideApiConfiguration)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94363);

/**
 * Provides the ApiConfiguration configuration object with a given root URL.
 */
function provideApiConfiguration(rootUrl) {
  var config = new ApiConfiguration();
  config.rootUrl = rootUrl;
  return {
    provide: ApiConfiguration,
    useValue: config
  };
}
/**
 * Global configuration
 */
class ApiConfiguration {
  constructor() {
    this.rootUrl = 'http://localhost:3000';
  }
  static {
    this.ɵfac = function ApiConfiguration_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ApiConfiguration)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiConfiguration,
      factory: ApiConfiguration.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 45312
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiUrl: 'https://dev.denhau.ro/api',
  imageBaseUrl: 'https://dev.denhau.ro'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ },

/***/ 84429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 94967);
/* harmony import */ var _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations/async */ 39192);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular/standalone */ 4059);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/transloco */ 76075);
/* harmony import */ var _hau_app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hau/app.routes */ 32181);
/* harmony import */ var _hau_app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hau/app.component */ 20092);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./environments/environment */ 45312);
/* harmony import */ var _hau_core_transloco_transloco_http_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hau/core/transloco/transloco-http-loader.service */ 83839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngxs/store */ 68267);
/* harmony import */ var _hau_shared_state_app_app_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hau/shared/state/app/app.state */ 70896);
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngxs/logger-plugin */ 39899);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @auth0/angular-jwt */ 92389);
/* harmony import */ var _hau_features_auth_authErrorInterceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hau/features/auth/authErrorInterceptor */ 23288);
/* harmony import */ var _hau_features_auth_errorHandler_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hau/features/auth/errorHandler.interceptor */ 7140);
/* harmony import */ var _hau_features_auth_with_credentials_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @hau/features/auth/with-credentials.interceptor */ 47073);
/* harmony import */ var _auto_gen_api_api_configuration__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auto-gen/api/api-configuration */ 16171);



















const apiRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_12__.environment.apiUrl.replace(/\/api\/?$/, '');
if (_environments_environment__WEBPACK_IMPORTED_MODULE_12__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.enableProdMode)();
}
void (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_hau_app_component__WEBPACK_IMPORTED_MODULE_11__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.provideZoneChangeDetection)(), (0,_angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_4__.provideAnimationsAsync)(), {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouteReuseStrategy,
    useClass: _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy
  }, (0,_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.provideIonicAngular)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.provideRouter)(_hau_app_routes__WEBPACK_IMPORTED_MODULE_10__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.withInterceptors)([_hau_features_auth_with_credentials_interceptor__WEBPACK_IMPORTED_MODULE_21__.withCredentialsInterceptor, _hau_features_auth_authErrorInterceptor__WEBPACK_IMPORTED_MODULE_19__.authErrorInterceptor, _hau_features_auth_errorHandler_interceptor__WEBPACK_IMPORTED_MODULE_20__.errorInterceptor])), {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
    useClass: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_18__.JwtInterceptor,
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_INITIALIZER,
    multi: true,
    useFactory: _hau_core_transloco_transloco_http_loader_service__WEBPACK_IMPORTED_MODULE_13__.preloadTranslation,
    deps: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__.TranslocoService]
  }, (0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__.provideTransloco)({
    config: {
      availableLangs: ['en'],
      defaultLang: 'en',
      prodMode: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()
    },
    loader: _hau_core_transloco_transloco_http_loader_service__WEBPACK_IMPORTED_MODULE_13__.TranslocoHttpLoader
  }), (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.importProvidersFrom)(_ngxs_store__WEBPACK_IMPORTED_MODULE_15__.NgxsModule.forRoot([_hau_shared_state_app_app_state__WEBPACK_IMPORTED_MODULE_16__.AppState], {
    developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_12__.environment.production
  })), (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.importProvidersFrom)(_ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_17__.NgxsLoggerPluginModule.forRoot({
    disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__.environment.production
  })), (0,_auto_gen_api_api_configuration__WEBPACK_IMPORTED_MODULE_22__.provideApiConfiguration)(apiRoot)]
});

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map