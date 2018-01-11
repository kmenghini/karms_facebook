import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post.jsx';
import PostList from './components/PostList.jsx';
import Search from './components/Search.jsx';
import Profile from './components/Profile.jsx';
import Header from './components/Header.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import SignIn from './components/SignIn.jsx';
import { Router, Route, Switch, Link } from 'react-router-dom';
=======
import { Router, Route, Switch, Link } from 'react-router-dom'
>>>>>>> added react-route-dom dependency
=======
import SignIn from './components/SignIn.jsx';
import { Router, Route, Switch, Link } from 'react-router-dom';
>>>>>>> added NewUser component
=======
import SignIn from './components/SignIn.jsx';
import { Router, Route, Switch, Link } from 'react-router-dom';
>>>>>>> 538e9d047d731191346ba9f35b1ee2fb1e091647

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'postList'
    };
  }
  render() {
    return (
      <div>
        <Header />
        <SignIn />
        { this.state.view === 'profile' ? <Profile /> : <PostList /> }
        <br />
        <PostList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));