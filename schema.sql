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
INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (3, 'rayango', 'Ryan', 'Ngo', 'http://fb.com/rayangoImage');
-- INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (3, 'imafriend3', 'Sam', 'Smith', 'http://fb.com/test3');
-- INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (4, 'imafriend4', 'Katie', 'Kelly', 'http://fb.com/test4');
-- INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (5, 'imafriend5', 'James', 'John', 'http://fb.com/test5');
-- INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (6, 'imnotafriend1', 'Cassie', 'Luck', 'http://fb.com/test5');

CREATE TABLE posts (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    post_text VARCHAR (1000) NOT NULL,
    post_timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- INSERT INTO posts (id, user_id, post_text, post_timestamp) VALUES (6, 6, 'imnotafriend1 post', '2004-10-19 10:23:54+02');
INSERT INTO posts (id, user_id, post_text, post_timestamp) VALUES (1, 1, 'matt upham post', '2004-10-19 10:23:54+02');
-- INSERT INTO posts (id, user_id, post_text, post_timestamp) VALUES (3, 3, 'imafriend3', '2004-10-19 10:23:54+02');
-- INSERT INTO posts (id, user_id, post_text, post_timestamp) VALUES (4, 4, 'imafriend4', '2004-10-19 10:23:54+02');
INSERT INTO posts (id, user_id, post_text, post_timestamp) VALUES (2, 2, 'albert chang post', '2004-10-19 10:23:55+02');
INSERT INTO posts (id, user_id, post_text, post_timestamp) VALUES (3, 3, 'ryan ngo post', '2004-10-19 10:23:56+02');

CREATE TABLE user_friends (
    id SERIAL PRIMARY KEY UNIQUE,
    username VARCHAR(25) REFERENCES users(username) NOT NULL,
    friend_id INTEGER REFERENCES users(id) NOT NULL
);

INSERT INTO user_friends (id, username, friend_id) VALUES (1, 'mattupham', 2);
-- INSERT INTO user_friends (id, username, friend_id) VALUES (3, 'mattupham', 3);
-- INSERT INTO user_friends (id, username, friend_id) VALUES (4, 'mattupham', 4);
-- INSERT INTO user_friends (id, username, friend_id) VALUES (5, 'mattupham', 5);
-- INSERT INTO user_friends (id, username, friend_id) VALUES (6, 'mattupham', 6);
INSERT INTO user_friends (id, username, friend_id) VALUES (2, 'albertchanged', 1);
INSERT INTO user_friends (id, username, friend_id) VALUES (3, 'mattupham', 3);
INSERT INTO user_friends (id, username, friend_id) VALUES (4, 'rayango', 1);

CREATE TABLE user_posts_liked (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    user_id INTEGER REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id)
);

INSERT INTO user_posts_liked (id, user_id, post_id) VALUES (1, 2, 1);

CREATE TABLE user_profiles (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    user_data jsonb
);

INSERT INTO user_profiles (id, user_data) VALUES (1,
  '{
    "user_id": 1,
    "profile_picture": "https://www.what-dog.net/Images/faces2/scroll001.jpg", 
    "cover_picture": "https://static.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    "intro": "I like to play tag", 
    "residence": "San Francisco", 
    "work": "Hack Reactor", 
    "relationship_status": "Single", 
    "birthday": "January 1, 2008"
  }'
);

INSERT INTO user_profiles (id, user_data) VALUES (2, 
  '{
    "user_id": 2,
    "profile_picture": "https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg", 
    "cover_picture": "http://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
    "intro": "I like to play frisbee", 
    "residence": "San Francisco", 
    "work": "Hack Reactor", 
    "relationship_status": "Single", 
    "birthday": "December 11, 2017"
  }'
);

INSERT INTO user_profiles (id, user_data) VALUES (3, 
  '{
    "user_id": 3,
    "profile_picture": "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Reptiles/A-G/gecko-on-leaf.adapt.945.1.jpg", 
    "cover_picture": "https://www.nationalgeographic.com/content/dam/photography/photos/000/000/6.jpg",
    "intro": "I like to run around", 
    "residence": "San Francisco", 
    "work": "Hack Reactor", 
    "relationship_status": "Single", 
    "birthday": "February 27, 2017"
  }'
);      