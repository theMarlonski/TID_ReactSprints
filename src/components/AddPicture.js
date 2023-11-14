import React from 'react';
import './AddPicture.css';
import EmptyImage from '../Ressources/HomepagePosts/EmptyImage.jpg';


function AddPicture() {
  return (
      <div className='empty-image'>
        <img src={EmptyImage} alt='AddImage' />
      </div>
  );
}

export default AddPicture;