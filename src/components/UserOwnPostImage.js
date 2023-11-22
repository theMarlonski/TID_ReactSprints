import React from "react";
import SlideBar from "./SlideBar";
import './UsersOwnPostImage.css';
import './PostDetail.css';

function UsersImage(props) {
  return (
    <div className="post-image-container">
      <img src={props.usersImage} alt="Post Image" className="post-image" />
      <div className="text">{props.postText}</div>
    </div>
    
  );
}

export default UsersImage;
