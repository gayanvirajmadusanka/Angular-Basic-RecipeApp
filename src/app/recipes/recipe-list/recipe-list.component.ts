import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a Test',
      'E:ProjectsAngular-BasicAngular-Basic-RecipeAppsrcImagesMoroccan-Chickpea-Bowls-Recipe.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a Test',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.immediate.co.uk%2Fproduction%2Fvolatile%2Fsites%2F30%2F2020%2F08%2Fchorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg%3Fquality%3D90%26resize%3D960%2C872&imgrefurl=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes&tbnid=dOfrHuMDgw7-9M&vet=12ahUKEwjQl5Hrr6zsAhURYCsKHbiuDzkQMygAegUIARD1AQ..i&docid=0MYkDl3kvGAUTM&w=960&h=872&q=recipe%20images&client=firefox-b-d&ved=2ahUKEwjQl5Hrr6zsAhURYCsKHbiuDzkQMygAegUIARD1AQ'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
