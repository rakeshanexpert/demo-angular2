"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//Include Routing Component
var aboutComponent_1 = require("./about/aboutComponent");
var homeComponent_1 = require("./home/homeComponent");
var formdataComponent_1 = require("./formdata/formdataComponent");
var sportComponent_1 = require("./sport/sportComponent");
var employee_Detail_depatment_1 = require("./employee/employee-Detail-depatment");
var routes = [
    {
        path: '',
        component: homeComponent_1.homeComponent
    },
    {
        path: 'home',
        component: homeComponent_1.homeComponent
    },
    {
        path: 'about',
        component: aboutComponent_1.aboutComponent
    },
    {
        path: 'contact',
        component: formdataComponent_1.formdataComponent
    },
    {
        path: 'sport',
        component: sportComponent_1.sportAppComponent
    },
    {
        path: 'depatments/:id',
        component: employee_Detail_depatment_1.employeeDetailDepatment
    }
];
var Approutingmodel = (function () {
    function Approutingmodel() {
    }
    return Approutingmodel;
}());
Approutingmodel = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], Approutingmodel);
exports.Approutingmodel = Approutingmodel;
exports.routingComponents = [aboutComponent_1.aboutComponent, homeComponent_1.homeComponent, formdataComponent_1.formdataComponent, sportComponent_1.sportAppComponent, employee_Detail_depatment_1.employeeDetailDepatment];
//# sourceMappingURL=app.routemodel.js.map