import React from 'react';
import Search from './Search.jsx';
import { Icon } from 'semantic-ui-react';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header"> 
        <Search />
      </div>
    );
  }
}

export default Header;