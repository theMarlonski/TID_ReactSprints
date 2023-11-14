import React from 'react';
import './CreatePost.css';
import TopBarCreatePost from '../components/TopBarCreatePost.js';
import AddPicture from '../components/AddPicture.js';
import AddMorePics from '../components/AddMorePics.js';
import CountryCreatePost from '../components/CountryCreatePost.js';
import DescriptionInput from '../components/DescriptionCreate.js';
import CreateTags from '../components/CreateTags.js';
import Footer from '../components/Footer.js';

function CreatePost() {

  const categories = [
    'Adventure Travel',
    'Cultural Exploration',
    'Travel Tips',
    'Backpacking',
    'Local Cuisine',
    'Scenic Views',
    'Historical Sites',
    'City Exploration',
    'Budget Travel',
    'Nature Retreat',
    'Photography',
    'Reflections',
    'Local Encounters',
    'Wellness Travel',
    'Off the Beaten Path',
  ];

  return (
    <div className='App'>
      <TopBarCreatePost />
      <div className='title-text'>
        <p>Tap to add picture</p>
      </div>
      <AddPicture />
      <AddMorePics />
      <div className='title-text'>
        <p>Add location</p>
      </div>
      <CountryCreatePost />
      <div className='title-text'>
        <p>Add description</p>
      </div>
      <DescriptionInput />
      <div className='title-text'>
        <p>Add tags</p>
      </div>
      <CreateTags tags={categories}/>
      <Footer />
    </div>
  );
}

export default CreatePost;