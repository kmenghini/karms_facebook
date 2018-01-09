import React from 'react';
// import icon group

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search">
        <input className="search-bar" type="text" placeholder="Search" ref="search" />
        <i class="search small icon"></i>
      </div>
    )
  }
}

export default Search;


// handle click on search icon
// post request to /:username/search/:otherUsername
// query db: select * from user where username === otherUsername