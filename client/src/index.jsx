import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post.jsx';
import PostList from './components/PostList.jsx';
import Search from './components/Search.jsx';
import Profile from './components/Profile.jsx';
import Header from './components/Header.jsx';
<<<<<<< HEAD
import SignIn from './components/SignIn.jsx';
import { Router, Route, Switch, Link } from 'react-router-dom';
=======
import { Router, Route, Switch, Link } from 'react-router-dom'
>>>>>>> added react-route-dom dependency

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'feed'
    };
  }
  render() {
    return (
      <div>
        <Header />
        <SignIn />
        { this.state.view === 'feed' ? <PostList /> : <Profile /> }
        <br />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));