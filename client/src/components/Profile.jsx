import React from 'react';
import { Image, Button } from 'semantic-ui-react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profile">
        <div className="backgroundPhoto">
          <Image src="https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg"/>
        </div>  
        <div className="profileNavigation">
          <Button className="timeline"> Timeline </Button>
          <Button className="about"> About </Button>
          <Button className="friends"> Friends </Button>
          <Button className="photo"> Photo </Button> 
          <Button className="more"> More </Button>
        </div>
        <div className="intro">
          <h2> Intro here </h2>
        </div>
        <div className="photos">
          <h2> Photos here </h2>
        </div>
        <div className="makePost">
          <h2> Post here </h2>
        </div>
        <div className="postList">
          <h2> Posts rendered here </h2>
        </div>
        <div className="friendsList">
          <h2> Friends list here </h2>
        </div>
        <div className="messageFriends"> 
          <h2> Message Friends Here </h2>
        </div>
      </div>
    );
  }
}

export default Profile;