UPDATE object_table
SET img = $1,



WHERE post_id = $8;

SELECT * FROM posts
WHERE posts.post_id = $8;