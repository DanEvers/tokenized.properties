INSERT INTO users (email, password, firstname, lastname)
VALUES ($1, $2, $3, $4);

-- SELECT user_id, email FROM users
-- WHERE email = $1;