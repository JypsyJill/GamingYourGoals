SELECT * FROM goal
WHERE user_id = $1 AND end_goal > CURRENT_DATE