#!/usr/bin/env sh

DEFAULT_USER='postgres'
DEFAULT_HOST='localhost'
DEFAULT_DB='readit_db'
DEFAULT_SCHEMA='readit'
DEFAULT_FOLDER='sql'
DB_USER=${1:-$DEFAULT_USER}
DB_HOST=${2:-$DEFAULT_HOST}
DB_DB=${3:-$DEFAULT_DB}
DB_SCHEMA=${4:-$DEFAULT_SCHEMA}
SQL_FOLDER=${5:-$DEFAULT_FOLDER}

BASE_DIR="$(dirname "$0")"

(
    cd $BASE_DIR/sql
    psql \
      -X \
      -U $DB_USER \
      -h $DB_HOST \
      -f create_database.sql \
      --echo-all \
      --set AUTOCOMMIT=off \
      --set ON_ERROR_STOP=on


    psql \
      -X \
      -U $DB_USER \
      -h $DB_HOST \
      -f create_schema.sql \
      --echo-all \
      --set AUTOCOMMIT=off \
      --set ON_ERROR_STOP=on \
      $DB_DB

    psql \
      -X \
      -U $DB_USER \
      -h $DB_HOST \
      -f create_courses_tables.sql \
      --echo-all \
      --set AUTOCOMMIT=off \
      --set ON_ERROR_STOP=on \
      $DB_DB
)