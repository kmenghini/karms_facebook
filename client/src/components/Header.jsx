import React from 'react';
import Search from './Search.jsx';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import logo from '../../../rbook.png';

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

  render() {
    return (
      <div className="header"> 
        <Search />
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