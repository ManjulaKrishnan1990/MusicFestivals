import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.model';
import { LoggingService } from './../services/logging.service'
import { RecipeService } from '../services/recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
selectedRecipe: Recipes;

constructor(private loggingService: LoggingService, private recipeService: RecipeService) {}

ngOnInit() {
    this.recipeService.setSelctedRecipe.subscribe((recipe: Recipes)=> {
        this.selectedRecipe = recipe;
    })
}

    // selectedRecipeDetails(recipe) {
    //     this.loggingService.logStatusChange(recipe.name)
    //     this.selectedRecipe = recipe;
    // }



}