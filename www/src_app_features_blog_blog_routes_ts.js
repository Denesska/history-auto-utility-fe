"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_blog_blog_routes_ts"],{

/***/ 42989
/*!**********************************************!*\
  !*** ./src/app/features/blog/blog.routes.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blogRoutes: () => (/* binding */ blogRoutes)
/* harmony export */ });
const blogRoutes = [{
  path: '',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_blog_blog-list_blog-list_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./blog-list/blog-list.component */ 37775)).then(m => m.BlogListComponent)
}, {
  path: 'new',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_blog_models_blog_model_ts-node_modules_tiptap_extension-image_dist_i-f9743f"), __webpack_require__.e("src_app_features_blog_blog-entry-write_blog-entry-write_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./blog-entry-write/blog-entry-write.component */ 94959)).then(m => m.BlogEntryWriteComponent)
}, {
  path: ':id/edit',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_blog_models_blog_model_ts-node_modules_tiptap_extension-image_dist_i-f9743f"), __webpack_require__.e("src_app_features_blog_blog-entry-write_blog-entry-write_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./blog-entry-write/blog-entry-write.component */ 94959)).then(m => m.BlogEntryWriteComponent)
}, {
  path: ':id',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_blog_models_blog_model_ts-node_modules_tiptap_extension-image_dist_i-f9743f"), __webpack_require__.e("src_app_features_blog_blog-entry-view_blog-entry-view_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./blog-entry-view/blog-entry-view.component */ 76083)).then(m => m.BlogEntryViewComponent)
}, {
  path: '**',
  redirectTo: ''
}];

/***/ }

}]);
//# sourceMappingURL=src_app_features_blog_blog_routes_ts.js.map