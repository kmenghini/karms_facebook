import React from 'react';
import Search from './Search.jsx';
import { Icon, Image } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectedProfile: false
    }
  }

  handleFeedClick() {

  }

  handleProfileClick() {
    this.setState({
      redirectedProfile: true
    })
  }

  handleLogOutClick() {

  }

  getUserProfile(user) {

    this.props.getProfile(user);
  }


  render() {
    console.log(this.props.name);
    let profilePath = '/' + this.props.name + '/profile';
    console.log(profilePath);
    if (this.state.redirectedProfile) {
      return <Redirect push to={profilePath} />
    }
    return (
      <div className="header"> 
        <Image className="logo" src="/images/rbook.png"></Image>
        <Search getUserProfile={this.getUserProfile.bind(this)}/>
        <div className="header-btn">
          <Link to='/login'><button className="btn" onClick={this.handleLogOutClick.bind(this)}>Log Out</button></Link>
          <Link onClick={this.handleProfileClick.bind(this)} to={profilePath}><button className="btn">Profile</button></Link>
          <Link to='/feed'><button className="btn" onClick={this.handleFeedClick.bind(this)}>Feed</button></Link>
        </div>
      </div>
    );
  }
}

export default Header;
