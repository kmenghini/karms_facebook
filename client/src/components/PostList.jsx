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
      receivedText: '',
      postList: []
    }
  }
  componentDidMount() {
    this.getNewPosts();
  }
  getNewPosts() {
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
  receivePostText(text) {
    console.log(text);
    this.setState({
      receivedText: text
    })
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <CreatePost onClick={this.receivePostText.bind(this)} getNewPosts={this.getNewPosts.bind(this)} />
        <br />
        {
          this.state.postList.map((post) => (
            <div>
            <Post
              post={post}
              key={post.id}
            />
            <br />
            </div>
          ))
          // <div>
          // <Post postText={this.state.receivedText}/>
          // <br />
          // <Post />
          // </div>
        }
      </div>
    )
  }
}

export default PostList;