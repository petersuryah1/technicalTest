SELECT SUM(Salary) AS TotalSalary2021
FROM Employee
WHERE YEAR(ReleaseDate) = 2021;