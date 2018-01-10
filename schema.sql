DROP DATABASE IF EXISTS fb_database;
CREATE DATABASE fb_database;

\c fb_database;

-- SERIAL- adds not null constraint, should increment by 1 for each new entry
CREATE TABLE users (
    username VARCHAR (25) PRIMARY KEY,
    first_name VARCHAR (25),
    last_name VARCHAR (25),
    picture_url VARCHAR(255)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    post_text VARCHAR (1000),
    post_timestamp TIMESTAMP WITH TIME ZONE,
    username VARCHAR (25) REFERENCES users(username)
);

--insert or update on table "user_friends" violates foreign key constraint "user_friends_friend_fkey"
--refactor, issue due to possible foreign key constraint
CREATE TABLE user_friends (
    username VARCHAR(25) REFERENCES users(username),
    friend VARCHAR(25) REFERENCES users(username)
);

CREATE TABLE user_posts_liked (
    username VARCHAR(25) REFERENCES users(username),
    post_id INTEGER REFERENCES posts(id)
);

--dummy data
INSERT INTO users (username, first_name, last_name, picture_url) VALUES ('mattupham', 'Matt', 'Upham', 'http://myImage');
INSERT INTO posts (post_text, username) VALUES ('my post', 'mattupham');
INSERT INTO user_friends (username, friend) VALUES ('mattupham', 'bobsmith');
INSERT INTO user_posts_liked (username, post_id) VALUES ('mattupham', 1);






-- -- create a db
-- --DROP DATABASE IF EXISTS fb_database;
-- -- CREATE DATABASE fb_database;

-- --connects to database
-- \connect fb_database;

-- -- DEFINE SCHEMA
-- CREATE SCHEMA fb_schema;
-- -- CREATE TABLES

-- -- SERIAL- adds not null constraint, should increment by 1 for each new entry
-- CREATE TABLE fb_schema.users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR (25),
--     picture_url VARCHAR(255)
-- )

-- CREATE TABLE fb_schema.posts (
--     id SERIAL PRIMARY KEY,
--     post_text VARCHAR (255),
--     post_timestamp TIMESTAMP WITH TIME ZONE,
--     user_id INTEGER REFERENCES users(id)
-- )

-- CREATE TABLE fb_schema.user_friends (
--     user_id INTEGER REFERENCES users(id),
--     friend_id INTEGER REFERENCES users(id)
-- )

-- CREATE TABLE fb_schema.user_posts_liked (
--     user_id INTEGER REFERENCES users(id),
--     post_id INTEGER REFERENCES posts(id)
-- )

