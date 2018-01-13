import React from 'react';
import { Button } from 'semantic-ui-react';

class Profile_navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
     <div className="profileNavigation">
        <Button.Group floated="right" basic compact fluid labeled className="navigationButtons">
          <Button className="timeline active"> Timeline </Button>
          <Button className="about" onClick={this.props.handleNavigation.bind(this)}> About </Button>
          <Button className="friends"> Friends </Button>
          <Button className="photo"> Photo </Button> 
          <Button className="more"> More </Button>
        </Button.Group>  
      </div>
    );
  }
}

export default Profile_navigation;