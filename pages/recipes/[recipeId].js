

// export default Recipe;
import React from 'react';
import axios from 'axios';
import RecipeDetails from '@/components/RecipeDetails';
import { useRouter } from 'next/router';

const RecipeDetailsPage = () => {
    const router = useRouter();
    const { recipeId } = router.query;
  
    // Fetch recipe details using `recipeId` (e.g., from API or local data)
  
    return (
      <div>
        <h1>Recipe Details</h1>
        <p>Recipe ID: {recipeId}</p>
        {/* Display more details about the recipe */}
        
      </div>
    );
  };
  
  export default RecipeDetailsPage;
