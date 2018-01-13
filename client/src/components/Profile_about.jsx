import React from 'react';
import { Divider, Header, List, Icon, Grid, Image } from 'semantic-ui-react';

class Profile_about extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.view
    }
  }

  render() {
    return (
      <div className={this.props.view === 'about' ? "about" : "hide"}>
        <Header> About </Header>
      </div>
    );
  }
}

export default Profile_about;