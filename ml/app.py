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
        return "No Face Detected :("
    return send_file(string, mimetype='image/png')


if __name__ == '__main__':
    app.run(debug=True)
