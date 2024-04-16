// pages/recipes/index.js

// pages/recipes/index.js

import { useState } from 'react';
import axios from 'axios';
import RecipeList from '@/components/RecipeList';

// const Recipes = () => {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);

  
//   const handleSearch = async () => {
//     try {
//       console.log('Searching recipes with query:', query);
//       const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
//         params: {
//           query,
//           apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
//         },
//       });
//       setRecipes(response.data.results);
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//     }
//   };
  

//   return (
//     <div>
//       <h1>Recipe Search</h1>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter recipe keywords..."
//         style={{
//           color: query ? 'black' : 'gray', // Change text color based on input value
//           fontSize: '16px', // Adjust font size if needed
//           padding: '10px', // Add padding for better visibility
//           border: '1px solid #ccc', // Add border for better visibility
//           borderRadius: '5px', // Add rounded corners
//           width: '300px', // Adjust width as needed
//         }}
//       />
//       <button 
//       style={{
//         backgroundColor: 'blue',
//         color: 'white',
//         padding: '7px 10px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//       }}
      
//       onClick={handleSearch}>Search</button>

//       <div>
//         {recipes.map((recipe) => (
//           <div key={recipe.id}>
//             <h3>{recipe.title}</h3>
//             <img src={recipe.image} alt={recipe.title} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Recipes;


const Recipes = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          query,
          number: 6, // Request at least 6 recipes (adjust as needed)
          apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
        },
      });
      setRecipes(response.data.results);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter recipe keywords..."
        style={{
                    color: query ? 'black' : 'gray', // Change text color based on input value
                    fontSize: '16px', // Adjust font size if needed
                    padding: '10px', // Add padding for better visibility
                    border: '1px solid #ccc', // Add border for better visibility
                    borderRadius: '5px', // Add rounded corners
                    width: '300px', // Adjust width as needed
                  }}
      />
      <button 
      style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
      
      onClick={handleSearch}>Search</button>

      {searched && (
        <div>
          <p style={{ color: 'red', fontWeight: 'bold' }}>
            Showing results for: <em>{query}</em>
          </p>
          <RecipeList recipes={recipes} />
        </div>
      )}
    </div>
  );
};

export default Recipes;
