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
var recipe_1 = require("./recipe");
var ingredient_1 = require("../shared/ingredient");
var http_1 = require("@angular/http");
var RecipeSrvService = (function () {
    function RecipeSrvService(http) {
        this.http = http;
        this.recipesChanged = new core_1.EventEmitter();
        this.recipes = [
            new recipe_1.Recipe('Schnitzel', 'Very tasty', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIcEoTsY1fdF6dfE05dxhanso8zbNJAt1D3b74M6QvhSdKtfEHmA', [
                new ingredient_1.Ingredient('French Fries', 1),
                new ingredient_1.Ingredient('Pork MEat', 2)
            ]),
            new recipe_1.Recipe('Summer Salad', 'Okayish', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRW_scZ3DNU6oNzqZyViaJiiHWLF0v4BVH2QMKLDP2BZtn8qsNUVQ', [])
        ];
    }
    RecipeSrvService.prototype.getRecipes = function () {
        return this.recipes;
    };
    RecipeSrvService.prototype.getRecipe = function (id) {
        return this.recipes[id];
    };
    RecipeSrvService.prototype.deleteRecipe = function (recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    };
    RecipeSrvService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
    };
    RecipeSrvService.prototype.editRecipe = function (oldRecipe, newRecipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    };
    RecipeSrvService.prototype.storeData = function () {
        var body = JSON.stringify(this.recipes);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://awesome-ca7e5.firebaseio.com/recipes.json', body, { headers: headers });
    };
    RecipeSrvService.prototype.getData = function () {
        var _this = this;
        return this.http.get('https://awesome-ca7e5.firebaseio.com/recipes.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.recipes = data;
            _this.recipesChanged.emit(_this.recipes);
        });
    };
    RecipeSrvService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RecipeSrvService);
    return RecipeSrvService;
}());
exports.RecipeSrvService = RecipeSrvService;
//# sourceMappingURL=recipe-srv.service.js.map