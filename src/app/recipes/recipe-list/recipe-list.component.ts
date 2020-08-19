import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipes } from './../recipes.model';
import { RecipeService } from './../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  

  @Output() selectedRecipeDetail = new EventEmitter<Recipes>();
  recipes: Recipes[];
   // recipes: Recipes[] = [new Recipes('Dilpasand', 'Its a Indian Sweet Dessert', 'http://www.madhurasrecipe.com/media/dil_pasand_3.jpg'),
   // new Recipes('Egg Puff', 'Its a Indian Spicy Dessert', 'https://www.bbcgoodfood.com/sites/default/files/styles/bbcgf_recipe/public/user-recipe/puffs%20new%202%20_4.jpg?itok=9eUO3E4q')]
  constructor(private recipeService: RecipeService) { }


  // setElectedRecipe(selectedRecipe) {
  // this.selectedRecipeDetail.emit(selectedRecipe);
  // }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }


}
