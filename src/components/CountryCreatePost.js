import React, { useState, useRef, useEffect } from 'react';
import './CountryCreatePost.css'; // Import your CSS file
import { countries } from './ConstCountries.js'; // Import the list of countries

const CountryCreatePost = ({ specialTag, handleSpecialTagChange, onCountryChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isListVisible, setListVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const inputRef = useRef(null);

  useEffect(() => {
    // Close the list when clicking outside the search container
    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setListVisible(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleInputChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setListVisible(term.length > 0); // Show the list if the search term is not empty
  };

  const handleCountryClick = (country) => {
    // Add the selected country to the predefined tags
    const updatedTags = [...specialTag, country];

    // Set the selected country in the search field
    setSearchTerm(country);
    setSelectedCountry(country);

    // Hide the list
    setListVisible(false);

    // Update the parent component's state with the new tags
    handleSpecialTagChange(updatedTags);
    onCountryChange(country);
  };

  const filteredCountries = countries.filter(countries =>
    countries.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="search-container" ref={inputRef}>
      {/* Search input field */}
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onClick={() => setListVisible(true)} // Show the list on click
      />

      {/* List of filtered countries (conditionally rendered) */}
      {isListVisible && (
        <ul className="country-list">
          {filteredCountries.map((country, index) => (
            <li
              key={index}
              className={`list-country ${selectedCountry === country ? 'selected' : ''}`}
              onClick={() => handleCountryClick(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryCreatePost;