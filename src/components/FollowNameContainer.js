import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Parse from 'parse';
import './FollowNameContainer.css'; 

function FollowNameContainer(props) {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const checkIfFollowing = async () => {
      try {
        const currentUser = await Parse.User.currentAsync();
        if (currentUser) {
          const Following = Parse.Object.extend('Following');
          const followerPointer = Parse.User.createWithoutData(currentUser.id);
          const followingPointer = Parse.User.createWithoutData(props.profileId);
  
          const query = new Parse.Query(Following);
          query.equalTo('follower', followerPointer);
          query.equalTo('following', followingPointer);
  
          const result = await query.first();
          const followingStatus = !!result;
          setIsFollowing(followingStatus);
          console.log(`User ${currentUser.id} is ${followingStatus ? 'following' : 'not following'} user ${props.profileId}`);
        } else {
          console.error('Error: No current user');
        }
      } catch (error) {
        console.error('Error checking if following:', error);
      }
    };
  
    checkIfFollowing();
  }, [props.profileId]);

  useEffect(() => {
    console.log('isFollowing state changed:', isFollowing);
  }, [isFollowing]);

  const handleFollowToggle = async () => {
    const currentUser = Parse.User.current();
    const Following = Parse.Object.extend('Following');
    const followerId = currentUser.id; // Get the current user ID
  
    const followerPointer = Parse.User.createWithoutData(followerId);
    const followingPointer = Parse.User.createWithoutData(props.profileId);
  
    if (isFollowing) {
      // Unfollow: Delete the follow row
      const query = new Parse.Query(Following);
      query.equalTo('follower', followerPointer);
      query.equalTo('following', followingPointer);
  
      try {
        const result = await query.first();
        if (result) {
          await result.destroy();
          setIsFollowing(false);
          console.log(`User ${followerId} unfollowed user ${props.profileId}`);
        }
      } catch (error) {
        console.error('Error unfollowing:', error);
      }
    } else {
      // Follow: Create a new follow row
      const newFollow = new Following();
      newFollow.set('follower', followerPointer);
      newFollow.set('following', followingPointer);
  
      try {
        await newFollow.save();
        console.log(`User ${followerId} followed user ${props.profileId}`);
        setIsFollowing(true);
        console.log(`isFollowing state after update: ${isFollowing}`);
      } catch (error) {
        console.error('Error following:', error);
      }
    }
  };

  return (
    <div className="follow-section">
      <div className="name">
        <Link to={`/profile/${props.profileId}`} state={{ profileId: props.profileId }}>
          <img src={props.ProfilePost} alt="ProfilePostDetail" />
          <div className='text'>{props.ProfileName}</div>
        </Link>
      </div>
      <div className="button" onClick={handleFollowToggle}>
        <p>{isFollowing ? 'Following' : 'Follow'}</p>
      </div>
    </div>
  );
}

export default FollowNameContainer;
