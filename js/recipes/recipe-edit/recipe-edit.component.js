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
var router_1 = require("@angular/router");
var recipe_srv_service_1 = require("../recipe-srv.service");
var forms_1 = require("@angular/forms");
var RecipeEditComponent = (function () {
    function RecipeEditComponent(route, recipeSrv, formbldr, router) {
        this.route = route;
        this.recipeSrv = recipeSrv;
        this.formbldr = formbldr;
        this.router = router;
        this.isNew = true;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.isNew = false;
                _this.recipeIndex = +params['id'];
                _this.recipe = _this.recipeSrv.getRecipe(_this.recipeIndex);
            }
            else {
                _this.isNew = true;
                _this.recipe = null;
            }
            _this.initForm();
        });
    };
    RecipeEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['../']);
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    RecipeEditComponent.prototype.onAddItem = function (name, amount) {
        this.recipeForm.controls['ingredients'].push(new forms_1.FormGroup({
            name: new forms_1.FormControl(name, forms_1.Validators.required),
            amount: new forms_1.FormControl(amount, [
                forms_1.Validators.required,
                forms_1.Validators.pattern("\\d+")
            ])
        }));
    };
    RecipeEditComponent.prototype.onRemoveItem = function (index) {
        this.recipeForm.controls['ingredients'].removeAt(index);
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        var newRecipe = this.recipeForm.value;
        if (this.isNew) {
            this.recipeSrv.addRecipe(newRecipe);
        }
        else {
            this.recipeSrv.editRecipe(this.recipe, newRecipe);
        }
        this.navigateBack();
    };
    RecipeEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecipeEditComponent.prototype.initForm = function () {
        var recipeName = '';
        var recipeImageUrl = '';
        var recipeContent = '';
        var recipeIngredients = new forms_1.FormArray([]);
        if (!this.isNew) {
            if (this.recipe.hasOwnProperty('ingredients')) {
                for (var i = 0; i < this.recipe.ingredients.length; i++) {
                    recipeIngredients.push(new forms_1.FormGroup({
                        name: new forms_1.FormControl(this.recipe.ingredients[i].name, forms_1.Validators.required),
                        amount: new forms_1.FormControl(this.recipe.ingredients[i].amount, [
                            forms_1.Validators.required,
                            forms_1.Validators.pattern("\\d+")
                        ])
                    }));
                }
            }
            recipeName = this.recipe.name;
            recipeImageUrl = this.recipe.imagePath;
            recipeContent = this.recipe.description;
        }
        this.recipeForm = this.formbldr.group({
            name: [recipeName, forms_1.Validators.required],
            imagePath: [recipeImageUrl, forms_1.Validators.required],
            description: [recipeContent, forms_1.Validators.required],
            ingredients: recipeIngredients
        });
    };
    RecipeEditComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-edit',
            templateUrl: './recipe-edit.component.html',
            styles: []
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, recipe_srv_service_1.RecipeSrvService, forms_1.FormBuilder, router_1.Router])
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());
exports.RecipeEditComponent = RecipeEditComponent;
//# sourceMappingURL=recipe-edit.component.js.map