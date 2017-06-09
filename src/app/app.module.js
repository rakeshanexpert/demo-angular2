"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser"); //browser module
var forms_1 = require("@angular/forms"); //form module
var forms_2 = require("@angular/forms");
// import { RouterModule } from '@angular/router'; //include for routing
var http_1 = require("@angular/http"); //includer for services
var animations_1 = require("@angular/platform-browser/animations");
var app_routemodel_1 = require("./app.routemodel"); //export routing module for saperate link path
var app_routemodel_2 = require("./app.routemodel"); //export routing module for saperate link path
var app_component_1 = require("./app.component");
var headerComponents_1 = require("./header/headerComponents");
var navComponents_1 = require("./nav/navComponents");
var footerComponents_1 = require("./footer/footerComponents");
var employeeListComponent_1 = require("./employee/employeeListComponent");
var employeeDetailComponent_1 = require("./employee/employeeDetailComponent");
var filterPipe_1 = require("./sport/filterPipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            http_1.HttpModule,
            app_routemodel_1.Approutingmodel,
            animations_1.BrowserAnimationsModule
        ],
        declarations: [app_component_1.AppComponent,
            headerComponents_1.headerComponent,
            navComponents_1.navComponent,
            footerComponents_1.footerComponent,
            employeeListComponent_1.employeeList,
            employeeDetailComponent_1.employeeDetail,
            app_routemodel_2.routingComponents,
            filterPipe_1.FilterPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map