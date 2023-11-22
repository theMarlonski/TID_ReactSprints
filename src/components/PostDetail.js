import React from 'react';
import './PostDetail.css';
import SlideBar from './SlideBar.js';

function PostDetail(props) {
  // Log the image URL to check if it's correct
  console.log('Image URL:', props.DetailedPost);

  // Check if DetailedPost is a string (URL)
  if (typeof props.DetailedPost === 'string') {
    return (
      <div className="image-section">
        <img src={props.DetailedPost} alt="PostDetail" onError={() => console.error('Error loading image')} />
        <SlideBar /> {/* Ensure that the SlideBar component is correctly placed here */}
      </div>
    );
  } else {
    // Log an error if DetailedPost is not a string
    console.error('Invalid image URL:', props.DetailedPost);
    return null; // You can return some fallback content or an empty div here
  }
}

export default PostDetail;
