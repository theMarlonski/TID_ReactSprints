import React from 'react';
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import Profilescreen from './pages/profilescreen.js';
import Homepage from './pages/Homepage.js';
import HellesPost from './pages/HellesPost.js';
import LoginScreen from './pages/LoginScreen.js';
import CreatePost from './pages/CreatePost.js';
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
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile" element={<Profilescreen />} />
          <Route path="/post/:postId" element={<HellesPost />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route index element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;