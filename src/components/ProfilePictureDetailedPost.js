import React from 'react';
import './ProfilePictureDetailedPost.css'; // You can create a CSS file for your profile picture styles and import it here.
import Helle from "../Ressources/ProfilePictures/HellePicture.png";

function ProfilePictureDetailedPost() {
  return (
    <div className="profile-picture">
      <img src={Helle} alt="HellesPicture" />
    </div>
  );
}

export default ProfilePictureDetailedPost;