/**
 * Created by rahul on 9/3/2016.
 */
import {Routes, RouterModule} from '@angular/router';

import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ModuleWithProviders} from "@angular/core";
import {recipeAppRoutes} from "./recipes/recipe.route";


 const appRoutes:Routes =[
  {path: '' , redirectTo: 'recipes' , pathMatch: 'full'},
  {path: 'recipes' , component: RecipesComponent ,children: recipeAppRoutes  },
  {path: 'shopping-list' , component: ShoppingListComponent}


];

export  const appRoutingProviders:any[] = [

];

export  const routing = RouterModule.forRoot(appRoutes);
