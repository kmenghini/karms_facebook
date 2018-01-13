import React from 'react';
import CreatePost from './CreatePost.jsx';
import Post from './Post.jsx';
import { List } from 'semantic-ui-react';

class Profile_postSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Timeline'
    }
  }

  render() {
    return (
      <div className="postSection">
        <CreatePost renderNewPost={this.props.getUserPosts.bind(this)} name={this.props.username}/>  
        <List className="items">
          {
            this.props.posts.map((post) => (
              <div>
                <Post post={post} key={post.id} />
                <br />
              </div>
            ))
          }
        </List>
      </div>
    );
  }
}

export default Profile_postSection;