CREATE DATABASE technicalTest;
USE technicalTest; --to automatically using the database

CREATE TABLE Employee (
    Name VARCHAR(50),
    Position VARCHAR(50),
    JoinDate DATE,
    ReleaseDate DATE,
    YearOfExperience FLOAT,
    Salary DECIMAL(10, 2)
);

INSERT INTO Employee (Name, Position, JoinDate, ReleaseDate, YearOfExperience, Salary)
VALUES
('Jacky', 'Solution Architect', '2018-07-25', '2022-07-25', 8, 150),
('John', 'Assistant Manager', '2016-02-02', '2021-02-02', 12, 155),
('Alano', 'Manager', '2010-11-09', NULL, 14, 175),
('Aaron', 'Engineer', '2021-08-16', '2022-08-16', 1, 80),
('Allen', 'Engineer', '2024-06-06', NULL, 4, 75),
('Peter', 'Team Leader', '2020-01-09', NULL, 3, 85);