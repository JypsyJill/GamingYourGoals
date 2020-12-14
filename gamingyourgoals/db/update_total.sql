INSERT INTO prog_date_time_progress (user_id, progress_for_the_day, next_date_and_time_to_text, random_challenge_for_the_day, goal_prog, what_time_is_it, howmanywritten, updated_goal_res)
VALUES (${user_id}, ${progress_for_the_day}, ${next_date_and_time_to_text}, ${random_challenge_for_the_day}, ${goal_prog}, CURRENT_TIMESTAMP, 0, goal_prog );

SELECT * FROM prog_date_time_progress 
WHERE user_id = ${user_id}
