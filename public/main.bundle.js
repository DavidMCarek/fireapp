webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  account works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routes; });
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.signIn = 'signin';
    Routes.signUp = 'signup';
    Routes.channelParameter = '/:channel';
    Routes.chat = 'chat';
    Routes.default = '';
    Routes.any = '**';
    return Routes;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app-routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* Routes */].signIn, component: __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__["a" /* SignInComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* Routes */].signUp, component: __WEBPACK_IMPORTED_MODULE_6__auth_signup_signup_component__["a" /* SignUpComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* Routes */].chat + __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* Routes */].channelParameter, component: __WEBPACK_IMPORTED_MODULE_7__chat_chat_component__["a" /* ChatComponent */], data: {
            createChannelExpanded: true, publicChannelsExpanded: true
        } },
    { path: __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* Routes */].chat, component: __WEBPACK_IMPORTED_MODULE_7__chat_chat_component__["a" /* ChatComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* Routes */].default, component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* Routes */].any, redirectTo: __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* Routes */].default, pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"content-container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_divider__ = __webpack_require__("../../../material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__channels_channels_component__ = __webpack_require__("../../../../../src/app/channels/channels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_search_pipe__ = __webpack_require__("../../../../../src/app/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__channels_channel_state_service__ = __webpack_require__("../../../../../src/app/channels/channel-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_20__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_24__auth_signin_signin_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_25__auth_signup_signup_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_29__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_28__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_27__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_26__channels_channels_component__["a" /* ChannelsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pipes_search_pipe__["a" /* SearchPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_19__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_21__app_routing_module__["a" /* AppRoutingModule */]
            ],
            exports: [
                [__WEBPACK_IMPORTED_MODULE_10__angular_material_input__["a" /* MatInputModule */]]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_31__channels_channel_state_service__["a" /* ChannelStateService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-response.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthResponse; });
var AuthResponse = /** @class */ (function () {
    function AuthResponse(value, isError) {
        this.value = value;
        this.isError = isError;
    }
    return AuthResponse;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\r\n    width: 350px;\r\n    margin: 200px auto;\r\n}\r\n\r\nmat-card-subtitle.color-red {\r\n    color: #F44336;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.btn-group {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.btn-group > button {\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_response__ = __webpack_require__("../../../../../src/app/auth/auth-response.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth, db) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        this.db = db;
        this.user = firebaseAuth.auth.currentUser;
        firebaseAuth.authState.subscribe(function (user) { return _this.user = user; });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            return this.authenticated ? this.user : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserObservable", {
        get: function () {
            return this.firebaseAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.githubLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GithubAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.socialSignIn = function (provider) {
        var socialSignInPromise = this.firebaseAuth.auth.signInWithPopup(provider);
        return this.handleAuthResult(socialSignInPromise);
    };
    AuthService.prototype.setDisplayName = function (username) {
        var updatePromise = this.user.updateProfile({ displayName: username, photoURL: this.user.photoURL });
        return this.handleAuthResult(updatePromise);
    };
    AuthService.prototype.logout = function () {
        var logoutPromise = this.firebaseAuth.auth.signOut();
        return this.handleAuthResult(logoutPromise);
    };
    AuthService.prototype.signUp = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var signupPromise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authenticated) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.logout()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        signupPromise = this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
                        return [2 /*return*/, this.handleAuthResult(signupPromise)];
                }
            });
        });
    };
    AuthService.prototype.signIn = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var loginPromise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authenticated) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.logout()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        loginPromise = this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
                        return [2 /*return*/, this.handleAuthResult(loginPromise)];
                }
            });
        });
    };
    AuthService.prototype.handleAuthResult = function (authPromise) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, authPromise
                            .then(function (value) {
                            return new __WEBPACK_IMPORTED_MODULE_3__auth_response__["a" /* AuthResponse */](value, false);
                        })
                            .catch(function (error) {
                            return new __WEBPACK_IMPORTED_MODULE_3__auth_response__["a" /* AuthResponse */](error, true);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#ExternalSignIn {\r\n    text-align: center;\r\n}\r\n\r\n.divider-container {\r\n    text-align: center;\r\n    position: relative;\r\n    padding: 20px;\r\n}\r\n\r\n.divider-container > span {\r\n    display: inline-block;\r\n    color: rgba(0, 0, 0, 0.32);\r\n    background-color: #fff;\r\n    z-index: 10;\r\n    position: absolute;\r\n    width: 40px;\r\n    top: 10px;\r\n    left: 155px;\r\n}\r\n\r\n.divider-container > mat-divider {\r\n    top: 20px;\r\n}\r\n\r\n.divider-container + button {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>\n    Sign In\n  </mat-card-title>\n  <mat-card-subtitle class=\"color-red\">{{ errorMessage }}</mat-card-subtitle>\n  <form>\n    <mat-form-field>\n      <input autofocus tabindex=\"1\" matInput type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\n    </mat-form-field>\n    <mat-form-field>\n      <input tabindex=\"1\" matInput type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n    </mat-form-field>\n    <div class=\"btn-group\">\n      <span class=\"fill\"></span>\n      <button tabindex=\"1\" (click)=\"signIn()\" mat-raised-button color=\"primary\" [disabled]=\"!email || !password\">\n        Sign In\n      </button>\n    </div>\n  </form>\n  <div class=\"divider-container\">\n    <span>or</span>\n    <mat-divider></mat-divider>\n  </div>\n  <div id=\"ExternalSignIn\">\n    <button tabindex=\"1\" (click)=\"signInWithGoogle()\" mat-raised-button color=\"primary\">Sign in with Google</button>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("../../../../../src/app/app-routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.signIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.signIn(this.email, this.password)];
                    case 1:
                        authResponse = _a.sent();
                        this.handleSignInResponse(authResponse);
                        return [2 /*return*/];
                }
            });
        });
    };
    SignInComponent.prototype.signInWithGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.googleLogin()];
                    case 1:
                        authResponse = _a.sent();
                        this.handleSignInResponse(authResponse);
                        return [2 /*return*/];
                }
            });
        });
    };
    SignInComponent.prototype.handleSignInResponse = function (authResponse) {
        if (authResponse.isError) {
            this.errorMessage = authResponse.value.message;
        }
        else {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* Routes */].chat]);
        }
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signin/signin.component.css"), __webpack_require__("../../../../../src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>\n    Sign Up\n  </mat-card-title>\n  <mat-card-subtitle class=\"color-red\">{{ errorMessage }}</mat-card-subtitle>\n  <form>\n    <mat-form-field>\n      <input required autofocus tabindex=\"1\" matInput type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\">\n    </mat-form-field>\n    <mat-form-field>\n      <input required autofocus tabindex=\"1\" matInput type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\n    </mat-form-field>\n    <mat-form-field>\n      <input required tabindex=\"1\" matInput type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n    </mat-form-field>\n    <mat-form-field>\n      <input required tabindex=\"1\" matInput type=\"password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" placeholder=\"Confirm Password\">\n    </mat-form-field>\n    <div class=\"btn-group\">\n      <span class=\"fill\"></span>\n      <button tabindex=\"1\" (click)=\"signUp(username, email, password, confirmPassword)\" mat-raised-button color=\"primary\"\n      [disabled]=\"!username || !email || !password || !confirmPassword\">\n        Sign Up\n      </button>\n    </div>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("../../../../../src/app/app-routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.signUp = function (username, email, password, confirmPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var authResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (password !== confirmPassword) {
                            this.errorMessage = 'Passwords do not match';
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.authService.signUp(email, password)];
                    case 1:
                        authResponse = _a.sent();
                        if (authResponse.isError) {
                            this.errorMessage = authResponse.value.message;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.authService.setDisplayName(username)];
                    case 2:
                        authResponse = _a.sent();
                        if (authResponse.isError) {
                            this.errorMessage = authResponse.value.message;
                            return [2 /*return*/];
                        }
                        this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* Routes */].chat]);
                        return [2 /*return*/];
                }
            });
        });
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.css"), __webpack_require__("../../../../../src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/channels/channel-state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelStateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__channel_state__ = __webpack_require__("../../../../../src/app/channels/channel-state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChannelStateService = /** @class */ (function () {
    function ChannelStateService() {
        this.currentExpansionState = new __WEBPACK_IMPORTED_MODULE_1__channel_state__["a" /* ExpansionState */]();
    }
    ChannelStateService.prototype.setExpansionState = function (expansionState) {
        this.currentExpansionState = expansionState;
    };
    ChannelStateService.prototype.getExpansionState = function () {
        return this.currentExpansionState;
    };
    ChannelStateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ChannelStateService);
    return ChannelStateService;
}());



/***/ }),

/***/ "../../../../../src/app/channels/channel-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpansionState; });
var ExpansionState = /** @class */ (function () {
    function ExpansionState() {
        this.isCreateChannelExpanded = true;
        this.isPublicChannelsExpanded = true;
    }
    return ExpansionState;
}());



/***/ }),

/***/ "../../../../../src/app/channels/channels.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.channel-list {\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    max-height: 400px;\r\n}\r\n\r\ndiv.channel-list a {\r\n    padding: 0px 5px;\r\n    text-align: left;\r\n    width: 100%;\r\n}\r\n\r\n.create-channel mat-form-field {\r\n    padding: 5px 0px;\r\n}\r\n\r\n.create-channel button {\r\n    display: block;\r\n}\r\n\r\n.mat-button {\r\n    line-height: 25px;\r\n}\r\n\r\n.channel-filter > mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-expansion-panel {\r\n    margin-bottom: 20px;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/channels/channels.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel [expanded]=\"expansionState.isCreateChannelExpanded\"\n  (opened)=\"expansionState.isCreateChannelExpanded = true\" (closed)=\"expansionState.isCreateChannelExpanded = false\">\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      Create Channel\n    </mat-panel-title>\n  </mat-expansion-panel-header>\n\n  <form class=\"create-channel\">\n    <div>\n      <mat-checkbox [(ngModel)]=\"isNewChannelPublic\" name=\"isPublicChannel\" color=\"accent\"></mat-checkbox>\n      <span>Public</span>\n    </div>\n    <mat-form-field>\n      <input matInput placeholder=\"Channel Name\" [formControl]=\"newChannelName\"/>\n      <mat-error *ngIf=\"newChannelName.invalid\">{{getErrorMessage()}}</mat-error>\n    </mat-form-field>\n    <button mat-raised-button [disabled]=\"newChannelName.invalid\" color=\"accent\" (click)=\"createChannel(isNewChannelPublic, newChannelName)\">\n      Create\n    </button>\n  </form>\n</mat-expansion-panel>\n\n<mat-expansion-panel [expanded]=\"expansionState.isPublicChannelsExpanded\"\n  (opened)=\"expansionState.isPublicChannelsExpanded = true\" (closed)=\"expansionState.isCreateChannelExpanded = false\">\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      Public Channels\n    </mat-panel-title>\n  </mat-expansion-panel-header>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Filter\" [(ngModel)]=\"filterInput\">\n  </mat-form-field>\n  <div class=\"channel-list\">\n    <div *ngFor=\"let channel of publicChannels | search: filterInput\">\n      <a mat-button color=\"accent\" (click)=\"routeToChannel(channel)\">{{ channel }}</a>\n    </div>\n  </div>\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/channels/channels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__channels_validators__ = __webpack_require__("../../../../../src/app/channels/channels.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app-routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__channel_state_service__ = __webpack_require__("../../../../../src/app/channels/channel-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChannelsComponent = /** @class */ (function () {
    function ChannelsComponent(db, router, channelStateService) {
        this.db = db;
        this.router = router;
        this.channelStateService = channelStateService;
        this.isNewChannelPublic = true;
        this.filterInput = '';
        this.publicChannelsRef = this.db.object('public-channels');
        this.publicChannelsObservable = this.publicChannelsRef.valueChanges();
        this.updateChannelNameValidator();
        this.expansionState = channelStateService.getExpansionState();
    }
    ChannelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.publicChannelsObservable.subscribe(function (channels) {
            if (channels === null) {
                return;
            }
            _this.publicChannels = Object.keys(channels);
            _this.publicChannels.sort(function (a, b) { return a.localeCompare(b); });
            _this.updateChannelNameValidator();
        });
    };
    ChannelsComponent.prototype.updateChannelNameValidator = function () {
        this.newChannelName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(20),
            __WEBPACK_IMPORTED_MODULE_3__channels_validators__["a" /* ChannelNameValidator */].channelAlreadyExists(this.publicChannels)
        ]);
    };
    ChannelsComponent.prototype.createChannel = function (isPublicChannel, channelFormControl) {
        if (isPublicChannel) {
            var channelRef = this.db.object('public-channels/' + channelFormControl.value);
            channelRef.set(true);
        }
    };
    ChannelsComponent.prototype.routeToChannel = function (channelName) {
        this.channelStateService.setExpansionState(this.expansionState);
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* Routes */].chat, channelName]);
    };
    ChannelsComponent.prototype.getErrorMessage = function () {
        if (this.newChannelName.hasError('maxlength')) {
            return 'Channel name can\'t exceed 20 characters';
        }
        if (this.newChannelName.hasError('channelAlreadyExists')) {
            return 'A channel with this name already exists';
        }
        return '';
    };
    ChannelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-channels',
            template: __webpack_require__("../../../../../src/app/channels/channels.component.html"),
            styles: [__webpack_require__("../../../../../src/app/channels/channels.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__channel_state_service__["a" /* ChannelStateService */]])
    ], ChannelsComponent);
    return ChannelsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/channels/channels.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelNameValidator; });
var ChannelNameValidator = /** @class */ (function () {
    function ChannelNameValidator() {
    }
    ChannelNameValidator.channelAlreadyExists = function (channelNames) {
        return function (c) {
            if (typeof channelNames === 'undefined' || channelNames == null) {
                return null;
            }
            return !channelNames.includes(c.value) ? null : {
                channelAlreadyExists: { valid: false }
            };
        };
    };
    return ChannelNameValidator;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-checkbox-inner-container {\r\n    height: 16px;\r\n    width: 16px;\r\n}\r\n\r\n.chat-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row;\r\n            flex-flow: row;\r\n    height: 100%;\r\n}\r\n\r\n.channels-container {\r\n    overflow: hidden;\r\n    padding: 20px;\r\n    background: rgba(0, 0, 0, 0.03);\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n}\r\n\r\n.messaging-container {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n}\r\n\r\n.messages-container {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    overflow: auto;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.messages-container mat-card {\r\n    margin: 10px 10px 0px 10px;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    max-width: 80%;\r\n}\r\n\r\n.messages-container mat-card mat-card-subtitle {\r\n    font-size: 0.8em;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.messages-container mat-card mat-card-content {\r\n    white-space: pre-wrap;\r\n    word-break: break-word;\r\n}\r\n\r\n.message-input-container {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 1 auto;\r\n            flex: 0 1 auto;\r\n    padding-top: 10px;\r\n    background-color: #fff;\r\n}\r\n\r\n.message-input-container > form {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.message-input-container > form > mat-form-field {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    margin: 0 20px;\r\n}\r\n\r\n.message-input-container > form > mat-form-field textarea {\r\n    resize: none;\r\n    height: 150px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-container\">\r\n  <div class=\"channels-container\">\r\n    <app-channels></app-channels>\r\n  </div>\r\n  <div class=messaging-container>\r\n    <div class=\"messages-container\">\r\n      <div *ngFor=\"let message of messages\">\r\n        <mat-card>\r\n          <mat-card-subtitle>{{message.createdBy}}</mat-card-subtitle>\r\n          <mat-card-content>{{message.text}}</mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <div class=\"message-input-container\" *ngIf=\"channelSelected\">\r\n      <form>\r\n        <mat-form-field>\r\n          <textarea (keyup.enter)=\"postMessage(messageText.value)\" type=\"text\" matInput placeholder=\"Write a message...\" [formControl]=\"messageText\"></textarea>\r\n        </mat-form-field>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message__ = __webpack_require__("../../../../../src/app/chat/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(route, db, authService) {
        var _this = this;
        this.route = route;
        this.db = db;
        this.authService = authService;
        this.channelSelected = false;
        this.messageText = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []);
        this.route.params.subscribe(function (params) {
            if (typeof params.channel === 'undefined' || params.channel === null) {
                _this.channelSelected = false;
                return;
            }
            _this.channelSelected = true;
            _this.messagesRef = db.list('messages/' + params.channel);
            _this.messagesObservable = _this.messagesRef.valueChanges();
            _this.messages = new Array();
            _this.messagesObservable.subscribe(function (messages) { return _this.messages = messages; });
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.postMessage = function (messageText) {
        messageText = messageText.trim();
        if (messageText.length < 1) {
            return;
        }
        this.messagesRef.push(new __WEBPACK_IMPORTED_MODULE_4__message__["a" /* Message */](messageText, this.authService.user.displayName));
        this.messageText.setValue('');
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(text, createdBy) {
        this.text = text;
        this.createdBy = createdBy;
    }
    return Message;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 55px;\r\n    font-weight: 500;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <a mat-button routerLink=\"/\" id=\"FireApp\">\n    <mat-icon>whatshot</mat-icon>\n    <span>Fire App</span>\n  </a>\n  <a mat-button routerLink=\"/chat\">\n    Chat\n  </a>\n  <span class=\"fill\"></span>\n  <span *ngIf=\"authService.user !== null\">{{ (authService.user).displayName }}</span>\n  <mat-menu #appMenu=\"matMenu\">\n    <button mat-menu-item (click)=\"signOut()\" *ngIf=\"(authService.authenticated)\">\n      <mat-icon>person</mat-icon>\n      <span>Sign Out</span>\n    </button>\n    <button mat-menu-item (click)=\"navigateToSignIn()\" *ngIf=\"!(authService.authenticated)\">\n      <mat-icon>person</mat-icon>\n      <span>Sign In</span>\n    </button>\n    <button mat-menu-item (click)=\"navigateToSignUp()\">\n      <mat-icon>person_add</mat-icon>\n      <span>Sign Up</span>\n    </button>\n  </mat-menu>\n  <button mat-icon-button [matMenuTriggerFor]=\"appMenu\" >\n    <mat-icon>more_vert</mat-icon>\n  </button>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("../../../../../src/app/app-routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.logout()];
                    case 1:
                        _a.sent();
                        this.navigateToSignIn();
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.navigateToSignIn = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* Routes */].signIn]);
    };
    HeaderComponent.prototype.navigateToSignUp = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* Routes */].signUp]);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, query) {
        if (!this.isValid(items) || !this.isValid(query)) {
            return items;
        }
        return items.filter(function (i) { return i.toUpperCase().includes(query.toUpperCase()); });
    };
    SearchPipe.prototype.isValid = function (value) {
        return typeof value !== 'undefined' && value !== null && value.length > 0;
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBru0h0_vsZT8C-VdqZrzoCHP1A3g17p_M',
        authDomain: 'fireapp-4693f.firebaseapp.com',
        databaseURL: 'https://fireapp-4693f.firebaseio.com',
        projectId: 'fireapp-4693f',
        storageBucket: 'fireapp-4693f.appspot.com',
        messagingSenderId: '1077640845523'
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map