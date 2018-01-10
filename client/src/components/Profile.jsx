import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profile">
        <div className="backgroundPhoto">
          <h1> Background photo here </h1>
        </div>  
        <div className="profileNavigation">
          <h2> Profile navigation here </h2>
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