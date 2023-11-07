
import React from "react";
import './UserProfile.css';

function UserProfile(props) {
  return (
    <div className="profileContainer">
      <img class="profileImage" src={props.profileImage} alt="Profile Image" />
      <div>
        <div className="name">{props.name}</div>
        <div className="locationAndFollow">
            <img className="mapIcon" src={props.mapIcon} alt="map icon" />
            <div className="location">{props.location}</div>
            <button className="buttonStyle">
              <img src={props.arrow} alt="Icon" className="buttonIcon" />
              {props.text}
            </button>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;