import React from 'react';
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import Profilescreen from './pages/OthersProfilescreen.js';
import Homepage from './pages/Homepage.js';
import FilteredHomePage from './pages/FilteredHomePage.js';
import IndividualPost from './pages/IndividualPost.js';
import LoginScreen from './pages/LoginScreen.js';
import CreatePost from './pages/CreatePost.js';
import FilterPage from './pages/FilterPage.js';
import UsersOwnProfile from './pages/UsersownProfile.js';
import Parse from 'parse';

const PARSE_APPLICATION_ID = 'W3xindcqxv4pJAkwRbaU6TYStdgnwTSHtxH6ZzeC';
const PARSE_JAVASCRIPT_KEY = 'ITw9eJTL50dCk4LqWKCbZZ8g8aGsCzJ6PHozvXRF';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home/" exact element={<Homepage />} />
          <Route path="/home/:tags?" exact element={<FilteredHomePage />} />
          <Route path="/profile/:profileId" element={<Profilescreen />} />
          <Route path="/post/:postId" element={<IndividualPost />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/own-profile" element={<UsersOwnProfile />} />
          <Route index element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;