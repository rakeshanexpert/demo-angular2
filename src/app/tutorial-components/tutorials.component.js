"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var tutorialsComponent = (function () {
    function tutorialsComponent() {
        this.title = "tutorial Heading";
    }
    tutorialsComponent.prototype.onClick = function () {
        console.log(this.value1);
    };
    return tutorialsComponent;
}());
tutorialsComponent = __decorate([
    core_1.Component({
        selector: 'my-tutorials',
        template: "<h2>{{title}}</h2>\n  \t\t\t<button (click)=\"onClick()\">Click Me</button>\n  \t\t\t<input type=\"text\" [(ngModel)]=\"value1\">",
    })
], tutorialsComponent);
exports.tutorialsComponent = tutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map