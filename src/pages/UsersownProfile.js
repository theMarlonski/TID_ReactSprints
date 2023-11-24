import React, { useState, useEffect } from 'react';
import Parse from 'parse';
import './profilescreen.css';
import Header from '../components/Header.js';
import Icon from '../Ressources/Icons/Settings.png';
import OwnProfile from '../components/OwnProfile.js';
import Statistics from '../components/Statistics.js';
import LibraryView from '../components/LibraryView.js';
import view1 from '../Ressources/Icons/View_Grid.png';
import view2 from '../Ressources/Icons/View_List.png';
import mapIcon from '../Ressources/Icons/Location.png';
import Footer from '../components/Footer';

function UsersProfileScreen() {
  const [userProfileData, setUserProfileData] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const currentUser = Parse.User.current();

      if (!currentUser) {
        window.location.replace('/login');
        return;
      }

      // Fetch user profile data from your Back4App database
      const UserProfile = Parse.Object.extend('User');
      const userProfileQuery = new Parse.Query(UserProfile);
      userProfileQuery.equalTo('objectId', currentUser.id);
      const userProfileResult = await userProfileQuery.first();

      // Fetch user posts data from your Back4App database
      const Post = Parse.Object.extend('Post');
      const postQuery = new Parse.Query(Post);
      postQuery.include('user');
      postQuery.equalTo('user', currentUser);
      postQuery.descending('createdAt');
      const userPostsResult = await postQuery.find();

      // Set the fetched data in state
      setUserProfileData({
        profileImage: userProfileResult.get('profilePicture').url(),
        name: userProfileResult.get('username'),
        location: userProfileResult.get('localCountryName'),
        statistic1: userProfileResult.get('post'),
        statistic2: userProfileResult.get('placesVisited'),
        statistic3: userProfileResult.get('followers'),
        statistic4: userProfileResult.get('following'),
      });
      setUserPosts(userPostsResult);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="profilescreen-container">
      <Header IconPath={Icon} />
      <OwnProfile
        profileImage={userProfileData.profileImage}
        name={userProfileData.name}
        mapIcon={mapIcon}
        location={userProfileData.location}
      />
      <Statistics
        statistic1={userProfileData.statistic1}
        statistic2={userProfileData.statistic2}
        statistic3={userProfileData.statistic3}
        statistic4={userProfileData.statistic4}
      />
      <LibraryView viewIcon1={view1} viewIcon2={view2} />
      <Footer/>

      {/* Render user posts */}
      <div className="post-section">
        {userPosts.map((post, index) => (
          // Replace with your UserPost component and pass the necessary props
          <UserPost key={index} MarlonsPosts={post} />
        ))}
      </div>
    </div>
  );
}

// You can create a separate UserPost component to handle rendering individual posts



const UserPost = ({ MarlonsPosts }) => {
  console.log('Post Image URL:', MarlonsPosts.get('postImage').url());
  console.log('hej')
  return (
    <div className="user-post">
      <img src={MarlonsPosts.get('postImage').url()} alt="Post Image" />
      <p>{MarlonsPosts.get('postText')}</p>
      <div className="tags">{MarlonsPosts.get('postTags').join(', ')}</div> 
    </div>
  );
};



export default UsersProfileScreen;

