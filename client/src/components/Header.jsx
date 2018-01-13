import React from 'react';
import Search from './Search.jsx';
import { Icon, Image } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePath: '',
      feedPath: '',
      redirectProfile: false,
      username: window.location.pathname.substring(1, window.location.pathname.indexOf('/feed'))
    }
  }
  componentDidMount() {
    // this.props.getUsername(this.props.name);
    console.log(this.props.name);
  }
  handleFeedClick() {
    
  }
  handleProfileClick() {
    this.setState({
      redirectProfile: true
      // profilePath: '/' + this.props.name + '/profile'
    })
  }
  handleLogOutClick() {

  }
  getUserProfile(user) {
    this.props.getProfile(user);
  }
  render() { 
    const profilePath = '/' + this.props.name + '/profile';
    console.log(profilePath);
    const feedPath = '/' + this.props.name + '/feed';
    console.log(feedPath);
    return (
      <div className="header"> 
        <Image className="logo" src="/images/rbook.png"></Image>
        <Search getUserProfile={this.getUserProfile.bind(this)}/>
        <div className="header-btn">
          <Link to='/login'><button className="btn" onClick={this.handleLogOutClick.bind(this)}>Log Out</button></Link>
          <Link to={profilePath}><button className="btn">Profile</button></Link>
          <Link to={feedPath}><button className="btn" onClick={this.handleFeedClick.bind(this)}>Feed</button></Link>
        </div>
      </div>
    );
  }
}

export default Header;
