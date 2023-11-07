import React from 'react';
import './App.css';
import TopBarPost from './components/TopBarPost.js';
import Footer from './components/Footer';
import PostDetail from './components/PostDetail.js';
import FollowNameContainer from './components/FollowNameContainer';
import DetailedPostDescription from './components/DetailedPostDescription';
import Tags from './components/Tags';

function HellesPost() {
  return (
    <div className="App">
      <PostDetail/>
      <TopBarPost/>
      <FollowNameContainer/>
      <DetailedPostDescription/>
      <Tags tags={["Aurlandsdalen", "Norway", "Hiking", "Wild", "Spectacular Nature", "Outdoor"]}/>
      <Footer/>
    </div>
  );
}

export default HellesPost;