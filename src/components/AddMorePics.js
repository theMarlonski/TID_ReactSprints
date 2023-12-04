// AddMorePics.js
import React, { useState } from 'react';
import './AddMorePics.css';
import EmptyImageSmall from '../Ressources/HomepagePosts/EmptyImageSmall.jpg';

function AddMorePics({ onImagesChange, mainImageSelected }) {
  const [images, setImages] = useState(Array.from({ length: 9 }, () => EmptyImageSmall));

  const handleImageChange = (e, index) => {
    if (mainImageSelected) {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          const newImages = [...images];
          newImages[index] = reader.result;
          setImages(newImages);
          onImagesChange(newImages); // Pass the array of image data to the parent component
        };

        reader.readAsDataURL(file);
      }
    }
  };

  const handleRemove = (index) => {
    const newImages = [...images];
    newImages[index] = EmptyImageSmall;
    setImages(newImages);
    onImagesChange(newImages); // Notify the parent component that the image is removed
  };

  return (
    <div className='small-images-container'>
      {images.map((image, index) => (
        <div className='small-image' key={index}>
          <label htmlFor={`upload-image-${index}`}>
            <img src={image} alt={`SmallImage${index}`} />
          </label>
          <button onClick={() => handleRemove(index)} className="remove-button-small">
            x
          </button>
          <input
            id={`upload-image-${index}`}
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={(e) => handleImageChange(e, index)}
            disabled={!mainImageSelected} // Disable the input if the main image is not selected
          />
        </div>
      ))}
    </div>
  );
}

export default AddMorePics;
