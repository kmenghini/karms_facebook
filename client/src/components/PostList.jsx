import React from 'react';
import Post from './Post.jsx';
import CreatePost from './CreatePost.jsx';

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CreatePost />
        <br />
        {
          <div>
          <Post />
          <br />
          <Post />
          </div>
        }
      </div>
    )
  }
}

export default PostList;