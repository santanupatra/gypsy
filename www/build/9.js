webpackJsonp([9],{

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(701);
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

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
        console.log(this.user_id);
        this.api.post('newarraival', { user_id: this.user_id }).subscribe(function (response) {
            //console.log(response);
            // console.log(response.products);
            if (response.ACK === 1) {
                _this.newarraivalList = response.products;
                _this.image_url = response.image_url;
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
    HomePage.prototype.addWishList = function (id, index) {
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
                _this.newarraivalList[index].wishlist = 1;
                _this.newarraivalList[index].total_wishlist = _this.newarraivalList[index].total_wishlist + 1;
            }
            else {
                loading.dismiss();
                _this.newarraivalList[index].wishlist = 0;
                _this.newarraivalList[index].total_wishlist = _this.newarraivalList[index].total_wishlist - 1;
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    HomePage.prototype.addLikelLst = function (id, index) {
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
                _this.newarraivalList[index].like = 1;
                _this.newarraivalList[index].total_like = _this.newarraivalList[index].total_like + 1;
            }
            else {
                loading.dismiss();
                _this.newarraivalList[index].like = 0;
                _this.newarraivalList[index].total_like = _this.newarraivalList[index].total_like - 1;
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nits-d044/Desktop/ionic/gypsy/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="assets/img/home-logo.png" alt="Ionic logo">\n    </ion-title>\n     <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n        <ion-icon name="cart" (click)="gotoviewCart()"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-list-header class="item item-ios list-header list-header-ios">\n      New Arrival\n    </ion-list-header>\n    \n    <div class="new-arrival">\n       <ion-card *ngFor="let newarraival of newarraivalList; index as i"> \n              \n        <img class="card-pic" src="{{newarraival.image}}" (click)="gotoDetails(newarraival.id)">\n        <ion-card-content>\n          <ion-row>\n            <ion-col class="pl-0 pr-0">\n              <ion-card-title>\n                  {{newarraival.product_name}}\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n                \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price">${{newarraival.price}}</p>\n            </ion-col>\n            <ion-col class="pl-0 pr-0">\n              <div class="like-total">\n                <div class="like-area">  \n                  {{count}}               \n                  <button ion-button (click)="addLikelLst(newarraival.id, i)">\n                    <img *ngIf="newarraival.like == 0" src="assets/img/thumb.png" alt="">\n                    <img *ngIf="newarraival.like == 1" src="assets/img/thumb-b.png" alt="">\n                    <span class="like-nmbr">({{newarraival.total_like}})</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button (click)="addWishList(newarraival.id, i)">\n                    <img *ngIf="newarraival.wishlist == 0" src="assets/img/heart.png" alt="">\n                    <img *ngIf="newarraival.wishlist == 1" src="assets/img/heart-b.png" alt="">\n                    <span class="like-nmbr">({{newarraival.total_wishlist}})</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n               <a href="{{newarraival.fb_link}}" ><img src="assets/img/fb-icon.png" alt=""></a>\n               <a href="{{newarraival.twitter_link}}">  <img src="assets/img/twtr-icon.png" alt=""></a>\n               <a href="{{newarraival.printerest_link}}"> <img src="assets/img/pint-icon.png" alt=""></a>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n    </div>\n\n    <ion-list-header class="item item-ios list-header list-header-ios">\n     Best Seller\n    </ion-list-header>\n    <div class="new-arrival">\n      <ion-card *ngFor="let bseller of bestseller">\n        <img class="card-pic" src="{{image_url}}{{bseller.product_images.originalpath}}" (click)="gotoDetails(bseller.products.id)">\n        <ion-card-content>\n          <ion-row>\n            <ion-col class="pl-0 pr-0">\n              <ion-card-title>\n                 {{bseller.products.product_name}}\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n    \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price">${{bseller.products.price}}</p>\n            </ion-col>\n            <ion-col class="pl-0 pr-0">\n              <div class="like-total">\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/thumb-b.png" alt="">\n                    <span class="like-nmbr">(139)</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/heart-b.png" alt="">\n                    <span class="like-nmbr">(38)</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n                <img src="assets/img/fb-icon.png" alt="">\n                <img src="assets/img/twtr-icon.png" alt="">\n                <img src="assets/img/pint-icon.png" alt="">\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    \n    </div>\n\n  </ion-list>\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/nits-d044/Desktop/ionic/gypsy/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=9.js.map