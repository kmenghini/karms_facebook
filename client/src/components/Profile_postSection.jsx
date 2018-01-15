import React from 'react';
import CreatePost from './CreatePost.jsx';
import Post from './Post.jsx';
import { List } from 'semantic-ui-react';
import FadeIn from 'react-fade-in';

class Profile_postSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.view
    }
  }

  render() {
    return (
      <div className={this.props.view === 'Timeline' ? "postSection" : "hide"}>
        {this.props.isOwner ? 
          <CreatePost renderNewPost={this.props.getUserPosts.bind(this)} name={this.props.username}/>
          :
          <span></span>
        }

        {this.props.isOwner ? 

          <List className="items">
          {
            this.props.posts.map((post, index) => (
              <FadeIn>
              <div key={index} className="profilePostBorder">
                <Post post={post} name={this.props.username}/>
                <br />
              </div>
              </FadeIn>
            ))
          }
          </List>

          :

          <List className="visitorView">
          {
            this.props.posts.map((post, index) => (
              <FadeIn>
              <div key={index} className="profilePostBorder">
                <Post post={post} />
                <br />
              </div>
              </FadeIn>
            ))
          }
          </List>  
        }  
      </div>
    );
  }
}

export default Profile_postSection;