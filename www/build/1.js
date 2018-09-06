webpackJsonp([1],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsconditionPageModule", function() { return TermsconditionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__termscondition__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsconditionPageModule = /** @class */ (function () {
    function TermsconditionPageModule() {
    }
    TermsconditionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__termscondition__["a" /* TermsconditionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__termscondition__["a" /* TermsconditionPage */]),
            ],
        })
    ], TermsconditionPageModule);
    return TermsconditionPageModule;
}());

//# sourceMappingURL=termscondition.module.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsconditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermsconditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsconditionPage = /** @class */ (function () {
    function TermsconditionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsconditionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsconditionPage');
    };
    TermsconditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termscondition',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/gypsy/src/pages/termscondition/termscondition.html"*/'<!--\n  Generated template for the TermsConditionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar no-border-bottom>\n      <button ion-button menuToggle>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n      <ion-title> Terms And Conditions </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-item>\n      <h2>Terms of use</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur to the adipiscing elit, sed do eiusmod tempor omnicro incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat ion ullamco laboris nisi ut aliquip ex ea combina commodo consequat.</p>\n  \n      <p>Duis aute irure dolor in reprehenderit in the go voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\n  \n    </ion-item>\n  \n    <div class="proprietary">\n      <h2>Proprietary Rights:</h2>\n      <ion-item>\n        <img item-start src="assets/img/round.png" alt="">\n        <p class="mb-0">Lorem ipsum dolor sit amet consectetur</p>\n      </ion-item>\n      \n      <ion-item>\n        <img item-start src="assets/img/round.png" alt="">\n        <p class="mb-0">Adipiscing elit, sed do eiusmod temp</p>\n      </ion-item>\n      \n      <ion-item>\n        <img item-start src="assets/img/round.png" alt="">\n        <p class="mb-0">Onicro incididunt ut labore et dolore</p>\n      </ion-item>\n      \n      <ion-item>\n        <img item-start src="assets/img/round.png" alt="">\n        <p class="mb-0">magna aliqua to enim ad minim veniam</p>\n      </ion-item>\n      \n      <ion-item>\n        <p>Lorem ipsum dolor sit amet, consectetur to the adipiscing elit, nostrud exercitat ion ullamco laboris nisi ut aliquip ex\n        ea combina commodo consequat.</p>\n      </ion-item>\n    </div>\n    \n  \n  \n  </ion-content>\n  '/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/gypsy/src/pages/termscondition/termscondition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TermsconditionPage);
    return TermsconditionPage;
}());

//# sourceMappingURL=termscondition.js.map

/***/ })

});
//# sourceMappingURL=1.js.map