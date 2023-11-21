import React, { useState, useEffect } from 'react';
import Parse from 'parse';
import Header from '../components/Header.js';
import HomePost from '../components/HomePost.js';
import Footer from '../components/Footer.js';
import NotificationIcon from '../Ressources/Icons/NotificationBell.svg';
import './Homepage.css';

function HomePage() {
  const [posts, setPosts] = useState([]);

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

      const Following = Parse.Object.extend('Following');
      const followingQuery = new Parse.Query(Following);
      followingQuery.equalTo('follower', currentUser);

      const followers = await followingQuery.find();
      const followingUsers = followers.map((follower) => follower.get('following'));

      console.log(followingUsers);

      const Post = Parse.Object.extend('Post');
      const postQuery = new Parse.Query(Post);
      postQuery.include('user');
      postQuery.containedIn('user', followingUsers);
      postQuery.descending('createdAt');

      const postsResult = await postQuery.find();
      setPosts(postsResult);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Header
      iconPath = {NotificationIcon}
      />
      <div className="post-section">
        {posts.map((post) => {
          return (
            <HomePost
              key={post.id}
              postId={post.id}
              profileImage={post.get('user').get('profilePicture')?.url()} 
              name={`${post?.get('user').get('username')} ${post.get('user').get('localCountry')}`} 
              postImage={post.get('mainImage').url()} 
              flag={post.get('country')?.split(' ')[0]}
              tags={post.get('tags')}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
