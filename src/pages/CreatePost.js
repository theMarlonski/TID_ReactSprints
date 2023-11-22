import React, { useState } from 'react';
import Parse from 'parse';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';
import TopBarCreatePost from '../components/TopBarCreatePost.js';
import AddPicture from '../components/AddPicture.js';
import AddMorePics from '../components/AddMorePics.js';
import CountryCreatePost from '../components/CountryCreatePost.js';
import DescriptionInput from '../components/DescriptionCreate.js';
import CreateTags from '../components/CreateTags.js';
import Footer from '../components/Footer.js';
import EmptyImageSmall from '../Ressources/HomepagePosts/EmptyImageSmall.jpg';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'W3xindcqxv4pJAkwRbaU6TYStdgnwTSHtxH6ZzeC';
const PARSE_JAVASCRIPT_KEY = 'ITw9eJTL50dCk4LqWKCbZZ8g8aGsCzJ6PHozvXRF';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

console.log('Current user authenticated:', Parse.User.currentAsync());

function CreatePost() {
  const navigate = useNavigate();

  const predefinedTags = [
    'Adventure Travel',
    'Cultural Exploration',
    'Travel Tips',
    'Backpacking',
    'Local Cuisine',
    'Scenic Views',
    'Historical Sites',
    'City Exploration',
    'Budget Travel',
    'Nature Retreat',
    'Photography',
    'Reflections',
    'Local Encounters',
    'Wellness Travel',
    'Off the Beaten Path',
  ];

  const [specialTag, setSpecialTag] = useState([]);
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPredefinedTags, setSelectedPredefinedTags] = useState([]);

  const handleSpecialTagChange = (value) => {
    setSpecialTag(value);
  };

  const handlePredefinedTagClick = (tagText) => {
    // Check if the tag is already selected
    if (selectedPredefinedTags.includes(tagText)) {
      // If selected, remove it from the selection
      setSelectedPredefinedTags((prevSelected) =>
        prevSelected.filter((selectedTag) => selectedTag !== tagText)
      );
    } else {
      // If not selected, add it to the selection
      setSelectedPredefinedTags((prevSelected) => [...prevSelected, tagText]);
    }
  };

  const [mainImageSelected, setMainImageSelected] = useState(false);
  const [mainImage, setImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState(Array.from({ length: 9 }, () => null)); // Array to store additional images

  const handleMainImageChange = (imageData) => {
    setMainImageSelected(true);
    setImage(imageData); // Set the image data in the state
  };

  const handleAdditionalImagesChange = (imagesData) => {
    setAdditionalImages(imagesData);
  };

  const handleCountryChange = (value) => {
    setSpecialTag((prevSpecialTags) => {
      // Filter out the old country and add the new one
      const updatedSpecialTags = prevSpecialTags.filter((tag) => tag !== country);
      return [...updatedSpecialTags];
    });
    setCountry(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const [loading, setLoading] = useState(false);


  const handleSavePost = async () => {
    console.log('Share button clicked');
  
    // Validate data before saving
    if (!mainImage || !country) {
      console.error('Incomplete data. Please fill in all required fields.');
      return;
    }

    setLoading(true); // Set loading state to true
  
    // Create a new Parse Object for the 'Post' class
    const Post = new Parse.Object('Post');
  
    // Set values for the columns
    const currentUser = Parse.User.current();
    const userPointer = new Parse.Object('_User');
    userPointer.id = currentUser.id;
    Post.set('user', userPointer); // Set the user field as a Pointer
    Post.set('country', country);
    Post.set('description', description);
  
    // Combine predefined tags, user-created tags, and country tag
    const selectedPredefinedTagsText = predefinedTags.filter((_, index) =>
      selectedPredefinedTags.includes(index)
    );
    const allTags = [...selectedPredefinedTagsText, ...specialTag];
    Post.set('tags', allTags);
  
    try {
      // Save the main image file
      if (mainImageSelected) {
        const mainImageFile = new Parse.File('mainImage.jpg', { base64: mainImage });
        await mainImageFile.save();
        Post.set('mainImage', mainImageFile);
      }
  
      // Save additional images files
      const additionalImagesFiles = await Promise.all(
        additionalImages
          .filter((imageData) => imageData !== EmptyImageSmall && imageData !== null)
          .map(async (imageData, index) => {
            const file = new Parse.File(`additionalImage${index}.jpg`, { base64: imageData });
            await file.save();
  
            // Save the file to the corresponding AdditionalImage column
            Post.set(`AdditionalImage${index}`, file);
  
            return file;
          })
      );
  
      // Save the post to the database
      await Post.save();
  
      console.log('Post saved successfully!');
      navigate('/home');
    } catch (error) {
      console.error('Error saving post:', error);
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <div className='create-body'>
      {loading && <div className="loading-indicator">Saving...</div>}
      <TopBarCreatePost onShareClick={handleSavePost}/>
      <div className='title-text'>
        <p>Tap to add picture</p>
      </div>
      <AddPicture onImageChange={handleMainImageChange} />
      <AddMorePics onImagesChange={handleAdditionalImagesChange} mainImageSelected={mainImageSelected} />
      <div className='title-text'>
        <p>Add location</p>
      </div>
      <CountryCreatePost specialTag={specialTag} handleSpecialTagChange={handleSpecialTagChange} onCountryChange={handleCountryChange} />
      <div className='title-text'>
        <p>Add description</p>
      </div>
      <DescriptionInput onDescriptionChange={handleDescriptionChange}/>
      <div className='title-text'>
        <p>Add tags</p>
      </div>
      <CreateTags
        tags={specialTag}
        predefinedTags={predefinedTags}
        selectedPredefinedTags={selectedPredefinedTags}
        onSpecialTagChange={handleSpecialTagChange}
        onPredefinedTagClick={handlePredefinedTagClick} // Pass the new handler
      />
      <Footer />
    </div>
  );
}

export default CreatePost;