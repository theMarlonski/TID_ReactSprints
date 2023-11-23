import React, { useState } from 'react';
import './followButton.css'; // Import your CSS file

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
  };

  return (
    <button className={isFollowing ? 'button-following' : 'button-follow'} onClick={handleClick}>
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  );
};

export default FollowButton;
