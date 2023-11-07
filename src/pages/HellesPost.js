import React from 'react';
import './HellesPost.css';
import TopBarPost from './components/TopBarPost.js';
import Flag from './Ressources/Icons/norwegian-flag.png';
import Footer from './components/Footer';
import PostDetail from './components/PostDetail.js';
import DetailPost from "./Ressources/DetailedPosts/Aurlandsdalen.jpg";
import FollowNameContainer from './components/FollowNameContainer';
import Helle from "./Ressources/ProfilePictures/HellePicture.png";
import DetailedPostDescription from './components/DetailedPostDescription';
import Tags from './components/Tags';

function HellesPost() {
  return (
    <div className="App">
      <PostDetail
      DetailedPost={DetailPost}
      />
      <TopBarPost
      PostCountryFlag={Flag}
      PostCountry='Norway'
      />
      
      <FollowNameContainer
      ProfilePost={Helle}
      ProfileName='Helle 🇳🇴'
      />
      
      <DetailedPostDescription
      PostDescription_1='Aurlandsdalen is a 40 km long valley in Norway and it is characterized by lush, species-rich nature. It contains rich cultural monuments in the form of old farms and stables.'
      PostDescription_2='Aurlandsdalen is known for its stunning natural beauty and historical significance.'
      />
      
      <Tags tags={["Aurlandsdalen", "Norway", "Hiking", "Wild", "Spectacular Nature", "Outdoor"]}/>
      <Footer/>
    </div>
  );
}

export default HellesPost;