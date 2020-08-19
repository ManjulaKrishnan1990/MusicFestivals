import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../recipes.model';
import { Ingradients } from 'src/app/shared/ingradients.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe : Recipes;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  addRecipeToShoppingList() {
    this.recipeService.addRecipestoShoppingList(this.recipe.ingradients);
  }

}
