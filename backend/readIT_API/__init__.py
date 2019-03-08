from flask import Flask, jsonify
from .db.courses import get_main_course_info


app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/courses")
def get_courses_info():
    response = get_main_course_info()
    return jsonify(response), 200, {"Access-Control-Allow-Origin": "*"}


@app.route("/courses/", methods=["POST"])
def create_new_course():
    response = None
    return jsonify(response), 201, {"Access-Control-Allow-Origin": "*"}
