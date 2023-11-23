import React from "react";

import './UserInfobox.css'

function UserProfile(props) {
  return (
    <div className="container-user">
      <div className="user">
        <img src={props.profileImage} alt="Profile Image" />
          <div className="name">{props.name}
        </div>
      </div>
    </div>
  );
}
export default UserProfile;