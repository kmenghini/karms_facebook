import React from 'react';
import $ from 'jquery';
import {Input, Button, Card} from 'semantic-ui-react';
import NewUser from './NewUser.jsx'

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: undefined,
      newUser: false
    };
  }

  handleUsernameInput (e) { 
    this.setState({
      username: e.target.value
    });
  }

  handleLogIn(e) {
    console.log(this.state.username)
    $.get(`/${this.state.username}`, (data) => {
      if (data.length) {
        this.setState({
          username: data[0].username
        });
        console.log('need to route to feed for', this.state.username)
        //route to feed for this user
      } else {
        this.setState({
          newUser: true
        });
      }
      console.log('in client siginin get request', data)
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