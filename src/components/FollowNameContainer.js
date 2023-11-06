import React from 'react';
import './FollowNameContainer.css'; // You can create a CSS file for your follow section styles and import it here.
import Flag from "../Ressources/Icons/norwegian-flag.png";

function FollowNameContainer() {
  return (
    <div className="follow-section">
      <div className="name">
        <p>Helle</p>
        <img src={Flag} alt="NorwegianFlag" />
      </div>
      <div className="button">
        <p>Follow</p>
      </div>
    </div>
  );
}

export default FollowNameContainer;