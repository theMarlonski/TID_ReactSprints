import React from 'react';
import './DescriptionCreate.css'; // Import the CSS file

function DescriptionInput() {
  return (
    <div className="description-input-container">
      <textarea
        id="description"
        name="description"
        rows="4"
        cols="50"
        placeholder="Write something about your expirience..."
      ></textarea>
    </div>
  );
}

export default DescriptionInput;
