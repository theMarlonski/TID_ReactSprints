import React, { useState, useEffect } from 'react';
import Parse from 'parse';
import TopBarPost from '../../components/TopBarPost.js';
import Footer from '../../components/Footer.js';
import PostDetail from '../../components/PostDetail.js';
import FollowNameContainer from '../../components/FollowNameContainer.js';
import DetailedPostDescription from '../../components/DetailedPostDescription.js';
import Tags from '../../components/Tags.js';

function HellesPost({ params }) {
  console.log('HellesPost:', params);
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (params && params.postId) {
      console.log('Fetching data for postId:', params.postId);
      fetchPostData(params.postId);
    }
  }, [params]);

  const fetchPostData = async (postId) => {
    try {
      console.log('Fetching post data...');
      const Post = Parse.Object.extend('Post');
      const postQuery = new Parse.Query(Post);
      postQuery.equalTo('objectId', postId);
      const postResult = await postQuery.find();

      console.log('Post data:', postResult);
      setPost(postResult);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };


  return (
    <div className="App">
      <PostDetail DetailedPost={post.get('mainImage').url()} />
      <TopBarPost PostCountryFlag={post.get('country').substring(0, 4)} PostCountry={post.get('country').substring(4)} />
      <FollowNameContainer
        ProfilePost={post.get('user').get('profilePicture').url()} 
        ProfileName={`${post.get('user').get('username')} ${post.get('user').get('localCountry')}`}
      />
      <DetailedPostDescription
        PostDescription_1={post.get('description')}
      />
      <Tags tags={post.get('tags')} />
      <Footer />
    </div>
  );
}

export default HellesPost;
