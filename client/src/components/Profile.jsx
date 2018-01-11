import React from 'react';
import CreatePost from './CreatePost.jsx';
import Post from './Post.jsx';
import { Image, Button, Header, List, Item } from 'semantic-ui-react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profile">
        <div className="backgroundAndProfile">
          <Image className="backgroundPicture" src="https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg"></Image>
          <Image className="profilePicture" src="/images/profilePage_profilePicture.png"></Image>
        </div>
        <div className="profileNavigation">
          <Button className="timeline"> Timeline </Button>
          <Button className="about"> About </Button>
          <Button className="friends"> Friends </Button>
          <Button className="photo"> Photo </Button> 
          <Button className="more"> More </Button>
        </div>
        <div className="intro">
          <Header className="header"> 
            Intro 
          </Header>
          <List className="items">
            <List.Item> From San Francisco, CA </List.Item>
            <List.Item> Hack Reactor </List.Item>
            <List.Item> 25 years old </List.Item>
          </List>
        </div>
        <div className="friendsList">
          <Header className="header"> Friends </Header>
          <List className="items">
            <List.Item> Friend 1 </List.Item>
            <List.Item> Friend 2 </List.Item>
            <List.Item> Friend 3 </List.Item>
          </List>
        </div>
        <div className="photos">
          <Header className="header"> Photos </Header>
          <List className="items">
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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </List>
        </div>
        <div className="messageFriends"> 
          <h2> Message Friends Here </h2>
        </div>
      </div>
    );
  }
}

export default Profile;