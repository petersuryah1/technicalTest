SELECT Name, Position, YearOfExperience, Salary
FROM Employee
WHERE Position = 'Engineer' AND YearOfExperience <= (
    SELECT MAX(YearOfExperience)
    FROM Employee
    WHERE Position = 'Engineer' AND YearOfExperience <= 3
);