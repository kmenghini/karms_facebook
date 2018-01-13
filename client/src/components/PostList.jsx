import React from 'react';
import Post from './Post.jsx';
import CreatePost from './CreatePost.jsx';
import axios from 'axios';
import UserList from './UserList.jsx';
import Header from './Header.jsx';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receivedText: ''
    }
  }
  getNewPosts() {
    this.props.getAllPosts();
  }
  receivePostText(text) {
    console.log(text);
    this.setState({
      receivedText: text
    })
  }
  render() {
    // console.log(this.props.name);
    return (
      <div>
        <CreatePost onClick={this.receivePostText.bind(this)} getAllPosts={this.props.getAllPosts.bind(this)} name={this.props.name} />
        <br />
        {
          this.props.postList.map((post, index) => (
            <div key={index}>
            <Post
              post={post}
              name={this.props.name}
            />
            <br />
            </div>
          ))
        }
      </div>
    )
  }
}

export default PostList;