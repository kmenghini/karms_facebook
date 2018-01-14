import React from 'react';
import Post from './Post.jsx';
import CreatePost from './CreatePost.jsx';
import axios from 'axios';
import UserList from './UserList.jsx';
import Header from './Header.jsx';
import FadeIn from 'react-fade-in';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receivedText: ''
    }
  }
  getAllPosts() {
    this.props.getAllPosts();
  }
  receivePostText(text) {
    console.log(text);
    this.setState({
      receivedText: text
    })
  }
  render() {
    console.log('This is the logged in name', this.props.name);
    return (
      <div>
        <CreatePost onClick={this.receivePostText.bind(this)} getAllPosts={this.getAllPosts.bind(this)} name={this.props.name} />
        <br />
        {
          this.props.postList.map((post, index) => (
            <FadeIn>
            <div key={index}>
              <Post
                post={post}
                name={this.props.name}
              />
              <br />
            </div>
            </FadeIn>
          ))
        }
      </div>
    )
  }
}

export default PostList;