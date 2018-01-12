import React from 'react';
import CreatePost from './CreatePost.jsx';
import Post from './Post.jsx';
import PostList from './PostList.jsx';
import FBHeader from './Header.jsx'
import axios from 'axios';
import { Image, Button, Header, List, Item, Divider, Icon, Menu } from 'semantic-ui-react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.getUserPosts();
  }  

  getUserPosts() {
    var username = 'albertchanged'; 
    axios.get(`/${username}/posts/${username}`)
      .then((response) => {
        console.log('response body...', response.body);
        this.setState({
          posts: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  } 

  render() {
    return (
      <div>
      <div className="profile">
        <div className="backgroundAndProfilePic">
          <Image className="backgroundPicture" src="https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg"></Image>
          <Image className="profilePicture" src="/images/profilePage_profilePicture.png"></Image>
          <Header size="large" inverted color="grey" textAlign="center" className="name"> Puppers </Header>
          <Button compact inverted size="small" className="addFriend">
            <Icon name='add user'/>
            Add Friend
          </Button>
          <Button compact inverted size="small" className="messageFriend">
            <Icon name='comments'/>
            Message Friend
          </Button>
        </div>
        <div className="profileNavigation">
          <span className="timeline"> Timeline </span>
          <span className="about"> About </span>
          <span className="friends"> Friends </span>
          <span className="photo"> Photo </span> 
          <span className="more"> More </span>
        </div>
        <div className="intro">
          <Header className="header"> 
            <Icon loading name="globe"></Icon>
            Intro 
          </Header>
          <List className="items">
            <Divider fitted></Divider>
            <List.Item> 
              <Icon name="user"></Icon>
              &nbsp; I like to woof and eat treats
            </List.Item>
            <List.Item>
              <Icon name="home"></Icon>
              &nbsp; Lives in San Francisco, CA 
            </List.Item>
            <List.Item> 
              <Icon name="student"></Icon>
              &nbsp; Hack Reactor 
            </List.Item>
            <List.Item>
              <Icon name="heart outline"></Icon>
              &nbsp; Single 
             </List.Item>
          </List>
        </div>
        <div className="friendsList">
          <Header className="header"> 
            <Icon name="users"></Icon>
            Friends 
          </Header>
          <List className="items">
            <Divider fitted></Divider>
            <List.Item> Friend 1 </List.Item>
            <List.Item> Friend 2 </List.Item>
            <List.Item> Friend 3 </List.Item>
          </List>
        </div>
        <div className="photos">
          <Header className="header"> 
            <Icon name="photo"></Icon>
            Photos 
          </Header>
          <List className="items">
            <Divider fitted></Divider>
            <List.Item> Photo 1 </List.Item>
            <List.Item> Photo 2 </List.Item>
            <List.Item> Photo 3 </List.Item>
          </List>
        </div>
        <div className="makePost">
          <CreatePost />
        </div>
        <div className="postList">
          <List className="items">
            {
              this.state.posts.map((post) => (
                <div>
                  <Post post={post} key={post.id} />
                  <br />
                </div>
              ))
            }
          </List>
        </div>
      </div>
      </div>
    );
  }
}

export default Profile;