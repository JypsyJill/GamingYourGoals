INSERT INTO goal (goal_type, beg_date, end_date, target_number, time_zone, time_to_text, user_id)
VALUES (${goal_type}, ${beg_date}, ${end_date}, ${target_number}, ${time_zone}, ${time_to_text}, ${userId})

-- INSERT INTO prog_date_time_progress (user_id, progress_for_the_day, next_date_and_time_to_text, random_challenge_for_the_day, goal_prog, what_time_is_it, howmanywritten, updated_goal_res, datediff, getrndchallengenum)
-- VALUES (${user_id}, 0, CURRENT_TIMESTAMP (CURRENT_TIMESTAMP + INTERVAL '1 day'), ${random_challenge_for_the_day}, ${goal_prog}, ${CURRENT_TIMESTAMP}, ${howmanywritten}, ${updated_goal_res} ${datediff}, {getrndchallengenum})


-- /* construct calendar - eliminate Sundays and dates not working */
-- SELECT beg_date, end_date,
--     sum(case when extract (dow from dt) in (1,2,3,4,5,6) then 1 else 0 end) as thediff
-- FROM (
--     SELECT beg_date, end_date,
--         generate_series(beg_date, end_date, '1 day'::interval) as dt
--     FROM goal
--     ) t
--     group by beg_date, end_date;

-- INSERT INTO goal(currentaverage)
-- SELECT DIV(target_number, thediff) AS currentaverage
-- FROM goal WHERE user_id=$1 




/* do initial calculations on initial goal */