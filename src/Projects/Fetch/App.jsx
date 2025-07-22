import RecipeCard from "./RecipeCard";
import { useState } from "react";

const App = () => {
  const [Recipe, SetRecipe] = useState(null);

  const Fetchrecipe = () => {
    fetch(
      "https://api.react-formula.com/learning-api/demos/using-fetch/recipes"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        SetRecipe(data);
      })
      .catch((error) => {
        console.log("There is an error", error);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {Recipe !== null ? <RecipeCard recipe={Recipe} /> : null}

      <button
        className="bg-blue-400 text-white rounded-full py-2 px-4 mt-4"
        onClick={Fetchrecipe}
      >
        Get random recipe
      </button>
    </div>
  );
};

export default App;
