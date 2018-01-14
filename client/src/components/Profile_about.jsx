import React from 'react';
import { Divider, Header, List, Icon, Grid, Image, List } from 'semantic-ui-react';

class Profile_about extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.view
    }
  }

  render() {
    return (
      <div className={this.props.view === 'about' ? "aboutContainer" : "hide"}>
        <div className="about"> 
          <div className="title">
            <Header>             
              <Icon name="user"></Icon>
              &nbsp;About 
            </Header>
          </div>
          <div className="sections">
            <div clasName="section overview"> Overview </div>
            <div clasName="section workAndEducation"> Work and Education </div>
            <div clasName="section placesLived"> Places Lived </div>
            <div clasName="section contactAndBasicInfo"> Contact and Basic Info </div>
            <div clasName="section familyAndRelationships"> Family and Relationships </div>
            <div clasName="section otherDetails"> Other Details </div>
            <div clasName="section lifeEvents"> Life Events </div>
          </div>
          <div className="sectionDetails">
            <List divided verticalAlign='middle'>
              <List.Item>
                <List.Content floated='right'>
                  <Button>Add</Button>
                </List.Content>
                <List.Content>
                  Lena
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated='right'>
                  <Button>Add</Button>
                </List.Content>
                <List.Content>
                  Lindsay
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated='right'>
                  <Button>Add</Button>
                </List.Content>
                <List.Content>
                  Mark
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated='right'>
                  <Button>Add</Button>
                </List.Content>
                <List.Content>
                  Molly
                </List.Content>
              </List.Item>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile_about;