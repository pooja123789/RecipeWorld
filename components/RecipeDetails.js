
// // pages/recipes/[recipeId].js

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const RecipeDetails = () => {
//   const router = useRouter();
//   const { recipeId } = router.query;
//   const [recipeDetails, setRecipeDetails] = useState(null);

//   useEffect(() => {
//     console.log('Recipe ID:', recipeId);
//     const fetchRecipeDetails = async () => {
//       try {
//         const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false`, {
//           params: {
//             apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
//           },
//         });
//         setRecipeDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching recipe details:', error);
//       }
//     };

//     if (recipeId) {
//       fetchRecipeDetails();
//     }
//   }, [recipeId]);

//   if (!recipeId) {
//     return <div>Loading...</div>; // Display loading state while fetching data
//   }

//   return (
//     <div>
//       {recipeDetails ? (
//         <div>
//           <h1>{recipeDetails.title}</h1>
//           <img src={recipeDetails.image} alt={recipeDetails.title} style={{ maxWidth: '100%' }} />

//           <h2>Ingredients:</h2>
//           <ul>
//             {recipeDetails.extendedIngredients.map((ingredient) => (
//               <li key={ingredient.id}>{ingredient.original}</li>
//             ))}
//           </ul>

//           <h2>Instructions:</h2>
//           <ol>
//             {recipeDetails.analyzedInstructions[0]?.steps.map((step) => (
//               <li key={step.number}>{step.step}</li>
//             ))}
//           </ol>
//         </div>
//       ) : (
//         <div>No recipe details found.</div>
//       )}
//     </div>
//   );
// };

// export default RecipeDetails;


const RecipeDetails = () => {
  const router = useRouter();
  const recipeId = '123'; // Hardcoded recipeId for testing
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

    fetchRecipeDetails(); // Fetch recipe details with hardcoded recipeId
  }, []); // Use empty dependency array to run the effect only once

  // Render recipe details based on the fetched data
  return (
    <div>
      {/* Conditional rendering based on recipeDetails state */}
      {recipeDetails ? (
        <div>
          <h1>{recipeDetails.title}</h1>
          <img src={recipeDetails.image} alt={recipeDetails.title} style={{ maxWidth: '100%' }} />

          <h2>Ingredients:</h2>
          <ul>
            {recipeDetails.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>

          <h2>Instructions:</h2>
          <ol>
            {recipeDetails.analyzedInstructions[0]?.steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ol>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};



