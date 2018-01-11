const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

module.exports = {
  getAllUsers: (callback) => {
    client.query('SELECT * FROM users;', (err, res) => {
      if (err) callback(err, null);
      callback(null, res.rows);
      // for (let row of res.rows) {
      //   console.log(JSON.stringify(row));
      // }
      // client.end();
    });
  },
  createPost: (username, text, callback) => {		
    let queryStr = 		
      `INSERT INTO posts (post_text, user_id) \ 		
       VALUES (${text}, (SELECT id FROM users \ 		
       WHERE username = ${username}))`		
    client.query(queryStr, (err, res) => {		
      if (err) callback(err, null);				
      callback(null, res.rows);
      // client.end();
    });		
  }
}