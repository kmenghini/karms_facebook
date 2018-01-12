import React from 'react';
import Search from './Search.jsx';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFeedClick() {
    
  }

  handleProfileClick() {

  }

  handleLogOutClick() {

  }

  getUserProfile(user) {
    this.props.getProfile(user);
    console.log('from header.jsx', user); 
  }


  render() {
    return (
      <div className="header"> 
        <Image className="logo" src="/images/rbook.png"></Image>
        <Search getUserProfile={this.getUserProfile.bind(this)}/>
        <div className="header-btn">
          <Link to='/login'><button className="btn" onClick={this.handleLogOutClick.bind(this)}>Log Out</button></Link>
          <Link to='/profile'><button className="btn" onClick={this.handleProfileClick.bind(this)}>Profile</button></Link>
          <Link to='/feed'><button className="btn" onClick={this.handleFeedClick.bind(this)}>Feed</button></Link>
        </div>
      </div>
    );
  }
}

export default Header;
        // <img className="logo" />