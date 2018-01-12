import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.jsx';
import Post from './components/Post.jsx';
import PostList from './components/PostList.jsx';
import Search from './components/Search.jsx';
import Profile from './components/Profile.jsx';
import Header from './components/Header.jsx';
import Feed from './components/Feed.jsx';
import SignIn from './components/SignIn.jsx';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'feed',
      profile: false
    };
  }

  getProfile(user) {
    // axios call to db to get profile
    axios.get(`/${user}`) 
    .then((res) => {
      console.log('res: ', res.data[0]);
      // TODO
      this.setState({
        profile: true
      })
    })
    .catch((err) => {
      console.log('err: ', err);
    })
  }

  render() {
    return (
      <div>
        <Header getProfile={this.getProfile.bind(this)}/>
        {/* <Feed /> */}
        {/* { this.state.view === 'profile' ? <Profile /> : <PostList /> }
        <br />
        <PostList /> */}
        <Main />
        {/* <Header /> */}
        {/* <SignIn /> */}
        {/* { this.state.view === 'feed' ? <PostList /> : <Profile /> } */}
        <br />
        {(this.state.profile) ? <Profile getProfile={this.getProfile.bind(this)}/> : null}
      </div>
    )
  }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
export default App;