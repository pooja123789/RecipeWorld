

import React from 'react';
import { useRouter } from 'next/router';

const RecipeList = ({ recipes }) => {
  const router = useRouter();

  const handleRecipeClick = (recipeId) => {
    router.push(`/recipes/${recipeId}`);
  };
  
  
  return (
    
    <div>
      
      {recipes.map((recipe) => (
         <div key={recipe.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} style={{ width: '100%', maxWidth: '300px', marginBottom: '10px' }} />
          <p>
            
            <button
              style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleRecipeClick(recipe.id)}
            >
              View Details
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;


