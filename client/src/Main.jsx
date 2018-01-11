import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './index.jsx';
import PostList from './components/PostList.jsx';
import Profile from './components/Profile.jsx';
import SignIn from './components/SignIn.jsx';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/feed' component={PostList} />
      <Route path='/login' component={SignIn} />
      <Route path='/profile' component={Profile} />
    </Switch>
  </main>
)

export default Main;