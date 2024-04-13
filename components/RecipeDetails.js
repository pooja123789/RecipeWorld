// components/RecipeDetails.js

import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>Preparation Time: {recipe.readyInMinutes} minutes</p>
      <p>Servings: {recipe.servings}</p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
