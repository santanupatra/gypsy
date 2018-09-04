webpackJsonp([7],{

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(698);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
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
    function HomePage(navCtrl, navParams, api, AuthService, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.AuthService = AuthService;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.newArraival();
        this.bestSeller();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.gotoDetails = function (id) {
        // alert(id);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nits-avik/Desktop/ionic3/gypsy-latest/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="assets/img/home-logo.png" alt="Ionic logo">\n    </ion-title>\n     <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n        <ion-icon name="cart" (click)="gotoviewCart()"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-list-header class="item item-ios list-header list-header-ios">\n      New Arrival\n    </ion-list-header>\n    \n    <div class="new-arrival">\n       <ion-card *ngFor="let newarraival of newarraivalList">\n        <img class="card-pic" src="{{image_url}}{{newarraival.ProductImage[0].originalpath}}" (click)="gotoDetails(newarraival.Product.id)">\n        <ion-card-content>\n          <ion-row>\n            <ion-col class="pl-0 pr-0">\n              <ion-card-title>\n                  {{newarraival.Product.product_name}}\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n                \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price">${{newarraival.Product.price}}</p>\n            </ion-col>\n            <ion-col class="pl-0 pr-0">\n              <div class="like-total">\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/thumb.png" alt="">\n                    <span class="like-nmbr">(139)</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/heart.png" alt="">\n                    <span class="like-nmbr">(38)</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n               <a href="{{newarraival.Product.fb_link}}" ><img src="assets/img/fb-icon.png" alt=""></a>\n               <a href="{{newarraival.Product.twitter_link}}">  <img src="assets/img/twtr-icon.png" alt=""></a>\n               <a href="{{newarraival.Product.printerest_link}}"> <img src="assets/img/pint-icon.png" alt=""></a>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- <ion-card> \n        <img class="card-pic" src="assets/img/camera-pic.jpg" (click)="gotoDetails(\'DetailPage\')">\n        <ion-card-content>\n          <ion-row>\n            <ion-col class="pl-0 pr-0">\n              <ion-card-title>\n                2 in 1 speaker\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n      \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price">$12.85</p>\n            </ion-col>\n            <ion-col class="pl-0 pr-0">\n              <div class="like-total">\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/thumb.png" alt="">\n                    <span class="like-nmbr">(139)</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/heart.png" alt="">\n                    <span class="like-nmbr">(38)</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n                <img src="assets/img/fb-icon.png" alt="">\n                <img src="assets/img/twtr-icon.png" alt="">\n                <img src="assets/img/pint-icon.png" alt="">\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <img class="card-pic" src="assets/img/speakr-pic.jpg" (click)="gotoDetails(\'DetailPage\')">\n        <ion-card-content>\n          <ion-row>\n            <ion-col class="pl-0 pr-0">\n              <ion-card-title>\n                2 in 1 speaker\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n      \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price">$12.85</p>\n            </ion-col>\n            <ion-col class="pl-0 pr-0">\n              <div class="like-total">\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/thumb.png" alt="">\n                    <span class="like-nmbr">(139)</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/heart.png" alt="">\n                    <span class="like-nmbr">(38)</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n                <img src="assets/img/fb-icon.png" alt="">\n                <img src="assets/img/twtr-icon.png" alt="">\n                <img src="assets/img/pint-icon.png" alt="">\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <img class="card-pic" src="assets/img/camera-pic.jpg" (click)="gotoDetails(\'DetailPage\')">\n        <ion-card-content>\n          <ion-row>\n            <ion-col class="pl-0 pr-0">\n              <ion-card-title>\n                2 in 1 speaker\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n      \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price">$12.85</p>\n            </ion-col>\n            <ion-col class="pl-0 pr-0">\n              <div class="like-total">\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/thumb.png" alt="">\n                    <span class="like-nmbr">(139)</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/heart.png" alt="">\n                    <span class="like-nmbr">(38)</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n                <img src="assets/img/fb-icon.png" alt="">\n                <img src="assets/img/twtr-icon.png" alt="">\n                <img src="assets/img/pint-icon.png" alt="">\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>  -->\n\n     \n    \n    </div>\n\n \n        \n\n        \n\n    \n    <ion-list-header class="item item-ios list-header list-header-ios">\n     Best Seller\n    </ion-list-header>\n    <div class="new-arrival">\n      <ion-card *ngFor="let bseller of bestseller">\n        <img class="card-pic" src="{{image_url}}{{bseller.product_images.originalpath}}" (click)="gotoDetails(bseller.products.id)">\n        <ion-card-content>\n          <ion-row>\n            <ion-col class="pl-0 pr-0">\n              <ion-card-title>\n                 {{bseller.products.product_name}}\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n    \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price">${{bseller.products.price}}</p>\n            </ion-col>\n            <ion-col class="pl-0 pr-0">\n              <div class="like-total">\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/thumb-b.png" alt="">\n                    <span class="like-nmbr">(139)</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/heart-b.png" alt="">\n                    <span class="like-nmbr">(38)</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n                <img src="assets/img/fb-icon.png" alt="">\n                <img src="assets/img/twtr-icon.png" alt="">\n                <img src="assets/img/pint-icon.png" alt="">\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    \n      <!-- <ion-card>\n        <img class="card-pic" src="assets/img/drone.jpg" (click)="gotoDetails(\'DetailPage\')">\n        <ion-card-content>\n          <ion-row>\n            <ion-col class="pl-0 pr-0">\n              <ion-card-title>\n                 Drone with camera\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n    \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price">$12.85</p>\n            </ion-col>\n            <ion-col class="pl-0 pr-0">\n              <div class="like-total">\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/thumb-b.png" alt="">\n                    <span class="like-nmbr">(139)</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/heart-b.png" alt="">\n                    <span class="like-nmbr">(38)</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n                <img src="assets/img/fb-icon.png" alt="">\n                <img src="assets/img/twtr-icon.png" alt="">\n                <img src="assets/img/pint-icon.png" alt="">\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <img class="card-pic" src="assets/img/watch.jpg" (click)="gotoDetails(\'DetailPage\')">\n        <ion-card-content>\n          <ion-row>\n            <ion-col class="pl-0 pr-0">\n              <ion-card-title>\n                Wrist Watch\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n      \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price">$12.85</p>\n            </ion-col>\n            <ion-col class="pl-0 pr-0">\n              <div class="like-total">\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/thumb-b.png" alt="">\n                    <span class="like-nmbr">(139)</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/heart-b.png" alt="">\n                    <span class="like-nmbr">(38)</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n                <img src="assets/img/fb-icon.png" alt="">\n                <img src="assets/img/twtr-icon.png" alt="">\n                <img src="assets/img/pint-icon.png" alt="">\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n      \n      <ion-card>\n        <img class="card-pic" src="assets/img/drone.jpg" (click)="gotoDetails(\'DetailPage\')">\n        <ion-card-content>\n          <ion-row>\n            <ion-col class="pl-0 pr-0">\n              <ion-card-title>\n                Drone with camera\n              </ion-card-title>\n              <div class="star-area">\n                <span>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon>\n                </span>\n      \n                <span class="rate">(4.5)</span>\n              </div>\n              <p class="price">$12.85</p>\n            </ion-col>\n            <ion-col class="pl-0 pr-0">\n              <div class="like-total">\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/thumb-b.png" alt="">\n                    <span class="like-nmbr">(139)</span>\n                  </button>\n                  <h3>Like</h3>\n                </div>\n                <div class="like-area">\n                  <button ion-button>\n                    <img src="assets/img/heart-b.png" alt="">\n                    <span class="like-nmbr">(38)</span>\n                  </button>\n                  <h3>WishList</h3>\n                </div>\n              </div>\n              <div class="social-area">\n                <img src="assets/img/fb-icon.png" alt="">\n                <img src="assets/img/twtr-icon.png" alt="">\n                <img src="assets/img/pint-icon.png" alt="">\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card> -->\n    \n      \n    </div>\n\n  </ion-list>\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/nits-avik/Desktop/ionic3/gypsy-latest/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=7.js.map