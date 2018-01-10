import React from 'react';
import Post from './Post.jsx';
import CreatePost from './CreatePost.jsx';
import axios from 'axios';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receivedText: ''
    }
  }
  componentDidMount() {
    this.getNewPosts();
  }
  getNewPosts() {
    let username = 'albertchanged';
    axios.get(`/${username}/posts`)
      .then((res) => {
        console.log(res);
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
        <CreatePost onClick={this.receivePostText.bind(this)} />
        <br />
        {
          // this.props.postList.map((post) => (
          //   <Post
          //     postText={this.state.receivedText}
          //   />
          // ))
          <div>
          <Post postText={this.state.receivedText}/>
          <br />
          <Post />
          </div>
        }
      </div>
    )
  }
}

export default PostList;