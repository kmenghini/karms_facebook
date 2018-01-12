import React from 'react';
import axios from 'axios';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gettingUser: false,
      users: [],
      selectedUser: ''
    }
  }

  handleSearch(event) {
    event.preventDefault();
    let user = this.refs.searchUser.value;
    let userName = 'Shubhra';
    if (user) {
      axios.get(`/${userName}/profile/${user}`)
      .then((res) => {
        console.log('res: ', res.data);
        this.props.getUserProfile(user);
        // this.setState ({
        //   users: res
        // }) 
      })
      .catch((err) => {
        console.log('err: ', err);
      })
    }
    this.refs.searchUser.value = '';
  }

  // TODO if enough time
  // handleKeyPress(event) {
  //   if (event.key !== 'Enter') {
  //     console.log('hi');
  //     axios.get(`/${userName}/user`)
      
      
  //     // call to db to show results related to search string
  //   }
  // }


  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSearch.bind(this)}>
        <input 
          className="search-input" 
          type="text" 
          placeholder="Search" 
          ref="searchUser" 
          // onKeyPress={this.handleKeyPress.bind(this)}
        />
        <button className="search-btn">Find</button>
      </form>
    )
  }
}

export default Search;

  // TODO if enough time
  // handleKeyPress(event) {
  //   if (event.key !== 'Enter') {
  //     console.log('hi');
  //     axios.get(`/${userName}/user`)
      
      
  //     // call to db to show results related to search string
  //   }
  // }

  // getAllUsers() {
  //   this.setState ({
  //     // users: [{key: 1, text: 'Shubhra'}, 
  //     //         {key: 2, text: 'Albert'}, 
  //     //         {key: 3, text: 'Ryan'}, 
  //     //         {key: 4, text: 'Kaitlyn'}, 
  //     //         {key: 5, text: 'Matt'}]
  //     // selectedUser: 
  //   }); 

  // selectUser(e, { data }) {
  //   console.log('event: ', e);
  //   console.log('data:', data);
  //   // this.setState({
  //   //   selectedUser: data.value
  //   // })
  // }
        
        // <Dropdown 
          // className="search-input" 
          // placeholder='Search' 
          // fluid
          // search
          // selection 
          // options={this.state.users}
          // ref="searchUser"
          // onChange={this.selectUser.bind(this)} 
          // onSearchChange={this.handleSearchChange}
          // value={value} 
          // />

// handle click on search icon
// post request to /:username/search/:otherUsername
// query db: select * from user where username === otherUsername
