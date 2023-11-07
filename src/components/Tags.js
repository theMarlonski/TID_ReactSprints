import React from "react";
import "./Tags.css";

function Tags(props) {
  return (
    <ul className="tags">
      {props.tags.map((tag, index) => (
        <li className="tag" key={index}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
