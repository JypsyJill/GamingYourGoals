CREATE TABLE goal_digger (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(60) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password TEXT NOT NULL,
    telephoneNo VARCHAR(12) 
); 

INSERT INTO goal_diggers (email, username, password, telephoneNo)
VALUES (jillyn_oc_ca@yahoo.com, jypsyjill, Junker001!, 8016964560);

CREATE TABLE goals (
    goal_id SERIAL PRIMARY KEY,
    goal_type VARCHAR(20)
    start_date DATE,
    end_date DATE,
    target_number INTEGER(20),
    timeZone VARCHAR(20),
    timeToText TIMESTAMP
    
);

INSERT INTO goals (goal_type, start_date, end_date, target_number, timeZone, timeToText)
VALUES ('miles', 2020-12-01, 2020-12-31, 250, 'MST', 05:15:00)

CREATE TABLE gamePlay (
    username INT REFERENCES goal_diggers(username),
    dailyGoalsArray 
)