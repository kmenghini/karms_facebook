import React from 'react';
import { Divider, Header, List, Icon, Grid, Image } from 'semantic-ui-react';

class Profile_friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.view
    }
  }

  render() {
    return (
      <div className={this.props.view === 'Timeline' ? "friendsList" : "hide"}>
        <Header className="header"> 
          <Icon name="users"></Icon>
          Friends
        </Header>
        <span className="friendsCount">
          &nbsp; · &nbsp; {this.props.friends.length} friends
        </span>
        <div className="friends">
          {
            this.props.friends.slice(0, 9).map((friend) => (
              <div className="friend">
                <img src="/images/profile_default.jpg" />
                <span className="friendName"> {friend.first_name} {friend.last_name} </span>
              </div>  
            ))
          }
        </div>
      </div>
    );
  }
}

export default Profile_friends;