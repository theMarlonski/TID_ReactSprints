import React from "react";
import "./detailedPostTags.css";

function DetailedTags(props) {
  return (
    <ul className="tagsDetailed">
      {props.tags.map((tag, index) => (
        <li className="tag" key={index}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default DetailedTags;