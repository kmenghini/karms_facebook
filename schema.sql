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

INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (1, 'mattupham', 'Matt', 'Upham', 'https://data.whicdn.com/images/14922648/large.jpg');
INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (2, 'albertchanged', 'Albert', 'Chang', 'https://img.buzzfeed.com/buzzfeed-static/static/2017-07/5/14/enhanced/buzzfeed-prod-fastlane-03/enhanced-17346-1499278727-21.jpg?downsize=715:*&output-format=auto&output-quality=auto');
INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (3, 'rayango', 'Ryan', 'Ngo', 'http://cdn.litlepups.net/2015/08/02/cute-small-dog-breeds-in-india-sweet.jpg');
INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (4, 'kmenghini', 'Kaitlyn', 'Menghini', 'https://lh4.ggpht.com/4nDELzdauqt2pyNaf-JI-ZDo6Ur87KgtQi9ASUaQF-l8qMIfufBXz0FLh1BV5oxGbDw=h900');
INSERT INTO users (id, username, first_name, last_name, picture_url) VALUES (5, 'sjain', 'Shubhra', 'Jain', 'https://petcube.com/blog/content/images/2017/04/kitten-supplies-cover-1.jpg');

CREATE TABLE posts (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    post_text VARCHAR (1000) NOT NULL,
    post_timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO posts (id, user_id, post_text, post_timestamp) VALUES (1, 1, 'matt upham post', '2004-10-19 10:23:54+02');
INSERT INTO posts (id, user_id, post_text, post_timestamp) VALUES (2, 2, 'albert chang post', '2004-10-19 10:23:55+02');
INSERT INTO posts (id, user_id, post_text, post_timestamp) VALUES (3, 3, 'ryan ngo post', '2004-10-19 10:23:56+02');
INSERT INTO posts (id, user_id, post_text, post_timestamp) VALUES (4, 4, 'kaitlyn menghini post', '2004-10-19 10:23:55+02');
INSERT INTO posts (id, user_id, post_text, post_timestamp) VALUES (5, 5, 'shubhra jain post', '2004-10-19 10:23:56+02');

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

CREATE TABLE user_profiles (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    user_id INTEGER REFERENCES users(id),
    user_data jsonb
);

INSERT INTO user_profiles (id, user_id, user_data) VALUES (1, 1,
  '{
    "profile_picture": "https://data.whicdn.com/images/14922648/large.jpg", 
    "cover_picture": "https://static.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    "intro": "I like to play tag", 
    "residence": "San Francisco", 
    "education": "Hack Reactor",
    "work": "Student", 
    "relationship_status": "Single", 
    "birthday": "January 1, 2008"
  }'
);

INSERT INTO user_profiles (id, user_id, user_data) VALUES (2, 2,
  '{
    "profile_picture": "https://img.buzzfeed.com/buzzfeed-static/static/2017-07/5/14/enhanced/buzzfeed-prod-fastlane-03/enhanced-17346-1499278727-21.jpg?downsize=715:*&output-format=auto&output-quality=auto", 
    "cover_picture": "http://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
    "intro": "I like to play frisbee", 
    "residence": "San Francisco", 
    "education": "Hack Reactor",
    "work": "Student", 
    "relationship_status": "Single", 
    "birthday": "December 11, 2017"
  }'
);

INSERT INTO user_profiles (id, user_id, user_data) VALUES (3, 3,
  '{
    "profile_picture": "http://cdn.litlepups.net/2015/08/02/cute-small-dog-breeds-in-india-sweet.jpg", 
    "cover_picture": "https://www.nationalgeographic.com/content/dam/photography/photos/000/000/6.jpg",
    "intro": "I like to run around", 
    "residence": "San Francisco", 
    "education": "Hack Reactor",
    "work": "Student",  
    "relationship_status": "Single", 
    "birthday": "February 27, 2017"
  }'
);  

  INSERT INTO user_profiles (id, user_id, user_data) VALUES (4, 4,
  '{
    "profile_picture": "https://lh4.ggpht.com/4nDELzdauqt2pyNaf-JI-ZDo6Ur87KgtQi9ASUaQF-l8qMIfufBXz0FLh1BV5oxGbDw=h900", 
    "cover_picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/1200px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg",
    "intro": "I like to jump", 
    "residence": "San Francisco", 
    "education": "Hack Reactor",
    "work": "Student",  
    "relationship_status": "Single", 
    "birthday": "February 5, 2017"
  }'
);  

  INSERT INTO user_profiles (id, user_id, user_data) VALUES (5, 5,
  '{
    "profile_picture": "https://petcube.com/blog/content/images/2017/04/kitten-supplies-cover-1.jpg", 
    "cover_picture": "https://fthmb.tqn.com/Eynp5TR-E6oyLoepG69ZgBrfw8M=/3666x2444/filters:fill(auto,1)/MtWhitney_PinyaPhotography_GettyImages_2-56e04db03df78c5ba054f849.jpg",
    "intro": "I like to skip", 
    "residence": "San Francisco", 
    "education": "Hack Reactor",
    "work": "Student",  
    "relationship_status": "Single", 
    "birthday": "February 10, 2017"
  }'
);      