import React from "react";
import { Link } from "react-router-dom";
import Profile from "./HomePostProfile";
import Image from "./HomePostImage";
import Tags from "./Tags";
import "./HomePost.css"; 

function HomePost(props) {
  return (
    <div className="post-container">
      <Profile profileImage={props.profileImage} name={props.name} />
      <Link to={`/post/${props.postId}`} state={{ detailedPostImage: props.postImage, 
                                                  tags: props.tags, 
                                                  name:props.name, 
                                                  profileImage:props.profileImage,
                                                  postId: props.postId }}>
        <Image postImage={props.postImage} flag={props.flag} />
      </Link>
      <Tags tags={props.tags} />
    </div>
  );
}

export default HomePost;
