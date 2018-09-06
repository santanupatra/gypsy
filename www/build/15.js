webpackJsonp([15],{

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanylistPageModule", function() { return CompanylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__companylist__ = __webpack_require__(696);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompanylistPageModule = /** @class */ (function () {
    function CompanylistPageModule() {
    }
    CompanylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__companylist__["a" /* CompanylistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__companylist__["a" /* CompanylistPage */]),
            ],
        })
    ], CompanylistPageModule);
    return CompanylistPageModule;
}());

//# sourceMappingURL=companylist.module.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(153);
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
 * Generated class for the CompanylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompanylistPage = /** @class */ (function () {
    function CompanylistPage(navCtrl, navParams, api, AuthService, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.AuthService = AuthService;
        this.alertCtrl = alertCtrl;
        this.service = service;
    }
    CompanylistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanylistPage');
        this.getCompanylist();
    };
    CompanylistPage.prototype.getCompanylist = function () {
        var _this = this;
        this.api.post('companylist', { user_id: '' }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                //  this.afloginsuccess(response);
                _this.companyList = response.full_list;
                _this.image_url = response.image_url;
            }
            else {
                _this.service.popup('Alert', 'Wrong EmailId & Password');
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    CompanylistPage.prototype.gotoFeed = function (company_id, id) {
        this.navCtrl.push('FeedPage', { company_id: company_id, sid: id });
        //  this.facbookFeed(company_id);
        //  this.twitterFeed(company_id);
        //  this.pinterestFeed(company_id);
    };
    CompanylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-companylist',template:/*ion-inline-start:"/home/nits-d044/Desktop/ionic/gypsy/src/pages/companylist/companylist.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>cart</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> Company List </ion-title>\n    \n    <ion-buttons end class="position-rel">\n      <div class="cart-amnt">2</div>\n      <button ion-button icon-only >\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card *ngFor="let listcompany of companyList"  >\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="{{image_url}}{{listcompany.Company.image}}">\n      </ion-thumbnail>\n      <h2>{{listcompany.Company.company_name}}</h2>\n      <!-- <p>Lorem Ipsum is simply dumy text of the watch printing and typesetting industry.</p> -->\n      <!-- <h2 class="price">$ 27.25</h2> -->\n          <div class="social-area">\n            <img (click)="gotoFeed(listcompany.Company.id,1)" *ngIf="listcompany.Company.fb_name !=\'\'" src="assets/img/fb-icon.png" alt="">\n            <img (click)="gotoFeed(listcompany.Company.id,2)" *ngIf="listcompany.Company.twitter_name !=\'\'" src="assets/img/twtr-icon.png" alt="">\n            <img (click)="gotoFeed(listcompany.Company.id,3)" *ngIf="listcompany.Company.pinterest_name !=\'\'" src="assets/img/pint-icon.png" alt="">\n          </div>\n    </ion-item>\n  </ion-card>\n<!--   \n  <ion-card>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/nikon.jpg">\n      </ion-thumbnail>\n      <h2>Nikon D-90 DSLR</h2>\n      <p>Lorem Ipsum is simply dumy text of the watch printing and typesetting industry.</p>\n      <h2 class="price">$ 39.99</h2>\n      <div class="social-area">\n        <img src="assets/img/fb-icon.png" alt="">\n        <img src="assets/img/twtr-icon.png" alt="">\n        <img src="assets/img/pint-icon.png" alt="">\n      </div>\n    </ion-item>\n  </ion-card> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/nits-d044/Desktop/ionic/gypsy/src/pages/companylist/companylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], CompanylistPage);
    return CompanylistPage;
}());

//# sourceMappingURL=companylist.js.map

/***/ })

});
//# sourceMappingURL=15.js.map