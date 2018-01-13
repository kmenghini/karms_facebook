import React from 'react';
import $ from 'jquery';
import {Input, Button, Card} from 'semantic-ui-react';
import NewUser from './NewUser.jsx'
import { Redirect, Link } from 'react-router-dom';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      newUsername: '',
      newUser: false,
      getNewUser: false,
      redirect: false,
      profileShows: false,
      headerShows: false
    };
  }

  handleUsernameInput (e) { 
    this.setState({
      username: e.target.value,
      newUser: false
    });
  }

  handleSubmit(e) {
    console.log('Submitting');
    this.setState({
      newUser: true
    })
  }
  handleLogIn(e) {
    e.preventDefault();

    $.get(`/${this.state.username}`, (data) => {
      console.log(data[0]);
      if (data.length) {
        this.setState({
          username: data[0].username,
          newUser: false,
          redirect: true
        });
        this.getUsername();
        console.log('need to route to feed for', this.state.username)
        //route to feed for this user
      } else {
        this.setState({
          newUser: true,
          getNewUser: true,
          redirect: false
        });
      }
      console.log('in client siginin get request', data)
    })
  }

  getUsername() {
    console.log('Getting username!');
    this.props.getUsername(this.state.username);
  }

  render() {
    let feedPath = '/' + this.state.username + '/feed';
    if (this.state.redirect) {
      return <Redirect push to={feedPath} />;
    }
    return(
      <div className="signIn-page">
        <div className="right-column">
          <h3 id="sign-in"> Sign In </h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
          <Card className="signIn-card">
            <h5 className="signInLabel bottom aligned content">Username</h5>
            <Input className="username-input" type="text" onChange={this.handleUsernameInput.bind(this)}/>
            <Link onClick={this.handleLogIn.bind(this)} to={feedPath}><Button className="login-button"> Log In </Button></Link>
          </Card>
          {this.state.newUser ? <NewUser newUsername={this.state.newUsername} getNewUsername={this.props.getNewUsername} getProfile={this.props.getProfile} /> : null }
          </form>
        </div>
      
      </div>  
    )
  }
}

export default SignIn;