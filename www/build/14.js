webpackJsonp([14],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */]),
            ],
        })
    ], DetailPageModule);
    return DetailPageModule;
}());

//# sourceMappingURL=detail.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
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
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, api, AuthService, alertCtrl, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.AuthService = AuthService;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        //productDetails:any;
        this.productDetails = {};
        this.heart = false;
        this.like = false;
        this.id = this.navParams.get('id');
        // alert(this.id);
        this.user_id = AuthService.getuserid();
        this.alsolikeList(this.id);
        this.detailsProduct(this.id);
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage.prototype.alsolikeList = function (id) {
        var _this = this;
        this.api.post('alsolikelist', { product_id: id, user_id: this.user_id }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                _this.prolikeList = response.like_details;
                _this.url = "http://111.93.169.90/";
                console.log(_this.prolikeList);
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    DetailPage.prototype.detailsProduct = function (id) {
        var _this = this;
        this.api.post('productdetails', { product_id: id, user_id: this.user_id }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                _this.productDetails = response.product_details.Product;
                _this.productimages = response.product_details.ProductImage;
                _this.imageurl = response.image_url;
                if (response.like >= 1) {
                    _this.like = true;
                }
                if (response.wishlist >= 1) {
                    _this.heart = true;
                }
                console.log(_this.productDetails);
                console.log('images', _this.productimages);
                console.log('imageurl', _this.imageurl);
                _this.prolikeCount = response.product_details.Like.length;
                //  alert(this.prolikeCount);
                _this.url = "http://111.93.169.90/";
                // console.log(this.prolikeList);
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    DetailPage.prototype.addWishList = function (id) {
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
    DetailPage.prototype.addLikelLst = function (id) {
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
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/home/nits-d044/Desktop/ionic/gypsy/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> {{productDetails.product_name}} </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="search"></ion-icon>\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-content>\n    <ion-list>  \n      <ion-card>\n        <div class="card-pic-ban">\n            <ion-slides pager >\n                <ion-slide  *ngFor="let item of productimages"><img  *ngIf="productimages.length != 0" src="{{imageurl+item.originalpath}}" alt="">\n                  <img *ngIf="productimages.length == 0" src="assets/img/detail-ban.jpg"alt="">\n              \n                </ion-slide></ion-slides>\n          <!-- <img src="assets/img/detail-ban.jpg"> -->\n        </div>\n       \n        \n        <ion-card-content>\n          <ion-row>\n            <ion-col col-7>\n\n             \n              <ion-card-title class="ban-title"> \n                {{productDetails.product_name}}\n                   <!-- Drone with 18 Megapixel.... -->\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n      \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price-b">${{productDetails.price}}</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="like-total-b">\n                <div class="like-area">\n                  <button ion-button (click)="addLikelLst(productDetails.id)">\n                    <img *ngIf="!like" src="assets/img/thumb.png" alt="">\n                    <img *ngIf="like" src="assets/img/thumb-b.png" alt="">\n                    <span class="like-nmbr">(139)</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button  (click)="addWishList(productDetails.id)">\n                    <img *ngIf="!heart" src="assets/img/heart.png" alt="">\n                    <img *ngIf="heart" src="assets/img/heart-b.png" alt="">\n                    <span class="like-nmbr">(38)</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n                <img src="assets/img/fb-icon.png" alt="">\n                <img src="assets/img/twtr-icon.png" alt="">\n                <img src="assets/img/pint-icon.png" alt="">\n              </div>\n            </ion-col>\n          </ion-row>\n          <h2 class="pro-des-tittle">Product Description:</h2>\n          <p class="pro-des">{{productDetails.product_description}}</p>\n          <!-- <p class="pro-des">Ut enim ad minim veniam, quis nostrud exercitain tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis in vol\n          cillum dolore eu.</p> -->\n          <button ion-button color="secondary"> <ion-icon name="cart"></ion-icon> Add to cart</button>\n        </ion-card-content>\n      </ion-card>\n\n\n        <ion-list-header class="item item-ios list-header list-header-ios">\n          People also like this\n        </ion-list-header>\n\n      \n      <div class="new-arrival">\n        <ion-card *ngFor="let pro of prolikeList">\n          <img class="card-pic" src="{{url}}{{pro.ProductImage}}">\n          <ion-card-content>\n            <ion-row>\n              <ion-col class="pl-0 pr-0">\n                <ion-card-title>\n                 {{pro.Product.product_name}}\n                </ion-card-title>\n                <div class="star-area">\n                  <span>\n                    <ion-icon name="star"></ion-icon>\n                    <ion-icon name="star"></ion-icon>\n                    <ion-icon name="star"></ion-icon>\n                    <ion-icon name="star"></ion-icon>\n                    <ion-icon name="star-half"></ion-icon>\n                  </span>\n  \n                  <span class="rate">(4.5)</span>\n                </div>\n                <p class="price">${{pro.Product.price}}</p>\n              </ion-col>\n              <ion-col class="pl-0 pr-0">\n                <div class="like-total">\n                  <div class="like-area">\n                    <button ion-button>\n                      <img src="assets/img/thumb-b.png" alt="">\n                      <span class="like-nmbr">(139)</span>\n                    </button>\n                    <h3>Like</h3>\n                  </div>\n                  <div class="like-area">\n                    <button ion-button>\n                      <img src="assets/img/heart-b.png" alt="">\n                      <span class="like-nmbr">(38)</span>\n                    </button>\n                    <h3>WishList</h3>\n                  </div>\n                </div>\n                <div class="social-area">\n                  <img src="assets/img/fb-icon.png" alt="">\n                  <img src="assets/img/twtr-icon.png" alt="">\n                  <img src="assets/img/pint-icon.png" alt="">\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card> \n  \n      </div>\n  \n    </ion-list>\n  \n  \n  </ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/home/nits-d044/Desktop/ionic/gypsy/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ })

});
//# sourceMappingURL=14.js.map