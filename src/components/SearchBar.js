import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";
import Search from "../Ressources/Icons/SearchIcon.svg";

const SearchBar = ({ onSearch, heading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Call the onSearch callback with the search term
    onSearch(searchTerm);
  };

  return (
    <div>
      <h1>{heading}</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {/* Link to the homepage with the search term as a tag */}
        <Link to={`/home/${searchTerm}`}>
  <button className="search-button" onClick={handleSearch}>
    <div className="footer-icon"><img src={Search} alt="SearchIcon" /></div>
  </button>
</Link>
      </div>
    </div>
  );
};

export default SearchBar;