INSERT INTO objects_table (img, address, city, state, zip, description, yearbuilt, bedrooms, bathrooms, parking, heating, cooling, size, pricesqft, price, distribution, ipt, user_id)
VALUES 
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17,$ 18);

SELECT * FROM objects_table
WHERE user_id = $18;