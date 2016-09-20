import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeSrvService} from "../recipe-srv.service";

@Component({
  selector: 'app-recipe-list',
  template: `
<div class="row">
  <div class="col-xs-12">
    <a class="btn btn-success" [routerLink] ="['new']">New Recipe</a>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <ul class="list-group">
      <app-recipe-item *ngFor="let recipe of recipes ; let i = index" [recipe]="recipe" [recipeId] = "i"></app-recipe-item>
    </ul>
  </div>
</div>


  `
})
export class RecipeListComponent implements  OnInit{

  recipes:Recipe [] = [];




  constructor(private  recipesrv:RecipeSrvService) {

  }



  ngOnInit(){
    this.recipes = this.recipesrv.getRecipes();
    this.recipesrv.recipesChanged.subscribe(
      (recipes:Recipe[]) => this.recipes = recipes
    );
  }


}
