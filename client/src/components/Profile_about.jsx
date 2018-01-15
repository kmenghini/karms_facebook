import React from 'react';
import { Divider, Header, List, Icon, Grid, Image, Button } from 'semantic-ui-react';
import Profile_about_overview from './Profile_about_overview.jsx';

class Profile_about extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.view,
      aboutView: 'overview'
    }
  }

  render() {
        console.log('profile page info....', this.props.profilePageInfo);
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
            <Profile_about_overview aboutView={this.state.aboutView} profilePageInfo={this.props.profilePageInfo}/>
          </div>  
        </div>
      </div>
    );
  }
}

export default Profile_about;