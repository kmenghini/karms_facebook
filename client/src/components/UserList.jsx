import React from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react'

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [{text: 'Albert Chang'}, 'Kaitlyn Menghini', 'Matt Upham', 'Ryan Ngo', 'Shubhra Jain']
    }
  }
  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers() {
    axios.get()
      .then((res) => {

      })
      .catch((err) => {

      })
  }
  render() {
    return (
      <div>
        <Dropdown placeholder='Select Country' fluid search selection options={this.state.userList} />
      </div>
    )
  }
}

export default UserList;