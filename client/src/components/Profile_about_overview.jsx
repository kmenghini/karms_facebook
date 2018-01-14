import React from 'react';
import { Divider, Header, List, Icon, Grid, Image, Button, Reveal, Form } from 'semantic-ui-react';

class Profile_about_overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: '',
      editView: ''
    }
  }

  render() {
    return (
      <div className={this.props.aboutView === 'overview' ? 'overview sectionDetails' : 'hide'} >
        <div className="detail">
          <Header> 
            Intro &nbsp;
            <Icon name="edit" onClick={this.handleClick}></Icon>
          </Header>
          <Divider />
          <span> I like to play tag </span>
        </div> 
        <div className="detail">
          <Header> Workplace </Header>
          <Divider />
          <span> Hack Reactor </span>
        </div>
        <div className="detail">
          <Header> Birthday </Header>
          <Divider />
          <span> February 1, 2011 </span>
        </div> 
      </div>
    );
  }
}

export default Profile_about_overview;