import './App.css';
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter, Navigate} from 'react-router-dom';
import Profilescreen from './pages/profilescreen.js'
import Homepage from './pages/Homepage.js'
import HellesPost from './pages/HellesPost.js'
import LoginScreen from './pages/LoginScreen.js';

// Import Parse minified version
import Parse from 'parse';

// Your Parse initialization configuration goes here
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
          <Route path="/post" element={<HellesPost />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route index element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
