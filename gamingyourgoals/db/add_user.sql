INSERT INTO goal_diggers (email, username, password, telephoneNo)
VALUES ($1, $2, $3, $4)
RETURNING *;