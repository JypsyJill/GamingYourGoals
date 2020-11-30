INSERT INTO goal_diggers (email, username, password)
VALUES ($1, $2, $3)
RETURNING *;