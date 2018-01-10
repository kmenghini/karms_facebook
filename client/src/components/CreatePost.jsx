import React from 'react';
import { Card, Icon, Button, Label, Comment, Input } from 'semantic-ui-react';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="createPostBody">
        <Card fluid>
          <div className="createPostHeader">
          <h2 className="createPostLabel">Create New Post</h2>
          </div>
          <Input className="createPostInput" />
          <div className="createPostButtonRow">
            <div></div>
            <div></div>
            <Button className="createPostButton">Post</Button>
            <Button className="cancelPostButton">Cancel</Button>
          </div>
        </Card>
      </div>
    )
  }
}

export default CreatePost;