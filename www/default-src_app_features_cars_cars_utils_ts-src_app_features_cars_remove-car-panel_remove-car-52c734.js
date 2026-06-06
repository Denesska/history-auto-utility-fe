"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_features_cars_cars_utils_ts-src_app_features_cars_remove-car-panel_remove-car-52c734"],{

/***/ 5680
/*!*********************************************!*\
  !*** ./src/app/features/cars/cars.utils.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysUntil: () => (/* binding */ daysUntil),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatMileage: () => (/* binding */ formatMileage),
/* harmony export */   getDocExpiry: () => (/* binding */ getDocExpiry),
/* harmony export */   removeNullProperties: () => (/* binding */ removeNullProperties)
/* harmony export */ });
function getDocExpiry(docs, type) {
  if (!docs) return null;
  return docs.find(d => d.document_type === type && d.expiry_date)?.expiry_date ?? null;
}
function removeNullProperties(obj) {
  const clone = {
    ...obj
  };
  for (const key in clone) {
    if (clone[key] === null) {
      delete clone[key];
    }
  }
  return clone;
}
function daysUntil(dateStr) {
  if (!dateStr) return null;
  return Math.ceil((new Date(dateStr).getTime() - Date.now()) / 86400000);
}
function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}
function formatMileage(val) {
  if (val == null) return '—';
  return Number(val).toLocaleString() + ' km';
}

/***/ },

/***/ 3090
/*!******************************************************************************!*\
  !*** ./src/app/features/cars/remove-car-panel/remove-car-panel.component.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveCarPanelComponent: () => (/* binding */ RemoveCarPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 36124);





function RemoveCarPanelComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemoveCarPanelComponent_Conditional_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.restore.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 14)(4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Add back to garage");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Restore as an active vehicle. All history preserved.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RemoveCarPanelComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemoveCarPanelComponent_Conditional_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.markSold.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 14)(4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Mark as sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Archived in Former vehicles. All history preserved, read-only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class RemoveCarPanelComponent {
  constructor() {
    this.carName = '';
    this.isSold = false;
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.markSold = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.restore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.deletePermanently = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    (0,ionicons__WEBPACK_IMPORTED_MODULE_2__.a)({
      checkmarkCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.checkmarkCircleOutline,
      trashOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.trashOutline,
      closeOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.closeOutline,
      chevronForwardOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.chevronForwardOutline,
      refreshOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.refreshOutline
    });
  }
  static {
    this.ɵfac = function RemoveCarPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RemoveCarPanelComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: RemoveCarPanelComponent,
      selectors: [["app-remove-car-panel"]],
      inputs: {
        carName: "carName",
        isSold: "isSold"
      },
      outputs: {
        closed: "closed",
        markSold: "markSold",
        restore: "restore",
        deletePermanently: "deletePermanently"
      },
      decls: 27,
      vars: 3,
      consts: [[1, "rcp-backdrop", 3, "click"], [1, "rcp-sheet", 3, "click"], [1, "rcp-header"], [1, "rcp-header-text"], [1, "rcp-title"], [1, "rcp-subtitle"], [1, "rcp-close", 3, "click"], ["name", "close-outline"], [1, "rcp-options"], [1, "rcp-option", "rcp-option--restore"], [1, "rcp-option"], [1, "rcp-option", "rcp-option--danger", 3, "click"], [1, "rcp-option-icon", "rcp-option-icon--delete"], ["name", "trash-outline"], [1, "rcp-option-body"], [1, "rcp-option-title"], [1, "rcp-option-desc"], ["name", "chevron-forward-outline", 1, "rcp-option-arrow"], [1, "rcp-cancel", 3, "click"], [1, "rcp-option", "rcp-option--restore", 3, "click"], [1, "rcp-option-icon", "rcp-option-icon--restore"], ["name", "refresh-outline"], [1, "rcp-option", 3, "click"], [1, "rcp-option-icon", "rcp-option-icon--sold"], ["name", "checkmark-circle-outline"]],
      template: function RemoveCarPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemoveCarPanelComponent_Template_div_click_0_listener() {
            return ctx.closed.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemoveCarPanelComponent_Template_div_click_1_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "What do you want to do with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "?");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemoveCarPanelComponent_Template_button_click_11_listener() {
            return ctx.closed.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ion-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](14, RemoveCarPanelComponent_Conditional_14_Template, 9, 0, "button", 9)(15, RemoveCarPanelComponent_Conditional_15_Template, 9, 0, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemoveCarPanelComponent_Template_button_click_16_listener() {
            return ctx.deletePermanently.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "ion-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14)(20, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Delete permanently");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "All data deleted. This cannot be undone.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "ion-icon", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemoveCarPanelComponent_Template_button_click_25_listener() {
            return ctx.closed.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.isSold ? "Manage archived vehicle" : "Remove from garage");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.carName);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.isSold ? 14 : 15);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonIcon],
      styles: [".rcp-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  z-index: 1000;\n  padding: 0 0 env(safe-area-inset-bottom, 0);\n}\n@media (min-width: 640px) {\n  .rcp-backdrop[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n\n.rcp-sheet[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  background: var(--hau-surface);\n  border-radius: var(--hau-radius-xl) var(--hau-radius-xl) 0 0;\n  padding: 24px 20px 20px;\n  box-shadow: 0 -4px 32px rgba(0, 0, 0, 0.18);\n}\n@media (min-width: 640px) {\n  .rcp-sheet[_ngcontent-%COMP%] {\n    border-radius: var(--hau-radius-xl);\n    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.22);\n  }\n}\n\n.rcp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n\n.rcp-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  margin: 0 0 4px;\n}\n\n.rcp-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--hau-text-muted);\n  margin: 0;\n}\n.rcp-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--hau-text);\n}\n\n.rcp-close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  padding: 4px;\n  cursor: pointer;\n  color: var(--hau-text-dim);\n  font-size: 1.25rem;\n  line-height: 1;\n  border-radius: 50%;\n  transition: background 0.15s, color 0.15s;\n}\n.rcp-close[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text);\n}\n\n.rcp-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n\n.rcp-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 14px 14px 14px 14px;\n  background: var(--hau-bg);\n  border: 1.5px solid var(--hau-border);\n  border-radius: var(--hau-radius-md);\n  cursor: pointer;\n  text-align: left;\n  transition: border-color 0.15s, background 0.15s;\n}\n.rcp-option[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n  border-color: var(--hau-primary);\n}\n.rcp-option--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.05);\n  border-color: rgba(239, 68, 68, 0.5);\n}\n\n.rcp-option-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.rcp-option-icon--sold[_ngcontent-%COMP%] {\n  background: var(--hau-success-soft, rgba(34, 197, 94, 0.12));\n  color: var(--hau-success-fg, #16a34a);\n}\n.rcp-option-icon--delete[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: var(--hau-danger, #ef4444);\n}\n.rcp-option-icon--restore[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: var(--hau-primary, #2563eb);\n}\n\n.rcp-option-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.rcp-option-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--hau-text);\n}\n.rcp-option--danger[_ngcontent-%COMP%]   .rcp-option-title[_ngcontent-%COMP%] {\n  color: var(--hau-danger, #ef4444);\n}\n\n.rcp-option-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--hau-text-muted);\n  line-height: 1.4;\n}\n\n.rcp-option-arrow[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 1rem;\n  color: var(--hau-text-dim);\n}\n\n.rcp-cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px;\n  background: none;\n  border: none;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--hau-text-muted);\n  cursor: pointer;\n  border-radius: var(--hau-radius-md);\n  transition: background 0.15s, color 0.15s;\n}\n.rcp-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2Fycy9yZW1vdmUtY2FyLXBhbmVsL3JlbW92ZS1jYXItcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7QUFBRjtBQUVFO0VBVkY7SUFXSSxtQkFBQTtFQUNGO0FBQ0Y7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDREQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtBQUFGO0FBRUU7RUFSRjtJQVNJLG1DQUFBO0lBQ0EsMENBQUE7RUFDRjtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0FBQUY7QUFFRTtFQUFTLHNCQUFBO0FBQ1g7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFDRjtBQUNFO0VBQVUsK0JBQUE7RUFBaUMsc0JBQUE7QUFHN0M7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtBQUVGO0FBQUU7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FBRUo7QUFDRTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUFGO0FBRUU7RUFDRSw0REFBQTtFQUNBLHFDQUFBO0FBQUo7QUFHRTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7QUFESjtBQUlFO0VBQ0UsbUNBQUE7RUFDQSxrQ0FBQTtBQUZKOztBQU1BO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUhGO0FBS0U7RUFBd0IsaUNBQUE7QUFGMUI7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFGRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7QUFIRjtBQUtFO0VBQVUsK0JBQUE7RUFBaUMsc0JBQUE7QUFEN0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDDosKUwoDDosKUwoDDosKUwoAgQmFja2Ryb3Agw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucmNwLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZzogMCAwIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tLCAwKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBTaGVldCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5yY3Atc2hlZXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXhsKSB2YXIoLS1oYXUtcmFkaXVzLXhsKSAwIDA7XG4gIHBhZGRpbmc6IDI0cHggMjBweCAyMHB4O1xuICBib3gtc2hhZG93OiAwIC00cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMteGwpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgSGVhZGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnJjcC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5yY3AtdGl0bGUge1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIG1hcmdpbjogMCAwIDRweDtcbn1cblxuLnJjcC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgbWFyZ2luOiAwO1xuXG4gIHN0cm9uZyB7IGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7IH1cbn1cblxuLnJjcC1jbG9zZSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzLCBjb2xvciAwLjE1cztcblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTsgY29sb3I6IHZhcigtLWhhdS10ZXh0KTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgT3B0aW9ucyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5yY3Atb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnJjcC1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNHB4IDE0cHggMTRweCAxNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYmcpO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLW1kKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMsIGJhY2tncm91bmQgMC4xNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgfVxuXG4gICYtLWRhbmdlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4wNSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjUpO1xuICB9XG59XG5cbi5yY3Atb3B0aW9uLWljb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuXG4gICYtLXNvbGQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdWNjZXNzLXNvZnQsIHJnYmEoMzQsMTk3LDk0LDAuMTIpKTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXN1Y2Nlc3MtZmcsICMxNmEzNGEpO1xuICB9XG5cbiAgJi0tZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEyKTtcbiAgICBjb2xvcjogdmFyKC0taGF1LWRhbmdlciwgI2VmNDQ0NCk7XG4gIH1cblxuICAmLS1yZXN0b3JlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXByaW1hcnksICMyNTYzZWIpO1xuICB9XG59XG5cbi5yY3Atb3B0aW9uLWJvZHkge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cblxuLnJjcC1vcHRpb24tdGl0bGUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcblxuICAucmNwLW9wdGlvbi0tZGFuZ2VyICYgeyBjb2xvcjogdmFyKC0taGF1LWRhbmdlciwgI2VmNDQ0NCk7IH1cbn1cblxuLnJjcC1vcHRpb24tZGVzYyB7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLnJjcC1vcHRpb24tYXJyb3cge1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIENhbmNlbCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5yY3AtY2FuY2VsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDExcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1tZCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMsIGNvbG9yIDAuMTVzO1xuXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpOyBjb2xvcjogdmFyKC0taGF1LXRleHQpOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 19275
/*!************************************************!*\
  !*** ./src/app/shared/pipes/image-url.pipe.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageUrlPipe: () => (/* binding */ ImageUrlPipe)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);


class ImageUrlPipe {
  transform(value) {
    if (!value) {
      return 'assets/icon/placeholder.png';
    }
    if (value.startsWith('data:')) {
      return value;
    }
    if (value.startsWith('http')) {
      try {
        const url = new URL(value);
        return `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageBaseUrl}${url.pathname}`;
      } catch {
        return value;
      }
    }
    return `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageBaseUrl}${value}`;
  }
  static {
    this.ɵfac = function ImageUrlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImageUrlPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "imageUrl",
      type: ImageUrlPipe,
      pure: true
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=default-src_app_features_cars_cars_utils_ts-src_app_features_cars_remove-car-panel_remove-car-52c734.js.map