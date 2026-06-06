"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_features_documents_documents-list_documents-list_component_ts"],{

/***/ 84611
/*!*******************************************************************************!*\
  !*** ./src/app/features/documents/documents-list/documents-list.component.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOC_TYPE_CONFIG: () => (/* binding */ DOC_TYPE_CONFIG),
/* harmony export */   DocumentsListComponent: () => (/* binding */ DocumentsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _hau_features_documents_documents_routes_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/documents/documents.routes.const */ 47826);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 56127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_features_documents_state_documents_facade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hau/features/documents/state/documents.facade */ 40977);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 83305);











const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.value;
const _forTrack2 = ($index, $item) => $item.doc.id;
function DocumentsListComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const car_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", car_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", car_r1.make, " ", car_r1.model);
  }
}
function DocumentsListComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", type_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.docTypeLabelFor(type_r2));
  }
}
function DocumentsListComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", s_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](s_r4.label);
  }
}
function DocumentsListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-spinner", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Loading documents\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function DocumentsListComponent_Conditional_36_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " No documents yet. Add your first document. ");
  }
}
function DocumentsListComponent_Conditional_36_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " No documents match your filters. ");
  }
}
function DocumentsListComponent_Conditional_36_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_36_Conditional_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.navigateToAdd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Add document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DocumentsListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](3, DocumentsListComponent_Conditional_36_Conditional_3_Template, 1, 0)(4, DocumentsListComponent_Conditional_36_Conditional_4_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](5, DocumentsListComponent_Conditional_36_Conditional_5_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r2.totalAll === 0 ? 3 : 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r2.totalAll === 0 ? 5 : -1);
  }
}
function DocumentsListComponent_Conditional_37_For_18_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r7.car.license_plate);
  }
}
function DocumentsListComponent_Conditional_37_For_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](1, 1, item_r7.doc.expiry_date, "d MMM y"), " ");
  }
}
function DocumentsListComponent_Conditional_37_For_18_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DocumentsListComponent_Conditional_37_For_18_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Valid ");
  }
}
function DocumentsListComponent_Conditional_37_For_18_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Expiring soon ");
  }
}
function DocumentsListComponent_Conditional_37_For_18_Case_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Expired ");
  }
}
function DocumentsListComponent_Conditional_37_For_18_Case_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " No expiry ");
  }
}
function DocumentsListComponent_Conditional_37_For_18_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 50)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_37_For_18_Conditional_30_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.navigateToEdit($event, item_r7.doc.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_37_For_18_Conditional_30_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.deleteDocument($event, item_r7.doc.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function DocumentsListComponent_Conditional_37_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_37_For_18_Template_tr_click_0_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.navigateToView(item_r7.doc.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 28)(2, "div", 37)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 38)(6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td", 29)(9, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](11, DocumentsListComponent_Conditional_37_For_18_Conditional_11_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](15, DocumentsListComponent_Conditional_37_For_18_Conditional_15_Template, 2, 4)(16, DocumentsListComponent_Conditional_37_For_18_Conditional_16_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 32)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](19, DocumentsListComponent_Conditional_37_For_18_Case_19_Template, 1, 0)(20, DocumentsListComponent_Conditional_37_For_18_Case_20_Template, 1, 0)(21, DocumentsListComponent_Conditional_37_For_18_Case_21_Template, 1, 0)(22, DocumentsListComponent_Conditional_37_For_18_Case_22_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_37_For_18_Template_td_click_23_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 44)(25, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_37_For_18_Template_button_click_25_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.navigateToView(item_r7.doc.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_37_For_18_Template_div_click_27_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_37_For_18_Template_button_click_28_listener($event) {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.toggleMenu($event, item_r7.doc.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](30, DocumentsListComponent_Conditional_37_For_18_Conditional_30_Template, 7, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const item_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinterpolate1"]("doc-badge doc-badge--", item_r7.typeColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r7.typeAbbr, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r7.typeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r7.carLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](item_r7.car ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r7.typeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](item_r7.doc.expiry_date ? 15 : 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinterpolate1"]("status-badge status-badge--", item_r7.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((tmp_19_0 = item_r7.status) === "valid" ? 19 : tmp_19_0 === "expiring" ? 20 : tmp_19_0 === "expired" ? 21 : tmp_19_0 === "no-expiry" ? 22 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r2.openMenuId === item_r7.doc.id ? 30 : -1);
  }
}
function DocumentsListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20)(1, "table", 27)(2, "thead")(3, "tr")(4, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Valid until");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](17, DocumentsListComponent_Conditional_37_For_18_Template, 31, 14, "tr", 34, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r2.filteredDocs);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" Showing 1 to ", ctx_r2.totalCount, " of ", ctx_r2.totalAll, " documents ");
  }
}
function DocumentsListComponent_Conditional_38_For_2_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Valid ");
  }
}
function DocumentsListComponent_Conditional_38_For_2_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Expiring soon ");
  }
}
function DocumentsListComponent_Conditional_38_For_2_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Expired ");
  }
}
function DocumentsListComponent_Conditional_38_For_2_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " No expiry ");
  }
}
function DocumentsListComponent_Conditional_38_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u2014 ", item_r10.car.license_plate, " ");
  }
}
function DocumentsListComponent_Conditional_38_For_2_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r10.daysLeft, "d left");
  }
}
function DocumentsListComponent_Conditional_38_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](2, DocumentsListComponent_Conditional_38_For_2_Conditional_18_Conditional_2_Template, 2, 1, "span", 69);
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](1, 2, item_r10.doc.expiry_date, "d MMM y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](item_r10.status === "expiring" && item_r10.daysLeft !== null ? 2 : -1);
  }
}
function DocumentsListComponent_Conditional_38_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DocumentsListComponent_Conditional_38_For_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 68)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_38_For_2_Conditional_26_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.navigateToEdit($event, item_r10.doc.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_38_For_2_Conditional_26_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.deleteDocument($event, item_r10.doc.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function DocumentsListComponent_Conditional_38_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_38_For_2_Template_div_click_0_listener() {
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.navigateToView(item_r10.doc.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 58)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 59)(5, "div", 60)(6, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](9, DocumentsListComponent_Conditional_38_For_2_Case_9_Template, 1, 0)(10, DocumentsListComponent_Conditional_38_For_2_Case_10_Template, 1, 0)(11, DocumentsListComponent_Conditional_38_For_2_Case_11_Template, 1, 0)(12, DocumentsListComponent_Conditional_38_For_2_Case_12_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ion-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](16, DocumentsListComponent_Conditional_38_For_2_Conditional_16_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](18, DocumentsListComponent_Conditional_38_For_2_Conditional_18_Template, 3, 5)(19, DocumentsListComponent_Conditional_38_For_2_Conditional_19_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_38_For_2_Template_div_click_20_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_38_For_2_Template_button_click_21_listener() {
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.navigateToView(item_r10.doc.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 66)(24, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Conditional_38_For_2_Template_button_click_24_listener($event) {
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.toggleMenu($event, item_r10.doc.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](26, DocumentsListComponent_Conditional_38_For_2_Conditional_26_Template, 7, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const item_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinterpolate1"]("doc-badge doc-badge--", item_r10.typeColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r10.typeAbbr, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r10.typeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinterpolate1"]("status-badge status-badge--", item_r10.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((tmp_15_0 = item_r10.status) === "valid" ? 9 : tmp_15_0 === "expiring" ? 10 : tmp_15_0 === "expired" ? 11 : tmp_15_0 === "no-expiry" ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r10.carLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](item_r10.car ? 16 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](item_r10.doc.expiry_date ? 18 : 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r2.openMenuId === item_r10.doc.id ? 26 : -1);
  }
}
function DocumentsListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](1, DocumentsListComponent_Conditional_38_For_2_Template, 27, 13, "div", 55, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r2.filteredDocs);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" Showing ", ctx_r2.totalCount, " of ", ctx_r2.totalAll, " documents ");
  }
}
const EXPIRY_SOON_DAYS = 30;
const DOC_TYPE_CONFIG = {
  RCA: {
    label: 'Insurance (RCA)',
    abbr: 'RCA',
    color: 'purple'
  },
  ITP: {
    label: 'ITP Certificate',
    abbr: 'ITP',
    color: 'blue'
  },
  ROV: {
    label: 'ROV Certificate',
    abbr: 'ROV',
    color: 'indigo'
  },
  REGISTRATION: {
    label: 'Registration Certificate',
    abbr: 'CAR',
    color: 'green'
  },
  ROAD_TAX: {
    label: 'Road Tax',
    abbr: 'TAX',
    color: 'amber'
  }
};
function docTypeConfig(type) {
  return DOC_TYPE_CONFIG[type] ?? {
    label: type,
    abbr: type.slice(0, 3).toUpperCase(),
    color: 'slate'
  };
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
  if (daysLeft <= EXPIRY_SOON_DAYS) return {
    status: 'expiring',
    daysLeft
  };
  return {
    status: 'valid',
    daysLeft
  };
}
function buildViewModel(doc, cars) {
  const car = cars.find(c => c.id === doc.car_id);
  const cfg = docTypeConfig(doc.document_type);
  const {
    status,
    daysLeft
  } = calcStatus(doc.expiry_date);
  return {
    doc,
    car,
    status,
    daysLeft,
    typeLabel: cfg.label,
    typeAbbr: cfg.abbr,
    typeColor: cfg.color,
    carLabel: car ? `${car.make} ${car.model}` : '—'
  };
}
let DocumentsListComponent = class DocumentsListComponent {
  get availableCars() {
    return this.cars;
  }
  get availableTypes() {
    return [...new Set(this.allDocs.map(d => d.doc.document_type))];
  }
  constructor(_facade, _router) {
    this._facade = _facade;
    this._router = _router;
    this.loading = false;
    // ── Raw data ──────────────────────────────────────────────────────
    this.allDocs = [];
    this.cars = [];
    // ── Filter state ─────────────────────────────────────────────────
    this.selectedCarId = 'all';
    this.selectedType = 'all';
    this.selectedStatus = 'all';
    this.searchQuery = '';
    // ── Derived ──────────────────────────────────────────────────────
    this.filteredDocs = [];
    this.openMenuId = null;
    this.statuses = [{
      value: 'all',
      label: 'All statuses'
    }, {
      value: 'valid',
      label: 'Valid'
    }, {
      value: 'expiring',
      label: 'Expiring soon'
    }, {
      value: 'expired',
      label: 'Expired'
    }, {
      value: 'no-expiry',
      label: 'No expiry'
    }];
    this.docTypeConfig = DOC_TYPE_CONFIG;
    (0,ionicons__WEBPACK_IMPORTED_MODULE_4__.a)({
      addOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.addOutline,
      chevronDownOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.chevronDownOutline,
      searchOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.searchOutline,
      eyeOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.eyeOutline,
      createOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.createOutline,
      trashOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.trashOutline,
      ellipsisHorizontalOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.ellipsisHorizontalOutline,
      documentOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.documentOutline,
      documentTextOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.documentTextOutline,
      shieldCheckmarkOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.shieldCheckmarkOutline,
      carOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.carOutline,
      cashOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.cashOutline
    });
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._facade.cars$, this._facade.documents$, this._facade.loading$]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(([cars, documents, loading]) => {
      this.loading = loading;
      this.cars = cars;
      this.allDocs = documents.map(doc => buildViewModel(doc, cars));
      this.applyFilters();
    });
    this._facade.loadAll();
  }
  // ── Filters ───────────────────────────────────────────────────────
  onCarChange(event) {
    const val = event.target.value;
    this.selectedCarId = val === 'all' ? 'all' : Number(val);
    this.applyFilters();
  }
  onTypeChange(event) {
    this.selectedType = event.target.value;
    this.applyFilters();
  }
  onStatusChange(event) {
    this.selectedStatus = event.target.value;
    this.applyFilters();
  }
  onSearchInput(event) {
    this.searchQuery = event.target.value;
    this.applyFilters();
  }
  applyFilters() {
    let docs = this.allDocs;
    if (this.selectedCarId !== 'all') {
      docs = docs.filter(d => d.doc.car_id === this.selectedCarId);
    }
    if (this.selectedType !== 'all') {
      docs = docs.filter(d => d.doc.document_type === this.selectedType);
    }
    if (this.selectedStatus !== 'all') {
      docs = docs.filter(d => d.status === this.selectedStatus);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      docs = docs.filter(d => d.typeLabel.toLowerCase().includes(q) || d.carLabel.toLowerCase().includes(q) || d.doc.document_type.toLowerCase().includes(q));
    }
    this.filteredDocs = docs;
  }
  // ── Actions ───────────────────────────────────────────────────────
  toggleMenu(event, id) {
    event.stopPropagation();
    this.openMenuId = this.openMenuId === id ? null : id;
  }
  deleteDocument(event, id) {
    event.stopPropagation();
    this.openMenuId = null;
    this._facade.deleteDocument(id);
  }
  navigateToAdd() {
    void this._router.navigate([_hau_features_documents_documents_routes_const__WEBPACK_IMPORTED_MODULE_2__.DOCUMENTS_ROUTES.add.fullPath]);
  }
  navigateToView(id) {
    void this._router.navigate([`/main/documents/${id}`]);
  }
  navigateToEdit(event, id) {
    event.stopPropagation();
    this.openMenuId = null;
    void this._router.navigate([`/main/documents/${id}/edit`]);
  }
  closeMenus() {
    this.openMenuId = null;
  }
  // ── Helpers ───────────────────────────────────────────────────────
  typeConfig(type) {
    return docTypeConfig(type);
  }
  get totalCount() {
    return this.filteredDocs.length;
  }
  get totalAll() {
    return this.allDocs.length;
  }
  docTypeLabelFor(type) {
    return docTypeConfig(type).label;
  }
  static {
    this.ɵfac = function DocumentsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_hau_features_documents_state_documents_facade__WEBPACK_IMPORTED_MODULE_10__.DocumentsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: DocumentsListComponent,
      selectors: [["app-documents-list"]],
      hostBindings: function DocumentsListComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_click_HostBindingHandler() {
            return ctx.closeMenus();
          }, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveDocument"]);
        }
      },
      decls: 39,
      vars: 5,
      consts: [[1, "docs-page", 3, "click"], [1, "docs-inner"], [1, "docs-header"], [1, "docs-header-left"], [1, "docs-title"], [1, "docs-subtitle"], [1, "docs-header-right"], [1, "add-doc-btn", 3, "click"], ["name", "add-outline"], [1, "filter-bar", 3, "click"], [1, "filter-select-wrap"], [1, "filter-select", 3, "change"], ["value", "all"], [3, "value"], ["name", "chevron-down-outline", 1, "select-chevron"], [1, "search-wrap"], ["name", "search-outline", 1, "search-icon"], ["type", "text", "placeholder", "Search documents...", 1, "search-input", 3, "input", "value"], [1, "loading-state"], [1, "empty-state"], [1, "table-wrap"], [1, "card-list"], ["name", "crescent"], ["name", "document-text-outline", 1, "empty-icon"], [1, "empty-text"], [1, "empty-cta"], [1, "empty-cta", 3, "click"], [1, "doc-table"], [1, "col-doc"], [1, "col-vehicle"], [1, "col-type"], [1, "col-date"], [1, "col-status"], [1, "col-actions"], [1, "doc-row", "doc-row--clickable"], [1, "table-footer"], [1, "doc-row", "doc-row--clickable", 3, "click"], [1, "doc-identity"], [1, "doc-name-wrap"], [1, "doc-name"], [1, "vehicle-label"], [1, "vehicle-plate"], [1, "no-expiry-dash"], [1, "col-actions", 3, "click"], [1, "actions-wrap"], ["title", "View", 1, "action-btn", 3, "click"], ["name", "eye-outline"], [1, "action-more-wrap", 3, "click"], ["title", "More", 1, "action-btn", 3, "click"], ["name", "ellipsis-horizontal-outline"], [1, "action-menu"], [1, "action-menu-item", 3, "click"], ["name", "create-outline"], [1, "action-menu-item", "danger", 3, "click"], ["name", "trash-outline"], [1, "doc-card", "doc-card--clickable"], [1, "list-end-note"], [1, "doc-card", "doc-card--clickable", 3, "click"], [1, "card-left"], [1, "card-body"], [1, "card-top-row"], [1, "card-name"], [1, "card-vehicle"], ["name", "car-outline"], [1, "card-date"], [1, "card-actions", 3, "click"], [1, "action-more-wrap"], [1, "action-btn", 3, "click"], [1, "action-menu", "action-menu--left"], [1, "days-badge"]],
      template: function DocumentsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Template_ion_content_click_0_listener() {
            return ctx.closeMenus();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "All documents for your vehicles");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Template_button_click_9_listener() {
            return ctx.navigateToAdd();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "ion-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Add document ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentsListComponent_Template_div_click_12_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 10)(14, "select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function DocumentsListComponent_Template_select_change_14_listener($event) {
            return ctx.onCarChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "All vehicles");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](17, DocumentsListComponent_For_18_Template, 2, 3, "option", 13, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "ion-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 10)(21, "select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function DocumentsListComponent_Template_select_change_21_listener($event) {
            return ctx.onTypeChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "All document types");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](24, DocumentsListComponent_For_25_Template, 2, 2, "option", 13, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "ion-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 10)(28, "select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function DocumentsListComponent_Template_select_change_28_listener($event) {
            return ctx.onStatusChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](29, DocumentsListComponent_For_30_Template, 2, 2, "option", 13, _forTrack1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "ion-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "ion-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function DocumentsListComponent_Template_input_input_34_listener($event) {
            return ctx.onSearchInput($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](35, DocumentsListComponent_Conditional_35_Template, 4, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](36, DocumentsListComponent_Conditional_36_Template, 6, 2, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](37, DocumentsListComponent_Conditional_37_Template, 21, 2, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](38, DocumentsListComponent_Conditional_38_Template, 5, 2, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx.availableCars);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx.availableTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx.statuses);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.loading ? 35 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](!ctx.loading && ctx.filteredDocs.length === 0 ? 36 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](!ctx.loading && ctx.filteredDocs.length > 0 ? 37 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](!ctx.loading && ctx.filteredDocs.length > 0 ? 38 : -1);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.docs-page[_ngcontent-%COMP%] {\n  --background: var(--hau-bg);\n}\n\n.docs-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 20px 16px 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n@media (min-width: 768px) {\n  .docs-inner[_ngcontent-%COMP%] {\n    padding: 28px 24px 56px;\n    gap: 20px;\n  }\n}\n@media (min-width: 1024px) {\n  .docs-inner[_ngcontent-%COMP%] {\n    padding: 32px 32px 64px;\n    gap: 24px;\n  }\n}\n\n.docs-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.docs-header-left[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.docs-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--hau-text);\n  margin: 0;\n  line-height: 1.2;\n}\n@media (min-width: 768px) {\n  .docs-title[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n}\n@media (min-width: 1024px) {\n  .docs-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n}\n\n.docs-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--hau-text-muted);\n  margin: 4px 0 0;\n}\n\n.docs-header-right[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.add-doc-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: var(--hau-primary);\n  color: #fff;\n  border: none;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 14px var(--hau-primary-shadow);\n  transition: background var(--hau-transition-fast);\n  white-space: nowrap;\n}\n.add-doc-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.add-doc-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-strong);\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.filter-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.filter-select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  padding: 8px 30px 8px 12px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.83rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  cursor: pointer;\n  min-width: 130px;\n  transition: border-color var(--hau-transition-fast);\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--hau-primary);\n}\n.filter-select[_ngcontent-%COMP%]:hover {\n  border-color: var(--hau-border-hover);\n}\n\n.select-chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  font-size: 0.78rem;\n  color: var(--hau-text-dim);\n  pointer-events: none;\n}\n\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  min-width: 160px;\n  max-width: 300px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 11px;\n  font-size: 0.95rem;\n  color: var(--hau-text-dim);\n  pointer-events: none;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.84rem;\n  color: var(--hau-text);\n  transition: border-color var(--hau-transition-fast);\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--hau-text-dim);\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--hau-primary);\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 56px 24px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-xl);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--hau-text-muted);\n  margin: 0;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 56px 24px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-xl);\n  box-shadow: var(--hau-shadow-soft);\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  color: var(--hau-text-dim);\n}\n\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--hau-text-muted);\n  margin: 0;\n  text-align: center;\n}\n\n.empty-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: var(--hau-primary);\n  color: #fff;\n  border: none;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.86rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 12px var(--hau-primary-shadow);\n  transition: background var(--hau-transition-fast);\n}\n.empty-cta[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.empty-cta[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-strong);\n}\n\n.doc-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--hau-radius-sm);\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.doc-badge.doc-badge--purple[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.14);\n  color: #7c3aed;\n}\n.doc-badge.doc-badge--blue[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.14);\n  color: #2563eb;\n}\n.doc-badge.doc-badge--indigo[_ngcontent-%COMP%] {\n  background: rgba(67, 56, 202, 0.14);\n  color: #4338ca;\n}\n.doc-badge.doc-badge--green[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.14);\n  color: #15803d;\n}\n.doc-badge.doc-badge--amber[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.14);\n  color: #b45309;\n}\n.doc-badge.doc-badge--slate[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.14);\n  color: #475569;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.74rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.status-badge.status-badge--valid[_ngcontent-%COMP%] {\n  background: var(--hau-success-soft);\n  color: var(--hau-success-fg);\n}\n.status-badge.status-badge--expiring[_ngcontent-%COMP%] {\n  background: var(--hau-warning-soft);\n  color: #b45309;\n}\n.status-badge.status-badge--expired[_ngcontent-%COMP%] {\n  background: var(--hau-danger-soft);\n  color: var(--hau-danger-fg);\n}\n.status-badge.status-badge--no-expiry[_ngcontent-%COMP%] {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text-muted);\n}\n\n.actions-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.action-more-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: none;\n  border: none;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  transition: background var(--hau-transition-fast), color var(--hau-transition-fast);\n}\n.action-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text);\n}\n\n.action-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 36px;\n  right: 0;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-md);\n  box-shadow: var(--hau-shadow-md);\n  z-index: 50;\n  min-width: 140px;\n  overflow: hidden;\n}\n.action-menu.action-menu--left[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n}\n\n.action-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 10px 14px;\n  background: none;\n  border: none;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  cursor: pointer;\n  text-align: left;\n  transition: background var(--hau-transition-fast);\n}\n.action-menu-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--hau-text-dim);\n}\n.action-menu-item[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n.action-menu-item[_ngcontent-%COMP%]    + .action-menu-item[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n}\n.action-menu-item.danger[_ngcontent-%COMP%] {\n  color: var(--hau-danger-fg);\n}\n.action-menu-item.danger[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--hau-danger-fg);\n}\n\n.no-expiry-dash[_ngcontent-%COMP%] {\n  color: var(--hau-text-dim);\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-xl);\n  box-shadow: var(--hau-shadow-soft);\n  overflow: hidden;\n  display: none;\n}\n@media (min-width: 900px) {\n  .table-wrap[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.doc-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.doc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--hau-border);\n  background: var(--hau-bg-soft);\n}\n.doc-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  font-size: 0.73rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--hau-text-dim);\n  text-align: left;\n  white-space: nowrap;\n}\n.doc-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 0.86rem;\n  color: var(--hau-text);\n  vertical-align: middle;\n}\n\n.doc-row[_ngcontent-%COMP%] {\n  transition: background var(--hau-transition-fast);\n  cursor: default;\n}\n.doc-row[_ngcontent-%COMP%]    + .doc-row[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n}\n.doc-row[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n.doc-row--clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.col-doc[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.col-vehicle[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.col-type[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n\n.col-date[_ngcontent-%COMP%] {\n  min-width: 110px;\n  white-space: nowrap;\n}\n\n.col-status[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n\n.col-actions[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n\n.doc-identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.doc-name-wrap[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.doc-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--hau-text);\n  font-size: 0.88rem;\n}\n\n.vehicle-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: var(--hau-text);\n  font-size: 0.86rem;\n}\n\n.vehicle-plate[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--hau-text-muted);\n  margin-top: 2px;\n}\n\n.table-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-top: 1px solid var(--hau-border);\n  font-size: 0.82rem;\n  color: var(--hau-text-muted);\n  background: var(--hau-bg-soft);\n}\n\n.card-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n@media (min-width: 900px) {\n  .card-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.doc-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-lg);\n  box-shadow: var(--hau-shadow-soft);\n}\n.doc-card--clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.doc-card[_ngcontent-%COMP%] {\n  transition: box-shadow var(--hau-transition-fast);\n}\n.doc-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--hau-shadow-md);\n}\n\n.card-left[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding-top: 2px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.card-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.card-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.card-vehicle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.8rem;\n  color: var(--hau-text-muted);\n  font-weight: 500;\n}\n.card-vehicle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n\n.card-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--hau-text-dim);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.days-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 1px 7px;\n  border-radius: var(--hau-radius-pill);\n  background: var(--hau-warning-soft);\n  color: #b45309;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex-shrink: 0;\n  padding-top: 2px;\n}\n\n.list-end-note[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px;\n  font-size: 0.82rem;\n  color: var(--hau-text-dim);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZG9jdW1lbnRzL2RvY3VtZW50cy1saXN0L2RvY3VtZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsY0FBQTtBQUVSOztBQUFBO0VBQWEsMkJBQUE7QUFJYjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUtGO0FBSEU7RUFSRjtJQVErQix1QkFBQTtJQUF5QixTQUFBO0VBUXREO0FBQ0Y7QUFSRTtFQVRGO0lBUytCLHVCQUFBO0lBQXlCLFNBQUE7RUFhdEQ7QUFDRjs7QUFWQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQWFGOztBQVZBO0VBQW9CLFlBQUE7QUFjcEI7O0FBWkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFlRjtBQWJFO0VBUEY7SUFPK0IsaUJBQUE7RUFpQjdCO0FBQ0Y7QUFqQkU7RUFSRjtJQVErQixpQkFBQTtFQXFCN0I7QUFDRjs7QUFuQkE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQXNCRjs7QUFuQkE7RUFBcUIsY0FBQTtBQXVCckI7O0FBckJBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0FBd0JGO0FBdEJFO0VBQVcsZUFBQTtBQXlCYjtBQXhCRTtFQUFVLHFDQUFBO0FBMkJaOztBQXZCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBMEJGOztBQXZCQTtFQUNFLGtCQUFBO0VB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QixnQkFBQTtBQTBIN0I7O0FBeEhBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBMkhGOztBQXhIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsUUFBQTtBQTJIRjs7QUF4SEE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBMkhGOztBQXhIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUEySEY7QUF6SEU7RUFBVyxpQkFBQTtFQUFtQixjQUFBO0FBNkhoQzs7QUExSEE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQTZIRjs7QUExSEE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBNkhGOztBQTFIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUE2SEY7O0FBMUhBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQTZIRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cblxuLmRvY3MtcGFnZSB7IC0tYmFja2dyb3VuZDogdmFyKC0taGF1LWJnKTsgfVxuXG4uZG9jcy1pbm5lciB7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweCAxNnB4IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpICB7IHBhZGRpbmc6IDI4cHggMjRweCA1NnB4OyBnYXA6IDIwcHg7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBwYWRkaW5nOiAzMnB4IDMycHggNjRweDsgZ2FwOiAyNHB4OyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBQYWdlIGhlYWRlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5kb2NzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTJweDtcbn1cblxuLmRvY3MtaGVhZGVyLWxlZnQgeyBtaW4td2lkdGg6IDA7IH1cblxuLmRvY3MtdGl0bGUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgIHsgZm9udC1zaXplOiAxLjlyZW07IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBmb250LXNpemU6IDIuMXJlbTsgfVxufVxuXG4uZG9jcy1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgbWFyZ2luOiA0cHggMCAwO1xufVxuXG4uZG9jcy1oZWFkZXItcmlnaHQgeyBmbGV4LXNocmluazogMDsgfVxuXG4uYWRkLWRvYy1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDlweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtcGlsbCk7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHZhcigtLWhhdS1wcmltYXJ5LXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDFyZW07IH1cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1wcmltYXJ5LXN0cm9uZyk7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEZpbHRlciBiYXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZmlsdGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5maWx0ZXItc2VsZWN0LXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maWx0ZXItc2VsZWN0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBwYWRkaW5nOiA4cHggMzBweCA4cHggMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjgzcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICAmOmZvY3VzICB7IG91dGxpbmU6IG5vbmU7IGJvcmRlci1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpOyB9XG4gICY6aG92ZXIgIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1oYXUtYm9yZGVyLWhvdmVyKTsgfVxufVxuXG4uc2VsZWN0LWNoZXZyb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNlYXJjaC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDExcHg7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweCAxMnB4IDhweCAzNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xuICBmb250LXNpemU6IDAuODRyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICAmOjpwbGFjZWhvbGRlciB7IGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pOyB9XG4gICY6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyBib3JkZXItY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgTG9hZGluZyAvIGVtcHR5IHN0YXRlcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5sb2FkaW5nLXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiA1NnB4IDI0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMteGwpO1xuXG4gIHAgeyBmb250LXNpemU6IDAuOXJlbTsgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTsgbWFyZ2luOiAwOyB9XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogNTZweCAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXhsKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGF1LXNoYWRvdy1zb2Z0KTtcbn1cblxuLmVtcHR5LWljb24gIHsgZm9udC1zaXplOiAyLjhyZW07IGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pOyB9XG4uZW1wdHktdGV4dCAgeyBmb250LXNpemU6IDAuOXJlbTsgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTsgbWFyZ2luOiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmVtcHR5LWN0YSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogOXB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggdmFyKC0taGF1LXByaW1hcnktc2hhZG93KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMXJlbTsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc3Ryb25nKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgRG9jdW1lbnQgdHlwZSBiYWRnZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5kb2MtYmFkZ2Uge1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtc20pO1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgJi5kb2MtYmFkZ2UtLXB1cnBsZSB7IGJhY2tncm91bmQ6IHJnYmEoMTI0LCA1OCwgMjM3LCAwLjE0KTsgY29sb3I6ICM3YzNhZWQ7IH1cbiAgJi5kb2MtYmFkZ2UtLWJsdWUgICB7IGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMTQpOyAgY29sb3I6ICMyNTYzZWI7IH1cbiAgJi5kb2MtYmFkZ2UtLWluZGlnbyB7IGJhY2tncm91bmQ6IHJnYmEoNjcsIDU2LCAyMDIsIDAuMTQpOyAgY29sb3I6ICM0MzM4Y2E7IH1cbiAgJi5kb2MtYmFkZ2UtLWdyZWVuICB7IGJhY2tncm91bmQ6IHJnYmEoMjIsIDE2MywgNzQsIDAuMTQpOyAgY29sb3I6ICMxNTgwM2Q7IH1cbiAgJi5kb2MtYmFkZ2UtLWFtYmVyICB7IGJhY2tncm91bmQ6IHJnYmEoMjE3LCAxMTksIDYsIDAuMTQpOyAgY29sb3I6ICNiNDUzMDk7IH1cbiAgJi5kb2MtYmFkZ2UtLXNsYXRlICB7IGJhY2tncm91bmQ6IHJnYmEoMTAwLCAxMTYsIDEzOSwgMC4xNCk7IGNvbG9yOiAjNDc1NTY5OyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBTdGF0dXMgYmFkZ2Ugw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc3RhdHVzLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xuICBmb250LXNpemU6IDAuNzRyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJi5zdGF0dXMtYmFkZ2UtLXZhbGlkICAgICB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdWNjZXNzLXNvZnQpOyAgY29sb3I6IHZhcigtLWhhdS1zdWNjZXNzLWZnKTsgfVxuICAmLnN0YXR1cy1iYWRnZS0tZXhwaXJpbmcgIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXdhcm5pbmctc29mdCk7ICBjb2xvcjogI2I0NTMwOTsgfVxuICAmLnN0YXR1cy1iYWRnZS0tZXhwaXJlZCAgIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWRhbmdlci1zb2Z0KTsgICBjb2xvcjogdmFyKC0taGF1LWRhbmdlci1mZyk7IH1cbiAgJi5zdGF0dXMtYmFkZ2UtLW5vLWV4cGlyeSB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1ob3Zlci1iZyk7ICAgICAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgQWN0aW9uIGJ1dHRvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uYWN0aW9ucy13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycHg7XG59XG5cbi5hY3Rpb24tbW9yZS13cmFwIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5hY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCksIGNvbG9yIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAxcmVtOyB9XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpOyBjb2xvcjogdmFyKC0taGF1LXRleHQpOyB9XG59XG5cbi5hY3Rpb24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNnB4O1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1tZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhhdS1zaGFkb3ctbWQpO1xuICB6LWluZGV4OiA1MDtcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmLmFjdGlvbi1tZW51LS1sZWZ0IHsgcmlnaHQ6IDA7IGxlZnQ6IGF1dG87IH1cbn1cblxuLmFjdGlvbi1tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDAuODRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC45NXJlbTsgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7IH1cbiAgJjpob3ZlciAgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpOyB9XG4gICYgKyAmICAgIHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpOyB9XG5cbiAgJi5kYW5nZXIge1xuICAgIGNvbG9yOiB2YXIoLS1oYXUtZGFuZ2VyLWZnKTtcbiAgICBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1oYXUtZGFuZ2VyLWZnKTsgfVxuICB9XG59XG5cbi5uby1leHBpcnktZGFzaCB7IGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pOyB9XG5cbi8vIMOiwpTCgMOiwpTCgCBERVNLVE9QIFRBQkxFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gVmlzaWJsZSBvbmx5IG9uIMOiwonCpTkwMHB4XG4udGFibGUtd3JhcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1oYXUtc2hhZG93LXNvZnQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgeyBkaXNwbGF5OiBibG9jazsgfVxufVxuXG4uZG9jLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cbiAgdGhlYWQgdHIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYmctc29mdCk7XG4gIH1cblxuICB0aCB7XG4gICAgcGFkZGluZzogMTFweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMC43M3JlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICB0ZCB7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cblxuLmRvYy1yb3cge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgJiArICYgeyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7IH1cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1ob3Zlci1iZyk7IH1cbiAgJi0tY2xpY2thYmxlIHsgY3Vyc29yOiBwb2ludGVyOyB9XG59XG5cbi5jb2wtZG9jICAgICB7IG1pbi13aWR0aDogMjAwcHg7IH1cbi5jb2wtdmVoaWNsZSB7IG1pbi13aWR0aDogMTUwcHg7IH1cbi5jb2wtdHlwZSAgICB7IG1pbi13aWR0aDogMTYwcHg7IH1cbi5jb2wtZGF0ZSAgICB7IG1pbi13aWR0aDogMTEwcHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbi5jb2wtc3RhdHVzICB7IG1pbi13aWR0aDogMTIwcHg7IH1cbi5jb2wtYWN0aW9ucyB7IG1pbi13aWR0aDogODBweDsgfVxuXG4uZG9jLWlkZW50aXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZG9jLW5hbWUtd3JhcCB7IG1pbi13aWR0aDogMDsgfVxuLmRvYy1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xufVxuXG4udmVoaWNsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBmb250LXNpemU6IDAuODZyZW07XG59XG5cbi52ZWhpY2xlLXBsYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4udGFibGUtZm9vdGVyIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LWJnLXNvZnQpO1xufVxuXG4vLyDDosKUwoDDosKUwoAgTU9CSUxFIENBUkQgTElTVCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFZpc2libGUgb25seSBvbiA8OTAwcHhcbi5jYXJkLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cblxuLmRvYy1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLWxnKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGF1LXNoYWRvdy1zb2Z0KTtcbiAgJi0tY2xpY2thYmxlIHsgY3Vyc29yOiBwb2ludGVyOyB9XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgJjpob3ZlciB7IGJveC1zaGFkb3c6IHZhcigtLWhhdS1zaGFkb3ctbWQpOyB9XG59XG5cbi5jYXJkLWxlZnQgeyBmbGV4LXNocmluazogMDsgcGFkZGluZy10b3A6IDJweDsgfVxuXG4uY2FyZC1ib2R5IHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbn1cblxuLmNhcmQtdG9wLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jYXJkLW5hbWUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgbWluLXdpZHRoOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNhcmQtdmVoaWNsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC45cmVtOyBmbGV4LXNocmluazogMDsgfVxufVxuXG4uY2FyZC1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG59XG5cbi5kYXlzLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDFweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtcGlsbCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS13YXJuaW5nLXNvZnQpO1xuICBjb2xvcjogI2I0NTMwOTtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY2FyZC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuXG4ubGlzdC1lbmQtbm90ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
};
DocumentsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()], DocumentsListComponent);


/***/ },

/***/ 47826
/*!**************************************************************!*\
  !*** ./src/app/features/documents/documents.routes.const.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOCUMENTS_ROUTES: () => (/* binding */ DOCUMENTS_ROUTES)
/* harmony export */ });
const DOCUMENTS_ROUTES = {
  list: {
    path: '',
    fullPath: '/main/documents'
  },
  add: {
    path: 'add',
    fullPath: '/main/documents/add'
  },
  edit: {
    path: ':id/edit',
    fullPath: '/main/documents'
  },
  view: {
    path: ':id',
    fullPath: '/main/documents'
  }
};

/***/ }

}]);
//# sourceMappingURL=default-src_app_features_documents_documents-list_documents-list_component_ts.js.map