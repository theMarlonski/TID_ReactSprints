import React from "react";
import UsersImage from "./UserOwnPostImage.js";
import Tags from "./Tags";
import "./UserOwnPost.css"; 
import SlideBar from "./SlideBar.js";

function UsersOwnPost(props) {
  return (
    <div className="post-container">
        <UsersImage usersImage={props.usersImage} postText={props.postText}/>
        <Tags tags={props.tags} />
        <div className="post-line"></div>
        <SlideBar/> {/* slidebar should be placed here, I think */}
    </div>
  );
}

export default UsersOwnPost;
