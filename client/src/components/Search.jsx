import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearch(event) {
    event.preventDefault();
    let user = this.refs.searchUser.value;
    let userName = 'Shubhra';
    if (user) {
      axios.get(`/${userName}/profile/${user}`)
      .then((res) => {
        this.props.getUserProfile(res.data[0].username);
      })
      .catch((err) => {
        console.log('err: ', err);
      })
    }
    this.refs.searchUser.value = '';
  }


  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSearch.bind(this)}>
        <input 
          className="search-input" 
          type="text" 
          placeholder="Search" 
          ref="searchUser" 
        />
        <button className="search-btn">Find</button>

      </form>
    )
  }
}

export default Search;
  
  // filter results with each letter entered
  // handleInputText(event) {
  //   event.preventDefault();
  //   let user = this.refs.searchUser.value;
  //   let userName = 'Shubhra';
  //   axios.get(`/${userName}/search/${user}`)
  //   .then((res) => {

  //   })
  //   .catch((err) => {
  //     console.log('err: ', err);
  //   })
  // }