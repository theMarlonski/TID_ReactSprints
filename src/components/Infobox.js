import React from "react";
import UserProfile from "./UserProfile";
import "./UserProfile.css";

function Infobox(props) {
  return (
    <div className="profile">
      <div>
        {/* profile image might need to be a seperate component */}
        <UserProfile profileImage={props.profileImage} name={props.name} location={props.location} button={props.button} mapIcon={props.mapIcon} text={props.text} arrow={props.arrow}/>
      </div>
    </div>
  );
}

export default Infobox;
