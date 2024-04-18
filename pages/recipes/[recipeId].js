
import { useRouter } from 'next/router';
import RecipeDetails from '@/components/RecipeDetails';
import axios from 'axios';
import { useState ,useEffect } from 'react';

const RecipeDetailsPage = () => {
  const router = useRouter();
  const { recipeId } = router.query;
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

  // return (
  //   <div>
  //     <h1>Recipe Details</h1>
  //     <p>Recipe ID: {recipeId}</p>
  //     {recipeDetails && <RecipeDetails recipe={recipeDetails} />}
  //   </div>
  // );
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg?auto=compress&cs=tinysrgb&w=600)` }}>
      <div className="max-w-4xl mx-auto p-4 bg-blue-200 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">Recipe Details</h1>
        {recipeDetails && <RecipeDetails recipe={recipeDetails} />}
      </div>
    </div>
  );
};

export default RecipeDetailsPage;

