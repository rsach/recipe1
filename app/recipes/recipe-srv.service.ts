import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";
import {Headers, Http, Response} from "@angular/http";

@Injectable()
export class RecipeSrvService {

  recipesChanged = new EventEmitter<Recipe[]>();
  private  recipes:Recipe [] = [
    new Recipe('Schnitzel','Very tasty','https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIcEoTsY1fdF6dfE05dxhanso8zbNJAt1D3b74M6QvhSdKtfEHmA',[
      new Ingredient('French Fries' , 1),
      new Ingredient('Pork MEat' , 2)
    ]),
    new Recipe('Summer Salad' , 'Okayish','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRW_scZ3DNU6oNzqZyViaJiiHWLF0v4BVH2QMKLDP2BZtn8qsNUVQ',[])

  ];
  constructor(private http:Http) { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id:number){
    return this.recipes[id];
  }

  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe:Recipe,newRecipe:Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)]=newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put('https://awesome-ca7e5.firebaseio.com/recipes.json',body,{headers: headers});


  }

  getData(){
    return this.http.get('https://awesome-ca7e5.firebaseio.com/recipes.json')
      .map((response:Response) => response.json())
      .subscribe(
        (data:Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      )

  }
}
