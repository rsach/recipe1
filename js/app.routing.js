"use strict";
/**
 * Created by rahul on 9/3/2016.
 */
var router_1 = require('@angular/router');
var recipes_component_1 = require("./recipes/recipes.component");
var shopping_list_component_1 = require("./shopping-list/shopping-list.component");
var recipe_route_1 = require("./recipes/recipe.route");
var appRoutes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    { path: 'recipes', component: recipes_component_1.RecipesComponent, children: recipe_route_1.recipeAppRoutes },
    { path: 'shopping-list', component: shopping_list_component_1.ShoppingListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map