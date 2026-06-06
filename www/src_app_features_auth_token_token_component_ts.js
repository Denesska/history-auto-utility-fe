"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_auth_token_token_component_ts"],{

/***/ 48373
/*!********************************************************!*\
  !*** ./src/app/features/auth/token/token.component.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenComponent: () => (/* binding */ TokenComponent)
/* harmony export */ });
/* harmony import */ var _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hau/app.routes.const */ 85276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _hau_features_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/auth/auth.service */ 36256);




class TokenComponent {
  constructor(route, authService, router) {
    this.route = route;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        void this.authService.saveToken(token);
        void this.router.navigate([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_0__.HAU_ROUTES.main.fullPath]);
      } else {
        void this.router.navigate([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_0__.HAU_ROUTES.auth.fullPath]);
      }
    });
  }
  static {
    this.ɵfac = function TokenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TokenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_hau_features_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TokenComponent,
      selectors: [["app-token"]],
      decls: 2,
      vars: 0,
      template: function TokenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " redirecting...\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC90b2tlbi90b2tlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_auth_token_token_component_ts.js.map