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
      name: '',
      picture_url: '',
      username: ''
    };
  }

  getProfile(user) {
    // axios call to db to get profile
    axios.get(`/${user}`) 
    .then((res) => {
      console.log('res: ', res.data[0]);
      this.setState({
        view: 'profile',
        name: res.data[0].first_name,
        picture_url: res.data[0].picture_url,
        username: res.data[0].username
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

        {(this.state.view) ? <Profile 
                                  username={this.state.username}
                                  name={this.state.name} 
                                  picture_url={this.state.picture_url} 
                                  getProfile={this.getProfile.bind(this)}
                                /> : null}
      </div>
    )
  }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
export default App;