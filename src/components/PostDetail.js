import React from 'react';
import './PostDetail.css';

function PostDetail(props) {
  // Log the image URLs to check if they're correct
  console.log('Image URLs:', props.additionalImages);

  // Render the main image
  const mainImage = typeof props.DetailedPost === 'string' ? (
    <img src={props.DetailedPost} alt="PostDetail" onError={() => console.error('Error loading main image')} />
  ) : (
    <img src={props.DetailedPost.url()} alt="PostDetail" onError={() => console.error('Error loading main image')} />
  );

  // Check if additionalImages is an array of strings (URLs)
  if (Array.isArray(props.additionalImages) && props.additionalImages.length > 0) {
    return (
      <div className="image-section-multiple">
        <div className="image-scroll-container">
          {mainImage}
          {/* Render additional images dynamically */}
          {props.additionalImages.map((additionalImage, index) => (
            <img key={index} src={additionalImage.url()} alt={`AdditionalImage${index}`} onError={() => console.error(`Error loading AdditionalImage${index}`)} />
          ))}
        </div>
      </div>
    );
  } else {
    // Render only the main image if there are no additional images
    return (
      <div className="image-section-single">
        {mainImage}
      </div>
    );
  }
}

export default PostDetail;