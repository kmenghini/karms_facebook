const Sequelize = require('sequelize');

let sequelize;

if (process.env.DATABASE_URL) {
 // the application is executed on Heroku ... use the postgres database
 sequelize = new Sequelize(process.env.DATABASE_URL, {
   dialect: 'postgres',
   protocol: 'postgres',
   logging: true, //false
 });
} else {
 sequelize = new Sequelize('fb_database', '', '', {
   host: 'localhost',
   dialect: 'postgres',
 });
}

sequelize
 .authenticate()
 .then(() => {
   console.log('Connection has been established successfully.');
 })
 .catch(err => {
   console.error('Unable to connect to the database:', err);
 });

module.exports = sequelize;


const User = sequelize.define('user', {
 id: {
   type: Sequelize.UUID,
   primaryKey: true,
 },
 name: {
   type: Sequelize.STRING,
 },
 role: {
   type: Sequelize.STRING,
 },
});

module.exports = User;