import React from 'react';
import './profilescreen.css';
import Header from '../components/Header.js';
import Icon from '../Ressources/Icons/Settings.png';
import UserImage from '../Ressources/ProfilePictures/SalomonRusso.png'
import OwnProfile from '../components/OwnProfile.js';
import Statistics from '../components/Statistics.js';
import LibraryView from '../components/LibraryView.js';
import view1 from '../Ressources/Icons/View_Grid.png';
import view2 from '../Ressources/Icons/View_List.png';
import mapIcon from '../Ressources/Icons/Location.png';
import UsersImage1 from '../Ressources/UsersOwnProfilePosts/castello-sforzesco.jpg'
import UsersImage2 from '../Ressources/UsersOwnProfilePosts/italianRestaurant.jpg'

import UsersOwnPost from '../components/UserOwnPost.js';
import Footer from '../components/Footer.js';
import './Homepage.css';
import SlideBar from '../components/SlideBar';



function UsersOwnProfile() {
  return (
    <div className="profilescreen-container">
      <Header
        IconPath={Icon}
      />
      <OwnProfile
        profileImage={UserImage}
        name="Salamon Russo🇮🇹"
        mapIcon={mapIcon}
        location="ITALY"
      />
      <Statistics
        statistic1="9"
        statistic2="13"
        statistic3="324"
        statistic4="200"
    />
     <LibraryView
        viewIcon1={view1}
        viewIcon2={view2}
      />

<div className="post-section">
        <UsersOwnPost
          usersImage={UsersImage1}
          postText="Sforza Castle (Castello Sforzesco): This historic castle houses several museums, including art galleries....."
          tags={["Milano", "Italy", "Food and drinks", "Culture", "Sightseeing", "City trips"]}
          /> 
          <SlideBar />
        <UsersOwnPost
          usersImage={UsersImage2}
          postText="Trattoria Bella Vita is a famous and popular pasta restaurant..."
          tags={["Milano", "Italy", "Food and drinks", "Culture", "Sightseeing", "City trips", "Budget friendly"]}
          /> 
          <SlideBar />
      
</div>
<Footer/>
    </div>
    
  );
}


export default UsersOwnProfile;


<div>

</div>
