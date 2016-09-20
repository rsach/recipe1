import {Routes, RouterModule} from "@angular/router";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
/**
 * Created by rahul on 9/4/2016.
 */


export  const recipeAppRoutes:Routes =[
  {path: '' , component:RecipeStartComponent },
  {path: 'new' , component: RecipeEditComponent },
  {path: ':id' , component: RecipeDetailComponent },
  {path: ':id/edit' , component: RecipeEditComponent }


];

