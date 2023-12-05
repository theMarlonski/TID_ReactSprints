import React from "react";
import UsersImage from "./UserOwnPostImage.js";
import Tags from "./Tags";
import "./UserOwnPost.css"; 

function UsersOwnPost(props) {
  return (
    <div className="post-container">
        <UsersImage usersImage={props.usersImage} postText={props.postText}/>
        <Tags tags={props.tags} />
        <div className="post-line"></div>
    </div>
  );
}

export default UsersOwnPost;
