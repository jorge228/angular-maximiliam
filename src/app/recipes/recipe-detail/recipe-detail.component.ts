import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeSercive: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.recipeSercive.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  
}
