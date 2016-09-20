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
var ingredient_1 = require("../shared/ingredient");
var shopping_list_service_1 = require("./shopping-list.service");
var ShoppingListAddComponent = (function () {
    function ShoppingListAddComponent(sls) {
        this.sls = sls;
        this.isAdd = true;
        this.cleared = new core_1.EventEmitter();
    }
    ShoppingListAddComponent.prototype.ngOnChanges = function (changes) {
        if (changes.item.currentValue === null) {
            this.isAdd = true;
            this.item = { name: null, amount: null };
        }
        else {
            this.isAdd = false;
        }
    };
    ShoppingListAddComponent.prototype.onSubmit = function (ingredient) {
        var newIngredient = new ingredient_1.Ingredient(ingredient.name, ingredient.amount);
        if (!this.isAdd) {
            this.sls.editItem(this.item, newIngredient);
        }
        else {
            this.item = new ingredient_1.Ingredient(ingredient.name, ingredient.amount);
            this.sls.addItem(this.item);
        }
    };
    ShoppingListAddComponent.prototype.onDelete = function () {
        this.sls.deleteItem(this.item);
        this.onClear();
    };
    ShoppingListAddComponent.prototype.onClear = function () {
        this.isAdd = true;
        this.cleared.emit(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ingredient_1.Ingredient)
    ], ShoppingListAddComponent.prototype, "item", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ShoppingListAddComponent.prototype, "cleared", void 0);
    ShoppingListAddComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-list-add',
            template: "\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n\n    <form id=\"shopping-list-add\" (ngSubmit) = \"onSubmit(f.value)\" #f = \"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"item-name\">Name</label>\n\n\n\n          <input type=\"text\" id=\"item-name\" required class=\"form-control\" [ngModel]=\"item.name\" name=\"name\">\n\n        </div>\n\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"item-amount\">Amount</label>\n          <input type=\"text\" id=\"item-amount\" required class=\"form-control\" [ngModel]=\"item.amount\" name=\"amount\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button class=\"btn btn-success\" type=\"submit\" *ngIf=\"isAdd\" [disabled] = \"!f.valid\">Add</button>\n            <button class=\"btn btn-success\" type=\"submit\" *ngIf=\"!isAdd\" [disabled] = \"!f.valid\">Save</button>\n            <button class=\"btn btn-danger\" type=\"submit\" *ngIf=\"!isAdd\" [disabled] = \"!f.valid\" (click)=\"onDelete()\">Delete Item</button>\n            <button class=\"btn btn-primary\" type=\"submit\" *ngIf=\"!isAdd\" [disabled] = \"!f.valid\" (click)=\"onClear()\">Clear</button>\n\n          </div>\n        </div>\n\n      </div>\n    </form>\n  </div>\n</div>\n\n  "
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
    ], ShoppingListAddComponent);
    return ShoppingListAddComponent;
}());
exports.ShoppingListAddComponent = ShoppingListAddComponent;
//# sourceMappingURL=shopping-list-add.component.js.map