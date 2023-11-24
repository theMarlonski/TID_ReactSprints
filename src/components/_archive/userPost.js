// UserPost.js

import React from 'react';

const UserPost = ({ post }) => {
  return (
    <div className="user-post">
      <img src={post.get('postImage').url()} alt="Post Image" />
      <div>
        <p>{post.get('postText')}</p>
        <div className="tags">{post.get('postTags').join(', ')}</div>
      </div>
    </div>
  );
};

export default UserPost;
