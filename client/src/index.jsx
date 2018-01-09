import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post.jsx';
import PostList from './components/PostList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <PostList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));