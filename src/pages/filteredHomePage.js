import React, { useState } from 'react';
import Header from '../components/Header.js';
import { useParams } from 'react-router-dom';
import Icon from '../Ressources/Icons/NotificationBell.svg';
import HomePost from '../components/HomePost.js';
import ProfileImage1 from '../Ressources/ProfilePictures/LisaPicture.png';
import ProfileImage2 from '../Ressources/ProfilePictures/LouisPicture.svg';
import ProfileImage3 from '../Ressources/ProfilePictures/OguzPicture.png';
import PostImage1 from '../Ressources/HomepagePosts/Norway.jpg';
import PostImage2 from '../Ressources/HomepagePosts/Istanbul.jpg';
import PostImage3 from '../Ressources/HomepagePosts/Milano.jpg';
import Footer from '../components/Footer.js';
import NotificationIcon from '../Ressources/Icons/NotificationBell.svg';
import './Homepage.css';
import NoResultsPopup from '../components/NoResultsPopup.js';

function HomePage() {
  const { tags } = useParams(); // Hent tags fra URL-parametrene
  const selectedTags = tags ? tags.split(',') : []; // Hvis tags eksisterer, konverter til et array
  const posts = [
    {
      profileImage: ProfileImage1,
      name: "Lisa 🇳🇴",
      postImage: PostImage1,
      flag: "🇳🇴",
      tags: ["Norway", "Travel", "Nature", "Mountains", "Fjords"]
    },
    {
      profileImage: ProfileImage2,
      name: "Oguz 🇹🇷",
      postImage: PostImage2,
      flag: "🇹🇷",
      tags: ["Istanbul", "Travel", "City", "Culture", "History"]
    },
    {
      profileImage: ProfileImage3,
      name: "Louis 🇬🇧",
      postImage: PostImage3,
      flag: "🇮🇹",
      tags: ["Milano", "Travel", "City", "Culture", "History"]
    }
  ];

  console.log("Selected Tags:", selectedTags); // Tilføjet log
  console.log("All Posts:", posts); // Tilføjet log


  // Filtrer opslagene baseret på de aktiverede tags
  const filteredPosts = posts.filter(post => {
    return tagMatches(selectedTags, post.tags);
  });

  console.log("Filtered Posts:", filteredPosts); // Tilføjet log
  const noResults = filteredPosts.length === 0;

  const [showPopup, setShowPopup] = useState(false);
  if (noResults) {
    return <NoResultsPopup />;
  }

  return (
    <div>
      <Header IconPath={Icon} />
      <div className="post-section">
        {filteredPosts.map((post, index) => (
          <HomePost
            key={index}
            profileImage={post.profileImage}
            name={post.name}
            postImage={post.postImage}
            flag={post.flag}
            tags={post.tags}
          />
        ))}
      </div>
      <Footer />
    </div>
  );

  function tagMatches(selectedTags, postTags) {
    console.log("Selected Tags:", selectedTags); // Tilføjet log
    console.log("Post Tags:", postTags); // Tilføjet log
    return selectedTags.every(tag => postTags.includes(tag));
  }
};


export default HomePage;