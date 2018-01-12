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
    // console.log(this.state.username)
    // if (this.state.getNewUser === true) {
    //   this.setState({
    //     newUser: true
    //   })
    // }
    e.preventDefault();
    // this.setState({
    //   redirect: true
    // })

    $.get(`/${this.state.username}`, (data) => {
      if (data.length) {
        this.setState({
          username: data[0].username,
          newUser: false,
          redirect: true
        });
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
  
  render() {
    // console.log(this.state.username);
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
            <h5 className="bottom aligned content">Username</h5>
            {/* {(!this.state.newUser) ? <Link to='/feed' /> : <Link to='/profile' />} */}
            <Input className="username-input" type="text" onChange={this.handleUsernameInput.bind(this)}/>
            <Link onClick={this.handleLogIn.bind(this)} to={feedPath}><Button className="login-button"> Log In </Button></Link>
          </Card>
          {this.state.newUser ? <NewUser username={this.state.username}/> : null }
          </form>
        </div>
        {/* {(this.state.profileShows) ? <Profile profileName={this.state.username} /> : null} */}
        {(this.state.headerShows) ? <Header name={this.state.username} /> : null}
      </div>  
    )
  }
}

export default SignIn;