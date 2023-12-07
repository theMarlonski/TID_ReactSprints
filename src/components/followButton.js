import React, { useState, useEffect } from 'react';
import Parse from 'parse';
import './followButton.css'; // Import your CSS file

const FollowButton = (props) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const currentUser = Parse.User.current();
  console.log('profileId', props.profileId);
  console.log('currentUser', currentUser.id);

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


  const handleFollowToggle = async () => {
    const currentUser = Parse.User.current();
    const Following = Parse.Object.extend('Following');
    const followerPointer = Parse.User.createWithoutData(currentUser.id);
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
          console.log(`User ${currentUser.id} unfollowed user ${props.profileId}`);
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
        setIsFollowing(true);
        console.log(`User ${currentUser.id} followed user ${props.profileId}`);
      } catch (error) {
        console.error('Error following:', error);
      }
    }
  };

  return (
    <button className={isFollowing ? 'button-following' : 'button-follow'} onClick={handleFollowToggle}>
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  );
};

export default FollowButton;
