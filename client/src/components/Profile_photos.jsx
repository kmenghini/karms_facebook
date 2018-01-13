import React from 'react';
import { Divider, Header, List, Icon, Grid, Image } from 'semantic-ui-react';

class Profile_photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Timeline'
    }
  }

  render() {
    return (
      <div className={this.state.view === 'Timeline' ? "photosList" : "hide"}>
        <Header className="header"> 
          <Icon name="camera"></Icon>
          Photos
        </Header>
        <span className="photosCount">
          &nbsp; · &nbsp; {'2 photos'}
        </span>
        <div className="photos">
          {/*
            this.props.friends.map((friend) => (
              <div className="friend">
                <img src="/images/profile_default.jpg" />
                <span class="friendName"> {friend.first_name} {friend.last_name} </span>
              </div>  
            ))
          */}
          <img src="/images/profile_default.jpg" />
          <img src="/images/profile_default.jpg" />
          <img src="/images/profile_default.jpg" />
          <img src="/images/profile_default.jpg" />
          <img src="/images/profile_default.jpg" />
          <img src="/images/profile_default.jpg" />
        </div>
      </div>
    );
  }
}

export default Profile_photos;