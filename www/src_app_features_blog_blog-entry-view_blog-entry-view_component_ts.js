"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_blog_blog-entry-view_blog-entry-view_component_ts"],{

/***/ 76083
/*!****************************************************************************!*\
  !*** ./src/app/features/blog/blog-entry-view/blog-entry-view.component.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogEntryViewComponent: () => (/* binding */ BlogEntryViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tiptap/core */ 87959);
/* harmony import */ var _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tiptap/starter-kit */ 38910);
/* harmony import */ var _tiptap_extension_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tiptap/extension-image */ 95667);
/* harmony import */ var _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tiptap/extension-link */ 88634);
/* harmony import */ var _hau_features_blog_models_blog_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hau/features/blog/models/blog.model */ 50001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular/standalone */ 4059);
/* harmony import */ var _hau_features_blog_state_blog_facade__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hau/features/blog/state/blog.facade */ 74371);













const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.id;
function BlogEntryViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Entry not found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BlogEntryViewComponent_Conditional_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.navigateToBlog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u2190 Back to Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function BlogEntryViewComponent_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BlogEntryViewComponent_Conditional_3_Conditional_23_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BlogEntryViewComponent_Conditional_3_Conditional_23_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.closeMoreMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BlogEntryViewComponent_Conditional_3_Conditional_23_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.closeMoreMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Share ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BlogEntryViewComponent_Conditional_3_Conditional_23_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.navigateToBlog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.entry.is_pinned ? "Unpin" : "Pin", " ");
  }
}
function BlogEntryViewComponent_Conditional_3_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r1.entry.cover_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function BlogEntryViewComponent_Conditional_3_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00B7 ", ctx_r1.entry.car_name);
  }
}
function BlogEntryViewComponent_Conditional_3_Conditional_35_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r1.entry.km), " km");
  }
}
function BlogEntryViewComponent_Conditional_3_Conditional_35_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r1.entry.price), " RON");
  }
}
function BlogEntryViewComponent_Conditional_3_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 26)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](4, BlogEntryViewComponent_Conditional_3_Conditional_35_Conditional_4_Template, 3, 3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](5, BlogEntryViewComponent_Conditional_3_Conditional_35_Conditional_5_Template, 3, 3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", ctx_r1.vehicleCategoryIcon(ctx_r1.entry.vehicle_category));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.VEHICLE_ENTRY_CATEGORY_LABELS[ctx_r1.entry.vehicle_category], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r1.entry.km ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r1.entry.price ? 5 : -1);
  }
}
function BlogEntryViewComponent_Conditional_3_For_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinterpolate1"]("tag-chip tag--", tag_r5.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](tag_r5.label);
  }
}
function BlogEntryViewComponent_Conditional_3_Conditional_40_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 41);
  }
  if (rf & 2) {
    const img_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", img_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function BlogEntryViewComponent_Conditional_3_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](1, BlogEntryViewComponent_Conditional_3_Conditional_40_For_2_Template, 1, 1, "img", 41, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r1.galleryImages);
  }
}
function BlogEntryViewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BlogEntryViewComponent_Conditional_3_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.navigateToBlog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BlogEntryViewComponent_Conditional_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.navigateToBlog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 9)(13, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BlogEntryViewComponent_Conditional_3_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 12)(17, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BlogEntryViewComponent_Conditional_3_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.editEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 15)(21, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BlogEntryViewComponent_Conditional_3_Template_button_click_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.toggleMoreMenu($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](23, BlogEntryViewComponent_Conditional_3_Conditional_23_Template, 10, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](25, BlogEntryViewComponent_Conditional_3_Conditional_25_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 21)(27, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](30, BlogEntryViewComponent_Conditional_3_Conditional_30_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](35, BlogEntryViewComponent_Conditional_3_Conditional_35_Template, 6, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](37, BlogEntryViewComponent_Conditional_3_For_38_Template, 2, 4, "span", 28, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](39, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](40, BlogEntryViewComponent_Conditional_3_Conditional_40_Template, 3, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.categoryLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.entry.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r1.showMoreMenu ? 23 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r1.entry.cover_image_url ? 25 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](29, 13, ctx_r1.entry.date, "d MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r1.entry.car_name ? 30 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("published", ctx_r1.entry.status === "PUBLISHED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.entry.status === "PUBLISHED" ? "Published" : "Draft", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.entry.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r1.entry.vehicle_category ? 35 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r1.entry.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r1.renderedHtml, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r1.galleryImages.length > 0 ? 40 : -1);
  }
}
class BlogEntryViewComponent {
  get categoryLabel() {
    return this.entry?.category === 'VEHICLE' ? 'Vehicle Journal' : 'Personal';
  }
  get contentParagraphs() {
    return (this.entry?.content ?? '').split('\n\n').filter(Boolean);
  }
  get galleryImages() {
    return this.entry?.images ?? [];
  }
  _renderContent(entry) {
    if (entry.content_json) {
      try {
        this.renderedHtml = (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_4__.generateHTML)(entry.content_json, [_tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_5__["default"], _tiptap_extension_image__WEBPACK_IMPORTED_MODULE_6__["default"], _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_7__["default"]]);
        return;
      } catch {
        // fall through to plain text
      }
    }
    // Legacy plain-text fallback
    this.renderedHtml = (entry.content ?? '').split('\n\n').filter(Boolean).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
  }
  constructor(route, navCtrl, blogFacade) {
    this.route = route;
    this.navCtrl = navCtrl;
    this.blogFacade = blogFacade;
    this.VEHICLE_ENTRY_CATEGORY_LABELS = _hau_features_blog_models_blog_model__WEBPACK_IMPORTED_MODULE_8__.VEHICLE_ENTRY_CATEGORY_LABELS;
    this.showMoreMenu = false;
    this.renderedHtml = '';
    (0,ionicons__WEBPACK_IMPORTED_MODULE_2__.a)({
      arrowBackOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.arrowBackOutline,
      createOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.createOutline,
      ellipsisHorizontalOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.ellipsisHorizontalOutline,
      pinOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.pinOutline,
      shareOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.shareOutline,
      trashOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.trashOutline,
      constructOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.constructOutline,
      mapOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.mapOutline,
      waterOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.waterOutline,
      carOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.carOutline
    });
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogFacade.loadEntry(id);
    this.blogFacade.entry$.subscribe(e => {
      this.entry = e;
      if (e) this._renderContent(e);
    });
  }
  goBack() {
    void this.navCtrl.navigateBack('/main/blog', {
      animated: false
    });
  }
  navigateToBlog() {
    void this.navCtrl.navigateBack('/main/blog', {
      animated: false
    });
  }
  editEntry() {
    if (!this.entry) return;
    void this.navCtrl.navigateForward(`/main/blog/${this.entry.id}/edit`, {
      animated: false
    });
  }
  toggleMoreMenu(event) {
    event.stopPropagation();
    this.showMoreMenu = !this.showMoreMenu;
  }
  closeMoreMenu() {
    this.showMoreMenu = false;
  }
  vehicleCategoryIcon(cat) {
    const map = {
      REPAIR: 'construct-outline',
      SERVICE_VISIT: 'construct-outline',
      TRIP: 'map-outline',
      FUEL: 'water-outline',
      UPGRADE: 'flash-outline',
      INSPECTION: 'shield-checkmark-outline',
      BREAKDOWN: 'alert-circle-outline',
      OTHER: 'car-outline'
    };
    return cat ? map[cat] : 'car-outline';
  }
  static {
    this.ɵfac = function BlogEntryViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogEntryViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_12__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_hau_features_blog_state_blog_facade__WEBPACK_IMPORTED_MODULE_13__.BlogFacade));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: BlogEntryViewComponent,
      selectors: [["app-blog-entry-view"]],
      decls: 4,
      vars: 2,
      consts: [[1, "view-page", 3, "click"], [1, "view-inner"], [1, "not-found"], [1, "back-link", 3, "click"], [1, "view-topbar"], [1, "breadcrumb"], [1, "bc-item", "bc-link", 3, "click"], [1, "bc-sep"], [1, "bc-item", "bc-current"], [1, "view-actions-row"], [1, "back-btn", 3, "click"], ["name", "arrow-back-outline"], [1, "action-btns"], [1, "action-btn", "action-btn--primary", 3, "click"], ["name", "create-outline"], [1, "more-wrap"], [1, "action-btn", 3, "click"], ["name", "ellipsis-horizontal-outline"], [1, "more-menu"], [1, "view-content"], [1, "entry-cover"], [1, "entry-meta-row"], [1, "entry-date"], [1, "entry-car"], [1, "entry-status"], [1, "entry-title"], [1, "vehicle-info-row"], [1, "entry-tags"], [3, "class"], [1, "entry-body", "tiptap-view", 3, "innerHTML"], [1, "entry-gallery"], [1, "more-menu", 3, "click"], [1, "more-menu-item", 3, "click"], ["name", "pin-outline"], ["name", "share-outline"], [1, "more-menu-item", "danger", 3, "click"], ["name", "trash-outline"], ["alt", "", "loading", "lazy", 1, "entry-cover-img", 3, "src"], [1, "vehicle-cat-badge"], [3, "name"], [1, "vehicle-stat"], ["alt", "", "loading", "lazy", 1, "gallery-img", 3, "src"]],
      template: function BlogEntryViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-content", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BlogEntryViewComponent_Template_ion_content_click_0_listener() {
            return ctx.closeMoreMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](2, BlogEntryViewComponent_Conditional_2_Template, 5, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](3, BlogEntryViewComponent_Conditional_3_Template, 41, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](!ctx.entry ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.entry ? 3 : -1);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.view-page[_ngcontent-%COMP%] {\n  --background: var(--hau-bg);\n}\n\n.view-inner[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px 16px 56px;\n}\n@media (min-width: 768px) {\n  .view-inner[_ngcontent-%COMP%] {\n    padding: 28px 24px 64px;\n  }\n}\n@media (min-width: 1024px) {\n  .view-inner[_ngcontent-%COMP%] {\n    padding: 32px 32px 72px;\n  }\n}\n\n.not-found[_ngcontent-%COMP%] {\n  padding: 48px 0;\n  text-align: center;\n  color: var(--hau-text-muted);\n}\n\n.back-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--hau-primary);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  margin-top: 8px;\n}\n\n.view-topbar[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n\n.bc-item[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n.bc-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  transition: color var(--hau-transition-fast);\n}\n.bc-link[_ngcontent-%COMP%]:hover {\n  color: var(--hau-primary);\n}\n\n.bc-current[_ngcontent-%COMP%] {\n  color: var(--hau-text-dim);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n}\n@media (min-width: 768px) {\n  .bc-current[_ngcontent-%COMP%] {\n    max-width: 360px;\n  }\n}\n\n.bc-sep[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--hau-text-dim);\n}\n\n.view-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.86rem;\n  font-weight: 600;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast);\n}\n.back-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text);\n}\n\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.86rem;\n  font-weight: 600;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast);\n}\n.action-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text);\n}\n.action-btn.action-btn--primary[_ngcontent-%COMP%] {\n  background: var(--hau-primary);\n  border-color: transparent;\n  color: #fff;\n  box-shadow: 0 4px 14px var(--hau-primary-shadow);\n}\n.action-btn.action-btn--primary[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-strong);\n}\n\n.more-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.more-wrap[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n}\n\n.more-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-md);\n  box-shadow: var(--hau-shadow-md);\n  z-index: 50;\n  min-width: 148px;\n  overflow: hidden;\n}\n\n.more-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 10px 14px;\n  background: none;\n  border: none;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  cursor: pointer;\n  text-align: left;\n  transition: background var(--hau-transition-fast);\n}\n.more-menu-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--hau-text-dim);\n}\n.more-menu-item[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n.more-menu-item[_ngcontent-%COMP%]    + .more-menu-item[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n}\n.more-menu-item.danger[_ngcontent-%COMP%] {\n  color: var(--hau-danger-fg);\n}\n.more-menu-item.danger[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--hau-danger-fg);\n}\n\n.view-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.entry-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n\n.entry-date[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--hau-text-dim);\n}\n\n.entry-car[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--hau-text-dim);\n}\n\n.entry-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--hau-text);\n  margin: 0 0 12px;\n  line-height: 1.25;\n}\n@media (min-width: 768px) {\n  .entry-title[_ngcontent-%COMP%] {\n    font-size: 1.85rem;\n  }\n}\n@media (min-width: 1024px) {\n  .entry-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n\n.vehicle-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n}\n\n.vehicle-cat-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  background: var(--hau-primary-soft);\n  color: var(--hau-primary);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.vehicle-cat-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n\n.vehicle-stat[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--hau-text-muted);\n  padding: 4px 10px;\n  background: var(--hau-surface-soft);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n}\n\n.entry-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 24px;\n}\n\n.tag-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.tag-chip.tag--blue[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n  color: #2563eb;\n}\n.tag-chip.tag--green[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #15803d;\n}\n.tag-chip.tag--purple[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n.tag-chip.tag--orange[_ngcontent-%COMP%] {\n  background: rgba(234, 88, 12, 0.12);\n  color: #c2410c;\n}\n.tag-chip.tag--teal[_ngcontent-%COMP%] {\n  background: rgba(13, 148, 136, 0.12);\n  color: #0d9488;\n}\n.tag-chip.tag--pink[_ngcontent-%COMP%] {\n  background: rgba(219, 39, 119, 0.1);\n  color: #be185d;\n}\n\n.entry-cover[_ngcontent-%COMP%] {\n  border-radius: var(--hau-radius-lg, 12px);\n  overflow: hidden;\n  margin-bottom: 24px;\n  max-height: 320px;\n}\n@media (min-width: 768px) {\n  .entry-cover[_ngcontent-%COMP%] {\n    max-height: 420px;\n  }\n}\n\n.entry-cover-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.entry-status[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: var(--hau-radius-pill);\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  color: var(--hau-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.entry-status.published[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  border-color: rgba(22, 163, 74, 0.25);\n  color: #15803d;\n}\n\n.entry-body[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.72;\n  color: var(--hau-text);\n}\n@media (min-width: 768px) {\n  .entry-body[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n.tiptap-view[_ngcontent-%COMP%]     p {\n  margin: 0 0 0.85em;\n}\n.tiptap-view[_ngcontent-%COMP%]     p:last-child {\n  margin-bottom: 0;\n}\n.tiptap-view[_ngcontent-%COMP%]     h2 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 1.3em 0 0.4em;\n}\n.tiptap-view[_ngcontent-%COMP%]     h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 1.1em 0 0.35em;\n}\n.tiptap-view[_ngcontent-%COMP%]     ul, .tiptap-view[_ngcontent-%COMP%]     ol {\n  padding-left: 1.5em;\n  margin: 0.5em 0 0.85em;\n}\n.tiptap-view[_ngcontent-%COMP%]     li {\n  margin-bottom: 0.25em;\n  line-height: 1.65;\n}\n.tiptap-view[_ngcontent-%COMP%]     blockquote {\n  border-left: 3px solid var(--ion-color-primary, #3880ff);\n  margin: 0.85em 0;\n  padding: 6px 14px;\n  color: var(--hau-text-muted);\n  font-style: italic;\n  background: var(--hau-hover-bg, rgba(0, 0, 0, 0.03));\n  border-radius: 0 8px 8px 0;\n}\n.tiptap-view[_ngcontent-%COMP%]     a {\n  color: var(--ion-color-primary, #3880ff);\n  text-decoration: underline;\n}\n.tiptap-view[_ngcontent-%COMP%]     img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  margin: 0.75em 0;\n  display: block;\n}\n.tiptap-view[_ngcontent-%COMP%]     code {\n  background: var(--hau-hover-bg, rgba(0, 0, 0, 0.06));\n  border-radius: 4px;\n  padding: 1px 5px;\n  font-size: 0.875em;\n  font-family: monospace;\n}\n.tiptap-view[_ngcontent-%COMP%]     pre {\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: 8px;\n  padding: 12px 16px;\n  overflow-x: auto;\n}\n.tiptap-view[_ngcontent-%COMP%]     pre code {\n  background: none;\n  padding: 0;\n}\n\n.entry-para[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.72;\n  color: var(--hau-text);\n  margin: 0;\n}\n@media (min-width: 768px) {\n  .entry-para[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n.entry-gallery[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n  margin-top: 28px;\n}\n@media (min-width: 600px) {\n  .entry-gallery[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n  }\n}\n@media (min-width: 1024px) {\n  .entry-gallery[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n}\n.entry-gallery[_ngcontent-%COMP%]:has(.gallery-img:only-child) {\n  grid-template-columns: 1fr;\n}\n\n.gallery-img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 4/3;\n  object-fit: cover;\n  border-radius: var(--hau-radius-lg);\n  display: block;\n  background: var(--hau-surface-soft);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYmxvZy9ibG9nLWVudHJ5LXZpZXcvYmxvZy1lbnRyeS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsY0FBQTtBQUVSOztBQUFBO0VBQ0UsMkJBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBR0Y7QUFERTtFQUxGO0lBSzhCLHVCQUFBO0VBSzVCO0FBQ0Y7QUFMRTtFQU5GO0lBTStCLHVCQUFBO0VBUzdCO0FBQ0Y7O0FBTkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQVNGOztBQU5BO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBTEE7RUFDRSxtQkFBQTtBQVFGOztBQUxBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFRRjs7QUFMQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFMQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQVFGO0FBTkU7RUFBVSx5QkFBQTtBQVNaOztBQU5BO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVNGO0FBUEU7RUFQRjtJQU84QixnQkFBQTtFQVc1QjtBQUNGOztBQVRBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQVlGOztBQVJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFXRjs7QUFSQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7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QUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTJETjtBQTFETTtFQUFPLGdCQUFBO0VBQWtCLFVBQUE7QUE4RC9COztBQXpEQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUE0REY7QUExREU7RUFORjtJQU04QixlQUFBO0VBOEQ1QjtBQUNGOztBQTNEQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQThERjtBQTVERTtFQU5GO0lBTThCLHFDQUFBO0lBQXVDLFNBQUE7RUFpRW5FO0FBQ0Y7QUFqRUU7RUFQRjtJQU8rQixTQUFBO0VBcUU3QjtBQUNGO0FBcEVFO0VBQ0UsMEJBQUE7QUFzRUo7O0FBbEVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtBQXFFRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cblxuLnZpZXctcGFnZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taGF1LWJnKTtcbn1cblxuLnZpZXctaW5uZXIge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweCAxNnB4IDU2cHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IHBhZGRpbmc6IDI4cHggMjRweCA2NHB4OyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHsgcGFkZGluZzogMzJweCAzMnB4IDcycHg7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIE5vdCBmb3VuZCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5ub3QtZm91bmQge1xuICBwYWRkaW5nOiA0OHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbn1cblxuLmJhY2stbGluayB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4vLyDDosKUwoDDosKUwoAgVG9wYmFyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnZpZXctdG9wYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYmMtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYmMtbGluayB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICAmOmhvdmVyIHsgY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTsgfVxufVxuXG4uYmMtY3VycmVudCB7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiAyMDBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgbWF4LXdpZHRoOiAzNjBweDsgfVxufVxuXG4uYmMtc2VwIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xufVxuXG4vLyDDosKUwoDDosKUwoAgQWN0aW9ucyByb3cgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udmlldy1hY3Rpb25zLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYmFjay1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xuICBmb250LXNpemU6IDAuODZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KSwgY29sb3IgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDFyZW07IH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpO1xuICAgIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIH1cbn1cblxuLmFjdGlvbi1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCksIGNvbG9yIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAxcmVtOyB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICB9XG5cbiAgJi5hY3Rpb24tYnRuLS1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHZhcigtLWhhdS1wcmltYXJ5LXNoYWRvdyk7XG5cbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc3Ryb25nKTsgfVxuICB9XG59XG5cbi5tb3JlLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmFjdGlvbi1idG4geyBwYWRkaW5nOiA4cHggMTBweDsgfVxufVxuXG4ubW9yZS1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDhweCk7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLW1kKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGF1LXNoYWRvdy1tZCk7XG4gIHotaW5kZXg6IDUwO1xuICBtaW4td2lkdGg6IDE0OHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubW9yZS1tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDAuODRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC45NXJlbTsgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7IH1cblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTsgfVxuICAmICsgJiB7IGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTsgfVxuXG4gICYuZGFuZ2VyIHsgY29sb3I6IHZhcigtLWhhdS1kYW5nZXItZmcpOyBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1oYXUtZGFuZ2VyLWZnKTsgfSB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBFbnRyeSBjb250ZW50IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnZpZXctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMDtcbn1cblxuLmVudHJ5LW1ldGEtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5lbnRyeS1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbn1cblxuLmVudHJ5LWNhciB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7XG59XG5cbi5lbnRyeS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBtYXJnaW46IDAgMCAxMnB4O1xuICBsaW5lLWhlaWdodDogMS4yNTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZm9udC1zaXplOiAxLjg1cmVtOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHsgZm9udC1zaXplOiAycmVtOyB9XG59XG5cbi52ZWhpY2xlLWluZm8tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi52ZWhpY2xlLWNhdC1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1wcmltYXJ5LXNvZnQpO1xuICBjb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC44NXJlbTsgfVxufVxuXG4udmVoaWNsZS1zdGF0IHtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2Utc29mdCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xufVxuXG4uZW50cnktdGFncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi50YWctY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuXG4gICYudGFnLS1ibHVlICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjEwKTsgIGNvbG9yOiAjMjU2M2ViOyB9XG4gICYudGFnLS1ncmVlbiAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIyLCAxNjMsIDc0LCAwLjEyKTsgIGNvbG9yOiAjMTU4MDNkOyB9XG4gICYudGFnLS1wdXJwbGUgeyBiYWNrZ3JvdW5kOiByZ2JhKDEyNCwgNTgsIDIzNywgMC4xMCk7IGNvbG9yOiAjN2MzYWVkOyB9XG4gICYudGFnLS1vcmFuZ2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgODgsIDEyLCAwLjEyKTsgIGNvbG9yOiAjYzI0MTBjOyB9XG4gICYudGFnLS10ZWFsICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDEzLCAxNDgsIDEzNiwgMC4xMik7IGNvbG9yOiAjMGQ5NDg4OyB9XG4gICYudGFnLS1waW5rICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIxOSwgMzksIDExOSwgMC4xMCk7IGNvbG9yOiAjYmUxODVkOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBDb3ZlciBpbWFnZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5lbnRyeS1jb3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbGcsIDEycHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBtYXgtaGVpZ2h0OiAzMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgbWF4LWhlaWdodDogNDIwcHg7IH1cbn1cblxuLmVudHJ5LWNvdmVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy8gw6LClMKAw6LClMKAIFN0YXR1cyBiYWRnZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5lbnRyeS1zdGF0dXMge1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtcGlsbCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG5cbiAgJi5wdWJsaXNoZWQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIsIDE2MywgNzQsIDAuMTApO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMiwgMTYzLCA3NCwgMC4yNSk7XG4gICAgY29sb3I6ICMxNTgwM2Q7XG4gIH1cbn1cblxuLmVudHJ5LWJvZHkge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjcyO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBmb250LXNpemU6IDFyZW07IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIFRpcHRhcCByZW5kZXJlZCBIVE1MIHN0eWxlcyAodmlldy1vbmx5KSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50aXB0YXAtdmlldyB7XG4gIDo6bmctZGVlcCB7XG4gICAgcCB7IG1hcmdpbjogMCAwIDAuODVlbTsgfVxuICAgIHA6bGFzdC1jaGlsZCB7IG1hcmdpbi1ib3R0b206IDA7IH1cblxuICAgIGgyIHsgZm9udC1zaXplOiAxLjNyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbjogMS4zZW0gMCAwLjRlbTsgfVxuICAgIGgzIHsgZm9udC1zaXplOiAxLjFyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbjogMS4xZW0gMCAwLjM1ZW07IH1cblxuICAgIHVsLCBvbCB7IHBhZGRpbmctbGVmdDogMS41ZW07IG1hcmdpbjogMC41ZW0gMCAwLjg1ZW07IH1cbiAgICBsaSB7IG1hcmdpbi1ib3R0b206IDAuMjVlbTsgbGluZS1oZWlnaHQ6IDEuNjU7IH1cblxuICAgIGJsb2NrcXVvdGUge1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG4gICAgICBtYXJnaW46IDAuODVlbSAwO1xuICAgICAgcGFkZGluZzogNnB4IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnLCByZ2JhKDAsMCwwLC4wMykpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XG4gICAgfVxuXG4gICAgYSB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbiAgICBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgbWFyZ2luOiAwLjc1ZW0gMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGNvZGUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnLCByZ2JhKDAsMCwwLC4wNikpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcGFkZGluZzogMXB4IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgfVxuXG4gICAgcHJlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgIGNvZGUgeyBiYWNrZ3JvdW5kOiBub25lOyBwYWRkaW5nOiAwOyB9XG4gICAgfVxuICB9XG59XG5cbi5lbnRyeS1wYXJhIHtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBsaW5lLWhlaWdodDogMS43MjtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgbWFyZ2luOiAwO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBmb250LXNpemU6IDFyZW07IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEdhbGxlcnkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZW50cnktZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyBnYXA6IDEwcHg7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBnYXA6IDEycHg7IH1cblxuICAmOmhhcyguZ2FsbGVyeS1pbWc6b25seS1jaGlsZCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5cbi5nYWxsZXJ5LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDQgLyAzO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1sZyk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZS1zb2Z0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_blog_blog-entry-view_blog-entry-view_component_ts.js.map