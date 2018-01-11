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
      console.log(data)
    })
  }
  
  render() {
    return(
      <div className="newUser">
        <h3> Username '{this.props.username}' not found </h3>
        <h4>Sign Up: </h4>
        <Image className="ui tiny images">
          <img src="/images/profile_default.jpg" />
        </Image>

        <Form className="input-form" onSubmit={this.handleSubmit.bind(this)}>
          <Input name="username" type="text" onChange={this.handleInputChange.bind(this)} placeholder="Username"/>
          <Input name="firstName" type="text" onChange={this.handleInputChange.bind(this)} placeholder="First name"/>
          <Input name="lastName" type="text" onChange={this.handleInputChange.bind(this)} placeholder="Last name"/>
          <Input type="submit" value="Create Account"/>
        </Form>
      </div>
    )
  }
}

export default NewUser;

