// UserProfile.js

import React from 'react';
import FollowButton from './followButton'; // Adjust the path based on your project structure
import './UserProfile.css';

function UserProfile(props) {
  return (
    <div className="profile-container">
      <img className="profile-image" src={props.profileImage} alt="Profile Image" />
      <div>
        <div className="name">{props.name}</div>
        <div className="location-and-follow">
          <img className="map-icon" src={props.mapIcon} alt="map icon" />
          <div className="location">{props.location}</div>
          <FollowButton />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
