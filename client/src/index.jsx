import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post.jsx';
import PostList from './components/PostList.jsx';
import Search from './components/Search.jsx';
import Profile from './components/Profile.jsx';

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
        <Search />
        { this.state.view === 'profile' ? <Profile /> : <PostList /> }
        <br />
        <PostList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));