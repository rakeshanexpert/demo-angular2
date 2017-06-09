"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var headerComponent = (function () {
    function headerComponent() {
        this.closeOrOpen = 'hide';
        this.overlayClass = "";
        this.searchFocusClass = "";
        this.drop = false;
    }
    headerComponent.prototype.openNav = function () {
        if (this.closeOrOpen == 'hide') {
            this.closeOrOpen = 'show',
                this.overlayClass = 'is-visible';
        }
        else if (this.closeOrOpen == 'show') {
            this.closeOrOpen = 'hide';
            this.overlayClass = '';
        }
        else {
            this.closeOrOpen = 'hide',
                this.overlayClass = '';
        }
    };
    headerComponent.prototype.overlayEvent = function () {
        this.openNav();
    };
    headerComponent.prototype.searchFocus = function () {
        this.searchFocusClass = "is-focused";
    };
    headerComponent.prototype.focusOutFunction = function () {
        this.searchFocusClass = "searchkey";
    };
    headerComponent.prototype.toggle = function () {
        this.drop = !this.drop;
    };
    headerComponent.prototype.upDropDown = function () {
        this.toggle();
    };
    return headerComponent;
}());
headerComponent = __decorate([
    core_1.Component({
        selector: 'header',
        templateUrl: 'app/header/header.html',
        animations: [
            core_1.trigger('verticalOpen', [
                core_1.state('hide', core_1.style({
                    '-webkit-transform': 'translate(-200px,0px)',
                    'transform': 'translate(-150px,0px)'
                })),
                core_1.state('show', core_1.style({
                    '-webkit-transform': 'translate(0px,0px)',
                    'transform': 'translate(0px,0px)'
                })),
                core_1.transition('hide => show', core_1.animate('100ms ease-in')),
                core_1.transition('show => hide', core_1.animate('100ms ease-out'))
            ])
        ],
    })
], headerComponent);
exports.headerComponent = headerComponent;
//# sourceMappingURL=headerComponents.js.map