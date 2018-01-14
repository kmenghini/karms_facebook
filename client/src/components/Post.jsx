import React from 'react';
import { Card, Icon, Button, Label, Comment } from 'semantic-ui-react';
import moment from 'moment';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likeCount: 0,
      clickedUsername: '',
      redirect: false
    };
  }
  componentDidMount() {
    this.getLikeAmount();
  }
  getLikeAmount() {
    axios.get(`/likes`, { params: { 'text': this.props.post.post_text }})
      .then((res) => {
        console.log('This is the number of likes', res.data.length);
        this.setState({
          likeCount: res.data.length
        })
      })
      .catch((err) => {
        console.error('This is the error', err);
      })
  }
  toggleLike() {
    this.setState({
      liked: !this.state.liked
    })
    this.executeToggleLike();
  }
  executeToggleLike() {
    let username = this.props.name;
    console.log(username);
    // let friendname = this.props.post.username;
    // let timestampReplaceT = this.props.post.post_timestamp.replace('T', ' ');
    // let indexOfDot = this.props.post.post_timestamp.indexOf('.');
    // let indexOfHyphen = this.props.post.post_timestamp.indexOf('-');
    // let timestamp = timestampReplaceT.substring(0, indexOfDot) + timestampReplaceT.substring(indexOfHyphen, timestampReplaceT.length) + '00';
    // console.log(timestamp);
    if (!this.state.liked) {
      // query db to add like entry
      console.log(this.props.post.post_text, ' at: ', this.props.post.post_timestamp);
      axios.get(`/${username}/post/author`, { params: { 'text': this.props.post.post_text }})
        .then((author) => {
          console.log('author', author.data[0].username);
          axios.post(`/likes/${author.data[0].username}`, { 'text': this.props.post.post_text, 'username': this.props.name })
            .then((res) => {
              console.log('Liked!');
              console.log('This is the res', res);
              this.getLikeAmount();
            })
            .catch((err) => {
              console.error('This is the err', err);
            })
        })
        .catch((err) => {
          console.log('Error', err);
        })
    } else {
      axios.get(`/${username}/post/author`, { params: { 'text': this.props.post.post_text }})
        .then((author) => {
          console.log('author', author.data[0].username);
            axios.delete(`/likes/${author.data[0].username}`, { params: { 'text': this.props.post.post_text, 'username': this.props.name }})
            .then((res) => {
              console.log('This is the res', res);
              console.log('Unliked!');
              this.getLikeAmount();
            })
            .catch((err) => {
              console.error('This is the err', err);
            })
        })
        .catch((err) => {
          console.log('Error', err);
        })

    }
  }
  handleClickedProfile() {
    axios.get(`/${this.props.post.first_name}/${this.props.post.last_name}`)
      .then((res) => {
        console.log('This is the username', res);
        this.setState({
          clickedUsername: res.data[0].username
        })
      })
      .catch((err) => {
        console.log('This is the error', err);
      })
    this.setState({
      redirect: true
    })
  }
  render() {
    console.log(this.props.post.first_name);
    let clickedProfilePath = '/' + this.state.clickedUsername + '/profile/' + this.props.name;
    console.log(clickedProfilePath);
    if (this.state.redirect) {
      return <Redirect push to={clickedProfilePath} />;
    }
    return(
      <div className="postCard">
        <Card fluid>
          <div className="postOverall">
            <div className="postHeader">
              <img className="postPic" src="https://www.doghealth.com/images/stories/doghealth/front_page_puppy.jpg"/>
              <div className="postBody">
                <p className="postName">
                  <strong><span onClick={this.handleClickedProfile.bind(this)}>{this.props.post.first_name}&nbsp;{this.props.post.last_name}</span></strong>
                  <br /><span className="postTimestamp">{moment(this.props.post.post_timestamp).fromNow()}</span>
                </p>
              </div>
            </div>
            <hr className="postHorizontal" />
            <p className="postText">{this.props.post.post_text}</p>
            <div className="postButtonRow">
              <Button className="likeButton" onClick={this.toggleLike.bind(this)} as='div' labelPosition='right'>
                <Button className="likeHeartButton">
                  <Icon name="heart" />
                  {(this.state.likeCount)}&nbsp;{(this.state.likeCount !== 1) ? 'likes' : 'like'}
                  {/* {(this.state.liked) ? this.state.likeCount-- : this.state.likeCount++} {(this.state.likeCount === 1) ? 'Likes' : 'Like'} */}
                </Button>
              </Button>
              <Button className="commentButton">
                1 Comment
              </Button>
            </div>
            <hr className="postBottomHorizontal" />
          </div>
          <div className="postCommentOverall">
            <div className="commentOverall">
              <div className="commentHeader">
                <img className="commentPic" src="https://pbs.twimg.com/profile_images/926008201127931904/MQI9hqOg.jpg"/>
                <div className="commentBody">
                  <p className="commentName">
                    <strong><a href="">Fred Zirdung</a></strong>&nbsp;&nbsp;<span className="postTimestamp">a few minutes ago</span>
                    <br /><span className="commentText">Awesome!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default Post;