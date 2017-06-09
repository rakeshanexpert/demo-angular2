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
var router_1 = require("@angular/router");
var employeeDetail = (function () {
    function employeeDetail(router) {
        this.router = router;
        this.depatments = [
            { name: 'Chals', country: 'Us', 'id': '1' },
            { name: 'Prem', country: 'India', 'id': '2' },
            { name: 'Ravi', country: 'China', 'id': '3' }
        ];
    }
    employeeDetail.prototype.onSelect = function (depatment) {
        this.router.navigate(['/depatments', depatment.id]);
    };
    return employeeDetail;
}());
employeeDetail = __decorate([
    core_1.Component({
        selector: 'employeeDetail',
        templateUrl: 'app/employee/employeeDetailComponent.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], employeeDetail);
exports.employeeDetail = employeeDetail;
//# sourceMappingURL=employeeDetailComponent.js.map