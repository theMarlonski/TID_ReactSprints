import React from 'react';
import './CreatePost.css';
import TopBarCreatePost from '../components/TopBarCreatePost.js';
import AddPicture from '../components/AddPicture.js';
import AddMorePics from '../components/AddMorePics.js';


function CreatePost() {
  return (
      <div className='App'>
        <TopBarCreatePost />
        <div className='title-text'>
          <p>Tap to add picture</p>
        </div>
        <AddPicture />
        <AddMorePics />
        <div className='title-text'>
          <p>Select Country</p>
        </div>
      </div>
  );
}

export default CreatePost;
