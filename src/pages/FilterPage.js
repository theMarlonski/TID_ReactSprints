/*filepage.js*/
import React from "react";
import FilterTag from "../components/FilterTag"; // Opdateret import
import "./FilterPage.css"; // Opdateret import
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Icon from '../Ressources/Icons/NotificationBell.svg';
import { ReactComponent as SearchIcon } from "../Ressources/Icons/SearchIcon.svg";
import SearchBar from "../components/SearchBar.js";

function FilterPage() {
  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
  }
  let tags = [
    "Outdoor",
    "City trips",
    "Backpacking",
    "Ski Trips",
    "Wellness",
    "Yoga",
    "Food & Drinks",
    "Party",
    "Hiking",
    "Adventure",
    "Countryside",
    "Travel",
    "Nature",
    "Mountains",
    "Fjords",
    "City",
    "Culture",
    "History"
  ];

  const handleSelectedItems = (tag) => {
    console.log(tag);
  };

  return (
    <div>
      <Header IconPath={Icon} />
      <div className="content-container">
        <div className="SearchBar">
          <SearchBar
            onSearch={handleSearch}
            heading="Location"
            />
             <div className="Filter"></div>
            <FilterTag
              tags={tags}
              heading="Filter"
              onSelectedItems={handleSelectedItems}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FilterPage;

