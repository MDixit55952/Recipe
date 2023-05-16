import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ searchQuery }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, [searchQuery]); // Update useEffect dependency to re-fetch recipes when searchQuery changes

  const fetchRecipes = async () => {
    const APP_ID = "b5cc36c0";
    const APP_KEY = "be8084bcc6f2ee6d8332525a988f1e1c";

    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits.map((hit) => hit.recipe));
    } catch (error) {
      console.log("Error fetching recipes:", error);
    }
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="recipe-list">
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.uri} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
