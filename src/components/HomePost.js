import React from "react";
import Profile from "./PostProfile";
import Image from "./PostImage";
import FlagIcon from "./PostFlag";
import Tags from "./Tags";

function Post(props) {
  return (
    <div className="post">
      <Profile profileImage={props.profileImage} name={props.name} />
      <Image postImage={props.postImage} />
      <FlagIcon flagIcon={props.flagIcon} />
      <Tags tags={props.tags} />
    </div>
  );
}

export default Post;
