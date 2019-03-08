from ..db import connection


def get_records(conn, query, params=None, single_record=False):
    conn.execute(query, params)
    return conn.fetchall() if not single_record else conn.fetchone()


def get_blocks(conn, id_):
    records = get_records(conn, f"SELECT * FROM readit.course_block WHERE id={id_}")
    return [dict(row)["block"] for row in records]


def get_periods(conn, id_):
    records = get_records(conn, f"SELECT * FROM readit.course_period WHERE id={id_}")
    return [dict(row)["period"] for row in records]


def combine_data(conn, course):
    course["blocks"] = get_blocks(conn, course["id"])
    course["periods"] = get_periods(conn, course["id"])
    return course


def get_all_course_info():
    records = get_records(connection, "SELECT * FROM readit.course")
    courses = [dict(row) for row in records]

    courses = [combine_data(connection, course) for course in courses]
    return courses


def get_single_course_info(course_code):
    record = get_records(
        conn=connection,
        query="SELECT * FROM readit.course WHERE code=%s",
        params=(course_code,),
        single_record=True,
    )
    course = dict(record)
    course = combine_data(connection, course)
    return course
