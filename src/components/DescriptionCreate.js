import React from 'react';
import './DescriptionCreate.css'; // Import the CSS file

function DescriptionInput({ onDescriptionChange }) {
  const handleChange = (event) => {
    const value = event.target.value;
    onDescriptionChange(value);
  };

  return (
    <div className="description-input-container">
      <textarea
        id="description"
        name="description"
        rows="4"
        cols="50"
        placeholder="Write something about your experience..."
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default DescriptionInput;
