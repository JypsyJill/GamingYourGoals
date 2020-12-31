CREATE TABLE goal_diggers (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(60) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password TEXT NOT NULL,
    telno VARCHAR NOT NULL
  ); 

CREATE TABLE goal (
    goal_id SERIAL PRIMARY KEY,
    goal_type VARCHAR(20),
    beg_date DATE,
    end_date DATE,
    target_number INTEGER,
    time_zone VARCHAR,
    time_to_text TIME,
    user_id INT REFERENCES goal_diggers(user_id)
    
);

CREATE TABLE prog_date_time_progress (
    user_id INT REFERENCES goal_diggers(user_id),
    progress_for_the_day INTEGER,
    next_date_and_time_to_text DATE,
    random_challenge_for_the_day INTEGER,
    total_progress INTEGER,
    what_time_is_it CURRENT_TIMESTAMP,
    howmanywritten INTEGER,
    updated_goal_res INTEGER,
    thediff INTEGER,
    minimumrand INTEGER, 
    currentaverage INTEGER, 
    maxrand INTEGER
    
)