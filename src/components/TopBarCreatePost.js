import React from 'react';
import './TopBarCreatePost.css'; 
import Back from '../Ressources/Icons/Back.svg';

function TopBarCreatePost({ onShareClick }) {
  return (
    <div className="top-bar">
      <div className="icon-container">
        <div className="icon">
          <img src={Back} alt="ArrowBack" />
        </div>
      </div>
      <div className="share-button">
        <button onClick={onShareClick}>SHARE</button>
      </div>
    </div>
  );
}

export default TopBarCreatePost;