const { Client } = require('pg');
console.log('Initializing client');
console.log('This is the database url', process.env.DATABASE_URL);
const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgres://rngo@localhost:5432/fb_database'
});

client.connect();
module.exports = {
  getAllUsers: (callback) => {
    client.query('SELECT * FROM users;', (err, res) => {
      if (err) callback(err, null);
      callback(null, res.rows);
    });
  },
  createPost: (username, text, callback) => {
    // console.log('This is my client', client);
    let queryStr =
      `INSERT INTO posts (post_text, user_id)
      VALUES ('${text}', (SELECT id FROM users WHERE username = '${username}'))`;
    // console.log('This is my query string', queryStr);
    client.query(queryStr, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('Posting!');
        callback(null, res.rows);
      }
      // client.end();
    });
  },
  likePost: (author, text, username, callback) => {
    let queryStr = 
    `INSERT INTO user_posts_liked (user_id, post_id) 
    VALUES ((SELECT id FROM users WHERE username = '${username}'),
    (SELECT posts.id FROM posts INNER JOIN users ON users.id = 
      posts.user_id AND posts.post_text = 
      '${text}' AND posts.user_id = 
      (SELECT id FROM users WHERE username = '${author}')))`;
      // console.log('This is my queryStr', queryStr);
      // console.log('In DB', username);
      // console.log('In DB', author);
      // console.log('In DB', text);
    client.query(queryStr, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        // console.log('Liking post!');
        callback(null, res.rows);
      }
    })
  },
  unlikePost: (author, text, username, callback) => {
    let queryStr = 
    `DELETE FROM user_posts_liked WHERE user_id = 
    (SELECT id FROM users WHERE username = '${username}')
    AND post_id = (SELECT posts.id FROM posts INNER JOIN users ON users.id = 
      posts.user_id AND posts.post_text = 
      '${text}' AND posts.user_id = 
      (SELECT id FROM users WHERE username = '${author}'))`;
      console.log('This is my queryStr', queryStr);
      // console.log('In DB', username);
      // console.log('In DB', friendname);
      console.log('In DB', text);
    client.query(queryStr, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('Unliking post!');
        callback(null, res.rows);
      }
    })
  },
  getLikeAmount: (text, callback) => {
    // console.log(username);
    // console.log(text);
    let queryStr =
    `SELECT user_id FROM user_posts_liked WHERE post_id = 
    (SELECT id FROM posts WHERE post_text = '${text}')`;
    // console.log('This is my queryStr', queryStr);
    client.query(queryStr, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        // console.log('Getting number of likes!');
        callback(null, res.rows);
      }
    });
  },
  getLikers: (text, callback) => {
    let queryStr =
    `SELECT users.first_name, users.last_name FROM users INNER JOIN 
    user_posts_liked ON users.id = user_posts_liked.user_id INNER JOIN 
    posts ON posts.id = user_posts_liked.post_id AND posts.post_text = '${text}'`;
    client.query(queryStr, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res.rows);
      }
    })
  },
  searchSomeone: (name, callback) => {
    const queryStr = `SELECT * FROM users WHERE username LIKE '%${name}%';`; // selects all names that begin with searched query
    client.query(queryStr, (err, res) => {
      if (err) {
        // console.log('error inside searchSomeone', err);
        callback(err, null);
      } else {
        callback(null, res.rows);
      }
    });
  },
  getAllPosts: (callback) => {
    let queryStr = 'SELECT posts.*, users.first_name, users.last_name FROM posts INNER JOIN users ON users.id = posts.user_id ORDER BY id DESC';
    client.query(queryStr, (err, res) => {
      if (err) {
        console.log('Error', err);
        callback(err, null);
      } else {
        // console.log('Got all posts!!!!');
        callback(null, res.rows);
      }
    });
  },
  //find select username
  getUser: (username, callback) => {
    console.log('in db getUser, looking for', username)
    client.query(`SELECT * FROM users WHERE username='${username}';`, (err, res) => {
      if (err) {
        console.log('Error', err)
        callback(err, null);
      } else {  
        console.log('searched for user in db')
        callback(null, res.rows);
      }  
    });
  },
  getUsername: (firstname, lastname, callback) => {
    client.query(`SELECT username FROM users WHERE first_name='${firstname}' AND last_name='${lastname}'`, (err, res) => {
      if (err) {
        console.log('Error', err)
        callback(err, null);
      } else {  
        // console.log('Got username from db', res.rows)
        callback(null, res.rows);
      } 
    })
  },
  getPostAuthor: (text, callback) => {
    let queryStr = 
    `SELECT username FROM users INNER JOIN posts ON users.id = posts.user_id
    AND posts.post_text = '${text}'`;
    console.log('This is my query', queryStr);
    client.query(queryStr, (err, res) => {
      if (err) {
        console.log('Error', err);
        callback(err, null);
      } else {
        // console.log('Got post author from db', res.rows);
        callback(null, res.rows);
      }
    })
  },
  //add user to db
  addUser: (userData, callback) => {
    console.log('in db addUser start......', userData)
    client.query(`INSERT INTO users (username, first_name, last_name, picture_url) VALUES ('${userData.username}', '${userData.firstName}', '${userData.lastName}', '${userData.pictureUrl}');`, (err, res) => {
      if (err) {
        console.log('Error', err)
        callback(err, null);
      } else {  
        console.log('added user in db!')
        callback(null, res.rows);
      }
    });
  },      
  getUserPosts: (username, callback) => {
    // var queryStr = `SELECT posts.*, users.* FROM posts INNER JOIN users ON posts.user_id = users.id WHERE users.id = (SELECT users.id FROM users WHERE users.username = ${username})`;
    // var queryStr = `SELECT posts.*, users.first_name, users.last_name FROM posts INNER JOIN users ON users.id = posts.user_id ORDER BY id DESC`;
    var query = {
      text: 'SELECT posts.*, users.* FROM posts INNER JOIN users ON posts.user_id = users.id WHERE users.id = (SELECT users.id FROM users WHERE users.username = $1) ORDER BY posts.id DESC',
      values: [username]
    };
    client.query(query, (err, res) => {
      if (err) {
        console.log('error...', err);
        callback(err, null);
      } else {
        callback(null, res.rows);
      }
    });
  },
  //add 2 rows to user_friends table
  addFriend: (username1, username2, callback) => {
    console.log('in db addFriend')
    let queryStr = `INSERT INTO user_friends (username, friend_id)
      VALUES ('${username1}', (SELECT id FROM users WHERE username='${username2}')),
      ('${username2}', (SELECT id FROM users WHERE username='${username1}'));`
    client.query(queryStr, (err, res) => {
      if (err) {
        console.log('Error', err)
        callback(err, null);
      } else {  
        console.log('Added friendship in database!')
        callback(null, res.rows);
      }  
    });
  },
  findPostsByNonFriends: (username, callback) => {
    console.log('USERNAME IN FIND POSTS BY NON FRIENDS', username)
    // console.log('in db findPostsByNonFriends')
    let queryStr = `SELECT posts.*, users.first_name, users.last_name FROM posts INNER JOIN users ON posts.user_id = users.id WHERE posts.id IN (SELECT users.id FROM USERS WHERE users.id NOT IN (SELECT user_friends.friend_id FROM user_friends WHERE user_friends.username = '${username}')) ORDER BY posts.id DESC;`
    client.query(queryStr, (err, res) => {
      if (err) {
        console.log('Error', err)
        callback(err, null);
      } else {  
        console.log('/:username/posts/friends posts from db...')
        callback(null, res.rows);
      }  
    });
  },
  addFriend: (username, friendToAdd, callback) => {
    var queryOne = `INSERT INTO user_friends (username, friend_id) VALUES ('${username}', (SELECT id FROM users WHERE username = '${friendToAdd}'))`;
    var queryTwo = `INSERT INTO user_friends (username, friend_id) VALUES ('${friendToAdd}', (SELECT id FROM users WHERE username = '${username}'))`;
    client.query(queryOne, (err, res) => {
      if (err) {
        console.log('Error', err)
        callback(err, null);
      } else {  
        console.log('successfully added one permutation of friends');
        client.query(queryTwo, (err, res) => {
          if (err) {
            console.log('Error', err)
            callback(err, null);
          } else {  
            console.log('successfully added both permutations of friends');
            callback(null, res.rows);
          }  
        });
      }  
    });
  },
  removeFriend: (username, friendToRemove, callback) => {
    var queryOne = `DELETE FROM user_friends where username = '${username}' AND friend_id = (SELECT id FROM users WHERE username = '${friendToRemove}')`;
    var queryTwo = `DELETE FROM user_friends where username = '${friendToRemove}' AND friend_id = (SELECT id FROM users WHERE username = '${username}')`;
    client.query(queryOne, (err, res) => {
      if (err) {
        console.log('Error', err)
        callback(err, null);
      } else {  
        console.log('successfully removed one permutation of friends');
        client.query(queryTwo, (err, res) => {
          if (err) {
            console.log('Error', err)
            callback(err, null);
          } else {  
            console.log('successfully removed both permutations of friends');
            callback(null, res.rows);
          }  
        });
      }  
    });
  },
  getFriendsList: (username, callback) => {
    console.log('in db getFriendsList')
    let queryStr = `SELECT users.* FROM users INNER JOIN user_friends ON (user_friends.friend_id = users.id) WHERE user_friends.username = '${username}';`
    client.query(queryStr, (err, res) => {
      if (err) {
        console.log('Error', err)
        callback(err, null);
      } else {  
        console.log('/:username/posts/nonfriends posts from db...')
        // console.log('res', res);
        callback(null, res.rows);
      }  
    });
  }
}

// SELECT posts.*, users.first_name, users.last_name FROM posts INNER JOIN users ON posts.user_id = users.id WHERE posts.id IN (SELECT users.id FROM USERS WHERE users.id NOT IN (SELECT user_friends.friend_id FROM user_friends WHERE user_friends.username = 'mattupham')) ORDER BY posts.id DESC;
