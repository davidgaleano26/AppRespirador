(self["webpackChunkabcdmed_score"] = self["webpackChunkabcdmed_score"] || []).push([["default-src_app_pages_institution_institution_page_ts"],{

/***/ 4326:
/*!*******************************************************!*\
  !*** ./src/app/pages/institution/institution.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstitutionPage": () => (/* binding */ InstitutionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_institution_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./institution.page.html */ 5919);
/* harmony import */ var _institution_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./institution.page.scss */ 6641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _services_hospital_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hospital.service */ 9984);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);










let InstitutionPage = class InstitutionPage {
    constructor(router, modalCtrl, hospitalService, loadingCtrl, storageService, menuCtrl) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.hospitalService = hospitalService;
        this.loadingCtrl = loadingCtrl;
        this.storageService = storageService;
        this.menuCtrl = menuCtrl;
        this.modalReady = false;
        this.getAllStorage();
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewDidLeave() {
        this.menuCtrl.enable(true);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.ionViewDidEnter();
            const loading = yield this.loadingCtrl.create({ message: 'Cargando...' });
            loading.present();
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
                hospital: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
                paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            });
            this.hospitals$ = this.hospitalService.getHospitals().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(hospitals => {
                loading.dismiss();
                return hospitals;
            }));
        });
    }
    salirSin() {
        this.modalCtrl.dismiss();
    }
    optionsFn() {
        console.log(this.place);
        let item = this.place; // Just did this in order to avoid changing the next lines of code :P
        console.log(item.id);
        return this.id = item.id;
    }
    ruta() {
        console.log(this.numberTwo);
        console.log(this.optionsFn());
        this.router.navigateByUrl(`data/${this.numberTwo}/${this.optionsFn()}`);
        this.modalCtrl.dismiss();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.modalReady = true;
        }, 2300);
    }
    getAllStorage() {
        this.storageService.getData();
    }
    home() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigateByUrl('home');
        });
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
};
InstitutionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _services_hospital_service__WEBPACK_IMPORTED_MODULE_2__.HospitalService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController }
];
InstitutionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-institution',
        template: _raw_loader_institution_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_institution_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InstitutionPage);



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

/***/ 1188:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);



const DATA_KEY = 'my-data';
let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        this.dataInformations = [];
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            // If using, define drivers here: await this.storage.defineDriver(/*...*/);
            yield this.storage.create();
        });
    }
    //Create
    //addData(data: DataInformation): Promise<any>{
    //return this.storage.get(DATA_KEY).then((dataI: DataInformation[])=>{
    //if(dataI){
    //dataI.push(data);
    // return this.storage.set(DATA_KEY, dataI);
    // }else{
    // return this.storage.set(DATA_KEY, [data]);
    // }
    // });
    //  }
    //Create2
    addDataLocal(key, value) {
        this.storage.set(key, value);
    }
    //Read
    getData() {
        let dataInformation;
        this.storage.forEach((key, value, index) => {
            //this.getData.push({})
            console.log(key);
        });
    }
    //Update
    updateData(data) {
    }
    //Delete
    deleteData(id) {
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 6641:
/*!*********************************************************!*\
  !*** ./src/app/pages/institution/institution.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  --ion-background-color:#ffff;\n}\n\nion-input {\n  border-radius: 20px;\n  background-color: transparent;\n  border: 2px solid #0091ff;\n  outline: none !important;\n  position: relative;\n  z-index: 50;\n  text-align: center;\n}\n\nion-toolbar {\n  height: 11% !important;\n}\n\nion-label {\n  color: #fff;\n  pointer-events: none;\n  position: relative;\n  top: calc(50% - 28px);\n  left: 20px;\n  transition: all 0.1s linear;\n  -webkit-transition: all 0.1s linear;\n  -moz-transition: all 0.1s linear;\n  background-color: #fff;\n  /* padding-top: 7px; */\n  margin-left: 10px;\n  padding-left: 4px;\n  padding-right: 4px;\n  box-sizing: border-box;\n  z-index: 100;\n  width: 100px !important;\n}\n\nion-item {\n  --highlight-color-focused: none;\n}\n\nion-item:focus {\n  border-bottom-color: #fff !important;\n}\n\nion-card {\n  box-shadow: -3px 15px 15px #242326;\n  overflow: hidden;\n}\n\n@media screen and (max-height: 760px) {\n  img {\n    width: 100%;\n  }\n}\n\nh6 {\n  margin: -2% 0% 1%;\n  padding-left: 15px;\n}\n\na {\n  font-size: 10px;\n  position: right;\n}\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RpdHV0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDRCQUFBO0FBQUo7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLCtCQUFBO0FBRUY7O0FBQUE7RUFDRSxvQ0FBQTtBQUdGOztBQURBO0VBRUEsa0NBQUE7RUFDQSxnQkFBQTtBQUdBOztBQUdBO0VBQ0E7SUFDSSxXQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBRUEsdUJBQUE7QUFBRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUYiLCJmaWxlIjoiaW5zdGl0dXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZjtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMTQ1LCAyNTUpO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogNTA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5pb24tdG9vbGJhcntcclxuICBoZWlnaHQ6IDExJSAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogY2FsYyg1MCUgLSAyOHB4KTtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgLyogcGFkZGluZy10b3A6IDdweDsgKi9cclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbmlvbi1pdGVtIHtcclxuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiBub25lO1xyXG59XHJcbmlvbi1pdGVtOmZvY3Vze1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5pb24tY2FyZHtcclxuXHJcbmJveC1zaGFkb3c6LTNweCAxNXB4IDE1cHggIzI0MjMyNjtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuLmhvc3BpdGFsYWJlbHtcclxuICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDo3NjBweCl7XHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG59XHJcbmg2e1xyXG4gIG1hcmdpbjogLTIlIDAlIDElO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5he1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwb3NpdGlvbjogcmlnaHQ7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcclxuICBjb2xvcjogIzIwYTA4YTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ 5919:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institution/institution.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"ion-no-border\" color=\"primary\">\r\n  <h6 class=\"text-center\">INGRESE LOS SIGUIENTES DATOS</h6>\r\n</ion-toolbar>\r\n<ion-content *ngIf=\"modalReady\" class=\"ion-padding\">\r\n  <form [formGroup]='form'>\r\n    <ion-item lines=\"none\">\r\n      <ion-label name=\"numberTwo\" position=\"floating\">ID Paciente</ion-label>\r\n      <ion-input name=\"numberTwo\" [(ngModel)]=\"numberTwo\" formControlName=\"paciente_id\"></ion-input>\r\n    </ion-item>\r\n    <br>\r\n    <ion-item>\r\n      <ion-select  [(ngModel)]=\"place\" (ionChange)=\"optionsFn();\" interface=\"alert\" multiple=\"false\"\r\n        placeholder=\"Seleccione un Hospital\" formControlName=\"hospital\">\r\n        <ion-select-option *ngFor=\"let hospital of hospitals$|async\" [value]=\"hospital\">{{hospital.name}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <br>\r\n    <a [routerLink]=\"['/hospitals']\" (click)=\"closeModal()\">AGREGAR HOSPITAL</a>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"5\" offset=\"1\">\r\n          <ion-button color=\"danger\" expand=\"full\" shape=\"round\" href=\"https://app-respirador-hg7dt.ondigitalocean.app\">\r\n            CANCELAR\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"5\" offset=\"1\">\r\n          <ion-button color=\"primary\" expand=\"full\" shape=\"round\" (click)=\"ruta()\" [disabled]=\"form.invalid\">\r\n            CONTINUAR\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_institution_institution_page_ts.js.map