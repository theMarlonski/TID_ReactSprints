import './App.css';
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Profilescreen from './pages/profilescreen.js'
import Homepage from './pages/Homepage.js'
import HellesPost from './pages/HellesPost.js'
import LoginScreen from './pages/LoginScreen.js';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profilescreen />} />
          <Route path="/post" element={<HellesPost />} />
          <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
