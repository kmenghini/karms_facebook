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
            {/*<Icon name="user"></Icon>*/}
            I like to woof and eat treats and I like to roll around in the grass and play frisbee
          </div>
          <Divider fitted></Divider>
          <List.Item>
            <Icon name="home"></Icon>
            &nbsp; Lives in San Francisco, CA 
          </List.Item>
          <List.Item> 
            <Icon name="industry"></Icon>
            &nbsp; Woofer Inc.
          </List.Item>
          <List.Item> 
            <Icon name="student"></Icon>
            &nbsp; Hack Reactor 
          </List.Item>
          <List.Item>
            <Icon name="heart outline"></Icon>
            &nbsp; Single 
           </List.Item>
           <List.Item>
            <Icon name="birthday"></Icon>
            &nbsp; January 1, 2017 
           </List.Item>
          </List>
        </div>
    );
  }
}

export default Profile_intro;