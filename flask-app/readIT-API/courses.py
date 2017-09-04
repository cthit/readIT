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
    cur.close()
    conn.close()
    courses = []
    for item in list:
        course = {}
        course['code'] = item[0]
        course['name'] = item[1]
        course['course_page'] = item[2]
        course['type'] = item[3]
        courses.append(course)
    data = {}
    data['courses'] = courses
    return json.dumps(data)
