import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Parse from 'parse';
import './OthersProfilescreen.css';
import Header from '../components/Header.js';
import Icon from '../Ressources/Icons/Mail.png';
import UserProfile from '../components/UserProfile.js';
import Statistics from '../components/Statistics.js';
import LibraryView from '../components/LibraryView.js';
import view1 from '../Ressources/Icons/View_Grid.png';
import view2 from '../Ressources/Icons/View_List.png';
import mapIcon from '../Ressources/Icons/Location.png';
import arrow from '../Ressources/Icons/Chevron_down.png';
import Footer from '../components/Footer.js';
import UsersOwnPost from '../components/UserOwnPost.js';

function ProfileScreen() {
  const [userProfileData, setUserProfileData] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch user profile data from your Back4App database
      const UserProfile = Parse.Object.extend('User');
      const userProfileQuery = new Parse.Query(UserProfile);
      userProfileQuery.equalTo('objectId', profileId);
      const userProfileResult = await userProfileQuery.first();

      const Following = Parse.Object.extend('Following');
      const followerQuery = new Parse.Query(Following);
      const followingQuery = new Parse.Query(Following);
      followerQuery.equalTo('following', profileId);
      followingQuery.equalTo('follower', profileId);

      // Get the URL for the profile picture
      const profileImage = userProfileResult.get('profilePicture');
      const profileImageUrl = profileImage.url();

      // Fetch user posts data from your Back4App database
      const Post = Parse.Object.extend('Post');
      const postQuery = new Parse.Query(Post);
      postQuery.include('user');
      postQuery.equalTo('user', userProfileResult);
      postQuery.descending('createdAt');
      const userPostsResult = await postQuery.find();

      // Get Statistics
      const postCount = userPostsResult.length;
      const followerCount = await followerQuery.count();
      const followingCount = await followingQuery.count();

      // Set the fetched data in state
      setUserProfileData({
        profileImage: profileImageUrl,
        name: userProfileResult.get('username'),
        location: userProfileResult.get('localCountryName'),
        statistic1: postCount,
        statistic2: userProfileResult.get('placesVisited'),
        statistic3: followerCount,
        statistic4: followingCount,
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
      />

      <Statistics
        statistic1={userProfileData.statistic1}
        statistic2={userProfileData.statistic2}
        statistic3={userProfileData.statistic3}
        statistic4={userProfileData.statistic4}
      />
      <LibraryView viewIcon1={view1} viewIcon2={view2} />
      <div className="user-posts">
        {userPosts.map((post, index) => (
          <UsersOwnPost
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

export default ProfileScreen;
