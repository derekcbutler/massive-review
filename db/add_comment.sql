INSERT INTO posts (topic, text)
VALUES ($1, $2);

RETURNING *;