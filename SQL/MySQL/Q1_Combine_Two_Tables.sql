-- https://leetcode.com/problems/combine-two-tables?envType=problem-list-v2&envId=db-db1-sql-i

SELECT 
    p.firstName, 
    p.lastName, 
    NULLIF(a.city, '') AS city, 
    NULLIF(a.state, '') AS state
FROM Person p
LEFT JOIN Address a 
    ON p.personId = a.personId;
