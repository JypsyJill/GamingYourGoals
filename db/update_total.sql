INSERT INTO prog_date_time_progress (user_id, progress_for_the_day, random_challenge_for_the_day, total_progress, what_time_is_it, howmanywritten, updated_goal_res, thediff, minimumrand, currentaverage, maxrand)
VALUES (${user_id}, ${progress_for_the_day}, ${random_challenge_for_the_day}, ${total_progress}, CURRENT_TIMESTAMP, ${totalProgress}, ${updated_goal_res}, ${thediff}, ${minimumrand}, ${currentaverage}, ${maxrand});

SELECT * FROM prog_date_time_progress 
WHERE user_id = ${user_id}
