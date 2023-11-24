import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Parse from 'parse';
import './Footer.css'; 
import Home from "../Ressources/Icons/HomeIcon.svg";
import Create from "../Ressources/Icons/CreatePost.svg";
import Search from "../Ressources/Icons/SearchIcon.svg";

function Footer() {
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    fetchUserProfilePic();
  }, []);

  const fetchUserProfilePic = async () => {
    // Check if there is a logged-in user
    const currentUser = Parse.User.current();

    if (currentUser) {
      try {
        // Fetch the user's profilePicture
        await currentUser.fetch();
        const userProfilePic = currentUser.get('profilePicture');

        console.log('Retrieved profile picture:', userProfilePic);

        // Set the profile picture in state
        setProfilePic(userProfilePic || '');
      } catch (error) {
        console.error('Error fetching user profile picture:', error);
      }
    }
  };

    return (
      <footer className="footer">
        <Link to="/home">
          <div className="footer-icon"><img src={Home} alt="HomeButton" /></div>
        </Link>
        <Link to="/create-post">
          <div className="footer-icon"><img src={Create} alt="CreatePost" /></div>
        </Link>
        <Link to={`/filter`}>
          <button className="filter_button">
            <div className="footer-icon"><img src={Search} alt="SearchIcon" /></div>
          </button>
        </Link>
        <Link to="/profile">
          <div className="profile-icon">
            <img src={profilePic._url} alt="UserProfile" />
          </div>
        </Link>
      </footer>
    );
  }
  
  export default Footer;

  
