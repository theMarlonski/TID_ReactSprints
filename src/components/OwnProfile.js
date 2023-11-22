
import React from "react";
import './OwnProfile.css';

function OwnProfile(props) {
  return (
    <div className="profile-container">
      <img class="profile-image" src={props.profileImage} alt="Profile Image" />
      <div class="name-and-location">
        <div className="name">{props.name}</div>
        <div className="map-and-location">
            <img className="map-icon" src={props.mapIcon} alt="map icon" />
            <div className="location">{props.location}</div>
        </div>
      </div>
    </div>
  );
}
export default OwnProfile;