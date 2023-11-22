import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import Parse from 'parse';
import TopBarPost from '../components/TopBarPost.js';
import Footer from '../components/Footer';
import PostDetail from '../components/PostDetail.js';
import FollowNameContainer from '../components/FollowNameContainer';
import DetailedPostDescription from '../components/DetailedPostDescription';
import DetailedTags from '../components/detailedPostTags';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

function HellesPost() {
  const location = useLocation();
  const detailedPostImage = location.state?.detailedPostImage;
  const tags = location.state?.tags;
  const name = location.state?.name;
  const profilepic = location.state?.profileImage;

  // Use state to store the description
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const postId = location.state?.postId; // Get postId from location.state
    const Post = Parse.Object.extend('Post');
    const query = new Parse.Query(Post);

    try {
      const postObject = await query.get(postId);
      console.log('Response from Parse:', postObject);

      // Access the column in your Post table for description
      const descriptionValue = postObject.get('description');
      const countryValue = postObject.get('country');

      // Set the description in state
      setDescription(descriptionValue || '');
      setCountry(countryValue || '');

      console.log('Description:', descriptionValue);
      console.log('Country:', countryValue);

      // Handle the descriptions as needed in your component
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <PostDetail DetailedPost={detailedPostImage || ''} />
      <TopBarPost PostCountry={country} />
      <FollowNameContainer ProfilePost={profilepic} ProfileName={name} />
      <DetailedPostDescription PostDescription={description} />
      <DetailedTags tags={tags} />
      <Footer />
    </div>
  );
}

export default HellesPost;
