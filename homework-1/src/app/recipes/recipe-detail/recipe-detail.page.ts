import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.module';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;
  
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if( !paraMap.has('recipeId')){
        //redirect
        return;
      }
      const recipeId = paraMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.loadedRecipe.id);
  }
}
