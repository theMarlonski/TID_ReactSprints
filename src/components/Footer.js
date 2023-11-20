import React from 'react';
import './Footer.css';
import Home from '../Ressources/Icons/HomeIcon.svg';
import Create from '../Ressources/Icons/CreatePost.svg';
import Search from '../Ressources/Icons/SearchIcon.svg';
import ProfilePic from '../Ressources/ProfilePictures/OwnProfilePicture.png';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate(); // Add this line to use the navigate function

  const handleCreatePostClick = () => {
    navigate('/create-post'); // Navigate to the create post page
  };

  return (
    <footer className="footer">
      <div className="footer-icon">
        <img src={Home} alt="HomeButton" />
      </div>
      <div className="footer-icon" onClick={handleCreatePostClick}>
        <img src={Create} alt="CreatePost" />
      </div>
      <div className="footer-icon">
        <img src={Search} alt="SearchIcon" />
      </div>
      <div className="profile-icon">
        <img src={ProfilePic} alt="UserProfile" />
      </div>
    </footer>
  );
}

export default Footer;


  
