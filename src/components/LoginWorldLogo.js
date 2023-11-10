import React from 'react';
import './LoginWorldLogo.css';
import LoginWorldLogo from '../Ressources/Login/LoginScreenIcon.svg';


function WorldLogo() {
  return (
    <div className="world-logo">
      <img src={LoginWorldLogo} alt ="world-logo" />
    </div>
  );
}

export default WorldLogo;
