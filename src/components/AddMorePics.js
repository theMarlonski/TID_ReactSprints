import React from 'react';
import './AddMorePics.css';
import EmptyImageSmall from '../Ressources/HomepagePosts/EmptyImageSmall.jpg';


function AddMorePics() {
  return (
      <div className='small-images-container'>
        <div className='small-image'>
          <img src={EmptyImageSmall} alt='SmallImage' />
        </div>
        <div className='small-image'>
          <img src={EmptyImageSmall} alt='SmallImage' />
        </div>
        <div className='small-image'>
          <img src={EmptyImageSmall} alt='SmallImage' />
        </div>
        <div className='small-image'>
          <img src={EmptyImageSmall} alt='SmallImage' />
        </div>
        <div className='small-image'>
          <img src={EmptyImageSmall} alt='SmallImage' />
        </div>
        <div className='small-image'>
          <img src={EmptyImageSmall} alt='SmallImage' />
        </div>
        <div className='small-image'>
          <img src={EmptyImageSmall} alt='SmallImage' />
        </div>
        <div className='small-image'>
          <img src={EmptyImageSmall} alt='SmallImage' />
        </div>
        <div className='small-image'>
          <img src={EmptyImageSmall} alt='SmallImage' />
        </div>
      </div>
  );
}

export default AddMorePics;