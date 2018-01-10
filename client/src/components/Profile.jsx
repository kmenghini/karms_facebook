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
        <div class="profileNavigation">
          <h2> Profile navigation here </h2>
        </div>
      </div>
    );
  }
}

export default Profile;