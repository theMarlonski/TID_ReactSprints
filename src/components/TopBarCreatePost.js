import React from 'react';
import './TopBarCreatePost.css'; // You can create a CSS file for your top bar styles and import it here.
import Back from "../Ressources/Icons/Back.svg";

function TopBarCreatePost(props) {
  return (
    <div className="top-bar">
    <div className="icon-container">
      <div className="icon"><img src={Back} alt="ArrowBack" /></div>
    </div>
    <div className="share-button">
      <button>SHARE</button>
    </div>
  </div>
  );
}

export default TopBarCreatePost;