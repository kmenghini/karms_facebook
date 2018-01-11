import React from 'react';
import Post from './Post.jsx';
import CreatePost from './CreatePost.jsx';
import axios from 'axios';
import Header from './Header.jsx';
import UserList from './UserList.jsx';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receivedText: ''
    }
  }
  getNewPosts() {
    this.props.getAllPosts();
    let username = 'albertchanged';
    axios.get(`/${username}/posts`)
      .then((res) => {
        console.log('new posts...', res.data);
        this.setState({
          postList: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  receivePostText(text) {
    console.log(text);
    this.setState({
      receivedText: text
    })
  }
  render() {
    return (
      <div>
        <CreatePost onClick={this.receivePostText.bind(this)} getAllPosts={this.props.getAllPosts.bind(this)} />
        <br />
        {
          this.props.postList.map((post) => (
            <div>
            <Post
              post={post}
              key={post.id}
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