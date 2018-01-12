import React from 'react';
import CreatePost from './CreatePost.jsx';
import PostList from './PostList.jsx';
import axios from 'axios';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: []
    }
  }
  componentDidMount() {
    this.getAllPosts();
  }
  getAllPosts() {
    let username = 'albertchanged';
    axios.get(`/${username}/posts`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          postList: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (

      <div className="feedContainer">
        <div className="feedSidebar"></div>
        <div className="feedContent">
          <PostList postList={this.state.postList} getAllPosts={this.getAllPosts.bind(this)}/>
        </div>
        <div className="feedSidebar"></div>
      </div>
      
    );
  }
}

export default Feed;
