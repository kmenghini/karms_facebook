const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const db = require('../database-posgtres/index.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));


let port = 3000;

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   })
// });
// Get all posts
app.get('/:username/posts', function(req, res) {
  console.log("getting all posts");
  db.getAllPosts((err, data) => {
    // console.log("Error", err, "data", data);
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
  console.log('username...', req.params.otherusername);
  db.getUserPosts(req.params.otherusername, (error, data) => {
    if (error) {
      console.log(`error retrieving ${req.params.otherusername}'s posts`, error);
    } else {
      console.log('data....', data);
      res.status(200).json(data);
    }
  });
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
      res.status(200).json(data);		
    }		
  })		
});

app.post('/:username/likes/:username', function(req, res) {
  console.log('Are you liking');
  console.log(req.params.username);
  console.log(req.params.username);
  console.log(req.body.text);
  db.likePost(req.params.username, req.params.username, req.body.text, (err, data) => {
    if (err) {
      console.log(res);
      console.log('This is my error', err);
      res.sendStatus(404);		
    } else {
      console.log('This is my data', data);
      res.status(200).json(data);	
    }		
  })
})

app.get('/:username/profile/:user', function(req, res) {
  db.searchSomeone(req.params.user, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('success: ', data);
      res.status(200).json(data);
    }
  });
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

// Get info about single user to load their profile
app.get('/:username', (req, res) => {
  var username = req.params.username;
  res.json(`searching db for user ${username}`);
  //if db includes username, respond with their info
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


app.listen(process.env.PORT || port, function() {
  console.log(`listening on port ${port}`);
});




