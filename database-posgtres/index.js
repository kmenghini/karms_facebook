const { Client } = require('pg');
console.log('Initializing client');
console.log(process.env.DATABASE_URL);
const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres@localhost:5432/fb_database'
});

client.connect();
console.log('Connected!');
module.exports = {
  getAllUsers: (callback) => {
    client.query('SELECT * FROM users;', (err, res) => {
      if (err) callback(err, null);
      callback(null, res.rows);
    });
  },
  createPost: (username, text, callback) => {
    console.log('This is my client', client);
    let queryStr =
      `INSERT INTO posts (post_text, user_id) 
      VALUES ('${text}', (SELECT id FROM users WHERE username = '${username}'))`;
    console.log('This is my query string', queryStr);
    client.query(queryStr, (err, res) => {
      if (err) callback(err, null);
      console.log('Posting!');
      callback(null, res.rows);
      // client.end();
    });		
  },
  searchSomeone: (name, callback) => {
    const queryStr = ''; // selects all names that begin with searched query
    client.query(queryStr, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    });
  },
  getAllPosts: (callback) => {
    console.log('This is my client', client);
    let queryStr = 'SELECT posts.*, users.first_name, users.last_name FROM posts INNER JOIN users ON users.id = posts.user_id ORDER BY id DESC';
    console.log(queryStr);
    client.query(queryStr, (err, res) => {
      if (err) {
        console.log('Error', err);
        callback(err, null);
      } else {
        console.log('Got all posts!!!!');
        callback(null, res.rows);
      }
    });
  }
}

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

