(self["webpackChunkabcdmed_score"] = self["webpackChunkabcdmed_score"] || []).push([["src_app_pages_institution_institution_module_ts"],{

/***/ 4073:
/*!*****************************************************************!*\
  !*** ./src/app/pages/institution/institution-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstitutionPageRoutingModule": () => (/* binding */ InstitutionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


// const routes: Routes = [
//   {
//     path: '',
//     component: InstitutionPage
//   }
// ];
let InstitutionPageRoutingModule = class InstitutionPageRoutingModule {
};
InstitutionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
    // imports: [RouterModule.forChild(routes)],
    // exports: [RouterModule],
    })
], InstitutionPageRoutingModule);



/***/ }),

/***/ 520:
/*!*********************************************************!*\
  !*** ./src/app/pages/institution/institution.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstitutionPageModule": () => (/* binding */ InstitutionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _institution_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./institution-routing.module */ 4073);
/* harmony import */ var _institution_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./institution.page */ 4326);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);








let InstitutionPageModule = class InstitutionPageModule {
};
InstitutionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _institution_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstitutionPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        ],
        declarations: [_institution_page__WEBPACK_IMPORTED_MODULE_1__.InstitutionPage]
    })
], InstitutionPageModule);

const routes = [
    { path: 'hospitals',
        loadChildren: './pages/hospitals/hospitals.module' },
];


/***/ })

}]);
//# sourceMappingURL=src_app_pages_institution_institution_module_ts.js.map