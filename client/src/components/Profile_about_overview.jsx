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
        <div className="detail shortIntro">
          <Header> 
            Intro &nbsp;
          </Header>
          <Icon size="large" link name="edit" onClick={this.handleClick}></Icon>
          <Divider />
          <span> I like to play tag </span>
        </div> 
        <div className="detail residence">
          <Header> Residence </Header>
          <Icon size="large" link name="edit" onClick={this.handleClick}></Icon>
          <Divider />
          <span> San Francisco, CA </span>
        </div> 
        <div className="detail work">
          <Header> Workplace </Header>
          <Icon size="large" link name="edit" onClick={this.handleClick}></Icon>
          <Divider />
          <span> Unemployed </span>
        </div>
        <div className="detail education">
          <Header> Workplace </Header>
          <Icon size="large" link name="edit" onClick={this.handleClick}></Icon>
          <Divider />
          <span> Hack Reactor </span>
        </div>
        <div className="detail birthday">
          <Header> Birthday </Header>
          <Icon size="large" link name="edit" onClick={this.handleClick}></Icon>
          <Divider />
          <span> February 1, 2011 </span>
        </div>
        <div className="detail relationshipStatus">
          <Header> Birthday </Header>
          <Icon size="large" link name="edit" onClick={this.handleClick}></Icon>
          <Divider />
          <span> Single </span>
        </div>  
      </div>
    );
  }
}

export default Profile_about_overview;