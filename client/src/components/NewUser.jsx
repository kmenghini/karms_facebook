import React from 'react';
import $ from 'jquery';
import {Input, Button, Card, Image, Form, Field} from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      firstName: undefined,
      lastName: undefined,
      pictureUrl: '/images/profile_default.jpg',
      newUsername: '',
      redirect: false
    }
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
      this.setState({
        redirect: true,
        newUsername: this.state.username
      })
      this.props.getNewUsername(this.state.username);
    })
  }
  
  render() {
    // console.log(this.state.newUsername);
    let newUserFeedPath = '/' + this.state.newUsername + '/feed';
    // console.log(newUserFeedPath);
    if (this.state.redirect) {
      return <Redirect push to={newUserFeedPath} />;
    }
    return(
      <div className="newUser">
        {this.props.usernameError ?
        <h3><font color="red"> Username '{this.props.username}' doesn't match any account.</font></h3> : null}
        <h4 id="new-account-title">Create a New Account</h4>
        <Card className="new-user-card">
          <Image className="ui tiny images" src="/images/profile_default.jpg"/>
          <Form className="input-form" onSubmit={this.handleSubmit.bind(this)}>
            <Input className="newUserInput" name="username" type="text" onChange={this.handleInputChange.bind(this)} placeholder="Username"/>
            <Input className="newUserInput" name="firstName" type="text" onChange={this.handleInputChange.bind(this)} placeholder="First name"/>
            <Input className="newUserInput" name="lastName" type="text" onChange={this.handleInputChange.bind(this)} placeholder="Last name"/>
            <Input className="login-button" id="create-account" type="submit" value="Create Account"/>
          </Form>
        </Card>
      </div>
    )
  }
}

export default NewUser;

