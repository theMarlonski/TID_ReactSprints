
import React from "react";
import './UserProfile.css';

function UserProfile(props) {
  return (
    <div className="profile-container">
      <img class="profile-image" src={props.profileImage} alt="Profile Image" />
      <div>
        <div className="name">{props.name}</div>
        <div className="location-and-follow">
            <img className="map-icon" src={props.mapIcon} alt="map icon" />
            <div className="location">{props.location}</div>
            <button className="button-style">
              <img src={props.arrow} alt="Icon" className="button-icon" />
              {props.text}
            </button>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;