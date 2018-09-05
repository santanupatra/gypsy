webpackJsonp([3],{

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageModule", function() { return ReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReviewPageModule = /** @class */ (function () {
    function ReviewPageModule() {
    }
    ReviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__review__["a" /* ReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__review__["a" /* ReviewPage */]),
            ],
        })
    ], ReviewPageModule);
    return ReviewPageModule;
}());

//# sourceMappingURL=review.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
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
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewPage = /** @class */ (function () {
    function ReviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewPage');
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-review',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/gypsy/src/pages/review/review.html"*/'<!--\n  Generated template for the ReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>review</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n<ion-header>\n    <ion-navbar no-border-bottom>\n      <button ion-button menuToggle>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n      <ion-title> Review </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content>\n  \n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/wish-watch.png">\n        </ion-thumbnail>\n        <h2>Rolex Cosmograph Daytona</h2>\n        <ion-note item-end="" class="note note-ios">5m</ion-note>\n        <p>Lorem Ipsum is simply dumy text of the watch printing and typesetting industry.</p>\n        <p><ion-icon class="star" name="star"></ion-icon> <ion-icon class="star" name="star"></ion-icon> <ion-icon class="star" name="star"></ion-icon> <ion-icon class="star" name="star"></ion-icon> <ion-icon class="star" name="star-half"></ion-icon> <span>(4.5)</span> </p>\n      \n      \n      </ion-item>\n    </ion-card>\n    \n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/nikon.jpg">\n        </ion-thumbnail>\n        <h2>Nikon D-90 DSLR</h2>\n        <ion-note item-end="" class="note note-ios">5m</ion-note>\n        <p>Lorem Ipsum is simply dumy text of the watch printing and typesetting industry.</p>\n        <p>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star-half"></ion-icon>\n          <span>(4.5)</span>\n        </p>\n      </ion-item>\n    </ion-card>\n  \n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/drone-b.jpg">\n        </ion-thumbnail>\n        <h2>Angel Drone</h2>\n        <ion-note item-end="" class="note note-ios">5m</ion-note>\n        <p>Lorem Ipsum is simply dumy text of the watch printing and typesetting industry.</p>\n        <p>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star-half"></ion-icon>\n          <span>(4.5)</span>\n        </p>\n    \n    \n      </ion-item>\n    </ion-card>\n    \n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/speakr-pic.jpg">\n        </ion-thumbnail>\n        <h2>2 in 1 speaker</h2>\n        <ion-note item-end="" class="note note-ios">5m</ion-note>\n        <p>Lorem Ipsum is simply dumy text of the watch printing and typesetting industry.</p>\n        <p>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star-half"></ion-icon>\n          <span>(4.5)</span>\n        </p>\n      </ion-item>\n    </ion-card>\n  \n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/wish-watch.png">\n        </ion-thumbnail>\n        <h2>Rolex Cosmograph Daytona</h2>\n        <ion-note item-end="" class="note note-ios">5m</ion-note>\n        <p>Lorem Ipsum is simply dumy text of the watch printing and typesetting industry.</p>\n        <p>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star"></ion-icon>\n          <ion-icon class="star" name="star-half"></ion-icon>\n          <span>(4.5)</span>\n        </p>\n    \n    \n      </ion-item>\n    </ion-card>\n  \n  </ion-content>\n  '/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/gypsy/src/pages/review/review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ })

});
//# sourceMappingURL=3.js.map