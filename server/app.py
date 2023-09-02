from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
# app.config["MONGO_URI"] = "mongodb://localhost/testApp"
# mongo = PyMongo(app)

CORS(app)

# db = mongo.db.users


@app.route("/")
def index():
    return "<h1>Hello World</h1>"


@app.route("/increment", methods=["POST"])
def increment():
    message = request.json['message']
    print(message, 'print message')
    answer = int(message) * 100
    return {"answer": answer}


if __name__ == "__main__":
    app.run(debug=True)
