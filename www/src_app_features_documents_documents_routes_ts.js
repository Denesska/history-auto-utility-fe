"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_documents_documents_routes_ts"],{

/***/ 36351
/*!********************************************************!*\
  !*** ./src/app/features/documents/documents.routes.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   documentsRoutes: () => (/* binding */ documentsRoutes)
/* harmony export */ });
const documentsRoutes = [{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2022_ngneat-until-destroy_mjs"), __webpack_require__.e("default-src_app_features_documents_documents-list_documents-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./documents-list/documents-list.component */ 84611)).then(m => m.DocumentsListComponent)
}, {
  path: 'add',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2022_ngneat-until-destroy_mjs"), __webpack_require__.e("default-src_app_features_documents_documents-list_documents-list_component_ts"), __webpack_require__.e("src_app_features_documents_documents-form_documents-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./documents-form/documents-form.component */ 14627)).then(m => m.DocumentsFormComponent)
}, {
  path: ':id/edit',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2022_ngneat-until-destroy_mjs"), __webpack_require__.e("default-src_app_features_documents_documents-list_documents-list_component_ts"), __webpack_require__.e("src_app_features_documents_documents-form_documents-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./documents-form/documents-form.component */ 14627)).then(m => m.DocumentsFormComponent)
}, {
  path: ':id',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2022_ngneat-until-destroy_mjs"), __webpack_require__.e("default-src_app_features_documents_documents-list_documents-list_component_ts"), __webpack_require__.e("src_app_features_documents_document-detail_document-detail_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./document-detail/document-detail.component */ 75143)).then(m => m.DocumentDetailComponent)
}, {
  path: '**',
  redirectTo: ''
}];

/***/ }

}]);
//# sourceMappingURL=src_app_features_documents_documents_routes_ts.js.map