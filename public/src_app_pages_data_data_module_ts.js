(self["webpackChunkabcdmed_score"] = self["webpackChunkabcdmed_score"] || []).push([["src_app_pages_data_data_module_ts"],{

/***/ 2634:
/*!***************************************************!*\
  !*** ./src/app/pages/data/data-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataPageRoutingModule": () => (/* binding */ DataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.page */ 6132);




const routes = [
    {
        path: '',
        component: _data_page__WEBPACK_IMPORTED_MODULE_0__.DataPage
    }
];
let DataPageRoutingModule = class DataPageRoutingModule {
};
DataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DataPageRoutingModule);



/***/ }),

/***/ 5417:
/*!*******************************************!*\
  !*** ./src/app/pages/data/data.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataPageModule": () => (/* binding */ DataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-routing.module */ 2634);
/* harmony import */ var _data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.page */ 6132);
/* harmony import */ var _results_results_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../results/results.page */ 1495);
/* harmony import */ var _results_results_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results/results.module */ 1869);









let DataPageModule = class DataPageModule {
};
DataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        entryComponents: [
            _results_results_page__WEBPACK_IMPORTED_MODULE_2__.ResultsPage
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _data_routing_module__WEBPACK_IMPORTED_MODULE_0__.DataPageRoutingModule,
            _results_results_module__WEBPACK_IMPORTED_MODULE_3__.ResultsPageModule
        ],
        declarations: [_data_page__WEBPACK_IMPORTED_MODULE_1__.DataPage]
    })
], DataPageModule);



/***/ }),

/***/ 6132:
/*!*****************************************!*\
  !*** ./src/app/pages/data/data.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataPage": () => (/* binding */ DataPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_data_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./data.page.html */ 6270);
/* harmony import */ var _data_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.page.scss */ 148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _results_results_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../results/results.page */ 1495);
/* harmony import */ var _services_hospital_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/hospital.service */ 9984);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);











let DataPage = class DataPage {
    constructor(modalCtrl, loadingCtrl, hospitalService, storageService, route) {
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.hospitalService = hospitalService;
        this.storageService = storageService;
        this.route = route;
    }
    ngOnInit() {
        console.log(this.result);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            acid_basestatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            rsbi: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            efective_cough: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            death_probability: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            medical_patient: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            //result: new FormControl(2,[Validators.required]),
            excur_diafrag: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            engro_diafrag: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            velcontrac_diafra: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            // hospital_id: new FormControl(null, [Validators.required]),
        });
    }
    results() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.calculate();
            this.loadingPage();
            var toString = this.result.toString();
            this.modal = yield this.modalCtrl.create({
                component: _results_results_page__WEBPACK_IMPORTED_MODULE_2__.ResultsPage,
                cssClass: 'cal-modal',
                backdropDismiss: false,
                componentProps: {
                    Resultado: this.result,
                    resultTwo: this.resultTwo,
                }
            });
            yield this.modal.present();
        });
    }
    loadingPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Calculando...',
            });
            setTimeout(() => {
                this.loading.dismiss();
            }, 2000);
            yield this.loading.present();
        });
    }
    calculate() {
        let numberOne = parseFloat(this.numberOne);
        let numberTwo = parseFloat(this.numberTwo);
        let numberThree = parseFloat(this.numberThree);
        let numberFour = parseFloat(this.numberFour);
        let numberFive = parseFloat(this.numberFive);
        let numberSix = parseFloat(this.numberSix);
        let numberSeven = parseFloat(this.numberSeven);
        let numberEight = parseFloat(this.numberEight);
        let numberNine = 0.0022280184;
        let numberTen = 0.0175100373;
        let numberEleven = 0.01102682592;
        let numberTwelve = -1.2732828426;
        let numberThirteen = 0.38731209;
        let numberFourteen = -6.612206;
        this.resultAcid = (numberNine * Math.exp(numberOne));
        this.resultRSBI = (numberTwo * numberTen);
        this.resultDeath = (numberFour * numberEleven);
        this.resultOne = this.resultAcid + this.resultRSBI + (numberTwelve * numberThree) + this.resultDeath + (numberFive * numberThirteen) + numberFourteen;
        this.resultTwo = ((Math.exp(this.resultOne)) / (Math.exp(this.resultOne) + 1) * 100);
        this.result = (Math.round(this.resultTwo * 10) / 10);
        this.submitData();
    }
    submitData() {
        this.id_paciente = this.route.snapshot.paramMap.get('numberTwo');
        this.id_hospital = this.route.snapshot.paramMap.get('id');
        console.log(parseInt(this.id_paciente));
        const formulario = {
            acid_basestatus: this.form.get('acid_basestatus').value,
            rsbi: this.form.get('rsbi').value,
            efective_cough: this.form.get('efective_cough').value,
            death_probability: this.form.get('death_probability').value,
            medical_patient: this.form.get('medical_patient').value,
            result: this.result,
            excur_diafrag: this.form.get('excur_diafrag').value,
            engro_diafrag: this.form.get('engro_diafrag').value,
            velcontrac_diafra: this.form.get('velcontrac_diafra').value,
            paciente_id: parseInt(this.id_paciente),
            hospital_id: parseInt(this.id_hospital)
        };
        console.log(formulario);
        this.hospitalService.addData(formulario).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe((data) => {
            console.log(data);
        });
    }
};
DataPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _services_hospital_service__WEBPACK_IMPORTED_MODULE_3__.HospitalService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute }
];
DataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-data',
        template: _raw_loader_data_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_data_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DataPage);



/***/ }),

/***/ 69:
/*!*********************************************************!*\
  !*** ./src/app/pages/results/results-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsPageRoutingModule": () => (/* binding */ ResultsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


/* const routes: Routes = [
  {
    path: '',
    component: ResultsPage
  }
]; */
let ResultsPageRoutingModule = class ResultsPageRoutingModule {
};
ResultsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
    /*  imports: [RouterModule.forChild(routes)],
     exports: [RouterModule], */
    })
], ResultsPageRoutingModule);



/***/ }),

/***/ 1869:
/*!*************************************************!*\
  !*** ./src/app/pages/results/results.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsPageModule": () => (/* binding */ ResultsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _results_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./results-routing.module */ 69);
/* harmony import */ var _results_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results.page */ 1495);







let ResultsPageModule = class ResultsPageModule {
};
ResultsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _results_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResultsPageRoutingModule
        ],
        declarations: [_results_page__WEBPACK_IMPORTED_MODULE_1__.ResultsPage]
    })
], ResultsPageModule);



/***/ }),

/***/ 1495:
/*!***********************************************!*\
  !*** ./src/app/pages/results/results.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsPage": () => (/* binding */ ResultsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_results_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./results.page.html */ 9730);
/* harmony import */ var _results_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results.page.scss */ 5709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _institution_institution_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../institution/institution.page */ 4326);






let ResultsPage = class ResultsPage {
    constructor(modalCtrl, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.porcentaje = 0.5;
        this.modalReady = false;
    }
    ngOnInit() {
        console.log(this.Resultado);
    }
    salirSin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss();
            this.modal = yield this.modalCtrl.create({
                component: _institution_institution_page__WEBPACK_IMPORTED_MODULE_2__.InstitutionPage,
                cssClass: 'modalHospitals',
                backdropDismiss: false,
                componentProps: {}
            });
            this.modal.present();
        });
    }
    loadingPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Calculando...',
            });
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.modalReady = true;
        }, 2300);
    }
    setResultColor(result) {
        result = parseInt(this.Resultado);
        if (result >= 0 && result < 5)
            return 'green';
        else if (result >= 5 && result < 10)
            return 'yellow';
        else if (result >= 10 && result < 15)
            return 'orange';
        else
            return 'red';
    }
};
ResultsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
ResultsPage.propDecorators = {
    Resultado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    resultTwo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    resultP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ResultsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-results',
        template: _raw_loader_results_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_results_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResultsPage);



/***/ }),

/***/ 148:
/*!*******************************************!*\
  !*** ./src/app/pages/data/data.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  /* --ion-background-color:rgb(2,0,36);\n  --ion-background-color:linear-gradient(90deg, rgba(32,32,124,1) 0%,rgba(21,13,159,1)  35%, rgba(64,123,255,1) 100%); */\n}\n\nion-card {\n  --ion-background-color:#ffff;\n}\n\n.text-center {\n  text-align: center;\n}\n\nh1 {\n  font-size: 30px;\n  font-weight: lighter;\n  margin-bottom: 5px;\n  color: #407BFF;\n}\n\nion-input {\n  border-radius: 20px;\n  background-color: transparent;\n  border: 2px solid #0091ff;\n  outline: none !important;\n  position: relative;\n  z-index: 50;\n  text-align: center;\n}\n\nion-label {\n  color: #fff;\n  pointer-events: none;\n  position: relative;\n  top: calc(50% - 28px);\n  left: 20px;\n  transition: all 0.1s linear;\n  -webkit-transition: all 0.1s linear;\n  -moz-transition: all 0.1s linear;\n  background-color: #fff;\n  /* padding-top: 7px; */\n  margin-left: 10px;\n  padding-left: 4px;\n  padding-right: 4px;\n  box-sizing: border-box;\n  z-index: 100;\n  width: 220px !important;\n}\n\n.small {\n  color: black;\n  pointer-events: none;\n  position: relative;\n  top: calc(50% - 28px);\n  left: 20px;\n  transition: all 0.1s linear;\n  -webkit-transition: all 0.1s linear;\n  -moz-transition: all 0.1s linear;\n  background-color: #fff;\n  /* padding-top: 7px; */\n  margin-left: 10px;\n  padding-left: 4px;\n  padding-right: 4px;\n  box-sizing: border-box;\n  z-index: 100;\n  width: 230px !important;\n}\n\n.large {\n  color: black;\n  pointer-events: none;\n  position: relative;\n  top: calc(50% - 28px);\n  left: 20px;\n  transition: all 0.1s linear;\n  -webkit-transition: all 0.1s linear;\n  -moz-transition: all 0.1s linear;\n  background-color: #fff;\n  /* padding-top: 7px; */\n  margin-left: 10px;\n  padding-left: 4px;\n  padding-right: 4px;\n  box-sizing: border-box;\n  z-index: 100;\n  width: 350px !important;\n}\n\nion-item {\n  --highlight-color-focused: none;\n}\n\nion-item:focus {\n  border-bottom-color: #fff !important;\n}\n\nion-card {\n  border-top-left-radius: 8.5em;\n  border-bottom-right-radius: 8.5em;\n  box-shadow: -3px 15px 15px #242326;\n  overflow: hidden;\n}\n\n@media screen and (max-height: 760px) {\n  img {\n    width: 100%;\n  }\n}\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUU7d0hBQUE7QUFDRjs7QUFHQTtFQUVFLDRCQUFBO0FBREY7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBRUE7RUFDRSxXQUFBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0UsWUFBQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBSUE7RUFDSSwrQkFBQTtBQURKOztBQUdBO0VBQ0ksb0NBQUE7QUFBSjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNJLFdBQUE7RUFDSjtBQUNGOztBQUlBO0VBQ0UsV0FBQTtFQUVBLHVCQUFBO0FBSEY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUlBO0VBQ0UsY0FBQTtBQURGIiwiZmlsZSI6ImRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG4gIC8qIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDIsMCwzNik7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMzIsMzIsMTI0LDEpIDAlLHJnYmEoMjEsMTMsMTU5LDEpICAzNSUsIHJnYmEoNjQsMTIzLDI1NSwxKSAxMDAlKTsgKi9cclxuXHJcbn1cclxuaW9uLWNhcmR7XHJcblxyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmY7XHJcbn1cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGNvbG9yOiAjNDA3QkZGO1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAxNDUsIDI1NSk7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICBjb2xvcjogI2ZmZjtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDI4cHgpO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAvKiBwYWRkaW5nLXRvcDogN3B4OyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB3aWR0aDogMjIwcHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuLnNtYWxse1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAyOHB4KTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgLyogcGFkZGluZy10b3A6IDdweDsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgd2lkdGg6IDIzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYXJnZXtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAyOHB4KTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgLyogcGFkZGluZy10b3A6IDdweDsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogbm9uZTtcclxufVxyXG5pb24taXRlbTpmb2N1c3tcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5pb24tY2FyZHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjguNWVtO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjguNWVtO1xyXG4gIGJveC1zaGFkb3c6LTNweCAxNXB4IDE1cHggIzI0MjMyNjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDo3NjBweCl7XHJcbiAgaW1ne1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxufVxyXG5pb24tc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcikge1xyXG4gIGNvbG9yOiAjMjBhMDhhO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 5709:
/*!*************************************************!*\
  !*** ./src/app/pages/results/results.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-progress-bar {\n  padding-top: 8px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InJlc3VsdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXByb2dyZXNzLWJhcntcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 6270:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/data/data.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"container\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"primary\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-card>\r\n    <ion-card-header class=\"ion-padding\">\r\n      <ion-title class=\"text-center ion-padding\" text-capitalize>INGRESE LOS DATOS</ion-title>\r\n    </ion-card-header>\r\n    <form [formGroup]='form'>\r\n      \r\n      <ion-item>\r\n        <ion-label name=\"numberOne\" position=\"floating\">Acid/Base status (PH value)*</ion-label>\r\n        <ion-select required\r\n        name=\"numberOne\" \r\n        [(ngModel)]=\"numberOne\"  \r\n        interface=\"popover\" \r\n        multiple=\"false\"\r\n          placeholder=\"Acid/Base status (PH value)*\" formControlName='acid_basestatus'>\r\n          <ion-select-option value=\"7.2\">7.2</ion-select-option>\r\n          <ion-select-option value=\"7.3\">7.3</ion-select-option>\r\n          <ion-select-option value=\"7.4\">7.4</ion-select-option>\r\n          <ion-select-option value=\"7.5\">7.5</ion-select-option>\r\n          <ion-select-option value=\"7.6\">7.6</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <br>\r\n      <!-- <ion-item lines=\"none\">\r\n        <ion-label name=\"numberOne\" position=\"floating\">Acid/Base status (PH value)</ion-label>\r\n        <ion-input formControlName='acid_basestatus' name=\"numberOne\" [(ngModel)]=\"numberOne\"></ion-input>\r\n      </ion-item> -->\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-label name=\"numberTwo\" position=\"floating\" class=\"small\">Breathing test (RSBI)*</ion-label>\r\n        <ion-input required type=\"number\" formControlName='rsbi' name=\"numberTwo\" [(ngModel)]=\"numberTwo\"></ion-input>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item>\r\n        <ion-label name=\"numberThree\" position=\"floating\">Cough (Effective=1)*</ion-label>\r\n        <ion-select \r\n        required\r\n        name=\"numberThree\" \r\n        [(ngModel)]=\"numberThree\"  \r\n        interface=\"popover\" \r\n        multiple=\"false\"\r\n        placeholder=\"Cough (Effective=1)*\" formControlName='efective_cough'>\r\n          <ion-select-option value=\"1\">SI</ion-select-option>\r\n          <ion-select-option value=\"0\">NO</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <!-- <ion-item lines=\"none\">\r\n        <ion-label name=\"numberThree\" position=\"floating\" class=\"small\">Cough (Effective=1)*</ion-label>\r\n        <ion-input formControlName='efective_cough' name=\"numberThree\" [(ngModel)]=\"numberThree\"></ion-input>\r\n      </ion-item> -->\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-label name=\"numberFour\" position=\"floating\" class=\"large\" >Death Probability(Apache/EUROScore)</ion-label>\r\n        <ion-input  required type=\"number\" formControlName='death_probability' name=\"numberFour\" [(ngModel)]=\"numberFour\"></ion-input>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item>\r\n        <ion-label name=\"numberFive\" position=\"floating\">Medical Patient (Medical=1)!*</ion-label>\r\n        <ion-select \r\n        required\r\n        name=\"medical_patient\" \r\n        [(ngModel)]=\"numberFive\"  \r\n        interface=\"popover\" \r\n        multiple=\"false\"\r\n        placeholder=\"Medical Patient (Medical=1)!*\" \r\n        formControlName='medical_patient'>\r\n          <ion-select-option value=\"1\">Médico</ion-select-option>\r\n          <ion-select-option value=\"0\">Quirúrgico</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <br>\r\n      <!-- <ion-item lines=\"none\">\r\n        <ion-label name=\"numberFive\" position=\"floating\"></ion-label>\r\n        <ion-input  formControlName='medical_patient' name=\"numberFive\" [(ngModel)]=\"numberFive\"></ion-input>\r\n      </ion-item> -->\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-label name=\"numberSix\" position=\"floating\" class=\"small\">Excursión Diafragmática (cm)</ion-label>\r\n        <ion-input type=\"number\" formControlName='excur_diafrag' name=\"numberSix\" [(ngModel)]=\"numberSix\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-label name=\"numberSeven\" position=\"floating\" class=\"large\">Fraccion de Engrosamiento Diafragmático (%)</ion-label>\r\n        <ion-input type=\"number\" formControlName='engro_diafrag' name=\"numberSeven\" [(ngModel)]=\"numberSeven\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-label name=\"numberEight\" position=\"floating\" class=\"large\">Velocidad de contracción diafragmática (cm/s)</ion-label>\r\n        <ion-input type=\"number\" formControlName='velcontrac_diafra' name=\"numberEight\" [(ngModel)]=\"numberEight\"></ion-input>\r\n      </ion-item>\r\n     \r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"10\" offset=\"1\">\r\n            <ion-button color=\"primary\" expand=\"full\" shape=\"round\" (click)=\"results()\" [disabled]=\"form.invalid\">\r\n              CALCULAR\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n    </form>\r\n\r\n    <img src=\"assets/img/img-formulario.svg\" alt=\"\">\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ 9730:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/results/results.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"ion-no-border\" color=\"primary\">\r\n  <ion-title>Resultado</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content *ngIf=\"modalReady\" class=\"ion-padding\">\r\n\r\n\r\n  <ion-progress-bar  color=\"primary\" [value]=\"resultP\"></ion-progress-bar>\r\n  <p class=\"ion-text-center\">{{resultTwo}}</p>\r\n  <h1 [ngStyle]=\"{'color': setResultColor(Resultado.result) } \"\r\n  class=\"ion-text-center\">{{Resultado}}<span>%</span></h1>\r\n\r\n  <ion-button class=\"ion-padding\" color=\"primary\" expand=\"full\" (click)=\"salirSin()\">\r\n    ok\r\n  </ion-button>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_data_data_module_ts.js.map