import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Profilescreen from './pages/profilescreen.js';
import Homepage from './pages/Homepage.js';
import HellesPost from './pages/HellesPost.js';
import LoginScreen from './pages/LoginScreen.js';
import CreatePost from './pages/CreatePost.js';
import Parse from 'parse';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'W3xindcqxv4pJAkwRbaU6TYStdgnwTSHtxH6ZzeC';
const PARSE_JAVASCRIPT_KEY = 'ITw9eJTL50dCk4LqWKCbZZ8g8aGsCzJ6PHozvXRF';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const isUserLoggedIn = () => {
  return Parse.User.current() !== null;
};

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    setLoggedIn(isUserLoggedIn());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={loggedIn ? <Homepage /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={loggedIn ? <Profilescreen /> : <Navigate to="/login" />}
          />
          <Route
            path="/post/:postId"
            element={loggedIn ? <HellesPost /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<LoginScreen />}
          />
          <Route
            path="/create-post"
            element={loggedIn ? <CreatePost /> : <Navigate to="/login" />}
          />
          <Route index element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
