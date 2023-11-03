import React from "react";
import Post from "./HomePost";
import LouisPicture from "../Ressources/ProfilePictures/LouisPicture.svg";
import IstanbulImage from "../Ressources/HomepagePosts/Istanbul.jpg";
import LisaPicture from "../Ressources/ProfilePictures/LisaPicture.png";
import NorwayImage from "../Ressources/HomepagePosts/Norway.jpg";
import MilanoImage from "../Ressources/HomepagePosts/Milano.jpg";
import OguzPicture from "../Ressources/ProfilePictures/OguzPicture.png";


function MainContent() {
  return (
    <main>
      <Post
        profileImage={LouisPicture}
        name="Louis 🇬🇧"
        postImage={MilanoImage}
        flagIcon="🇮🇹"
        tags={["Milan", "Sightseeing", "Food and Drinks", "Citytrip", "Italy"]}
      />
      <Post
        profileImage={OguzPicture}
        name="Oguz 🇹🇷"
        postImage={IstanbulImage}
        flagIcon="🇹🇷"
        tags={["Turkey", "Istanbul", "Food and Drinks", "Café"]}
      />
      <Post
        profileImage={LisaPicture}
        name="Lisa 🇳🇴"
        postImage={NorwayImage}
        flagIcon="🇳🇴"
        tags={["Norway", "Hiking", "Outdoors", "Nature"]}
      />
    </main>
  );
}

export default MainContent;
