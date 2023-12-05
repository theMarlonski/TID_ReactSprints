import React from 'react';
import { Link } from 'react-router-dom'; 
import './FollowNameContainer.css'; 

function FollowNameContainer(props) {
  return (
    <div className="follow-section">
      <div className="name">
      <Link to={`/profile/${props.profileId}`} state={{ profileId: props.profileId }}>
        <img src={props.ProfilePost} alt="ProfilePostDetail" />
        <div className='text'>{props.ProfileName}</div>
      </Link>
      </div>
      <div className="button">
        <p>Follow</p>
      </div>
    </div>
  );
}

export default FollowNameContainer;
