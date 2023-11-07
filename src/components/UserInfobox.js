import React from "react";

import './User.css'

function UserProfile(props) {
  return (
    <div class="containerUser">
    <div class="user">
      <img src={props.profileImage} alt="Profile Image" />
      <div className="name">{props.name}</div>
    </div>
    </div>
  );
}
export default UserProfile;