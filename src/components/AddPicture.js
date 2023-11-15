import React, { useState } from 'react';
import './AddPicture.css';
import EmptyImage from '../Ressources/HomepagePosts/EmptyImage.jpg';

function AddPicture({ onImageChange }) {
  const [image, setImage] = useState(EmptyImage);

  const handleRemove = () => {
    setImage(EmptyImage);
    onImageChange(null); // Notify the parent component that the image is removed
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
        onImageChange(reader.result); // Pass the image data to the parent component
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='empty-image'>
      <label htmlFor='upload-image'>
        <img src={image} alt='AddImage' />
      </label>
      <button onClick={handleRemove} className="remove-button">
        x
      </button>
      <input
        id='upload-image'
        type='file'
        accept='image/*'
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </div>
  );
}

export default AddPicture;
