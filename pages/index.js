// // pages/index.js

// import { useRouter } from 'next/router';

// const Home = () => {
//   const router = useRouter();

//   const handleSearchRecipes = () => {
//     router.push('/recipes');
//   };

//   return (
//     <div>
//       <h1>Welcome to Recipe Search App</h1>
//       <button onClick={handleSearchRecipes}>Search Recipes</button>
//     </div>
//   );
// };

// export default Home;

// pages/index.js

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
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMdar45CBhHjrJLWlLhF326IpOp-n2281Xg&s')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Welcome to Recipe Search App</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded cursor-pointer"
          onClick={handleSearchRecipes}
        >
          Search Recipes
        </button>
      </div>
    </div>
  );
};

export default Home;

