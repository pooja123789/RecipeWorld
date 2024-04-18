

import { useState } from 'react';
import axios from 'axios';
import RecipeList from '@/components/RecipeList';

const Recipes = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          query,
          number: 6, 
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
    
    <div style={{
      backgroundImage: `url('https://i.imgflip.com/4worl7.jpg')`, // Specify the URL of your background image
        backgroundSize: 'contain', // Scale the image to fit within the container
        backgroundPosition: 'center', // Center the image horizontally and vertically
        minHeight: '100vh', // Minimum height to cover the viewport
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
      
      <h1>Recipe Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter recipe keywords..."
        
        style={{
                    color: query ? 'black' : 'gray', 
                    fontSize: '16px', 
                    padding: '10px', 
                    border: '1px solid #ccc', 
                    borderRadius: '5px', 
                    width: '300px', 
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
