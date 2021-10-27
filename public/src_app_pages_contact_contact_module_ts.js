(self["webpackChunkabcdmed_score"] = self["webpackChunkabcdmed_score"] || []).push([["src_app_pages_contact_contact_module_ts"],{

/***/ 2388:
/*!*********************************************************!*\
  !*** ./src/app/pages/contact/contact-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageRoutingModule": () => (/* binding */ ContactPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page */ 3256);




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ 153:
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageModule": () => (/* binding */ ContactPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-routing.module */ 2388);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page */ 3256);







let ContactPageModule = class ContactPageModule {
};
ContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_1__.ContactPage]
    })
], ContactPageModule);



/***/ }),

/***/ 3256:
/*!***********************************************!*\
  !*** ./src/app/pages/contact/contact.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact.page.html */ 478);
/* harmony import */ var _contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page.scss */ 2962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ContactPage = class ContactPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactPage.ctorParameters = () => [];
ContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactPage);



/***/ }),

/***/ 2962:
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n}\n\nion-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background-color: white;\n}\n\n.box {\n  position: relative;\n  width: 300px;\n  height: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: white;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);\n}\n\n.box .percent {\n  position: relative;\n  width: 150px;\n  height: 150px;\n}\n\n.box .percent svg {\n  position: relative;\n  width: 150px;\n  height: 150px;\n}\n\n.box .percent svg circle {\n  width: 150px;\n  height: 150px;\n  fill: none;\n  stroke-width: 10;\n  stroke: #000;\n  transform: translate(5px, 5px);\n  stroke-dasharray: 440;\n  stroke-dashoffset: 440;\n  stroke-linecap: round;\n}\n\n.box .percent svg circle:nth-child(1) {\n  stroke-dashoffset: 0;\n  stroke: #f3f3f3;\n}\n\n.box .percent svg circle:nth-child(2) {\n  stroke-dashoffset: calc(440 - (440 * 87)/ 100);\n  stroke: #03a9f4;\n}\n\n.box .percent .number {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #999;\n}\n\n.box .percent .number h2 {\n  font-size: 48px;\n}\n\n.box .percent .number h2 span {\n  font-size: 24px;\n}\n\n.box .text {\n  padding: 10px 0 0;\n  color: #999;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBTUo7O0FBSkE7RUFFSSxvQkFBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUVJLDhDQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBT0o7O0FBSkE7RUFDSSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBU0oiLCJmaWxlIjoiY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG4uYm94IC5wZXJjZW50e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4uYm94IC5wZXJjZW50IHN2Z3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuLmJveCAucGVyY2VudCBzdmcgY2lyY2xle1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDEwO1xyXG4gICAgc3Ryb2tlOiAjMDAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LDVweCk7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA0NDA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNDQwO1xyXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG59XHJcbi5ib3ggLnBlcmNlbnQgc3ZnIGNpcmNsZTpudGgtY2hpbGQoMSlcclxue1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICBzdHJva2U6I2YzZjNmMyA7XHJcbn1cclxuLmJveCAucGVyY2VudCBzdmcgY2lyY2xlOm50aC1jaGlsZCgyKVxyXG57XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogY2FsYyg0NDAgLSAoNDQwICogODcpLyAxMDApO1xyXG4gICAgc3Ryb2tlOiMwM2E5ZjQgO1xyXG59XHJcbi5ib3ggLnBlcmNlbnQgLm51bWJlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcblxyXG59XHJcbi5ib3ggLnBlcmNlbnQgLm51bWJlciBoMntcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxufVxyXG4uYm94IC5wZXJjZW50IC5udW1iZXIgaDIgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uYm94IC50ZXh0e1xyXG4gICAgcGFkZGluZzogMTBweCAwIDA7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59Il19 */");

/***/ }),

/***/ 478:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>contact</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"box\">\r\n\r\n    <div class=\"percent\">\r\n\r\n      <svg>\r\n        <circle cx=\"70\" cy=\"70\" r=\"70\"></circle>\r\n        <circle cx=\"70\" cy=\"70\" r=\"70\"></circle>\r\n      </svg>\r\n\r\n      <div class=\"number\" >\r\n        <h2>87 <span>%</span></h2>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <h2 class=\"text\">Percent of failure</h2>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact_contact_module_ts.js.map