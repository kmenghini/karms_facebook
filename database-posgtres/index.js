const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres@localhost:5432/fb_database' || process.env.DATABASE_URL,
  ssl: true
});

client.connect();
console.log('Connected!');
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
    console.log('This is my client', client);
    let queryStr =
      `INSERT INTO posts (post_text, user_id) 
      VALUES ("${text}", (SELECT id FROM users 
      WHERE username = "${username}"))`;
    console.log('This is my query string', queryStr);
    client.query(queryStr, (err, res) => {
      if (err) callback(err, null);
      console.log('Posting!');
      callback(null, res.rows);
      // client.end();
    });		
  },
  searchSomeone: (name, callback) => {
    const queryStr = 'SELECT * FROM users WHERE username LIKE `%${user}%`'; // selects all names that begin with searched query
    // const queryStr = "SELECT * FROM users WHERE username LIKE '%'+user+'%';"; // if back ticks does not work
    client.query(queryStr, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
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

