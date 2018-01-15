import React from 'react';
import { Divider, Header, List, Icon, Grid, Image, Button, Reveal, Form } from 'semantic-ui-react';

class Profile_about_overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introView: 'display',
      residenceView: 'display',
      workView: 'display',
      educationView: 'display',
      birthdayView: 'display',
      relationship_statusView: 'display',
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
      introView: 'display',
      residenceView: 'display',
      workView: 'display',
      educationView: 'display',
      birthdayView: 'display',
      relationship_statusView: 'display',
      fieldToEdit: '' 
    });
  }

  render() {
    console.log('profile page info....', this.props.profilePageInfo);
    return (
      <div className={this.props.aboutView === 'overview' ? 'overview sectionDetails' : 'hide'} >
        <div className="detail shortIntro">
          <Header> 
            Intro &nbsp;
          </Header>
          {this.props.isOwner ?
            <Icon size="large" link name="edit" id="editIntro" onClick={(e) => this.edit(e)}></Icon>
            :
            <span></span>
          }
          <Divider />
          {this.state.introView === 'display' ? <span> {this.props.profilePageInfo.intro} </span> : this.createEditField()}
        </div> 
        <div className="detail residence">
          <Header> Residence </Header>
          {this.props.isOwner ?
            <Icon size="large" link name="edit" id="editResidence" onClick={(e) => this.edit(e)}></Icon>
            :
            <span></span>
          }
          <Divider />
          {this.state.residenceView === 'display' ? <span> {this.props.profilePageInfo.residence} </span> : this.createEditField()}
        </div> 
        <div className="detail work">
          <Header> Workplace </Header>
          {this.props.isOwner ?
            <Icon size="large" link name="edit" id="editWork" onClick={(e) => this.edit(e)}></Icon>
            :
            <span></span>
          }
          <Divider />
          {this.state.workView === 'display' ? <span> {this.props.profilePageInfo.work} </span> : this.createEditField()}
        </div>
        <div className="detail education">
          <Header> Education </Header>
          {this.props.isOwner ?
            <Icon size="large" link name="edit" id="editEducation" onClick={(e) => this.edit(e)}></Icon>
            :
            <span></span>
          }
          <Divider />
          {this.state.educationView === 'display' ? <span> {this.props.profilePageInfo.education} </span> : this.createEditField()}
        </div>
        <div className="detail birthday">
          <Header> Birthday </Header>
          {this.props.isOwner ?
            <Icon size="large" link name="edit" id="editBirthday" onClick={(e) => this.edit(e)}></Icon>
            :
            <span></span>
          }
          <Divider />
          {this.state.birthdayView === 'display' ? <span> {this.props.profilePageInfo.birthday} </span> : this.createEditField()}
        </div>
        <div className="detail relationship_status">
          <Header> Relationship Status </Header>
          {this.props.isOwner ?
            <Icon size="large" link name="edit" id="editRelationship_status" onClick={(e) => this.edit(e)}></Icon>
            :
            <span></span>
          }
          <Divider />
          {this.state.relationship_statusView === 'display' ? <span> {this.props.profilePageInfo.relationship_status} </span> : this.createEditField()}
        </div>  
      </div>
    );
  }
}

export default Profile_about_overview;