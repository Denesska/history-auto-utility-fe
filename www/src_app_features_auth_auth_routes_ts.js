"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_auth_auth_routes_ts"],{

/***/ 89105
/*!**********************************************!*\
  !*** ./src/app/features/auth/auth.routes.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authRoutes: () => (/* binding */ authRoutes)
/* harmony export */ });
/* harmony import */ var _hau_features_auth_auth_routes_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hau/features/auth/auth.routes.const */ 88536);

const authRoutes = [{
  path: '',
  children: [{
    path: _hau_features_auth_auth_routes_const__WEBPACK_IMPORTED_MODULE_0__.AUTH_ROUTES.token.path,
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_auth_token_token_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./token/token.component */ 48373)).then(mod => mod.TokenComponent)
  }, {
    path: _hau_features_auth_auth_routes_const__WEBPACK_IMPORTED_MODULE_0__.AUTH_ROUTES.login.path,
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionicons_dist_esm-es5_index-b72adede_js-node_modules_ionicons_icons_index_mjs"), __webpack_require__.e("src_app_features_auth_login_login_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.component */ 30461)).then(mod => mod.LoginComponent)
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: _hau_features_auth_auth_routes_const__WEBPACK_IMPORTED_MODULE_0__.AUTH_ROUTES.login.path
  }]
}];

/***/ }

}]);
//# sourceMappingURL=src_app_features_auth_auth_routes_ts.js.map