import React, { useState, useEffect } from 'react';
import Parse from 'parse';
import './profilescreen.css';
import Header from '../components/Header.js';
import Icon from '../Ressources/Icons/Mail.png';
import UserImage from '../Ressources/UserProfilePicture/UserImage.png';
import UserProfile from '../components/UserProfile.js';
import Statistics from '../components/Statistics.js';
import LibraryView from '../components/LibraryView.js';
import view1 from '../Ressources/Icons/View_Grid.png';
import view2 from '../Ressources/Icons/View_List.png';
import mapIcon from '../Ressources/Icons/Location.png';
import arrow from '../Ressources/Icons/Chevron_down.png';
import FollowButton from '../components/followButton';


function ProfileScreen() {
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
      const UserProfile = Parse.Object.extend('User'); // Assuming the class name for users is "User"
      const userProfileQuery = new Parse.Query(UserProfile);
      userProfileQuery.equalTo('objectId', currentUser.id);
      const userProfileResult = await userProfileQuery.first();

      // Log the fetched user profile data for debugging
      console.log('User Profile Data:', userProfileResult.toJSON());

      // Get the URL for the profile picture
      const profileImage = userProfileResult.get('profilePicture');
      const profileImageUrl = profileImage.url();

      // Fetch user posts data from your Back4App database
      const Post = Parse.Object.extend('Post');
      const postQuery = new Parse.Query(Post);
      postQuery.include('user');
      postQuery.equalTo('user', currentUser);
      postQuery.descending('createdAt');
      const userPostsResult = await postQuery.find();

      // Set the fetched data in state
      setUserProfileData({
        profileImage: profileImageUrl,
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
      <UserProfile
        profileImage={userProfileData.profileImage}
        name={userProfileData.name}
        mapIcon={mapIcon}
        location={userProfileData.location}
        arrow={arrow}
        text="Follow"
        
      />
      <FollowButton/>
      <Statistics
        statistic1={userProfileData.statistic1}
        statistic2={userProfileData.statistic2}
        statistic3={userProfileData.statistic3}
        statistic4={userProfileData.statistic4}
      />
      <LibraryView viewIcon1={view1} viewIcon2={view2} />

      {/* Render user posts */}
      <div className="post-section">
        {userPosts.map((post, index) => (
          // Replace with your UserPost component and pass the necessary props
          <UserPost key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

// You can create a separate UserPost component to handle rendering individual posts
const UserPost = ({ post }) => {
  // Implement your UserPost component logic here
  return (
    <div>
      {/* Render individual post content */}
      <p>{post.get('postText')}</p>
      {/* Add other post content as needed */}
    </div>
  );
};

export default ProfileScreen;
