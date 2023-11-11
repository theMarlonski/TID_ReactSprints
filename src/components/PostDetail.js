import React from 'react';
import './PostDetail.css';
import SlideBar from "./SlideBar.js";

function PostDetail(props) {
    return (
        <div className="image-section">
            <img src={props.DetailedPost} alt="PostDetail" />
            <SlideBar /> {/* Ensure that the SlideBar component is correctly placed here */}
        </div>
    );
  }
  
  export default PostDetail;

