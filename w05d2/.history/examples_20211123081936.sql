CREATE TABLE days (
  id SERIAL,
  name TEXT
);


CREATE TABLE objectives {
  id SERIAL,
  question TEXT,
  day_id INTEGER,
  video TEXT,
  timepoint DATE
};

-- CREATE TABLE video_timepoints {
--   id SERIAL,
--   video TEXT,
--   timepoint DATE,
--   objective_id INTEGER UNIQUE
-- }

CREATE TABLE user { -- millions of users
  id SERIAL,
  email TEXT,
  username TEXT
};

CREATE TABLE admins { -- only 5 to a dozen
  id SERIAL,
  user_id INTEGER UNIQUE,
  admin_section TEXT
}

SELECT days.id, objectives.question 
FROM days
INNER JOIN objectives
ON objectives.day_id = days.id;

