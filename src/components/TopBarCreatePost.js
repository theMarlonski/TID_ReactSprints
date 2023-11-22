import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopBarCreatePost.css'; 
import Back from '../Ressources/Icons/Back.svg';

function TopBarCreatePost({ onShareClick }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="top-bar">
      <div className="icon-container" onClick={handleBack}>
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
