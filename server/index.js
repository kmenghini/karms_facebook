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
      // console.log('This is my data', data);
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
      console.log(res);
      console.log('This is my error', err);
      res.sendStatus(404);		
    } else {
      console.log('This is my data', data);
      res.status(200).json(data);	
    }		
  })		
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

<<<<<<< HEAD
app.get('/:username/:user', function(req, res) {
  // db.
});

// Get info about single user to load their profile
app.get('/:username', (req, res) => {
  var username = req.params.username;
  if (username !== 'favicon.ico') {
    db.getUser(username, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(data);
      }
    })  
  }
});

// Add new user to db
app.post('/:username', (req, res) => {
  var username = req.params.username;
  if (username !== 'favicon.ico') {
    var newUserData = {
      username: req.body.username,
      pictureUrl: req.body.pictureUrl,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
    db.addUser(newUserData, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(data);
      }
    })
  }  
});
=======
// app.get('/:username/:user', function(req, res) {
//   db.
// })
>>>>>>> merge updates

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
