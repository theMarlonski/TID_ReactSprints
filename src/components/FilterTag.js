import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FilterTag.css";

function FilterTag({ tags, heading, onSelectedItems }) {
  const [selectedIndices, setSelectedIndices] = useState(new Set());
  const navigate = useNavigate();

  const toggleTag = (index) => {
    const newIndices = new Set(selectedIndices);
    if (newIndices.has(index)) {
      newIndices.delete(index);
    } else {
      newIndices.add(index);
    }

    setSelectedIndices(newIndices);

    const selectedTags = Array.from(newIndices).map((i) => tags[i]);
    onSelectedItems(selectedTags);
  };

  const resetTags = () => {
    setSelectedIndices(new Set());
    onSelectedItems(new Set());
  };

  const addFilter = () => {
    const selectedTags = Array.from(selectedIndices).map((i) => tags[i]);
    const selectedTagsString = selectedTags.join(",");
    navigate(`/home/${selectedTagsString}`);
  };


  return (
    <>
      <h1>{heading}</h1>
      {tags.length === 0 && <p>No tags found</p>}
      <ul className="filterTags">
        {tags.map((tag, index) => (
          <li
            className={
              selectedIndices.has(index)
                ? "filterTags-tag active"
                : "filterTags-tag"
            }
            key={tag}
            onClick={() => toggleTag(index)}
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="Buttons">
        <button className="Reset" onClick={resetTags}>
          Reset
        </button>
        <button className="Add-Filter" onClick={addFilter}>
          Add filter
        </button>
      </div>
    </>
  ); 
}

export default FilterTag;