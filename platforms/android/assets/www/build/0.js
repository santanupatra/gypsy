webpackJsonp([0],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wishlist__ = __webpack_require__(705);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WishlistPageModule = /** @class */ (function () {
    function WishlistPageModule() {
    }
    WishlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wishlist__["a" /* WishlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wishlist__["a" /* WishlistPage */]),
            ],
        })
    ], WishlistPageModule);
    return WishlistPageModule;
}());

//# sourceMappingURL=wishlist.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
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
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WishlistPage = /** @class */ (function () {
    function WishlistPage(navCtrl, navParams, api, AuthService, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.AuthService = AuthService;
        this.alertCtrl = alertCtrl;
        this.service = service;
        // alert(AuthService.getuserid());
        this.user_id = AuthService.getuserid();
        this.pet = "wishlist";
    }
    WishlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WishlistPage');
        this.mywhishList();
    };
    WishlistPage.prototype.mywhishList = function () {
        var _this = this;
        this.api.post('mywishlist', { id: this.user_id }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                _this.productList = response.wishlist_details;
                _this.is_exist = 1;
            }
            else {
                _this.message = response.msg;
                _this.is_exist = 0;
            }
        }, function (err) {
            _this.service.popup('Alert', 'Something went wrong');
        });
    };
    WishlistPage.prototype.deletewishList = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Remove',
            message: 'Do you want remove the item from your wishlist?',
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
                        _this.api.post('deletewishlist', { id: id }).subscribe(function (response) {
                            console.log(response);
                            if (response.Ack === 1) {
                                //  this.productList = response.wishlist_details;
                                //  this.is_exist = 1;
                                _this.productList = null;
                                _this.mywhishList();
                            }
                            else {
                                // this.message = response.msg;
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
    // presentConfirm() {
    //   let alert = this.alertCtrl.create({
    //     title: 'Confirm Remove',
    //     message: 'Do you want remove the item from your wishlist?',
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         role: 'cancel',
    //         handler: () => {
    //           return false;
    //         }
    //       },
    //       {
    //         text: 'Remove',
    //         handler: () => {
    //           return true;
    //         }
    //       }
    //     ]
    //   });
    // 	return alert.present();
    // }
    WishlistPage.prototype.addtoCart = function (proid) {
        var _this = this;
        this.api.post('addcart', { id: this.user_id, product_id: proid }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                _this.navCtrl.push("CartPage");
            }
            else {
            }
        }, function (err) {
            _this.service.popup('Alert', 'Something is Wrong');
        });
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wishlist',template:/*ion-inline-start:"/home/nits-avik/Desktop/ionic3/gypsy-latest/src/pages/wishlist/wishlist.html"*/'<!--\n  Generated template for the WishlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>wishlist</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> My Activity </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="heart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> My Activity </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only >\n        <ion-icon name="heart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <!-- <ion-toolbar no-border-top>    \n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="wishlist">\n         Wishlist\n      </ion-segment-button>\n      <ion-segment-button value="likes">\n         Likes\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar> -->\n  <ion-toolbar no-border-top>\n    <div>\n      <ion-segment [(ngModel)]="pet">\n        <ion-segment-button value="wishlist">\n           Wishlist\n        </ion-segment-button>\n        <ion-segment-button value="likes">\n           Likes\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n  </ion-toolbar>\n  \n</ion-header>\n\n\n<ion-content> \n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'wishlist\'">\n      <ion-card *ngFor="let productlist of productList">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="{{productlist.ProductImage}}">\n          </ion-thumbnail>\n          <h2>{{productlist.Product.product_name}}</h2>\n          <p innerHTML="{{productlist.Product.product_description}}"></p>\n          <h2 class="price">${{productlist.Product.price}}</h2>\n          <button ion-button color="secondary" (click)="addtoCart(productlist.Product.id)" > <ion-icon name="cart"></ion-icon>Add to cart</button>\n          <button ion-button color="danger" (click)="deletewishList(productlist.Wishlist.id)"> <ion-icon name="trash"></ion-icon>Remove</button>\n        </ion-item>\n      </ion-card>\n\n      <h3 *ngIf="is_exist ==0">{{message}}</h3>\n\n    </ion-list>\n\n    <ion-list padding *ngSwitchCase="\'likes\'">\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/like-a.jpg" alt="">\n          </ion-avatar>\n          <h2 class="person-name">Angelina K</h2> \n          <div class="l-f-area"> \n            <span item-start>Like</span>\n            <span item-start>Follow</span>\n          </div>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/like-b.jpg" alt="">\n          </ion-avatar>\n          <h2 class="person-name">Angelina K</h2>\n          <div class="l-f-area">\n            <span item-start>Like</span>\n            <span item-start>Follow</span>\n          </div>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/like-c.jpg" alt="">\n          </ion-avatar>\n          <h2 class="person-name">Angelina K</h2>\n          <div class="l-f-area">\n            <span item-start>Like</span>\n            <span item-start>Follow</span>\n          </div>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/like-d.jpg" alt="">\n          </ion-avatar>\n          <h2 class="person-name">Angelina K</h2>\n          <div class="l-f-area">\n            <span item-start>Like</span>\n            <span item-start>Follow</span>\n          </div>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/like-e.jpg" alt="">\n          </ion-avatar>\n          <h2 class="person-name">Angelina K</h2>\n          <div class="l-f-area">\n            <span item-start>Like</span>\n            <span item-start>Follow</span>\n          </div>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/like-f.jpg" alt="">\n          </ion-avatar>\n          <h2 class="person-name">Angelina K</h2>\n          <div class="l-f-area">\n            <span item-start>Like</span>\n            <span item-start>Follow</span>\n          </div>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/like-g.jpg" alt="">\n          </ion-avatar>\n          <h2 class="person-name">Angelina K</h2>\n          <div class="l-f-area">\n            <span item-start>Like</span>\n            <span item-start>Follow</span>\n          </div>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/like-b.jpg" alt="">\n          </ion-avatar>\n          <h2 class="person-name">Angelina K</h2>\n          <div class="l-f-area">\n            <span item-start>Like</span>\n            <span item-start>Follow</span>\n          </div>\n        </ion-item>\n\n\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/nits-avik/Desktop/ionic3/gypsy-latest/src/pages/wishlist/wishlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ })

});
//# sourceMappingURL=0.js.map