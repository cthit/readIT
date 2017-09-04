import psycopg2
import json
from .postgresql_credentials import credentials

def get_main_course_info():
    conn = psycopg2.connect(dbname=credentials['dbname'], user=credentials['user'])
    cur = conn.cursor()
    table = credentials['schema'] + ".courses"
    query = "SELECT code, name, course_page, type FROM {}".format(table)
    cur.execute(query)
    list = cur.fetchall()
    courses = []
    for item in list:
        course = {}
        course['code'] = item[0]
        course['name'] = item[1]
        course['course_page'] = item[2]
        course['type'] = item[3]
        course['periods'] = []
        course['blocks'] = []

        table = credentials['schema'] + ".course_periods"
        query = "SELECT period FROM {} WHERE code='{}'".format(table, course['code'])
        cur.execute(query)
        list = cur.fetchall()
        for item in list:
            course['periods'].append(item[0])

        table = credentials['schema'] + ".course_blocks"
        query = "SELECT block FROM {} WHERE code='{}'".format(table, course['code'])
        cur.execute(query)
        list = cur.fetchall()
        for item in list:
            course['blocks'].append(item[0])

        courses.append(course)
    cur.close()
    conn.close()
    data = {}
    data['courses'] = courses
    return json.dumps(data)
