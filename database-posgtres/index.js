const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT * FROM users;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

var createPost = (username, text, callback) => {
  let queryStr = 
    `INSERT INTO posts (post_text, user_id) \ 
    VALUES (${text}, (SELECT id FROM users \ 
    WHERE username = ${username}))`
  client.query(queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      for (let row of res.rows) {
        callback(null, row);
      }
    }
    client.end();
  });
}

module.exports.createPost = createPost;