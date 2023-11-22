import React from "react";
import Profile from "./HomePostProfile";
import Image from "./HomePostImage";
import Tags from "./Tags";
import "./HomePost.css"; 

function HomePost(props) {
  return (
    <div className="post-container">
      <Profile profileImage={props.profileImage} name={props.name} />
      <Image postImage={props.postImage} flag={props.flag} />
      <Tags tags={props.tags} />
    </div>
  );
}

export default HomePost;
