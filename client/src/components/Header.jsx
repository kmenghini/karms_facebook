import React from 'react';
import Search from './Search.jsx';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import logo from '../../../rbook.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header"> 
        <Search />
        <div className="header-btn">
          <Link to='/login'><button className="btn">Log Out</button></Link>
          <Link to='/profile'><button className="btn">Profile</button></Link>
          <Link to='/feed'><button className="btn">Feed</button></Link>
        </div>
      </div>
    );
  }
}

export default Header;
        // <img className="logo" />