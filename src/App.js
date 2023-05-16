import React, { useState } from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";

import pizzaImage from "./images/food1.jpg";
import burgerImage from "./images/food2.jpg";
import pastaImage from "./images/food3.jpg";
import newImage from "./images/food4.jpg";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <h1 className="heading">Slurpy Tongue</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="food-images">
        <img src={pizzaImage} alt="Pizza" />
        <img src={burgerImage} alt="Burger" />
        <img src={pastaImage} alt="Pasta" />
        <img src={newImage} alt="New Recipe" />
      </div>
      <RecipeList searchQuery={searchQuery} />
      <footer className="footer">
        Looking Delicious! Want to cook, search for the recipe above.
      </footer>
    </div>
  );
}

export default App;
