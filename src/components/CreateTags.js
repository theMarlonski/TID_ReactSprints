import React, { useState } from 'react';
import './CreateTags.css';

function CreateTags(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      // Add the new tag to the parent component's state
      props.onSpecialTagChange([...props.tags, inputValue.trim()]);
      // Clear the input field
      setInputValue('');
    }
  };

  return (
    <ul className="create-tags">
      {props.predefinedTags.map((tag, index) => (
        <li className="tag" key={index}>
          {tag}
        </li>
      ))}
      {props.tags.map((tag, index) => (
        <li className="tag user-defined" key={index}>
          {tag}
          <span className="delete-tag" onClick={() => props.onSpecialTagChange(props.tags.filter((_, i) => i !== index))}>
            &times;
          </span>
        </li>
      ))}
      <li className="tag special-tag">
        {/* Input field for the special tag */}
        <input
          type="text"
          placeholder="Create tag"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
        />
      </li>
    </ul>
  );
}

export default CreateTags;