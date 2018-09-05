webpackJsonp([17],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var apiUrl = "http://138.68.12.41:8007/api/";
var imageurl = "http://138.68.12.41:8007/media/";
var mediaurl = "http://138.68.12.41:8007/";
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]({});
        this.user$ = this.subject.asObservable();
        this.unreadcount = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]({});
        this.unreadmsg$ = this.unreadcount.asObservable();
    }
    AuthProvider.prototype.initialteunreadmsg = function (val) {
        //console.log(val);
        this.unreadcount.next(val);
    };
    AuthProvider.prototype.initializeUserData = function (data) {
        this.subject.next(data);
    };
    AuthProvider.prototype.login = function (data) {
        var _this = this;
        console.log(data);
        return this.http.post(apiUrl + 'login-submit', data)
            .do(function (res) {
            console.log(res);
            if (res.ack === 1) {
                _this.subject.next({ id: res.id, first_name: res.fname, last_name: res.lname, type: res.user_type, user_image: res.user_image });
            }
        })
            .map(function (response) {
            return response;
        })
            .catch(function (err) {
            //console.log(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err);
        });
    };
    AuthProvider.prototype.logout = function () {
        this.subject.next({});
        localStorage.removeItem("authID");
        localStorage.removeItem("authTYPE");
    };
    AuthProvider.prototype.getuserid = function () {
        return localStorage.getItem("authID");
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		674,
		16
	],
	"../pages/cart/cart.module": [
		675,
		15
	],
	"../pages/change-password/change-password.module": [
		676,
		14
	],
	"../pages/companylist/companylist.module": [
		677,
		13
	],
	"../pages/detail/detail.module": [
		679,
		12
	],
	"../pages/edit-profile/edit-profile.module": [
		678,
		11
	],
	"../pages/feed/feed.module": [
		680,
		10
	],
	"../pages/follow/follow.module": [
		681,
		9
	],
	"../pages/forgot-password/forgot-password.module": [
		682,
		8
	],
	"../pages/home/home.module": [
		683,
		7
	],
	"../pages/login/login.module": [
		687,
		6
	],
	"../pages/privacy/privacy.module": [
		684,
		5
	],
	"../pages/refer-friend/refer-friend.module": [
		685,
		4
	],
	"../pages/review/review.module": [
		686,
		3
	],
	"../pages/signup/signup.module": [
		688,
		2
	],
	"../pages/termscondition/termscondition.module": [
		689,
		1
	],
	"../pages/wishlist/wishlist.module": [
		690,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = "http://111.93.169.90/team4/gypsy/webservice";
//const apiUrl = "http://192.168.1.118/team4/gypsy/webservice";
var mediaUrl = "http://111.93.169.90/team4/gypsy/";
var url = "http://111.93.169.90";
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
    }
    ApiProvider.prototype.post = function (link, data) {
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type':  'application/json',
        //     'Authorization': 'my-auth-token'
        //   })
        // };
        console.log(data);
        return this.http.post(apiUrl + '/' + link, data).map(function (response) {
            return response;
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    ServiceProvider.prototype.popup = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_service__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { HomePage } from '../pages/home/home';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/companylist/companylist.module#CompanylistPageModule', name: 'CompanylistPage', segment: 'companylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/follow/follow.module#FollowPageModule', name: 'FollowPage', segment: 'follow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/refer-friend/refer-friend.module#ReferFriendPageModule', name: 'ReferFriendPage', segment: 'refer-friend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/termscondition/termscondition.module#TermsconditionPageModule', name: 'TermsconditionPage', segment: 'termscondition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wishlist/wishlist.module#WishlistPageModule', name: 'WishlistPage', segment: 'wishlist', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_service_service__["a" /* ServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, events, menuCtrl, statusBar, splashScreen, AuthService) {
        var _this = this;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.AuthService = AuthService;
        this.footerIsHidden = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            events.subscribe('hideFooter', function (data) {
                _this.footerIsHidden = data.isHidden;
            });
            console.log(AuthService.getuserid());
            if (AuthService.getuserid()) {
                _this.rootPage = 'HomePage';
            }
            else {
                events.publish('hideFooter', { isHidden: true });
                _this.rootPage = 'LoginPage';
            }
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // this.usertype = localStorage.getItem('authTYPE');
        AuthService.user$.subscribe(function (response) {
            console.log(response);
            if (response.first_name) {
                _this.username = response.first_name + ' ' + response.last_name;
                _this.user_image = response.user_image;
                //alert(this.username);
                localStorage.setItem('login_user_image', _this.user_image);
                //  console.log(this.user_image);
                //this.menuCtrl.open();
            }
            else {
                _this.username = '';
            }
        });
    }
    // menuOpened() {
    //   let userid = localStorage.getItem('authID');
    // }
    MyApp.prototype.logout = function () {
        localStorage.removeItem("authID");
        localStorage.setItem("authID", "");
        localStorage.removeItem("authTYPE");
        this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/gypsy/src/app/app.html"*/'<ion-menu id="myMenu" [content]="content">\n  <ion-header>\n    <ion-toolbar color="orange">\n      <div class="left-bar-top-area">\n        <div class="left-top-pic">\n            <img src="assets/img/no-image.jpeg" alt=""> \n           <!-- <img src="{{user_image}}" alt=""> -->\n           \n        \n        </div>\n        <div>\n      \n          <h5>{{username}}</h5>\n          <!-- <p>Personal balance $0.00 </p> -->\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list class="left-sidebar-list">\n   \n\n\n      <button menuClose ion-item icon-left (click)="openPage(\'HomePage\')">\n        <!-- <ion-icon item-left name="ios-list-box-outline" ></ion-icon> -->\n        <ion-icon item-start="" role="img" class="icon icon-md ion-md-home item-icon" aria-label="home" ng-reflect-name="home"></ion-icon>\n       Home\n      </button>\n\n      <button menuClose ion-item icon-left (click)="openPage(\'EditProfilePage\')">\n          <ion-icon item-start="" role="img" class="icon icon-md ion-md-person item-icon" aria-label="person" ng-reflect-name="person"></ion-icon>\n       My Profile\n      </button>\n\n      <button menuClose ion-item icon-left (click)="openPage(\'WishlistPage\')">\n          <ion-icon item-start="" role="img" class="icon icon-md ion-md-heart item-icon" aria-label="heart" ng-reflect-name="heart"></ion-icon>\n       My Activity\n      </button>\n\n      <button menuClose ion-item icon-left (click)="openPage(\'CompanylistPage\')">\n        <ion-icon item-left name="ios-list-box-outline" ></ion-icon>\n       Company List\n      </button>\n\n\n      <!-- <button menuClose ion-item icon-left (click)="openPage(\'FeedPage\')">\n        <ion-icon item-left name="ios-list-box-outline" ></ion-icon>\n       Feed\n      </button> -->\n\n      <button menuClose ion-item icon-left (click)="openPage(\'ReferFriendPage\')">\n          <ion-icon item-start="" role="img" class="icon icon-md ion-md-people item-icon" aria-label="people" ng-reflect-name="people"></ion-icon>\n       Reffer Friend\n      </button>\n\n      <button menuClose ion-item icon-left (click)="openPage(\'ChangePasswordPage\')">\n          <ion-icon item-start="" role="img" class="icon icon-md ion-md-key item-icon" aria-label="key" ng-reflect-name="key"></ion-icon>\n       Change Password\n      </button>\n\n\n      <button menuClose ion-item icon-left (click)="openPage(\'ReviewPage\')">\n          <ion-icon item-start="" role="img" class="icon icon-md ion-md-star item-icon icon-md-primary" aria-label="star" ng-reflect-name="star" ng-reflect-color="primary"></ion-icon>\n\n         My Review\n        </button>\n\n      <button menuClose ion-item icon-left (click)="openPage(\'PrivacyPage\')">\n        <ion-icon item-left name="ios-list-box-outline" ></ion-icon>\n         Privacy & Policy\n      </button>\n\n      <button menuClose ion-item icon-left (click)="openPage(\'TermsconditionPage\')">\n          <ion-icon item-start="" role="img" class="icon icon-md ion-md-copy item-icon" aria-label="copy" ng-reflect-name="copy"></ion-icon>\n           Terms & Condition\n      </button>\n\n    \n      \n\n      <button menuClose ion-item icon-left (click)="logout()">\n        <ion-icon item-left name="md-log-out"></ion-icon>\n        Logout\n      </button>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n\n<!--  footer Part start  -->\n<!-- <ion-tabs name="conference" *ngIf="!footerIsHidden">\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabUrlPath="conference-schedule"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="My Activity" tabIcon="heart"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Social" tabIcon="people"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="cog"></ion-tab>\n</ion-tabs> -->\n\n<ion-footer *ngIf="!footerIsHidden" class="footer">\n    <ion-toolbar style=" padding: 0;">\n      <ion-grid style=" padding: 0;">\n        <ion-row class="row-bottom">\n          <ion-col text-center >\n              <a (click)="openPage(\'HomePage\')">\n                  <ion-icon name="home"></ion-icon>\n                  <p class="titl">Home</p>\n              </a>\n          </ion-col>\n          <ion-col text-center>\n            <a (click)="openPage(\'WishlistPage\')">\n              <ion-icon name="pricetags" ></ion-icon>\n              <p class="titl">Activity</p>\n            </a>\n          </ion-col>\n          <ion-col text-center>\n            <a (click)="openPage(\'CompanylistPage\')" >\n              <ion-icon name="ios-list-box-outline"></ion-icon>\n              <p class="titl">Social</p>\n            </a>\n          </ion-col>\n        \n          <ion-col text-center>\n            <a (click)="openPage(\'EditProfilePage\')">\n              <ion-icon name="ios-person-outline"></ion-icon>\n              <p class="titl">Settings</p>\n            </a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  \n  \n  </ion-footer>\n  \n\n<!-- footer part end  -->\n\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/gypsy/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map