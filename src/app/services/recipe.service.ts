import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipes } from './../recipes/recipes.model';
import { Ingradients } from '../shared/ingradients.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
setSelctedRecipe =  new EventEmitter<Recipes>();
  recipes: Recipes[] = [new Recipes('Dilpasand', 'Its a Indian Sweet Dessert', 'http://www.madhurasrecipe.com/media/dil_pasand_3.jpg', 
  [
    new Ingradients('Meat', 2),
    new Ingradients('Chilli', 10),
]),
  new Recipes('Egg Puff', 'Its a Indian Spicy Dessert', 'https://www.bbcgoodfood.com/sites/default/files/styles/bbcgf_recipe/public/user-recipe/puffs%20new%202%20_4.jpg?itok=9eUO3E4q',
  [
    new Ingradients('Fish', 2),
    new Ingradients('Cheese', 5),
])]

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); //  gets the new recuipe array.
  }

  addRecipestoShoppingList(ingradients: Ingradients[]) {
    this.shoppingListService.addIngradients(ingradients);
   
  }

  // setSelectedRecipe(selectedRecipe: Recipes) {
  //   return this.setSelctedRecipe.emit(selectedRecipe);
  // }
}
