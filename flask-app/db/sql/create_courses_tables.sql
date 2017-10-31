/* COURSE INFO */

BEGIN;

CREATE TABLE IF NOT EXISTS readit.course
  (
    id          SERIAL PRIMARY KEY
    code        VARCHAR(6) UNIQUE,
    name        VARCHAR(30),
    course_page VARCHAR(50) CHECK course_page~'^https?://.*',
    type        VARCHAR(10)
  )
; /* maybe add created and/or last edited? */


CREATE TABLE IF NOT EXISTS readit.course_period
  (
    id      INTEGER,
    period  VARCHAR(3) CHECK period~'^LP[1-4]$',
    PRIMARY KEY (id, period),
    FOREIGN KEY (id) REFERENCES readit.courses
  )
;


CREATE TABLE IF NOT EXISTS readit.course_block
  (
    id    INTEGER,
    block VARCHAR(1) CHECK block~'^[A-Z]$',
    PRIMARY KEY (id, block),
    FOREIGN KEY (id) REFERENCES readit.courses
  )
;

COMMIT;

