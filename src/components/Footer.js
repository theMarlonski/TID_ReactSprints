import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import Home from "../Ressources/Icons/HomeIcon.svg";
import Create from "../Ressources/Icons/CreatePost.svg";
import Search from "../Ressources/Icons/SearchIcon.svg";
import ProfilePic from "../Ressources/ProfilePictures/OwnProfilePicture.png";

function Footer() {
    return (
      <footer className="footer">
        <Link to="/home">
          <div className="footer-icon"><img src={Home} alt="HomeButton" /></div>
        </Link>
        <Link to="/create-post">
          <div className="footer-icon"><img src={Create} alt="CreatePost" /></div>
        </Link>
        <Link to="/search">
          <div className="footer-icon"><img src={Search} alt="SearchIcon" /></div>
        </Link>
        <Link to="/profile">
          <div className="profile-icon"><img src={ProfilePic} alt="UserProfile" /></div>
        </Link>
      </footer>
    );
  }
  
  export default Footer;

  
