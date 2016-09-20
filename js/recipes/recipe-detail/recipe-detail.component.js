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
var shopping_list_service_1 = require("../../shopping-list/shopping-list.service");
var router_1 = require("@angular/router");
var recipe_srv_service_1 = require("../recipe-srv.service");
var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(sls, router, route, recipesSrv) {
        this.sls = sls;
        this.router = router;
        this.route = route;
        this.recipesSrv = recipesSrv;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.recipeIndex = params['id'];
            }
            else {
                _this.recipeIndex = 0;
            }
            _this.selectedRecipe = _this.recipesSrv.getRecipe(_this.recipeIndex);
        });
    };
    RecipeDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        this.sls.addItems(this.selectedRecipe.ingredients);
    };
    RecipeDetailComponent.prototype.onEdit = function () {
        this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
    };
    RecipeDetailComponent.prototype.onDelete = function () {
        this.recipesSrv.deleteRecipe(this.selectedRecipe);
        this.router.navigate(['/recipes']);
    };
    RecipeDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-detail',
            templateUrl: './recipe-detail.component.html'
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, router_1.Router, router_1.ActivatedRoute, recipe_srv_service_1.RecipeSrvService])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
exports.RecipeDetailComponent = RecipeDetailComponent;
//# sourceMappingURL=recipe-detail.component.js.map