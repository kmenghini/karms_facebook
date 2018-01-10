import React from 'react';
import { Button, Input, Icon } from 'semantic-ui-react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearch(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <Input onClick={this.handleSearch.bind(this)} icon="search" className="search-input" type="text" placeholder="Search" ref="search" />
      </div>
    )
  }
}

export default Search;


// handle click on search icon
// post request to /:username/search/:otherUsername
// query db: select * from user where username === otherUsername
        // <Icon className="search-icon" name="search" />


 // <Button icon>
 //    <Icon name='world' />
 //  </Button>

