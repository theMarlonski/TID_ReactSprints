import React from 'react';
import './App.css';
import TopBarPost from './components/TopBarPost.js';
import Footer from './components/Footer';
import PostDetail from './components/PostDetail.js';
import ProfilePictureDetailedPost from './components/ProfilePictureDetailedPost.js';
import FollowNameContainer from './components/FollowNameContainer';
import DetailedPostDescription from './components/DetailedPostDescription';
import Tags from './components/Tags';

function App() {
  return (
    <div className="App">
      <PostDetail/>
      <TopBarPost/>
      <ProfilePictureDetailedPost/>
      <FollowNameContainer/>
      <DetailedPostDescription/>
      <Tags tags={["Aurlandsdalen", "Norway", "Hiking", "Wild", "Spectacular Nature", "Outdoor"]}/>
      <Footer/>
    </div>
  );
}

export default HellesPost;