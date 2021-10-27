(self["webpackChunkabcdmed_score"] = self["webpackChunkabcdmed_score"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _institution_institution_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../institution/institution.page */ 4326);






let HomePage = class HomePage {
    constructor(menuCtrl, modalCtrl, loadingCtrl) {
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    institution() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modal = yield this.modalCtrl.create({
                component: _institution_institution_page__WEBPACK_IMPORTED_MODULE_2__.InstitutionPage,
                cssClass: 'modalHospitals',
                backdropDismiss: false,
                componentProps: {},
            });
            yield this.modal.present();
        });
    }
    loadingPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Calculando...',
            });
            setTimeout(() => {
                this.loading.dismiss();
            }, 2000);
            yield this.loading.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#img2 {\n  width: 100% !important;\n  height: auto !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\nh3 {\n  font-size: 20px;\n  font-weight: lighter;\n  margin-bottom: 5px;\n  color: #407BFF;\n}\n\np {\n  font-size: 30px;\n  font-weight: lighter;\n  margin-top: 5px;\n  color: #407BFF;\n}\n\nion-label {\n  position: center;\n  padding-left: 153px;\n}\n\n#home {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDRCx1QkFBQTtBQUNEOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGlCQUFBO0FBTUYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1nMntcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiB9XHJcbi50ZXh0LWNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDN7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBjb2xvcjogIzQwN0JGRjtcclxufVxyXG5we1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY29sb3I6ICM0MDdCRkY7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNTNweDtcclxufVxyXG4jaG9tZXtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n  <!-- <ion-toolbar>\r\n    <ion-buttons  slot=\"start\">\r\n      <ion-menu-button color=\"primary\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar> -->\r\n  \r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"3\">\r\n  <ion-grid fixed>\r\n    <ion-row id=\"home\" >\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"8\" >\r\n        <img src=\"assets/img/mederi.svg\" class=\"img-responsive\"  id=\"img2\">\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <span><p class=\"text-center\">ABCDMed Score</p></span>\r\n\r\n    <h3 class=\"text-center\">Bienvenido</h3>\r\n  \r\n\r\n  </ion-grid>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"10\" offset=\"1\">\r\n        <ion-button color=\"primary\" expand=\"full\" shape=\"round\" (click)=\"institution()\" >\r\n          INICIAR\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n    <ion-col  >\r\n      <div class=\"ion-text-center\">\r\n\r\n        <h4> Ó </h4>\r\n\r\n      </div>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"10\" offset=\"1\">\r\n        <ion-button color=\"primary\" expand=\"full\" shape=\"round\" href=\"https://intensivecarenetwork.com/Calculators/Files/Apache4.html\" >\r\n          APACHE/EUROScore \r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map