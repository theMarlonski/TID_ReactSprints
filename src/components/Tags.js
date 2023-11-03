import React from "react";
import "./Tags.css";

function Tags(props) {
  return (
    <div className="tags">
      {props.tags.map((tag, index) => (
        <div className="tag" key={index}>
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tags;
