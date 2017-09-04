from flask import Flask, Response
from .courses import get_main_course_info
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/courses')
def main_course_info():
    resp = Response(get_main_course_info())
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
