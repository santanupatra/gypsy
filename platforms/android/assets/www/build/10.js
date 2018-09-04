webpackJsonp([10],{

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
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
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, api, AuthService, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.AuthService = AuthService;
        this.alertCtrl = alertCtrl;
        this.service = service;
        //data:any;
        this.data = {};
        this.user_id = AuthService.getuserid();
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
        this.myProfile();
    };
    EditProfilePage.prototype.myProfile = function () {
        var _this = this;
        this.api.post('viewuser', { id: this.user_id }).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                _this.userList = response.user_details;
                _this.data = { email: response.user_details.User.email_address, first_name: response.user_details.User.first_name, last_name: response.user_details.User.last_name, phoneno: response.user_details.User.phoneno, address: response.user_details.User.address };
                console.log(_this.data);
            }
            else {
            }
        }, function (err) {
            _this.service.popup('Alert', 'Already Registered');
        });
    };
    EditProfilePage.prototype.editProfile = function (data) {
        var _this = this;
        data.id = this.user_id;
        this.api.post('editprofile', data).subscribe(function (response) {
            console.log(response);
            if (response.Ack === 1) {
                _this.afloginsuccess(response);
                _this.AuthService.initializeUserData({ id: _this.user_id, first_name: response.user_details.User.first_name, last_name: response.user_details.User.last_name });
                //this.myProfile(); 
            }
            else {
                _this.service.popup('Alert', "Profile not Update");
            }
        }, function (err) {
            _this.service.popup('Alert', 'Something wrong');
        });
    };
    EditProfilePage.prototype.afloginsuccess = function (response) {
        // this.navCtrl.setRoot('Success');
        this.service.popup('Success', 'Profile update successfully');
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/home/nits-avik/Desktop/ionic3/gypsy-latest/src/pages/edit-profile/edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar no-border-bottom>\n      <button ion-button menuToggle>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n      <ion-title> Edit Profile </ion-title>\n  \n      <ion-buttons end>\n        <!-- <button ion-button icon-only>\n           Save\n        </button> -->\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content>\n    <ion-list>\n    <ion-item class="brdr-0">\n      <ion-avatar>\n        <img src="assets/img/pro-pic.jpg">\n        <div class="edit-area"><ion-icon name="camera"></ion-icon></div>\n      </ion-avatar>\n    </ion-item>\n  \n    <div class="form-field">\n      <ion-label class="form-label" >First Name:</ion-label>\n      <ion-item>\n        <ion-input type="text" name="first_name" [(ngModel)]="data.first_name" value="" placeholder="Emma Megan"></ion-input>\n      </ion-item>\n    </div>\n\n    <div class="form-field">\n        <ion-label class="form-label" >Last Name:</ion-label>\n        <ion-item> \n          <ion-input type="text" name="last_name" [(ngModel)]="data.last_name" value="" placeholder="Emma Megan"></ion-input>\n        </ion-item>\n      </div>\n    \n  \n    <div class="form-field">\n      <ion-label class="form-label">Address:</ion-label>\n      <ion-item>\n        <ion-input type="text" name="address" [(ngModel)]="data.address" value="" placeholder="California C.A. USA"></ion-input>\n      </ion-item>\n    </div>\n  \n    <div class="form-field">\n      <ion-label class="form-label">Email:</ion-label>\n      <ion-item>\n        <ion-input readonly type="text" name="email" [(ngModel)]="data.email"  value="" placeholder="emmamegan@gmail.com"></ion-input>\n      </ion-item>\n    </div>\n  \n    <div class="form-field">\n      <ion-label class="form-label">Phone:</ion-label>\n      <ion-item>\n        <ion-input type="text" name="phoneno" [(ngModel)]="data.phoneno" value="" placeholder="589684423"></ion-input>\n      </ion-item>\n    </div>\n  \n    <div padding>\n      <button ion-button block color="danger" (click)="editProfile(data)">Submit</button>\n    </div>\n       \n  \n      \n  \n    \n  </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"/home/nits-avik/Desktop/ionic3/gypsy-latest/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=10.js.map