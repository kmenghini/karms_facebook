import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import UserList from './User.jsx';
import axios from 'axios';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gettingUser: false,
      // users: []
      users: [{key: 1, text: 'Shubhra'}, {key: 2, text: 'Albert'}, {key: 3, text: 'Ryan'}, {key: 4, text: 'Kaitlyn'}, {key: 5, text: 'Matt'}]
    }
  }

  getAllUsers() {
    this.setState ({
      users: [{key: 1, text: 'Shubhra'}, {key: 2, text: 'Albert'}, {key: 3, text: 'Ryan'}, {key: 4, text: 'Kaitlyn'}, {key: 5, text: 'Matt'}]
    }); 
    // let userName = 'ShubhraJain'
    //   axios.get(`/${userName}/user`)
    //   .then((res) => {
    //     console.log(res);
    //     this.setState ({
    //       users: res
    //     })      
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
  }

  render() {
    return (
      <div className="search-bar">
        <Dropdown 
          className="search-input" 
          // onClick={this.getAllUsers.bind(this)} 
          placeholder='Search' 
          fluid search selection 
          options={this.state.users} />
      </div>
    )
  }
}

export default Search;

// handle click on search icon
// post request to /:username/search/:otherUsername
// query db: select * from user where username === otherUsername
