(self["webpackChunkabcdmed_score"] = self["webpackChunkabcdmed_score"] || []).push([["src_app_pages_information_information_module_ts"],{

/***/ 4058:
/*!*****************************************************************!*\
  !*** ./src/app/pages/information/information-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationPageRoutingModule": () => (/* binding */ InformationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information.page */ 8761);




const routes = [
    {
        path: '',
        component: _information_page__WEBPACK_IMPORTED_MODULE_0__.InformationPage
    }
];
let InformationPageRoutingModule = class InformationPageRoutingModule {
};
InformationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InformationPageRoutingModule);



/***/ }),

/***/ 6695:
/*!*********************************************************!*\
  !*** ./src/app/pages/information/information.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationPageModule": () => (/* binding */ InformationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _information_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information-routing.module */ 4058);
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information.page */ 8761);







let InformationPageModule = class InformationPageModule {
};
InformationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _information_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformationPageRoutingModule
        ],
        declarations: [_information_page__WEBPACK_IMPORTED_MODULE_1__.InformationPage]
    })
], InformationPageModule);



/***/ }),

/***/ 8761:
/*!*******************************************************!*\
  !*** ./src/app/pages/information/information.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationPage": () => (/* binding */ InformationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_information_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./information.page.html */ 4109);
/* harmony import */ var _information_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information.page.scss */ 9468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let InformationPage = class InformationPage {
    constructor() {
        this.slides = [
            {
                img: 'assets/img/img-doctors.svg',
                titulo: '<strong>ABCDMed Score </strong>'
            },
            {
                img: 'assets/img/img-doctor2.svg',
                titulo: '<strong>¿Como se usa?</strong><br><h3>Se añaden a la tabla de calcular los datos requeridos para poder saber el resultado, una vez puestos el app calculará el porcentaje de falla en la extubacion</h3>'
            },
            {
                img: 'assets/img/img-author.svg',
                titulo: '<strong>Derechos de autor</strong> <br> <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" /></a><br />Este obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">licencia de Creative Commons Reconocimiento-SinObraDerivada 4.0 Internacional</a>. <h5>Developed by: David Galeano - Hollman Rojas</h5>'
            }
        ];
    }
    ngOnInit() {
    }
};
InformationPage.ctorParameters = () => [];
InformationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-information',
        template: _raw_loader_information_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_information_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InformationPage);



/***/ }),

/***/ 9468:
/*!*********************************************************!*\
  !*** ./src/app/pages/information/information.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-slide {\n  display: block;\n}\n\nimg {\n  max-height: 400px;\n}\n\n.slide-img-padding {\n  padding: 40px;\n}\n\nh3 {\n  font-size: 30px;\n  font-weight: lighter;\n  margin-bottom: 60px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.btn-primary {\n  height: 60px;\n}\n\n@media screen and (max-height: 775px) {\n  img {\n    width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0FBR0o7O0FBQUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNJO0lBQ0ksVUFBQTtFQUtOO0FBQ0YiLCJmaWxlIjoiaW5mb3JtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuaW1ne1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbn1cclxuLnNsaWRlLWltZy1wYWRkaW5ne1xyXG4gICAgcGFkZGluZzogNDBweDtcclxufVxyXG5cclxuaDN7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uYnRuLXByaW1hcnl7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6Nzc1cHgpe1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 4109:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/information/information.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\r\n    <ion-buttons  slot=\"start\">\r\n      <ion-menu-button color=\"primary\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n\r\n<ion-content>\r\n  <ion-slides pager=\"true\">\r\n    <ion-slide *ngFor=\"let slide of slides\">\r\n\r\n      <div class=\"slide-img-padding\">\r\n        <img [src]=\"slide.img\">\r\n      </div>\r\n\r\n      <div>\r\n        <h3 [innerHTML]=\"slide.titulo\"></h3>\r\n      </div>\r\n\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<!-- Botones -->\r\n\r\n<!-- <ion-footer no-border>\r\n\r\n  <ion-grid fixed> -->\r\n\r\n    <!-- Boton siguiente-->\r\n\r\n    <!-- <ion-row>\r\n\r\n      <ion-col size=\"10\" offset=\"1\">\r\n\r\n        <ion-button color=\"primary\"\r\n                    expand=\"full\"\r\n                    shape=\"round\"\r\n                    mode=\"ios\"\r\n                    class=\"btn-primary\">\r\n          SIGUIENTE\r\n        </ion-button>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row> -->\r\n\r\n  <!-- Boton atrás -->\r\n <!--  <ion-row>\r\n\r\n    <ion-col size=\"10\" offset=\"1\">\r\n\r\n      <ion-button expand=\"full\"\r\n                  fill=\"clear\"\r\n                  >\r\n        <ion-label color=\"dark\">Atrás</ion-label>\r\n      </ion-button>\r\n\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-footer> -->\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_information_information_module_ts.js.map