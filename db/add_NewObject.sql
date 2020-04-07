INSERT INTO objects_table (address, city, state, zip, description, yearbuilt, bedrooms, bathrooms, parking, heating, cooling, size, user_id)
VALUES 
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);

-- SELECT * FROM objects_table
-- WHERE user_id = $13;