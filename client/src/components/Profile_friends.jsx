import React from 'react';
import { Divider, Header, List, Icon, Grid, Image } from 'semantic-ui-react';

class Profile_friends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="friendsList">
        <Header className="header"> 
          <Icon name="users"></Icon>
          Friends
        </Header>
        <span className="friendsCount">
          &nbsp; · &nbsp; {this.props.friends.length}
        </span>
        <div className="friends">
          {
            this.props.friends.map((friend) => (
              <div className="friend">
                <img src="/images/profile_default.jpg" />
                {/*<span className="friendName"> {friend.first_name} {friend.last_name} </span>*/}
              </div>  
            ))
          }
          <img src="/images/profile_default.jpg" />
          <img src="/images/profile_default.jpg" />
          <img src="/images/profile_default.jpg" />
          <img src="/images/profile_default.jpg" />
        </div>
      </div>
    );
  }
}

export default Profile_friends;