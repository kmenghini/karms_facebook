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

INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (1, 'mattupham', 'Matt', 'Upham', 'http://fb.com/mattuphamImage');
INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (2, 'albertchanged', 'Albert', 'Chang', 'http://fb.com/albertchangedImage');

CREATE TABLE posts (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    post_text VARCHAR (1000) NOT NULL,
    post_timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
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

CREATE TABLE user_profile (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    profile_picture VARCHAR (100),
    cover_picture VARCHAR (100),
    intro VARCHAR (100),
    residence VARCHAR (100),
    work VARCHAR (100),
    school VARCHAR (100),
    relationship_status VARCHAR (100),
    birthday VARCHAR (100)
);

INSERT INTO user_profile (id, profile_picture, cover_picture, intro, residence, work, school, relationship_status, birthday)/
    VALUES (1, 'https://www.what-dog.net/Images/faces2/scroll001.jpg', 'https://static.pexels.com/photos/210186/pexels-photo-210186.jpeg',/
    'I like to play tag', 'San Francisco', 'Hack Reactor', 'Single', 'January 1, 2008');

INSERT INTO user_profile (id, profile_picture, cover_picture, intro, residence, work, school, relationship_status, birthday)/
    VALUES (2, 'https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg', 'http://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',/
    'I like to play frisbee', 'San Francisco', 'Hack Reactor', 'Single', 'December 11, 2017');    

INSERT INTO user_profile (id, profile_picture, cover_picture, intro, residence, work, school, relationship_status, birthday)/
    VALUES (3, 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Reptiles/A-G/gecko-on-leaf.adapt.945.1.jpg', 'https://www.nationalgeographic.com/content/dam/photography/photos/000/000/6.jpg',/
    'I like to run around', 'San Francisco', 'Hack Reactor', 'Single', 'February 27, 2017');        