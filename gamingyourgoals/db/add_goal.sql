
INSERT INTO goal (goal_type, beg_date, end_date, target_number, time_zone, time_to_text, no_prog_cal_days, user_id)
VALUES (${goal_type}, ${beg_date}, ${end_date}, ${target_number}, ${time_zone}, ${time_to_text}, ${no_prog_cal_days}, ${userId})

INSERT INTO prog_date_time_progress (user_id, progress_for_the_day, next_date_and_time_to_text, random_challenge_for_the_day, goal_prog, what_time_is_it, howmanywritten, updated_goal_res, datediff, getrndchallengenum)
VALUES (${user_id}, 0, CURRENT_TIMESTAMP (CURRENT_TIMESTAMP + INTERVAL '1 day'), ${random_challenge_for_the_day}, ${goal_prog}, ${CURRENT_TIMESTAMP}, ${howmanywritten}, ${updated_goal_res} ${datediff}, {getrndchallengenum})

