const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const db = require('../database-posgtres/index.js');
// const sequelize =
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));


let port = 3000;

// Get all posts
app.get('/:username/posts', function(req, res) {
  console.log("getting all posts");
  db.getAllPosts((err, data) => {
    console.log("Error", err, "data", data);
    if (err) {
      console.log('This is my error', err);
      res.sendStatus(404);
    } else {
      console.log('This is my error', data);
      res.status(200).json(data);
    }
  })
});

// Get posts by a certain user
app.get('/:username/posts/:otherusername', function(req, res) {
  res.json(`hi from GET user posts, ${req.params.username}, here are ${req.params.otherusername}'s posts`);
});

// Add new post to database
app.post('/:username/posts', function(req, res) {
  console.log(req.params.username);
  console.log(req.body.text);		
  db.createPost(req.params.username, req.body.text, (err, data) => {
    if (err) {		
      res.sendStatus(404);		
    } else {		
      res.sendStatus(200);		
    }		
  })		
  // res.send(`hi from POST new post, ${req.params.username}, I made a post with this text "${req.body.text}"`);		
  res.send(`hi from POST new post, ${req.params.username}, I made a post with this text "${req.body.text}"`);
});

app.get('/:username/search/:otherusername', function(req, res) {
  db.searchSomeone(req.params.otherusername, (err, res) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(res);
    }
  })
});

app.get('/:username/:user', function(req, res) {
  // db.
});

// Get info about single user to load their profile
app.get('/:username', (req, res) => {
  var username = req.params.username;
  res.json(`searching db for user ${username}`);
  //if db includes username, respond with their info
});

// Add new user to db
app.post('/:username', (req, res) => {
  var username = req.params.username;
  var newUserData = {
    username: req.body.username,
    pictureUrl: req.body.pictureUrl,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }
  res.json(`new user: ${newUserData.username} adding to db`);
});

// Get info about single user to load their profile
app.get('/:username', (req, res) => {
  var username = req.params.username;
  res.json(`searching db for user ${username}`);
  //if db includes username, respond with their info
});

// Add new user to db
app.post('/:username', (req, res) => {
  var username = req.params.username;
  var newUserData = {
    username: req.body.username,
    pictureUrl: req.body.pictureUrl,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }
  res.json(`new user: ${newUserData.username} adding to db`);
});

app.listen(process.env.PORT || port, function() {
  console.log(`listening on port ${port}`);
});
