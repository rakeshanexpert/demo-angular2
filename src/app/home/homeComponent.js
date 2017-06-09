"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var home_services_1 = require("./home-services");
var homeComponent = (function () {
    function homeComponent(_homeService) {
        this._homeService = _homeService;
    }
    homeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._homeService.getHomeServices().subscribe(function (resEmployeeData) { return _this.homeJsonData = resEmployeeData; });
    };
    return homeComponent;
}());
homeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'app/home/home.html',
        providers: [home_services_1.HomeServices]
    }),
    __metadata("design:paramtypes", [home_services_1.HomeServices])
], homeComponent);
exports.homeComponent = homeComponent;
//# sourceMappingURL=homeComponent.js.map