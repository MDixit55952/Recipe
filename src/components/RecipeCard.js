import React from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img className="recipe-image" src={recipe.image} alt={recipe.label} />
      <div className="recipe-details">
        <h2 className="recipe-title">{recipe.label}</h2>
        <p className="recipe-source">{recipe.source}</p>
        <ul className="recipe-ingredients">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
        <a
          className="recipe-link"
          href={recipe.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
