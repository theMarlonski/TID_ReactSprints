import React from 'react';
import TopBarPost from '../components/TopBarPost.js';
import Footer from '../components/Footer.js';
import PostDetail from '../components/PostDetail.js';
import ProfilePictureDetailedPost from '../components/ProfilePictureDetailedPost.js';
import FollowNameContainer from '../components/FollowNameContainer.js';
import DetailedPostDescription from '../components/DetailedPostDescription.js';
import Tags from '../components/Tags.js';

function HellesPost() {
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