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
    return jsonify(gender=gen)


@app.route('/api/img/age', methods=['POST'])
def age():
    jsonData = request.get_json()
    url = jsonData['url']
    years = main.getAge(url)
    return jsonify(age=years)


@app.route('/api/img/verify', methods=['POST'])
def age():
    jsonData = request.get_json()
    url1 = jsonData['url1']
    url2 = jsonData['url2']
    isSame = main.getVerification(url1, url2)
    return jsonify(isSame=isSame)


if __name__ == '__main__':
    app.run(debug=True)
