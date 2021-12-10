CREATE TABLE days (
  id SERIAL,
  name TEXT
);


CREATE TABLE objectives {
  id SERIAL,
  question TEXT,
  day_id INTEGER 
};


SELECT days.id, objectives.question 
FROM days
INNER JOIN objectives
ON objectives.day_id = days.id;

