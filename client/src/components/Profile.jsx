import React from 'react';
import CreatePost from './CreatePost.jsx';
import Post from './Post.jsx';
import PostList from './PostList.jsx';
import FBHeader from './Header.jsx';
import Profile_friends from './Profile_friends.jsx';
import Profile_photos from './Profile_photos.jsx';
import Profile_intro from './Profile_intro.jsx';
import Profile_about from './Profile_about.jsx';
import Profile_navigation from './Profile_navigation.jsx';
import Profile_backgroundAndProfilePic from './Profile_backgroundAndProfilePic.jsx';
import Profile_postSection from './Profile_postSection.jsx';
import axios from 'axios';
import { Image, Button, Header, List, Item, Divider, Icon, Menu } from 'semantic-ui-react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      friends: [],
      friend: false,
      username: props.match.params.username,
      userInfo: {},
      view: 'Timeline'
    }
  }

  componentDidMount() {
    this.getUserInfo();
    this.getUserPosts();
    this.getFriends();
  }  

  getUserInfo() {
    var user = this.state.username;
    axios.get(`/${user}`)
      .then((response) => {
        console.log('user info...', response.data);
        this.setState({
          userInfo: response.data[0]
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  getUserPosts() {
    var username = this.state.username;
    axios.get(`/${username}/posts/${username}`)
      .then((response) => {
        this.setState({
          posts: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  getFriends() {
    var username = this.state.username;
    var otherUsername = 'mattupham';
    axios.get(`/${username}/friendsList/${otherUsername}`)
      .then((response) => {
        console.log('friends....', response.data);
        var isFriend = this.checkIfFriend(username, response.data, otherUsername);
        this.setState({
          friends: response.data,
          friend: isFriend
        })
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  checkIfFriend(username, friendsList, otherUsername) {
    console.log(username, friendsList);
    for (var i = 0; i < friendsList.length; i++) {
      var user = friendsList[i];
      if (user.username === username) {
        return true;
      }
    }
    return false;
  }

  addFriend() {
    var username = 'mattupham';
    var friendToAdd = 'rayango';
    axios.post(`/${username}/addFriend/${friendToAdd}`)
      .then((response) => {
        this.getFriends();
      })
      .catch((error) => {
        console.log(error);
      }); 
  } 

  removeFriend() {
    var username = 'mattupham';
    var friendToRemove = 'rayango';
    axios.post(`/${username}/removeFriend/${friendToRemove}`)
      .then((response) => {
        this.getFriends();
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  handleNavigation(event) {
    this.setState({
      view: event.target.id
    });
  }

  render() {
    console.log('friends....', this.state.friends);
    return (
      <div className="profile">
        <Profile_backgroundAndProfilePic userInfo={this.state.userInfo} friend={this.state.friend} addFriend={this.addFriend.bind(this)} removeFriend={this.removeFriend.bind(this)} />
        <Profile_navigation handleNavigation={this.handleNavigation.bind(this)} view={this.state.view} />
        <Profile_about view={this.state.view} />
        <Profile_intro view={this.state.view} />
        <Profile_friends friends={this.state.friends} view={this.state.view} />
        <Profile_photos view={this.state.view} />
        <Profile_postSection getUserPosts={this.getUserPosts.bind(this)} username={this.state.username} posts={this.state.posts} view={this.state.view} />
        <div className="backgroundAndProfilePic">
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
          <Button.Group floated="right" basic compact fluid labeled className="navigationButtons">
            <Button className="timeline"> Timeline </Button>
            <Button className="about"> About </Button>
            <Button className="friends"> Friends </Button>
            <Button className="photo"> Photo </Button> 
            <Button className="more"> More </Button>
          </Button.Group>  
        </div>
        <div className="intro">
          <Header className="header"> 
            <Icon loading name="globe"></Icon>
            Intro 
          </Header>
          <List className="items">
            <div className="introduction"> 
              {/*<Icon name="user"></Icon>*/}
              I like to woof and eat treats and I like to roll around in the grass and play frisbee
            </div>
            <Divider fitted></Divider>
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
    );
  }
}

export default Profile;