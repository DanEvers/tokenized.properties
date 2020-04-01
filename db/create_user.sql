INSERT INTO users (email, password, firstname, lastname, country)
VALUES ($1, $2, $3, $4, $5);

-- SELECT user_id, email FROM users
-- WHERE email = $1;