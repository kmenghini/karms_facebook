import React from 'react';
import { Divider, Header, List, Icon, Grid, Image } from 'semantic-ui-react';

class Profile_photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.view
    }
  }

  render() {
    return (
      <div className={this.props.view === 'Timeline' ? "photosList" : "hide"}>
        <Header className="header"> 
          <Icon name="camera"></Icon>
          Photos
        </Header>
        <span className="photosCount">
          &nbsp; · &nbsp; {'1 photo'}
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
          <img src="https://pbs.twimg.com/profile_images/926008201127931904/MQI9hqOg.jpg" />
        </div>
      </div>
    );
  }
}

export default Profile_photos;