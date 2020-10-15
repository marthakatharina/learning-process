DROP TABLE IF EXISTS actors;


CREATE TABLE actors (
    id SERIAL primary key,
    name VARCHAR(255) NOT NULL,
    age INT,
    numberOfOscars INT

);

INSERT INTO actors (name, age, numberOfOscars) VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors (name, age, numberOfOscars) VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (name, age, numberOfOscars) VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors (name, age, numberOfOscars) VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (name, age, numberOfOscars) VALUES ('John Cho', 43, 0);

SELECT * FROM actors; 
-- to see all the table of actors and its content

-- Which actors have more than one oscar?
SELECT * FROM actors WHERE numberOfOscars > 1;

-- Which actors are older than 30 years old?
SELECT * FROM actors WHERE age > 30;