import React from "react";
import Profile from "./HomePostProfile";
import Image from "./HomePostImage";
import Tags from "./Tags";
import "./HomePost.css";

function Post(props) {
  return (
    <div className="post-container">
      <div className="post">
        <Profile profileImage={props.profileImage} name={props.name} />
        <Image postImage={props.postImage} flag={props.flag}/>
        <Tags tags={props.tags} />
      </div>
    </div>
  );
}

export default Post;
