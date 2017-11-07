/* DEV EXAMPLE DATA */

BEGIN;

INSERT INTO readit.course (code, name, course_page, type) VALUES ('DAT255', 'Software engineering project', '', 'YEAR 2');
INSERT INTO readit.course (code, name, course_page, type) VALUES ('MVE045', 'Matematisk analys', '', 'YEAR 2');

INSERT INTO readit.course_period (id, period) VALUES (1, 'LP1');
INSERT INTO readit.course_period (id, period) VALUES (1, 'LP4');
INSERT INTO readit.course_period (id, period) VALUES (2, 'LP1');

INSERT INTO readit.course_block (id, period) VALUES (1, 'A');
INSERT INTO readit.course_block (id, period) VALUES (2, 'B');

COMMIT;