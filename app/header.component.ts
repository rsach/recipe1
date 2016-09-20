import { Component } from '@angular/core';
import {RecipeSrvService} from "./recipes/recipe-srv.service";

@Component({
  selector: 'app-header',
  template: `
          <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <a class="navbar-brand" [routerLink] = "['/']">Recipe Book</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li routerLinkActive="active"><a [routerLink] = "['/recipes']">Recipes </a></li>
        <li routerLinkActive="active"><a [routerLink] = "['./shopping-list']">Shopping List</a></li>

      </ul>

      <ul class="nav navbar-nav navbar-right">

        <li class="dropdown" appdropdown>
          <a  class="dropdown-toggle"  role="button" aria-haspopup="true" aria-expanded="false">Recipe Management <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a (click)="onStore()" style="cursor: pointer">Store Recipe</a></li>
            <li><a (click)="onFetch()" style="cursor: pointer">Retrieve Recipes</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>


  `
})
export class HeaderComponent {

  constructor(private recipeSrv:RecipeSrvService) {

  }

  onStore(){
    this.recipeSrv.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  onFetch(){
    this.recipeSrv.getData();

  }


}