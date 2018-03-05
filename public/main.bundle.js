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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_story_service__ = __webpack_require__("../../../../../src/app/services/story.service.ts");
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
    function AppComponent(mainService, storyService) {
        this.mainService = mainService;
        this.storyService = storyService;
        this.title = "app";
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.user)
            this.mainService.setUser(JSON.parse(localStorage.user)),
                this.storyService.fetchAllStories(this.mainService.user["username"]);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_2__services_story_service__["a" /* StoryService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_feed_feed_component__ = __webpack_require__("../../../../../src/app/components/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_story_service__ = __webpack_require__("../../../../../src/app/services/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_tags_tags_component__ = __webpack_require__("../../../../../src/app/components/tags/tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_story_story_component__ = __webpack_require__("../../../../../src/app/components/story/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { PopoverModule } from 'ng2-popover';


















var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_22__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    {
        path: "profile/:nickname",
        component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]]
    },
    { path: "post", component: __WEBPACK_IMPORTED_MODULE_12__components_post_post_component__["a" /* PostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_feed_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_tags_tags_component__["a" /* TagsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_story_story_component__["a" /* StoryComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__["FlashMessagesModule"].forRoot()
                // PopoverModule
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__services_story_service__["a" /* StoryService */],
                __WEBPACK_IMPORTED_MODULE_16__services_main_service__["a" /* MainService */],
                __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_story_service__ = __webpack_require__("../../../../../src/app/services/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(storyService, mainService) {
        this.storyService = storyService;
        this.mainService = mainService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = this.mainService.getUser();
        this.loadData();
    };
    DashboardComponent.prototype.loadData = function () {
        var _this = this;
        var loggedUser = this.user ? this.user["username"] : "";
        if (!this.storyService.allStories) {
            this.storyService.fetchAllStories(loggedUser).subscribe(function (data) {
                _this.stories = data.stories.filter(function (story) { return story.author == loggedUser; }),
                    _this.storyService.allStories = data.stories;
                _this.storyService.fetchAllUpdates(loggedUser).subscribe(function (data) {
                    _this.updates = data.updates.filter(function (update) { return update['author'] == loggedUser; }),
                        _this.storyService.allUpdates = data.updates;
                    console.log("FETCH");
                });
            });
        }
        else {
            this.stories = this.storyService.allStories.filter(function (story) { return story['author'] == loggedUser; }),
                this.updates = this.storyService.allUpdates.filter(function (update) { return update['author'] == loggedUser; });
            console.log(this.stories);
            console.log(this.updates);
        }
    };
    DashboardComponent.prototype.buildDashboard = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_story_service__["a" /* StoryService */],
            __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/feed/feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".story-entry {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid lightgrey;\n}\n\n.story-header {\n  margin-bottom: 10px;\n}\n\n.story-title {\n  display: inline;\n}\n\n.story-controls {\n  display: inline;\n  float: right;\n}\n\n.story-author {\n  display: inline;\n  font-size: 22px;\n  color: darkgrey;\n  margin-left: 10px;\n}\n\n.story-follow-container, .story-follow {\n  display: inline;\n}\n\n.story-navigation {\n  display: inline;\n  float: left;\n  color: lightgrey;\n  font-size: 18px;\n}\n\n.story-navigation span {\n  padding: 5px;\n  cursor: pointer;\n}\n\n.story-navigation span.active {\n  color: black;\n}\n\n.story-tags {\n  display: inline;\n  float: right;\n}\n\n.story-tags {\n  float: right;\n}\n\n.story-tags-entry {\n  display: inline;\n  padding: 5px;\n  font-size: 16px;\n  background: lightgrey;\n  margin-right: 10px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.bnt-post .glyphicon {\n  margin-right: 10px;\n}\n\n.bnt-post {\n  margin-bottom: 10px;\n}\n\n.filter-tags {\n  margin-top: 10px;\n}\n\n.filter-tags-entry {\n  display: initial;\n  padding: 5px;\n  font-size: 16px;\n  background: lightgrey;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.progress-bar-days-left {\n  position: absolute;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-9\" *ngIf=\"allStories\">\n  <div class=\"row story-entry\" *ngFor=\"let story of feedData\">\n    <div class=\"story-header\">\n      <h2 class=\"story-title\">{{story.title}}</h2>\n      <div class=\"story-author\">\n        by\n        <a [routerLink]=\"['/profile', story.author]\">{{story.author}}</a>\n        <div *ngIf=\"user\" class=\"story-follow-container\">\n          <div class=\"story-follow\" *ngIf=\"user.username != story.author\">\n            <button (click)=\"addFollow(story.author)\" *ngIf=\"!checkFollow(story.author)\" type=\"button\" class=\"btn btn-info btn-xs\">Follow {{story.author}}</button>\n            <button (click)=\"removeFollow(story.author)\" *ngIf=\"checkFollow(story.author)\" type=\"button\" class=\"btn btn-default btn-xs\">Unfollow {{story.author}}</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"story-controls\">\n        <div class=\"story-navigation\" *ngIf=\"story.storyId\">\n          <span data-toggle=\"tooltip\" title=\"See previous post\" *ngIf=\"story.activeBackNavigation\" class=\"glyphicon glyphicon-chevron-left active\"\n            aria-hidden=\"true\" (click)=\"triggerNavigation(story._id, story.storyId, 'back')\"></span>\n          <span data-toggle=\"tooltip\" title=\"See previous post\" *ngIf=\"!story.activeBackNavigation\" class=\"glyphicon glyphicon-chevron-left\"\n            aria-hidden=\"true\"></span>\n          <span data-toggle=\"tooltip\" title=\"See next post\" *ngIf=\"story.activeForwardNavigation\" class=\"glyphicon glyphicon-chevron-right active\"\n            aria-hidden=\"true\" (click)=\"triggerNavigation(story._id, story.storyId, 'forward')\"></span>\n          <span data-toggle=\"tooltip\" title=\"See next post\" *ngIf=\"!story.activeForwardNavigation\" class=\"glyphicon glyphicon-chevron-right\"\n            aria-hidden=\"true\"></span>\n        </div>\n      </div>\n      <p>\n        {{ story.content }}\n      </p>\n      <div class=\"progress\" *ngIf=\"story.progress\">\n        <div class=\"progress-bar progress-bar-{{story.progressColor}} progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"40\"\n          aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{ width: story.progress + '%' }\">\n          <!-- <span class=\"sr-only\">40% Complete (success)</span> -->\n        </div>\n        <span [ngStyle]=\"{ width: (100 - story.progress) + '%' }\" class=\"progress-bar-days-left\">{{story.daysLeft}} days left</span>\n      </div>\n      <div class=\"story-tags\" *ngIf=\"story.tags != ''\">\n        <div data-toggle=\"tooltip\" title=\"Click to filter using this tag\" class=\"story-tags-entry\" *ngFor=\"let tag of story.tags.split(',')\"\n          (click)=\"addFilterTag(tag)\">\n          {{tag}}\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!--/row-->\n</div>\n<!--/.col-xs-12.col-sm-9-->\n\n<!-- Sidebar -->\n<div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\">\n  <!-- Standard button -->\n  <button [routerLink]=\"['/post']\" type=\"button\" class=\"btn btn-default btn-lg btn-block bnt-post\">\n    <span class=\"glyphicon glyphicon-send\" aria-hidden=\"true\"></span>Post</button>\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">\n      <i class=\"glyphicon glyphicon-search\"></i>\n    </span>\n    <input id=\"email\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchKey\" (keyup)=\"onSearchChange()\" placeholder=\"Search..\">\n  </div>\n  <div class=\"filter-tags\">\n    <div class=\"filter-tags-entry\" *ngFor=\"let tag of filterTags\" (click)=\"removeFilterTag(tag)\">\n      {{tag}}\n    </div>\n  </div>\n\n</div>\n<!-- Sidebar -->"

/***/ }),

/***/ "../../../../../src/app/components/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_story_service__ = __webpack_require__("../../../../../src/app/services/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedComponent = /** @class */ (function () {
    function FeedComponent(flashMessage, storyService, mainService, router) {
        this.flashMessage = flashMessage;
        this.storyService = storyService;
        this.mainService = mainService;
        this.router = router;
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.setInitialValues();
        this.loadData();
    };
    FeedComponent.prototype.setInitialValues = function () {
        (this.filterTag = ""),
            (this.filterTags = []),
            (this.searchKey = ""),
            (this.feedData = []);
        this.user = this.mainService.getUser();
    };
    FeedComponent.prototype.loadData = function () {
        var _this = this;
        var loggedUser = this.user ? this.user["username"] : "";
        if (!this.storyService.allStories) {
            this.storyService.fetchAllStories(loggedUser).subscribe(function (data) {
                (_this.allStories = data.stories),
                    (_this.storyService.allStories = data.stories),
                    (_this.originalStories = _this.allStories);
                console.log(_this.allStories);
                _this.storyService.fetchAllUpdates(loggedUser).subscribe(function (data) {
                    (_this.allUpdates = data.updates),
                        (_this.storyService.allUpdates = data.updates);
                    console.log(_this.allUpdates);
                    _this.buildFeedData();
                });
            });
        }
        else {
            (this.allStories = this.storyService.allStories),
                (this.originalStories = this.allStories),
                (this.allUpdates = this.storyService.allUpdates);
            this.buildFeedData();
        }
    };
    FeedComponent.prototype.buildFeedData = function () {
        this.feedData = [];
        for (var _i = 0, _a = this.allStories; _i < _a.length; _i++) {
            var story = _a[_i];
            var latestUpdate = null, feedEntry = null;
            for (var _b = 0, _c = this.allUpdates; _b < _c.length; _b++) {
                var update = _c[_b];
                if (update["storyId"] == story["_id"]) {
                    (latestUpdate = update),
                        (latestUpdate.title = story["title"]),
                        (latestUpdate.author = story["author"]),
                        (latestUpdate.tags = story["tags"]),
                        (latestUpdate.activeBackNavigation = true);
                }
            }
            if (latestUpdate)
                feedEntry = latestUpdate;
            else
                feedEntry = story;
            if (story["endDate"]) {
                var startDate = new Date(story["date"]).getTime(), currentDate = new Date().getTime(), endDate = new Date(story["endDate"]).getTime(), totalPeriod = endDate - startDate, passedPeriod = currentDate - startDate;
                (feedEntry.progress = passedPeriod / totalPeriod * 100),
                    (feedEntry.daysLeft = Math.floor((endDate - currentDate) / 86400000));
                console.log(feedEntry);
                if (feedEntry.progress < 10)
                    feedEntry.progressColor = "success";
                else if (feedEntry.progress < 75)
                    feedEntry.progressColor = "info";
                else
                    feedEntry.progressColor = "danger";
            }
            this.feedData.push(feedEntry);
        }
    };
    FeedComponent.prototype.addFilterTag = function (tag) {
        if (!this.filterTags.includes(tag))
            this.filterTags.push(tag);
        this.filterStories("tag");
    };
    FeedComponent.prototype.filterStories = function (filterBy) {
        var filteredStories = [], searchKey = this.searchKey;
        switch (filterBy) {
            case "tag":
                if (this.filterTags.length == 0) {
                    this.allStories = this.originalStories;
                }
                else {
                    for (var _i = 0, _a = this.allStories; _i < _a.length; _i++) {
                        var story = _a[_i];
                        for (var _b = 0, _c = this.filterTags; _b < _c.length; _b++) {
                            var tag = _c[_b];
                            if (story["tags"].includes(tag)) {
                                filteredStories.push(story);
                                break;
                            }
                        }
                    }
                    this.allStories = filteredStories;
                }
                break;
            case "key":
                var _loop_1 = function (story) {
                    Object.keys(story).forEach(function (key) {
                        if (story[key].toString().includes(searchKey))
                            filteredStories.push(story);
                    });
                };
                for (var _d = 0, _e = this.allStories; _d < _e.length; _d++) {
                    var story = _e[_d];
                    _loop_1(story);
                }
                this.allStories = filteredStories;
                break;
        }
        this.buildFeedData();
    };
    FeedComponent.prototype.removeFilterTag = function (tag) {
        var index = this.filterTags.indexOf(tag, 0);
        if (index > -1)
            this.filterTags.splice(index, 1);
        this.filterStories("tag");
    };
    FeedComponent.prototype.onSearchChange = function () {
        if (this.searchKey.length > 2)
            this.filterStories("key");
        else
            this.allStories = this.originalStories;
        this.buildFeedData();
    };
    FeedComponent.prototype.triggerNavigation = function (updateId, storyId, direction) {
        var filteredUpdates = this.allUpdates.filter(function (update) { return update["storyId"] === storyId; }), currentUpdateIndex = filteredUpdates.findIndex(function (update) { return update["_id"] == updateId; }), associatedStory = this.allStories.filter(function (story) { return story["_id"] === storyId; })[0], navigatedUpdate = null;
        if (direction == "back") {
            if (filteredUpdates[currentUpdateIndex - 1])
                navigatedUpdate = filteredUpdates[currentUpdateIndex - 1];
            else {
                navigatedUpdate = associatedStory;
                // the line below is needed so that navigation doesn't disappear once user reaches OG story post
                navigatedUpdate.storyId = associatedStory["_id"];
            }
        }
        else {
            if (filteredUpdates[currentUpdateIndex + 1])
                navigatedUpdate = filteredUpdates[currentUpdateIndex + 1];
        }
        // check for back arrow
        if (filteredUpdates[currentUpdateIndex - 1])
            navigatedUpdate.activeBackNavigation = true;
        // check for forward arrow
        var navigatedUpdateIndex = filteredUpdates.findIndex(function (update) { return update["_id"] == navigatedUpdate._id; });
        if (filteredUpdates[navigatedUpdateIndex + 1])
            navigatedUpdate.activeForwardNavigation = true;
        if (navigatedUpdate) {
            var currentUpdateIndexInFeed = this.feedData.findIndex(function (update) { return update["_id"] == updateId; });
            this.feedData[currentUpdateIndexInFeed] = navigatedUpdate;
        }
        console.log(navigatedUpdate);
    };
    FeedComponent.prototype.addFollow = function (author) {
        var _this = this;
        var follow = {
            follower: this.user["username"],
            author: author
        };
        this.mainService.addFollow(follow).subscribe(function (response) {
            _this.processFollowData(response.data);
        });
    };
    FeedComponent.prototype.removeFollow = function (author) {
        var _this = this;
        var follow = {
            follower: this.user["username"],
            author: author
        };
        this.mainService.removeFollow(follow).subscribe(function (response) {
            _this.processFollowData(response.data);
        });
    };
    FeedComponent.prototype.checkFollow = function (author) {
        if (this.user["followings"])
            return this.user["followings"].includes(author);
        else
            return false;
    };
    FeedComponent.prototype.processFollowData = function (data) {
        (this.user["followings"] = []), (this.user["followers"] = []);
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            if (this.user["username"] == item.follower)
                this.user["followings"].push(item.author);
            else
                this.user["followers"].push(item.follower);
        }
        localStorage.setItem("user", JSON.stringify(this.user));
        this.buildFeedData();
    };
    FeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-feed",
            template: __webpack_require__("../../../../../src/app/components/feed/feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_story_service__["a" /* StoryService */],
            __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row row-offcanvas row-offcanvas-right\">\n\n    <app-feed></app-feed>\n\n  </div>\n  <!--/row-->\n\n  <hr>\n\n  <footer>\n    <p>© 2018 Company, Inc.</p>\n  </footer>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"Username\">Username</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"Password\">Password</label>\n    <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" value=\"remember-me\"> Remember me\n    </label>\n  </div>\n  <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show("You are now logged in", {
                    cssClass: "alert-success",
                    timeout: 5000
                });
                _this.router.navigate(["/"]);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: "alert-danger",
                    timeout: 5000
                });
                _this.router.navigate(["login"]);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-login",
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.popover {\n  top: 40px;\n  left: -32px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n        aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Inspireum</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a [routerLink]=\"['/']\">Feed</a>\n        </li>\n        <!-- <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n        </li> -->\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a [routerLink]=\"['/login']\">Login</a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a [routerLink]=\"['/register']\">Register</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a>\n            <span data-toggle=\"tooltip\" class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span>\n          </a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a [routerLink]=\"['/profile', user.username]\">Profile</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\">\n          <a (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n        </li>\n      </ul>\n    </div>\n    <!-- /.nav-collapse -->\n  </div>\n  <!-- /.container -->\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage, mainService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.mainService = mainService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = this.mainService.getUser();
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are now logged out", {
            cssClass: "alert-success",
            timeout: 5000
        });
        this.router.navigate(["/"]);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_main_service__["a" /* MainService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header h2 {\n  display: inline;\n}\n\n.privacy-setting {\n  display: inline;\n  float: right;\n}\n\n.icn-privacy {\n  font-size: 2em;\n  float: right;\n  cursor: pointer;\n}\n\n.icn-privacy.public {\n  color: dodgerblue;\n}\n\nprivacy-setting-label .emotion-label {\n  font-size: 100%;\n  margin-right: 10px;\n  cursor: pointer;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.emotion-label.active {\n  -webkit-box-shadow: inset 0px 0px 20px 0 #424242;\n          box-shadow: inset 0px 0px 20px 0 #424242;\n  border-radius: 0.25em;\n}\n\n#emotions-form a {\n  text-decoration: none;\n}\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  display: none;\n}\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #2196f3;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #ccc;\n}\n\ninput:focus + .slider {\n  -webkit-box-shadow: 0 0 1px #2196f3;\n          box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.post-status {\n  display: inline;\n}\n\n.post-status-option {\n  display: inline;\n  font-size: 26px;\n  color: lightgrey;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.post-status-option.active {\n  color: black;\n}\n\n.timeframe-input {\n  width: 60px;\n  display: inline;\n}\n\n.timeframe-unit {\n  width: 100px;\n  display: inline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n  <div class=\"post-status\" *ngIf=\"newStory; else elseStatus\">\n    <div class=\"post-status-option active\" (click)=\"changeStatus(true)\">New Story</div>\n    <div class=\"post-status-option\" (click)=\"changeStatus(false)\">Update</div>\n  </div>\n  <ng-template #elseStatus>\n    <div class=\"post-status-option\" (click)=\"changeStatus(true)\">New Story</div>\n    <div class=\"post-status-option active\" (click)=\"changeStatus(false)\">Update</div>\n  </ng-template>\n  <span *ngIf=\"!private\" data-toggle=\"tooltip\" title=\"Public post\" class=\"glyphicon glyphicon-globe icn-privacy public\" aria-hidden=\"true\"\n    (click)=\"changePrivacy()\"></span>\n  <span *ngIf=\"private\" data-toggle=\"tooltip\" title=\"Private post\" class=\"glyphicon glyphicon-globe icn-privacy\" aria-hidden=\"true\"\n    (click)=\"changePrivacy()\"></span>\n</div>\n<form (submit)=\"onStorySubmit()\">\n  <div *ngIf=\"newStory; else elseStorySelect\">\n    <div class=\"form-group\">\n      <label>Title</label>\n      <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <input id=\"checkBox\" type=\"checkbox\" name=\"timeframe\" [(ngModel)]=\"timeframe\">\n      <label>Add Timeframe</label>\n      <div *ngIf=\"timeframe\">\n        <input onkeypress='return event.charCode >= 48 && event.charCode <= 57' type=\"number\" [(ngModel)]=\"timeframeValue\" name=\"timeframeValue\"\n          class=\"form-control timeframe-input\" min=\"1\">\n        <select class=\"form-control timeframe-unit\" [(ngModel)]=\"timeframeUnit\" name=\"timeframeUnit\">\n          <option value=\"days\">Days\n            <option value=\"weeks\">Weeks\n              <option value=\"months\">Months\n                <option value=\"years\">Years\n        </select>\n      </div>\n    </div>\n  </div>\n  <ng-template #elseStorySelect>\n    <div class=\"form-group\">\n      <label for=\"sel1\">Select story to update:</label>\n      <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"storySelected\" [ngModelOptions]=\"{standalone: true}\">\n        <option *ngFor=\"let story of storiesFromUser\" [ngValue]=\"story\" (click)=\"storySelectChange(story)\">{{story.title}}</option>\n      </select>\n    </div>\n  </ng-template>\n  <div class=\"form-group\">\n    <label>Content</label>\n    <textarea class=\"form-control\" rows=\"10\" [(ngModel)]=\"content\" name=\"content\"></textarea>\n  </div>\n  <!-- <div class=\"form-group\" id=\"emotions-form\">\n      <span id=\"fear\" (click)=\"addEmotion($event)\" class=\"label label-default emotion-label\">Fear</span>\n      <span id=\"joy\" (click)=\"addEmotion($event)\" class=\"label label-primary emotion-label\">Joy</span>\n      <span id=\"trust\" (click)=\"addEmotion($event)\" class=\"label label-success emotion-label\">Trust</span>\n      <span id=\"anticipation\" (click)=\"addEmotion($event)\" class=\"label label-info emotion-label\">Anticipation</span>\n      <span id=\"sadness\" (click)=\"addEmotion($event)\" class=\"label label-warning emotion-label\">Sadness</span>\n      <span id=\"anger\" (click)=\"addEmotion($event)\" class=\"label label-danger emotion-label\">Anger</span>\n    </div> -->\n  <!-- <tag-input [(ngModel)]='items'></tag-input> -->\n  <div class=\"form-group\">\n    <label>Tags</label>\n    <app-tags></app-tags>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_story_service__ = __webpack_require__("../../../../../src/app/services/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostComponent = /** @class */ (function () {
    function PostComponent(flashMessage, storyService, validateService, router) {
        this.flashMessage = flashMessage;
        this.storyService = storyService;
        this.validateService = validateService;
        this.router = router;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.user);
        this.private = false;
        this.newStory = true;
        this.timeframe = false;
        this.timeframeUnit = "days";
        this.storyService
            .getAllStoriesFromCurrentUser(this.user["username"])
            .subscribe(function (data) {
            _this.storiesFromUser = data.stories;
        });
    };
    PostComponent.prototype.onStorySubmit = function () {
        var _this = this;
        if (this.newStory) {
            var endDate = new Date();
            switch (this.timeframeUnit) {
                case "days":
                    endDate.setDate(endDate.getDate() + this.timeframeValue);
                    break;
                case "weeks":
                    endDate.setDate(endDate.getDate() + 7 * this.timeframeValue);
                    break;
                case "months":
                    endDate.setMonth(endDate.getMonth() + this.timeframeValue);
                    break;
                case "years":
                    endDate.setFullYear(endDate.getFullYear() + this.timeframeValue);
                    break;
            }
            var story = {
                title: this.title,
                content: this.content,
                author: this.user["username"],
                private: this.private,
                tags: this.storyService.tags.join()
            };
            if (this.timeframe)
                story["endDate"] = endDate;
            if (!this.validateService.validateStoryTitle(story)) {
                this.flashMessage.show("Please specify a title", {
                    cssClass: "alert-danger",
                    timeout: 3000
                });
                return false;
            }
            if (!this.validateService.validateStoryContent(story)) {
                this.flashMessage.show("Please add content", {
                    cssClass: "alert-danger",
                    timeout: 3000
                });
                return false;
            }
            this.storyService.addStory(story).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, {
                        cssClass: "alert-success",
                        timeout: 3000
                    });
                    console.log(data);
                    // this.router.navigate(['/']);
                }
                else {
                    _this.flashMessage.show(data.msg, {
                        cssClass: "alert-danger",
                        timeout: 3000
                    });
                    console.log(data);
                    // this.router.navigate(['/post']);
                }
            });
        }
        else {
            if (!this.validateService.validateStorySelected(this.storySelected)) {
                this.flashMessage.show("Please select story to update", {
                    cssClass: "alert-danger",
                    timeout: 3000
                });
                return false;
            }
            if (!this.validateService.validateStoryContent(this)) {
                this.flashMessage.show("Please add content", {
                    cssClass: "alert-danger",
                    timeout: 3000
                });
                return false;
            }
            var update = {
                content: this.content,
                author: this.user["username"],
                private: this.private,
                storyId: this.storySelected["_id"],
                tags: this.storyService.tags.join()
            };
            this.storyService.addUpdate(update).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, {
                        cssClass: "alert-success",
                        timeout: 3000
                    });
                    console.log(data);
                    // this.router.navigate(['/']);
                }
                else {
                    _this.flashMessage.show(data.msg, {
                        cssClass: "alert-danger",
                        timeout: 3000
                    });
                    console.log(data);
                    // this.router.navigate(['/post']);
                }
            });
        }
    };
    PostComponent.prototype.changePrivacy = function () {
        this.private = !this.private;
        console.log(this.private);
    };
    PostComponent.prototype.changeStatus = function (status) {
        this.newStory = status;
    };
    PostComponent.prototype.storySelectChange = function (story) {
        console.log(1111);
        console.log(story);
    };
    PostComponent.prototype.addTimeframe = function () {
        console.log("test");
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-post",
            template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_story_service__["a" /* StoryService */],
            __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"profileUser\">\n  <h2 class=\"page-header\">\n    {{profileUser.name}}\n  </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{profileUser.username}}</li>\n    <li class=\"list-group-item\">Email: {{profileUser.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(mainService, router, route) {
        this.mainService = mainService;
        this.router = router;
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.sessionUser = this.mainService.getUser();
        this.loadUserData();
    };
    ProfileComponent.prototype.loadUserData = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['nickname'] != _this.mainService.user['username']) {
                _this.mainService.getUserByUsername(params['nickname']).subscribe(function (data) {
                    _this.profileUser = data.user;
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
            else
                _this.profileUser = _this.sessionUser;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-profile",
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"page-header\">Register</h2>\n  <form (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, flashMessage, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Please fill in all fields", {
                cssClass: "alert-danger",
                timeout: 3000
            });
            return false;
        }
        // Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please use a valid email", {
                cssClass: "alert-danger",
                timeout: 3000
            });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You are now registered and can log in", {
                    cssClass: "alert-success",
                    timeout: 3000
                });
                _this.router.navigate(["/login"]);
            }
            else {
                _this.flashMessage.show("Something went wrong", {
                    cssClass: "alert-danger",
                    timeout: 3000
                });
                _this.router.navigate(["/register"]);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-register",
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bnt-post .glyphicon {\n  margin-right: 10px;\n}\n\n.bnt-post {\n  margin-bottom: 10px;\n}\n\n.filter-tags-entry {\n  display: initial;\n  padding: 5px;\n  font-size: 16px;\n  background: lightgrey;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\">\n  <!-- Standard button -->\n  <button [routerLink]=\"['/post']\" type=\"button\" class=\"btn btn-default btn-lg btn-block bnt-post\">\n    <span class=\"glyphicon glyphicon-send\" aria-hidden=\"true\"></span>Post</button>\n  <div class=\"filter-tags-entry\" *ngFor=\"let tag of mainService.filterTags\" (click)=\"removeFilterTag(tag)\">\n    {{tag}}\n  </div>\n</div>\n<!--/.sidebar-offcanvas-->"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(mainService) {
        this.mainService = mainService;
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.removeFilterTag = function (tag) {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-sidebar",
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/story/story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/story/story.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  story works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/story/story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryComponent; });
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

var StoryComponent = /** @class */ (function () {
    function StoryComponent() {
    }
    StoryComponent.prototype.ngOnInit = function () {
    };
    StoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-story',
            template: __webpack_require__("../../../../../src/app/components/story/story.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/story/story.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tags/tags.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tags-input {\n  width: 15%;\n  display: inline;\n}\n\n.tags-list {\n  display: inline;\n}\n\n.tags-entry {\n  display: inline;\n  padding: 10px;\n  font-size: 16px;\n  background: lightgrey;\n  margin-right: 10px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tags/tags.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tags-container\">\n  <div class=\"tags-list\">\n    <div class=\"tags-entry\" (click)=\"onTagClick(tag)\" *ngFor=\"let tag of tags\" data-toggle=\"tooltip\" title=\"Click to remove\">\n      {{tag}}\n    </div>\n  </div>\n  <input type=\"text\" class=\"form-control tags-input\" [(ngModel)]=\"currentTag\" (focusout)=\"onFocusOut()\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tags/tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_story_service__ = __webpack_require__("../../../../../src/app/services/story.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagsComponent = /** @class */ (function () {
    function TagsComponent(storyService) {
        this.storyService = storyService;
    }
    TagsComponent.prototype.ngOnInit = function () {
        this.tags = [];
        this.currentTag = "";
    };
    TagsComponent.prototype.onFocusOut = function () {
        if (!this.tags.includes(this.currentTag) && this.currentTag != "") {
            this.tags.push(this.currentTag);
            this.currentTag = "";
            this.storyService.updateTags(this.tags);
        }
    };
    TagsComponent.prototype.onTagClick = function (tag) {
        var index = this.tags.indexOf(tag, 0);
        if (index > -1) {
            this.tags.splice(index, 1);
            this.storyService.updateTags(this.tags);
        }
    };
    TagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-tags",
            template: __webpack_require__("../../../../../src/app/components/tags/tags.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tags/tags.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_story_service__["a" /* StoryService */]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        var ep = this.prepEndpoint("users/register");
        return this.http
            .post("users/register", user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        var ep = this.prepEndpoint("users/authenticate");
        return this.http
            .post("users/authenticate", user, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append("Authorization", this.authToken);
        headers.append("Content-Type", "application/json");
        var ep = this.prepEndpoint("users/profile");
        return this.http
            .get("users/profile", {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        // the value below HAS to be named it_token
        // because that's what Angular is looking for
        localStorage.setItem("id_token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem("id_token");
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])("id_token");
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return "http://localhost:3000/" + ep;
        }
        else {
            return "http://localhost:3000/" + ep;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    MainService.prototype.getUserByUsername = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        headers.append("user", username);
        var ep = this.prepEndpoint("users/profile");
        return this.http
            .get("users/profile", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.getUser = function () {
        return this.user;
    };
    MainService.prototype.setUser = function (user) {
        this.user = user;
    };
    MainService.prototype.addFollow = function (follow) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        var ep = this.prepEndpoint("follows/add");
        return this.http
            .post("follows/add", follow, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.removeFollow = function (follow) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        var ep = this.prepEndpoint("follows/remove");
        return this.http
            .post("follows/remove", follow, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // get both followings and followers for user
    MainService.prototype.getFollowDataForUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        headers.append("user", user);
        var ep = this.prepEndpoint("follows/allForUser");
        return this.http
            .get("follows/allForUser", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // get all authors a user follows
    MainService.prototype.getFollowingsFromUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        headers.append("user", user);
        var ep = this.prepEndpoint("follows/followingsFromUser");
        return this.http
            .get("follows/followingsFromUser", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return "http://localhost:3000/" + ep;
        }
        else {
            return "http://localhost:3000/" + ep;
        }
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/app/services/story.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoryService = /** @class */ (function () {
    function StoryService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
        this.tags = [];
    }
    StoryService.prototype.updateTags = function (tags) {
        this.tags = tags;
    };
    StoryService.prototype.addStory = function (story) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        var ep = this.prepEndpoint("stories/post");
        return this.http
            .post("stories/post", story, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    StoryService.prototype.addUpdate = function (update) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        var ep = this.prepEndpoint("updates/post");
        return this.http
            .post("updates/post", update, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    StoryService.prototype.fetchAllStories = function (loggedUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        headers.append("loggeduser", loggedUser);
        var ep = this.prepEndpoint("stories/all");
        return this.http
            .get("stories/all", { headers: headers })
            .map(function (res) { return res.json(); });
        // this.http
        //   .get(ep, { headers: headers })
        //   .map(res => res.json())
        //   .subscribe(data => {
        //     this.allStories = data.stories;
        //   });
    };
    StoryService.prototype.fetchAllUpdates = function (loggedUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        headers.append("loggeduser", loggedUser);
        var ep = this.prepEndpoint("updates/all");
        return this.http
            .get("updates/all", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    StoryService.prototype.getAllStoriesFromUser = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        headers.append("username", username);
        var ep = this.prepEndpoint("stories/allFromUser");
        return this.http
            .get("stories/allFromUser", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    StoryService.prototype.getAllStoriesFromCurrentUser = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        headers.append("username", username);
        var ep = this.prepEndpoint("stories/allFromCurrentUser");
        return this.http
            .get("stories/allFromCurrentUser", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    StoryService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return "http://localhost:3000/" + ep;
        }
        else {
            return "http://localhost:3000/" + ep;
        }
    };
    StoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], StoryService);
    return StoryService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined ||
            user.email == undefined ||
            user.username == undefined ||
            user.password == undefined)
            return false;
        else
            return true;
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    ValidateService.prototype.validateStoryTitle = function (story) {
        if (story.title == undefined || story.title == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateStoryContent = function (story) {
        if (story.content == undefined || story.content == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateStorySelected = function (storySelected) {
        if (storySelected == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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