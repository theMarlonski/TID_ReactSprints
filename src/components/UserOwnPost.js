import React from "react";
import UsersImage from "./UserOwnPostImage.js";
import { Link } from "react-router-dom";
import Tags from "./Tags";
import "./UserOwnPost.css"; 

function UsersOwnPost(props) {
  const postId = props.postId;

  return (
    <div className="post-container">
        <Link to={`/post/${props.postId}`} state={{ detailedPostImage: props.usersImage, 
                                                  tags: props.tags, 
                                                  name:props.name, 
                                                  profileImage:props.profileImage,
                                                  postId: props.postId, 
                                                  profileId: props.profileId}}>
          <UsersImage usersImage={props.usersImage} postText={props.postText}/>
        </Link>
        <Tags tags={props.tags} />
        <div className="post-line"></div>
    </div>
  );
}

export default UsersOwnPost;
