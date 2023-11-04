import React from 'react';
import './PostDetail.css';
import SlideBar from "./SlideBar.js";
import Post from "../Ressources/DetailedPosts/Aurlandsdalen.jpg";

function PostDetail() {
    return (
        <div className="image-section">
            <img src={Post} alt="Post Image" />
            <SlideBar /> {/* Ensure that the SlideBar component is correctly placed here */}
        </div>
    );
  }
  
  export default PostDetail;

