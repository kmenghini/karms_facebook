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
      username: e.target.value,
      newUser: false
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
      <div className="signIn-page">
        <div className="right-column">
          <h3 id="sign-in"> Sign In </h3>
          <Card className="signIn-card">
            <h5 className="bottom aligned content">Username</h5>
            <Input className="username-input" type="text" onChange={this.handleUsernameInput.bind(this)}/>

            <Button className="login-button" onClick={this.handleLogIn.bind(this)}> Log In </Button>
          </Card>
          {this.state.newUser ? <NewUser username={this.state.username}/> : null }
        </div>
      </div>  
    )
  }
}

export default SignIn;