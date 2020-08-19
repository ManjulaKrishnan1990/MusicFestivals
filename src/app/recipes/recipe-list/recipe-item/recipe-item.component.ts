import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipes } from './../../recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe : Recipes;
@Output() recipeSelected = new EventEmitter<void>();
isDisplay: boolean = false;
value = 5;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  selectedRecipe() {
    this.recipeService.setSelctedRecipe.emit(this.recipe)
    // this.recipeSelected.emit();
    // this.isDisplay = true;
  }

}
