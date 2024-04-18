



import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeDetails = () => {
  const router = useRouter();
  const { recipeId } = router.query; // Retrieve recipeId from router query
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
          params: {
            apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
          },
        });
        setRecipeDetails(response.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    if (recipeId) {
      fetchRecipeDetails();
    }
  }, [recipeId]);

  // Render recipe details based on the fetched data
  return (
    <div>
      {/* Conditional rendering based on recipeDetails state */}
      {recipeDetails ? (
        <div>
          <h1 className="text-3xl font-bold text-pink-600 mb-6" >{recipeDetails.title}</h1>
          <img src={recipeDetails.image} alt={recipeDetails.title} style={{ maxWidth: '100%' }} />

          <h2 className="text-2xl font-bold text-pink-600 mb-6">Ingredients:</h2>
          <ul className="text-1xl text-orange-600 mb-6">
            {recipeDetails.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-pink-600 mb-6">Instructions:</h2>
          <ol className="text-1xl text-orange-600 mb-6">
            {recipeDetails.analyzedInstructions[0]?.steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ol>
        </div>
      ) : (
        <div>Loading... Magic is about to begin</div>
      )}
    </div>
  );
};

export default RecipeDetails;

