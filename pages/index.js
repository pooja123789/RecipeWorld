

import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const handleSearchRecipes = () => {
    router.push('/recipes');
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: "url('data:image/jpeg;base64,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')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-6">Welcome to the World of Recipes </h1>
<p className="text-1xl font-bold text-black-900 mb-6">
          Explore and discover delicious recipes from around the world with our easy-to-use recipe search app.
          
          Simply enter your favorite ingredients or dish name and find the exciting recipes.
          
        </p>
       <button
          className="bg-blue-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded cursor-pointer"
          onClick={handleSearchRecipes}
        >
          Search Recipes
        </button>
        {/* //<h1 className="text-1xl font-bold text-green-600 mb-6">Our goal is to create a platform where users can effortlessly discover, explore, and save delicious recipes based on their preferences.</h1> */}
      </div>
    </div>
  );
};

export default Home;


