import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profile">
        <img className="backgroundPhoto" src="http://clv.h-cdn.co/assets/15/31/980x490/landscape-1438196158-indexgettyimages-175075399.jpg"/>
      </div>
    );
  }
}

export default Profile;