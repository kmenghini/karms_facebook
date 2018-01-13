import React from 'react';
import CreatePost from './CreatePost.jsx';
import Post from './Post.jsx';
import PostList from './PostList.jsx';
import FBHeader from './Header.jsx';
import Profile_friends from './Profile_friends.jsx';
import Profile_photos from './Profile_photos.jsx';
import axios from 'axios';
import { Image, Button, Header, List, Item, Divider, Icon, Menu } from 'semantic-ui-react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      friends: [],
      friend: false,
      userInfo: {},
      activeTab: 'Timeline'
    }
  }

  componentDidMount() {
    this.getUserPosts();
    this.getFriends();
    this.getUserInfo();
  }  

  getUserInfo() {
    var user = 'albertchanged'; 
    axios.get(`/${user}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          userInfo: response.data[0]
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  getUserPosts() {
    let username = this.props.match.params.username;
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
    // let username = this.props.match.params.username;
    var username = 'albertchanged';
    var otherUsername = 'rayango';
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
    axios.post(`/${username}/${friendToAdd}`)
      .then((response) => {
        this.getFriends();
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
          <Header size="large" inverted color="grey" textAlign="center" className="name"> {this.state.userInfo.first_name} {this.state.userInfo.last_name} </Header>
          { this.state.friend ?

            <Button compact inverted size="small" className="friendStatus">
              <Icon name="check" />
              &nbsp; Friends 
            </Button>

            :

            <Button compact inverted size="small" className="friendStatus addFriend" onClick={this.addFriend.bind(this)}>
              <Icon name="add user"/>
              Add Friend
            </Button>
          }
          <Button compact inverted size="small" className="messageFriend">
            <Icon name='comments'/>
            Message Friend
          </Button>
        </div>
        <div className="profileNavigation">
          <Button.Group floated="right" basic compact fluid labeled className="navigationButtons">
            <Button className="timeline active"> Timeline </Button>
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
             <List.Item>
              <Icon name="birthday"></Icon>
              &nbsp; January 1, 2017 
             </List.Item>
          </List>
        </div>
        <Profile_friends friends={this.state.friends}/>
        <Profile_photos />
        {/*<div className="makePost">
          <CreatePost renderNewPost={this.getUserPosts.bind(this)}/>
        </div>*/}
        <div className="postSection">
          <CreatePost renderNewPost={this.getUserPosts.bind(this)} />  
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