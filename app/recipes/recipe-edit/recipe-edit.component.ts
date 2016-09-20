import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeSrvService} from "../recipe-srv.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  template: `
<div class="row">
  <div class="col-xs-12">
    <form [formGroup] ="recipeForm" (ngSubmit) = "onSubmit()">
      <div class="row">
        <div class="col-xs-12">
          <button type="submit" class="btn btn-success" [disabled] = "!recipeForm.value">Save</button>
          <a class="btn btn-danger" (click)="onCancel()">Cancel</a>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12">
          <div class="form-group">
            <label for="name">Title</label>
            <input type="text" id="name" class="form-control"
            formControlName="name">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12">
          <div class="form-group">
            <label for="img-url">Image Url</label>
            <input type="text" id="img-url" class="form-control"
            formControlName="imagePath" #imgUrl>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12">
          <div class="img">
            <img [src]="imgUrl.value" >
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col-xs-12">
          <div class="form-group">
            <label for="content">Content</label>
            <textarea type="text" id="content" rows="6" class="form-control"
            formControlName="description"></textarea>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col-xs-12">
          <ul class="list-group" formArrayName="ingredients">
            <div class="row" *ngFor="let ingredient of recipeForm.controls['ingredients'].controls; let i = index">
              <div formGroupName="{{i}}">
                <div class="col-sm-5"><input type="text" class="form-control" formControlName="name"></div>
                <div class="col-sm-5"><input type="text" class="form-control" formControlName="amount"></div>
                <div class="col-sm-2"><button  class="btn btn-danger" (click)="onRemoveItem(i)">X</button></div>

              </div>

              <br><br><br>
            </div>
          </ul>
        </div>
      </div>




    </form>


  </div>


</div>

<hr>
<div class="row">
  <div class="col-xs-12">
    <div class="form-group row">
      <div class="col-md-5"><input type="text" class="form-control" #itemName></div>
      <div class="col-md-5"><input type="text" class="form-control" #itemAmount></div>
      <div class="col-md-2"><button type="button" class="btn btn-primary" (click)="onAddItem(itemName.value,itemAmount.value)" >+</button></div>
    </div>
  </div>
</div>


  `,
  styles: []
})
export class RecipeEditComponent implements OnInit,OnDestroy {
  private recipeIndex;

  private recipe:Recipe;
  private isNew = true;
  private subscription:Subscription;

  recipeForm:FormGroup;


  constructor(private route:ActivatedRoute,
              private recipeSrv:RecipeSrvService,
              private  formbldr: FormBuilder,
              private router:Router
              ) { }

  ngOnInit() {

    this.subscription = this.route.params.subscribe(
      (params:any) => {

        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeSrv.getRecipe(this.recipeIndex);
        } else {
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();


      });

  }


  private navigateBack(){
    this.router.navigate(['../']);

  }

  onCancel(){
    this.navigateBack();
  }

  onAddItem(name:string , amount:number){
    (<FormArray>this.recipeForm.controls['ingredients']).push(new FormGroup({
      name: new FormControl(name , Validators.required),
      amount: new FormControl(amount,[
        Validators.required,
        Validators.pattern("\\d+")
      ])
    }));

  }

  onRemoveItem(index : number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  onSubmit(){

    const newRecipe = this.recipeForm.value;
    if(this.isNew){
      this.recipeSrv.addRecipe(newRecipe);
    }else{
      this.recipeSrv.editRecipe(this.recipe,newRecipe);
    }
    this.navigateBack();
  }



  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private initForm(){
    let recipeName ='';
    let recipeImageUrl = '';
    let recipeContent ='';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!this.isNew) {

      if (this.recipe.hasOwnProperty('ingredients')) {
      for (let i = 0; i < this.recipe.ingredients.length; i++) {
        recipeIngredients.push(new FormGroup({
          name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
          amount: new FormControl(this.recipe.ingredients[i].amount, [
            Validators.required,
            Validators.pattern("\\d+")
          ])
        }));
      }
    }

      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;




    }

    this.recipeForm = this.formbldr.group({
      name: [recipeName , Validators.required],
      imagePath: [recipeImageUrl , Validators.required ],
      description: [recipeContent , Validators.required],
      ingredients: recipeIngredients
    });




  }

}
