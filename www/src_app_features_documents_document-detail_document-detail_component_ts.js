"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_documents_document-detail_document-detail_component_ts"],{

/***/ 75143
/*!*********************************************************************************!*\
  !*** ./src/app/features/documents/document-detail/document-detail.component.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentDetailComponent: () => (/* binding */ DocumentDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _hau_features_documents_documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/documents/documents-list/documents-list.component */ 84611);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 56127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_features_documents_state_documents_facade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hau/features/documents/state/documents.facade */ 40977);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular/standalone */ 4059);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 80436);













function DocumentDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.vm.doc.policy_number);
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](1, 1, ctx_r1.vm.doc.issue_date, "d MMM y"), " ");
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("(", ctx_r1.vm.car.license_plate, ")");
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_49_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Valid ");
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_49_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Expiring ");
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_49_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Expired ");
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_49_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " No expiry ");
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](3, DocumentDetailComponent_Conditional_3_Conditional_49_Case_3_Template, 1, 0)(4, DocumentDetailComponent_Conditional_3_Conditional_49_Case_4_Template, 1, 0)(5, DocumentDetailComponent_Conditional_3_Conditional_49_Case_5_Template, 1, 0)(6, DocumentDetailComponent_Conditional_3_Conditional_49_Case_6_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](1, 5, ctx_r1.vm.doc.expiry_date, "d MMM y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinterpolate1"]("status-badge status-badge--", ctx_r1.vm.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((tmp_4_0 = ctx_r1.vm.status) === "valid" ? 3 : tmp_4_0 === "expiring" ? 4 : tmp_4_0 === "expired" ? 5 : tmp_4_0 === "no-expiry" ? 6 : -1);
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "dt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "dd", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 22)(7, "dt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "dd", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.vm.doc.provider);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.vm.doc.status ?? "Active");
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21)(1, "div", 32)(2, "dt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Policy number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "dd", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.vm.doc.policy_number);
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_53_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "iframe", 35);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeResourceUrl"]);
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_53_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 36);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.rawFileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", ctx_r1.vm.doc.file_name ?? "Document");
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_53_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_53_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.vm.fileSizeLabel);
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 30)(1, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Document file");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](4, DocumentDetailComponent_Conditional_3_Conditional_53_Conditional_4_Template, 1, 1, "iframe", 35)(5, DocumentDetailComponent_Conditional_3_Conditional_53_Conditional_5_Template, 1, 2, "img", 36)(6, DocumentDetailComponent_Conditional_3_Conditional_53_Conditional_6_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 40)(10, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](12, DocumentDetailComponent_Conditional_3_Conditional_53_Conditional_12_Template, 2, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.vm.isPdf ? 4 : ctx_r1.vm.isImage ? 5 : 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.vm.doc.file_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.vm.fileSizeLabel ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", ctx_r1.rawFileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("download", ctx_r1.vm.doc.file_name);
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_54_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "dt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Policyholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "dd", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.vm.doc.policyholder);
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_54_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "dt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "CNP / ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "dd", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.vm.doc.cnp_id);
  }
}
function DocumentDetailComponent_Conditional_3_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 31)(1, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Extracted information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Information extracted automatically from the document. You can edit if needed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "dl", 20)(7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](8, DocumentDetailComponent_Conditional_3_Conditional_54_Conditional_8_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](9, DocumentDetailComponent_Conditional_3_Conditional_54_Conditional_9_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.vm.doc.policyholder ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.vm.doc.cnp_id ? 9 : -1);
  }
}
function DocumentDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nav", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentDetailComponent_Conditional_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "header", 8)(7, "div", 9)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div")(11, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](13, DocumentDetailComponent_Conditional_3_Conditional_13_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 12)(15, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentDetailComponent_Conditional_3_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.navigateToEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentDetailComponent_Conditional_3_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.deleteDocument());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 17)(22, "section", 18)(23, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Document information");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "dl", 20)(26, "div", 21)(27, "div", 22)(28, "dt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "dd", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 22)(33, "dt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Valid from");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "dd", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](36, DocumentDetailComponent_Conditional_3_Conditional_36_Template, 2, 4)(37, DocumentDetailComponent_Conditional_3_Conditional_37_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 21)(39, "div", 22)(40, "dt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "dd", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentDetailComponent_Conditional_3_Template_dd_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.vm.car && ctx_r1.navigateToEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](44, DocumentDetailComponent_Conditional_3_Conditional_44_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 22)(46, "dt", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Valid until");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "dd", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](49, DocumentDetailComponent_Conditional_3_Conditional_49_Template, 7, 8)(50, DocumentDetailComponent_Conditional_3_Conditional_50_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](51, DocumentDetailComponent_Conditional_3_Conditional_51_Template, 11, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](52, DocumentDetailComponent_Conditional_3_Conditional_52_Template, 6, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](53, DocumentDetailComponent_Conditional_3_Conditional_53_Template, 16, 5, "section", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](54, DocumentDetailComponent_Conditional_3_Conditional_54_Template, 10, 2, "section", 31);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.vm.typeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinterpolate1"]("doc-badge-lg doc-badge-lg--", ctx_r1.vm.typeColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.vm.typeAbbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.vm.typeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.vm.doc.policy_number ? 13 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.deleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.vm.typeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.vm.doc.issue_date ? 36 : 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.vm.carLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.vm.car ? 44 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.vm.doc.expiry_date ? 49 : 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.vm.doc.provider ? 51 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.vm.doc.policy_number ? 52 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.vm.doc.file_url ? 53 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.vm.doc.policyholder || ctx_r1.vm.doc.cnp_id ? 54 : -1);
  }
}
function calcStatus(expiryDate) {
  if (!expiryDate) return {
    status: 'no-expiry',
    daysLeft: null
  };
  const daysLeft = Math.ceil((new Date(expiryDate).getTime() - Date.now()) / 86_400_000);
  if (daysLeft < 0) return {
    status: 'expired',
    daysLeft
  };
  if (daysLeft <= 30) return {
    status: 'expiring',
    daysLeft
  };
  return {
    status: 'valid',
    daysLeft
  };
}
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
let DocumentDetailComponent = class DocumentDetailComponent {
  constructor(_facade, _route, _router, _nav, _sanitizer) {
    this._facade = _facade;
    this._route = _route;
    this._router = _router;
    this._nav = _nav;
    this._sanitizer = _sanitizer;
    this.vm = null;
    this.loading = true;
    this.deleting = false;
    (0,ionicons__WEBPACK_IMPORTED_MODULE_4__.a)({
      arrowBackOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.arrowBackOutline,
      createOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.createOutline,
      trashOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.trashOutline,
      calendarOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.calendarOutline,
      carOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.carOutline,
      shieldCheckmarkOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.shieldCheckmarkOutline,
      documentTextOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.documentTextOutline,
      cloudDownloadOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.cloudDownloadOutline,
      businessOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.businessOutline,
      cardOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.cardOutline,
      personOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.personOutline,
      idCardOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.idCardOutline,
      documentOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.documentOutline,
      chevronForwardOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.chevronForwardOutline,
      informationCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.informationCircleOutline
    });
  }
  ngOnInit() {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._facade.cars$, this._facade.documents$, this._facade.loading$]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(([cars, docs, loading]) => {
      this.loading = loading;
      const doc = docs.find(d => d.id === id);
      if (doc) {
        this.vm = this.buildVm(doc, cars);
      } else if (!loading && docs.length > 0) {
        void this._router.navigate(['/main/documents']);
      }
    });
    this._facade.loadAll();
  }
  buildVm(doc, cars) {
    const car = cars.find(c => c.id === doc.car_id);
    const cfg = _hau_features_documents_documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_2__.DOC_TYPE_CONFIG[doc.document_type] ?? {
      label: doc.document_type,
      abbr: doc.document_type.slice(0, 3).toUpperCase(),
      color: 'slate'
    };
    const {
      status,
      daysLeft
    } = calcStatus(doc.expiry_date);
    const ext = doc.file_name?.split('.').pop()?.toLowerCase() ?? '';
    return {
      doc,
      car,
      status,
      daysLeft,
      typeLabel: cfg.label,
      typeAbbr: cfg.abbr,
      typeColor: cfg.color,
      carLabel: car ? `${car.make} ${car.model}` : '—',
      fileSizeLabel: doc.file_size ? formatBytes(doc.file_size) : null,
      isPdf: ext === 'pdf',
      isImage: ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)
    };
  }
  get fileUrl() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.vm?.doc.file_url ?? '');
  }
  get rawFileUrl() {
    return this.vm?.doc.file_url ?? '';
  }
  navigateToEdit() {
    void this._router.navigate([`/main/documents/${this.vm.doc.id}/edit`]);
  }
  deleteDocument() {
    if (!this.vm || this.deleting) return;
    this.deleting = true;
    this._facade.deleteDocument(this.vm.doc.id);
    void this._nav.back();
  }
  goBack() {
    this._nav.back();
  }
  static {
    this.ɵfac = function DocumentDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_hau_features_documents_state_documents_facade__WEBPACK_IMPORTED_MODULE_10__.DocumentsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_12__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: DocumentDetailComponent,
      selectors: [["app-document-detail"]],
      decls: 4,
      vars: 2,
      consts: [[1, "detail-page"], [1, "detail-inner"], [1, "loading-state"], ["name", "crescent"], [1, "breadcrumb"], [1, "breadcrumb-link", 3, "click"], ["name", "chevron-forward-outline", 1, "breadcrumb-sep"], [1, "breadcrumb-current"], [1, "doc-header"], [1, "doc-header-left"], [1, "doc-title"], [1, "doc-subtitle"], [1, "doc-header-actions"], [1, "hdr-btn", "hdr-btn--edit", 3, "click"], ["name", "create-outline"], [1, "hdr-btn", "hdr-btn--delete", 3, "click", "disabled"], ["name", "trash-outline"], [1, "detail-grid"], [1, "detail-card", "info-card"], [1, "card-title"], [1, "info-grid"], [1, "info-row"], [1, "info-cell"], [1, "info-label"], [1, "info-value"], [1, "info-dash"], [1, "info-value", "info-value--link", 3, "click"], [1, "plate-chip"], [1, "info-value", "info-value--expiry"], [1, "status-badge", "status-badge--no-expiry"], [1, "detail-card", "file-card"], [1, "detail-card", "extracted-card"], [1, "info-cell", "info-cell--full"], [1, "info-value", "info-value--mono"], [1, "file-preview-wrap"], ["title", "Document preview", 1, "file-preview-iframe", 3, "src"], [1, "file-preview-img", 3, "src", "alt"], [1, "file-preview-generic"], [1, "file-meta"], ["name", "document-text-outline", 1, "file-meta-icon"], [1, "file-meta-info"], [1, "file-name"], [1, "file-size"], ["target", "_blank", 1, "download-btn", 3, "href", "download"], ["name", "cloud-download-outline"], ["name", "document-outline", 1, "file-generic-icon"], [1, "card-title-note"], ["name", "information-circle-outline"]],
      template: function DocumentDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](2, DocumentDetailComponent_Conditional_2_Template, 2, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](3, DocumentDetailComponent_Conditional_3_Template, 55, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.loading && !ctx.vm ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.vm ? 3 : -1);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.detail-page[_ngcontent-%COMP%] {\n  --background: var(--hau-bg);\n}\n\n.detail-inner[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 20px 16px 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .detail-inner[_ngcontent-%COMP%] {\n    padding: 32px 24px 64px;\n  }\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n}\n.loading-state[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: var(--hau-primary);\n  width: 32px;\n  height: 32px;\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n}\n\n.breadcrumb-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--hau-primary);\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.breadcrumb-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--hau-text-dim);\n}\n\n.breadcrumb-current[_ngcontent-%COMP%] {\n  color: var(--hau-text-muted);\n}\n\n.doc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.doc-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.doc-badge-lg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--hau-radius-lg);\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n}\n.doc-badge-lg--purple[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.15);\n  color: #c084fc;\n}\n.doc-badge-lg--blue[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.15);\n  color: #60a5fa;\n}\n.doc-badge-lg--indigo[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.15);\n  color: #818cf8;\n}\n.doc-badge-lg--green[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.doc-badge-lg--amber[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.15);\n  color: #fbbf24;\n}\n.doc-badge-lg--slate[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.15);\n  color: #94a3b8;\n}\n\n.doc-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--hau-text);\n  margin: 0;\n  line-height: 1.2;\n}\n@media (min-width: 768px) {\n  .doc-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n\n.doc-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--hau-text-muted);\n  margin: 4px 0 0;\n  font-family: var(--hau-font-mono, monospace);\n}\n\n.doc-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.hdr-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.85rem;\n  font-weight: 700;\n  border: 1.5px solid transparent;\n  cursor: pointer;\n  transition: all var(--hau-transition-fast);\n}\n.hdr-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.hdr-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.hdr-btn--edit[_ngcontent-%COMP%] {\n  background: var(--hau-surface);\n  border-color: var(--hau-border);\n  color: var(--hau-text);\n}\n.hdr-btn--edit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--hau-primary);\n  color: var(--hau-primary);\n}\n.hdr-btn--delete[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  border-color: rgba(239, 68, 68, 0.25);\n  color: #ef4444;\n}\n.hdr-btn--delete[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(239, 68, 68, 0.15);\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n@media (min-width: 900px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 340px;\n  }\n}\n\n.detail-card[_ngcontent-%COMP%] {\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-xl);\n  box-shadow: var(--hau-shadow-soft);\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .detail-card[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  margin: 0 0 18px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid var(--hau-border);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.card-title-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.77rem;\n  font-weight: 500;\n  color: var(--hau-text-muted);\n}\n.card-title-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--hau-primary);\n}\n\n.info-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin: 0;\n}\n\n.info-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 479px) {\n  .info-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.info-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-cell--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--hau-text-dim);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n.info-value[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--hau-text);\n  font-weight: 500;\n}\n.info-value--link[_ngcontent-%COMP%] {\n  color: var(--hau-primary);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.info-value--link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.info-value--expiry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.info-value--mono[_ngcontent-%COMP%] {\n  font-family: var(--hau-font-mono, monospace);\n  font-size: 0.83rem;\n}\n\n.info-dash[_ngcontent-%COMP%] {\n  color: var(--hau-text-dim);\n}\n\n.plate-chip[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--hau-text-muted);\n  font-weight: 400;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  white-space: nowrap;\n}\n.status-badge--valid[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #4ade80;\n}\n.status-badge--expiring[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.15);\n  color: #fbbf24;\n}\n.status-badge--expired[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.status-badge--no-expiry[_ngcontent-%COMP%] {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text-muted);\n}\n\n.file-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.file-preview-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: var(--hau-radius-lg);\n  overflow: hidden;\n  background: var(--hau-bg);\n  border: 1px solid var(--hau-border);\n  aspect-ratio: 4/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.file-preview-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n\n.file-preview-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.file-preview-generic[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.file-generic-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--hau-text-dim);\n}\n\n.file-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: var(--hau-bg);\n  border-radius: var(--hau-radius-md);\n  border: 1px solid var(--hau-border);\n}\n\n.file-meta-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--hau-primary);\n  flex-shrink: 0;\n}\n\n.file-meta-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.file-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.file-size[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--hau-text-muted);\n}\n\n.download-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: var(--hau-radius-md);\n  background: var(--hau-primary);\n  color: #fff;\n  font-size: 0.87rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background var(--hau-transition-fast);\n  box-shadow: 0 4px 12px var(--hau-primary-shadow);\n}\n.download-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.download-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-strong);\n}\n\n@media (max-width: 599px) {\n  .doc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .doc-header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .doc-header-actions[_ngcontent-%COMP%]   .hdr-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZG9jdW1lbnRzL2RvY3VtZW50LWRldGFpbC9kb2N1bWVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxjQUFBO0FBRVI7O0FBQUE7RUFBZSwyQkFBQTtBQUlmOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBS0Y7QUFIRTtFQVJGO0lBUThCLHVCQUFBO0VBTzVCO0FBQ0Y7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFPRjtBQU5FO0VBQWMsMkJBQUE7RUFBNkIsV0FBQTtFQUFhLFlBQUE7QUFXMUQ7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFVRjs7QUFQQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVVGO0FBVEU7RUFBVSwwQkFBQTtBQVlaOztBQVRBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQVlGOztBQVRBO0VBQ0UsNEJBQUE7QUFZRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFXRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFXRjs7QUFSQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFXRjtBQVRFO0VBQWEsb0NBQUE7RUFBbUMsY0FBQTtBQWFsRDtBQVpFO0VBQWEsb0NBQUE7RUFBb0MsY0FBQTtBQWdCbkQ7QUFmRTtFQUFhLG9DQUFBO0VBQW9DLGNBQUE7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OztBQWhEQTtFQUNFO0lBQ0Usc0JBQUE7RUFtREY7RUFoREE7SUFDRSxXQUFBO0VBa0RGO0VBakRFO0lBQVcsT0FBQTtJQUFTLHVCQUFBO0VBcUR0QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuXG4uZGV0YWlsLXBhZ2UgeyAtLWJhY2tncm91bmQ6IHZhcigtLWhhdS1iZyk7IH1cblxuLmRldGFpbC1pbm5lciB7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweCAxNnB4IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgcGFkZGluZzogMzJweCAyNHB4IDY0cHg7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIExvYWRpbmcgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubG9hZGluZy1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA4MHB4IDA7XG4gIGlvbi1zcGlubmVyIHsgLS1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpOyB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBCcmVhZGNydW1iIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5icmVhZGNydW1iLWxpbmsge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxufVxuXG4uYnJlYWRjcnVtYi1zZXAge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xufVxuXG4uYnJlYWRjcnVtYi1jdXJyZW50IHtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbn1cblxuLy8gw6LClMKAw6LClMKAIFBhZ2UgaGVhZGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmRvYy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmRvYy1oZWFkZXItbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbn1cblxuLmRvYy1iYWRnZS1sZyB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1sZyk7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcblxuICAmLS1wdXJwbGUgIHsgYmFja2dyb3VuZDogcmdiYSgxNjgsODUsMjQ3LC4xNSk7ICBjb2xvcjogI2MwODRmYzsgfVxuICAmLS1ibHVlICAgIHsgYmFja2dyb3VuZDogcmdiYSg1OSwxMzAsMjQ2LC4xNSk7ICAgY29sb3I6ICM2MGE1ZmE7IH1cbiAgJi0taW5kaWdvICB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwuMTUpOyAgIGNvbG9yOiAjODE4Y2Y4OyB9XG4gICYtLWdyZWVuICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDM0LDE5Nyw5NCwuMTUpOyAgICBjb2xvcjogIzRhZGU4MDsgfVxuICAmLS1hbWJlciAgIHsgYmFja2dyb3VuZDogcmdiYSgyNTEsMTkxLDM2LC4xNSk7ICAgY29sb3I6ICNmYmJmMjQ7IH1cbiAgJi0tc2xhdGUgICB7IGJhY2tncm91bmQ6IHJnYmEoMTAwLDExNiwxMzksLjE1KTsgIGNvbG9yOiAjOTRhM2I4OyB9XG59XG5cbi5kb2MtdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBmb250LXNpemU6IDEuOHJlbTsgfVxufVxuXG4uZG9jLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oYXUtZm9udC1tb25vLCBtb25vc3BhY2UpO1xufVxuXG4uZG9jLWhlYWRlci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmhkci1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDlweCAxOHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogMS41cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC45NXJlbTsgfVxuICAmOmRpc2FibGVkIHsgb3BhY2l0eTogMC41NTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuXG4gICYtLWVkaXQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhhdS1ib3JkZXIpO1xuICAgIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7IGJvcmRlci1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpOyBjb2xvcjogdmFyKC0taGF1LXByaW1hcnkpOyB9XG4gIH1cblxuICAmLS1kZWxldGUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LC4wOCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSw2OCw2OCwuMjUpO1xuICAgIGNvbG9yOiAjZWY0NDQ0O1xuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwuMTUpOyB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEdyaWQgbGF5b3V0IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmRldGFpbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNDBweDtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgQ2FyZHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZGV0YWlsLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXhsKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGF1LXNoYWRvdy1zb2Z0KTtcbiAgcGFkZGluZzogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgcGFkZGluZzogMjRweDsgfVxufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgbWFyZ2luOiAwIDAgMThweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNhcmQtdGl0bGUtbm90ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBmb250LXNpemU6IDAuNzdyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAwLjg1cmVtOyBjb2xvcjogdmFyKC0taGF1LXByaW1hcnkpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBJbmZvIGdyaWQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uaW5mby1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5pbmZvLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxNnB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0NzlweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5cbi5pbmZvLWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRweDtcblxuICAmLS1mdWxsIHsgZ3JpZC1jb2x1bW46IDEgLyAtMTsgfVxufVxuXG4uaW5mby1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG59XG5cbi5pbmZvLXZhbHVlIHtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBmb250LXdlaWdodDogNTAwO1xuXG4gICYtLWxpbmsge1xuICAgIGNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICAmOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cbiAgfVxuXG4gICYtLWV4cGlyeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gICYtLW1vbm8ge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oYXUtZm9udC1tb25vLCBtb25vc3BhY2UpO1xuICAgIGZvbnQtc2l6ZTogMC44M3JlbTtcbiAgfVxufVxuXG4uaW5mby1kYXNoIHtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7XG59XG5cbi5wbGF0ZS1jaGlwIHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4vLyDDosKUwoDDosKUwoAgU3RhdHVzIGJhZGdlcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zdGF0dXMtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtcGlsbCk7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmLS12YWxpZCAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDM0LDE5Nyw5NCwuMTUpOyAgY29sb3I6ICM0YWRlODA7IH1cbiAgJi0tZXhwaXJpbmcgIHsgYmFja2dyb3VuZDogcmdiYSgyNTEsMTkxLDM2LC4xNSk7IGNvbG9yOiAjZmJiZjI0OyB9XG4gICYtLWV4cGlyZWQgICB7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LC4xNSk7ICBjb2xvcjogI2Y4NzE3MTsgfVxuICAmLS1uby1leHBpcnkgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpOyAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgRmlsZSBjYXJkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZpbGUtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTRweDtcbn1cblxuLmZpbGUtcHJldmlldy13cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbGcpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYmcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYXNwZWN0LXJhdGlvOiA0IC8gMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5maWxlLXByZXZpZXctaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZmlsZS1wcmV2aWV3LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5maWxlLXByZXZpZXctZ2VuZXJpYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmlsZS1nZW5lcmljLWljb24ge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xufVxuXG4uZmlsZS1tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbWQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbn1cblxuLmZpbGUtbWV0YS1pY29uIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZmlsZS1tZXRhLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uZmlsZS1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmZpbGUtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMC43NnJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbn1cblxuLmRvd25sb2FkLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLW1kKTtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjg3cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggdmFyKC0taGF1LXByaW1hcnktc2hhZG93KTtcbiAgaW9uLWljb24geyBmb250LXNpemU6IDFyZW07IH1cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1wcmltYXJ5LXN0cm9uZyk7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEV4dHJhY3RlZCBjYXJkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmV4dHJhY3RlZC1jYXJkIHtcbiAgLy8gZnVsbCB3aWR0aCBiZWxvdyB0aGUgZ3JpZFxufVxuXG4vLyDDosKUwoDDosKUwoAgTW9iaWxlIG92ZXJyaWRlcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuZG9jLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5kb2MtaGVhZGVyLWFjdGlvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5oZHItYnRuIHsgZmxleDogMTsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
};
DocumentDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()], DocumentDetailComponent);


/***/ }

}]);
//# sourceMappingURL=src_app_features_documents_document-detail_document-detail_component_ts.js.map