INSERT INTO prog_date_time_progress (user_id, progress_for_the_day, random_challenge_for_the_day, total_progress, what_time_is_it, updated_goal_res)
VALUES (${user_id}, ${progress_for_the_day}, ${random_challenge_for_the_day}, ${goal_prog}, CURRENT_TIMESTAMP, totalProgress);

SELECT * FROM prog_date_time_progress 
WHERE user_id = ${user_id}
