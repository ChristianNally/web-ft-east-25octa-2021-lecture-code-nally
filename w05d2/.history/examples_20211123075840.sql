CREATE TABLE days (
  id SERIAL
);


CREATE TABLE objectives {
  id SERIAL,
  question text,
  day_id INTEGER
};



SELECT days.id, objectives.question 
FROM days
INNER JOIN objectives
ON objectives.day_id = days.id;
