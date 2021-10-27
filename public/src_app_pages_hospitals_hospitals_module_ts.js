(self["webpackChunkabcdmed_score"] = self["webpackChunkabcdmed_score"] || []).push([["src_app_pages_hospitals_hospitals_module_ts"],{

/***/ 827:
/*!*************************************************************!*\
  !*** ./src/app/pages/hospitals/hospitals-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HospitalsPageRoutingModule": () => (/* binding */ HospitalsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _hospitals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hospitals.page */ 8748);




const routes = [
    {
        path: '',
        component: _hospitals_page__WEBPACK_IMPORTED_MODULE_0__.HospitalsPage
    }
];
let HospitalsPageRoutingModule = class HospitalsPageRoutingModule {
};
HospitalsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HospitalsPageRoutingModule);



/***/ }),

/***/ 3454:
/*!*****************************************************!*\
  !*** ./src/app/pages/hospitals/hospitals.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HospitalsPageModule": () => (/* binding */ HospitalsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _hospitals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hospitals-routing.module */ 827);
/* harmony import */ var _hospitals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hospitals.page */ 8748);







let HospitalsPageModule = class HospitalsPageModule {
};
HospitalsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _hospitals_routing_module__WEBPACK_IMPORTED_MODULE_0__.HospitalsPageRoutingModule
        ],
        declarations: [_hospitals_page__WEBPACK_IMPORTED_MODULE_1__.HospitalsPage]
    })
], HospitalsPageModule);



/***/ }),

/***/ 8748:
/*!***************************************************!*\
  !*** ./src/app/pages/hospitals/hospitals.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HospitalsPage": () => (/* binding */ HospitalsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_hospitals_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./hospitals.page.html */ 3404);
/* harmony import */ var _hospitals_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hospitals.page.scss */ 2979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _services_hospital_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hospital.service */ 9984);









let HospitalsPage = class HospitalsPage {
    constructor(modalCtrl, toastController, alertCtrl, hospitalsService, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.hospitalsService = hospitalsService;
        this.loadingCtrl = loadingCtrl;
        this.modalReady = false;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    salirSin() {
        this.modalCtrl.dismiss();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.modalReady = true;
        }, 2300);
    }
    presentToast1() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'La institucion fue creada correctamente',
                duration: 2000,
                animated: false,
                position: 'middle',
                color: 'success'
            });
            toast.present();
        });
    }
    submitHospital() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.presentToast1();
            const loading = yield this.loadingCtrl.create({ message: 'Guardando...' });
            loading.present();
            this.hospitalsService.addHospital(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((hospital) => {
                console.log(hospital);
                loading.dismiss();
            });
        });
    }
};
HospitalsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _services_hospital_service__WEBPACK_IMPORTED_MODULE_2__.HospitalService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
HospitalsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-hospitals',
        template: _raw_loader_hospitals_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_hospitals_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HospitalsPage);



/***/ }),

/***/ 9984:
/*!**********************************************!*\
  !*** ./src/app/services/hospital.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HospitalService": () => (/* binding */ HospitalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



let HospitalService = class HospitalService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://api-respirador-wb7ch.ondigitalocean.app/api";
    }
    getHospitals() {
        return this.http.get(`${this.apiUrl}/hospital`);
    }
    addHospital(hospital) {
        return this.http.post(`${this.apiUrl}/hospital`, hospital);
    }
    addData(dataInformation) {
        return this.http.post(`${this.apiUrl}/data`, dataInformation);
    }
};
HospitalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
HospitalService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], HospitalService);



/***/ }),

/***/ 2979:
/*!*****************************************************!*\
  !*** ./src/app/pages/hospitals/hospitals.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  /* --ion-background-color:rgb(2,0,36);\n  --ion-background-color:linear-gradient(90deg, rgba(32,32,124,1) 0%,rgba(21,13,159,1)  35%, rgba(64,123,255,1) 100%); */\n}\n\nion-card {\n  --ion-background-color:#ffff;\n}\n\n.text-center {\n  text-align: center;\n}\n\nh1 {\n  font-size: 30px;\n  font-weight: lighter;\n  margin-bottom: 5px;\n  color: #407BFF;\n}\n\nion-input {\n  border-radius: 20px;\n  background-color: transparent;\n  border: 2px solid #0091ff;\n  outline: none !important;\n  position: relative;\n  z-index: 50;\n  text-align: center;\n}\n\nion-label {\n  color: #fff;\n  pointer-events: none;\n  position: relative;\n  top: calc(50% - 28px);\n  left: 20px;\n  transition: all 0.1s linear;\n  -webkit-transition: all 0.1s linear;\n  -moz-transition: all 0.1s linear;\n  background-color: #fff;\n  /* padding-top: 7px; */\n  margin-left: 10px;\n  padding-left: 4px;\n  padding-right: 4px;\n  box-sizing: border-box;\n  z-index: 100;\n  width: 100px !important;\n}\n\nion-item {\n  --highlight-color-focused: none;\n}\n\nion-item:focus {\n  border-bottom-color: #fff !important;\n}\n\nion-card {\n  box-shadow: -3px 15px 15px #242326;\n  overflow: hidden;\n}\n\n@media screen and (max-height: 760px) {\n  img {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvc3BpdGFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTt3SEFBQTtBQUNKOztBQUdFO0VBRUUsNEJBQUE7QUFESjs7QUFHRTtFQUNJLGtCQUFBO0FBQU47O0FBRUU7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDTjs7QUFDRTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFTjs7QUFFRTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ047O0FBRUU7RUFDSSwrQkFBQTtBQUNOOztBQUNFO0VBQ0ksb0NBQUE7QUFFTjs7QUFBRTtFQUVFLGtDQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDRTtFQUNFO0lBQ0ksV0FBQTtFQUVOO0FBQ0YiLCJmaWxlIjoiaG9zcGl0YWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC8qIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDIsMCwzNik7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgzMiwzMiwxMjQsMSkgMCUscmdiYSgyMSwxMywxNTksMSkgIDM1JSwgcmdiYSg2NCwxMjMsMjU1LDEpIDEwMCUpOyAqL1xyXG4gIFxyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICBcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmY7XHJcbiAgfVxyXG4gIC50ZXh0LWNlbnRlcntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIGgxe1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjNDA3QkZGO1xyXG4gIH1cclxuICBpb24taW5wdXR7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMTQ1LCAyNTUpO1xyXG4gICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogNTA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogY2FsYyg1MCUgLSAyOHB4KTtcclxuICAgICAgbGVmdDogMjBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgICAgLyogcGFkZGluZy10b3A6IDdweDsgKi9cclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogbm9uZTtcclxuICB9XHJcbiAgaW9uLWl0ZW06Zm9jdXN7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLWNhcmR7XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6LTNweCAxNXB4IDE1cHggIzI0MjMyNjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0Ojc2MHB4KXtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 3404:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hospitals/hospitals.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"primary\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-card>\r\n    <ion-card-header class=\"ion-padding\">\r\n      <ion-title class=\"text-center ion-padding\" text-capitalize color=\"primary\">CREAR HOSPITAL</ion-title>\r\n    </ion-card-header>\r\n    <form [formGroup]='form'>\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"floating\">Hospital</ion-label>\r\n        <ion-input formControlName='name'></ion-input>\r\n      </ion-item>\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"10\" offset=\"1\">\r\n            <ion-button color=\"danger\" expand=\"full\" shape=\"round\" href=\"/home\">\r\n              CANCELAR\r\n            </ion-button>\r\n            <ion-button color=\"primary\" expand=\"full\" shape=\"round\" (click)=\"submitHospital()\"\r\n              [disabled]=\"form.invalid\" >\r\n              GUARDAR\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n\r\n    <ion-row id=\"home\">\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"8\">\r\n        <img src=\"assets/img/img-hospital.svg\" class=\"img-responsive\" id=\"img2\">\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n  </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_hospitals_hospitals_module_ts.js.map