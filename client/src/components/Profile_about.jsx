import React from 'react';
import { Divider, Header, List, Icon, Grid, Image, Button } from 'semantic-ui-react';
import Profile_about_overview from './Profile_about_overview.jsx';
import Profile_about_profileAndCoverPicture from './Profile_about_profileAndCoverPicture.jsx';

class Profile_about extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.view,
      aboutView: 'overview'
    }
  }

  changeAboutView(e) {
    this.setState({
      aboutView: e.target.id
    });
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
            <div className={this.state.aboutView === 'overview' ? "section active" : "section"} onClick={(e) => this.changeAboutView(e)} id="overview"> Overview </div>
            <div className={this.state.aboutView === 'workAndEducation' ? "section active" : "section"} onClick={(e) => this.changeAboutView(e)} id="workAndEducation"> Work and Education </div>
            <div className={this.state.aboutView === 'placesLived' ? "section active" : "section"} onClick={(e) => this.changeAboutView(e)} id="placesLived"> Places Lived </div>
            <div className={this.state.aboutView === 'contactAndBasicInfo' ? "section active" : "section"} onClick={(e) => this.changeAboutView(e)} id="contactAndBasicInfo"> Contact and Basic Info </div>
            <div className={this.state.aboutView === 'familyAndRelationships' ? "section active" : "section"} onClick={(e) => this.changeAboutView(e)} id="familyAndRelationships"> Family and Relationships </div>
            <div className={this.state.aboutView === 'otherDetails' ? "section active" : "section"} onClick={(e) => this.changeAboutView(e)} id="otherDetails"> Other Details </div>
            <div className={this.state.aboutView === 'lifeEvents' ? "section active" : "section"} onClick={(e) => this.changeAboutView(e)} id="lifeEvents"> Life Events </div>
            {
              this.props.isOwner ? 
              <div className={this.state.aboutView === 'profileAndCoverPicture' ? "section active" : "section"} id="profileAndCoverPicture" onClick={(e) => this.changeAboutView(e)}> Profile / Cover Picture </div>
              :
              <div></div>
            }
          </div>
          <div className="sectionDetails">
            <Profile_about_overview aboutView={this.state.aboutView} profilePageInfo={this.props.profilePageInfo} updateProfile={this.props.updateProfile} isOwner={this.props.isOwner} />
            <Profile_about_profileAndCoverPicture aboutView={this.state.aboutView} profilePageInfo={this.props.profilePageInfo} updateProfile={this.props.updateProfile} isOwner={this.props.isOwner} />
          </div>  
        </div>
      </div>
    );
  }
}

export default Profile_about;