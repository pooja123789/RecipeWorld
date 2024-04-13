// components/RecipeList.js

// components/RecipeList.js

// components/RecipeList.js

// components/RecipeList.js

import React from 'react';
import { useRouter } from 'next/router';

const RecipeList = ({ recipes }) => {
  const router = useRouter();

  const handleRecipeClick = (recipeId) => {
    // Navigate to the recipe details page dynamically
    router.push(`/recipes/${recipeId}`);
  };

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} />
          <p>
            <button onClick={() => handleRecipeClick(recipe.id)}>View Details</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
