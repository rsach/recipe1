import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  template: `
<div class="row">
  <div class="col-xs-10">
    <hr>
    <app-shopping-list-add [item]="selectedItem" (cleared)="onCleared()"></app-shopping-list-add>
    <ul class="list-group">
      <a class="list-group-item" style="..." *ngFor="let item of items" (click)="onSelectItem(item)" >{{item.name}} ({{item.amount}})</a>
    </ul>
  </div>
</div>


  ` 
})
export class ShoppingListComponent implements OnInit {

  items:Ingredient [] = [];
  selectedItem:Ingredient = null;
  constructor(private sls:ShoppingListService) {

  }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onSelectItem(item:Ingredient){
    this.selectedItem = item;
  }

  onCleared(){
    this.selectedItem=null;
  }

}
