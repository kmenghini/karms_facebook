import React from 'react';
import { Header, Icon, Image, Button } from 'semantic-ui-react';

class Profile_backgroundAndProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="backgroundAndProfilePic">
        <Image className="backgroundPicture" src="https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg"></Image>
        <Image className="profilePicture" src="/images/profilePage_profilePicture.png"></Image>
        <Header size="large" inverted color="grey" textAlign="center" className="name"> 
          {this.props.userInfo.first_name} {this.props.userInfo.last_name} 
        </Header>
        {this.props.isOwner ? 

          <span></span> :

          this.props.friend ?

          <Button compact animated inverted size="small" className="friendStatus removeFriend" onClick={this.props.removeFriend.bind(this)} >
            <Button.Content visible> 
              <Icon name="check" />
              &nbsp; Friends 
            </Button.Content>  
            <Button.Content hidden> 
              <Icon name="delete" />
              &nbsp; Remove Friend 
            </Button.Content> 
          </Button>

          :

          <Button compact inverted size="small" className="friendStatus addFriend" onClick={this.props.addFriend.bind(this)}>
            <Icon name="add user"/>
            Add Friend
          </Button>
        }
        <Button compact inverted size="small" className="messageFriend">
          <Icon name='comments'/>
          Message Friend
        </Button>
      </div>
    );
  }
}

export default Profile_backgroundAndProfilePic;