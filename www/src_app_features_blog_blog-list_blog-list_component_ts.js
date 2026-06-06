"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_blog_blog-list_blog-list_component_ts"],{

/***/ 37775
/*!****************************************************************!*\
  !*** ./src/app/features/blog/blog-list/blog-list.component.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogListComponent: () => (/* binding */ BlogListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var _hau_features_blog_models_blog_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hau/features/blog/models/blog.model */ 50001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular/standalone */ 4059);
/* harmony import */ var _hau_features_blog_state_blog_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hau/features/blog/state/blog.facade */ 74371);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);









const _c0 = a0 => ({
  "background": a0
});
const _c1 = () => ({});
const _forTrack0 = ($index, $item) => $item.key;
const _forTrack1 = ($index, $item) => $item.value;
const _forTrack2 = ($index, $item) => $item.label;
const _forTrack3 = ($index, $item) => $item.id;
function BlogListComponent_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_7_Conditional_6_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_7_Conditional_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.navigateToNewEntry("PERSONAL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Personal entry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_7_Conditional_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.navigateToNewEntry("VEHICLE"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Vehicle Journal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BlogListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_7_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.navigateToNewEntry("PERSONAL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " New entry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_7_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleNewEntryMenu($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](6, BlogListComponent_Conditional_7_Conditional_6_Template, 7, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("open", ctx_r1.showNewEntryMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.showNewEntryMenu ? 6 : -1);
  }
}
function BlogListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.newEntryFromCarTab());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " New entry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BlogListComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_For_12_Template_button_click_0_listener($event) {
      const tab_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r1.setTab(tab_r6.key);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r1.activeTabKey === tab_r6.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tab_r6.label, " ");
  }
}
function BlogListComponent_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_13_For_5_Template_button_click_0_listener() {
      const cat_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setVehicleCat(cat_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r1.selectedVehicleCat === cat_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.VEHICLE_ENTRY_CATEGORY_LABELS[cat_r9], " ");
  }
}
function BlogListComponent_Conditional_13_Conditional_6_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_13_Conditional_6_Conditional_4_For_2_Template_button_click_0_listener() {
      const cat_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      ctx_r1.setVehicleCat(cat_r12.value);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.showMoreCats = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", cat_r12.label, " ");
  }
}
function BlogListComponent_Conditional_13_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, BlogListComponent_Conditional_13_Conditional_6_Conditional_4_For_2_Template, 2, 1, "button", 33, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r1.extraVehicleCats);
  }
}
function BlogListComponent_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 30)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_13_Conditional_6_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleMoreCats($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](4, BlogListComponent_Conditional_13_Conditional_6_Conditional_4_Template, 3, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.showMoreCats ? 4 : -1);
  }
}
function BlogListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_13_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 27)(2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_13_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setVehicleCat("all"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](4, BlogListComponent_Conditional_13_For_5_Template, 2, 3, "button", 29, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](6, BlogListComponent_Conditional_13_Conditional_6_Template, 5, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r1.selectedVehicleCat === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r1.VEHICLE_CATEGORY_CHIPS_PRIMARY);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.extraVehicleCats.length > 0 ? 6 : -1);
  }
}
function BlogListComponent_Conditional_14_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", tag_r14.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tag_r14.label);
  }
}
function BlogListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_14_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 36)(2, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BlogListComponent_Conditional_14_Template_select_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onTagChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "All tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](5, BlogListComponent_Conditional_14_For_6_Template, 2, 2, "option", 39, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 36)(9, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BlogListComponent_Conditional_14_Template_select_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSortChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Newest first");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Oldest first");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function BlogListComponent_Conditional_14_Template_input_input_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSearchInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.selectedTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r1.availableTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.sortOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.searchQuery);
  }
}
function BlogListComponent_Conditional_15_Conditional_0_For_6_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinterpolate1"]("tag-chip tag--", tag_r17.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tag_r17.label);
  }
}
function BlogListComponent_Conditional_15_Conditional_0_For_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_Conditional_0_For_6_Conditional_13_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_Conditional_0_For_6_Conditional_13_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const entry_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.editEntry($event, entry_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_Conditional_0_For_6_Conditional_13_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const entry_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.togglePin($event, entry_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_Conditional_0_For_6_Conditional_13_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const entry_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteEntry($event, entry_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entry_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", entry_r16.is_pinned ? "Unpin" : "Pin", " ");
  }
}
function BlogListComponent_Conditional_15_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_Conditional_0_For_6_Template_div_click_0_listener() {
      const entry_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.viewEntry(entry_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 58)(3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h3", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](9, BlogListComponent_Conditional_15_Conditional_0_For_6_For_10_Template, 2, 4, "span", 62, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_Conditional_0_For_6_Template_button_click_11_listener($event) {
      const entry_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleEntryMenu($event, entry_r16.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](13, BlogListComponent_Conditional_15_Conditional_0_For_6_Conditional_13_Template, 10, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, ctx_r1.cardBg(entry_r16)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 4, entry_r16.date, "d MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r16.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](entry_r16.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.openEntryMenuId === entry_r16.id ? 13 : -1);
  }
}
function BlogListComponent_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 47)(1, "h2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Pinned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](5, BlogListComponent_Conditional_15_Conditional_0_For_6_Template, 14, 9, "div", 55, _forTrack3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r1.pinnedEntries);
  }
}
function BlogListComponent_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No entries yet. Start writing!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_Conditional_4_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.navigateToNewEntry("PERSONAL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " New entry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BlogListComponent_Conditional_15_For_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinterpolate1"]("tag-chip tag--", tag_r22.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tag_r22.label);
  }
}
function BlogListComponent_Conditional_15_For_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_For_7_Conditional_14_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_For_7_Conditional_14_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const entry_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.editEntry($event, entry_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_For_7_Conditional_14_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const entry_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.togglePin($event, entry_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_For_7_Conditional_14_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const entry_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteEntry($event, entry_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entry_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", entry_r21.is_pinned ? "Unpin" : "Pin", " ");
  }
}
function BlogListComponent_Conditional_15_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_For_7_Template_div_click_0_listener() {
      const entry_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.viewEntry(entry_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 75)(2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h3", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](8, BlogListComponent_Conditional_15_For_7_For_9_Template, 2, 4, "span", 62, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 78)(12, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_15_For_7_Template_button_click_12_listener($event) {
      const entry_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleEntryMenu($event, entry_r21.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](14, BlogListComponent_Conditional_15_For_7_Conditional_14_Template, 10, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entry_r21 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 4, entry_r21.date, "d MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](entry_r21.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, ctx_r1.cardBg(entry_r21)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.openEntryMenuId === entry_r21.id ? 14 : -1);
  }
}
function BlogListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](0, BlogListComponent_Conditional_15_Conditional_0_Template, 7, 0, "section", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 47)(2, "h2", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "All entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](4, BlogListComponent_Conditional_15_Conditional_4_Template, 7, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](6, BlogListComponent_Conditional_15_For_7_Template, 15, 9, "div", 51, _forTrack3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.pinnedEntries.length > 0 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.filteredEntries.length === 0 ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r1.filteredEntries);
  }
}
function BlogListComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No entries for this vehicle yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_16_Conditional_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.newEntryFromCarTab());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " New entry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BlogListComponent_Conditional_16_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 88);
  }
  if (rf & 2) {
    const entry_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", entry_r27.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BlogListComponent_Conditional_16_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 89);
  }
}
function BlogListComponent_Conditional_16_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinterpolate1"]("vcat-chip vcat-chip--", entry_r27.vehicle_category.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.VEHICLE_ENTRY_CATEGORY_LABELS[entry_r27.vehicle_category], " ");
  }
}
function BlogListComponent_Conditional_16_For_3_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinterpolate1"]("tag-chip tag--", tag_r28.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tag_r28.label);
  }
}
function BlogListComponent_Conditional_16_For_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, entry_r27.km), " km");
  }
}
function BlogListComponent_Conditional_16_For_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("RON ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, entry_r27.price));
  }
}
function BlogListComponent_Conditional_16_For_3_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_16_For_3_Conditional_20_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_16_For_3_Conditional_20_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const entry_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.editEntry($event, entry_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_16_For_3_Conditional_20_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const entry_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteEntry($event, entry_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BlogListComponent_Conditional_16_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_16_For_3_Template_div_click_0_listener() {
      const entry_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.viewEntry(entry_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](2, BlogListComponent_Conditional_16_For_3_Conditional_2_Template, 1, 1, "img", 88)(3, BlogListComponent_Conditional_16_For_3_Conditional_3_Template, 1, 0, "ion-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 90)(5, "h3", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](8, BlogListComponent_Conditional_16_For_3_Conditional_8_Template, 2, 4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](9, BlogListComponent_Conditional_16_For_3_For_10_Template, 2, 4, "span", 62, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 93)(12, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](15, BlogListComponent_Conditional_16_For_3_Conditional_15_Template, 3, 3, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](16, BlogListComponent_Conditional_16_For_3_Conditional_16_Template, 3, 3, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 78)(18, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_16_For_3_Template_button_click_18_listener($event) {
      const entry_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleEntryMenu($event, entry_r27.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](20, BlogListComponent_Conditional_16_For_3_Conditional_20_Template, 7, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entry_r27 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", entry_r27.images.length ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c0, ctx_r1.cardBg(entry_r27)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](entry_r27.images.length ? 2 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r27.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](entry_r27.vehicle_category ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](entry_r27.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 8, entry_r27.date, "d MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](entry_r27.km ? 15 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](entry_r27.price ? 16 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.openEntryMenuId === entry_r27.id ? 20 : -1);
  }
}
function BlogListComponent_Conditional_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No more entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BlogListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](0, BlogListComponent_Conditional_16_Conditional_0_Template, 7, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](2, BlogListComponent_Conditional_16_For_3_Template, 21, 14, "div", 82, _forTrack3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](4, BlogListComponent_Conditional_16_Conditional_4_Template, 2, 0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Conditional_16_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.newEntryFromCarTab());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " New entry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.filteredEntries.length === 0 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r1.filteredEntries);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.filteredEntries.length > 0 ? 4 : -1);
  }
}
class BlogListComponent {
  get activeCarId() {
    return this.tabs.find(t => t.key === this.activeTabKey)?.carId ?? null;
  }
  get isPersonalTab() {
    return this.activeCarId === null;
  }
  get activeCarGradient() {
    const car = this.cars.find(c => c.id === this.activeCarId);
    return car ? (0,_hau_features_blog_models_blog_model__WEBPACK_IMPORTED_MODULE_4__.carGradient)(car.id) : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }
  constructor(navCtrl, blogFacade, carService) {
    this.navCtrl = navCtrl;
    this.blogFacade = blogFacade;
    this.carService = carService;
    this.VEHICLE_ENTRY_CATEGORY_LABELS = _hau_features_blog_models_blog_model__WEBPACK_IMPORTED_MODULE_4__.VEHICLE_ENTRY_CATEGORY_LABELS;
    this.VEHICLE_ENTRY_CATEGORIES = _hau_features_blog_models_blog_model__WEBPACK_IMPORTED_MODULE_4__.VEHICLE_ENTRY_CATEGORIES;
    this.VEHICLE_CATEGORY_CHIPS_PRIMARY = _hau_features_blog_models_blog_model__WEBPACK_IMPORTED_MODULE_4__.VEHICLE_CATEGORY_CHIPS_PRIMARY;
    // ── Tab state ────────────────────────────────────────────────────
    this.tabs = [];
    this.activeTabKey = 'personal';
    this.cars = [];
    // ── Filter state ─────────────────────────────────────────────────
    this.selectedVehicleCat = 'all';
    this.showMoreCats = false;
    this.selectedTag = '';
    this.sortOrder = 'newest';
    this.searchQuery = '';
    // ── Menu state ───────────────────────────────────────────────────
    this.showNewEntryMenu = false;
    this.openEntryMenuId = null;
    // ── Data ─────────────────────────────────────────────────────────
    this.allEntries = [];
    this.pinnedEntries = [];
    this.filteredEntries = [];
    this.availableTags = [];
    (0,ionicons__WEBPACK_IMPORTED_MODULE_2__.a)({
      addOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.addOutline,
      chevronDownOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.chevronDownOutline,
      pinOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.pinOutline,
      searchOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.searchOutline,
      ellipsisHorizontalOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.ellipsisHorizontalOutline,
      optionsOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.optionsOutline,
      createOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.createOutline,
      bookmarkOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.bookmarkOutline,
      trashOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.trashOutline,
      chevronForwardOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.chevronForwardOutline,
      carOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.carOutline,
      constructOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.constructOutline,
      mapOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.mapOutline,
      waterOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.waterOutline,
      flashOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.flashOutline,
      shieldCheckmarkOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.shieldCheckmarkOutline,
      alertCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.alertCircleOutline
    });
  }
  ngOnInit() {
    // Load cars to build tabs
    this.carService.carControllerGetAllCars().subscribe(cars => {
      this.cars = cars;
      this.tabs = [{
        key: 'personal',
        label: 'Personal',
        carId: null
      }, ...cars.map(c => ({
        key: `car-${c.id}`,
        label: `${c.make} ${c.model}`,
        carId: c.id
      }))];
    });
    // Load all blog entries, then apply local filters
    this.blogFacade.loadEntries();
    this.blogFacade.entries$.subscribe(entries => {
      this.allEntries = entries;
      this.applyFilters();
    });
  }
  // ── Tab navigation ───────────────────────────────────────────────
  setTab(tabKey) {
    this.activeTabKey = tabKey;
    this.selectedVehicleCat = 'all';
    this.selectedTag = '';
    this.searchQuery = '';
    this.applyFilters();
  }
  // ── Vehicle category chip filter ─────────────────────────────────
  setVehicleCat(cat) {
    this.selectedVehicleCat = cat;
    this.applyFilters();
  }
  toggleMoreCats(event) {
    event.stopPropagation();
    this.showMoreCats = !this.showMoreCats;
  }
  // ── Standard filters ─────────────────────────────────────────────
  onTagChange(event) {
    this.selectedTag = event.target.value;
    this.applyFilters();
  }
  onSortChange(event) {
    this.sortOrder = event.target.value;
    this.applyFilters();
  }
  onSearchInput(event) {
    this.searchQuery = event.target.value;
    this.applyFilters();
  }
  // ── Core filter logic ────────────────────────────────────────────
  applyFilters() {
    let entries;
    if (this.isPersonalTab) {
      entries = this.allEntries.filter(e => e.category === 'PERSONAL');
    } else {
      entries = this.allEntries.filter(e => e.category === 'VEHICLE' && e.car_id === this.activeCarId);
      if (this.selectedVehicleCat !== 'all') {
        entries = entries.filter(e => e.vehicle_category === this.selectedVehicleCat);
      }
    }
    const tagMap = new Map();
    entries.forEach(e => e.tags.forEach(t => tagMap.set(t.label, t)));
    this.availableTags = Array.from(tagMap.values());
    if (this.selectedTag) {
      entries = entries.filter(e => e.tags.some(t => t.label === this.selectedTag));
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      entries = entries.filter(e => e.title.toLowerCase().includes(q) || e.content.toLowerCase().includes(q));
    }
    entries = [...entries].sort((a, b) => {
      const diff = new Date(b.date).getTime() - new Date(a.date).getTime();
      return this.sortOrder === 'newest' ? diff : -diff;
    });
    this.pinnedEntries = this.isPersonalTab ? entries.filter(e => e.is_pinned) : [];
    this.filteredEntries = entries;
  }
  // ── New entry menu ───────────────────────────────────────────────
  toggleNewEntryMenu(event) {
    event.stopPropagation();
    this.showNewEntryMenu = !this.showNewEntryMenu;
    this.openEntryMenuId = null;
  }
  closeMenus() {
    this.showNewEntryMenu = false;
    this.openEntryMenuId = null;
    this.showMoreCats = false;
  }
  navigateToNewEntry(category, carId) {
    this.showNewEntryMenu = false;
    const extras = category === 'VEHICLE' && carId != null ? {
      queryParams: {
        category,
        carId
      }
    } : {
      queryParams: {
        category
      }
    };
    void this.navCtrl.navigateForward(['/main/blog/new'], {
      ...extras,
      animated: false
    });
  }
  newEntryFromCarTab() {
    const carId = this.activeCarId ?? undefined;
    void this.navCtrl.navigateForward(['/main/blog/new'], {
      queryParams: {
        category: 'VEHICLE',
        carId
      },
      animated: false
    });
  }
  // ── Entry actions ────────────────────────────────────────────────
  viewEntry(entry) {
    void this.navCtrl.navigateForward(`/main/blog/${entry.id}`, {
      animated: false
    });
  }
  toggleEntryMenu(event, entryId) {
    event.stopPropagation();
    this.openEntryMenuId = this.openEntryMenuId === entryId ? null : entryId;
    this.showNewEntryMenu = false;
  }
  editEntry(event, entry) {
    event.stopPropagation();
    this.openEntryMenuId = null;
    void this.navCtrl.navigateForward(`/main/blog/${entry.id}/edit`, {
      animated: false
    });
  }
  togglePin(event, entry) {
    event.stopPropagation();
    this.openEntryMenuId = null;
    this.blogFacade.togglePin(entry.id);
  }
  deleteEntry(event, entry) {
    event.stopPropagation();
    this.openEntryMenuId = null;
    this.blogFacade.deleteEntry(entry.id);
  }
  // ── Helpers ──────────────────────────────────────────────────────
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
  cardBg(entry) {
    if (!this.isPersonalTab && entry.car_id != null) {
      return (0,_hau_features_blog_models_blog_model__WEBPACK_IMPORTED_MODULE_4__.carGradient)(entry.car_id);
    }
    return entry.cover_gradient ?? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }
  get extraVehicleCats() {
    return this.VEHICLE_ENTRY_CATEGORIES.filter(c => !this.VEHICLE_CATEGORY_CHIPS_PRIMARY.includes(c.value));
  }
  static {
    this.ɵfac = function BlogListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_hau_features_blog_state_blog_facade__WEBPACK_IMPORTED_MODULE_8__.BlogFacade), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_9__.CarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: BlogListComponent,
      selectors: [["app-blog-list"]],
      hostBindings: function BlogListComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_click_HostBindingHandler() {
            return ctx.closeMenus();
          }, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
        }
      },
      decls: 17,
      vars: 6,
      consts: [[1, "blog-page", 3, "click"], [1, "blog-inner"], [1, "blog-header"], [1, "header-right"], [1, "search-wrap", "search-wrap--header"], ["name", "search-outline", 1, "search-icon"], ["type", "text", "placeholder", "Search entries", 1, "search-input", 3, "input", "click", "value"], [1, "new-entry-wrap"], [1, "new-entry-solo"], [1, "tab-bar-scroll"], [1, "tab-bar"], [1, "tab-pill", 3, "active"], [1, "cat-chips-scroll"], [1, "personal-filters"], [1, "new-entry-wrap", 3, "click"], [1, "new-entry-main", 3, "click"], ["name", "add-outline"], [1, "new-entry-arrow", 3, "click"], ["name", "chevron-down-outline"], [1, "new-entry-dropdown"], [1, "new-entry-dropdown", 3, "click"], [1, "dropdown-item", 3, "click"], ["name", "create-outline"], ["name", "car-outline"], [1, "new-entry-solo", 3, "click"], [1, "tab-pill", 3, "click"], [1, "cat-chips-scroll", 3, "click"], [1, "cat-chips"], [1, "cat-chip", 3, "click"], [1, "cat-chip", 3, "active"], [1, "more-cats-wrap"], [1, "cat-chip", "cat-chip--more", 3, "click"], [1, "more-cats-dropdown"], [1, "more-cat-item"], [1, "more-cat-item", 3, "click"], [1, "personal-filters", 3, "click"], [1, "filter-select-wrap"], [1, "filter-select", 3, "change", "value"], ["value", ""], [3, "value"], ["name", "chevron-down-outline", 1, "select-chevron"], ["value", "newest"], ["value", "oldest"], [1, "search-wrap", "search-wrap--inline"], ["type", "text", "placeholder", "Search entries", 1, "search-input", 3, "input", "value"], [1, "filter-icon-btn"], ["name", "options-outline"], [1, "blog-section"], [1, "section-title"], [1, "empty-state"], [1, "entry-list"], [1, "entry-row"], [1, "section-label"], ["name", "pin-outline"], [1, "pinned-grid"], [1, "pinned-card"], [1, "pinned-card", 3, "click"], [1, "pinned-cover", 3, "ngStyle"], [1, "pinned-body"], [1, "entry-meta"], [1, "entry-card-title"], [1, "entry-tags"], [3, "class"], [1, "entry-more-btn", 3, "click"], ["name", "ellipsis-horizontal-outline"], [1, "entry-menu"], [1, "entry-menu", 3, "click"], [1, "entry-menu-item", 3, "click"], ["name", "bookmark-outline"], [1, "entry-menu-item", "danger", 3, "click"], ["name", "trash-outline"], ["name", "create-outline", 1, "empty-icon"], [1, "empty-text"], [1, "empty-cta", 3, "click"], [1, "entry-row", 3, "click"], [1, "entry-row-info"], [1, "entry-row-title"], [1, "entry-row-cover", 3, "ngStyle"], [1, "entry-row-actions"], [1, "entry-menu", "entry-menu--right"], [1, "entry-menu", "entry-menu--right", 3, "click"], [1, "vehicle-list"], [1, "vehicle-row"], [1, "list-end-note"], [1, "fab-new-entry", 3, "click"], ["name", "car-outline", 1, "empty-icon"], [1, "vehicle-row", 3, "click"], [1, "vehicle-thumb", 3, "ngStyle"], ["alt", "", "loading", "lazy", 1, "thumb-img", 3, "src"], ["name", "car-outline", 1, "thumb-icon"], [1, "vehicle-row-info"], [1, "vehicle-row-title"], [1, "vehicle-row-chips"], [1, "vehicle-row-meta"], [1, "vmeta-date"], [1, "vmeta-km"], [1, "vmeta-price"]],
      template: function BlogListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogListComponent_Template_ion_content_click_0_listener() {
            return ctx.closeMenus();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function BlogListComponent_Template_input_input_6_listener($event) {
            return ctx.onSearchInput($event);
          })("click", function BlogListComponent_Template_input_click_6_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](7, BlogListComponent_Conditional_7_Template, 7, 3, "div", 7)(8, BlogListComponent_Conditional_8_Template, 3, 0, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9)(10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](11, BlogListComponent_For_12_Template, 2, 3, "button", 11, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](13, BlogListComponent_Conditional_13_Template, 7, 3, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](14, BlogListComponent_Conditional_14_Template, 20, 3, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](15, BlogListComponent_Conditional_15_Template, 8, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](16, BlogListComponent_Conditional_16_Template, 8, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isPersonalTab ? 7 : 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.tabs);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isPersonalTab ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isPersonalTab ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isPersonalTab ? 15 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isPersonalTab ? 16 : -1);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.blog-page[_ngcontent-%COMP%] {\n  --background: var(--hau-bg);\n}\n\n.blog-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 20px 16px 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n@media (min-width: 768px) {\n  .blog-inner[_ngcontent-%COMP%] {\n    padding: 28px 24px 56px;\n    gap: 20px;\n  }\n}\n@media (min-width: 1024px) {\n  .blog-inner[_ngcontent-%COMP%] {\n    padding: 32px 32px 64px;\n    gap: 22px;\n  }\n}\n\n.blog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.blog-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--hau-text);\n  margin: 0;\n  line-height: 1.2;\n}\n@media (min-width: 768px) {\n  .blog-title[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n}\n@media (min-width: 1024px) {\n  .blog-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n}\n\n.blog-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--hau-text-muted);\n  margin: 4px 0 0;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.search-wrap--header[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) {\n  .search-wrap--header[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n\n.search-wrap--inline[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n@media (min-width: 768px) {\n  .search-wrap--inline[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 8px 12px 8px 34px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.84rem;\n  color: var(--hau-text);\n  transition: border-color var(--hau-transition-fast), width var(--hau-transition-fast);\n}\n.search-wrap--inline[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 32px;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--hau-text-dim);\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--hau-primary);\n}\n@media (min-width: 1024px) {\n  .search-input[_ngcontent-%COMP%] {\n    width: 240px;\n  }\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  font-size: 0.95rem;\n  color: var(--hau-text-dim);\n  pointer-events: none;\n}\n\n.new-entry-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  flex-shrink: 0;\n}\n\n.new-entry-main[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 16px;\n  background: var(--hau-primary);\n  color: #fff;\n  border: none;\n  border-radius: var(--hau-radius-pill) 0 0 var(--hau-radius-pill);\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background var(--hau-transition-fast);\n  box-shadow: 0 4px 14px var(--hau-primary-shadow);\n}\n.new-entry-main[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.new-entry-main[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-strong);\n}\n\n.new-entry-arrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 9px 10px;\n  background: var(--hau-primary-strong);\n  color: #fff;\n  border: none;\n  border-left: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 0 var(--hau-radius-pill) var(--hau-radius-pill) 0;\n  cursor: pointer;\n  transition: background var(--hau-transition-fast);\n}\n.new-entry-arrow[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  transition: transform var(--hau-transition-fast);\n}\n.new-entry-arrow.open[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.new-entry-arrow[_ngcontent-%COMP%]:hover {\n  background: #1e40af;\n}\n\n.new-entry-solo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: var(--hau-primary);\n  color: #fff;\n  border: none;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 14px var(--hau-primary-shadow);\n  transition: background var(--hau-transition-fast);\n  flex-shrink: 0;\n}\n.new-entry-solo[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.new-entry-solo[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-strong);\n}\n\n.new-entry-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-md);\n  box-shadow: var(--hau-shadow-md);\n  z-index: 100;\n  overflow: hidden;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 12px 16px;\n  background: none;\n  border: none;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  cursor: pointer;\n  text-align: left;\n  transition: background var(--hau-transition-fast);\n}\n.dropdown-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--hau-text-dim);\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n.dropdown-item[_ngcontent-%COMP%]    + .dropdown-item[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n}\n\n.tab-bar-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.tab-bar-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.tab-bar-scroll[_ngcontent-%COMP%] {\n  margin: 0 -4px;\n  padding: 0 4px;\n}\n\n.tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: max-content;\n}\n\n.tab-pill[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  background: none;\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.86rem;\n  font-weight: 600;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast), border-color var(--hau-transition-fast);\n}\n.tab-pill[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text);\n}\n.tab-pill.active[_ngcontent-%COMP%] {\n  background: var(--hau-primary);\n  border-color: var(--hau-primary);\n  color: #fff;\n  box-shadow: 0 2px 8px var(--hau-primary-shadow);\n}\n\n.cat-chips-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.cat-chips-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.cat-chips-scroll[_ngcontent-%COMP%] {\n  margin: 0 -4px;\n  padding: 0 4px;\n}\n\n.cat-chips[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: max-content;\n}\n\n.cat-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 13px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast), border-color var(--hau-transition-fast);\n}\n.cat-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--hau-border-hover);\n  color: var(--hau-text);\n}\n.cat-chip.active[_ngcontent-%COMP%] {\n  background: var(--hau-primary-soft);\n  border-color: var(--hau-primary);\n  color: var(--hau-primary);\n}\n.cat-chip.cat-chip--more[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.more-cats-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.more-cats-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 0;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-md);\n  box-shadow: var(--hau-shadow-md);\n  z-index: 60;\n  min-width: 140px;\n  overflow: hidden;\n}\n\n.more-cat-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 10px 14px;\n  background: none;\n  border: none;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  cursor: pointer;\n  text-align: left;\n  transition: background var(--hau-transition-fast);\n}\n.more-cat-item[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n.more-cat-item[_ngcontent-%COMP%]    + .more-cat-item[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n}\n\n.personal-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.filter-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.filter-select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  padding: 7px 28px 7px 12px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.83rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  cursor: pointer;\n  min-width: 110px;\n  transition: border-color var(--hau-transition-fast);\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--hau-primary);\n}\n.filter-select[_ngcontent-%COMP%]:hover {\n  border-color: var(--hau-border-hover);\n}\n\n.select-chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 9px;\n  font-size: 0.78rem;\n  color: var(--hau-text-dim);\n  pointer-events: none;\n}\n\n.filter-icon-btn[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.filter-icon-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n@media (max-width: 479px) {\n  .filter-icon-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n\n.blog-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--hau-text-dim);\n  margin: 0;\n}\n.section-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  margin: 0;\n}\n\n.entry-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 5px;\n}\n\n.tag-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.74rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.tag-chip.tag--blue[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n  color: #2563eb;\n}\n.tag-chip.tag--green[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #15803d;\n}\n.tag-chip.tag--purple[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n.tag-chip.tag--orange[_ngcontent-%COMP%] {\n  background: rgba(234, 88, 12, 0.12);\n  color: #c2410c;\n}\n.tag-chip.tag--teal[_ngcontent-%COMP%] {\n  background: rgba(13, 148, 136, 0.12);\n  color: #0d9488;\n}\n.tag-chip.tag--pink[_ngcontent-%COMP%] {\n  background: rgba(219, 39, 119, 0.1);\n  color: #be185d;\n}\n\n.vcat-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.74rem;\n  font-weight: 700;\n  white-space: nowrap;\n  background: var(--hau-primary-soft);\n  color: var(--hau-primary);\n}\n.vcat-chip.vcat-chip--repair[_ngcontent-%COMP%] {\n  background: rgba(234, 88, 12, 0.1);\n  color: #c2410c;\n}\n.vcat-chip.vcat-chip--service_visit[_ngcontent-%COMP%] {\n  background: rgba(13, 148, 136, 0.12);\n  color: #0d9488;\n}\n.vcat-chip.vcat-chip--trip[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n  color: #2563eb;\n}\n.vcat-chip.vcat-chip--fuel[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #15803d;\n}\n.vcat-chip.vcat-chip--upgrade[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n.vcat-chip.vcat-chip--inspection[_ngcontent-%COMP%] {\n  background: rgba(13, 148, 136, 0.12);\n  color: #0d9488;\n}\n.vcat-chip.vcat-chip--breakdown[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n}\n.vcat-chip.vcat-chip--other[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.1);\n  color: #475569;\n}\n\n.entry-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--hau-text-dim);\n  font-weight: 500;\n}\n\n.entry-more-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: none;\n  border: none;\n  color: var(--hau-text-dim);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast);\n}\n.entry-more-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.entry-more-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text);\n}\n\n.entry-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 36px;\n  right: 4px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-md);\n  box-shadow: var(--hau-shadow-md);\n  z-index: 50;\n  min-width: 148px;\n  overflow: hidden;\n}\n.entry-menu.entry-menu--right[_ngcontent-%COMP%] {\n  top: 32px;\n  right: 0;\n}\n\n.entry-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 10px 14px;\n  background: none;\n  border: none;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  cursor: pointer;\n  text-align: left;\n  transition: background var(--hau-transition-fast);\n}\n.entry-menu-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--hau-text-dim);\n}\n.entry-menu-item[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n.entry-menu-item[_ngcontent-%COMP%]    + .entry-menu-item[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n}\n.entry-menu-item.danger[_ngcontent-%COMP%] {\n  color: var(--hau-danger-fg);\n}\n.entry-menu-item.danger[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--hau-danger-fg);\n}\n\n.pinned-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 14px;\n}\n@media (min-width: 540px) {\n  .pinned-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .pinned-grid[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n}\n\n.pinned-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-xl);\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: var(--hau-shadow-soft);\n  transition: transform var(--hau-transition-fast), box-shadow var(--hau-transition-fast);\n}\n.pinned-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--hau-shadow-md);\n}\n.pinned-card[_ngcontent-%COMP%]   .entry-more-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: rgba(255, 255, 255, 0.85);\n  color: #1e293b;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.pinned-card[_ngcontent-%COMP%]   .entry-more-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.95);\n}\n.pinned-card[_ngcontent-%COMP%]   .entry-menu[_ngcontent-%COMP%] {\n  top: 40px;\n  right: 10px;\n}\n\n.pinned-cover[_ngcontent-%COMP%] {\n  height: 160px;\n  background-size: cover;\n  background-position: center;\n}\n@media (min-width: 768px) {\n  .pinned-cover[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n}\n\n.pinned-body[_ngcontent-%COMP%] {\n  padding: 14px 14px 16px;\n}\n\n.entry-card-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  margin: 4px 0 0;\n  line-height: 1.35;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.entry-list[_ngcontent-%COMP%] {\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-xl);\n  box-shadow: var(--hau-shadow-soft);\n  overflow: hidden;\n}\n\n.entry-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: background var(--hau-transition-fast);\n  position: relative;\n}\n.entry-row[_ngcontent-%COMP%]    + .entry-row[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n}\n.entry-row[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n@media (min-width: 768px) {\n  .entry-row[_ngcontent-%COMP%] {\n    padding: 14px 20px;\n    gap: 14px;\n  }\n}\n\n.entry-row-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.entry-row-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  margin: 3px 0 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.entry-row-cover[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 68px;\n  height: 50px;\n  border-radius: var(--hau-radius-sm);\n}\n@media (min-width: 768px) {\n  .entry-row-cover[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 58px;\n  }\n}\n\n.entry-row-actions[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n\n.vehicle-list[_ngcontent-%COMP%] {\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-xl);\n  box-shadow: var(--hau-shadow-soft);\n  overflow: hidden;\n}\n\n.vehicle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: background var(--hau-transition-fast);\n  position: relative;\n}\n.vehicle-row[_ngcontent-%COMP%]    + .vehicle-row[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n}\n.vehicle-row[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n@media (min-width: 768px) {\n  .vehicle-row[_ngcontent-%COMP%] {\n    gap: 16px;\n    padding: 14px 20px;\n  }\n}\n\n.vehicle-thumb[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 68px;\n  height: 52px;\n  border-radius: var(--hau-radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n@media (min-width: 768px) {\n  .vehicle-thumb[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 60px;\n  }\n}\n\n.thumb-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.thumb-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.vehicle-row-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.vehicle-row-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  margin: 0 0 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.vehicle-row-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.vehicle-row-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 3px;\n  flex-shrink: 0;\n  text-align: right;\n}\n\n.vmeta-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--hau-text-muted);\n  white-space: nowrap;\n}\n\n.vmeta-km[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--hau-text-dim);\n  white-space: nowrap;\n}\n\n.vmeta-price[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--hau-success-fg);\n  white-space: nowrap;\n}\n\n.list-end-note[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 14px;\n  font-size: 0.82rem;\n  color: var(--hau-text-dim);\n  border-top: 1px solid var(--hau-border);\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 48px 24px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-xl);\n  box-shadow: var(--hau-shadow-soft);\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  color: var(--hau-text-dim);\n}\n\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--hau-text-muted);\n  margin: 0;\n}\n\n.empty-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: var(--hau-primary);\n  color: #fff;\n  border: none;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.86rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 12px var(--hau-primary-shadow);\n  transition: background var(--hau-transition-fast);\n}\n.empty-cta[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.empty-cta[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-strong);\n}\n\n.fab-new-entry[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  align-items: center;\n  gap: 6px;\n  padding: 13px 28px;\n  background: var(--hau-primary);\n  color: #fff;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.9rem;\n  font-weight: 700;\n  box-shadow: 0 6px 24px var(--hau-primary-shadow);\n  cursor: pointer;\n  z-index: 40;\n  white-space: nowrap;\n}\n.fab-new-entry[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n@media (max-width: 479px) {\n  .fab-new-entry[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYmxvZy9ibG9nLWxpc3QvYmxvZy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsY0FBQTtBQUVSOztBQUFBO0VBQWEsMkJBQUE7QUFJYjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUtGO0FBSEU7RUFSRjtJQVErQix1QkFBQTtJQUF5QixTQUFBO0VBUXREO0FBQ0Y7QUFSRTtFQVRGO0lBUytCLHVCQUFBO0lBQXlCLFNBQUE7RUFhdEQ7QUFDRjs7QUFWQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQWFGOztBQVZBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBYUY7QUFYRTtFQVBGO0lBTytCLGlCQUFBO0VBZTdCO0FBQ0Y7QUFmRTtFQVJGO0lBUStCLGlCQUFBO0VBbUI3QjtBQUNGOztBQWpCQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBb0JGOztBQWpCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBb0JGOztBQWhCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBbUJGOztBQWhCQTtFQUNFLGFBQUE7QUFtQkY7QUFqQkU7RUFIRjtJQUc4QixhQUFBO0VBcUI1QjtBQUNGOztBQW5CQTtFQUNFLE9BQUE7RUFDQSxZQUFBO0FBc0JGO0FBcEJFO0VBSkY7SUFJOEIsYUFBQTtFQXdCNUI7QUFDRjs7QUF0QkE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUZBQUE7QUF5QkY7QUF2QkU7RUFBeUIsV0FBQTtFQUFhLGtC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YUFBQTtFQXlLNUI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cblxuLmJsb2ctcGFnZSB7IC0tYmFja2dyb3VuZDogdmFyKC0taGF1LWJnKTsgfVxuXG4uYmxvZy1pbm5lciB7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweCAxNnB4IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpICB7IHBhZGRpbmc6IDI4cHggMjRweCA1NnB4OyBnYXA6IDIwcHg7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBwYWRkaW5nOiAzMnB4IDMycHggNjRweDsgZ2FwOiAyMnB4OyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBQYWdlIGhlYWRlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5ibG9nLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTJweDtcbn1cblxuLmJsb2ctdGl0bGUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgIHsgZm9udC1zaXplOiAxLjlyZW07IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBmb250LXNpemU6IDIuMXJlbTsgfVxufVxuXG4uYmxvZy1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgbWFyZ2luOiA0cHggMCAwO1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLy8gw6LClMKAw6LClMKAIFNlYXJjaCAoaGVhZGVyIHBvc2l0aW9uLCBkZXNrdG9wIG9ubHkpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNlYXJjaC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoLXdyYXAtLWhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IGRpc3BsYXk6IGZsZXg7IH1cbn1cblxuLnNlYXJjaC13cmFwLS1pbmxpbmUge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogOHB4IDEycHggOHB4IDM0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtcGlsbCk7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpLCB3aWR0aCB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICAuc2VhcmNoLXdyYXAtLWlubGluZSAmIHsgd2lkdGg6IDEwMCU7IHBhZGRpbmctbGVmdDogMzJweDsgfVxuXG4gICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7IH1cbiAgJjpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IGJvcmRlci1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpOyB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyB3aWR0aDogMjQwcHg7IH1cbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLy8gw6LClMKAw6LClMKAIE5ldyBlbnRyeSBidXR0b25zIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLm5ldy1lbnRyeS13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5uZXctZW50cnktbWFpbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogOXB4IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKSAwIDAgdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggdmFyKC0taGF1LXByaW1hcnktc2hhZG93KTtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMXJlbTsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc3Ryb25nKTsgfVxufVxuXG4ubmV3LWVudHJ5LWFycm93IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA5cHggMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc3Ryb25nKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0taGF1LXJhZGl1cy1waWxsKSB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuICB9XG4gICYub3BlbiBpb24taWNvbiB7IHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICMxZTQwYWY7IH1cbn1cblxuLm5ldy1lbnRyeS1zb2xvIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA5cHggMThweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xuICBmb250LXNpemU6IDAuODhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCB2YXIoLS1oYXUtcHJpbWFyeS1zaGFkb3cpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuICBmbGV4LXNocmluazogMDtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMXJlbTsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc3Ryb25nKTsgfVxufVxuXG4ubmV3LWVudHJ5LWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDhweCk7XG4gIHJpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDE4MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLW1kKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGF1LXNoYWRvdy1tZCk7XG4gIHotaW5kZXg6IDEwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDFyZW07IGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pOyB9XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpOyB9XG4gICYgKyAmIHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBUYWIgYmFyIChQZXJzb25hbCArIGNhciBwaWxscykgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udGFiLWJhci1zY3JvbGwge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgZGlzcGxheTogbm9uZTsgfVxuICBtYXJnaW46IDAgLTRweDtcbiAgcGFkZGluZzogMCA0cHg7XG59XG5cbi50YWItYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi50YWItcGlsbCB7XG4gIHBhZGRpbmc6IDdweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCksIGNvbG9yIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpLFxuICAgICAgICAgICAgICBib3JkZXItY29sb3IgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1ob3Zlci1iZyk7IGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7IH1cblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCB2YXIoLS1oYXUtcHJpbWFyeS1zaGFkb3cpO1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBWZWhpY2xlIGNhdGVnb3J5IGNoaXAgZmlsdGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmNhdC1jaGlwcy1zY3JvbGwge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgZGlzcGxheTogbm9uZTsgfVxuICBtYXJnaW46IDAgLTRweDtcbiAgcGFkZGluZzogMCA0cHg7XG59XG5cbi5jYXQtY2hpcHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLmNhdC1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiA1cHggMTNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCksIGNvbG9yIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpLFxuICAgICAgICAgICAgICBib3JkZXItY29sb3IgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgJjpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0taGF1LWJvcmRlci1ob3Zlcik7IGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7IH1cblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc29mdCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgfVxuXG4gICYuY2F0LWNoaXAtLW1vcmUge1xuICAgIGlvbi1pY29uIHsgZm9udC1zaXplOiAwLjc1cmVtOyB9XG4gIH1cbn1cblxuLm1vcmUtY2F0cy13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubW9yZS1jYXRzLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDZweCk7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbWQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1oYXUtc2hhZG93LW1kKTtcbiAgei1pbmRleDogNjA7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb3JlLWNhdC1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1ob3Zlci1iZyk7IH1cbiAgJiArICYgeyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIFBlcnNvbmFsIHRhYiBmaWx0ZXJzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnBlcnNvbmFsLWZpbHRlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmlsdGVyLXNlbGVjdC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmlsdGVyLXNlbGVjdCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgcGFkZGluZzogN3B4IDI4cHggN3B4IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtcGlsbCk7XG4gIGZvbnQtc2l6ZTogMC44M3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4td2lkdGg6IDExMHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgJjpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IGJvcmRlci1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpOyB9XG4gICY6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWhhdS1ib3JkZXItaG92ZXIpOyB9XG59XG5cbi5zZWxlY3QtY2hldnJvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDlweDtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5maWx0ZXItaWNvbi1idG4ge1xuICBkaXNwbGF5OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4LXNocmluazogMDtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMS4xcmVtOyB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ3OXB4KSB7IGRpc3BsYXk6IGZsZXg7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIFNlY3Rpb24gbGFiZWxzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmJsb2ctc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLnNlY3Rpb24tbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE0ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xuICBtYXJnaW46IDA7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDAuODJyZW07IH1cbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLy8gw6LClMKAw6LClMKAIFRhZyArIGNhdGVnb3J5IGNoaXBzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmVudHJ5LXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50YWctY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xuICBmb250LXNpemU6IDAuNzRyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJi50YWctLWJsdWUgICB7IGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMTApOyAgY29sb3I6ICMyNTYzZWI7IH1cbiAgJi50YWctLWdyZWVuICB7IGJhY2tncm91bmQ6IHJnYmEoMjIsIDE2MywgNzQsIDAuMTIpOyAgY29sb3I6ICMxNTgwM2Q7IH1cbiAgJi50YWctLXB1cnBsZSB7IGJhY2tncm91bmQ6IHJnYmEoMTI0LCA1OCwgMjM3LCAwLjEwKTsgY29sb3I6ICM3YzNhZWQ7IH1cbiAgJi50YWctLW9yYW5nZSB7IGJhY2tncm91bmQ6IHJnYmEoMjM0LCA4OCwgMTIsIDAuMTIpOyAgY29sb3I6ICNjMjQxMGM7IH1cbiAgJi50YWctLXRlYWwgICB7IGJhY2tncm91bmQ6IHJnYmEoMTMsIDE0OCwgMTM2LCAwLjEyKTsgY29sb3I6ICMwZDk0ODg7IH1cbiAgJi50YWctLXBpbmsgICB7IGJhY2tncm91bmQ6IHJnYmEoMjE5LCAzOSwgMTE5LCAwLjEwKTsgY29sb3I6ICNiZTE4NWQ7IH1cbn1cblxuLnZjYXQtY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xuICBmb250LXNpemU6IDAuNzRyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1wcmltYXJ5LXNvZnQpO1xuICBjb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuXG4gICYudmNhdC1jaGlwLS1yZXBhaXIgICAgIHsgYmFja2dyb3VuZDogcmdiYSgyMzQsODgsMTIsMC4xMCk7IGNvbG9yOiAjYzI0MTBjOyB9XG4gICYudmNhdC1jaGlwLS1zZXJ2aWNlX3Zpc2l0IHsgYmFja2dyb3VuZDogcmdiYSgxMywxNDgsMTM2LDAuMTIpOyBjb2xvcjogIzBkOTQ4ODsgfVxuICAmLnZjYXQtY2hpcC0tdHJpcCAgICAgICB7IGJhY2tncm91bmQ6IHJnYmEoMzcsOTksMjM1LDAuMTApOyBjb2xvcjogIzI1NjNlYjsgfVxuICAmLnZjYXQtY2hpcC0tZnVlbCAgICAgICB7IGJhY2tncm91bmQ6IHJnYmEoMjIsMTYzLDc0LDAuMTIpOyBjb2xvcjogIzE1ODAzZDsgfVxuICAmLnZjYXQtY2hpcC0tdXBncmFkZSAgICB7IGJhY2tncm91bmQ6IHJnYmEoMTI0LDU4LDIzNywwLjEwKTsgY29sb3I6ICM3YzNhZWQ7IH1cbiAgJi52Y2F0LWNoaXAtLWluc3BlY3Rpb24geyBiYWNrZ3JvdW5kOiByZ2JhKDEzLDE0OCwxMzYsMC4xMik7IGNvbG9yOiAjMGQ5NDg4OyB9XG4gICYudmNhdC1jaGlwLS1icmVha2Rvd24gIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsMC4xMCk7IGNvbG9yOiAjZGMyNjI2OyB9XG4gICYudmNhdC1jaGlwLS1vdGhlciAgICAgIHsgYmFja2dyb3VuZDogcmdiYSgxMDAsMTE2LDEzOSwwLjEwKTsgY29sb3I6ICM0NzU1Njk7IH1cbn1cblxuLmVudHJ5LW1ldGEge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vLyDDosKUwoDDosKUwoAgQ29udGV4dCBtZW51IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmVudHJ5LW1vcmUtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KSwgY29sb3IgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDFyZW07IH1cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1ob3Zlci1iZyk7IGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7IH1cbn1cblxuLmVudHJ5LW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzZweDtcbiAgcmlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1tZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhhdS1zaGFkb3ctbWQpO1xuICB6LWluZGV4OiA1MDtcbiAgbWluLXdpZHRoOiAxNDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmLmVudHJ5LW1lbnUtLXJpZ2h0IHsgdG9wOiAzMnB4OyByaWdodDogMDsgfVxufVxuXG4uZW50cnktbWVudS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDAuOTVyZW07IGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pOyB9XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpOyB9XG4gICYgKyAmIHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpOyB9XG4gICYuZGFuZ2VyIHsgY29sb3I6IHZhcigtLWhhdS1kYW5nZXItZmcpOyBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1oYXUtZGFuZ2VyLWZnKTsgfSB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBQaW5uZWQgY2FyZHMgKHBlcnNvbmFsKSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5waW5uZWQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDE0cHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU0MHB4KSAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHsgZ2FwOiAxNnB4OyB9XG59XG5cbi5waW5uZWQtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy14bCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogdmFyKC0taGF1LXNoYWRvdy1zb2Z0KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpLCBib3gtc2hhZG93IHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuXG4gICY6aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IGJveC1zaGFkb3c6IHZhcigtLWhhdS1zaGFkb3ctbWQpOyB9XG5cbiAgLmVudHJ5LW1vcmUtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44NSk7XG4gICAgY29sb3I6ICMxZTI5M2I7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC45NSk7IH1cbiAgfVxuXG4gIC5lbnRyeS1tZW51IHsgdG9wOiA0MHB4OyByaWdodDogMTBweDsgfVxufVxuXG4ucGlubmVkLWNvdmVyIHtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBoZWlnaHQ6IDE4MHB4OyB9XG59XG5cbi5waW5uZWQtYm9keSB7IHBhZGRpbmc6IDE0cHggMTRweCAxNnB4OyB9XG5cbi5lbnRyeS1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyDDosKUwoDDosKUwoAgUGVyc29uYWwgZW50cnkgbGlzdCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5lbnRyeS1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy14bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhhdS1zaGFkb3ctc29mdCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5lbnRyeS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJiArICYgeyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7IH1cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1ob3Zlci1iZyk7IH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgcGFkZGluZzogMTRweCAyMHB4OyBnYXA6IDE0cHg7IH1cbn1cblxuLmVudHJ5LXJvdy1pbmZvIHsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XG5cbi5lbnRyeS1yb3ctdGl0bGUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgbWFyZ2luOiAzcHggMCAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmVudHJ5LXJvdy1jb3ZlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNjhweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXNtKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgd2lkdGg6IDgwcHg7IGhlaWdodDogNThweDsgfVxufVxuXG4uZW50cnktcm93LWFjdGlvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4vLyDDosKUwoDDosKUwoAgVmVoaWNsZSBqb3VybmFsIGxpc3Qgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udmVoaWNsZS1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy14bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhhdS1zaGFkb3ctc29mdCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi52ZWhpY2xlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmICsgJiB7IGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTsgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBnYXA6IDE2cHg7IHBhZGRpbmc6IDE0cHggMjBweDsgfVxufVxuXG4udmVoaWNsZS10aHVtYiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNjhweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXNtKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDYwcHg7IH1cbn1cblxuLnRodW1iLWljb24ge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLnRodW1iLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZlaGljbGUtcm93LWluZm8ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi52ZWhpY2xlLXJvdy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBtYXJnaW46IDAgMCA2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udmVoaWNsZS1yb3ctY2hpcHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNHB4O1xufVxuXG4udmVoaWNsZS1yb3ctbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZ2FwOiAzcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnZtZXRhLWRhdGUge1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi52bWV0YS1rbSB7XG4gIGZvbnQtc2l6ZTogMC43NnJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi52bWV0YS1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWhhdS1zdWNjZXNzLWZnKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmxpc3QtZW5kLW5vdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbn1cblxuLy8gw6LClMKAw6LClMKAIEVtcHR5IHN0YXRlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiA0OHB4IDI0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1oYXUtc2hhZG93LXNvZnQpO1xufVxuXG4uZW1wdHktaWNvbiB7IGZvbnQtc2l6ZTogMi40cmVtOyBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTsgfVxuLmVtcHR5LXRleHQgeyBmb250LXNpemU6IDAuOXJlbTsgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTsgbWFyZ2luOiAwOyB9XG5cbi5lbXB0eS1jdGEge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDlweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtcGlsbCk7XG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHZhcigtLWhhdS1wcmltYXJ5LXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDFyZW07IH1cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1wcmltYXJ5LXN0cm9uZyk7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIE1vYmlsZSBmbG9hdGluZyBuZXcgZW50cnkgKHZlaGljbGUgam91cm5hbCkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZmFiLW5ldy1lbnRyeSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDEzcHggMjhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDI0cHggdmFyKC0taGF1LXByaW1hcnktc2hhZG93KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA0MDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMS4xcmVtOyB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ3OXB4KSB7IGRpc3BsYXk6IGZsZXg7IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 50001
/*!****************************************************!*\
  !*** ./src/app/features/blog/models/blog.model.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TAG_COLORS: () => (/* binding */ TAG_COLORS),
/* harmony export */   TAG_COLOR_CYCLE: () => (/* binding */ TAG_COLOR_CYCLE),
/* harmony export */   VEHICLE_CATEGORY_CHIPS_PRIMARY: () => (/* binding */ VEHICLE_CATEGORY_CHIPS_PRIMARY),
/* harmony export */   VEHICLE_ENTRY_CATEGORIES: () => (/* binding */ VEHICLE_ENTRY_CATEGORIES),
/* harmony export */   VEHICLE_ENTRY_CATEGORY_LABELS: () => (/* binding */ VEHICLE_ENTRY_CATEGORY_LABELS),
/* harmony export */   assignTagColor: () => (/* binding */ assignTagColor),
/* harmony export */   carGradient: () => (/* binding */ carGradient)
/* harmony export */ });
const TAG_COLORS = {
  blue: {
    bg: 'rgba(37, 99, 235, 0.10)',
    fg: '#2563eb'
  },
  green: {
    bg: 'rgba(22, 163, 74, 0.12)',
    fg: '#15803d'
  },
  purple: {
    bg: 'rgba(124, 58, 237, 0.10)',
    fg: '#7c3aed'
  },
  orange: {
    bg: 'rgba(234, 88, 12, 0.12)',
    fg: '#c2410c'
  },
  teal: {
    bg: 'rgba(13, 148, 136, 0.12)',
    fg: '#0d9488'
  },
  pink: {
    bg: 'rgba(219, 39, 119, 0.10)',
    fg: '#be185d'
  }
};
const VEHICLE_ENTRY_CATEGORIES = [{
  value: 'REPAIR',
  label: 'Repair'
}, {
  value: 'SERVICE_VISIT',
  label: 'Service visit'
}, {
  value: 'TRIP',
  label: 'Trip'
}, {
  value: 'FUEL',
  label: 'Fuel'
}, {
  value: 'UPGRADE',
  label: 'Upgrade'
}, {
  value: 'INSPECTION',
  label: 'Inspection'
}, {
  value: 'BREAKDOWN',
  label: 'Breakdown'
}, {
  value: 'OTHER',
  label: 'Other'
}];
const VEHICLE_ENTRY_CATEGORY_LABELS = {
  REPAIR: 'Repair',
  SERVICE_VISIT: 'Service visit',
  TRIP: 'Trip',
  FUEL: 'Fuel',
  UPGRADE: 'Upgrade',
  INSPECTION: 'Inspection',
  BREAKDOWN: 'Breakdown',
  OTHER: 'Other'
};
// Categories shown inline in the chip filter; the rest appear under "More"
const VEHICLE_CATEGORY_CHIPS_PRIMARY = ['REPAIR', 'SERVICE_VISIT', 'TRIP', 'FUEL', 'UPGRADE', 'INSPECTION', 'BREAKDOWN'];
const TAG_COLOR_CYCLE = ['blue', 'purple', 'green', 'orange', 'teal', 'pink'];
function assignTagColor(label) {
  const hash = label.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return TAG_COLOR_CYCLE[hash % TAG_COLOR_CYCLE.length];
}
// Deterministic gradient per car id (no actual photo in mock/early phase)
const CAR_GRADIENTS = ['linear-gradient(135deg, #1e3a5f 0%, #4a90d9 100%)', 'linear-gradient(135deg, #2d1b69 0%, #8b5cf6 100%)', 'linear-gradient(135deg, #1a3a2a 0%, #22c55e 100%)', 'linear-gradient(135deg, #7c2d12 0%, #f97316 100%)', 'linear-gradient(135deg, #0f172a 0%, #475569 100%)', 'linear-gradient(135deg, #450a0a 0%, #ef4444 100%)'];
function carGradient(carId) {
  return CAR_GRADIENTS[carId % CAR_GRADIENTS.length];
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_blog_blog-list_blog-list_component_ts.js.map