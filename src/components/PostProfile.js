import React from "react";

function Profile(props) {
  return (
    <div className="profile">
      <img src={props.profileImage} alt="Profile Image" />
      <div className="name">{props.name}</div>
    </div>
  );
}

export default Profile;
