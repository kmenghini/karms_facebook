import React from 'react';
import Post from './Post.jsx';

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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