# from functools import wraps

import psycopg2
import psycopg2.extras
import sys


def connect():
    # Define our connection string
    conn_string = "host='db' dbname='readit_db' user='docker' password='docker'"

    # print the connection string we will use to connect
    print(f"Connecting to database\n	->{conn_string}")

    # get a connection, if a connect cannot be made an exception will be raised here
    conn = psycopg2.connect(conn_string)

    # conn.cursor will return a cursor object, you can use this cursor to perform queries
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    print("Connected!\n")
    return cursor


connection = connect()


"""
def db_session(db_func):
    def _decorator(*args, **kwargs):
        session = _create_db_session()
        response = db_func(session, *args, **kwargs)
        session.close()
        return response
    return wraps(db_func)(_decorator)
"""
