import React from 'react';
import { Button } from 'semantic-ui-react';

class Profile_navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log('view....', this.props.view);
    return (
     <div className="profileNavigation">
        <Button.Group floated="right" basic compact fluid labeled className="navigationButtons">
          <Button id="Timeline" className={this.props.view === 'Timeline' ? "active" : ""} onClick={(e) => this.props.handleNavigation(e)}> Timeline </Button>
          <Button id="about" className={this.props.view === 'about' ? "active" : ""} onClick={(e) => this.props.handleNavigation(e)}> About </Button>
          <Button id="friends" className={this.props.view === 'friends' ? "active" : ""} onClick={(e) => this.props.handleNavigation(e)}> Friends </Button>
          <Button id="photos" className={this.props.view === 'photos' ? "active" : ""} onClick={(e) => this.props.handleNavigation(e)}> Photos </Button> 
          <Button id="more" className={this.props.view === 'more' ? "active" : ""} onClick={(e) => this.props.handleNavigation(e)}> More </Button>
        </Button.Group>  
      </div>
    );
  }
}

export default Profile_navigation;