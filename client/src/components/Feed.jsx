import React from 'react';
import CreatePost from './CreatePost.jsx';
import PostList from './PostList.jsx';
import axios from 'axios';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <div className="feedContainer">
        <div className="feedSidebar"></div>
        <div className="feedContent">
          <PostList />
        </div>
        <div className="feedSidebar"></div>
      </div>
      
    );
  }
}

export default Feed;
