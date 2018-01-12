import React from 'react';
import CreatePost from './CreatePost.jsx';
import PostList from './PostList.jsx';
import axios from 'axios';
import { Button, Icon, Image, Header, List, Item, Divider, Menu, Advertisement } from 'semantic-ui-react';


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: []
    }
  }
  componentDidMount() {
    this.getAllPosts();
  }
  getAllPosts() {
    let username = 'albertchanged';
    axios.get(`/${username}/posts`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          postList: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="feedContainer">

        <div className="feedSidebar">

          <div className = "feedSidebarUser">

            {/* <Button icon labelPosition='left' fluid>
              <Image src='/images/profile_default.jpg' />
              User Name
            </Button> */}

            <Button icon labelPosition='left' fluid className="feedSideBarUserButton">
              <Icon name='user' />
              User's Name
            </Button>
   
            <Button icon labelPosition='left' fluid className="feedSideBarUserButton">
              <Icon name='browser' />
              Feed
            </Button>
            <Button icon labelPosition='left' fluid className="feedSideBarUserButton">
              <Icon name='mail outline' />
              Messages
            </Button>
            <Button icon labelPosition='left' fluid className="feedSideBarUserButton">
              <Icon name='video play outline' />
              Watch
            </Button>
            <Button icon labelPosition='left' fluid className="feedSideBarUserButton">
              <Icon name='shop' />
              Marketplace
            </Button>
          </div>

          <div>Explore</div>

          <div className = "feedSidebarExplore" >
            <Button icon labelPosition='left' fluid className="feedSideBarUserButton">
              <Icon name='calendar' />
              Events
            </Button>
            <Button icon labelPosition='left' fluid className="feedSideBarUserButton">
              <Icon name='fa' />
              Groups
            </Button>
            <Button icon labelPosition='left' fluid className="feedSideBarUserButton">
              <Icon name='group' />
              Friends
            </Button>
            <Button icon labelPosition='left' fluid className="feedSideBarUserButton">
              <Icon name='bookmark' />
              Saved
            </Button>
          </div>
        </div>

        <div className="feedContent">
          <PostList postList={this.state.postList} getAllPosts={this.getAllPosts.bind(this)}/>
        </div>

        <div className="feedSidebar">
        
          <div className="feedSidebarTrending">
            <p>Trending</p>
            <Item.Group className="feedSidebarTrendingItem">
              <Item>
                <Icon name='lightning' />
                <Item.Content>  
                  <div className="feedSidebarTrendingTopicHeader">Trending Topic</div>
                  <Item.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Item.Description>
                  <Item.Extra>loremipsum.com</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
            <Item.Group className="feedSidebarTrendingItem">
              <Item>
                <Icon name='lightning' />
                <Item.Content>  
                  <div className="feedSidebarTrendingTopicHeader">Trending Topic</div>
                  <Item.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Item.Description>
                  <Item.Extra>loremipsum.com</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
            <Item.Group className="feedSidebarTrendingItem">
              <Item>
                <Icon name='lightning' />
                <Item.Content>  
                  <div className="feedSidebarTrendingTopicHeader">Trending Topic</div>
                  <Item.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Item.Description>
                  <Item.Extra>loremipsum.com</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </div>

          <div className="feedSidebarAds">
            <Item.Group className="feedSidebarAdItem">
            <Item>
              <Icon name='external' />
              <Item.Content>  
                <div className="feedSidebarTrendingTopicHeader">Advertisement</div>
                <Item.Description>
                  <Advertisement unit='medium rectangle' test='Medium Rectangle' centered="true"/>
                </Item.Description>
                <Item.Extra>loremipsum.com</Item.Extra>
              </Item.Content>
              </Item>
            </Item.Group>
          </div>

        </div>
      </div>
    );
  }
}

export default Feed;
