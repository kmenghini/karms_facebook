import React from 'react';
import { Divider, Header, List, Icon, Grid, Image, Button, Reveal, Form } from 'semantic-ui-react';

class Profile_about_profileAndCoverPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_pictureView: 'display',
      cover_pictureView: 'display',
      fieldToEdit: ''              
    }
  }

  edit(e) {
    if (Object.values(this.state).indexOf('edit') !== -1) {
      alert('Please finish editing the open field');
      return;
    } 
    var viewToEdit = e.target.id.slice(4, 5).toLowerCase() + e.target.id.slice(5) + 'View';
    var fieldToEdit = e.target.id.slice(4, 5).toLowerCase() + e.target.id.slice(5);
    var editState = {};
    editState[viewToEdit] = 'edit'
    editState['fieldToEdit'] = fieldToEdit;
    this.setState(editState);
  }

  createEditField() {
    return (
      <Form>
        <Form.Field control='textarea' rows='3' id='edits'/>
        <Button color="blue" onClick={this.saveChanges.bind(this)}>
          Save Changes
        </Button>
        <Button onClick={this.cancelEditField.bind(this)}>
          Cancel
        </Button>
      </Form>
    );
  }

  saveChanges() {
    let changes = document.getElementById('edits').value.replace(`'`, `''`);
    document.getElementById('edits').value = '';
    var data = [this.state.fieldToEdit, changes];
    this.props.updateProfile(data);
    this.cancelEditField();
  }

  cancelEditField() {
    this.setState({
      profile_pictureView: 'display',
      cover_pictureView: 'display',
      fieldToEdit: '' 
    });
  }

  render() {
    return (
      <div className={this.props.aboutView === 'profileAndCoverPicture' ? 'profileAndCoverPicture sectionDetails' : 'hide'} >
        <div className="detail profilePicture">
          <Header> Profile Picture </Header>
          <Icon size="large" link name="edit" id="editProfile_picture" onClick={(e) => this.edit(e)}></Icon>
          <Divider />
          {this.state.profile_pictureView === 'display' ? <span> {this.props.profilePageInfo.profile_picture} </span> : this.createEditField()}
        </div> 
        <div className="detail coverPicture">
          <Header> Cover Picture </Header>
          <Icon size="large" link name="edit" id="editCover_picture" onClick={(e) => this.edit(e)}></Icon>
          <Divider />
          {this.state.cover_pictureView === 'display' ? <span> {this.props.profilePageInfo.cover_picture} </span> : this.createEditField()}
        </div> 
      </div>
    );
  }
}

export default Profile_about_profileAndCoverPicture;