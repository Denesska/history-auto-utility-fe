"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_cars_cars_routes_ts"],{

/***/ 2511
/*!**********************************************!*\
  !*** ./src/app/features/cars/cars.routes.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carRoutes: () => (/* binding */ carRoutes)
/* harmony export */ });
/* harmony import */ var _hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hau/features/cars/cars.routes.const */ 5618);

const carRoutes = [{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionicons_dist_esm-es5_index-b72adede_js-node_modules_ionicons_icons_index_mjs"), __webpack_require__.e("src_app_features_cars_cars-list_cars-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cars-list/cars-list.component */ 9632)).then(mod => mod.CarsListComponent)
}, {
  path: _hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_0__.CARS_ROUTES.create.path,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionicons_dist_esm-es5_index-b72adede_js-node_modules_ionicons_icons_index_mjs"), __webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2022_ngneat-until-destroy_mjs"), __webpack_require__.e("default-src_app_features_cars_component_cars-form_cars-form_component_ts"), __webpack_require__.e("src_app_features_cars_cars-create_cars-create_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cars-create/cars-create.component */ 4352)).then(mod => mod.CarsCreateComponent)
}, {
  path: `${_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_0__.CARS_ROUTES.details.path}/:id`,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionicons_dist_esm-es5_index-b72adede_js-node_modules_ionicons_icons_index_mjs"), __webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2022_ngneat-until-destroy_mjs"), __webpack_require__.e("src_app_features_cars_cars-details_cars-details_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cars-details/cars-details.component */ 6341)).then(mod => mod.CarsDetailsComponent)
}, {
  path: `${_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_0__.CARS_ROUTES.details.path}/:id/${_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_0__.CARS_ROUTES.edit.path}`,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionicons_dist_esm-es5_index-b72adede_js-node_modules_ionicons_icons_index_mjs"), __webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2022_ngneat-until-destroy_mjs"), __webpack_require__.e("default-src_app_features_cars_component_cars-form_cars-form_component_ts"), __webpack_require__.e("src_app_features_cars_cars-edit_cars-edit_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cars-edit/cars-edit.component */ 1132)).then(mod => mod.CarsEditComponent)
}, {
  path: `${_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_0__.CARS_ROUTES.details.path}/:id/${_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_0__.CARS_ROUTES.documents.path}`,
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2022_ngneat-until-destroy_mjs"), __webpack_require__.e("src_app_features_cars_car-documents_car-documents_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./car-documents/car-documents.component */ 7935)).then(mod => mod.CarDocumentsComponent)
}];

/***/ }

}]);
//# sourceMappingURL=src_app_features_cars_cars_routes_ts.js.map