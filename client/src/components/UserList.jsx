import React from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react'

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [{text: 'Albert Chang'}, 'Kaitlyn Menghini', 'Matt Upham', 'Ryan Ngo', 'Shubhra Jain'],
      selectedUser: ''
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
  selectUser(e) {
    this.setState({
      selectedUser: e.target.textContent
    })
  }
  render() {
    const { value } = this.state.selectedUser;
    console.log(value);
    return (
      <div>
        <Dropdown onChange={this.selectUser.bind(this)} placeholder='Select Country' fluid search selection options={this.state.userList} value={value}/>
      </div>
    )
  }
}

export default UserList;