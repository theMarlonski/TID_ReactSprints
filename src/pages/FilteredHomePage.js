import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FilteredHomePage.css';
import Header from '../components/Header.js';
import HomePost from '../components/HomePost.js';
import Footer from '../components/Footer.js';
import NotificationIcon from '../Ressources/Icons/NotificationBell.svg';
import NoResultsPopup from '../components/NoResultsPopup.js';
import Parse from 'parse';

function FilteredHomePage() {
  const { tags } = useParams();
  const selectedTags = tags ? tags.split(',') : [];
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const Post = Parse.Object.extend('Post');
      const postQuery = new Parse.Query(Post);
      postQuery.include('user');
      postQuery.descending('createdAt');

      const postsResult = await postQuery.find();
      setPosts(postsResult);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Handle errors by setting loading to false
    }
  };

  const filteredPosts = posts.filter(post => {
    return tagMatches(selectedTags, post.get('tags'));
  });

  if (loading) {
    // Display loading spinner or message while data is being fetched
    return <p>Loading...</p>;
  }

  if (filteredPosts.length === 0) {
    return <NoResultsPopup />;
  }

  return (
    <div>
      <Header IconPath={NotificationIcon} />
      <div className="post-section">
        {filteredPosts.map((post, index) => (
          <HomePost
            key={post.id}
            postId={post.id}
            profileImage={post.get('user').get('profilePicture')?.url()} 
            name={`${post?.get('user').get('username')} ${post.get('user').get('localCountry')}`} 
            postImage={post.get('mainImage').url()} 
            flag={post.get('country')?.split(' ')[0]}
            tags={post.get('tags')}
          />
        ))}
      </div>
      <Footer />
    </div>
  );

  function tagMatches(selectedTags, postTags) {
    return selectedTags.every(tag => postTags.includes(tag));
  }
}

export default FilteredHomePage;
