from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import main

app = Flask(__name__)
CORS(app)


# @app.route('/api/img/detect', methods=['POST'])
# def detect():
#     url = request.form['url']
#     string = main.getDetectedImage(url)
#     if string == "":
#         return "No Face Detected :("
#     return send_file(string, mimetype='image/png')

# @app.route('/api/img/detect', methods=['POST'])
# def detect():
#     url = request.args['url']
#     string = main.getDetectedImage(url)
#     if string == "":
#         return "No Face Detected :("
#     return send_file(string, mimetype='image/png')

@app.route('/api/img/detect', methods=['POST'])
def detect():
    jsonData = request.get_json()
    url = jsonData['url']
    string = main.getDetectedImage(url)
    if string == "":
        return jsonify(url="No Face Detected :(")
    res = jsonify(url=string)
    return res


@app.route('/api/img/gender', methods=['POST'])
def gender():
    jsonData = request.get_json()
    url = jsonData['url']
    gen = main.getGender(url)
    return gen


@app.route('/api/img/age', methods=['POST'])
def age():
    jsonData = request.get_json()
    url = jsonData['url']
    years = main.getAge(url)
    return years


if __name__ == '__main__':
    app.run(debug=True)
