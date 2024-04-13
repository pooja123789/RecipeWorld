// pages/recipes/index.js

// pages/recipes/index.js

import { useState } from 'react';
import axios from 'axios';

const Recipes = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          query,
          apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
        },
      });
      setRecipes(response.data.results);
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
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
