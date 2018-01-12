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
      pictureUrl: '/images/profile_default.jpg'
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
    $.post(`/${this.state.username}`, this.state, data => {
      console.log('post into db done!')
      //route to feed for this user
    })
  }
  
  render() {
    return(
      <div className="newUser">
        <h3><font color="red"> Username '{this.props.username}' not found </font></h3>
        <h4 id="new-account-title">Create a New Account</h4>
        <Card className="new-user-card">
          <Image className="ui tiny images" src="/images/profile_default.jpg"/>
          <Form className="input-form" onSubmit={this.handleSubmit.bind(this)}>
            <Input name="username" type="text" onChange={this.handleInputChange.bind(this)} placeholder="Username"/>
            <Input name="firstName" type="text" onChange={this.handleInputChange.bind(this)} placeholder="First name"/>
            <Input name="lastName" type="text" onChange={this.handleInputChange.bind(this)} placeholder="Last name"/>
            <Input className="login-button" id="create-account" type="submit" value="Create Account"/>
          </Form>
        </Card>
      </div>
    )
  }
}

export default NewUser;

