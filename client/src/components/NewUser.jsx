import React from 'react';
import $ from 'jquery';
import {Input, Button, Card, Image, Form, Field} from 'semantic-ui-react';

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      firstName: undefined,
      lastName: undefined,
      pictureUrl: '/images/profile_default.jpg',
      newUsername: ''
    }
    console.log(this.props.username);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    this.setState({
      newUsername: this.state.username
    })
    $.post(`/${this.state.username}`, this.state, (data) => {
      console.log('post into db done!')
      //route to feed for this user
    })
  }

  getNewUsername() {
    this.props.getUsername(this.state.newUsername);
  }
  
  render() {
    console.log(this.state.newUsername);
    let newUserFeedPath = '/' + this.state.newUsername + '/feed';
    console.log(newUserFeedPath);
    return(
      <div className="newUser">
        <h3><font color="red"> Username '{this.props.username}' not found. </font></h3>
        <h4 id="new-account-title">Create a New Account</h4>
        <Card className="new-user-card">
          <Image className="ui tiny images" src="/images/profile_default.jpg"/>
          <Form className="input-form" onSubmit={this.handleSubmit.bind(this)}>
            <p className="newUserLabel"><strong>Username</strong></p>
            <Input className="newUserInput" name="username" type="text" onChange={this.handleInputChange.bind(this)} placeholder="Username"/>
            <p className="newUserLabel"><strong>First Name</strong></p>
            <Input className="newUserInput" name="firstName" type="text" onChange={this.handleInputChange.bind(this)} placeholder="First name"/>
            <p className="newUserLabel"><strong>Last Name</strong></p>
            <Input className="newUserInput" name="lastName" type="text" onChange={this.handleInputChange.bind(this)} placeholder="Last name"/>
            <Input className="login-button" id="create-account" type="submit" value="Create Account"/>
          </Form>
        </Card>
      </div>
    )
  }
}

export default NewUser;

