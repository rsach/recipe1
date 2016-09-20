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
var core_1 = require('@angular/core');
var recipe_srv_service_1 = require("./recipes/recipe-srv.service");
var HeaderComponent = (function () {
    function HeaderComponent(recipeSrv) {
        this.recipeSrv = recipeSrv;
    }
    HeaderComponent.prototype.onStore = function () {
        this.recipeSrv.storeData().subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    HeaderComponent.prototype.onFetch = function () {
        this.recipeSrv.getData();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html'
        }), 
        __metadata('design:paramtypes', [recipe_srv_service_1.RecipeSrvService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map