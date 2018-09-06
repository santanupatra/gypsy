webpackJsonp([3],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.openPage = function (page) {
        this.navCtrl.push(page);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/nits-d044/Desktop/ionic/gypsy/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>    \n        <ion-list>   \n          \n    \n          <button menuClose ion-item icon-left (click)="openPage(\'EditProfilePage\')">\n              <ion-icon item-start="" role="img" class="icon icon-md ion-md-person item-icon" aria-label="person" ng-reflect-name="person"></ion-icon>\n           My Profile\n          </button>\n    \n          <button menuClose ion-item icon-left (click)="openPage(\'WishlistPage\')">\n              <ion-icon item-start="" role="img" class="icon icon-md ion-md-heart item-icon" aria-label="heart" ng-reflect-name="heart"></ion-icon>\n           My Activity\n          </button>\n    \n          <button menuClose ion-item icon-left (click)="openPage(\'CompanylistPage\')">\n            <ion-icon item-left name="ios-list-box-outline" ></ion-icon>\n           Company List\n          </button>\n    \n          <button menuClose ion-item icon-left (click)="openPage(\'ReferFriendPage\')">\n              <ion-icon item-start="" role="img" class="icon icon-md ion-md-people item-icon" aria-label="people" ng-reflect-name="people"></ion-icon>\n           Reffer Friend\n          </button>\n    \n          <button menuClose ion-item icon-left (click)="openPage(\'ChangePasswordPage\')">\n              <ion-icon item-start="" role="img" class="icon icon-md ion-md-key item-icon" aria-label="key" ng-reflect-name="key"></ion-icon>\n           Change Password\n          </button>\n    \n    \n          <button menuClose ion-item icon-left (click)="openPage(\'ReviewPage\')">\n              <ion-icon item-start="" role="img" class="icon icon-md ion-md-star item-icon icon-md-primary" aria-label="star" ng-reflect-name="star" ng-reflect-color="primary"></ion-icon>\n    \n             My Review\n            </button>\n    \n          <button menuClose ion-item icon-left (click)="openPage(\'PrivacyPage\')">\n            <ion-icon item-left name="ios-list-box-outline" ></ion-icon>\n             Privacy & Policy\n          </button>\n    \n          <button menuClose ion-item icon-left (click)="openPage(\'TermsconditionPage\')">\n              <ion-icon item-start="" role="img" class="icon icon-md ion-md-copy item-icon" aria-label="copy" ng-reflect-name="copy"></ion-icon>\n               Terms & Condition\n          </button>\n    \n          <button menuClose ion-item icon-left (click)="logout()">\n            <ion-icon item-left name="md-log-out"></ion-icon>\n            Logout\n          </button>\n    \n        </ion-list>\n      </ion-content>\n\n'/*ion-inline-end:"/home/nits-d044/Desktop/ionic/gypsy/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=3.js.map