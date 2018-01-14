import React from 'react';
import { Divider, Header, List, Icon, Grid, Image, Button } from 'semantic-ui-react';

class Profile_about extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.view,
      sectionView: overview
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
            <div className="sectionDetailsOverview">
            
            </div>
            <div clasName="section workAndEducation"> Work and Education </div>
            <div clasName="section placesLived"> Places Lived </div>
            <div clasName="section contactAndBasicInfo"> Contact and Basic Info </div>
            <div clasName="section familyAndRelationships"> Family and Relationships </div>
            <div clasName="section otherDetails"> Other Details </div>
            <div clasName="section lifeEvents"> Life Events </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile_about;