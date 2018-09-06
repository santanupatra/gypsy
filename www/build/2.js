webpackJsonp([2],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(709);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(61);
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






var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, api, AuthService, alertCtrl, service, fb, builder, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.AuthService = AuthService;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.fb = fb;
        this.builder = builder;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.formData = {};
        // signup: UserOptions = { username: '', password: '' };
        this.submitted = false;
        this.isValidEmail = true;
        this.passwordmatch = true;
        this.checkEmailExist = true;
        events.publish('hideFooter', { isHidden: true });
        this.rForm = fb.group({
            'first_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'last_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'email_address': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'conf_password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.ionViewWillLeave = function () {
        this.events.publish('hideFooter', { isHidden: false });
    };
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            // this.userData.signup(this.signup.username);
            // this.navCtrl.push(TabsPage);
        }
    };
    SignupPage.prototype.checkEmail = function (values) {
        if (values != '') {
            this.isValidEmail = this.validateEmail(values);
        }
    };
    SignupPage.prototype.checkpassword = function (conpass, frmval) {
        console.log(frmval.password);
        console.log(conpass);
        if (frmval.password == conpass) {
            this.passwordmatch = true;
        }
        else {
            this.passwordmatch = false;
        }
    };
    SignupPage.prototype.validateEmail = function (email_address) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email_address);
    };
    SignupPage.prototype.signup = function (formData) {
        var _this = this;
        if (!this.rForm.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Signup Failed!',
                subTitle: "Please fill all the details.",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var loading = this.loadingCtrl.create({
                spinner: 'show',
                content: 'Loading Please Wait...',
                duration: 3000
            });
            loading.present();
            console.log(formData);
            this.api.post('signupuser', formData).subscribe(function (response) {
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
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        this.events.publish('hideFooter', { isHidden: true });
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
            selector: 'page-user',template:/*ion-inline-start:"/home/nits-d044/Desktop/ionic/gypsy/src/pages/signup/signup.html"*/'<!-- <ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Signup</ion-title>\n	</ion-navbar>\n</ion-header> -->\n\n<ion-content padding class="login-page">\n\n	<div class="logo">\n		<img src="assets/img/appicon.png" alt="Ionic Logo">\n	</div>\n\n	<form [formGroup]="rForm" novalidate>\n		<ion-list>\n	\n			<ion-item>\n				<ion-input type="text" formControlName="first_name" name="first_name"  value="" placeholder="First Name" required></ion-input>\n			</ion-item>\n			<p *ngIf="!rForm.controls[\'first_name\'].valid && rForm.controls[\'first_name\'].touched" ion-text color="danger" >First Name is required </p>\n			<ion-item>\n				<ion-input type="text" formControlName="last_name"  name="last_name" value="" placeholder="Last Name" required></ion-input>\n			</ion-item>\n			<p *ngIf="!rForm.controls[\'last_name\'].valid && rForm.controls[\'last_name\'].touched" ion-text color="danger">Last Name is required </p>\n			<ion-item>\n				<ion-input type="email" formControlName="email_address"  name="email_address" value="" placeholder="Email" required (ngModelChange)="checkEmail($event)"></ion-input>\n			</ion-item>\n			<p *ngIf="!rForm.controls[\'email_address\'].valid && rForm.controls[\'email_address\'].touched" ion-text color="danger">Email is required </p>			\n			<p *ngIf="!isValidEmail" ion-text color="danger">Please enter valid email id. </p>\n			<p *ngIf="!checkEmailExist" ion-text color="danger">This email already exist. </p>\n			<ion-item>\n				<ion-input type="password" formControlName="password" name="password"  placeholder="Password" required></ion-input>\n			</ion-item>\n			<p *ngIf="!rForm.controls[\'password\'].valid && rForm.controls[\'password\'].touched" ion-text color="danger">Password is required </p>\n			<ion-item>\n				<ion-input type="password" formControlName="conf_password" name="conf_password"  placeholder="Confirm password" required (ngModelChange)="checkpassword($event,rForm.value)"></ion-input>\n			</ion-item>\n			<p *ngIf="!rForm.controls[\'conf_password\'].valid && rForm.controls[\'conf_password\'].touched" ion-text color="danger">Confirm Password is required </p>\n			<p *ngIf="!passwordmatch" ion-text color="danger">Password and Confirm password not match </p>\n			\n			<button ion-button color="danger" [disabled]="!rForm.valid || !passwordmatch || !isValidEmail || !checkEmailExist" (click)="signup(rForm.value)" block>Sign up</button>\n			<!-- <button ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button> -->\n			<p class="gray-text">Clicking Sign up button you are agree to our terms & conditions</p>\n		</ion-list>\n	\n		<!-- <ion-row class="or-area" responsive-sm>\n			<ion-col col-3 class="pr-0 pb-0" style="display: flex; align-items: center; justify-content: center;">\n				<div class="line"></div>\n			</ion-col>\n			<ion-col col-6 class="pl-0 pr-0 pb-0">\n				<p text-center class="or"> or connect with </p>\n			</ion-col>\n			<ion-col col-3 class="pl-0 pb-0" style="display: flex; align-items: center; justify-content: center;">\n				<div class="line"></div>\n			</ion-col>\n		</ion-row> -->\n	\n		<!-- <ion-row responsive-sm justify-content-center>\n			<ion-col col-3 class="pr-0" text-right>\n				<img class="social-icon" src="assets/img/fb-icon.png" alt="">\n			</ion-col>\n			<ion-col col-3 text-center>\n				<img class="social-icon" src="assets/img/twtr-icon.png" alt="">\n			</ion-col>\n			<ion-col col-3 class="pl-0" text-left>\n				<img class="social-icon" src="assets/img/g+.png" alt="">\n			</ion-col>\n		</ion-row> -->\n	\n		<div style="padding-top:4.5rem !important;">\n			<p class="acess" text-center>Already have account?\n				<span class="guest" (click)="onSignin()">Login</span>\n			</p>\n		</div>\n	\n	</form>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/nits-d044/Desktop/ionic/gypsy/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=2.js.map