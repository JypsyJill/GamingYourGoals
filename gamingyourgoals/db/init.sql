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
    no_prog_days_of_wk INTEGER,
    no_prog_cal_days DATE,
    goal_prog INTEGER, 
    user_id
    
);
