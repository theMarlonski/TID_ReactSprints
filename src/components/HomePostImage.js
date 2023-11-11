import React from "react";
import './HomePostImage.css';

function Image(props) {
  return (
  <div className="post-image">
    <img src={props.postImage} alt="Post Image" />
    <div className="flag">{props.flag}</div>
  </div>
    )};
export default Image;