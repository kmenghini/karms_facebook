CREATE SCHEMA fb;
-- SERIAL- adds not null constraint, should increment by 1 for each new entry
CREATE TABLE fb.users (
    id SERIAL PRIMARY KEY,
    username VARCHAR (25),
    picture_url VARCHAR(255)
)

CREATE TABLE fb.posts (
    id SERIAL PRIMARY KEY,
    post_text VARCHAR (255),
    post_timestamp TIMESTAMP WITH TIME ZONE,
    user_id INTEGER REFERENCES user(id)
)

CREATE TABLE fb.user_friends (
    user_id INTEGER REFERENCES user(id),
    friend_id INTEGER REFERENCES user(id)
)

CREATE TABLE fb.user_posts_liked (
    user_id INTEGER REFERENCES user(id),
    post_id INTEGER REFERENCES post(id)
)

