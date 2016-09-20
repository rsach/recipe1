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
            template: "\n          <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink] = \"['/']\">Recipe Book</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a [routerLink] = \"['/recipes']\">Recipes </a></li>\n        <li routerLinkActive=\"active\"><a [routerLink] = \"['./shopping-list']\">Shopping List</a></li>\n\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n\n        <li class=\"dropdown\" appdropdown>\n          <a  class=\"dropdown-toggle\"  role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Recipe Management <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a (click)=\"onStore()\" style=\"cursor: pointer\">Store Recipe</a></li>\n            <li><a (click)=\"onFetch()\" style=\"cursor: pointer\">Retrieve Recipes</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n  "
        }), 
        __metadata('design:paramtypes', [recipe_srv_service_1.RecipeSrvService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map