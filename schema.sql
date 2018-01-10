DROP DATABASE IF EXISTS fb_database;
CREATE DATABASE fb_database;

\c fb_database;

-- SERIAL- adds not null constraint, should increment by 1 for each new entry
CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    username VARCHAR (25) NOT NULL UNIQUE,
    first_name VARCHAR (25),
    last_name VARCHAR (25),
    picture_url VARCHAR(255)
);

INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (1, 'mattupham', 'matt', 'upham', 'http://fb.com/mattuphamImage');
INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (2, 'albertchanged', 'albert', 'chang', 'http://fb.com/albertchangedImage');

CREATE TABLE posts (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    post_text VARCHAR (1000) NOT NULL,
    post_timestamp TIMESTAMP WITH TIME ZONE
);

INSERT INTO posts (id, user_id, post_text, post_timestamp) VALUES (1, 1, 'matt upham post', '2004-10-19 10:23:54+02');

CREATE TABLE user_friends (
    id SERIAL PRIMARY KEY UNIQUE,
    username VARCHAR(25) REFERENCES users(username) NOT NULL,
    friend_id INTEGER REFERENCES users(id) NOT NULL
);

INSERT INTO user_friends (id, username, friend_id) VALUES (1, 'mattupham', 2);
INSERT INTO user_friends (id, username, friend_id) VALUES (2, 'albertchanged', 1);

CREATE TABLE user_posts_liked (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    user_id INTEGER REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id)
);

INSERT INTO user_posts_liked (id, user_id, post_id) VALUES (1, 2, 1);