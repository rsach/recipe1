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
var recipe_srv_service_1 = require("../recipe-srv.service");
var RecipeListComponent = (function () {
    function RecipeListComponent(recipesrv) {
        this.recipesrv = recipesrv;
        this.recipes = [];
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipes = this.recipesrv.getRecipes();
        this.recipesrv.recipesChanged.subscribe(function (recipes) { return _this.recipes = recipes; });
    };
    RecipeListComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-list',
            template: "\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <a class=\"btn btn-success\" [routerLink] =\"['new']\">New Recipe</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <ul class=\"list-group\">\n      <app-recipe-item *ngFor=\"let recipe of recipes ; let i = index\" [recipe]=\"recipe\" [recipeId] = \"i\"></app-recipe-item>\n    </ul>\n  </div>\n</div>\n\n\n  "
        }), 
        __metadata('design:paramtypes', [recipe_srv_service_1.RecipeSrvService])
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map