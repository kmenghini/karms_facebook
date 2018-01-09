import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post.jsx';
import PostList from './components/PostList.jsx';
<<<<<<< HEAD
import Search from './components/Search.jsx';
=======
import Profile from './components/Profile.jsx';
>>>>>>> create Profile component, import in index.jsx and add to rendering, add server route to retrieve posts of profile page"s user

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Search />
        <PostList />
        <br/>
        <Profile />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));