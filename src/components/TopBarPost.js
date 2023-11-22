import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './TopBarPost.css';
import Back from "../Ressources/Icons/Back.svg";

function TopBarPost(props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="top-bar">
      <div className="icon-container" onClick={handleBack}>
        <div className="icon"><img src={Back} alt="ArrowBack" /></div>
      </div>
      <div className="box">
        <p>{props.PostCountry}</p>
      </div>
    </div>
  );
}

export default TopBarPost;
