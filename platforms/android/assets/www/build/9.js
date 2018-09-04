webpackJsonp([9],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(696);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]),
            ],
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
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
// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';





/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl, navParams, api, AuthService, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.AuthService = AuthService;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.sid = this.navParams.get('sid');
        this.company_id = this.navParams.get('company_id');
        //  alert(this.navParams.get('sid'));
        // alert(this.navParams.get('company_id'));
        //alert(this.sid);
        if (this.sid == 1) {
            this.facbookFeed(this.company_id);
        }
        else if (this.sid == 2) {
            //this.twitterFeed(this.company_id);
        }
        else {
            this.pinterestFeed(this.company_id);
        }
    }
    FeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedPage');
    };
    FeedPage.prototype.facbookFeed = function (company_id) {
        var _this = this;
        this.api.post('feedlistfb', { company_id: company_id }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                _this.feedListFacebook = response.feed_list;
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    FeedPage.prototype.twitterFeed = function (company_id) {
        var _this = this;
        this.api.post('companylist', { company_id: company_id }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                _this.feedListTwitter = response.feed_list;
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    FeedPage.prototype.pinterestFeed = function (company_id) {
        var _this = this;
        this.api.post('feedlistpinterest', { company_id: company_id }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                _this.feedListPinterest = response.feed_list;
                console.log(_this.feedListPinterest);
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"/home/nits-avik/Desktop/ionic3/gypsy-latest/src/pages/feed/feed.html"*/'<!--\n  Generated template for the FeedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <ion-title> Feed </ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content *ngIf="sid==1">\n \n  <ion-card *ngFor="let feed of feedListFacebook">\n  \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/like-b.jpg" alt="">\n      </ion-avatar>      \n      <h2>Leonardo Taylor</h2>\n      <p>California C.A. USA</p>\n      <ion-note item-end="" class="note note-ios">5m</ion-note>\n    </ion-item>\n  \n    <img src="{{feed.image}}" alt="">\n  \n    <ion-card-content class="pb-0">\n      <h2>{{feed.title}}</h2>\n      <ion-item class="brdr-b">\n        <span item-start>\n          <img class="img-pic" src="assets/img/thumb-b.png" alt="">\n           (139)\n        </span>\n        <span item-start>\n          <img class="img-pic" src="assets/img/heart.png" alt="">\n           (38)\n        </span>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/like-a.jpg" alt="">\n        </ion-avatar>\n        <p class="comment">Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa.\n          This is heavy.</p>\n      </ion-item>\n      <ion-row>\n        <ion-col col-9>\n          <ion-textarea></ion-textarea>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button color="danger">Post</button>\n        </ion-col>\n      </ion-row> -->\n    </ion-card-content>\n  </ion-card>\n  <!-- <ion-card>\n  \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/like-b.jpg" alt="">\n      </ion-avatar>\n      <h2>Leonardo Taylor</h2>\n      <p>California C.A. USA</p>\n      <ion-note item-end="" class="note note-ios">5m</ion-note>\n    </ion-item>\n  \n    <img src="assets/img/feed-ban.jpg" alt="">\n  \n    <ion-card-content class="pb-0">\n      <h2>Nikon D90 DSLR with 18-55 lense...</h2>\n      <ion-item class="brdr-b">\n        <span item-start>\n          <img class="img-pic" src="assets/img/thumb-b.png" alt=""> (139)\n        </span>\n        <span item-start>\n          <img class="img-pic" src="assets/img/heart.png" alt=""> (38)\n        </span>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/like-a.jpg" alt="">\n        </ion-avatar>\n        <p class="comment">Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n          Whoa. This is heavy.</p>\n      </ion-item>\n      <ion-row>\n        <ion-col col-9>\n          <ion-textarea></ion-textarea>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button color="danger">Post</button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card> -->\n</ion-content>\n\n<ion-content *ngIf="sid==2">\n    <h4>Working on this </h4>\n     <!-- <ion-card>\n     \n       <ion-item>\n         <ion-avatar item-start>\n           <img src="assets/img/like-b.jpg" alt="">\n         </ion-avatar>      \n         <h2>Leonardo Taylor</h2>\n         <p>California C.A. USA</p>\n         <ion-note item-end="" class="note note-ios">5m</ion-note>\n       </ion-item>\n     \n       <img src="{{feed.image}}" alt="">\n     \n       <ion-card-content class="pb-0">\n         <h2>{{feed.title}}</h2>\n         <ion-item class="brdr-b">\n           <span item-start>\n             <img class="img-pic" src="assets/img/thumb-b.png" alt="">\n              (139)\n           </span>\n           <span item-start>\n             <img class="img-pic" src="assets/img/heart.png" alt="">\n              (38)\n           </span>\n         </ion-item>\n         <ion-item>\n           <ion-avatar item-start>\n             <img src="assets/img/like-a.jpg" alt="">\n           </ion-avatar>\n           <p class="comment">Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa.\n             This is heavy.</p>\n         </ion-item>\n         <ion-row>\n           <ion-col col-9>\n             <ion-textarea></ion-textarea>\n           </ion-col>\n           <ion-col col-3>\n             <button ion-button color="danger">Post</button>\n           </ion-col>\n         </ion-row>\n       </ion-card-content>\n     </ion-card> -->\n   \n   </ion-content>\n\n\n   <ion-content *ngIf="sid==3">\n      \n       <ion-card *ngFor="let feed of feedListPinterest">\n       \n         <ion-item>\n           <ion-avatar item-start>\n             <img src="assets/img/like-b.jpg" alt="">\n           </ion-avatar>      \n           <h2>Leonardo Taylor</h2>\n           <p>California C.A. USA</p>\n           <ion-note item-end="" class="note note-ios">5m</ion-note>\n         </ion-item>\n         \n         <img src="{{feed.image}}" alt="" (click)="gotofeedDetails()">\n       \n         <ion-card-content class="pb-0">\n           <h2>{{feed.title[0]}}</h2>\n           <ion-item class="brdr-b">\n             <span item-start>\n               <img class="img-pic" src="assets/img/thumb-b.png" alt="">\n                (139)\n             </span>\n             <span item-start>\n               <img class="img-pic" src="assets/img/heart.png" alt="">\n                (38)\n             </span>\n           </ion-item>\n           <!-- <ion-item>\n             <ion-avatar item-start>\n               <img src="assets/img/like-a.jpg" alt="">\n             </ion-avatar>\n             <p class="comment">Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa.\n               This is heavy.</p>\n           </ion-item>\n           <ion-row>\n             <ion-col col-9>\n               <ion-textarea></ion-textarea>\n             </ion-col>\n             <ion-col col-3>\n               <button ion-button color="danger">Post</button>\n             </ion-col>\n           </ion-row> -->\n         </ion-card-content>\n       </ion-card>\n     \n     </ion-content>\n'/*ion-inline-end:"/home/nits-avik/Desktop/ionic3/gypsy-latest/src/pages/feed/feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ })

});
//# sourceMappingURL=9.js.map