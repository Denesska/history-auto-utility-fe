"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_blog_blog-entry-write_blog-entry-write_component_ts"],{

/***/ 94959
/*!******************************************************************************!*\
  !*** ./src/app/features/blog/blog-entry-write/blog-entry-write.component.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogEntryWriteComponent: () => (/* binding */ BlogEntryWriteComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var _hau_features_blog_models_blog_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hau/features/blog/models/blog.model */ 50001);
/* harmony import */ var _hau_features_blog_components_tiptap_editor_tiptap_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hau/features/blog/components/tiptap-editor/tiptap-editor.component */ 90248);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular/standalone */ 4059);
/* harmony import */ var _hau_features_blog_state_blog_facade__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hau/features/blog/state/blog.facade */ 74371);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);
















const _c0 = ["photoInput"];
const _c1 = ["coverInput"];
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.id;
const _forTrack2 = ($index, $item) => $item.value;
function BlogEntryWriteComponent_Conditional_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function BlogEntryWriteComponent_Conditional_13_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_13_Conditional_19_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.removeCover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r1.coverImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}
function BlogEntryWriteComponent_Conditional_13_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_13_Conditional_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.triggerCoverInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Upload cover image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function BlogEntryWriteComponent_Conditional_13_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_13_For_30_Template_button_click_2_listener() {
      const tag_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.removeTag(tag_r6.label));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinterpolate1"]("tag-chip tag--", tag_r6.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", tag_r6.label, " ");
  }
}
function BlogEntryWriteComponent_Conditional_13_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Draft saved");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function BlogEntryWriteComponent_Conditional_13_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-spinner", 38);
  }
}
function BlogEntryWriteComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function BlogEntryWriteComponent_Conditional_13_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.publish());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 15)(2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 15)(8, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](13, BlogEntryWriteComponent_Conditional_13_Conditional_13_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 15)(15, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Cover image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](19, BlogEntryWriteComponent_Conditional_13_Conditional_19_Template, 4, 1, "div", 24)(20, BlogEntryWriteComponent_Conditional_13_Conditional_20_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 15)(22, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "app-tiptap-editor", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 15)(26, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](29, BlogEntryWriteComponent_Conditional_13_For_30_Template, 4, 4, "span", 28, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("input", function BlogEntryWriteComponent_Conditional_13_Template_input_input_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onTagInputChange($event));
    })("keydown", function BlogEntryWriteComponent_Conditional_13_Template_input_keydown_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onTagInputKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_13_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.addTagFromInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](33, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "Press Enter or comma to add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 33)(37, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](38, BlogEntryWriteComponent_Conditional_13_Conditional_38_Template, 3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 35)(40, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_13_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.saveDraft());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "Save draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](43, BlogEntryWriteComponent_Conditional_13_Conditional_43_Template, 1, 0, "ion-spinner", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, " Publish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.form.controls.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("invalid", ctx_r1.isInvalid(ctx_r1.form.controls.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.form.controls.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.isInvalid(ctx_r1.form.controls.title) ? 13 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.coverImageUrl ? 19 : 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.form.controls.contentJson);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx_r1.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx_r1.tagInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.draftSaved ? 38 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.isSaving ? 43 : -1);
  }
}
function BlogEntryWriteComponent_Conditional_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.form.controls.title.value);
  }
}
function BlogEntryWriteComponent_Conditional_14_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "img", 88);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}
function BlogEntryWriteComponent_Conditional_14_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-icon", 89);
  }
}
function BlogEntryWriteComponent_Conditional_14_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ion-icon", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function BlogEntryWriteComponent_Conditional_14_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_14_For_11_Template_button_click_0_listener() {
      const car_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.selectCar(car_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](2, BlogEntryWriteComponent_Conditional_14_For_11_Conditional_2_Template, 1, 1, "img", 88)(3, BlogEntryWriteComponent_Conditional_14_For_11_Conditional_3_Template, 1, 0, "ion-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](4, BlogEntryWriteComponent_Conditional_14_For_11_Conditional_4_Template, 2, 0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 91)(6, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const car_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("selected", (ctx_r1.selectedCar == null ? null : ctx_r1.selectedCar.id) === car_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r1.carGradient(car_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"]((tmp_15_0 = ctx_r1.carPhoto(car_r9)) ? 2 : 3, tmp_15_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"]((ctx_r1.selectedCar == null ? null : ctx_r1.selectedCar.id) === car_r9.id ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.carLabel(car_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](car_r9.license_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 9, car_r9.current_mileage), " km");
  }
}
function BlogEntryWriteComponent_Conditional_14_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function BlogEntryWriteComponent_Conditional_14_For_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", cat_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](cat_r10.label);
  }
}
function BlogEntryWriteComponent_Conditional_14_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_14_Conditional_36_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.removeCover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r1.coverImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}
function BlogEntryWriteComponent_Conditional_14_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_14_Conditional_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.triggerCoverInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Upload cover image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function BlogEntryWriteComponent_Conditional_14_Conditional_55_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_14_Conditional_55_For_2_Template_button_click_2_listener() {
      const $index_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13).$index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.removePhoto($index_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const photo_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", photo_r15.url, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}
function BlogEntryWriteComponent_Conditional_14_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](1, BlogEntryWriteComponent_Conditional_14_Conditional_55_For_2_Template, 4, 1, "div", 96, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx_r1.photos);
  }
}
function BlogEntryWriteComponent_Conditional_14_For_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_14_For_81_Template_button_click_2_listener() {
      const tag_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.removeTag(tag_r17.label));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinterpolate1"]("tag-chip tag--", tag_r17.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", tag_r17.label, " ");
  }
}
function BlogEntryWriteComponent_Conditional_14_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Saved");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function BlogEntryWriteComponent_Conditional_14_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-spinner", 38);
  }
}
function BlogEntryWriteComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function BlogEntryWriteComponent_Conditional_14_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.publish());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 47)(2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_14_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.prevMobileStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](5, BlogEntryWriteComponent_Conditional_14_Conditional_5_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 51)(7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Select vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](10, BlogEntryWriteComponent_Conditional_14_For_11_Template, 13, 11, "button", 53, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 54)(13, "div", 55)(14, "div", 56)(15, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](20, BlogEntryWriteComponent_Conditional_14_Conditional_20_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 59)(22, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 61)(25, "select", 62)(26, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Select category");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](28, BlogEntryWriteComponent_Conditional_14_For_29_Template, 2, 2, "option", 63, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 15)(32, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "Cover image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](36, BlogEntryWriteComponent_Conditional_14_Conditional_36_Template, 4, 1, "div", 24)(37, BlogEntryWriteComponent_Conditional_14_Conditional_37_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 65)(39, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40, "Notes / Story");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](41, "app-tiptap-editor", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 15)(43, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "Photos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "input", 67, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function BlogEntryWriteComponent_Conditional_14_Template_input_change_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onPhotosSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_14_Template_div_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.triggerPhotoInput());
    })("dragover", function BlogEntryWriteComponent_Conditional_14_Template_div_dragover_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onDragOver($event));
    })("dragleave", function BlogEntryWriteComponent_Conditional_14_Template_div_dragleave_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onDragLeave());
    })("drop", function BlogEntryWriteComponent_Conditional_14_Template_div_drop_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](50, "ion-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "Upload photos");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "PNG, JPG up to 10 MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](55, BlogEntryWriteComponent_Conditional_14_Conditional_55_Template, 3, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "div", 73)(57, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_14_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_14_Template_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.nextMobileStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](61, "ion-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "div", 77)(63, "div", 78)(64, "div", 79)(65, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](69, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, "Mileage (km)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](72, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](74, "Price / Cost (RON)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](75, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "div", 79)(77, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78, "Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](80, BlogEntryWriteComponent_Conditional_14_For_81_Template, 4, 4, "span", 28, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("input", function BlogEntryWriteComponent_Conditional_14_Template_input_input_82_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onTagInputChange($event));
    })("keydown", function BlogEntryWriteComponent_Conditional_14_Template_input_keydown_82_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onTagInputKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](83, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_14_Template_button_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.addTagFromInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](84, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86, "Press Enter or comma to add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "div", 84)(88, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](89, BlogEntryWriteComponent_Conditional_14_Conditional_89_Template, 3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "div", 35)(91, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_14_Template_button_click_91_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](92, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](93, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_14_Template_button_click_93_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.saveDraft());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](94, "Save draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](95, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](96, BlogEntryWriteComponent_Conditional_14_Conditional_96_Template, 1, 0, "ion-spinner", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](97, " Publish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("step-1", ctx_r1.mobileStep === 1)("step-2", ctx_r1.mobileStep === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.form.controls.title.value ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx_r1.cars);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("invalid", ctx_r1.isInvalid(ctx_r1.form.controls.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.form.controls.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.isInvalid(ctx_r1.form.controls.title) ? 20 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.form.controls.vehicleCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx_r1.VEHICLE_ENTRY_CATEGORIES);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.coverImageUrl ? 36 : 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.form.controls.contentJson);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("dragging", ctx_r1.isDragging);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.photos.length > 0 ? 55 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.form.controls.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.form.controls.km);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.form.controls.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx_r1.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx_r1.tagInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.draftSaved ? 89 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.isSaving ? 96 : -1);
  }
}
function BlogEntryWriteComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.showCancelConfirm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_17_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_17_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.showCancelConfirm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h2", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Unsaved changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "You have unsaved changes. Would you like to save before leaving?");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 104)(9, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_17_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.confirmSaveDraft());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Save draft ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_17_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.confirmDiscard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, " Discard & leave ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Conditional_17_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.showCancelConfirm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, " Keep editing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
class BlogEntryWriteComponent {
  get isVehicle() {
    return this.activeCategory === 'VEHICLE';
  }
  constructor(route, navCtrl, blogFacade, carService, blogService) {
    this.route = route;
    this.navCtrl = navCtrl;
    this.blogFacade = blogFacade;
    this.carService = carService;
    this.blogService = blogService;
    this.VEHICLE_ENTRY_CATEGORIES = _hau_features_blog_models_blog_model__WEBPACK_IMPORTED_MODULE_9__.VEHICLE_ENTRY_CATEGORIES;
    this.isEditMode = false;
    this.editEntryId = null;
    this.activeCategory = 'PERSONAL';
    this.tags = [];
    this.tagInput = '';
    this.draftSaved = false;
    this.draftTimer = null;
    // Cars from API
    this.cars = [];
    this.selectedCar = null;
    // Cover image
    this.coverImageUrl = null;
    this.coverImageFile = null;
    this.isUploadingCover = false;
    // Photos — stored locally until publish/save-draft
    this.photos = [];
    this.isDragging = false;
    // Save state
    this.isSaving = false;
    // Cancel confirmation overlay
    this.showCancelConfirm = false;
    // Mobile 2-step flow (vehicle journal only)
    this.mobileStep = 1;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
      }),
      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this._todayIso(), {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
      }),
      contentJson: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null),
      vehicleCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null),
      km: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null),
      price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null)
    });
    this.carGradient = _hau_features_blog_models_blog_model__WEBPACK_IMPORTED_MODULE_9__.carGradient;
    (0,ionicons__WEBPACK_IMPORTED_MODULE_3__.a)({
      arrowBackOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.arrowBackOutline,
      arrowForwardOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.arrowForwardOutline,
      closeOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.closeOutline,
      checkmarkCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.checkmarkCircleOutline,
      addOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.addOutline,
      listOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.listOutline,
      linkOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.linkOutline,
      attachOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.attachOutline,
      checkmarkOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.checkmarkOutline,
      imagesOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.imagesOutline,
      chevronDownOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.chevronDownOutline,
      carOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.carOutline,
      banOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.banOutline,
      cloudUploadOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_8__.cloudUploadOutline
    });
  }
  ngOnInit() {
    this.carService.carControllerGetAllCars().subscribe(cars => {
      this.cars = cars;
    });
    const id = this.route.snapshot.paramMap.get('id');
    const categoryParam = this.route.snapshot.queryParamMap.get('category');
    const carIdParam = this.route.snapshot.queryParamMap.get('carId');
    if (id) {
      this.isEditMode = true;
      this.editEntryId = Number(id);
      this.blogFacade.loadEntry(this.editEntryId);
      this.blogFacade.entry$.subscribe(entry => {
        if (!entry || entry.id !== this.editEntryId) return;
        this.activeCategory = entry.category;
        this.tags = entry.tags.map(t => ({
          label: t.label,
          color: t.color
        }));
        this.photos = entry.images.map(img => ({
          url: img.url,
          id: img.id
        }));
        if (entry.cover_image_url) {
          this.coverImageUrl = entry.cover_image_url.startsWith('http') ? entry.cover_image_url : `${_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.imageBaseUrl}${entry.cover_image_url}`;
        }
        this.form.patchValue({
          title: entry.title,
          date: entry.date.split('T')[0],
          contentJson: entry.content_json ?? null,
          vehicleCategory: entry.vehicle_category ?? null,
          km: entry.km ?? null,
          price: entry.price ?? null
        });
        if (entry.car_id != null) {
          this.carService.carControllerGetAllCars().subscribe(cars => {
            this.selectedCar = cars.find(c => c.id === entry.car_id) ?? null;
          });
        }
      });
    } else {
      if (categoryParam) this.activeCategory = categoryParam;
      if (carIdParam) {
        this.carService.carControllerGetAllCars().subscribe(cars => {
          this.selectedCar = cars.find(c => c.id === Number(carIdParam)) ?? null;
        });
      }
    }
    this.form.valueChanges.subscribe(() => this._triggerDraftSave());
  }
  setCategory(cat) {
    this.activeCategory = cat;
    this.mobileStep = 1;
  }
  // ── Mobile 2-step navigation ──────────────────────────────────────
  nextMobileStep() {
    if (!this.form.controls.title.value.trim()) {
      this.form.controls.title.markAsTouched();
      return;
    }
    this.mobileStep = 2;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  prevMobileStep() {
    this.mobileStep = 1;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  // ── Car selection ────────────────────────────────────────────────
  selectCar(car) {
    this.selectedCar = car;
  }
  carLabel(car) {
    return `${car.make} ${car.model}`;
  }
  carPhoto(car) {
    const photo = car.photos?.find(p => p.is_default) ?? car.photos?.[0];
    return photo?.url ?? null;
  }
  // ── Tag management ───────────────────────────────────────────────
  onTagInputKeydown(event) {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      this._addTag();
    }
  }
  onTagInputChange(event) {
    this.tagInput = event.target.value;
  }
  addTagFromInput() {
    this._addTag();
  }
  removeTag(label) {
    this.tags = this.tags.filter(t => t.label !== label);
  }
  _addTag() {
    const label = this.tagInput.trim().replace(/,/g, '');
    if (!label || this.tags.some(t => t.label.toLowerCase() === label.toLowerCase())) {
      this.tagInput = '';
      return;
    }
    this.tags.push({
      label,
      color: (0,_hau_features_blog_models_blog_model__WEBPACK_IMPORTED_MODULE_9__.assignTagColor)(label)
    });
    this.tagInput = '';
  }
  // ── Photo selection (local only — upload happens on save) ─────────
  triggerPhotoInput() {
    this.photoInputRef?.nativeElement.click();
  }
  onPhotosSelected(event) {
    const files = event.target.files;
    if (!files) return;
    Array.from(files).forEach(f => this._addPhoto(f));
    event.target.value = '';
  }
  onDragOver(event) {
    event.preventDefault();
    this.isDragging = true;
  }
  onDragLeave() {
    this.isDragging = false;
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (!files) return;
    Array.from(files).filter(f => f.type.startsWith('image/')).forEach(f => this._addPhoto(f));
  }
  removePhoto(index) {
    const entry = this.photos[index];
    if (entry?.file) URL.revokeObjectURL(entry.url);
    this.photos.splice(index, 1);
  }
  _addPhoto(file) {
    if (!file.type.match(/\/(jpg|jpeg|png|gif|webp)$/)) return;
    if (file.size > 10 * 1024 * 1024) return;
    this.photos.push({
      url: URL.createObjectURL(file),
      file
    });
  }
  // ── Cover image ──────────────────────────────────────────────────
  triggerCoverInput() {
    this.coverInputRef?.nativeElement.click();
  }
  onCoverSelected(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = '';
    this.coverImageFile = file;
    this.coverImageUrl = URL.createObjectURL(file);
  }
  removeCover() {
    if (this.coverImageUrl?.startsWith('blob:')) URL.revokeObjectURL(this.coverImageUrl);
    this.coverImageUrl = null;
    this.coverImageFile = null;
  }
  // ── Draft auto-save indicator ─────────────────────────────────────
  _triggerDraftSave() {
    if (this.draftTimer) clearTimeout(this.draftTimer);
    this.draftSaved = false;
    this.draftTimer = setTimeout(() => {
      this.draftSaved = true;
    }, 1200);
  }
  // ── Cancel with confirmation ──────────────────────────────────────
  cancel() {
    const hasChanges = this.form.dirty || this.photos.some(p => !!p.file);
    if (hasChanges) {
      this.showCancelConfirm = true;
    } else {
      this._navigateBack();
    }
  }
  confirmDiscard() {
    this.showCancelConfirm = false;
    this._navigateBack();
  }
  confirmSaveDraft() {
    this.showCancelConfirm = false;
    this._submit('DRAFT');
  }
  _navigateBack() {
    if (this.isEditMode && this.editEntryId != null) {
      void this.navCtrl.navigateBack(`/main/blog/${this.editEntryId}`, {
        animated: false
      });
    } else {
      void this.navCtrl.navigateBack('/main/blog', {
        animated: false
      });
    }
  }
  // ── Save ──────────────────────────────────────────────────────────
  publish() {
    this._submit('PUBLISHED');
  }
  saveDraft() {
    this._submit('DRAFT');
  }
  _submit(status) {
    if (this.form.controls.title.invalid) {
      this.form.controls.title.markAsTouched();
      return;
    }
    if (this.isVehicle && !this.selectedCar) return;
    if (this.isSaving) return;
    this.isSaving = true;
    const newPhotos = this.photos.filter(p => !!p.file);
    const existingUrls = this.photos.filter(p => !p.file).map(p => p.url);
    const coverUpload$ = this.coverImageFile ? this.blogService.uploadImage(this.coverImageFile) : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
    const photosUpload$ = newPhotos.length > 0 ? (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(newPhotos.map(p => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this._resizeImage(p.file)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(resized => this.blogService.uploadImage(resized))))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)({
      cover: coverUpload$,
      photos: photosUpload$
    }).subscribe({
      next: ({
        cover,
        photos: uploadedPhotos
      }) => {
        const images = [...existingUrls, ...uploadedPhotos.map(r => r.url)];
        const resolvedCoverUrl = cover ? cover.url.startsWith('http') ? cover.url : `${_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.imageBaseUrl}${cover.url}` : this.coverImageFile ? null : this.coverImageUrl;
        this._persist(images, resolvedCoverUrl, status);
      },
      error: () => {
        this.isSaving = false;
      }
    });
  }
  _persist(images, coverUrl, status) {
    const val = this.form.getRawValue();
    const tags = this.tags.map(t => ({
      label: t.label,
      color: t.color
    }));
    const basePayload = {
      category: this.activeCategory,
      title: val.title,
      date: val.date,
      content_json: val.contentJson ?? undefined,
      status,
      cover_image_url: coverUrl ?? undefined,
      tags,
      images,
      ...(this.isVehicle && this.selectedCar ? {
        car_id: this.selectedCar.id,
        vehicle_category: val.vehicleCategory ?? undefined,
        km: val.km ?? undefined,
        price: val.price ?? undefined
      } : {})
    };
    const save$ = this.isEditMode && this.editEntryId != null ? this.blogFacade.updateEntry(this.editEntryId, basePayload) : this.blogFacade.createEntry({
      ...basePayload,
      is_pinned: false
    });
    save$.subscribe({
      next: () => {
        this.isSaving = false;
        this._navigateBack();
      },
      error: () => {
        this.isSaving = false;
      }
    });
  }
  isInvalid(control) {
    return control.invalid && control.touched;
  }
  _resizeImage(file, maxPx = 1920, quality = 0.82) {
    return new Promise(resolve => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        const ratio = Math.min(maxPx / img.width, maxPx / img.height, 1);
        const w = Math.round(img.width * ratio);
        const h = Math.round(img.height * ratio);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        canvas.toBlob(blob => resolve(new File([blob], file.name.replace(/\.[^.]+$/, '.jpg'), {
          type: 'image/jpeg'
        })), 'image/jpeg', quality);
      };
      img.src = url;
    });
  }
  _todayIso() {
    return new Date().toISOString().split('T')[0];
  }
  static {
    this.ɵfac = function BlogEntryWriteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogEntryWriteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_15__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_hau_features_blog_state_blog_facade__WEBPACK_IMPORTED_MODULE_16__.BlogFacade), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_17__.CarService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_17__.BlogService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: BlogEntryWriteComponent,
      selectors: [["app-blog-entry-write"]],
      viewQuery: function BlogEntryWriteComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5)(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.photoInputRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.coverInputRef = _t.first);
        }
      },
      decls: 18,
      vars: 12,
      consts: [["coverInput", ""], ["photoInput", ""], [1, "write-page"], [1, "write-inner"], [1, "write-header"], ["type", "button", 1, "cancel-btn", 3, "click"], ["name", "close-outline"], [1, "write-heading"], [1, "category-toggle"], ["type", "button", 1, "cat-btn", 3, "click"], [1, "write-form", 3, "formGroup"], [1, "vj-form", 3, "step-1", "step-2", "formGroup"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", "hidden", "", 3, "change"], [1, "confirm-overlay"], [1, "write-form", 3, "ngSubmit", "formGroup"], [1, "step-group"], ["for", "p-date", 1, "form-label"], [1, "req"], ["id", "p-date", "type", "date", 1, "form-input", 3, "formControl"], ["for", "p-title", 1, "form-label"], ["id", "p-title", "type", "text", "placeholder", "Give your entry a title", 1, "form-input", 3, "formControl"], [1, "field-error"], [1, "form-label"], [1, "opt"], [1, "cover-preview"], ["type", "button", 1, "cover-upload-btn"], ["placeholder", "Write your story here\u2026", 3, "formControl"], [1, "tags-field"], [3, "class"], ["type", "text", "placeholder", "Add tag", 1, "tag-input", 3, "input", "keydown", "value"], ["type", "button", 1, "tag-add-btn", 3, "click"], ["name", "add-outline"], [1, "field-hint"], [1, "write-footer"], [1, "draft-status"], [1, "footer-btns"], ["type", "button", 1, "btn-draft", 3, "click", "disabled"], ["type", "submit", 1, "btn-publish", 3, "disabled"], ["name", "crescent", 1, "btn-spinner"], ["alt", "Cover", 1, "cover-preview-img", 3, "src"], ["type", "button", 1, "cover-remove-btn", 3, "click"], ["type", "button", 1, "cover-upload-btn", 3, "click"], ["name", "cloud-upload-outline"], ["type", "button", 1, "tag-remove", 3, "click"], ["name", "checkmark-circle-outline", 1, "draft-icon"], [1, "draft-text"], [1, "vj-form", 3, "ngSubmit", "formGroup"], [1, "step2-topbar"], ["type", "button", 1, "step2-back-btn", 3, "click"], ["name", "arrow-back-outline"], [1, "step2-title"], [1, "vj-vehicle"], [1, "car-picker-grid"], ["type", "button", 1, "car-card", 3, "selected"], [1, "vj-main"], [1, "title-cat-row"], [1, "step-group", "title-group"], ["for", "vj-title", 1, "form-label"], ["id", "vj-title", "type", "text", "placeholder", "Brief description of the event", 1, "form-input", 3, "formControl"], [1, "step-group", "cat-group"], ["for", "vj-cat", 1, "form-label"], [1, "select-wrap"], ["id", "vj-cat", 1, "form-select", 3, "formControl"], [3, "value"], ["name", "chevron-down-outline", 1, "select-chevron"], [1, "step-group", "content-group"], ["placeholder", "Describe what happened, what you noticed, what was replaced\u2026", 3, "formControl"], ["type", "file", "accept", "image/jpeg,image/png,image/gif,image/webp", "multiple", "", "hidden", "", 3, "change"], [1, "upload-area", 3, "click", "dragover", "dragleave", "drop"], ["name", "images-outline", 1, "upload-icon"], [1, "upload-label"], [1, "upload-hint"], [1, "photo-grid"], [1, "step1-nav"], ["type", "button", 1, "btn-cancel", "step1-cancel", 3, "click"], ["type", "button", 1, "btn-next", 3, "click"], ["name", "arrow-forward-outline"], [1, "vj-meta"], [1, "meta-grid"], [1, "meta-col", "step-group"], ["type", "date", 1, "form-input", 3, "formControl"], [1, "form-label", "top-gap"], ["type", "number", "placeholder", "e.g. 184 200", 1, "form-input", 3, "formControl"], ["type", "number", "placeholder", "Optional", 1, "form-input", 3, "formControl"], [1, "vj-footer", "write-footer"], ["type", "button", 1, "btn-cancel", 3, "click", "disabled"], ["type", "button", 1, "car-card", 3, "click"], [1, "car-card-cover"], ["alt", "", 1, "car-cover-img", 3, "src"], ["name", "car-outline", 1, "car-cover-icon"], [1, "car-check"], [1, "car-card-body"], [1, "car-card-name"], [1, "car-card-plate"], [1, "car-card-km"], ["name", "checkmark-outline"], [1, "photo-thumb"], ["alt", "", 3, "src"], ["type", "button", 1, "photo-remove", 3, "click"], [1, "confirm-overlay", 3, "click"], [1, "confirm-card", 3, "click"], ["type", "button", 1, "confirm-close", 3, "click"], [1, "confirm-title"], [1, "confirm-body"], [1, "confirm-actions"], ["type", "button", 1, "confirm-btn", "confirm-draft", 3, "click"], ["type", "button", 1, "confirm-btn", "confirm-discard", 3, "click"], ["type", "button", 1, "confirm-keep", 3, "click"]],
      template: function BlogEntryWriteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-content", 2)(1, "div", 3)(2, "div", 4)(3, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Template_button_click_3_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "ion-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "h1", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 8)(9, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Template_button_click_9_listener() {
            return ctx.setCategory("PERSONAL");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Personal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BlogEntryWriteComponent_Template_button_click_11_listener() {
            return ctx.setCategory("VEHICLE");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, " Vehicle Journal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](13, BlogEntryWriteComponent_Conditional_13_Template, 45, 13, "form", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](14, BlogEntryWriteComponent_Conditional_14_Template, 98, 26, "form", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "input", 12, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function BlogEntryWriteComponent_Template_input_change_15_listener($event) {
            return ctx.onCoverSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](17, BlogEntryWriteComponent_Conditional_17_Template, 15, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("vj-step1", ctx.isVehicle && ctx.mobileStep === 1)("vj-step2", ctx.isVehicle && ctx.mobileStep === 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.form.controls.title.value || (ctx.isEditMode ? "Edit Entry" : "New Entry"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx.activeCategory === "PERSONAL");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx.activeCategory === "VEHICLE");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](!ctx.isVehicle ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx.isVehicle ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx.showCancelConfirm ? 17 : -1);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _hau_features_blog_components_tiptap_editor_tiptap_editor_component__WEBPACK_IMPORTED_MODULE_10__.TiptapEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.cover-upload-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border: 1.5px dashed var(--hau-border);\n  border-radius: var(--hau-radius-md, 10px);\n  background: var(--hau-bg);\n  color: var(--hau-text-muted);\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  justify-content: center;\n  transition: border-color 0.15s, color 0.15s;\n}\n.cover-upload-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.cover-upload-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n  color: var(--ion-color-primary);\n}\n\n.cover-preview[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--hau-radius-md, 10px);\n  overflow: hidden;\n  max-height: 200px;\n}\n@media (min-width: 768px) {\n  .cover-preview[_ngcontent-%COMP%] {\n    max-height: 260px;\n  }\n}\n\n.cover-preview-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.cover-remove-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.55);\n  border: none;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.cover-remove-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.write-page[_ngcontent-%COMP%] {\n  --background: var(--hau-bg);\n}\n\n.write-inner[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 20px 16px 56px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n@media (min-width: 768px) {\n  .write-inner[_ngcontent-%COMP%] {\n    padding: 28px 24px 64px;\n    gap: 20px;\n  }\n}\n@media (min-width: 1024px) {\n  .write-inner[_ngcontent-%COMP%] {\n    padding: 32px 32px 72px;\n    gap: 22px;\n  }\n}\n\n@media (max-width: 767px) {\n  .write-inner.vj-step1[_ngcontent-%COMP%]   .write-header[_ngcontent-%COMP%], .write-inner.vj-step1[_ngcontent-%COMP%]   .category-toggle[_ngcontent-%COMP%], \n   .write-inner.vj-step2[_ngcontent-%COMP%]   .write-header[_ngcontent-%COMP%], \n   .write-inner.vj-step2[_ngcontent-%COMP%]   .category-toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.write-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 13px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast);\n}\n.cancel-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n  color: var(--hau-danger-fg);\n}\n\n.write-heading[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--hau-text);\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (min-width: 768px) {\n  .write-heading[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n\n.category-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1.5px solid var(--hau-border-field);\n  border-radius: var(--hau-radius-md);\n  overflow: hidden;\n  align-self: flex-start;\n}\n\n.cat-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 9px 22px;\n  background: none;\n  border: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast);\n}\n.cat-btn[_ngcontent-%COMP%]    + .cat-btn[_ngcontent-%COMP%] {\n  border-left: 1.5px solid var(--hau-border-field);\n}\n.cat-btn.active[_ngcontent-%COMP%] {\n  background: var(--hau-primary);\n  color: #fff;\n}\n.cat-btn[_ngcontent-%COMP%]:not(.active):hover {\n  background: var(--hau-hover-bg);\n}\n\n.write-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n@media (min-width: 768px) {\n  .write-form[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n}\n\n.vj-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .vj-form[_ngcontent-%COMP%] {\n    gap: 24px;\n  }\n}\n\n.step2-topbar[_ngcontent-%COMP%] {\n  order: 0;\n}\n\n.vj-vehicle[_ngcontent-%COMP%] {\n  order: 1;\n}\n\n.vj-main[_ngcontent-%COMP%] {\n  order: 2;\n}\n\n.vj-meta[_ngcontent-%COMP%] {\n  order: 3;\n}\n\n.vj-footer[_ngcontent-%COMP%] {\n  order: 4;\n}\n\n.step2-topbar[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: 12px;\n  padding-bottom: 4px;\n}\n\n.step2-back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 13px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast);\n}\n.step2-back-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.step2-back-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text);\n}\n\n.step2-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n\n.step1-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 767px) {\n  .vj-form.step-1[_ngcontent-%COMP%]   .step2-topbar[_ngcontent-%COMP%], \n   .vj-form.step-1[_ngcontent-%COMP%]   .vj-vehicle[_ngcontent-%COMP%], \n   .vj-form.step-1[_ngcontent-%COMP%]   .vj-meta[_ngcontent-%COMP%], \n   .vj-form.step-1[_ngcontent-%COMP%]   .vj-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .vj-form.step-1[_ngcontent-%COMP%]   .step1-nav[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .vj-form.step-2[_ngcontent-%COMP%]   .vj-main[_ngcontent-%COMP%], .vj-form.step-2[_ngcontent-%COMP%]   .vj-vehicle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .vj-form.step-2[_ngcontent-%COMP%]   .step2-topbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.vj-vehicle[_ngcontent-%COMP%] {\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-xl);\n  box-shadow: var(--hau-shadow-soft);\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .vj-vehicle[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n\n.vj-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.title-cat-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 14px;\n}\n@media (min-width: 640px) {\n  .title-cat-row[_ngcontent-%COMP%] {\n    grid-template-columns: 2fr 1fr;\n    align-items: start;\n  }\n}\n\n.title-group[_ngcontent-%COMP%] {  }\n\n.cat-group[_ngcontent-%COMP%] {  }\n\n.content-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.meta-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n@media (min-width: 768px) {\n  .meta-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    align-items: start;\n  }\n}\n\n.meta-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.top-gap[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.step-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--hau-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n.req[_ngcontent-%COMP%] {\n  color: var(--hau-danger-fg);\n  margin-left: 2px;\n}\n\n.opt[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  color: var(--hau-text-dim);\n}\n\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  background: var(--hau-surface);\n  border: 1.5px solid var(--hau-border-field);\n  border-radius: var(--hau-radius-md);\n  font-size: 0.9rem;\n  color: var(--hau-text);\n  transition: border-color var(--hau-transition-fast);\n  box-sizing: border-box;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--hau-text-dim);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--hau-primary);\n}\n.form-input.invalid[_ngcontent-%COMP%] {\n  border-color: var(--hau-danger-fg);\n}\n.form-input[type=date][_ngcontent-%COMP%] {\n  cursor: pointer;\n  color-scheme: light;\n}\nbody.dark[_ngcontent-%COMP%]   .form-input[type=date][_ngcontent-%COMP%] {\n  color-scheme: dark;\n}\n\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--hau-danger-fg);\n  font-weight: 600;\n}\n\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--hau-text-dim);\n}\n\n.select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n  padding: 10px 34px 10px 14px;\n  background: var(--hau-surface);\n  border: 1.5px solid var(--hau-border-field);\n  border-radius: var(--hau-radius-md);\n  font-size: 0.9rem;\n  color: var(--hau-text);\n  cursor: pointer;\n  transition: border-color var(--hau-transition-fast);\n  box-sizing: border-box;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--hau-primary);\n}\n\n.select-chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.85rem;\n  color: var(--hau-text-dim);\n  pointer-events: none;\n}\n\n.car-picker-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-top: 10px;\n}\n@media (min-width: 640px) {\n  .car-picker-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 900px) {\n  .car-picker-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n.car-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: var(--hau-surface);\n  border: 2px solid var(--hau-border);\n  border-radius: var(--hau-radius-lg);\n  overflow: hidden;\n  cursor: pointer;\n  text-align: left;\n  transition: border-color var(--hau-transition-fast), box-shadow var(--hau-transition-fast);\n}\n.car-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--hau-primary);\n}\n.car-card.selected[_ngcontent-%COMP%] {\n  border-color: var(--hau-primary);\n  box-shadow: 0 0 0 3px var(--hau-primary-soft);\n}\n\n.car-card-cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (min-width: 768px) {\n  .car-card-cover[_ngcontent-%COMP%] {\n    height: 96px;\n  }\n}\n\n.car-cover-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.car-cover-img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.car-check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 22px;\n  height: 22px;\n  background: var(--hau-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.4);\n}\n.car-check[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #fff;\n}\n\n.car-card-body[_ngcontent-%COMP%] {\n  padding: 10px 12px 12px;\n}\n\n.car-card-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  margin-bottom: 2px;\n}\n\n.car-card-plate[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--hau-text-muted);\n}\n\n.car-card-km[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: var(--hau-text-dim);\n  margin-top: 2px;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1.5px solid var(--hau-border-field);\n  border-radius: var(--hau-radius-md);\n  overflow: hidden;\n  transition: border-color var(--hau-transition-fast);\n}\n.content-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--hau-primary);\n}\n\n.content-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  padding: 7px 10px;\n  background: var(--hau-bg-soft);\n  border-bottom: 1px solid var(--hau-border);\n}\n\n.tb-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 28px;\n  height: 28px;\n  padding: 0 5px;\n  background: none;\n  border: none;\n  border-radius: var(--hau-radius-sm);\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast);\n}\n.tb-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.tb-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text);\n}\n.tb-btn.tb-bold[_ngcontent-%COMP%] {\n  font-family: serif;\n  font-weight: 900;\n}\n.tb-btn.tb-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.tb-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 18px;\n  background: var(--hau-border);\n  margin: 0 3px;\n  flex-shrink: 0;\n}\n\n.content-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px;\n  background: var(--hau-surface);\n  border: none;\n  font-size: 0.92rem;\n  line-height: 1.65;\n  color: var(--hau-text);\n  resize: vertical;\n  min-height: 280px;\n  box-sizing: border-box;\n}\n.content-textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--hau-text-dim);\n}\n.content-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n@media (min-width: 768px) {\n  .content-textarea[_ngcontent-%COMP%] {\n    min-height: 340px;\n  }\n}\n@media (min-width: 1024px) {\n  .content-textarea[_ngcontent-%COMP%] {\n    min-height: 400px;\n  }\n}\n\n.upload-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 12px;\n  background: var(--hau-surface);\n  border: 1.5px dashed var(--hau-border-field);\n  border-radius: var(--hau-radius-lg);\n  cursor: pointer;\n  min-height: 100px;\n  transition: border-color var(--hau-transition-fast), background var(--hau-transition-fast);\n}\n.upload-area[_ngcontent-%COMP%]:hover, .upload-area.dragging[_ngcontent-%COMP%] {\n  border-color: var(--hau-primary);\n  background: var(--hau-primary-soft);\n}\n\n.upload-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: var(--hau-text-dim);\n}\n\n.upload-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--hau-primary);\n}\n\n.upload-hint[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: var(--hau-text-dim);\n}\n\n.photo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n@media (max-width: 480px) {\n  .photo-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n.photo-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  border-radius: var(--hau-radius-md);\n  overflow: hidden;\n  background: var(--hau-bg-soft);\n}\n.photo-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.photo-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  width: 22px;\n  height: 22px;\n  background: rgba(0, 0, 0, 0.55);\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity var(--hau-transition-fast);\n  color: #fff;\n}\n.photo-remove[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.photo-thumb[_ngcontent-%COMP%]:hover   .photo-remove[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.tags-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 10px;\n  background: var(--hau-surface);\n  border: 1.5px solid var(--hau-border-field);\n  border-radius: var(--hau-radius-md);\n  min-height: 44px;\n  transition: border-color var(--hau-transition-fast);\n}\n.tags-field[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--hau-primary);\n}\n\n.tag-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 6px 3px 9px;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.tag-chip.tag--blue[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n  color: #2563eb;\n}\n.tag-chip.tag--green[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #15803d;\n}\n.tag-chip.tag--purple[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n.tag-chip.tag--orange[_ngcontent-%COMP%] {\n  background: rgba(234, 88, 12, 0.12);\n  color: #c2410c;\n}\n.tag-chip.tag--teal[_ngcontent-%COMP%] {\n  background: rgba(13, 148, 136, 0.12);\n  color: #0d9488;\n}\n.tag-chip.tag--pink[_ngcontent-%COMP%] {\n  background: rgba(219, 39, 119, 0.1);\n  color: #be185d;\n}\n\n.tag-remove[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 16px;\n  height: 16px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  opacity: 0.65;\n  transition: opacity var(--hau-transition-fast);\n}\n.tag-remove[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.tag-remove[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.tag-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 70px;\n  background: none;\n  border: none;\n  font-size: 0.88rem;\n  color: var(--hau-text);\n  padding: 2px 0;\n}\n.tag-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--hau-text-dim);\n}\n.tag-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.tag-add-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  background: var(--hau-primary-soft);\n  border: none;\n  border-radius: 50%;\n  color: var(--hau-primary);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background var(--hau-transition-fast);\n}\n.tag-add-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.tag-add-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary);\n  color: #fff;\n}\n\n.write-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.draft-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-height: 20px;\n  flex: 1;\n}\n\n.draft-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--hau-success-fg);\n}\n\n.draft-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--hau-text-dim);\n}\n\n.footer-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  background: none;\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast), border-color var(--hau-transition-fast);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--hau-hover-bg);\n  border-color: var(--hau-danger-fg);\n  color: var(--hau-danger-fg);\n}\n.btn-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btn-draft[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  background: none;\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast);\n}\n.btn-draft[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text);\n}\n.btn-draft[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btn-publish[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 24px;\n  background: var(--hau-primary);\n  border: none;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: 0 4px 14px var(--hau-primary-shadow);\n  transition: background var(--hau-transition-fast);\n}\n.btn-publish[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--hau-primary-strong);\n}\n.btn-publish[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n\n.step1-nav[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 4px;\n}\n\n.step1-cancel[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.btn-next[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 28px;\n  background: var(--hau-primary);\n  border: none;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: 0 4px 14px var(--hau-primary-shadow);\n  flex: 1;\n  justify-content: center;\n  transition: background var(--hau-transition-fast);\n}\n.btn-next[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-next[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-strong);\n}\n\n.confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 16px;\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n\n.confirm-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-xl);\n  padding: 28px 24px 20px;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n\n.confirm-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 28px;\n  height: 28px;\n  background: var(--hau-bg-soft);\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--hau-text-muted);\n  transition: background var(--hau-transition-fast);\n}\n.confirm-close[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.confirm-close[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n\n.confirm-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--hau-text);\n  margin: 0 0 8px;\n}\n\n.confirm-body[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--hau-text-muted);\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n\n.confirm-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 11px 16px;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast);\n}\n.confirm-btn.confirm-draft[_ngcontent-%COMP%] {\n  background: var(--hau-primary);\n  border: none;\n  color: #fff;\n  box-shadow: 0 4px 14px var(--hau-primary-shadow);\n}\n.confirm-btn.confirm-draft[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-strong);\n}\n.confirm-btn.confirm-discard[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--hau-border);\n  color: var(--hau-danger-fg);\n}\n.confirm-btn.confirm-discard[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.07);\n  border-color: var(--hau-danger-fg);\n}\n\n.confirm-keep[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 9px;\n  background: none;\n  border: none;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--hau-text-dim);\n  cursor: pointer;\n  text-align: center;\n  transition: color var(--hau-transition-fast);\n}\n.confirm-keep[_ngcontent-%COMP%]:hover {\n  color: var(--hau-text-muted);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYmxvZy9ibG9nLWVudHJ5LXdyaXRlL2Jsb2ctZW50cnktd3JpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxjQUFBO0FBRVI7O0FBQ0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0FBRUY7QUFBRTtFQUFXLGlCQUFBO0FBR2I7QUFGRTtFQUFVLHNDQUFBO0VBQXdDLCtCQUFBO0FBTXBEOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFNRjtBQUpFO0VBTkY7SUFNOEIsaUJBQUE7RUFRNUI7QUFDRjs7QUFOQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBU0Y7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFTRjtBQVJFO0VBQVcsZUFBQTtBQVdiOztBQVJBO0VBQWMsMkJBQUE7QUFZZDs7QUFWQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQWFGO0FBWEU7RUFSRjtJQVErQix1QkFBQTtJQUF5QixTQUFBO0VBZ0J0RDtBQUNGO0FBaEJFO0VBVEY7SUFTK0IsdUJBQUE7SUFBeUIsU0FBQTtFQXFCdEQ7QUFDRjs7QUFsQkE7RUFHSTs7O0lBQWtDLGFBQUE7RUFzQnBDO0FBQ0Y7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O0FBeU1aIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuXG4vLyDDosKUwoDDosKUwoAgQ292ZXIgaW1hZ2Ugw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY292ZXItdXBsb2FkLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXI6IDEuNXB4IGRhc2hlZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1tZCwgMTBweCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1iZyk7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cywgY29sb3IgMC4xNXM7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDEuMXJlbTsgfVxuICAmOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IH1cbn1cblxuLmNvdmVyLXByZXZpZXcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbWQsIDEwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgbWF4LWhlaWdodDogMjYwcHg7IH1cbn1cblxuLmNvdmVyLXByZXZpZXctaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY292ZXItcmVtb3ZlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNTUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMXJlbTsgfVxufVxuXG4ud3JpdGUtcGFnZSB7IC0tYmFja2dyb3VuZDogdmFyKC0taGF1LWJnKTsgfVxuXG4ud3JpdGUtaW5uZXIge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHggMTZweCA1NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE4cHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSAgeyBwYWRkaW5nOiAyOHB4IDI0cHggNjRweDsgZ2FwOiAyMHB4OyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHsgcGFkZGluZzogMzJweCAzMnB4IDcycHg7IGdhcDogMjJweDsgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgSGlkZSBoZWFkZXIgKyBjYXRlZ29yeSB0b2dnbGUgb24gbW9iaWxlIHZlaGljbGUgam91cm5hbCAoYm90aCBzdGVwcykgw6LClMKAXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLndyaXRlLWlubmVyLnZqLXN0ZXAxLFxuICAud3JpdGUtaW5uZXIudmotc3RlcDIge1xuICAgIC53cml0ZS1oZWFkZXIsIC5jYXRlZ29yeS10b2dnbGUgeyBkaXNwbGF5OiBub25lOyB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEhlYWRlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi53cml0ZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG59XG5cbi5jYW5jZWwtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiA3cHggMTNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpLCBjb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC45NXJlbTsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTsgY29sb3I6IHZhcigtLWhhdS1kYW5nZXItZmcpOyB9XG59XG5cbi53cml0ZS1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBDYXRlZ29yeSB0b2dnbGUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY2F0ZWdvcnktdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyLWZpZWxkKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1tZCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5jYXQtYnRuIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogOXB4IDIycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KSwgY29sb3IgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgJiArICYgeyBib3JkZXItbGVmdDogMS41cHggc29saWQgdmFyKC0taGF1LWJvcmRlci1maWVsZCk7IH1cbiAgJi5hY3RpdmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeSk7IGNvbG9yOiAjZmZmOyB9XG4gICY6bm90KC5hY3RpdmUpOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTsgfVxufVxuXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcbi8vIFBFUlNPTkFMIEZPUk1cbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuLndyaXRlLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE4cHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IGdhcDogMjBweDsgfVxufVxuXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcbi8vIFZFSElDTEUgSk9VUk5BTCBGT1JNXG4vLyBEZXNrdG9wOiBmbGV4IGNvbHVtbiB3aXRoIGV4cGxpY2l0IENTUyBvcmRlclxuLy8gTW9iaWxlOiAyLXN0ZXAgY29udHJvbGxlZCB2aWEgLnN0ZXAtMSAvIC5zdGVwLTIgY2xhc3Nlc1xuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXG4udmotZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZ2FwOiAyNHB4OyB9XG59XG5cbi8vIERlc2t0b3Agc2VjdGlvbiBvcmRlclxuLnN0ZXAyLXRvcGJhciB7IG9yZGVyOiAwOyB9XG4udmotdmVoaWNsZSAgIHsgb3JkZXI6IDE7IH1cbi52ai1tYWluICAgICAgeyBvcmRlcjogMjsgfVxuLnZqLW1ldGEgICAgICB7IG9yZGVyOiAzOyB9XG4udmotZm9vdGVyICAgIHsgb3JkZXI6IDQ7IH1cblxuLy8gw6LClMKAw6LClMKAIFN0ZXAtMiBjb21wYWN0IHRvcGJhciAobW9iaWxlIG9ubHksIHN0ZXAtMiBvbmx5KSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zdGVwMi10b3BiYXIge1xuICBkaXNwbGF5OiBub25lOyAvLyBoaWRkZW4gZXZlcnl3aGVyZSBieSBkZWZhdWx0XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLnN0ZXAyLWJhY2stYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiA3cHggMTNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpLCBjb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC45cmVtOyB9XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpOyBjb2xvcjogdmFyKC0taGF1LXRleHQpOyB9XG59XG5cbi5zdGVwMi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZsZXg6IDE7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBNb2JpbGUgMi1zdGVwIGJlaGF2aW9yIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnN0ZXAxLW5hdiB7IGRpc3BsYXk6IG5vbmU7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC8vIFNURVAgMTogc2hvdyB2ai1tYWluICsgTmV4dCBidXR0b24gb25seVxuICAudmotZm9ybS5zdGVwLTEge1xuICAgIC5zdGVwMi10b3BiYXIsXG4gICAgLnZqLXZlaGljbGUsXG4gICAgLnZqLW1ldGEsXG4gICAgLnZqLWZvb3RlciB7IGRpc3BsYXk6IG5vbmU7IH1cblxuICAgIC5zdGVwMS1uYXYgeyBkaXNwbGF5OiBmbGV4OyB9XG4gIH1cblxuICAvLyBTVEVQIDI6IHNob3cgdG9wYmFyICsgbWV0YSArIGZvb3RlciAoaGlkZSB2ai1tYWluICsgdmVoaWNsZSBzZWxlY3RvcilcbiAgLnZqLWZvcm0uc3RlcC0yIHtcbiAgICAudmotbWFpbiwgLnZqLXZlaGljbGUgeyBkaXNwbGF5OiBub25lOyB9XG4gICAgLnN0ZXAyLXRvcGJhciB7IGRpc3BsYXk6IGZsZXg7IH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgVmVoaWNsZSBzZWxlY3RvciBzZWN0aW9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnZqLXZlaGljbGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXhsKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGF1LXNoYWRvdy1zb2Z0KTtcbiAgcGFkZGluZzogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgcGFkZGluZzogMjRweDsgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgVGl0bGUgKyBDYXRlZ29yeSByb3cgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udmotbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLnRpdGxlLWNhdC1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ2FwOiAxNHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIH1cbn1cblxuLnRpdGxlLWdyb3VwIHsgLyogaGFuZGxlZCBieSBncmlkICovIH1cbi5jYXQtZ3JvdXAgICB7IC8qIG5hcnJvd2VyIGNvbHVtbiAqLyB9XG5cbi5jb250ZW50LWdyb3VwIHsgZmxleDogMTsgfVxuXG4vLyDDosKUwoDDosKUwoAgTWV0YWRhdGEgc2VjdGlvbiAoMiBjb2x1bW5zOiBkYXRlL2ttL3ByaWNlICsgdGFncykgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubWV0YS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMTZweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgfVxufVxuXG4ubWV0YS1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cblxuLnRvcC1nYXAgeyBtYXJnaW4tdG9wOiAxMnB4OyB9XG5cbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuLy8gU0hBUkVEIEZPUk0gRUxFTUVOVFNcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuXG4uc3RlcC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogN3B4O1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbn1cblxuLnJlcSAgeyBjb2xvcjogdmFyKC0taGF1LWRhbmdlci1mZyk7IG1hcmdpbi1sZWZ0OiAycHg7IH1cbi5vcHQgIHsgZm9udC13ZWlnaHQ6IDQwMDsgdGV4dC10cmFuc2Zvcm06IG5vbmU7IGxldHRlci1zcGFjaW5nOiAwOyBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTsgfVxuXG4uZm9ybS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyLWZpZWxkKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1tZCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTsgfVxuICAmOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7IH1cbiAgJi5pbnZhbGlkIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1oYXUtZGFuZ2VyLWZnKTsgfVxuICAmW3R5cGU9J2RhdGUnXSB7IGN1cnNvcjogcG9pbnRlcjsgY29sb3Itc2NoZW1lOiBsaWdodDsgYm9keS5kYXJrICYgeyBjb2xvci1zY2hlbWU6IGRhcms7IH0gfVxufVxuXG4uZmllbGQtZXJyb3Ige1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtZGFuZ2VyLWZnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZpZWxkLWhpbnQge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xufVxuXG4vLyDDosKUwoDDosKUwoAgU2VsZWN0IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNlbGVjdC13cmFwIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5mb3JtLXNlbGVjdCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMzRweCAxMHB4IDE0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyLWZpZWxkKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1tZCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7IH1cbn1cblxuLnNlbGVjdC1jaGV2cm9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBDYXIgcGlja2VyIGdyaWQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY2FyLXBpY2tlci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkgIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7IH1cbn1cblxuLmNhci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1sZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpLCBib3gtc2hhZG93IHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuXG4gICY6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTsgfVxuICAmLnNlbGVjdGVkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0taGF1LXByaW1hcnktc29mdCk7XG4gIH1cbn1cblxuLmNhci1jYXJkLWNvdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBoZWlnaHQ6IDk2cHg7IH1cbn1cblxuLmNhci1jb3Zlci1pY29uIHsgZm9udC1zaXplOiAycmVtOyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XG5cbi5jYXItY292ZXItaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jYXItY2hlY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogOHB4O1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjQpO1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAwLjg1cmVtOyBjb2xvcjogI2ZmZjsgfVxufVxuXG4uY2FyLWNhcmQtYm9keSB7IHBhZGRpbmc6IDEwcHggMTJweCAxMnB4OyB9XG4uY2FyLWNhcmQtbmFtZSB7IGZvbnQtc2l6ZTogMC44OHJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHZhcigtLWhhdS10ZXh0KTsgbWFyZ2luLWJvdHRvbTogMnB4OyB9XG4uY2FyLWNhcmQtcGxhdGUgeyBmb250LXNpemU6IDAuNzVyZW07IGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7IH1cbi5jYXItY2FyZC1rbSB7IGZvbnQtc2l6ZTogMC43NHJlbTsgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7IG1hcmdpbi10b3A6IDJweDsgfVxuXG4vLyDDosKUwoDDosKUwoAgQ29udGVudCBlZGl0b3Igw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY29udGVudC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyLWZpZWxkKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1tZCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICAmOmZvY3VzLXdpdGhpbiB7IGJvcmRlci1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpOyB9XG59XG5cbi5jb250ZW50LXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJweDtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1iZy1zb2Z0KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xufVxuXG4udGItYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4td2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1zbSk7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpLCBjb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC45NXJlbTsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTsgY29sb3I6IHZhcigtLWhhdS10ZXh0KTsgfVxuICAmLnRiLWJvbGQgICB7IGZvbnQtZmFtaWx5OiBzZXJpZjsgZm9udC13ZWlnaHQ6IDkwMDsgfVxuICAmLnRiLWl0YWxpYyB7IGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxufVxuXG4udGItc2VwIHtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgbWFyZ2luOiAwIDNweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5jb250ZW50LXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC45MnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDI4MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7IH1cbiAgJjpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpICB7IG1pbi1oZWlnaHQ6IDM0MHB4OyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHsgbWluLWhlaWdodDogNDAwcHg7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIFVwbG9hZCBhcmVhIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnVwbG9hZC1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiAyNHB4IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgdmFyKC0taGF1LWJvcmRlci1maWVsZCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbGcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCksIGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgJjpob3ZlciwgJi5kcmFnZ2luZyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc29mdCk7XG4gIH1cbn1cblxuLnVwbG9hZC1pY29uICB7IGZvbnQtc2l6ZTogMS42cmVtOyBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTsgfVxuLnVwbG9hZC1sYWJlbCB7IGZvbnQtc2l6ZTogMC44NXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTsgfVxuLnVwbG9hZC1oaW50ICB7IGZvbnQtc2l6ZTogMC43NHJlbTsgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7IH1cblxuLy8gw6LClMKAw6LClMKAIFBob3RvIHRodW1ibmFpbHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucGhvdG8tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogOHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyB9XG59XG5cbi5waG90by10aHVtYiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLW1kKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LWJnLXNvZnQpO1xuXG4gIGltZyB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IG9iamVjdC1maXQ6IGNvdmVyOyBkaXNwbGF5OiBibG9jazsgfVxufVxuXG4ucGhvdG8tcmVtb3ZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgcmlnaHQ6IDRweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG4gIGNvbG9yOiAjZmZmO1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAwLjhyZW07IH1cbn1cblxuLnBob3RvLXRodW1iOmhvdmVyIC5waG90by1yZW1vdmUgeyBvcGFjaXR5OiAxOyB9XG5cbi8vIMOiwpTCgMOiwpTCgCBUYWdzIGZpZWxkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnRhZ3MtZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXItZmllbGQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLW1kKTtcbiAgbWluLWhlaWdodDogNDRweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuXG4gICY6Zm9jdXMtd2l0aGluIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7IH1cbn1cblxuLnRhZy1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiAzcHggNnB4IDNweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtcGlsbCk7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAmLnRhZy0tYmx1ZSAgIHsgYmFja2dyb3VuZDogcmdiYSgzNywgOTksIDIzNSwgMC4xMCk7ICBjb2xvcjogIzI1NjNlYjsgfVxuICAmLnRhZy0tZ3JlZW4gIHsgYmFja2dyb3VuZDogcmdiYSgyMiwgMTYzLCA3NCwgMC4xMik7ICBjb2xvcjogIzE1ODAzZDsgfVxuICAmLnRhZy0tcHVycGxlIHsgYmFja2dyb3VuZDogcmdiYSgxMjQsIDU4LCAyMzcsIDAuMTApOyBjb2xvcjogIzdjM2FlZDsgfVxuICAmLnRhZy0tb3JhbmdlIHsgYmFja2dyb3VuZDogcmdiYSgyMzQsIDg4LCAxMiwgMC4xMik7ICBjb2xvcjogI2MyNDEwYzsgfVxuICAmLnRhZy0tdGVhbCAgIHsgYmFja2dyb3VuZDogcmdiYSgxMywgMTQ4LCAxMzYsIDAuMTIpOyBjb2xvcjogIzBkOTQ4ODsgfVxuICAmLnRhZy0tcGluayAgIHsgYmFja2dyb3VuZDogcmdiYSgyMTksIDM5LCAxMTksIDAuMTApOyBjb2xvcjogI2JlMTg1ZDsgfVxufVxuXG4udGFnLXJlbW92ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xuICBvcGFjaXR5OiAwLjY1O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAwLjc1cmVtOyB9XG4gICY6aG92ZXIgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi50YWctaW5wdXQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBwYWRkaW5nOiAycHggMDtcblxuICAmOjpwbGFjZWhvbGRlciB7IGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pOyB9XG4gICY6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9XG59XG5cbi50YWctYWRkLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeS1zb2Z0KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDAuODVyZW07IH1cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1wcmltYXJ5KTsgY29sb3I6ICNmZmY7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEZvb3RlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi53cml0ZS1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmRyYWZ0LXN0YXR1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBmbGV4OiAxO1xufVxuXG4uZHJhZnQtaWNvbiB7IGZvbnQtc2l6ZTogMXJlbTsgY29sb3I6IHZhcigtLWhhdS1zdWNjZXNzLWZnKTsgfVxuLmRyYWZ0LXRleHQgeyBmb250LXNpemU6IDAuOHJlbTsgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7IH1cblxuLmZvb3Rlci1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xuICBmb250LXNpemU6IDAuODhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KSwgY29sb3IgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCksIGJvcmRlci1jb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1oYXUtZGFuZ2VyLWZnKTsgY29sb3I6IHZhcigtLWhhdS1kYW5nZXItZmcpOyB9XG4gICY6ZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbn1cblxuLmJ0bi1kcmFmdCB7XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtcGlsbCk7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpLCBjb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTsgY29sb3I6IHZhcigtLWhhdS10ZXh0KTsgfVxuICAmOmRpc2FibGVkIHsgb3BhY2l0eTogMC41OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG59XG5cbi5idG4tcHVibGlzaCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogMTBweCAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHZhcigtLWhhdS1wcmltYXJ5LXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1wcmltYXJ5LXN0cm9uZyk7IH1cbiAgJjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNjU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IGJveC1zaGFkb3c6IG5vbmU7IH1cbn1cblxuLmJ0bi1zcGlubmVyIHsgd2lkdGg6IDE0cHg7IGhlaWdodDogMTRweDsgfVxuXG4vLyDDosKUwoDDosKUwoAgTW9iaWxlIHN0ZXAgMSBDYW5jZWwgKyBOZXh0IGJ1dHRvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc3RlcDEtbmF2IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5zdGVwMS1jYW5jZWwge1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ0bi1uZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiAxMnB4IDI4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCB2YXIoLS1oYXUtcHJpbWFyeS1zaGFkb3cpO1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMXJlbTsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc3Ryb25nKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgQ2FuY2VsIGNvbmZpcm1hdGlvbiBvdmVybGF5IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmNvbmZpcm0tb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xufVxuXG4uY29uZmlybS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXhsKTtcbiAgcGFkZGluZzogMjhweCAyNHB4IDIwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5jb25maXJtLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYmctc29mdCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAwLjlyZW07IH1cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1ob3Zlci1iZyk7IH1cbn1cblxuLmNvbmZpcm0tdGl0bGUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgbWFyZ2luOiAwIDAgOHB4O1xufVxuXG4uY29uZmlybS1ib2R5IHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG59XG5cbi5jb25maXJtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5jb25maXJtLWJ0biB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDExcHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCksIGNvbG9yIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuXG4gICYuY29uZmlybS1kcmFmdCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnkpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHZhcigtLWhhdS1wcmltYXJ5LXNoYWRvdyk7XG5cbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc3Ryb25nKTsgfVxuICB9XG5cbiAgJi5jb25maXJtLWRpc2NhcmQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gICAgY29sb3I6IHZhcigtLWhhdS1kYW5nZXItZmcpO1xuXG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMDcpOyBib3JkZXItY29sb3I6IHZhcigtLWhhdS1kYW5nZXItZmcpOyB9XG4gIH1cbn1cblxuLmNvbmZpcm0ta2VlcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOXB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICAmOmhvdmVyIHsgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTsgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 90248
/*!***********************************************************************************!*\
  !*** ./src/app/features/blog/components/tiptap-editor/tiptap-editor.component.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TiptapEditorComponent: () => (/* binding */ TiptapEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tiptap/core */ 87959);
/* harmony import */ var _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tiptap/starter-kit */ 38910);
/* harmony import */ var _tiptap_extension_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tiptap/extension-image */ 95667);
/* harmony import */ var _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tiptap/extension-link */ 88634);
/* harmony import */ var _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tiptap/extension-placeholder */ 68507);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);













const _c0 = ["editorContainer"];
const _c1 = ["imageInput"];
const _c2 = () => ({
  level: 2
});
const _c3 = () => ({
  level: 3
});
function TiptapEditorComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ion-spinner", 17);
  }
}
function TiptapEditorComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ion-icon", 18);
  }
}
class TiptapEditorComponent {
  constructor(blogService, zone) {
    this.blogService = blogService;
    this.zone = zone;
    this.placeholder = 'Write your story here…';
    this.pendingValue = null;
    this._settingValue = false;
    this.isUploadingImage = false;
    this.onChange = () => {};
    this.onTouched = () => {};
    (0,ionicons__WEBPACK_IMPORTED_MODULE_3__.a)({
      listOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__.listOutline,
      listCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__.listCircleOutline,
      linkOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__.linkOutline,
      imageOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__.imageOutline
    });
  }
  ngAfterViewInit() {
    this.editor = new _tiptap_core__WEBPACK_IMPORTED_MODULE_5__.Editor({
      element: this.editorContainer.nativeElement,
      extensions: [_tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_6__["default"], _tiptap_extension_image__WEBPACK_IMPORTED_MODULE_7__["default"].configure({
        allowBase64: false
      }), _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_8__["default"].configure({
        openOnClick: false
      }), _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_9__["default"].configure({
        placeholder: this.placeholder
      })],
      onUpdate: ({
        editor
      }) => {
        if (this._settingValue) return;
        this.zone.run(() => this.onChange(editor.getJSON()));
      },
      onBlur: () => {
        this.zone.run(() => this.onTouched());
      }
    });
    if (this.pendingValue) {
      this._settingValue = true;
      this.editor.commands.setContent(this.pendingValue);
      this._settingValue = false;
      this.pendingValue = null;
    }
  }
  ngOnDestroy() {
    this.editor?.destroy();
  }
  // ── ControlValueAccessor ────────────────────────────────────────────
  writeValue(value) {
    if (this.editor) {
      this._settingValue = true;
      try {
        if (value) {
          this.editor.commands.setContent(value);
        } else {
          this.editor.commands.clearContent();
        }
      } finally {
        this._settingValue = false;
      }
    } else {
      this.pendingValue = value;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.editor?.setEditable(!isDisabled);
  }
  // ── Toolbar actions ─────────────────────────────────────────────────
  toggleBold() {
    this.editor?.chain().focus().toggleBold().run();
  }
  toggleItalic() {
    this.editor?.chain().focus().toggleItalic().run();
  }
  setHeading(level) {
    this.editor?.chain().focus().toggleHeading({
      level
    }).run();
  }
  toggleBulletList() {
    this.editor?.chain().focus().toggleBulletList().run();
  }
  toggleOrderedList() {
    this.editor?.chain().focus().toggleOrderedList().run();
  }
  toggleBlockquote() {
    this.editor?.chain().focus().toggleBlockquote().run();
  }
  setLink() {
    const prev = this.editor?.getAttributes('link')['href'];
    const url = window.prompt('Enter link URL:', prev ?? '');
    if (url === null) return;
    if (url === '') {
      this.editor?.chain().focus().extendMarkRange('link').unsetLink().run();
    } else {
      this.editor?.chain().focus().extendMarkRange('link').setLink({
        href: url
      }).run();
    }
  }
  triggerImageUpload() {
    this.imageInput?.nativeElement.click();
  }
  onImageFileSelected(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = '';
    this.isUploadingImage = true;
    this.blogService.uploadImage(file).subscribe({
      next: ({
        url
      }) => {
        this.zone.run(() => {
          this.isUploadingImage = false;
          const fullUrl = url.startsWith('http') ? url : `${_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.imageBaseUrl}${url}`;
          this.editor?.chain().focus().setImage({
            src: fullUrl,
            alt: ''
          }).run();
        });
      },
      error: () => {
        this.zone.run(() => {
          this.isUploadingImage = false;
        });
      }
    });
  }
  isActive(type, attrs) {
    return this.editor?.isActive(type, attrs) ?? false;
  }
  static {
    this.ɵfac = function TiptapEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TiptapEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_12__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: TiptapEditorComponent,
      selectors: [["app-tiptap-editor"]],
      viewQuery: function TiptapEditorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5)(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.editorContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.imageInput = _t.first);
        }
      },
      inputs: {
        placeholder: "placeholder"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TiptapEditorComponent),
        multi: true
      }])],
      decls: 30,
      vars: 20,
      consts: [["editorContainer", ""], ["imageInput", ""], [1, "tiptap-editor-wrap"], ["role", "toolbar", "aria-label", "Editor toolbar", 1, "tiptap-toolbar"], ["type", "button", "title", "Bold", 1, "tb-btn", 3, "click"], ["type", "button", "title", "Italic", 1, "tb-btn", "tb-italic", 3, "click"], [1, "tb-sep"], ["type", "button", "title", "Heading 2", 1, "tb-btn", 3, "click"], ["type", "button", "title", "Heading 3", 1, "tb-btn", 3, "click"], ["type", "button", "title", "Bullet list", 1, "tb-btn", 3, "click"], ["name", "list-outline"], ["type", "button", "title", "Ordered list", 1, "tb-btn", 3, "click"], ["name", "list-circle-outline"], ["type", "button", "title", "Blockquote", 1, "tb-btn", 3, "click"], ["type", "button", "title", "Link", 1, "tb-btn", 3, "click"], ["name", "link-outline"], ["type", "button", "title", "Insert image", 1, "tb-btn", "tb-img-btn", 3, "click", "disabled"], ["name", "crescent", 1, "tb-spinner"], ["name", "image-outline"], [1, "tiptap-content-area"], ["type", "file", "accept", "image/jpeg,image/png,image/gif,image/webp", "hidden", "", 3, "change"]],
      template: function TiptapEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TiptapEditorComponent_Template_button_click_2_listener() {
            return ctx.toggleBold();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "B");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TiptapEditorComponent_Template_button_click_5_listener() {
            return ctx.toggleItalic();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "I");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TiptapEditorComponent_Template_button_click_9_listener() {
            return ctx.setHeading(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " H2 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TiptapEditorComponent_Template_button_click_11_listener() {
            return ctx.setHeading(3);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, " H3 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TiptapEditorComponent_Template_button_click_14_listener() {
            return ctx.toggleBulletList();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "ion-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TiptapEditorComponent_Template_button_click_16_listener() {
            return ctx.toggleOrderedList();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "ion-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TiptapEditorComponent_Template_button_click_18_listener() {
            return ctx.toggleBlockquote();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, " \" ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TiptapEditorComponent_Template_button_click_21_listener() {
            return ctx.setLink();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "ion-icon", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TiptapEditorComponent_Template_button_click_23_listener() {
            return ctx.triggerImageUpload();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](24, TiptapEditorComponent_Conditional_24_Template, 1, 0, "ion-spinner", 17)(25, TiptapEditorComponent_Conditional_25_Template, 1, 0, "ion-icon", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "div", 19, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "input", 20, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function TiptapEditorComponent_Template_input_change_28_listener($event) {
            return ctx.onImageFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.isActive("bold"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.isActive("italic"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.isActive("heading", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](18, _c2)));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.isActive("heading", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](19, _c3)));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.isActive("bulletList"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.isActive("orderedList"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.isActive("blockquote"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.isActive("link"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.isUploadingImage);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.isUploadingImage ? 24 : 25);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonSpinner],
      styles: [".tiptap-editor-wrap {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-md, 10px);\n  overflow: hidden;\n  background: var(--hau-surface);\n}\n\n.tiptap-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  padding: 6px 8px;\n  border-bottom: 1px solid var(--hau-border);\n  background: var(--hau-bg);\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.tiptap-toolbar::-webkit-scrollbar {\n  display: none;\n}\n.tiptap-toolbar {\n  flex-shrink: 0;\n}\n\n.tb-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 32px;\n  height: 32px;\n  padding: 0 6px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--hau-text-muted);\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  flex-shrink: 0;\n}\n.tb-btn ion-icon {\n  font-size: 1.1rem;\n  pointer-events: none;\n}\n.tb-btn:hover {\n  background: var(--hau-hover-bg, rgba(0, 0, 0, 0.06));\n  color: var(--hau-text);\n}\n.tb-btn.active {\n  background: var(--ion-color-primary, #3880ff);\n  color: #fff;\n}\n.tb-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.tb-italic em {\n  font-style: italic;\n}\n\n.tb-sep {\n  width: 1px;\n  height: 20px;\n  background: var(--hau-border);\n  margin: 0 4px;\n  flex-shrink: 0;\n}\n\n.tb-spinner {\n  width: 16px;\n  height: 16px;\n  --color: var(--hau-text-muted);\n}\n\n.tiptap-content-area {\n  min-height: 220px;\n  padding: 12px 14px;\n  cursor: text;\n}\n@media (min-width: 768px) {\n  .tiptap-content-area {\n    min-height: 280px;\n  }\n}\n.tiptap-content-area .tiptap {\n  outline: none;\n  min-height: 196px;\n}\n.tiptap-content-area .tiptap p.is-editor-empty:first-child::before {\n  content: attr(data-placeholder);\n  color: var(--hau-text-muted);\n  pointer-events: none;\n  float: left;\n  height: 0;\n}\n.tiptap-content-area .tiptap p {\n  margin: 0 0 0.75em;\n  line-height: 1.65;\n}\n.tiptap-content-area .tiptap p:last-child {\n  margin-bottom: 0;\n}\n.tiptap-content-area .tiptap h2 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 1.2em 0 0.4em;\n  color: var(--hau-text);\n}\n.tiptap-content-area .tiptap h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 1em 0 0.35em;\n  color: var(--hau-text);\n}\n.tiptap-content-area .tiptap ul, .tiptap-content-area .tiptap ol {\n  padding-left: 1.4em;\n  margin: 0.5em 0 0.75em;\n}\n.tiptap-content-area .tiptap ul li, .tiptap-content-area .tiptap ol li {\n  margin-bottom: 0.2em;\n  line-height: 1.55;\n}\n.tiptap-content-area .tiptap blockquote {\n  border-left: 3px solid var(--ion-color-primary, #3880ff);\n  margin: 0.75em 0;\n  padding: 4px 12px;\n  color: var(--hau-text-muted);\n  font-style: italic;\n  background: var(--hau-hover-bg, rgba(0, 0, 0, 0.03));\n  border-radius: 0 6px 6px 0;\n}\n.tiptap-content-area .tiptap a {\n  color: var(--ion-color-primary, #3880ff);\n  text-decoration: underline;\n  cursor: pointer;\n}\n.tiptap-content-area .tiptap img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 6px;\n  margin: 0.5em 0;\n  display: block;\n}\n.tiptap-content-area .tiptap img.ProseMirror-selectednode {\n  outline: 2px solid var(--ion-color-primary, #3880ff);\n}\n.tiptap-content-area .tiptap code {\n  background: var(--hau-hover-bg, rgba(0, 0, 0, 0.06));\n  border-radius: 4px;\n  padding: 1px 5px;\n  font-size: 0.875em;\n  font-family: monospace;\n}\n.tiptap-content-area .tiptap pre {\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: 8px;\n  padding: 10px 14px;\n  overflow-x: auto;\n}\n.tiptap-content-area .tiptap pre code {\n  background: none;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYmxvZy9jb21wb25lbnRzL3RpcHRhcC1lZGl0b3IvdGlwdGFwLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBREY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FBRkY7QUFHRTtFQUF1QixhQUFBO0FBQXpCO0FBVkE7RUFXRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7QUFFRjtBQUFFO0VBQVcsaUJBQUE7RUFBbUIsb0JBQUE7QUFJaEM7QUFGRTtFQUFVLG9EQUFBO0VBQWtELHNCQUFBO0FBTTlEO0FBTEU7RUFBVyw2Q0FBQTtFQUErQyxXQUFBO0FBUzVEO0FBUkU7RUFBYSxZQUFBO0VBQWMsbUJBQUE7QUFZN0I7O0FBVEE7RUFBZ0Isa0JBQUE7QUFhaEI7O0FBWEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFjRjs7QUFYQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFjRjs7QUFWQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBYUY7QUFYRTtFQUxGO0lBSzhCLGlCQUFBO0VBZTVCO0FBQ0Y7QUFiRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQWVKO0FBWkk7RUFDRSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWNOO0FBVkk7RUFBSSxrQkFBQTtFQUFvQixpQkFBQTtBQWM1QjtBQWJJO0VBQWUsZ0JBQUE7QUFnQm5CO0FBZEk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQWdCTjtBQWRJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFnQk47QUFiSTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFlTjtBQWRNO0VBQUssb0JBQUE7RUFBc0IsaUJBQUE7QUFrQmpDO0FBZkk7RUFDRSx3REFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQWlCTjtBQWRJO0VBQ0Usd0NBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFnQk47QUFiSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWVOO0FBZE07RUFBNkIsb0RBQUE7QUFpQm5DO0FBZEk7RUFDRSxvREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBZ0JOO0FBYkk7RUFDRSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZU47QUFkTTtFQUFPLGdCQUFBO0VBQWtCLFVBQUE7QUFrQi9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVmlld0VuY2Fwc3VsYXRpb24uTm9uZSDDosKAwpQgbmFtZXNwYWNlIGV2ZXJ5dGhpbmcgdW5kZXIgLnRpcHRhcC1lZGl0b3Itd3JhcFxuXG4udGlwdGFwLWVkaXRvci13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbWQsIDEwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBUb29sYmFyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnRpcHRhcC10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycHg7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LWJnKTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgZGlzcGxheTogbm9uZTsgfVxuICBmbGV4LXNocmluazogMDtcbn1cblxuLnRiLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzLCBjb2xvciAwLjE1cztcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDEuMXJlbTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnLCByZ2JhKDAsMCwwLC4wNikpOyBjb2xvcjogdmFyKC0taGF1LXRleHQpOyB9XG4gICYuYWN0aXZlIHsgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpOyBjb2xvcjogI2ZmZjsgfVxuICAmOmRpc2FibGVkIHsgb3BhY2l0eTogMC40OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG59XG5cbi50Yi1pdGFsaWMgZW0geyBmb250LXN0eWxlOiBpdGFsaWM7IH1cblxuLnRiLXNlcCB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LWJvcmRlcik7XG4gIG1hcmdpbjogMCA0cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udGItc3Bpbm5lciB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIC0tY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbn1cblxuLy8gw6LClMKAw6LClMKAIEVkaXRvciBjb250ZW50IGFyZWEgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udGlwdGFwLWNvbnRlbnQtYXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGN1cnNvcjogdGV4dDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgbWluLWhlaWdodDogMjgwcHg7IH1cblxuICAvLyBUaXB0YXAgY3JlYXRlcyBhIC50aXB0YXAgZGl2IGluc2lkZSB0aGlzIGNvbnRhaW5lclxuICAudGlwdGFwIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IDE5NnB4O1xuXG4gICAgLy8gUGxhY2Vob2xkZXJcbiAgICBwLmlzLWVkaXRvci1lbXB0eTpmaXJzdC1jaGlsZDo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gICAgICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG5cbiAgICAvLyBUeXBvZ3JhcGh5XG4gICAgcCB7IG1hcmdpbjogMCAwIDAuNzVlbTsgbGluZS1oZWlnaHQ6IDEuNjU7IH1cbiAgICBwOmxhc3QtY2hpbGQgeyBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW46IDEuMmVtIDAgMC40ZW07XG4gICAgICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW46IDFlbSAwIDAuMzVlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gICAgfVxuXG4gICAgdWwsIG9sIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMS40ZW07XG4gICAgICBtYXJnaW46IDAuNWVtIDAgMC43NWVtO1xuICAgICAgbGkgeyBtYXJnaW4tYm90dG9tOiAwLjJlbTsgbGluZS1oZWlnaHQ6IDEuNTU7IH1cbiAgICB9XG5cbiAgICBibG9ja3F1b3RlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xuICAgICAgbWFyZ2luOiAwLjc1ZW0gMDtcbiAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgICAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWhhdS1ob3Zlci1iZywgcmdiYSgwLDAsMCwuMDMpKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgNnB4IDZweCAwO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBtYXJnaW46IDAuNWVtIDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICYuUHJvc2VNaXJyb3Itc2VsZWN0ZWRub2RlIHsgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTsgfVxuICAgIH1cblxuICAgIGNvZGUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnLCByZ2JhKDAsMCwwLC4wNikpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcGFkZGluZzogMXB4IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgfVxuXG4gICAgcHJlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgIGNvZGUgeyBiYWNrZ3JvdW5kOiBub25lOyBwYWRkaW5nOiAwOyB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 68507
/*!******************************************************************!*\
  !*** ./node_modules/@tiptap/extension-placeholder/dist/index.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Placeholder: () => (/* reexport safe */ _tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__.Placeholder),
/* harmony export */   "default": () => (/* binding */ index_default)
/* harmony export */ });
/* harmony import */ var _tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extensions */ 43620);
// src/index.ts


var index_default = _tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__.Placeholder;


/***/ }

}]);
//# sourceMappingURL=src_app_features_blog_blog-entry-write_blog-entry-write_component_ts.js.map