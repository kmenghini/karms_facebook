import React from 'react';
import { Card, Icon, Button, Label, Comment } from 'semantic-ui-react';
import moment from 'moment';
import axios from 'axios';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likeCount: 0
    };
  }
  getLikeAmount() {
    let username = 'albertchanged';
    axios.get(`${username}/likes`, {})
      .then((res) => {
        console.log('This is the number of likes', res);
      })
      .catch((err) => {
        console.error('This is the error', err);
      })
  }
  toggleLike() {
    this.setState({
      liked: !this.state.liked
    })
    let username = 'albertchanged';
    let friendname = 'mattupham';
    // let timestampReplaceT = this.props.post.post_timestamp.replace('T', ' ');
    // let indexOfDot = this.props.post.post_timestamp.indexOf('.');
    // let indexOfHyphen = this.props.post.post_timestamp.indexOf('-');
    // let timestamp = timestampReplaceT.substring(0, indexOfDot) + timestampReplaceT.substring(indexOfHyphen, timestampReplaceT.length) + '00';
    // console.log(timestamp);
    // if (this.state.liked) {
      // query db to add like entry
      console.log(this.props.post.post_text, ' at: ', this.props.post.post_timestamp);
      console.log('Are you liking');
      axios.post(`${username}/likes/${username}`, { 'text': this.props.post.post_text })
        .then((res) => {
          console.log('This is the res', res);
        })
        .catch((err) => {
          console.log('This is the err', err);
        })
    // } else {
      // query db to remove like entry
    // }
        this.getLikeAmount();
    console.log('Liked!');
  }
  render() {
    return(
      <div className="postCard">
        <Card fluid>
          <div className="postOverall">
            <div className="postHeader">
              <img className="postPic" src="https://www.doghealth.com/images/stories/doghealth/front_page_puppy.jpg"/>
              <div className="postBody">
                <p className="postName">
                  <strong><a href="">{this.props.post.first_name}&nbsp;{this.props.post.last_name}</a></strong>
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
                  {(this.state.liked) ? this.state.likeCount-- : this.state.likeCount++} {(this.state.likeCount === 1) ? 'Likes' : 'Like'}
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