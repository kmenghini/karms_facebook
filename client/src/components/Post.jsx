import React from 'react';
import { Card, Icon, Button, Label, Comment } from 'semantic-ui-react';
import moment from 'moment';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,
      clickedUsername: '',
      redirect: false,
      likers: '',
      personalLikeCount: 0
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
    this.executeToggleLike();
  }
  executeToggleLike() {
    let username = this.props.name;
    console.log(username);
    // let timestampReplaceT = this.props.post.post_timestamp.replace('T', ' ');
    // let indexOfDot = this.props.post.post_timestamp.indexOf('.');
    // let indexOfHyphen = this.props.post.post_timestamp.indexOf('-');
    // let timestamp = timestampReplaceT.substring(0, indexOfDot) + timestampReplaceT.substring(indexOfHyphen, timestampReplaceT.length) + '00';
    // console.log(timestamp);
    // console.log(this.props.post.post_text, ' at: ', this.props.post.post_timestamp);

    // Get the author's username
    axios.get(`/${username}/post/author`, { params: { 'text': this.props.post.post_text }})
      .then((author) => {
        console.log('author', author.data[0].username);
        // Get the number of times you have liked the post
        axios.get(`/${username}/likes`, { params: { 'text': this.props.post.post_text }})
          .then((count) => {
            let personalLikeCount = count.data[0].count;
            console.log(`${username} has liked this post ${personalLikeCount} times`);
            // If you haven't liked it yet
            if (personalLikeCount < 1) {
              axios.post(`/likes/${author.data[0].username}`, { 'text': this.props.post.post_text, 'username': username })
                .then((res) => {
                  console.log(`${username} has liked the post!`);
                  this.getLikers();
                  this.getLikeAmount();
                })
                .catch((err) => {
                  console.error('This is the err', err);
                })
            } else { // Time to unlike!
              axios.delete(`/likes/${author.data[0].username}`, { params: { 'text': this.props.post.post_text, 'username': username }})
                .then((res) => {
                  console.log(`${username} has unliked the post!`);
                  this.getLikers();
                  this.getLikeAmount();
                })
                .catch((err) => {
                  console.error('This is the err', err);
                })
            }
          })
          .catch((err) => {
            console.log('Error getting personal like count', err);
          })
      })
      .catch((err) => {
        console.error('Error', err);
      })
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
  getLikers() {
    axios.get('/likers', { params: { 'text': this.props.post.post_text }})
      .then((likers) => {
        console.log('Got all likers', likers);
        let likerStr = ''
        likers.data.map((liker) => {
          likerStr += `${liker.first_name} ${liker.last_name}<br>`
        })
        console.log(likerStr);
        this.setState({
          likers: likerStr
        })
      })
      .catch((err) => {
        console.log('Error getting likers', err);
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
              <Button onMouseOver={this.getLikers.bind(this)} data-multiline='true' data-tip={this.state.likers}className="likeButton" onClick={this.toggleLike.bind(this)} as='div' labelPosition='right'>
                <Button className="likeHeartButton">
                  <Icon name="heart" />
                  {(this.state.likeCount)}&nbsp;{(this.state.likeCount !== 1) ? 'likes' : 'like'}
                </Button>
              </Button>
              <ReactTooltip />
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