webpackJsonp([16],{

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(693);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
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
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, api, alertCtrl, AuthService, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.AuthService = AuthService;
        this.service = service;
        this.user_id = AuthService.getuserid();
        this.url = "http://111.93.169.90/";
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
        this.fetchProduct();
    };
    CartPage.prototype.strip = function (html) {
        return html.replace(/<(?:.|\n)*?>/gm, '');
    };
    CartPage.prototype.br2nl = function (html) {
        return html.replace(/<br( \/|\/|)>/gm, '\r\n');
    };
    CartPage.prototype.fetchProduct = function () {
        var _this = this;
        this.api.post('viewcart', { user_id: this.user_id }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                _this.productList = response.cart_details;
                console.log(_this.productList);
            }
            else {
                _this.productList = null;
                _this.message = response.msg;
            }
        }, function (err) {
            _this.service.popup('Alert', 'Something went wrong');
        });
    };
    CartPage.prototype.removeItem = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Remove',
            message: 'Do you want remove the item from your Cart?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        // return false;
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        _this.api.post('deletecart', { cart_id: id }).subscribe(function (response) {
                            //	this.api.post('removecart/' + id, { }).subscribe((response: any) => {
                            console.log(response);
                            if (response.Ack === 1) {
                                //  this.productList = response.wishlist_details;
                                //  this.is_exist = 1;
                                //	this.productList = null;
                                _this.fetchProduct();
                            }
                            else {
                                //this.message = response.msg;
                                //this.is_exist = 0;
                            }
                        }, function () {
                            _this.service.popup('Alert', 'Something went Wrong');
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/gypsy/src/pages/cart/cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>cart</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> Cart </ion-title>\n    \n    <ion-buttons end class="position-rel">\n      <div class="cart-amnt">2</div>\n      <button ion-button icon-only >\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<div *ngIf="productList != null">\n<ion-card *ngFor="let product of productList">\n  \n  <ion-item>\n    <ion-thumbnail item-start>\n       \n      <img src="{{url}}{{product.ProductImage}}">\n    \n    </ion-thumbnail>\n    <h2>{{product.Product.product_name}}</h2>\n    <p>{{this.strip(this.br2nl(product.Product.product_description))}}</p>\n    <h2 class="price">$ {{product.Product.price}}</h2>\n    <button ion-button  color="secondary">\n      <ion-icon name="cart"></ion-icon> Buy It</button>\n    <button ion-button (click)="removeItem(product.Cart.id)" color="danger">\n      <ion-icon name="trash"></ion-icon> Remove</button>\n  </ion-item>\n</ion-card>\n\n</div>\n\n<div *ngIf="productList == null">\n\n  <h4 style="text-align:center">No Recors Found!!!</h4>\n</div>\n\n  \n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/gypsy/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=16.js.map