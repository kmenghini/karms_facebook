import React from 'react';
import { Card, Icon, Button, Label, Comment, Input } from 'semantic-ui-react';
import axios from 'axios';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: ''
    }
  }
  createPost() {
    let postInput = document.getElementById('postInput').value;
    let username = 'albertchanged';

    this.setState({
      postText: postInput
    })

    axios.post(`/${username}/posts`, { 'text': postInput })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  sendPostText(event) {
    event.preventDefault();
    this.props.onClick(this.state.postText);
  }
  render() {
    return (
      <div className="createPostBody">
        <Card fluid>
          <div className="createPostHeader">
          <h2 className="createPostLabel">Create New Post</h2>
          </div>
          <form onSubmit={this.sendPostText.bind(this)}>
            <Input 
              className="createPostInput"
              id="postInput"
              type="text" 
            />
            <div className="createPostButtonRow">
              <div></div>
              <div></div>
              <Button className="createPostButton" onClick={this.createPost.bind(this)}>Post</Button>
              <Button className="cancelPostButton">Cancel</Button>
            </div>
          </form>
        </Card>
      </div>
    )
  }
}

export default CreatePost;