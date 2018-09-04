webpackJsonp([7],{

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(347);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, api, AuthService, alertCtrl, service, events, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.AuthService = AuthService;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.heart = false;
        this.like = false;
        this.user_id = AuthService.getuserid();
        this.events.publish('hideFooter', { isHidden: false });
        this.newArraival();
        this.bestSeller();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.gotoDetails = function (id) {
        this.navCtrl.push('DetailPage', { id: id });
    };
    HomePage.prototype.newArraival = function () {
        var _this = this;
        this.api.post('newarraival', { user_id: "" }).subscribe(function (response) {
            //console.log(response);
            // console.log(response.products);
            if (response.ACK === 1) {
                _this.newarraivalList = response.products;
                _this.image_url = response.image_url;
                //this.is_exist = 1;
                console.log(_this.newarraivalList);
            }
            else {
                //this.message = response.msg;
                //this.is_exist = 0;
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    HomePage.prototype.bestSeller = function () {
        var _this = this;
        this.api.post('bestseller', { user_id: "" }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                _this.bestseller = response.best_seller;
                _this.image_url = "http://111.93.169.90/team4/gypsy/product_img/";
                //this.is_exist = 1;
                console.log(_this.bestseller);
            }
            else {
                //this.message = response.msg;
                //this.is_exist = 0;
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    HomePage.prototype.gotoviewCart = function () {
        // alert(111);
        this.navCtrl.push("CartPage");
    };
    HomePage.prototype.addWishList = function (id) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'show',
            content: 'Loading...',
            duration: 3000
        });
        loading.present();
        this.api.post('addwishlist', { product_id: id, id: this.user_id }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                loading.dismiss();
                _this.heart = true;
            }
            else {
                _this.heart = false;
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    HomePage.prototype.addLikelLst = function (id) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'show',
            content: 'Loading...',
            duration: 3000
        });
        loading.present();
        this.api.post('addlike', { product_id: id, user_id: this.user_id }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                loading.dismiss();
                _this.like = true;
            }
            else {
                _this.like = false;
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/gypsy/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="assets/img/home-logo.png" alt="Ionic logo">\n    </ion-title>\n     <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n        <ion-icon name="cart" (click)="gotoviewCart()"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-list-header class="item item-ios list-header list-header-ios">\n      New Arrival\n    </ion-list-header>\n    \n    <div class="new-arrival">\n       <ion-card *ngFor="let newarraival of newarraivalList">\n        <img class="card-pic" src="{{image_url}}{{newarraival.ProductImage[0].originalpath}}" (click)="gotoDetails(newarraival.Product.id)">\n        <ion-card-content>\n          <ion-row>\n            <ion-col class="pl-0 pr-0">\n              <ion-card-title>\n                  {{newarraival.Product.product_name}}\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n                \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price">${{newarraival.Product.price}}</p>\n            </ion-col>\n            <ion-col class="pl-0 pr-0">\n              <div class="like-total">\n                <div class="like-area">                 \n                  <button ion-button (click)="addLikelLst(newarraival.Product.id)">\n                    <img *ngIf="!like" src="assets/img/thumb.png" alt="">\n                    <img *ngIf="like" src="assets/img/thumb-b.png" alt="">\n                    <span class="like-nmbr">(139)</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button (click)="addWishList(newarraival.Product.id)">\n                    <img *ngIf="!heart" src="assets/img/heart.png" alt="">\n                    <img *ngIf="heart" src="assets/img/heart-b.png" alt="">\n                    <span class="like-nmbr">(38)</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n               <a href="{{newarraival.Product.fb_link}}" ><img src="assets/img/fb-icon.png" alt=""></a>\n               <a href="{{newarraival.Product.twitter_link}}">  <img src="assets/img/twtr-icon.png" alt=""></a>\n               <a href="{{newarraival.Product.printerest_link}}"> <img src="assets/img/pint-icon.png" alt=""></a>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n    </div>\n\n    <ion-list-header class="item item-ios list-header list-header-ios">\n     Best Seller\n    </ion-list-header>\n    <div class="new-arrival">\n      <ion-card *ngFor="let bseller of bestseller">\n        <img class="card-pic" src="{{image_url}}{{bseller.product_images.originalpath}}" (click)="gotoDetails(bseller.products.id)">\n        <ion-card-content>\n          <ion-row>\n            <ion-col class="pl-0 pr-0">\n              <ion-card-title>\n                 {{bseller.products.product_name}}\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n    \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price">${{bseller.products.price}}</p>\n            </ion-col>\n            <ion-col class="pl-0 pr-0">\n              <div class="like-total">\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/thumb-b.png" alt="">\n                    <span class="like-nmbr">(139)</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/heart-b.png" alt="">\n                    <span class="like-nmbr">(38)</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n                <img src="assets/img/fb-icon.png" alt="">\n                <img src="assets/img/twtr-icon.png" alt="">\n                <img src="assets/img/pint-icon.png" alt="">\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    \n    </div>\n\n  </ion-list>\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/gypsy/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _h || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=7.js.map