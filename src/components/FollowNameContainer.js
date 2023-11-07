import React from 'react';
import './FollowNameContainer.css'; // You can create a CSS file for your follow section styles and import it here.
import Helle from "../Ressources/ProfilePictures/HellePicture.png";


function FollowNameContainer() {
  return (
    <div className="follow-section">
      <div className="name">
        <img src={Helle} alt="HellesPicture" />
        <p>Helle 🇳🇴</p>
      </div>
      <div className="button">
        <p>Follow</p>
      </div>
    </div>
  );
}

export default FollowNameContainer;