import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post.jsx';
import PostList from './components/PostList.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Search />
        <PostList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));