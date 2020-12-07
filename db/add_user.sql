INSERT INTO goal_diggers (email, username, password, telno)
VALUES ($1, $2, $3, $4)
RETURNING *;