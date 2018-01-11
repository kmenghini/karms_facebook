import React from 'react';
import $ from 'jquery';
import {Input, Button, Card} from 'semantic-ui-react';
import NewUser from './NewUser.jsx'

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: undefined,
      newUser: true
    };
  }

  handleUsernameInput (e) { 
    this.setState({
      username: e.target.value
    });
  }

  handleLogIn(e) {
    $.get(`/${this.state.username}`, data => {
      console.log(data)
      //if we get data back from db
        //load feed
      //else
        //setState({
        //  newUser: true
        //})
    })
  }
  
  render() {
    return(
      <div className="signIn">
        <h3> Sign In: </h3>
        <Card>
          <h5>Username</h5>
          <Input className="username-input" type="text" onChange={this.handleUsernameInput.bind(this)}/>
          <Button onClick={this.handleLogIn.bind(this)}> Log In </Button>
        </Card>
        <Card>
          {this.state.newUser ? <NewUser username={this.state.username}/> : null }
        </Card>
      </div>
    )
  }
}

export default SignIn;