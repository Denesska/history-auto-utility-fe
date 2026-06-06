"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_cars_car-documents_car-documents_component_ts"],{

/***/ 20316
/*!************************************************************************!*\
  !*** ./src/app/features/cars/car-documents/car-documents.component.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarDocumentsComponent: () => (/* binding */ CarDocumentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _hau_features_cars_component_document_list_item_document_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/component/document-list-item/document-list-item.component */ 38570);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 56127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.facade */ 48899);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 83305);








const _forTrack0 = ($index, $item) => $item.id;
function CarDocumentsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-document-list-item", 0);
  }
  if (rf & 2) {
    const document_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("document", document_r1);
  }
}
let CarDocumentsComponent = class CarDocumentsComponent {
  constructor(_carDetailFacade, _activatedRoute) {
    this._carDetailFacade = _carDetailFacade;
    this._activatedRoute = _activatedRoute;
    this.carDocuments$ = this._carDetailFacade.carDocuments$;
  }
  ngOnInit() {
    this._activatedRoute.params.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(params => {
      this._carDetailFacade.loadCarDocuments(params['id']);
    });
  }
  addDocument() {
    // TODO - add document here
  }
  static {
    this.ɵfac = function CarDocumentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_6__.CarDetailsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CarDocumentsComponent,
      selectors: [["app-car-documents"]],
      decls: 7,
      vars: 2,
      consts: [[3, "document"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end", 1, "ion-padding"], ["name", "add"]],
      template: function CarDocumentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, CarDocumentsComponent_For_2_Template, 1, 1, "app-document-list-item", 0, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-fab", 1)(5, "ion-fab-button");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 0, ctx.carDocuments$));
        }
      },
      dependencies: [_hau_features_cars_component_document_list_item_document_list_item_component__WEBPACK_IMPORTED_MODULE_2__.DocumentListItemComponent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonFabButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonFab, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
};
CarDocumentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()], CarDocumentsComponent);


/***/ },

/***/ 38570
/*!********************************************************************************************!*\
  !*** ./src/app/features/cars/component/document-list-item/document-list-item.component.ts ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentListItemComponent: () => (/* binding */ DocumentListItemComponent)
/* harmony export */ });
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);


class DocumentListItemComponent {
  static {
    this.ɵfac = function DocumentListItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentListItemComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocumentListItemComponent,
      selectors: [["app-document-list-item"]],
      inputs: {
        document: "document"
      },
      decls: 13,
      vars: 3,
      consts: [[1, "document-content"], [1, "header"]],
      template: function DocumentListItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-content")(2, "div", 0)(3, "div", 1)(4, "h2")(5, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Expiry date - ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Insurance", ctx.document.document_type);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Issue date - ", ctx.document.issue_date);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.document.expiry_date);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_0__.IonCardContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_0__.IonCard],
      styles: ["[_nghost-%COMP%] {\n  --ion-card-background: #fff;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   .document-content[_ngcontent-%COMP%] {\n  color: rgb(34, 34, 34);\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2Fycy9jb21wb25lbnQvZG9jdW1lbnQtbGlzdC1pdGVtL2RvY3VtZW50LWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7QUFFRTtFQUNFLHNCQUFBO0VBRUEsYUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICNmZmY7XG5cbiAgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gIC5kb2N1bWVudC1jb250ZW50IHtcbiAgICBjb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_cars_car-documents_car-documents_component_ts.js.map