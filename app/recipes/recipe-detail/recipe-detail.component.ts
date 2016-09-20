import {Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {RecipeSrvService} from "../recipe-srv.service";

@Component({
  selector: 'app-recipe-detail',
  template: `
<div class="row">
  <div class="col-xs-12">
    <img src="{{selectedRecipe?.imagePath}}" alt="" class="img-responsive">


  </div>
</div>
<div class="row">
  <div class="col-xs-12">
    <h1>{{selectedRecipe?.name}}</h1>
  </div>

  <div class="col-xs-12">
    <button class="btn btn-success" (click)="onAddToShoppingList()">To shopping List</button>
    <button class="btn btn-primary" (click)="onEdit()">Edit</button>
    <button class="btn btn-danger" (click)="onDelete()">Delete</button>
  </div>
</div>
<div class="row">
  <div class="col-xs-12">
    <p>{{selectedRecipe?.description}}</p>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let item of selectedRecipe?.ingredients">
        {{item.name}} ({{item.amount}})
      </li>
    </ul>
  </div>
</div>


  `

})
export class RecipeDetailComponent implements OnInit,OnDestroy {
  selectedRecipe:Recipe;
  private  recipeIndex:number ;
  private  subscription:Subscription;

  constructor(private sls:ShoppingListService,
              private router:Router ,
              private  route:ActivatedRoute,
              private recipesSrv :RecipeSrvService
            ) {

            }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params:any) => {
        if(params.hasOwnProperty('id')) {
          this.recipeIndex = params['id'];


        }else{
          this.recipeIndex=0;

        }
        this.selectedRecipe = this.recipesSrv.getRecipe(this.recipeIndex);
        }

    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['/recipes',this.recipeIndex , 'edit']);
  }

  onDelete(){
    this.recipesSrv.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);


  }

}
