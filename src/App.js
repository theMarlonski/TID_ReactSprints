import './App.css';
import Header from './components/Header.js';
import Icon from './Ressources/Icons/NotificationBell.svg';
import HomePosts from './components/HomePost.js';
import ProfileImage1 from './Ressources/ProfilePictures/LisaPicture.png';
import ProfileImage2 from './Ressources/ProfilePictures/LouisPicture.svg';
import ProfileImage3 from './Ressources/ProfilePictures/OguzPicture.png';
import PostImage1 from './Ressources/HomepagePosts/Norway.jpg'
import PostImage2 from './Ressources/HomepagePosts/Istanbul.jpg'
import PostImage3 from './Ressources/HomepagePosts/Milano.jpg'

function App() {
  return (
    <div className="App">
      <Header
        IconPath={Icon}
      />
      <HomePosts
        profileImage={ProfileImage1}
        name="Lisa🇳🇴"
        postImage={PostImage1}
        flag="🇳🇴"
        tags={["Norway", "Travel", "Nature", "Mountains", "Fjords"]}
        />
      <HomePosts
        profileImage={ProfileImage2}
        name="Oguz🇹🇷"
        postImage={PostImage2}
        flag="🇹🇷"
        tags={["Istanbul", "Travel", "City", "Culture", "History"]}
        />
      <HomePosts
        profileImage={ProfileImage3}
        name="Louis🇬🇧"
        postImage={PostImage3}
        flag="🇮🇹"
        tags={["Milano", "Travel", "City", "Culture", "History"]}
        />
    </div>
  );
}
export default App;
