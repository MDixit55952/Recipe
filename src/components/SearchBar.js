import React, { useState, useEffect } from "react";
import img from "../images/search.png";
import "./SearchBar.css";
function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchIcon, setSearchIcon] = useState("");

  useEffect(() => {
    // Replace with your desired search icon image path
    const searchIconPath = "E:\react\recipesrcimages";
    setSearchIcon(searchIconPath);
  }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleChange}
      />
      <button className="search-icon" onClick={handleSearch}>
        <img src={img} alt="Search" className="search-icon-img" />
      </button>
    </div>
  );
}

export default SearchBar;
