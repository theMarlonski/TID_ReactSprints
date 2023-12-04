import React from 'react';
import { Link } from 'react-router-dom'; 
import './FollowNameContainer.css'; 
import Helle from '../Ressources/ProfilePictures/HellePicture.png';

function FollowNameContainer(props) {
  return (
    <div className="follow-section">
      <div className="name">
          <img src={props.ProfilePost} alt="ProfilePostDetail" />
        <p>{props.ProfileName}</p>
      </div>
      <div className="button">
        <p>Follow</p>
      </div>
    </div>
  );
}

export default FollowNameContainer;
