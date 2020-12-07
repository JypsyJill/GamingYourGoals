CREATE TABLE goal_diggers (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(60) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password TEXT NOT NULL,
    telno VARCHAR NOT NULL
  ); 

CREATE TABLE goal (
    goal_id SERIAL PRIMARY KEY,
    goal_type VARCHAR(20)
    beg_date DATE,
    end_date DATE,
    target_number INTEGER(20),
    time_zone VARCHAR(20),
    time_to_text TIME,
    no_prog_days_of_wk INTEGER,
    no_prog_cal_days DATE
    
);

-- INSERT INTO goal (goal_type, start_date, end_date, target_number, timeZone, timeToText)
-- VALUES ('miles', '2020-12-01', '2020-12-31', 250, 'MST', '05:15:00')

-- CREATE TABLE gamePlay (
--     username INT REFERENCES goal_diggers(username),
--     daily_goals_array 
-- )