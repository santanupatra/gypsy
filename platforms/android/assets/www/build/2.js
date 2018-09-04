webpackJsonp([2],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
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





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, api, AuthService, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.AuthService = AuthService;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.data = {};
        // signup: UserOptions = { username: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            // this.userData.signup(this.signup.username);
            // this.navCtrl.push(TabsPage);
        }
    };
    SignupPage.prototype.signup = function (data) {
        var _this = this;
        if (data.password == data.conf_password) {
            this.api.post('signupuser', data).subscribe(function (response) {
                console.log(response);
                if (response.Ack === 1) {
                    _this.afloginsuccess(response);
                }
                else {
                    _this.service.popup('Alert', response.msg);
                }
            }, function (err) {
                _this.service.popup('Alert', 'Already Registered');
            });
        }
        else {
            this.service.popup('Failed', 'Both password should be matched!!');
        }
    };
    SignupPage.prototype.afloginsuccess = function (response) {
        this.navCtrl.setRoot('LoginPage');
        this.service.popup('Success', 'User successfully created');
    };
    SignupPage.prototype.onSignin = function () {
        this.navCtrl.push("LoginPage");
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/nits-avik/Desktop/ionic3/gypsy-latest/src/pages/signup/signup.html"*/'<!-- <ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Signup</ion-title>\n	</ion-navbar>\n</ion-header> -->\n\n<ion-content padding class="login-page">\n\n	<div class="logo">\n		<img src="assets/img/appicon.png" alt="Ionic Logo">\n	</div>\n\n	<form>\n		<ion-list>\n	\n			<ion-item>\n				<ion-input type="text" [(ngModel)]="data.first_name" name="first_name"  value="" placeholder="First Name"></ion-input>\n			</ion-item>\n\n			<ion-item>\n				<ion-input type="text" [(ngModel)]="data.last_name"  name="last_name" value="" placeholder="Last Name"></ion-input>\n			</ion-item>\n\n			<ion-item>\n				<ion-input type="email" [(ngModel)]="data.email_address"  name="email_address" value="" placeholder="Email"></ion-input>\n			</ion-item>\n	\n			<ion-item>\n				<ion-input type="password" [(ngModel)]="data.password" name="password"  placeholder="Password"></ion-input>\n			</ion-item>\n\n			<ion-item>\n				<ion-input type="password" [(ngModel)]="data.conf_password" name="conf_password"  placeholder="Confirm password"></ion-input>\n			</ion-item>\n	\n			\n			<button ion-button color="danger" (click)="signup(data)" block>Sign up</button>\n			<!-- <button ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button> -->\n			<p class="gray-text">Clicking Sign up button you are agree to our terms & conditions</p>\n		</ion-list>\n	\n		<!-- <ion-row class="or-area" responsive-sm>\n			<ion-col col-3 class="pr-0 pb-0" style="display: flex; align-items: center; justify-content: center;">\n				<div class="line"></div>\n			</ion-col>\n			<ion-col col-6 class="pl-0 pr-0 pb-0">\n				<p text-center class="or"> or connect with </p>\n			</ion-col>\n			<ion-col col-3 class="pl-0 pb-0" style="display: flex; align-items: center; justify-content: center;">\n				<div class="line"></div>\n			</ion-col>\n		</ion-row> -->\n	\n		<!-- <ion-row responsive-sm justify-content-center>\n			<ion-col col-3 class="pr-0" text-right>\n				<img class="social-icon" src="assets/img/fb-icon.png" alt="">\n			</ion-col>\n			<ion-col col-3 text-center>\n				<img class="social-icon" src="assets/img/twtr-icon.png" alt="">\n			</ion-col>\n			<ion-col col-3 class="pl-0" text-left>\n				<img class="social-icon" src="assets/img/g+.png" alt="">\n			</ion-col>\n		</ion-row> -->\n	\n		<div style="padding-top:4.5rem !important;">\n			<p class="acess" text-center>Already have account?\n				<span class="guest" (click)="onSignin()">Login</span>\n			</p>\n		</div>\n	\n	</form>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/nits-avik/Desktop/ionic3/gypsy-latest/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=2.js.map