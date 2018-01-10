import React from 'react';
import { Card, Icon, Button, Label, Comment } from 'semantic-ui-react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likeCount: 0
    };
  }
  toggleLike() {
    this.setState({
      liked: !this.state.liked
    })
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
                  <strong><a href="">Albert Chang</a></strong>
                  <br /><span className="postTimestamp">a few minutes ago</span>
                </p>
              </div>
            </div>
            <hr className="postHorizontal" />
            <p className="postText">{this.props.postText}</p>
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