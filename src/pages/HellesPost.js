import React from 'react';
import './App.css';
import Footer from "./components/Footer.js";
import PostDetail from "./components/PostDetail.js"; // Import the PostDetail component

function HellesPost() {
  return (
    <div className="App">
      <PostDetail /> 
      <Footer />
    </div>
  );
}

export default HellesPost;