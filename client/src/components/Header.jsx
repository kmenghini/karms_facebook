import React from 'react';
import Search from './Search.jsx';
import { Icon } from 'semantic-ui-react';
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
          <button className="btn">Log Out</button>
          <button className="btn">Profile</button>
          <button className="btn">Feed</button>
        </div>
      </div>
    );
  }
}

export default Header;
        // <img className="logo" />