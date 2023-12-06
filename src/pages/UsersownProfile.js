import React, { useState, useEffect } from 'react';
import Parse from 'parse';
import './UsersOwnProfile.css';
import Header from '../components/Header.js';
import Icon from '../Ressources/Icons/Settings.png';
import OwnProfile from '../components/OwnProfile.js';
import Statistics from '../components/Statistics.js';
import LibraryView from '../components/LibraryView.js';
import UserOwnPost from '../components/UserOwnPost.js';
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
      console.log('Current User:', currentUser);
  
      if (!currentUser) {
        window.location.replace('/login');
        return;
      }
      
      const UserProfile = Parse.Object.extend('User');
      const userProfileQuery = new Parse.Query(UserProfile);
      userProfileQuery.equalTo('objectId', currentUser.id);
      const userProfileResult = await userProfileQuery.first();

      const Following = Parse.Object.extend('Following');
      const followerQuery = new Parse.Query(Following);
      const followingQuery = new Parse.Query(Following);
      followerQuery.equalTo('following', currentUser);
      followingQuery.equalTo('follower', currentUser);

  
      const Post = Parse.Object.extend('Post');
      const postQuery = new Parse.Query(Post);
      postQuery.include('user');
      postQuery.equalTo('user', currentUser);
      postQuery.descending('createdAt');
      const userPostsResult = await postQuery.find();
  
      console.log('User Posts Result:', userPostsResult);
  
      setUserPosts(userPostsResult);

      // Get Statistics
      const postCount = userPostsResult.length;
      const followerCount = await followerQuery.count();
      const followingCount = await followingQuery.count();

  
      setUserProfileData({
        profileImage: userProfileResult.get('profilePicture').url(),
        name: userProfileResult.get('username'),
        location: userProfileResult.get('localCountryName'),
        statistic1: postCount,
        statistic2: userProfileResult.get('placesVisited'),
        statistic3: followerCount,
        statistic4: followingCount,
      });
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

      <div className="user-posts">
        {userPosts.length > 0 && userPosts.map((post, index) => (
          <UserOwnPost
            key={post.id}
            usersImage={post.get('mainImage').url()}  
            postText={post.get('description')}
            tags={post.get('tags')}
            postId={post.id}
            profileId={post.get('user').id}
            profileImage={post.get('user').get('profilePicture')?.url()} 
            name={`${post?.get('user').get('username')} ${post.get('user').get('localCountry')}`} 
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default UsersProfileScreen;
