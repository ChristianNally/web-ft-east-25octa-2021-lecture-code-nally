
CREATE TABLE days (
  id SERIAL,
  name TEXT 
);

22, "Week 5 Day 2: Database Design"


-- SELECT * FROM table1
-- INNER JOIN table2
-- ON table1.id = table2.one_id


CREATE TABLE objectives (
  id SERIAL,
  question TEXT,
  answer TEXT,
  day_id INTEGER
);

1, 'what is the answer to life the universe and everything?', 42, 22
2, 'what is the question to life the universe and everything?', 42, 22

-- CREATE TABLE objectives_video_timepoints (
--   id SERIAL,
--   objective_id INTEGER,
--   video_timepoint_id INTEGER
-- );

-- 1, 1, 1
-- 2, 1, 2
-- 3, 2, 1
-- 4, 2, 2

-- CREATE TABLE video_timepoints (
--   id SERIAL,
--   video TEXT,
--   timepoint DATE,
-- )

-- 1, 'http://example.com/video22.mov', "1:10:13"
-- 2, 'http://example.com/video22.mov', "1:20:23"






-- CREATE TABLE user ( -- millions of users
--   id SERIAL,
--   email TEXT,
--   username TEXT
-- );

-- CREATE TABLE admins ( -- only 5 to a dozen
--   id SERIAL,
--   user_id INTEGER UNIQUE,
--   admin_section TEXT
-- )







-- SELECT days.id, objectives.question 
-- FROM days
-- INNER JOIN objectives
-- ON objectives.day_id = days.id;

