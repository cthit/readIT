from flask import Flask
import readIT_API.routes 

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


