import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import Parse from 'parse';
import TopBarPost from '../components/TopBarPost.js';
import Footer from '../components/Footer.js';
import PostDetail from '../components/PostDetail.js';
import FollowNameContainer from '../components/FollowNameContainer.js';
import DetailedPostDescription from '../components/DetailedPostDescription.js';
import DetailedTags from '../components/detailedPostTags.js';
import { useLocation } from 'react-router-dom';
import './IndividualPost.css';

function IndividualPost() {
  const location = useLocation();
  const detailedPostImage = location.state?.detailedPostImage;
  const tags = location.state?.tags;
  const name = location.state?.name;
  const profilepic = location.state?.profileImage;

  // Use state to store the description
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [additionalImageUrls, setAdditionalImageUrls] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const postId = location.state?.postId;
    const Post = Parse.Object.extend('Post');
    const query = new Parse.Query(Post);
  
    try {
      const postObject = await query.get(postId);
      const descriptionValue = postObject.get('description');
      const countryValue = postObject.get('country');
  
      // Dynamically retrieve additional images
      const additionalImageUrlsValue = [];
      let index = 0;
      while (true) {
        const additionalImage = postObject.get(`AdditionalImage${index}`);
        if (!additionalImage) break; // Exit loop if no more additional images
        additionalImageUrlsValue.push(additionalImage);
        index++;
      }
  
      setDescription(descriptionValue || '');
      setCountry(countryValue || '');
      setAdditionalImageUrls(additionalImageUrlsValue);
  
      console.log('Description:', descriptionValue);
      console.log('Country:', countryValue);
      console.log('AdditionalImageUrls:', additionalImageUrlsValue);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="post-body">
      <PostDetail DetailedPost={detailedPostImage || ''} additionalImages={additionalImageUrls} />
      <TopBarPost PostCountry={country} />
      <FollowNameContainer ProfilePost={profilepic} ProfileName={name} />
      <DetailedPostDescription PostDescription={description} />
      <DetailedTags tags={tags} />
      <Footer />
    </div>
  );
}

export default IndividualPost;
