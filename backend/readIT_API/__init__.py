from flask import Flask, jsonify
from .db.courses import get_all_course_info, get_single_course_info


app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/courses")
def get_courses_info():
    response = get_all_course_info()
    return jsonify(response), 200, {"Access-Control-Allow-Origin": "*"}


@app.route("/course/<string:course_code>")
def get_course_info(course_code):
    response = get_single_course_info(course_code)
    return jsonify(response), 200, {"Access-Control-Allow-Origin": "*"}


@app.route("/course/", methods=["POST"])
def create_new_course():
    response = None
    return jsonify(response), 201, {"Access-Control-Allow-Origin": "*"}
