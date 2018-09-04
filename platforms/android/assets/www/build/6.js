webpackJsonp([6],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(699);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, api, AuthService, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.AuthService = AuthService;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.data = {};
        //login: UserOptions = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.login = function (data) {
        var _this = this;
        this.api.post('loginuser', data).subscribe(function (response) {
            console.log(response);
            //  console.log(response.user_details.User.id);
            // console.log(response.user_details.UserImage[0].originalpath);
            if (response.Ack == 1) {
                _this.afloginsuccess(response);
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
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push("SignupPage");
    };
    LoginPage.prototype.gotoHome = function () {
        //alert(11);
        this.navCtrl.push('HomePage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/nits-avik/Desktop/ionic3/gypsy-latest/src/pages/login/login.html"*/'<!-- <ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header> -->\n\n<ion-content padding="">\n	<div class="logo">\n		<img src="assets/img/appicon.png" alt="Ionic logo">\n	</div>\n\n	<form #loginForm="ngForm" novalidate >\n		<ion-list>\n		\n			<ion-item>\n				<ion-input type="email" [(ngModel)]="data.email_address" name="email_address" value="" placeholder="User Name"></ion-input>\n			</ion-item>\n		\n			<ion-item>\n				<ion-input type="password" [(ngModel)]="data.password" name="password" placeholder="Password"></ion-input>\n			</ion-item>\n			\n			<ion-row responsive-sm>\n				<ion-col class="pt-0">\n					<ion-item>\n						<ion-label>Remember me</ion-label>\n						<ion-checkbox color="dark" checked="true"></ion-checkbox>\n					</ion-item>\n				</ion-col>\n				<ion-col class="pt-0">\n					<p text-right>Forgot Password ?</p>\n				</ion-col>\n			</ion-row>\n			<button ion-button color="danger" [disabled]="!loginForm.valid " block (click)="login(data)">Login</button>\n			<!-- <button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button> -->\n		</ion-list>\n\n		<ion-row class="or-area" responsive-sm>\n			<ion-col col-3 class="pr-0 pb-0" style="display: flex; align-items: center; justify-content: center;">\n				<div class="line"></div>\n			</ion-col>\n			<ion-col col-6 class="pl-0 pr-0 pb-0"> <p text-center class="or"> or connect with </p> </ion-col>\n			<ion-col col-3 class="pl-0 pb-0" style="display: flex; align-items: center; justify-content: center;">\n				<div class="line"></div>\n			</ion-col>\n		</ion-row>\n\n		<ion-row responsive-sm justify-content-center>\n			<ion-col col-3 class="pr-0" text-right>\n				<img class="social-icon" src="assets/img/fb-icon.png" alt="" >\n			</ion-col>\n			<ion-col col-3 text-center>\n				<img class="social-icon" src="assets/img/twtr-icon.png" alt="">\n			</ion-col>\n			<ion-col col-3 class="pl-0" text-left>\n				<img class="social-icon" src="assets/img/g+.png" alt="">\n			</ion-col>\n		</ion-row>\n\n		<div>\n			<p class="acess mb-0"  text-center>Or Acess as a <span class="guest" (click)="gotoHome()">GUEST</span> </p>\n			<p class="acess" text-center style="margin-top:0.5rem !important;" >Don’t have any account? <span class="guest" (click)="onSignup()">Sign Up</span> </p>\n		</div>\n\n	</form>\n\n	<!-- <form #loginForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Username</ion-label>\n				<ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Username is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button (click)="onSignup()" color="light" block>Signup</button>\n			</ion-col>\n		</ion-row>\n	</form> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/nits-avik/Desktop/ionic3/gypsy-latest/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=6.js.map