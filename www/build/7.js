webpackJsonp([7],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, api, AuthService, alertCtrl, service, events, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.AuthService = AuthService;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.events = events;
        this.fb = fb;
        this.data = {};
        this.isValidEmail = true;
        this.submitted = false;
        //events.publish('hideFooter', { isHidden: true});
        this.loginForm = fb.group({
            'email_address': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.checkEmail = function (values) {
        if (values != '') {
            this.isValidEmail = this.validateEmail(values);
        }
    };
    LoginPage.prototype.validateEmail = function (email_address) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email_address);
    };
    LoginPage.prototype.login = function (data) {
        var _this = this;
        this.api.post('loginuser', data).subscribe(function (response) {
            console.log(response);
            //  console.log(response.user_details.User.id);
            // console.log(response.user_details.UserImage[0].originalpath);
            if (response.Ack == 1) {
                _this.afloginsuccess(response);
                console.log("Successfully Login");
            }
            else {
                _this.service.popup('Alert', 'Wrong EmailId & Password');
            }
        }, function (err) {
            _this.service.popup('Alert', 'Login Failed');
        });
    };
    LoginPage.prototype.afloginsuccess = function (response) {
        console.log(response);
        localStorage.setItem("authID", response.user_details.User.id);
        localStorage.setItem("authTYPE", response.user_details.User.email_address);
        // localStorage.setItem("user_image",'');
        this.navCtrl.setRoot('HomePage');
        this.AuthService.initializeUserData({ id: response.user_details.User.id, first_name: response.user_details.User.first_name, last_name: response.user_details.User.last_name, user_image: response.user_image });
        this.service.popup('Success', 'Successfully Login');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.events.publish('hideFooter', { isHidden: true });
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push("SignupPage");
    };
    LoginPage.prototype.gotoHome = function () {
        //alert(11);
        this.navCtrl.push('HomePage');
    };
    LoginPage.prototype.goForgotPassword = function () {
        this.navCtrl.push('ForgotPasswordPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/gypsy/src/pages/login/login.html"*/'<!-- <ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header> -->\n\n<ion-content padding="">\n	<div class="logo">\n		<img src="assets/img/appicon.png" alt="Ionic logo">\n	</div>\n\n	<form [formGroup]="loginForm" novalidate>\n		<ion-list>\n		\n			<ion-item>\n				<ion-input type="email" formControlName="email_address" value="" placeholder="Email address" (ngModelChange)="checkEmail($event)" required></ion-input>\n			</ion-item>\n			<p *ngIf="!loginForm.controls[\'email_address\'].valid && loginForm.controls[\'email_address\'].touched" ion-text color="danger">Email is required </p>			\n			<p *ngIf="!isValidEmail" ion-text color="danger">Please enter valid email id. </p>			\n			\n			<ion-item>\n				<ion-input type="password" formControlName="password" placeholder="Password" required></ion-input>\n			</ion-item>\n			<p *ngIf="!loginForm.controls[\'password\'].valid && loginForm.controls[\'password\'].touched" ion-text color="danger">Password is required </p>\n			<ion-row responsive-sm>\n				<ion-col class="pt-0">\n					<ion-item>\n						<ion-label>Remember me</ion-label>\n						<ion-checkbox color="dark" checked="true"></ion-checkbox>\n					</ion-item>\n				</ion-col>\n				<ion-col class="pt-0">\n					<p text-right (click)="goForgotPassword();">Forgot Password ?</p>\n				</ion-col>\n			</ion-row>\n			<button ion-button color="danger" [disabled]="!loginForm.valid" block (click)="login(loginForm.value)">Login</button>\n			\n		</ion-list>\n\n		<ion-row class="or-area" responsive-sm>\n			<ion-col col-3 class="pr-0 pb-0" style="display: flex; align-items: center; justify-content: center;">\n				<div class="line"></div>\n			</ion-col>\n			<ion-col col-6 class="pl-0 pr-0 pb-0"> <p text-center class="or"> or connect with </p> </ion-col>\n			<ion-col col-3 class="pl-0 pb-0" style="display: flex; align-items: center; justify-content: center;">\n				<div class="line"></div>\n			</ion-col>\n		</ion-row>\n\n		<ion-row responsive-sm justify-content-center>\n			<ion-col col-3 class="pr-0" text-right>\n				<img class="social-icon" src="assets/img/fb-icon.png" alt="" >\n			</ion-col>\n			<ion-col col-3 text-center>\n				<img class="social-icon" src="assets/img/twtr-icon.png" alt="">\n			</ion-col>\n			<ion-col col-3 class="pl-0" text-left>\n				<img class="social-icon" src="assets/img/g+.png" alt="">\n			</ion-col>\n		</ion-row>\n\n		<div>\n			<p class="acess mb-0"  text-center>Or Acess as a <span class="guest" (click)="gotoHome()">GUEST</span> </p>\n			<p class="acess" text-center style="margin-top:0.5rem !important;" >Don’t have any account? <span class="guest" (click)="onSignup()">Sign Up</span> </p>\n		</div>\n\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/gypsy/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=7.js.map