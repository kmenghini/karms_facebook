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
      username: props.match.params.friendname, // not an error, do not change
      profilePageOwner: props.match.params.username, // not an error, do not change
      profilePageInfo: '',
      isOwner: true,
      userInfo: {},
      view: 'Timeline'
    }
  }

  componentDidMount() {
    this.getUserInfo();
    this.getUserPosts();
    this.getFriends();
    this.getUserProfileInfo();
  }  

  getUserInfo() {
    var user = this.state.profilePageOwner;
    axios.get(`/${user}`)
      .then((responseUserInfo) => {
        this.setState({
          userInfo: responseUserInfo.data[0],
          isOwner: this.state.username === this.state.profilePageOwner
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  getUserProfileInfo() {
    var user = this.state.profilePageOwner;
    console.log('user...', this.state.profilePageOwner)
    axios.get(`/${user}/profilePage`)
      .then((responseUserProfileInfo) => {
        console.log('profile page info....', responseUserProfileInfo);
        this.setState({
          profilePageInfo: responseUserProfileInfo.data['0'].user_data
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  getUserPosts() {
    var username = this.state.username;
    var profilePageOwner = this.state.profilePageOwner;
    axios.get(`/${username}/posts/${profilePageOwner}`)
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
    var otherUsername = this.state.profilePageOwner;
    axios.get(`/${username}/friendsList/${otherUsername}`)
      .then((response) => {
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
    var username = this.state.username;
    var friendToAdd = this.state.profilePageOwner;
    axios.post(`/${username}/addFriend/${friendToAdd}`)
      .then((response) => {
        this.getFriends();
      })
      .catch((error) => {
        console.log(error);
      }); 
  } 

  removeFriend() {
    var username = this.state.username;
    var friendToRemove = this.state.profilePageOwner;
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

  updateProfile() {

  }

  render() {
    return (
      <div className="profile">
        <Profile_backgroundAndProfilePic userInfo={this.state.userInfo} friend={this.state.friend} addFriend={this.addFriend.bind(this)} removeFriend={this.removeFriend.bind(this)} isOwner={this.state.isOwner} profilePageInfo={this.state.profilePageInfo} />
        <Profile_navigation handleNavigation={this.handleNavigation.bind(this)} view={this.state.view} />
        <Profile_about view={this.state.view} />
        <Profile_intro view={this.state.view} profilePageInfo={this.state.profilePageInfo} />
        <Profile_friends friends={this.state.friends} view={this.state.view} />
        <Profile_photos view={this.state.view} />
        <Profile_postSection getUserPosts={this.getUserPosts.bind(this)} username={this.state.username} posts={this.state.posts} view={this.state.view} isOwner={this.state.isOwner} />
      </div>
    );
  }
}

export default Profile;