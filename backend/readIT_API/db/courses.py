from ..db import connection


def get_main_course_info():
    connection.execute("SELECT * FROM readit.course")
    records = connection.fetchall()
    from pprint import pprint

    courses = [dict(row) for row in records]

    def get_blocks(id_):
        connection.execute(f"SELECT * FROM readit.course_block WHERE id={id_}")
        records = connection.fetchall()
        return [dict(row)["block"] for row in records]

    def get_periods(id_):
        connection.execute(f"SELECT * FROM readit.course_period WHERE id={id_}")
        records = connection.fetchall()
        return [dict(row)["period"] for row in records]

    def combine_data(course):
        course["blocks"] = get_blocks(course["id"])
        course["periods"] = get_periods(course["id"])
        return course

    courses = [combine_data(course) for course in courses]
    return courses
