INSERT INTO object (object_id, user_id)
VALUES 
($1, $2);

SELECT j.date, j.time, u.firstname, u.lastname, j.jumprun_id, u.user_id
FROM jumpruns j
JOIN users u ON j.user_id = u.user_id;