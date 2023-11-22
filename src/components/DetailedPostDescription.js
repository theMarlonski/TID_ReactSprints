import React from 'react';
import './DetailedPostDescription.css'; // You can create a CSS file for your top bar styles and import it here.

function DetailedPostDescription(props) {
  return (
    <div className="description-section">
        <p>{props.PostDescription}</p>
    </div>
  );
}

export default DetailedPostDescription;