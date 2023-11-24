import React from 'react';
import { Link } from 'react-router-dom';
import './NoResultsPopup.css';

function NoResultsPopup() {
  return (
    <div className="popup">
      <p>No results found.</p>
      <p>Please try a different search or filter.</p>
      <Link to="/filter">
        <button>Go back to the Filter</button>
      </Link>
      <Link to="/home">
        <button>Go to the Homepage</button>
      </Link>
    </div>
  );
}

export default NoResultsPopup;