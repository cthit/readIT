/* CREATE DATABASE readit_db; */

BEGIN;
CREATE SCHEMA IF NOT EXISTS readit;

/* COURSE INFO */

  CREATE TABLE IF NOT EXISTS readit.Course
   (
     id          SERIAL PRIMARY KEY,
     code        VARCHAR(6) UNIQUE,
     name        VARCHAR(30),
     course_page VARCHAR(50) CONSTRAINT check_course_page CHECK (course_page ~* '^https?://.*'),
     type        VARCHAR(10)
   )
 ; /* maybe add created and/or last edited? */

 
  CREATE TABLE IF NOT EXISTS readit.Course_period
   (
     id      INTEGER,
     period  VARCHAR(3) CONSTRAINT check_period CHECK (period ~* '^LP[1-4]$'),
     PRIMARY KEY (id, period),
     FOREIGN KEY (id) REFERENCES readit.Course
   )
 ;

 
  CREATE TABLE IF NOT EXISTS readit.Course_block
   (
     id    INTEGER,
     block VARCHAR(1) CONSTRAINT check_block CHECK (block ~* '^[A-Z]$'),
     PRIMARY KEY (id, block),
     FOREIGN KEY (id) REFERENCES readit.Course
   )
 ;

COMMIT;

/* DEV EXAMPLE DATA */

BEGIN;

INSERT INTO readit.course (code, name, course_page, type) VALUES ('DAT255', 'Software engineering project', 'https://www.youtube.com/watch?v=oHg5SJYRHA0', 'YEAR 2');
INSERT INTO readit.course (code, name, course_page, type) VALUES ('MVE045', 'Matematisk analys', 'https://www.youtube.com/watch?v=oHg5SJYRHA0', 'YEAR 2');

INSERT INTO readit.course_period (id, period) VALUES (1, 'LP1');
INSERT INTO readit.course_period (id, period) VALUES (1, 'LP4');
INSERT INTO readit.course_period (id, period) VALUES (2, 'LP1');

INSERT INTO readit.course_block (id, block) VALUES (1, 'A');
INSERT INTO readit.course_block (id, block) VALUES (2, 'B');

COMMIT;
