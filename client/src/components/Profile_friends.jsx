import React from 'react';
import { Divider, Header, List, Icon } from 'semantic-ui-react';

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
        <span className="friendCount">
          &nbsp; · &nbsp; {this.props.friends.length}
        </span>
        <List className="items">
          <Divider fitted></Divider>
          <List.Item> Friend 1 </List.Item>
          <List.Item> Friend 2 </List.Item>
          <List.Item> Friend 3 </List.Item>
        </List>
      </div>
    );
  }
}

export default Profile_friends;