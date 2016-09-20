import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list-add',
  template:  `
<div class="row">
  <div class="col-xs-12">

    <form id="shopping-list-add" (ngSubmit) = "onSubmit(f.value)" #f = "ngForm">
      <div class="row">
        <div class="col-sm-5 form-group">
          <label for="item-name">Name</label>



          <input type="text" id="item-name" required class="form-control" [ngModel]="item.name" name="name">

        </div>

        <div class="col-sm-2 form-group">
          <label for="item-amount">Amount</label>
          <input type="text" id="item-amount" required class="form-control" [ngModel]="item.amount" name="amount">
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button class="btn btn-success" type="submit" *ngIf="isAdd" [disabled] = "!f.valid">Add</button>
            <button class="btn btn-success" type="submit" *ngIf="!isAdd" [disabled] = "!f.valid">Save</button>
            <button class="btn btn-danger" type="submit" *ngIf="!isAdd" [disabled] = "!f.valid" (click)="onDelete()">Delete Item</button>
            <button class="btn btn-primary" type="submit" *ngIf="!isAdd" [disabled] = "!f.valid" (click)="onClear()">Clear</button>

          </div>
        </div>

      </div>
    </form>
  </div>
</div>

  ` 
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item:Ingredient;
  isAdd = true;
  @Output() cleared = new EventEmitter();

  constructor(private sls:ShoppingListService) { }

  ngOnChanges(changes){
    if(changes.item.currentValue === null){
      this.isAdd=true;
      this.item={name: null,amount:null};
    }else{
      this.isAdd=false;
    }

  }



  onSubmit(ingredient:Ingredient){
    const newIngredient = new Ingredient(ingredient.name,ingredient.amount);
    if(!this.isAdd){
          this.sls.editItem(this.item, newIngredient);
    }else{
      this.item = new Ingredient(ingredient.name,ingredient.amount);
      this.sls.addItem(this.item);
    }
  }


  onDelete(){
    this.sls.deleteItem(this.item);
    this.onClear();

  }

  onClear(){
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
