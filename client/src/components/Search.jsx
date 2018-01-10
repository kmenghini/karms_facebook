import React from 'react';
import { Input, Icon } from 'semantic-ui-react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header"> 
        <Icon icon="facebook"/>     
        <div className="search-bar">
          <Input icon="search" className="search-input" type="text" placeholder="Search" ref="search" />
        </div>
      </div>
    )
  }
}

export default Search;


// handle click on search icon
// post request to /:username/search/:otherUsername
// query db: select * from user where username === otherUsername
        // <Icon className="search-icon" name="search" />