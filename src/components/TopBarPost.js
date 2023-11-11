import React from 'react';
import './TopBarPost.css'; // You can create a CSS file for your top bar styles and import it here.
import Back from "../Ressources/Icons/Back.svg";

function TopBarPost(props) {
  return (
    <div className="top-bar">
    <div className="icon-container">
      <div className="icon"><img src={Back} alt="ArrowBack" /></div>
    </div>
    <div className="box">
      <img src={props.PostCountryFlag} alt="Post Flag" />
      <p>{props.PostCountry}</p>
    </div>
  </div>
  );
}

export default TopBarPost;