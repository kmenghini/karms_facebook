const express = require('express');
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

let port = 3000;

// Get all posts
app.get('/:username/posts', function(req, res) {
  res.json(`hi from GET all posts, ${req.params.username}, here are all the posts`);
});

// Get posts by a certain user
app.get('/:username/posts/:otherusername', function(req, res) {
  res.json(`hi from GET user posts, ${req.params.username}, here are ${req.params.otherusername}'s posts`);
});

// Add new post to database
app.post('/:username/posts', function(req, res) {
  res.send(`hi from POST new post, ${req.params.username}, I made a post with this text "${req.body.text}"`);
})

app.listen(process.env.PORT || port, function() {
  console.log(`listening on port ${port}`);
});
