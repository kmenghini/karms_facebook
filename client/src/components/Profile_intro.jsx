import React from 'react';
import { Divider, Header, List, Icon } from 'semantic-ui-react';

class Profile_intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.view
    }
  }

  render() {
    return (
      <div className={this.props.view === 'Timeline' ? "intro" : "hide"}>
        <Header className="header"> 
          <Icon loading name="globe"></Icon>
          Intro 
        </Header>
        <List className="items">
          <div className="introduction"> 
            {this.props.profilePageInfo.intro}
          </div>
          <Divider fitted></Divider>
          <List.Item>
            <Icon name="home"></Icon>
            &nbsp; {this.props.profilePageInfo.residence}
          </List.Item>
          <List.Item> 
            <Icon name="industry"></Icon>
            &nbsp; {this.props.profilePageInfo.work}
          </List.Item>
          <List.Item> 
            <Icon name="student"></Icon>
            &nbsp; Hack Reactor
          </List.Item>
          <List.Item>
            <Icon name="heart outline"></Icon>
            &nbsp; {this.props.profilePageInfo.relationship_status}
           </List.Item>
           <List.Item>
            <Icon name="birthday"></Icon>
            &nbsp; {this.props.profilePageInfo.birthday}
           </List.Item>
          </List>
        </div>
    );
  }
}

export default Profile_intro;