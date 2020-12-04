INSERT INTO goal_diggers (email, username, password, telephoneno)
VALUES ($1, $2, $3, $4)
RETURNING *;